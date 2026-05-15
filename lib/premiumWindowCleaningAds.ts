import type { Metadata } from 'next'
import { BUSINESS_INFO } from '@/lib/constants'

export type PremiumWindowCleaningSlug = 'scottsdale-window-cleaning' | 'gilbert-window-cleaning'

export interface PremiumTestimonial {
  name: string
  line: string
  quote: string
}

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
  testimonials: PremiumTestimonial[]
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
    testimonials: [
      {
        name: 'Jennifer M.',
        line: 'North Scottsdale homeowner',
        quote:
          'Our floor-to-ceiling glass finally looks like the view we paid for. No spots where the sun hits at 5pm — that’s never happened with other cleaners.',
      },
      {
        name: 'Marcus T.',
        line: 'Old Town area restaurant',
        quote:
          'Front windows are our first impression. They show up on time, work fast between service, and the glass stays clearer longer.',
      },
      {
        name: 'Elena R.',
        line: 'Scottsdale office suite',
        quote:
          'We needed a vendor who could handle recurring exterior cleans without babysitting. Quotes are clear, crews are professional.',
      },
      {
        name: 'Chris & Amanda K.',
        line: 'DC Ranch',
        quote:
          'Two stories of glass + pool fence panels — done carefully, no mess. Already booked the next visit.',
      },
    ],
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
    testimonials: [
      {
        name: 'Heather L.',
        line: 'Power Ranch',
        quote:
          'Kids fingerprints, dog nose prints — all gone. They were in and out while the baby napped. Huge win.',
      },
      {
        name: 'Ryan P.',
        line: 'Val Vista Lakes',
        quote:
          'Two-story home and they didn’t make me feel bad about how bad the tracks were. Honest quote, great work.',
      },
      {
        name: 'Angie & Tom S.',
        line: 'Gilbert family home',
        quote:
          'We do exterior every quarter now. Text reminders, easy scheduling, same friendly crew.',
      },
      {
        name: 'Brian K.',
        line: 'Gilbert storefront',
        quote:
          'Small retail strip — they hit every unit’s glass in one morning. Looks sharp for weekend traffic.',
      },
    ],
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
