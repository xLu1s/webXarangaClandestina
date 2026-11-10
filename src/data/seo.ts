import { pendingMarkers, type PendingMarker } from './pending';
import { alternateRoutePath, localizedPath, type RouteId } from './routes';
import { siteConfig, type Locale } from './site';

export const ORGANIZATION_ID = `${siteConfig.url}/#organization`;
export const WEBSITE_ID = `${siteConfig.url}/#website`;

export const absoluteUrl = (path: string) => new URL(path, siteConfig.url).href;

/** Places already claimed by the site: Alcoi plus the Valencian Community. */
export const areaServed = [
  { '@type': 'City', name: 'Alcoi', alternateName: 'Alcoy' },
  {
    '@type': 'AdministrativeArea',
    name: 'Alacant',
    alternateName: ['Alicante', 'Provincia de Alicante'],
  },
  {
    '@type': 'AdministrativeArea',
    name: 'València',
    alternateName: ['Valencia', 'Provincia de Valencia'],
  },
  {
    '@type': 'AdministrativeArea',
    name: 'Comunitat Valenciana',
    alternateName: 'Comunidad Valenciana',
  },
] as const;

export const hreflangLinks = (route: RouteId) => {
  const spanish = absoluteUrl(localizedPath(route, 'es'));
  const valencian = absoluteUrl(localizedPath(route, 'va'));
  return [
    { hreflang: 'es', href: spanish },
    { hreflang: 'ca-valencia', href: valencian },
    { hreflang: 'x-default', href: spanish },
  ];
};

const logoUrl = absoluteUrl('/logo.webp');
const ogImage = absoluteUrl('/og-default.webp');

export const organizationJsonLd = (description: string) => ({
  '@type': ['MusicGroup', 'PerformingGroup'],
  '@id': ORGANIZATION_ID,
  name: siteConfig.legalName,
  alternateName: ['La Clandestina Alcoi', 'La Clandestina Alcoy', 'Xaranga La Clandestina'],
  url: absoluteUrl('/'),
  description,
  telephone: siteConfig.phone.display,
  areaServed,
  logo: {
    '@type': 'ImageObject',
    url: logoUrl,
    contentUrl: logoUrl,
    width: 1254,
    height: 1254,
    caption: 'Logo de la Charanga La Clandestina de Alcoi',
  },
  image: [logoUrl, ogImage],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Alcoi',
    addressRegion: 'Alacant',
    addressCountry: 'ES',
  },
  sameAs: Object.values(siteConfig.social).filter(Boolean),
  knowsAbout: ['Moros y Cristianos', 'Moros i Cristians', 'Xaranga', 'Charanga'],
});

export const websiteJsonLd = () => ({
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: absoluteUrl('/'),
  name: siteConfig.legalName,
  alternateName: 'La Clandestina Alcoi',
  publisher: { '@id': ORGANIZATION_ID },
  inLanguage: ['es', 'ca-valencia'],
});

export interface Crumb {
  name: string;
  path: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

const pageLanguage = (locale: Locale) => (locale === 'va' ? 'ca-valencia' : 'es');

export const webPageJsonLd = (input: {
  route: RouteId;
  locale: Locale;
  title: string;
  description: string;
  crumbs?: readonly Crumb[];
}) => {
  const url = absoluteUrl(localizedPath(input.route, input.locale));
  return {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: input.title,
    description: input.description,
    inLanguage: pageLanguage(input.locale),
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORGANIZATION_ID },
    ...(input.crumbs?.length ? { breadcrumb: { '@id': `${url}#breadcrumb` } } : {}),
  };
};

export const breadcrumbJsonLd = (route: RouteId, locale: Locale, crumbs: readonly Crumb[]) => ({
  '@type': 'BreadcrumbList',
  '@id': `${absoluteUrl(localizedPath(route, locale))}#breadcrumb`,
  itemListElement: crumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: absoluteUrl(crumb.path),
  })),
});

export const faqJsonLd = (route: RouteId, locale: Locale, faqs: readonly FaqItem[]) => ({
  '@type': 'FAQPage',
  '@id': `${absoluteUrl(localizedPath(route, locale))}#faq`,
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
});

export const buildJsonLd = (input: {
  route: RouteId;
  locale: Locale;
  title: string;
  description: string;
  organizationDescription: string;
  crumbs?: readonly Crumb[];
  faqs?: readonly FaqItem[];
}) => {
  const graph = [
    organizationJsonLd(input.organizationDescription),
    websiteJsonLd(),
    webPageJsonLd(input),
    ...(input.crumbs?.length ? [breadcrumbJsonLd(input.route, input.locale, input.crumbs)] : []),
    ...(input.faqs?.length ? [faqJsonLd(input.route, input.locale, input.faqs)] : []),
  ];
  return { '@context': 'https://schema.org', '@graph': graph };
};

export const pageCanonical = (route: RouteId, locale: Locale) =>
  absoluteUrl(localizedPath(route, locale));

export const pageAlternate = (route: RouteId, locale: Locale) =>
  absoluteUrl(alternateRoutePath(route, locale));

export const expectedMarkers = Object.values(pendingMarkers) as PendingMarker[];
