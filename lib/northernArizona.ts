import type { Metadata } from 'next'
import { BUSINESS_INFO } from '@/lib/constants'
import { generateMetadata } from '@/lib/seo'

export const NORTHERN_AZ_PATHS = {
  pinetopLakeside: '/window-cleaning-pinetop-lakeside-az',
  showLow: '/window-cleaning-show-low-az',
  snowflake: '/window-cleaning-snowflake-az',
} as const

export type NorthernAzCityId = 'pinetop-lakeside' | 'show-low' | 'snowflake'

export type NorthernAzFaq = { question: string; answer: string }

export type NorthernAzSection = {
  heading: string
  paragraphs: string[]
  bullets?: string[]
}

export type NorthernAzCityPage = {
  id: NorthernAzCityId
  path: string
  cityName: string
  displayName: string
  defaultCity: string
  callEventLabel: string
  navLabel: string
  navDescription: string
  title: string
  description: string
  h1: string
  heroSubtitle: string
  intro: string[]
  sections: NorthernAzSection[]
  included: string[]
  faqs: NorthernAzFaq[]
  finalCtaHeading: string
  finalCtaCopy: string
  relatedCities: { label: string; href: string }[]
  serviceLinks: { label: string; href: string }[]
}

const sharedIncluded = [
  'Exterior window glass cleaning',
  'Interior window cleaning (when requested)',
  'Screen cleaning (when requested)',
  'Track and sill cleaning (when requested)',
  'Light frame wipe-down as part of detailing',
  'Residential and commercial appointments',
]

