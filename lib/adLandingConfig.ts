import type { Metadata } from 'next'
import { BUSINESS_INFO } from '@/lib/constants'
import type { AdLandingCityKey } from '@/lib/adLandingPaths'

export type { AdLandingCityKey } from '@/lib/adLandingPaths'
export { AD_LANDING_PATHS } from '@/lib/adLandingPaths'

export interface AdLandingCityConfig {
  path: AdLandingCityKey
  /** Short city name for headlines */
  city: string
  /** Default city field for CRM */
  formCity: string
  /** Local flavor for copy */
  areaNote: string
  callEventLabel: string
}

export const AD_LANDING_CITIES: Record<AdLandingCityKey, AdLandingCityConfig> = {
  'gilbert-window-cleaning': {
    path: 'gilbert-window-cleaning',
    city: 'Gilbert',
    formCity: 'Gilbert',
    areaNote: 'Heritage District to Power Ranch',
    callEventLabel: 'ad_lp_gilbert_call',
  },
  'chandler-window-cleaning': {
    path: 'chandler-window-cleaning',
    city: 'Chandler',
    formCity: 'Chandler',
    areaNote: 'Ocotillo to downtown Chandler',
    callEventLabel: 'ad_lp_chandler_call',
  },
  'queen-creek-window-cleaning': {
    path: 'queen-creek-window-cleaning',
    city: 'Queen Creek',
    formCity: 'Queen Creek',
    areaNote: 'Ironwood to Crimson Heights',
    callEventLabel: 'ad_lp_queen_creek_call',
  },
  'mesa-window-cleaning': {
    path: 'mesa-window-cleaning',
    city: 'Mesa',
    formCity: 'Mesa',
    areaNote: 'Eastmark to Red Mountain',
    callEventLabel: 'ad_lp_mesa_call',
  },
  'scottsdale-window-cleaning': {
    path: 'scottsdale-window-cleaning',
    city: 'Scottsdale',
    formCity: 'Scottsdale',
    areaNote: 'Old Town to North Scottsdale',
    callEventLabel: 'ad_lp_scottsdale_call',
  },
  'tempe-window-cleaning': {
    path: 'tempe-window-cleaning',
    city: 'Tempe',
    formCity: 'Tempe',
    areaNote: 'ASU area to South Tempe',
    callEventLabel: 'ad_lp_tempe_call',
  },
}

export function getAdLandingConfig(path: AdLandingCityKey): AdLandingCityConfig {
  return AD_LANDING_CITIES[path]
}

export function adLandingMetadata(path: AdLandingCityKey): Metadata {
  const { city } = AD_LANDING_CITIES[path]
  return {
    title: `${city} Window Cleaning — Free Quote`,
    description: `Streak-free window cleaning in ${city}, AZ. Licensed & insured. Free quotes. Arizona Window Washing Pros serves the East Valley.`,
    robots: { index: false, follow: false },
    alternates: {
      canonical: `${BUSINESS_INFO.website}/${path}`,
    },
  }
}

export function buildAdLandingFaqs(city: string) {
  return [
    {
      question: 'How much does window cleaning cost in my area?',
      answer: `Pricing depends on home size, number of windows, and whether you want interior, exterior, or both. Most ${city} homes fall in a clear range—we’ll give you a firm, no-pressure quote before we schedule. Request your free quote above or call us.`,
    },
    {
      question: 'Do you clean inside and outside windows?',
      answer:
        'Yes. We offer exterior cleaning on every job, and interior glass is available when you want the full package. Tell us what you need on the form and we’ll tailor the quote.',
    },
    {
      question: 'Do you service two-story homes?',
      answer:
        'Absolutely. We’re equipped for two-story homes and hard-to-reach glass, including high transoms and elevated windows, done safely and without cutting corners.',
    },
    {
      question: 'How quickly can I get scheduled?',
      answer:
        'We keep routes efficient across the East Valley. Many homeowners get an appointment within a few days, and we’ll always confirm a time that works for you.',
    },
    {
      question: 'Do you offer free quotes?',
      answer:
        'Yes—your quote is free, with no obligation. Share your address and what you need, or call us and we’ll walk you through it.',
    },
  ]
}
