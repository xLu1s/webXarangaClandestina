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

const homeAsOnMain = {
  es: {
    title: 'La Clandestina Alcoi | Charanga para fiestas y eventos',
    description: 'Charanga La Clandestina de Alcoy, especializada en Moros y Cristianos, bodas, despedidas, Fallas, Hogueras y eventos privados. Presupuesto por WhatsApp.',
    h1: 'Donde aparece La Clandestina, empieza la fiesta.',
    eyebrow: 'Charanga en directo · Comunitat Valenciana',
    intro: 'Música en la calle, conexión con la gente y una energía que no se ensaya. Especialistas en Moros y Cristianos y preparados para cualquier celebración.',
    aboutTitle: 'No tocamos delante del público. Tocamos con él.',
    aboutLead: 'Somos una charanga festiva, versátil y profesional. Sabemos cuándo hay que desatar la calle y cuándo toca cumplir cada minuto del programa.',
    specialtyTitle: 'Moros y Cristianos se viven desde dentro.',
    eventsTitle: 'Una charanga. Seis maneras de cambiar el plan.',
    eventsText: 'Cada evento pide una intensidad distinta. Nosotros ponemos la música, el ritmo y la forma de entrar en escena.',
    place: 'Ubicación: Alcoy (Alicante)',
  },
  va: {
    title: 'La Clandestina Alcoi | Xaranga per a festes i esdeveniments',
    description: 'Xaranga La Clandestina d’Alcoi, especialitzada en Moros i Cristians, bodes, comiats, Falles, Fogueres i esdeveniments privats. Pressupost per WhatsApp.',
    h1: 'On apareix La Clandestina, comença la festa.',
    eyebrow: 'Xaranga en directe · Comunitat Valenciana',
    intro: 'Música al carrer, connexió amb la gent i una energia que no s’assaja. Especialistes en Moros i Cristians i preparats per a qualsevol celebració.',
    aboutTitle: 'No toquem davant del públic. Toquem amb ell.',
    aboutLead: 'Som una xaranga festiva, versàtil i professional. Sabem quan cal desfermar el carrer i quan toca complir cada minut del programa.',
    specialtyTitle: 'Els Moros i Cristians es viuen des de dins.',
    eventsTitle: 'Una xaranga. Sis maneres de canviar el pla.',
    eventsText: 'Cada esdeveniment demana una intensitat diferent. Nosaltres posem la música, el ritme i la manera d’entrar en escena.',
    place: 'Ubicació: Alcoi (Alacant)',
  },
} as const;

describe('copy', () => {
  it('keeps the homepage copy from main and adds the location line once', () => {
    for (const locale of ['es', 'va'] as const) {
      const page = content[locale];
      const expected = homeAsOnMain[locale];
      const h1 = `${page.hero.titleStart} ${page.hero.titleAccent} ${page.hero.titleEnd}`;
      expect(page.seo.title).toBe(expected.title);
      expect(page.seo.description).toBe(expected.description);
      expect(h1).toBe(expected.h1);
      expect(page.hero.eyebrow).toBe(expected.eyebrow);
      expect(page.hero.text).toBe(expected.intro);
      expect(page.about.title).toBe(expected.aboutTitle);
      expect(page.about.lead).toBe(expected.aboutLead);
      expect(page.specialty.title).toBe(expected.specialtyTitle);
      expect(page.eventsIntro.title).toBe(expected.eventsTitle);
      expect(page.eventsIntro.text).toBe(expected.eventsText);
      expect(page.contact.place).toBe(expected.place);
      const serialized = JSON.stringify(page);
      expect(serialized.split(expected.place).length - 1).toBe(1);
    }
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
