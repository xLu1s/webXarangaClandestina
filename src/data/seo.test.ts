import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { content } from './content';
import { landingH1, landingPlainText, landings } from './landings';
import { findPendingMarkers, pendingMarkers } from './pending';
import { indexablePaths, routes } from './routes';
import { absoluteUrl, areaServed, buildJsonLd, hreflangLinks, organizationJsonLd } from './seo';

const phone = '+34 663 401 455';

describe('structured data', () => {
  it('models the group as MusicGroup and PerformingGroup with places, not a string', () => {
    const group = organizationJsonLd(content.es.seo.description);
    expect(group['@type']).toEqual(['MusicGroup', 'PerformingGroup']);
    expect(group.url).toBe('https://www.xarangaclandestina.es/');
    expect(group.areaServed).toEqual(areaServed);
    for (const place of group.areaServed) {
      expect(place).toMatchObject({ '@type': expect.stringMatching(/City|AdministrativeArea/), name: expect.any(String) });
    }
    expect(JSON.stringify(group.areaServed)).not.toContain('alrededores');
  });

  it('keeps one organization url on the Valencian homepage', () => {
    const graph = buildJsonLd({
      route: 'home',
      locale: 'va',
      title: content.va.seo.title,
      description: content.va.seo.description,
      organizationDescription: content.es.seo.description,
    });
    const group = graph['@graph'].find((node) => Array.isArray(node['@type']));
    const website = graph['@graph'].find((node) => node['@type'] === 'WebSite');
    expect(group).toMatchObject({ url: absoluteUrl('/') });
    expect(website).toMatchObject({ url: absoluteUrl('/') });
  });

  it('adds FAQPage only when the page has questions', () => {
    const withFaq = buildJsonLd({
      route: 'moros',
      locale: 'es',
      title: landings.moros.es.seo.title,
      description: landings.moros.es.seo.description,
      organizationDescription: content.es.seo.description,
      faqs: landings.moros.es.faqs,
      crumbs: [
        { name: 'Inicio', path: '/' },
        { name: 'Moros y Cristianos', path: '/moros-y-cristianos/' },
      ],
    });
    const nodes = withFaq['@graph'] as unknown as Array<Record<string, any>>;
    const faq = nodes.find((node) => node['@type'] === 'FAQPage');
    const crumbs = nodes.find((node) => node['@type'] === 'BreadcrumbList');
    expect(faq?.mainEntity).toHaveLength(landings.moros.es.faqs.length);
    expect(faq?.mainEntity[0]).toMatchObject({
      '@type': 'Question',
      name: landings.moros.es.faqs[0].question,
      acceptedAnswer: { '@type': 'Answer', text: landings.moros.es.faqs[0].answer },
    });
    expect(crumbs?.itemListElement.map((item: { item: string }) => item.item)).toEqual([
      absoluteUrl('/'),
      absoluteUrl('/moros-y-cristianos/'),
    ]);

    const home = buildJsonLd({
      route: 'home',
      locale: 'es',
      title: content.es.seo.title,
      description: content.es.seo.description,
      organizationDescription: content.es.seo.description,
    });
    expect(home['@graph'].some((node) => node['@type'] === 'FAQPage')).toBe(false);
  });

  it('pairs hreflang with the same page in the other language', () => {
    expect(hreflangLinks('zone')).toEqual([
      { hreflang: 'es', href: absoluteUrl(routes.zone.es) },
      { hreflang: 'ca-valencia', href: absoluteUrl(routes.zone.va) },
      { hreflang: 'x-default', href: absoluteUrl(routes.zone.es) },
    ]);
    expect(routes.zone.va.startsWith('/va/')).toBe(true);
    expect(routes.moros.va.startsWith('/va/')).toBe(true);
  });
});

describe('copy', () => {
  it('puts Alcoy, Moros y Cristianos and both provinces in the homepage title, description and H1', () => {
    const esH1 = `${content.es.hero.titleStart} ${content.es.hero.titleAccent} ${content.es.hero.titleEnd}`;
    const vaH1 = `${content.va.hero.titleStart} ${content.va.hero.titleAccent} ${content.va.hero.titleEnd}`;
    for (const term of ['Alcoy', 'Moros y Cristianos', 'Alicante', 'Valencia', 'xaranga']) {
      expect(content.es.seo.title.toLowerCase()).toContain(term.toLowerCase());
      expect(content.es.seo.description.toLowerCase()).toContain(term.toLowerCase());
      expect(esH1.toLowerCase()).toContain(term.toLowerCase());
    }
    expect(esH1.toLowerCase()).toContain('charanga');
    expect(vaH1).toContain('Xaranga en Alcoi');
    expect(content.va.seo.title).toContain('Alcoi');
    expect(content.va.seo.description).toContain('Alacant');
    expect(content.va.seo.description).toContain('València');
  });

  it('does not invent a confirmation marker on the homepage', () => {
    expect(findPendingMarkers(JSON.stringify(content))).toEqual([]);
  });

  it('keeps each pending fact on the page that needs it', () => {
    expect(findPendingMarkers(landingPlainText(landings.moros.es))).toEqual([pendingMarkers.playedTowns]);
    expect(findPendingMarkers(landingPlainText(landings.moros.va))).toEqual([pendingMarkers.playedTowns]);
    expect(findPendingMarkers(landingPlainText(landings.zone.es))).toEqual([
      pendingMarkers.valenciaReach,
      pendingMarkers.surroundings,
    ]);
    expect(findPendingMarkers(landingPlainText(landings.zone.va))).toEqual([
      pendingMarkers.valenciaReach,
      pendingMarkers.surroundings,
    ]);
    expect(landingH1(landings.moros.es)).toContain('Moros y Cristianos');
    expect(landingH1(landings.moros.es)).toContain('Alcoy');
    expect(landingH1(landings.zone.es)).toContain('banda de música');
    expect(landingH1(landings.zone.es)).toContain('Alicante');
    expect(landingH1(landings.zone.es)).toContain('Valencia');
    expect(landingH1(landings.zone.va)).toContain('Alcoi');
  });

  it('lists every indexable URL once', () => {
    const paths = indexablePaths();
    expect(new Set(paths).size).toBe(paths.length);
    expect(paths).toEqual([
      '/',
      '/va/',
      '/moros-y-cristianos/',
      '/va/moros-i-cristians/',
      '/charanga-alicante-valencia/',
      '/va/xaranga-alacant-valencia/',
    ]);
  });
});

describe('public files', () => {
  it('points robots at the sitemap and describes the group in llms.txt', () => {
    const robots = readFileSync('public/robots.txt', 'utf8');
    const llms = readFileSync('public/llms.txt', 'utf8');
    expect(robots).toContain('Sitemap: https://www.xarangaclandestina.es/sitemap.xml');
    expect(llms).toContain('https://www.xarangaclandestina.es/moros-y-cristianos/');
    expect(llms).toContain('https://www.xarangaclandestina.es/va/xaranga-alacant-valencia/');
    expect(llms).toContain(phone);
    expect(llms).not.toContain('[por confirmar:');
  });
});
