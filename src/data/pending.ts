/**
 * Visible gaps where a real fact is not in the site or the repo.
 * The marker text stays in Spanish on both languages so it can be searched as written.
 */
export const pendingMarkers = {
  playedTowns:
    '[por confirmar: pueblos y comparsas en los que ha actuado el grupo, aparte de la sede en Alcoy y la entrada festera de Cocentaina que se ve en la galería]',
  valenciaReach:
    '[por confirmar: si la zona de actuación incluye la ciudad de València, solo la provincia, o ambas, y el radio de desplazamiento]',
  surroundings:
    '[por confirmar: pueblos de alrededor, fuera de las provincias de Alicante y Valencia, que entren en la zona]',
} as const;

export type PendingMarker = (typeof pendingMarkers)[keyof typeof pendingMarkers];

export const findPendingMarkers = (text: string) =>
  [...text.matchAll(/\[por confirmar:[^\]]+\]/g)].map((match) => match[0]);
