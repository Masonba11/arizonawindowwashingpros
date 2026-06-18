import type { Metadata } from 'next'
import { BUSINESS_INFO } from '@/lib/constants'

export const PINETOP_AD_PATH = '/window-cleaning-pinetop-show-low-offer' as const
export const PINETOP_SEO_PATH = '/window-cleaning-pinetop-show-low' as const

export const PINETOP_CONFIG = {
  name: BUSINESS_INFO.name,
  phone: BUSINESS_INFO.phone,
  phoneFormatted: BUSINESS_INFO.phoneFormatted,
  email: BUSINESS_INFO.email,
  adPath: PINETOP_AD_PATH,
  seoPath: PINETOP_SEO_PATH,
  formAnchor: '#quote',
  adCallEvent: 'pinetop_show_low_ad_call',
  adFormConversion: 'pinetop_show_low_ad_quote',
  seoCallEvent: 'pinetop_show_low_seo_call',
  web3FormsAccessKey: 'f75947a5-1ebe-495f-b20c-03a4f4a4037b',
  web3FormsBackupAccessKey: 'd7d10cb9-80ac-4561-8ce4-75872ef4f92c',
} as const

export const PINETOP_ANCHOR_SCROLL =
  'scroll-mt-[6.5rem] sm:scroll-mt-[7rem] md:scroll-mt-28' as const

export const PINETOP_SERVICE_AREAS = [
  'Pinetop',
  'Pinetop-Lakeside',
  'Show Low',
  'Lakeside',
  'White Mountain',
  'Taylor',
  'Snowflake',
  'Heber-Overgaard',
  'Nearby White Mountains communities',
] as const

export const PINETOP_AD_METADATA: Metadata = {
  title: 'Pinetop & Show Low Window Cleaning | Free Screen Cleaning Offer',
  description:
    'Professional window cleaning in Pinetop, Show Low, Lakeside, and surrounding White Mountains areas. Free screen cleaning included for a limited time. Get a free quote today.',
  alternates: { canonical: PINETOP_AD_PATH },
  openGraph: {
    title: 'Pinetop & Show Low Window Cleaning | Free Screen Cleaning Offer',
    description:
      'Professional window cleaning in Pinetop, Show Low, Lakeside, and surrounding White Mountains areas. Free screen cleaning included for a limited time. Get a free quote today.',
    type: 'website',
  },
}

export const PINETOP_SEO_METADATA: Metadata = {
  title: 'Window Cleaning Pinetop & Show Low AZ | Arizona Window Washing Pros',
  description:
    'Professional window cleaning in Pinetop, Show Low, Pinetop-Lakeside, Lakeside, and surrounding White Mountains areas. Interior, exterior, screens, tracks, sills, and purified water cleaning.',
  alternates: { canonical: PINETOP_SEO_PATH },
  openGraph: {
    title: 'Window Cleaning Pinetop & Show Low AZ | Arizona Window Washing Pros',
    description:
      'Professional window cleaning in Pinetop, Show Low, Pinetop-Lakeside, Lakeside, and surrounding White Mountains areas. Interior, exterior, screens, tracks, sills, and purified water cleaning.',
    type: 'website',
  },
}

export const PINETOP_AD_FAQS = [
  {
    question: 'Do you service Pinetop and Show Low?',
    answer:
      'Yes, we are now taking appointments in Pinetop-Lakeside, Show Low, Lakeside, and nearby White Mountains areas.',
  },
  {
    question: 'Is screen cleaning really free?',
    answer:
      'Yes, screen cleaning is included for free with your window cleaning service during this limited-time offer.',
  },
  {
    question: 'Do you clean cabins and vacation homes?',
    answer:
      'Yes, we clean full-time homes, cabins, vacation homes, rentals, and Airbnb properties.',
  },
  {
    question: 'Do you clean interior and exterior windows?',
    answer:
      'Yes, we offer exterior-only, interior-only, and full interior/exterior cleaning options.',
  },
  {
    question: 'What is a DI / RO water system?',
    answer:
      'It is a purified water system that removes minerals from the water so exterior windows can dry cleaner with fewer spots.',
  },
] as const

