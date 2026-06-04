import type { Metadata } from 'next'
import { BUSINESS_INFO } from '@/lib/constants'

export const COMMERCIAL_LANDING = {
  name: BUSINESS_INFO.name,
  phone: '480-737-0850',
  phoneDisplay: '480-737-0850',
  phoneFormatted: BUSINESS_INFO.phoneFormatted,
  email: BUSINESS_INFO.email,
  path: '/commercial-window-cleaning-arizona',
  callEventLabel: 'commercial_lp_call',
  formConversion: 'commercial_lp_quote',
  formAnchor: '#quote',
} as const

/** Offset for fixed header when jumping to anchor sections */
export const COMMERCIAL_ANCHOR_SCROLL =
  'scroll-mt-[6.5rem] sm:scroll-mt-[7rem] md:scroll-mt-28' as const

export const COMMERCIAL_PAGE_METADATA: Metadata = {
  title: 'Commercial Window Cleaning Arizona | Arizona Window Washing Pros',
  description:
    'Arizona Window Washing Pros provides commercial window cleaning for storefronts, restaurants, offices, retail centers, and property managers across Arizona. Request a free quote today.',
  alternates: {
    canonical: COMMERCIAL_LANDING.path,
  },
  openGraph: {
    title: 'Commercial Window Cleaning Arizona | Arizona Window Washing Pros',
    description:
      'Arizona Window Washing Pros provides commercial window cleaning for storefronts, restaurants, offices, retail centers, and property managers across Arizona. Request a free quote today.',
    type: 'website',
  },
}

export const RECURRING_DISCOUNT_PLANS = [
  {
    title: 'Weekly Service',
    discount: '40% Off',
    badge: 'Best Value',
    bestFor: 'Restaurants, high-traffic storefronts, gyms, and busy retail locations',
  },
  {
    title: 'Bi-Weekly Service',
    discount: '30% Off',
    bestFor: 'Storefronts, salons, offices, and businesses with steady foot traffic',
  },
  {
    title: 'Monthly Service',
    discount: '25% Off',
    bestFor: 'Offices, medical buildings, and standard commercial maintenance',
  },
  {
    title: 'Bi-Monthly Service',
    discount: '20% Off',
    bestFor: 'Lower-traffic businesses that still want consistent clean glass',
  },
  {
    title: 'Quarterly Service',
    discount: '10% Off',
    bestFor: 'Seasonal upkeep and businesses needing occasional maintenance',
  },
] as const

export const COMMERCIAL_FAQS = [
  {
    question: 'How much does commercial window cleaning cost?',
    answer:
      'Pricing depends on the size of the property, number of windows, interior/exterior needs, buildup, access, and cleaning frequency. Arizona Window Washing Pros provides custom quotes for each business.',
  },
  {
    question: 'Do you offer recurring commercial window cleaning?',
    answer:
      'Yes. We offer weekly, bi-weekly, monthly, bi-monthly, quarterly, and custom maintenance plans for storefronts, restaurants, offices, plazas, and other commercial properties.',
  },
  {
    question: 'What discounts do you offer for recurring commercial window cleaning?',
    answer:
      'Recurring plans may qualify for discounts up to 40%, including 40% off weekly service, 30% off bi-weekly service, 25% off monthly service, 20% off bi-monthly service, and 10% off quarterly service.',
  },
  {
    question: 'Can you clean windows before or after business hours?',
    answer:
      'Yes. We offer flexible scheduling for commercial clients so cleaning can be done at a time that works best for the business.',
  },
  {
    question: 'Do you clean interior and exterior glass?',
    answer:
      'Yes. We provide both interior and exterior commercial window cleaning.',
  },
  {
    question: 'Do you remove hard water spots?',
    answer:
      'Yes. Hard water spot removal can be included depending on the condition of the glass.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We serve Gilbert, Chandler, Queen Creek, San Tan Valley, Mesa, Scottsdale, Tempe, Phoenix, Paradise Valley, and surrounding East Valley Arizona areas.',
  },
] as const

export const SERVICE_AREA_CITIES = [
  'Gilbert',
  'Chandler',
  'Queen Creek',
  'San Tan Valley',
  'Mesa',
  'Scottsdale',
  'Tempe',
  'Phoenix',
  'Paradise Valley',
  'East Valley Arizona',
] as const
