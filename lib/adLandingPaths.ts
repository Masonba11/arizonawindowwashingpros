/**
 * Google Ads LP route slugs — single source of truth.
 * Imported by client components (e.g. Layout); keep free of `next` or server-only imports.
 */
export const AD_LANDING_SLUGS = [
  'gilbert-window-cleaning',
  'chandler-window-cleaning',
  'queen-creek-window-cleaning',
  'mesa-window-cleaning',
  'scottsdale-window-cleaning',
  'tempe-window-cleaning',
] as const

export type AdLandingCityKey = (typeof AD_LANDING_SLUGS)[number]

export const AD_LANDING_PATHS = AD_LANDING_SLUGS.map(
  (slug) => `/${slug}`
) as readonly `/${AdLandingCityKey}`[]