export const PINETOP_SEO_FAQS = [
  {
    question: 'How often should windows be cleaned in Pinetop or Show Low?',
    answer:
      'Many homeowners clean their windows seasonally or before guests arrive, especially for cabins, rentals, and vacation homes.',
  },
  {
    question: 'Do you clean vacation rental windows?',
    answer:
      'Yes, we clean windows for vacation rentals, cabins, Airbnb properties, and second homes.',
  },
  {
    question: 'Do you clean screens?',
    answer:
      'Yes, screen cleaning is available, and we may have a limited-time free screen cleaning offer depending on availability.',
  },
  {
    question: 'Do you clean tracks and sills?',
    answer:
      'Yes, tracks, sills, and frames can be included depending on the service selected.',
  },
  {
    question: 'Do you use purified water?',
    answer:
      'Yes, we use a professional DI / RO purified water system for many exterior window cleaning jobs.',
  },
  {
    question: 'Can I get an exterior-only cleaning?',
    answer:
      'Yes, exterior-only, interior-only, and full interior/exterior cleaning options are available.',
  },
  {
    question: 'Do you service Pinetop and Show Low?',
    answer:
      'Yes, we are now taking appointments in Pinetop-Lakeside, Show Low, Lakeside, and nearby White Mountains areas.',
  },
  {
    question: 'Do you clean cabins and vacation homes?',
    answer:
      'Yes, we clean full-time homes, cabins, vacation homes, rentals, and Airbnb properties.',
  },
  {
    question: 'What is a DI / RO water system?',
    answer:
      'It is a purified water system that removes minerals from the water so exterior windows can dry cleaner with fewer spots.',
  },
] as const

export const PINETOP_AD_SERVICES = [
  { title: 'Exterior Window Cleaning', body: 'DI / RO water-fed pole cleaning for spot-free exterior glass.' },
  { title: 'Interior Window Cleaning', body: 'Traditional detailing for smudge-free interior panes.' },
  { title: 'Screen Cleaning', body: 'Included free with window cleaning during this limited-time offer.' },
  { title: 'Track Cleaning', body: 'Remove dust and debris from window tracks.' },
  { title: 'Sill & Frame Cleaning', body: 'Wipe down sills and frames for a finished look.' },
  { title: 'Cabin Window Cleaning', body: 'Mountain cabins and second homes welcome.' },
  { title: 'Vacation Home Window Cleaning', body: 'Seasonal cleanings before you arrive or after guests.' },
  { title: 'Rental / Airbnb Window Cleaning', body: 'Keep rentals guest-ready with clear glass.' },
] as const

export const PINETOP_SEO_SERVICES = [
  {
    title: 'Exterior Window Cleaning',
    body: 'Exterior window cleaning Pinetop and Show Low homeowners trust for dust, pollen, and weather buildup. Our DI / RO water-fed pole system helps exterior glass dry cleaner with fewer spots — ideal for second-story and hard-to-reach windows on mountain homes.',
  },
  {
    title: 'Interior Window Cleaning',
    body: 'Interior window cleaning Show Low and Pinetop residents book for fingerprints, smudges, and a brighter living space. We detail interior glass carefully so your home feels fresh inside and out.',
  },
  {
    title: 'Screen Cleaning',
    body: 'Screens collect White Mountains dust and pollen. Ask about our limited-time free screen cleaning offer when you book window cleaning — cleaner screens help freshly washed windows look even better.',
  },
  {
    title: 'Track Cleaning',
    body: 'Window tracks trap dirt, bugs, and debris over time. Track cleaning can be added so sliding windows operate smoothly and look maintained.',
  },
  {
    title: 'Sill & Frame Cleaning',
    body: 'Sills and frames get wiped down as part of a detail-focused service so the full window area looks polished, not just the glass.',
  },
  {
    title: 'DI / RO Water-Fed Pole Cleaning',
    body: 'Our purified water exterior system removes minerals before water touches the glass. Great for cabin window cleaning Pinetop properties and vacation homes with elevated or awkward exterior panes.',
  },
  {
    title: 'Cabin Window Cleaning',
    body: 'Cabins and mountain retreats need seasonal attention. We help full-time and part-time cabin owners keep glass clear between visits.',
  },
  {
    title: 'Vacation Rental Window Cleaning',
    body: 'Airbnb window cleaning Show Low hosts use to impress guests. Schedule before check-in or between bookings for a spotless welcome.',
  },
  {
    title: 'Hard Water Spot Help',
    body: 'Hard water and mineral buildup can cloud glass over time. We can address spotting depending on condition and include it in your custom quote.',
  },
] as const

export const DI_RO_BENEFITS = [
  'Purified water cleaning',
  'Helps reduce spotting',
  'Great for second-story windows',
  'No harsh residue',
  'Safer and efficient',
] as const

export const WHY_CHOOSE_US = [
  'Fully insured',
  'Rated 5 stars',
  'Professional equipment',
  'Friendly and reliable',
  'Detail-focused service',
  'Interior and exterior options',
  'Great for cabins and vacation homes',
  'Easy quote process',
] as const
