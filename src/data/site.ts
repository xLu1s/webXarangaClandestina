export const siteConfig = {
  name: 'La Clandestina',
  legalName: 'Charanga La Clandestina',
  url: 'https://www.xarangaclandestina.es',
  phone: {
    display: '+34 663 401 455',
    raw: '34663401455',
  },
  areaServed: 'Alcoi, Comunitat Valenciana y alrededores',
  // Add confirmed profiles here. Empty links are never rendered.
  social: {
    instagram: 'https://www.instagram.com/xaranga_laclandestina/',
    tiktok: '',
    youtube: '',
  },
} as const;

export type Locale = 'es' | 'va';

export const localePath = (locale: Locale) => locale === 'va' ? '/va/' : '/';

export const whatsappUrl = (message: string) =>
  `https://wa.me/${siteConfig.phone.raw}?text=${encodeURIComponent(message)}`;
