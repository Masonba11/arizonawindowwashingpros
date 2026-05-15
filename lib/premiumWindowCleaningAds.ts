import type { Metadata } from 'next'
import { BUSINESS_INFO } from '@/lib/constants'

export type PremiumWindowCleaningSlug = 'scottsdale-window-cleaning' | 'gilbert-window-cleaning'

export interface PremiumWindowCleaningConfig {
  slug: PremiumWindowCleaningSlug
  city: string
  formCity: string
  callEventLabel: string
  headline: string
  subheadline: string
  heroAudienceLines: string[]
  rodiBullets: string[]
  serviceIntro: string
}

export const PREMIUM_WINDOW_CLEANING: Record<
  PremiumWindowCleaningSlug,
  PremiumWindowCleaningConfig
> = {
  'scottsdale-window-cleaning': {
    slug: 'scottsdale-window-cleaning',
    city: 'Scottsdale',
    formCity: 'Scottsdale',
    callEventLabel: 'premium_lp_scottsdale_call',
    headline: 'Professional Window Cleaning in Scottsdale, AZ',
    subheadline:
      'Spot-free window cleaning using our professional RO/DI purified water system designed for Arizona dust and hard water conditions.',
    heroAudienceLines: [
      'Luxury homes & large glass',
      'Restaurants, storefronts & offices',
      'Premium residential detail',
      'Recurring commercial maintenance',
    ],
    rodiBullets: [
      'Spot-free finish that reads “just detailed”',
      'Less streaking vs. untreated tap water',
      'Built for Arizona dust and mineral-heavy water',
      'Professional-grade equipment on every truck',
    ],
    serviceIntro:
      'From high-end residential estates to busy retail corridors in Scottsdale — we scale the same premium finish.',
  },
  'gilbert-window-cleaning': {
    slug: 'gilbert-window-cleaning',
    city: 'Gilbert',
    formCity: 'Gilbert',
    callEventLabel: 'premium_lp_gilbert_call',
    headline: 'Professional Window Cleaning in Gilbert, AZ',
    subheadline:
      'Crystal-clear windows with a purified RO/DI water system that helps reduce streaks, dust buildup, and hard water residue.',
    heroAudienceLines: [
      'Family homes & two-story layouts',
      'Screens, tracks & exterior glass',
      'Fast scheduling you can count on',
      'Local businesses on recurring routes',
    ],
    rodiBullets: [
      'Cleaner glass with fewer water spots left behind',
      'Helps cut through dust that settles after storms',
      'Great for hard water film common in the Valley',
      'Simple story: better water, better finish',
    ],
    serviceIntro:
      'Gilbert families and local businesses trust us for straightforward pricing, respectful crews, and results you notice from the curb.',
  },
}

export function getPremiumWindowCleaningConfig(
  slug: PremiumWindowCleaningSlug
): PremiumWindowCleaningConfig {
  return PREMIUM_WINDOW_CLEANING[slug]
}

export function premiumWindowCleaningMetadata(slug: PremiumWindowCleaningSlug): Metadata {
  const c = PREMIUM_WINDOW_CLEANING[slug]
  return {
    title: `${c.headline} | Free Quote`,
    description: `${c.subheadline} Licensed & insured. Call ${BUSINESS_INFO.phone} or request a quote.`,
    robots: { index: false, follow: false },
    alternates: {
      canonical: `${BUSINESS_INFO.website}/${slug}`,
    },
  }
}
