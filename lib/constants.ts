// Business Information (NAP - Name, Address, Phone)
export const BUSINESS_INFO = {
  name: 'Arizona Window Washing Pros',
  phone: '(480) 737-0850',
  phoneFormatted: '4807370850',
  email: 'info@arizonawindowwashingpros.com',
  serviceArea: ['Mesa', 'Gilbert', 'Queen Creek', 'Chandler', 'Scottsdale', 'Tempe', 'AZ'],
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
    keyword: 'mesa window washing',
    description: 'Professional window washing services in Mesa, Arizona.',
  },
  {
    id: 'gilbert',
    name: 'Gilbert',
    slug: 'gilbert-window-washing',
    keyword: 'gilbert window washing',
    description: 'Expert window cleaning in Gilbert, Arizona.',
  },
  {
    id: 'queen-creek',
    name: 'Queen Creek',
    slug: 'window-washing-queen-creek',
    keyword: 'window washing queen creek',
    description: 'Top-rated window washing in Queen Creek, Arizona.',
  },
  {
    id: 'chandler',
    name: 'Chandler',
    slug: 'chandler-window-washing',
    keyword: 'chandler window washing',
    description: 'Reliable window cleaning services in Chandler, Arizona.',
  },
  {
    id: 'scottsdale',
    name: 'Scottsdale',
    slug: 'scottsdale-window-washing',
    keyword: 'window washing scottsdale az',
    description: 'Premium window cleaning services in Scottsdale, Arizona.',
  },
  {
    id: 'tempe',
    name: 'Tempe',
    slug: 'tempe-window-washing',
    keyword: 'tempe window washing',
    description: 'Professional window cleaning services in Tempe, Arizona.',
  },
]

// Cities for contact form dropdown
export const CITIES = ['Mesa', 'Gilbert', 'Queen Creek', 'Chandler', 'Scottsdale', 'Tempe', 'Other']

