// Business Information (NAP - Name, Address, Phone)
export const BUSINESS_INFO = {
  name: 'Arizona Window Washing Pros',
  phone: '(480) 737-0850',
  phoneFormatted: '4807370850',
  email: 'arizonawindowwashingpros@gmail.com',
  serviceArea: [
    'Pinetop',
    'Lakeside',
    'Pinetop-Lakeside',
    'Show Low',
    'Snowflake',
    'AZ',
  ],
  address: {
    street: 'Arizona',
    city: 'Show Low',
    state: 'AZ',
    zip: '85901',
  },
  hours: {
    monday: '7:00 AM - 6:00 PM',
    tuesday: '7:00 AM - 6:00 PM',
    wednesday: '7:00 AM - 6:00 PM',
    thursday: '7:00 AM - 6:00 PM',
    friday: '7:00 AM - 6:00 PM',
    saturday: '8:00 AM - 4:00 PM',
    sunday: 'Closed',
  },
  website: 'https://arizonawindowwashingpros.com',
  socialMedia: {
    facebook: 'https://www.facebook.com/profile.php?id=61586875071307',
    instagram: 'https://www.instagram.com/azwindowwashingpros/',
    tiktok: 'https://www.tiktok.com/@azwindowwashingpros?_r=1&_t=ZP-937shIX1VTL',
    youtube: 'https://www.youtube.com/@azwindowwashingpros',
  },
}

/** Primary hero / above-the-fold image site-wide (source asset: `hero5:14.png` → `public/hero-5-14.png`). */
export const SITE_HERO_IMAGE = '/hero-5-14.png'

// Services
export const SERVICES = [
  {
    id: 'exterior-window-cleaning',
    name: 'Exterior Window Cleaning',
    slug: 'exterior-window-cleaning',
    description: 'Professional exterior window cleaning for crystal-clear views. Our most popular and cost-effective service.',
  },
  {
    id: 'interior-window-cleaning',
    name: 'Interior Window Cleaning',
    slug: 'interior-window-cleaning',
    description: 'Optional premium add-on service for interior glass cleaning and detailing.',
  },
  {
    id: 'screen-cleaning',
    name: 'Screen Cleaning (Add-On)',
    slug: 'screen-cleaning',
    description: 'Thorough screen cleaning to remove dust, pollen, and debris. Available as an add-on service.',
  },
  {
    id: 'track-sill-cleaning',
    name: 'Track & Sill Cleaning',
    slug: 'track-sill-cleaning',
    description: 'Deep cleaning of window tracks and sills to remove dirt, debris, and buildup.',
  },
  {
    id: 'residential-window-cleaning',
    name: 'Residential Window Cleaning',
    slug: 'residential-window-cleaning',
    description:
      'Complete residential window cleaning for homes, including interior, exterior, screens, tracks, and frames.',
  },
]

// Locations
export type Location = {
  id: string
  name: string
  slug: string
  keyword: string
  description: string
  /** When set, links to this path instead of /locations/{slug} */
  path?: string
}

export const LOCATIONS: Location[] = [
  {
    id: 'pinetop',
    name: 'Pinetop',
    slug: 'window-cleaning-pinetop-lakeside-az',
    path: '/window-cleaning-pinetop-lakeside-az',
    keyword: 'window cleaning pinetop az',
    description: 'Residential, cabin, and commercial window cleaning in Pinetop, Arizona.',
  },
  {
    id: 'lakeside',
    name: 'Lakeside',
    slug: 'window-cleaning-pinetop-lakeside-az',
    path: '/window-cleaning-pinetop-lakeside-az',
    keyword: 'window cleaning lakeside az',
    description: 'Window cleaning for homes, cabins, and businesses in Lakeside, Arizona.',
  },
  {
    id: 'show-low',
    name: 'Show Low',
    slug: 'window-cleaning-show-low-az',
    path: '/window-cleaning-show-low-az',
    keyword: 'window cleaning show low az',
    description:
      'Residential and commercial window cleaning for homes, rentals, and storefronts in Show Low, AZ.',
  },
  {
    id: 'snowflake',
    name: 'Snowflake',
    slug: 'window-cleaning-snowflake-az',
    path: '/window-cleaning-snowflake-az',
    keyword: 'window cleaning snowflake az',
    description:
      'Professional residential and commercial window cleaning for Snowflake, Arizona properties.',
  },
]

export function getLocationHref(location: Pick<Location, 'slug' | 'path'>): string {
  return location.path ?? `/locations/${location.slug}`
}

// Cities for contact form dropdown
export const CITIES = [
  'Pinetop',
  'Lakeside',
  'Pinetop-Lakeside',
  'Show Low',
  'Snowflake',
  'Other',
]

