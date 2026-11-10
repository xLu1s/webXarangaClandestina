import type { Locale } from './site';

export const routeIds = ['home', 'moros', 'zone'] as const;
export type RouteId = (typeof routeIds)[number];

/** Canonical paths. Valencian lives under /va/ and is never a copy of the Spanish slug. */
export const routes: Record<RouteId, Record<Locale, string>> = {
  home: { es: '/', va: '/va/' },
  moros: { es: '/moros-y-cristianos/', va: '/va/moros-i-cristians/' },
  zone: { es: '/charanga-alicante-valencia/', va: '/va/xaranga-alacant-valencia/' },
};

export const localizedPath = (route: RouteId, locale: Locale) => routes[route][locale];

export const alternateLocale = (locale: Locale): Locale => (locale === 'es' ? 'va' : 'es');

export const alternateRoutePath = (route: RouteId, locale: Locale) =>
  routes[route][alternateLocale(locale)];

export const indexablePaths = () =>
  routeIds.flatMap((route) => [routes[route].es, routes[route].va]);