export const NORTHERN_AZ_CITIES: Record<NorthernAzCityId, NorthernAzCityPage> = {
  'pinetop-lakeside': {
    id: 'pinetop-lakeside',
    path: NORTHERN_AZ_PATHS.pinetopLakeside,
    cityName: 'Pinetop-Lakeside',
    displayName: 'Pinetop-Lakeside, AZ',
    defaultCity: 'Pinetop-Lakeside',
    callEventLabel: 'pinetop_lakeside_seo_call',
    navLabel: 'Pinetop-Lakeside',
    navDescription:
      'Residential, cabin, and commercial window cleaning in Pinetop-Lakeside, Arizona.',
    title: 'Window Cleaning in Pinetop-Lakeside, AZ',
    description:
      'Professional window cleaning in Pinetop-Lakeside, AZ. Interior, exterior, screens, tracks and frames for homes and businesses. Request a free quote.',
    h1: 'Professional Window Cleaning in Pinetop-Lakeside, AZ',
    heroSubtitle:
      'Arizona Window Washing Pros cleans homes, cabins, vacation properties, and local businesses throughout Pinetop and Lakeside.',
    intro: [
      'Pinetop-Lakeside properties often need more than a quick wipe of the glass. Dust, pollen, fingerprints, and outdoor buildup can leave windows looking dull even when the rest of the home is well kept. Arizona Window Washing Pros provides residential and commercial window cleaning for full-time homes, seasonal cabins, and vacation rentals in the area.',
      'Whether you live in Pinetop year-round or open a Lakeside cabin before guests arrive, clear glass makes the whole property feel brighter and better maintained. We offer exterior cleaning, interior detailing, and optional screen, track, sill, and frame cleaning based on what your property needs.',
    ],
    sections: [
      {
        heading: 'Complete Window Cleaning for Pinetop-Lakeside Properties',
        paragraphs: [
          'A complete window cleaning visit can include exterior glass, interior panes, screens, tracks, sills, and frames. Not every home needs every add-on on every visit. Some owners prefer exterior-only service for routine maintenance, while others want a full interior and exterior clean before guests arrive or after a busy season.',
          'We work with homeowners, cabin owners, and property managers who want a straightforward estimate and a clear scope of work. If you are not sure what to book, tell us about the property type, number of stories, and whether screens or tracks need attention, and we will help you choose a practical plan.',
        ],
      },
      {
        heading: 'Residential Window Cleaning',
        paragraphs: [
          'Primary residences in Pinetop-Lakeside benefit from regular glass cleaning that keeps living spaces looking open and inviting. Interior cleaning addresses smudges and fingerprints around frequently used rooms. Exterior cleaning focuses on outdoor buildup that can make even a well-kept home look tired from the street.',
          'Our residential work is detail-focused and respectful of your property. We use professional methods suited to exterior and hard-to-reach glass, and we can include traditional interior detailing when that is part of your quote.',
        ],
        bullets: [
          'Full-time homes and family residences',
          'Interior-only, exterior-only, or combined cleaning',
          'Optional screens, tracks, sills, and frames',
        ],
      },
      {
        heading: 'Vacation Home and Cabin Window Cleaning',
        paragraphs: [
          'Many White Mountains properties sit unused for stretches of time. Between visits, windows can collect outdoor dust and debris, and dirty screens can make freshly cleaned glass still look hazy. Seasonal cleanings before arrival or after guests leave help vacation homes and cabins look ready for the next stay.',
          'If you manage a cabin or second home in Pinetop or Lakeside, we can schedule around your occupancy plans. Mention move-in, move-out, or between-guest timing when you request a quote so we can plan the visit accordingly.',
        ],
      },
      {
        heading: 'Commercial Window Cleaning',
        paragraphs: [
          'Local businesses and storefronts also rely on clean glass to make a strong first impression. Commercial window cleaning for Pinetop-Lakeside properties can include exterior storefront glass and, when requested, interior glass that customers see every day.',
          'If you operate a shop, office, or other commercial space, ask about a one-time clean or a recurring schedule that fits your business hours. Learn more on our commercial window cleaning page, or request a quote for your location.',
        ],
      },
      {
        heading: 'What Is Included in Our Window Cleaning Service?',
        paragraphs: [
          'Every quote is customized, but most residential and commercial visits start with exterior glass cleaning. Interior cleaning, screen cleaning, and track or sill detailing can be added based on your goals and budget.',
          'For exterior work, we use professional DI / RO purified water equipment on many jobs so glass can dry with fewer mineral spots. Interior glass is cleaned with careful traditional detailing. Screens, tracks, sills, and frames are cleaned when those services are selected.',
        ],
      },
      {
        heading: 'Why Property Owners Choose Arizona Window Washing Pros',
        paragraphs: [
          'Property owners choose us for clear communication, professional equipment, and flexible options for homes and businesses. We are fully insured, and we make it easy to request a free quote by phone or online form.',
          'We also serve nearby White Mountains communities. If you need service in Show Low, Snowflake, Taylor, or surrounding areas, we can let you know whether we can schedule your property.',
        ],
        bullets: [
          'Fully insured window cleaning',
          'Residential, cabin, and commercial options',
          'Interior and exterior packages available',
          'Simple free-quote process by phone or form',
        ],
      },
    ],
    included: sharedIncluded,
    faqs: [
      {
        question: 'Do you clean both interior and exterior windows?',
        answer:
          'Yes. We offer exterior-only, interior-only, and combined interior and exterior window cleaning depending on what you request in your quote.',
      },
      {
        question: 'Do you clean screens, tracks and window sills?',
        answer:
          'Yes. Screen cleaning and track, sill, and frame detailing can be included when those services are selected as part of your appointment.',
      },
      {
        question: 'Do you clean vacation homes and cabins?',
        answer:
          'Yes. We clean full-time homes, cabins, vacation homes, and rental properties in the Pinetop-Lakeside area.',
      },
      {
        question: 'Do you provide commercial window cleaning?',
        answer:
          'Yes. We provide commercial and storefront window cleaning in addition to residential service. Ask about scheduling for your business.',
      },
      {
        question: 'How can I receive an estimate?',
        answer:
          'Call or text (480) 737-0850, or submit the quote form on this page with your city, property type, and service needs. We will follow up with a free estimate.',
      },
      {
        question: 'Do I need to be home during the service?',
        answer:
          'It depends on the scope. Exterior-only cleaning can often be completed without you present when access is arranged. Interior cleaning typically requires access inside the home. Tell us your preference when you request a quote.',
      },
    ],
    finalCtaHeading: 'Request a Free Window Cleaning Quote',
    finalCtaCopy:
      'Ready for clearer glass in Pinetop-Lakeside? Call Arizona Window Washing Pros or send a free quote request today.',
    relatedCities: [
      { label: 'window cleaning in Show Low', href: NORTHERN_AZ_PATHS.showLow },
      { label: 'Snowflake window cleaning services', href: NORTHERN_AZ_PATHS.snowflake },
    ],
    serviceLinks: [
      { label: 'residential window cleaning', href: '/services/residential-window-cleaning' },
      { label: 'exterior window cleaning', href: '/services/exterior-window-cleaning' },
      { label: 'interior window cleaning', href: '/services/interior-window-cleaning' },
      { label: 'screen cleaning', href: '/services/screen-cleaning' },
      { label: 'commercial window cleaning', href: '/commercial-window-cleaning-arizona' },
      { label: 'contact us', href: '/contact' },
    ],
  },

  'show-low': {
    id: 'show-low',
    path: NORTHERN_AZ_PATHS.showLow,
    cityName: 'Show Low',
    displayName: 'Show Low, AZ',
    defaultCity: 'Show Low',
    callEventLabel: 'show_low_seo_call',
    navLabel: 'Show Low',
    navDescription:
      'Residential and commercial window cleaning for homes, rentals, and storefronts in Show Low, AZ.',
    title: 'Window Cleaning in Show Low, AZ',
    description:
      'Professional window cleaning in Show Low, AZ for homes and businesses. Interior, exterior, screens, tracks and frames. Request your free quote.',
    h1: 'Residential and Commercial Window Cleaning in Show Low, AZ',
    heroSubtitle:
      'Keep Show Low homes, rentals, and storefronts looking clear and well maintained with professional window cleaning from Arizona Window Washing Pros.',
    intro: [
      'Show Low property owners often want windows that look clean from the curb and clear from inside. Dust, fingerprints, and everyday use can leave glass looking cloudy between cleanings. Arizona Window Washing Pros provides residential and commercial window cleaning for primary homes, rental properties, and local businesses.',
      'Whether you need a one-time refresh or a routine schedule, we make it simple to request an estimate and book service. Our work covers exterior glass, interior detailing when requested, and optional screen, track, sill, and frame cleaning.',
    ],
    sections: [
      {
        heading: 'Window Cleaning for Show Low Homes',
        paragraphs: [
          'Homes in Show Low range from everyday residences to rental properties that need to look guest-ready. Clean windows improve natural light and help a property look cared for. We clean glass for owner-occupied homes and for rentals that need a reset between tenants or before new guests arrive.',
          'When you request a quote, share the home size, number of stories, and whether you want interior glass included. That helps us provide a clear estimate and recommend the right scope for your property.',
        ],
      },
      {
        heading: 'Interior and Exterior Window Cleaning',
        paragraphs: [
          'Exterior window cleaning focuses on outdoor buildup that settles on glass over time. Interior window cleaning targets smudges, fingerprints, and indoor film that affect how rooms feel and look.',
          'Many Show Low customers book both sides for a complete result. Others schedule exterior-only service more often and add interior cleaning when they want a deeper refresh. We offer exterior-only, interior-only, and full interior/exterior options.',
        ],
      },
      {
        heading: 'Screen, Track, Sill and Frame Cleaning',
        paragraphs: [
          'Screens collect dust and debris that can make clean windows still look dull. Tracks and sills also gather dirt that affects how windows look and operate. Frame wipe-downs help the finished area look complete rather than only cleaning the glass.',
          'These services can be added to your window cleaning appointment when you want a more detailed result. Ask about screens, tracks, sills, and frames when you submit your estimate request.',
        ],
      },
      {
        heading: 'Commercial and Storefront Window Cleaning',
        paragraphs: [
          'Show Low businesses and storefronts benefit from clean glass that looks professional to customers and passersby. Commercial window cleaning can include exterior storefront panes and interior glass that is part of the customer experience.',
          'If you manage an office, retail space, or other commercial building, we can discuss one-time cleaning or a recurring plan. Visit our commercial window cleaning page for more detail, or contact us for a Show Low business estimate.',
        ],
      },
      {
        heading: 'When Should You Schedule Window Cleaning?',
        paragraphs: [
          'Many homeowners clean windows seasonally, before hosting guests, after a dusty stretch, or when the glass starts looking dull in morning or afternoon light. Rentals often need cleaning between stays. Businesses may prefer a steady routine so storefronts stay presentable.',
          'There is no single schedule that fits every property. Tell us how the property is used and we can suggest a practical cadence when you request your free estimate.',
        ],
      },
      {
        heading: 'Our Window Cleaning Process',
        paragraphs: [
          'Getting started is simple. Request a free quote online or call us with basic details about the property. We confirm the scope, schedule a convenient appointment, and complete the cleaning according to the services you selected.',
          'Exterior work often uses our professional DI / RO purified water system so glass can dry with fewer mineral spots. Interior glass is detailed carefully. Optional screens, tracks, sills, and frames are cleaned when included in the job.',
        ],
        bullets: [
          'Request a free estimate by phone or form',
          'Confirm scope for home, rental, or business',
          'Schedule and complete the selected services',
        ],
      },
    ],
    included: sharedIncluded,
    faqs: [
      {
        question: 'Do you clean rental properties in Show Low?',
        answer:
          'Yes. We clean windows for primary homes, rentals, vacation properties, and commercial spaces in Show Low.',
      },
      {
        question: 'Can I book exterior-only window cleaning?',
        answer:
          'Yes. Exterior-only, interior-only, and full interior/exterior cleaning options are available.',
      },
      {
        question: 'Do you clean commercial storefront glass?',
        answer:
          'Yes. We provide commercial and storefront window cleaning. Tell us about your business type and preferred schedule when you request a quote.',
      },
      {
        question: 'What does a free estimate need from me?',
        answer:
          'Share your city, approximate property size or window count if known, whether you want interior and/or exterior cleaning, and any screens or tracks that need attention. Call (480) 737-0850 or use the form on this page.',
      },
      {
        question: 'Do you service nearby communities as well?',
        answer:
          'Yes. In addition to Show Low, we serve Pinetop-Lakeside, Snowflake, and nearby White Mountains communities. Contact us if you are unsure whether we cover your address.',
      },
    ],
    finalCtaHeading: 'Get a Free Window Cleaning Estimate',
    finalCtaCopy:
      'Request your free Show Low window cleaning estimate from Arizona Window Washing Pros. Call now or send the form below.',
    relatedCities: [
      {
        label: 'Pinetop-Lakeside window cleaning services',
        href: NORTHERN_AZ_PATHS.pinetopLakeside,
      },
      { label: 'window cleaning in Snowflake', href: NORTHERN_AZ_PATHS.snowflake },
    ],
    serviceLinks: [
      { label: 'residential window cleaning', href: '/services/residential-window-cleaning' },
      { label: 'commercial window cleaning', href: '/commercial-window-cleaning-arizona' },
      { label: 'track and sill cleaning', href: '/services/track-sill-cleaning' },
      { label: 'screen cleaning', href: '/services/screen-cleaning' },
      { label: 'contact page', href: '/contact' },
      { label: 'homepage', href: '/' },
    ],
  },

  snowflake: {
    id: 'snowflake',
    path: NORTHERN_AZ_PATHS.snowflake,
    cityName: 'Snowflake',
    displayName: 'Snowflake, AZ',
    defaultCity: 'Snowflake',
    callEventLabel: 'snowflake_seo_call',
    navLabel: 'Snowflake',
    navDescription:
      'Professional residential and commercial window cleaning for Snowflake, Arizona properties.',
    title: 'Window Cleaning in Snowflake, AZ',
    description:
      'Window cleaning in Snowflake, AZ for residential and commercial properties. Glass, screens, tracks, sills and frames. Request a free estimate.',
    h1: 'Professional Window Cleaning Services in Snowflake, AZ',
    heroSubtitle:
      'Arizona Window Washing Pros provides careful residential and commercial window cleaning for Snowflake homes and local businesses.',
    intro: [
      'Snowflake properties with many windows can take significant time to clean well by hand. Larger homes, open living spaces, and commercial glass all benefit from a professional approach that covers exterior panes thoroughly and can include interior detailing when needed.',
      'Arizona Window Washing Pros helps homeowners and small businesses keep glass clear with respectful, detail-focused service. We clean residential properties, support routine exterior maintenance, and provide commercial window cleaning when local businesses need a professional finish.',
    ],
    sections: [
      {
        heading: 'Window Cleaning for Snowflake Homes',
        paragraphs: [
          'Residential window cleaning in Snowflake is about making everyday living spaces feel brighter and better maintained. Exterior glass collects outdoor dust and residue. Interior glass shows fingerprints and smudges in high-traffic rooms.',
          'Homes with a large number of windows especially benefit from professional service. We quote based on the property and the services you choose, so you know what is included before we arrive.',
        ],
      },
      {
        heading: 'Detailed Interior and Exterior Cleaning',
        paragraphs: [
          'Exterior cleaning focuses on accessible outdoor glass and hard-to-reach panes where our water-fed pole system is a good fit. Interior cleaning uses traditional detailing to leave indoor glass clear and presentable.',
          'You can book exterior-only service for routine maintenance, or combine interior and exterior cleaning when you want a complete reset. Tell us which rooms or elevations matter most if you are prioritizing part of a larger home.',
        ],
      },
      {
        heading: 'Screen and Track Cleaning',
        paragraphs: [
          'Screens and tracks are easy to overlook, yet they affect how clean windows look and how smoothly they operate. Screen cleaning removes built-up dust and debris. Track and sill cleaning helps remove dirt that settles in the lower window areas.',
          'These services are available as part of a more detailed appointment. If your screens look dusty or tracks need attention, mention that when you request your free estimate.',
        ],
      },
      {
        heading: 'Window Cleaning for Local Businesses',
        paragraphs: [
          'Small businesses and commercial properties in Snowflake also need clean glass for a professional appearance. We can clean storefront windows and other commercial glass as part of a one-time visit or an ongoing plan.',
          'Business owners who want more information about commercial service can review our commercial window cleaning page or contact us directly for a Snowflake estimate.',
        ],
      },
      {
        heading: 'What Customers Can Expect',
        paragraphs: [
          'Customers can expect clear communication, a free quote before work begins, and professional service on the scheduled day. We are fully insured and focused on careful work around homes and businesses.',
          'If access notes matter—gates, pets, multi-story glass, or preferred arrival times—include those details in your message so we can plan the visit smoothly.',
        ],
        bullets: [
          'Free estimates by phone or online form',
          'Clear scope before service',
          'Respectful, professional on-site work',
        ],
      },
      {
        heading: 'Maintaining Clean Windows Throughout the Year',
        paragraphs: [
          'How often windows need cleaning depends on the property, nearby dust, how often doors and windows are used, and whether the home is occupied full-time. Some Snowflake homeowners prefer seasonal exterior cleanings. Others book a deeper interior and exterior service a few times a year.',
          'Routine exterior maintenance helps glass stay presentable between deeper cleans. We can help you choose a practical schedule when you request an estimate—without pushing services you do not need.',
        ],
      },
    ],
    included: sharedIncluded,
    faqs: [
      {
        question: 'Do you clean larger homes with many windows?',
        answer:
          'Yes. We clean residential properties of many sizes in Snowflake. Share approximate window count or home size when requesting a quote so we can estimate accurately.',
      },
      {
        question: 'Is screen cleaning available in Snowflake?',
        answer:
          'Yes. Screen cleaning can be added to your window cleaning appointment when requested.',
      },
      {
        question: 'Do you clean tracks and sills?',
        answer:
          'Yes. Track, sill, and frame cleaning can be included depending on the services selected for your visit.',
      },
      {
        question: 'Can local businesses get window cleaning?',
        answer:
          'Yes. We provide commercial window cleaning for local businesses and storefronts. Contact us for a free commercial estimate.',
      },
      {
        question: 'How do I request a free estimate?',
        answer:
          'Call or text (480) 737-0850, or fill out the quote form on this page with your contact details and service needs.',
      },
      {
        question: 'Do you also serve nearby towns?',
        answer:
          'Yes. We also serve Pinetop-Lakeside, Show Low, Taylor, and nearby White Mountains communities. Ask us if you are outside Snowflake city limits.',
      },
    ],
    finalCtaHeading: 'Request Your Free Estimate',
    finalCtaCopy:
      'Get a free Snowflake window cleaning estimate from Arizona Window Washing Pros. Call today or use the form below.',
    relatedCities: [
      {
        label: 'Pinetop-Lakeside window cleaning',
        href: NORTHERN_AZ_PATHS.pinetopLakeside,
      },
      { label: 'Show Low window washing', href: NORTHERN_AZ_PATHS.showLow },
    ],
    serviceLinks: [
      { label: 'residential window cleaning', href: '/services/residential-window-cleaning' },
      { label: 'exterior window cleaning', href: '/services/exterior-window-cleaning' },
      { label: 'interior window cleaning', href: '/services/interior-window-cleaning' },
      { label: 'screen cleaning', href: '/services/screen-cleaning' },
      { label: 'commercial window cleaning', href: '/commercial-window-cleaning-arizona' },
      { label: 'contact us', href: '/contact' },
    ],
  },
}

export function getNorthernAzCity(id: NorthernAzCityId): NorthernAzCityPage {
  return NORTHERN_AZ_CITIES[id]
}

export function getAllNorthernAzCities(): NorthernAzCityPage[] {
  return Object.values(NORTHERN_AZ_CITIES)
}

export function generateNorthernAzMetadata(id: NorthernAzCityId): Metadata {
  const city = getNorthernAzCity(id)
  return generateMetadata({
    title: city.title,
    description: city.description,
    path: city.path,
  })
}

export function generateNorthernAzServiceSchema(city: NorthernAzCityPage) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Window Cleaning in ${city.cityName}, AZ`,
    description: city.description,
    url: `${BUSINESS_INFO.website}${city.path}`,
    serviceType: 'Window Cleaning',
    provider: {
      '@id': `${BUSINESS_INFO.website}#organization`,
      '@type': 'ProfessionalService',
      name: BUSINESS_INFO.name,
      telephone: BUSINESS_INFO.phone,
      url: BUSINESS_INFO.website,
    },
    areaServed: {
      '@type': 'City',
      name: city.cityName,
      addressRegion: 'AZ',
      addressCountry: 'US',
    },
  }
}
