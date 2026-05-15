// Business Information (NAP - Name, Address, Phone)
export const BUSINESS_INFO = {
  name: 'Arizona Window Washing Pros',
  phone: '(480) 737-0850',
  phoneFormatted: '4807370850',
  email: 'info@arizonawindowwashingpros.com',
  serviceArea: ['Mesa', 'Gilbert', 'Queen Creek', 'Chandler', 'Scottsdale', 'Tempe', 'San Tan Valley', 'AZ'],
  address: {
    street: 'Arizona',
    city: 'Mesa',
    state: 'AZ',
    zip: '85201',
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
]

// Locations
export const LOCATIONS = [
  {
    id: 'mesa',
    name: 'Mesa',
    slug: 'mesa-window-washing',
    keyword: 'mesa window cleaning',
    description: 'Professional window cleaning services in Mesa, Arizona.',
  },
  {
    id: 'gilbert',
    name: 'Gilbert',
    slug: 'gilbert-window-washing',
    keyword: 'gilbert window cleaning',
    description: 'Expert window cleaning in Gilbert, Arizona.',
  },
  {
    id: 'queen-creek',
    name: 'Queen Creek',
    slug: 'window-washing-queen-creek',
    keyword: 'window cleaning queen creek',
    description: 'Top-rated window cleaning in Queen Creek, Arizona.',
  },
  {
    id: 'chandler',
    name: 'Chandler',
    slug: 'chandler-window-washing',
    keyword: 'chandler window cleaning',
    description: 'Reliable window cleaning services in Chandler, Arizona.',
  },
  {
    id: 'scottsdale',
    name: 'Scottsdale',
    slug: 'scottsdale-window-washing',
    keyword: 'window cleaning scottsdale az',
    description: 'Premium window cleaning services in Scottsdale, Arizona.',
  },
  {
    id: 'tempe',
    name: 'Tempe',
    slug: 'tempe-window-washing',
    keyword: 'tempe window cleaning',
    description: 'Professional window cleaning services in Tempe, Arizona.',
  },
  {
    id: 'san-tan-valley',
    name: 'San Tan Valley',
    slug: 'san-tan-valley-window-washing',
    keyword: 'san tan valley window cleaning',
    description: 'Professional window cleaning services in San Tan Valley, Arizona.',
  },
]

// Cities for contact form dropdown
export const CITIES = ['Mesa', 'Gilbert', 'Queen Creek', 'Chandler', 'Scottsdale', 'Tempe', 'San Tan Valley', 'Other']

