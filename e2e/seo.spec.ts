import { expect, test } from '@playwright/test';
import { content } from '../src/data/content';
import { landingH1, landings, type LandingId } from '../src/data/landings';
import { pendingMarkers } from '../src/data/pending';
import { indexablePaths, routes, type RouteId } from '../src/data/routes';
import { absoluteUrl } from '../src/data/seo';
import type { Locale } from '../src/data/site';

const pages: { route: RouteId; locale: Locale; title: string; h1: string; faqs: number }[] = [
  {
    route: 'home',
    locale: 'es',
    title: content.es.seo.title,
    h1: `${content.es.hero.titleStart} ${content.es.hero.titleAccent} ${content.es.hero.titleEnd}`,
    faqs: 0,
  },
  {
    route: 'home',
    locale: 'va',
    title: content.va.seo.title,
    h1: `${content.va.hero.titleStart} ${content.va.hero.titleAccent} ${content.va.hero.titleEnd}`,
    faqs: 0,
  },
  ...(Object.keys(landings) as LandingId[]).flatMap((id) =>
    (['es', 'va'] as const).map((locale) => ({
      route: id as RouteId,
      locale,
      title: landings[id][locale].seo.title,
      h1: landingH1(landings[id][locale]),
      faqs: landings[id][locale].faqs.length,
    })),
  ),
];

test.describe('indexable pages', () => {
  for (const pageCase of pages) {
    test(`${pageCase.locale} ${pageCase.route} has title, H1, canonical, hreflang and JSON-LD`, async ({ page }) => {
      const path = routes[pageCase.route][pageCase.locale];
      const response = await page.goto(path);
      expect(response?.ok()).toBe(true);
      await expect(page).toHaveTitle(pageCase.title);
      await expect(page.locator('h1')).toHaveCount(1);
      await expect(page.locator('h1')).toContainText(pageCase.h1.replace(/\s+/g, ' ').trim());
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', absoluteUrl(path));

      const alternates = await page.locator('link[rel="alternate"]').evaluateAll((nodes) =>
        nodes.map((node) => ({ hreflang: node.getAttribute('hreflang'), href: node.getAttribute('href') })),
      );
      expect(alternates).toEqual([
        { hreflang: 'es', href: absoluteUrl(routes[pageCase.route].es) },
        { hreflang: 'ca-valencia', href: absoluteUrl(routes[pageCase.route].va) },
        { hreflang: 'x-default', href: absoluteUrl(routes[pageCase.route].es) },
      ]);

      const graph = await page.locator('script[type="application/ld+json"]').evaluate((node) => JSON.parse(node.textContent || '{}'));
      expect(graph['@context']).toBe('https://schema.org');
      const group = graph['@graph'].find((node: { '@type': string | string[] }) =>
        Array.isArray(node['@type']) && node['@type'].includes('MusicGroup'),
      );
      expect(group['@type']).toEqual(expect.arrayContaining(['MusicGroup', 'PerformingGroup']));
      expect(group.url).toBe(absoluteUrl('/'));
      expect(Array.isArray(group.areaServed)).toBe(true);
      for (const place of group.areaServed) {
        expect(typeof place).toBe('object');
        expect(place['@type']).toMatch(/City|AdministrativeArea/);
        expect(place.name).toBeTruthy();
      }

      const faq = graph['@graph'].find((node: { '@type': string }) => node['@type'] === 'FAQPage');
      if (pageCase.faqs === 0) {
        expect(faq).toBeUndefined();
      } else {
        expect(faq.mainEntity).toHaveLength(pageCase.faqs);
        for (const question of faq.mainEntity) {
          expect(question['@type']).toBe('Question');
          expect(question.acceptedAnswer['@type']).toBe('Answer');
          await expect(page.getByText(question.name, { exact: true })).toBeVisible();
          await expect(page.getByText(question.acceptedAnswer.text, { exact: true })).toBeVisible();
        }
      }

      const visibleText = await page.locator('body').innerText();
      const phoneCount = pageCase.route === 'home' ? 2 : 1;
      expect(visibleText.match(/\+34 663 401 455/g) ?? []).toHaveLength(phoneCount);
      const instagram = page.locator('a[href="https://www.instagram.com/xaranga_laclandestina/"]');
      await expect(instagram).toHaveCount(1);
      if (pageCase.route === 'home') {
        const place = pageCase.locale === 'es' ? 'Ubicación: Alcoy (Alicante)' : 'Ubicació: Alcoi (Alacant)';
        const other = pageCase.locale === 'es' ? 'Ubicació: Alcoi (Alacant)' : 'Ubicación: Alcoy (Alicante)';
        expect(visibleText.match(new RegExp(place.replace(/[()]/g, '\\$&'), 'g')) ?? []).toHaveLength(1);
        expect(visibleText).not.toContain(other);
        await expect(page.locator('header')).toContainText(pageCase.locale === 'es' ? 'Moros y Cristianos' : 'Moros i Cristians');
        await expect(page.locator('header')).toContainText(pageCase.locale === 'es' ? 'Alicante y Valencia' : 'Alacant i València');
      }
    });
  }
});

test('sitemap lists every page and skips the 404', async ({ request }) => {
  const index = await request.get('/sitemap-index.xml');
  const alias = await request.get('/sitemap.xml');
  expect(index.ok()).toBe(true);
  expect(alias.ok()).toBe(true);
  const indexBody = await index.text();
  expect(indexBody).toContain('sitemap-0.xml');
  const nested = indexBody.match(/sitemap-0\.xml/)?.[0];
  const child = await request.get(`/${nested}`);
  const xml = await child.text();
  for (const path of indexablePaths()) {
    expect(xml).toContain(absoluteUrl(path));
  }
  expect(xml).not.toContain('/404');
  expect(xml).toContain('<lastmod>');
});

test('unknown URLs use the branded 404', async ({ page }) => {
  const response = await page.goto('/esta-pagina-no-existe');
  expect(response?.status()).toBe(404);
  await expect(page.locator('h1')).toHaveText('Esta página no está.');
  await expect(page.locator('a[href="#galeria"]')).toHaveCount(0);
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/);
  await expect(page.locator('script[type="application/ld+json"]')).toHaveCount(0);
});

test('gallery videos are not requested on load', async ({ page }) => {
  const videos: string[] = [];
  page.on('request', (request) => {
    if (request.url().includes('.mp4')) videos.push(request.url());
  });
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  expect(videos).toEqual([]);
  await expect(page.locator('video')).toHaveCount(0);
  const logo = page.locator('.brand-logo');
  await expect(logo).toHaveAttribute('src', '/logo-128.webp');
  await expect(logo).toHaveAttribute('width', '128');
  await expect(logo).not.toHaveAttribute('fetchpriority', 'high');
});

test('confirmation markers are visible on the new pages', async ({ page }) => {
  await page.goto(routes.moros.es);
  await expect(page.getByText(pendingMarkers.playedTowns)).toBeVisible();
  await page.goto(routes.zone.va);
  await expect(page.getByText(pendingMarkers.valenciaReach)).toBeVisible();
  await expect(page.getByText(pendingMarkers.surroundings)).toBeVisible();
});
