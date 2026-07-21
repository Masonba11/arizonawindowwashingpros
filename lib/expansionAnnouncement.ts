import type { ContentLandingConfig } from '@/components/seo/ContentLandingPage'
import { NORTHERN_AZ_PATHS } from '@/lib/northernArizona'

/**
 * Service-area expansion announcement for northern Arizona / White Mountains.
 *
 * Publication notes (for article schema when the route is wired):
 * - publishedAt: 2026-07-21
 * - updatedAt: 2026-07-21
 * - Do not claim a physical White Mountains office unless confirmed.
 * - Tone: now serving / expanding / accepting appointments.
 */
export const EXPANSION_ANNOUNCEMENT_META = {
  publishedAt: '2026-07-21',
  updatedAt: '2026-07-21',
  /** Use when wiring Article schema on the page route. */
  headline: 'Arizona Window Washing Pros Is Now Serving the White Mountains',
} as const

export const EXPANSION_ANNOUNCEMENT: ContentLandingConfig = {
  path: '/now-serving-pinetop-show-low-snowflake',
  title: 'Now Serving Pinetop, Show Low and Snowflake',
  description:
    'Arizona Window Washing Pros is expanding window-cleaning service to Pinetop-Lakeside, Show Low, Snowflake and nearby White Mountain communities. Call (480) 737-0850.',
  h1: 'Arizona Window Washing Pros Is Now Serving the White Mountains',
  heroSubtitle:
    'We are expanding professional residential and commercial window cleaning into Pinetop-Lakeside, Show Low, Snowflake, and nearby White Mountains communities—and we are accepting appointments now.',
  breadcrumbName: 'Now Serving the White Mountains',
  defaultService: 'White Mountains Window Cleaning',
  callEventLabel: 'expansion_announcement_call',
  intro: [
    'Arizona Window Washing Pros is expanding window-cleaning service into northern Arizona’s White Mountains. We are now serving Pinetop-Lakeside, Show Low, Snowflake, and nearby communities, and we are accepting appointments for homes, cabins, vacation properties, and local businesses.',
    'This announcement explains where we are opening availability, what services we provide, and how to request a free estimate. It is about expanding service coverage and scheduling appointments—not about opening a new physical office location.',
    'If you have been looking for professional window cleaning in the White Mountains, call (480) 737-0850 or use the form on this page to get on the calendar.',
  ],
  sections: [
    {
      heading: 'Expanding Our Window Cleaning Service in Northern Arizona',
      paragraphs: [
        'For property owners in the White Mountains, finding dependable window cleaning that covers both everyday homes and seasonal cabins can take real effort. Arizona Window Washing Pros is expanding into this region to provide clear scheduling, professional equipment, and straightforward estimates for residential and commercial glass.',
        'Expanding service means we are opening availability for appointments in Pinetop-Lakeside, Show Low, Snowflake, and surrounding White Mountain communities where routing allows. Whether you need a one-time exterior clean or a fuller interior and exterior package with screens and tracks, you can request a quote and we will let you know what we can schedule.',
        'Our approach stays the same as elsewhere in Arizona: define the scope, provide a free estimate, and complete the work carefully. Fully insured service and clear communication are part of how we work with new customers in an expanding area.',
      ],
    },
    {
      heading: 'Why We Are Serving the White Mountains',
      paragraphs: [
        'The White Mountains combine full-time neighborhoods with a large number of cabins, second homes, and vacation rentals. Those property types create a natural need for window cleaning timed around arrivals, guest turnovers, and long vacant stretches—not only around weekly household routines.',
        'Local businesses also benefit from clean storefront glass that makes entrances look maintained. By accepting appointments across the region, we can support homeowners, absentee vacation-home owners, property managers, and commercial clients who want professional results without inventing complicated logistics on their own.',
        'We are here to provide window cleaning throughout the White Mountains with the services we already offer: exterior cleaning, interior detailing, residential packages, commercial and storefront work, and optional screen, track, sill, and frame cleaning.',
      ],
    },
    {
      heading: 'Communities We Now Serve',
      paragraphs: [
        'We are now serving three primary communities with dedicated location pages: Pinetop-Lakeside, Show Low, and Snowflake. Those pages go deeper on local residential and commercial needs. This announcement is the broader “now serving” message for the expansion.',
        'Nearby White Mountain communities such as Lakeside, Taylor, and other surrounding areas may also be discussed when you request service. Availability depends on location and scheduling, so include your community name when you ask for an estimate.',
        'For a regional overview that links homes, cabins, vacation properties, and businesses together, visit our White Mountains window cleaning hub. For town-specific details, use the city pages linked below.',
      ],
      bullets: [
        'Pinetop-Lakeside — homes, cabins, and local businesses',
        'Show Low — residential, rentals, and storefronts',
        'Snowflake — residential and commercial appointments',
        'Nearby White Mountains communities by appointment',
      ],
    },
    {
      heading: 'Window Cleaning for Homes, Cabins and Vacation Properties',
      paragraphs: [
        'Primary residences in the White Mountains often need seasonal or periodic glass cleaning to keep interiors bright and exteriors looking cared for. Residential window cleaning can be exterior-only, interior-only, or a combined interior and exterior visit based on access and goals.',
        'Cabins and vacation homes are a major part of why this expansion matters. Properties that sit closed for weeks collect outdoor film on glass and pollen on screens. Scheduling cleaning before seasonal arrival, after a vacant period, or between guest stays helps owners and managers keep mountain properties guest-ready.',
        'If you live outside the area and only visit occasionally, you can still request service by phone or online form. Exterior-only cleaning is often easiest for remote owners when outdoor access is arranged. Interior cleaning requires indoor access, which can be coordinated through a local contact when appropriate.',
        'Explore our cabin window cleaning and vacation-home window cleaning pages for more detail on seasonal timing, or start with a free estimate that lists your property type and preferred dates.',
      ],
    },
    {
      heading: 'Commercial and Storefront Window Cleaning',
      paragraphs: [
        'As we expand into the White Mountains, we are also accepting commercial window cleaning appointments. Storefront glass, entry doors, and customer-facing interior panes help businesses look open and professional from the sidewalk and parking lot.',
        'Commercial clients can request a one-time storefront cleaning or ask about recurring schedules that match foot traffic and business hours. Flexible timing matters for shops and offices, and we plan around that whenever availability allows.',
        'Show Low and other commercial corridors in the region are a natural fit for recurring exterior maintenance. Tell us about your storefront size, whether interior glass should be included, and your preferred cleaning frequency when you request a quote.',
      ],
    },
    {
      heading: 'What Is Included in Our Window Cleaning Service?',
      paragraphs: [
        'Every free estimate is customized, but the building blocks are consistent. Exterior window cleaning addresses outdoor buildup on glass. Interior window cleaning uses traditional detailing for fingerprints and indoor film. Screen cleaning and track, sill, and frame detailing can be added when you want a more complete finish around each opening.',
        'On many exterior jobs we use professional DI / RO purified water equipment so glass can dry with fewer mineral spots—useful on elevated panes and hard-to-reach cabin glass. Interior work is careful and methodical. Screens and tracks are cleaned when selected; we do not repair or replace screens as part of standard cleaning.',
        'Residential, cabin, vacation-home, and commercial appointments all draw from this same service set. Choosing what to include depends on your property condition, access, and budget—not on a one-size-fits-all package.',
      ],
      bullets: [
        'Exterior window glass cleaning',
        'Interior window cleaning when requested',
        'Screen cleaning when requested',
        'Track, sill, and frame cleaning when requested',
        'One-time and recurring options for qualifying properties',
      ],
    },
    {
      heading: 'How to Request an Estimate',
      paragraphs: [
        'Requesting an estimate is the fastest way to confirm service for your White Mountains property. Call or text Arizona Window Washing Pros at (480) 737-0850, or submit the quote form on this page.',
        'Include your community, property type, approximate number of windows or stories, and whether you need exterior glass, interior glass, screens, or tracks. Mention pre-arrival timing, guest turnover, or business-hour preferences when those details matter.',
        'We follow up with a free estimate based on the information you provide. Once you approve the scope, we schedule an appointment according to availability as we continue opening service in the region.',
      ],
    },
    {
      heading: 'Schedule Window Cleaning in the White Mountains',
      paragraphs: [
        'We are accepting appointments now for Pinetop-Lakeside, Show Low, Snowflake, and nearby White Mountains communities where we can route service. Early requests help us plan travel days and match your arrival or business calendar whenever possible.',
        'Use the city pages to learn more about each town, the White Mountains hub for a regional overview, and our residential or commercial service pages if you already know the type of cleaning you need. Then call (480) 737-0850 or send a quote request to schedule.',
        'Thank you for welcoming Arizona Window Washing Pros as we expand window-cleaning service into northern Arizona. We look forward to helping homes, cabins, vacation properties, and businesses keep their glass clear.',
      ],
    },
  ],
  included: [
    'Exterior window cleaning',
    'Interior window cleaning when requested',
    'Screen, track, sill, and frame detailing when requested',
    'Residential, cabin, and vacation-home appointments',
    'Commercial and storefront appointments',
    'Free estimates by phone or online form',
  ],
  faqs: [
    {
      question: 'Are you now serving Pinetop, Show Low, and Snowflake?',
      answer:
        'Yes. Arizona Window Washing Pros is expanding service and accepting window-cleaning appointments in Pinetop-Lakeside, Show Low, Snowflake, and nearby White Mountains communities where scheduling allows.',
    },
    {
      question: 'Did you open a White Mountains office?',
      answer:
        'This announcement is about expanding service coverage and accepting appointments in the region. It does not announce a new physical office location.',
    },
    {
      question: 'What types of properties can you clean?',
      answer:
        'We clean windows for primary homes, cabins, vacation homes, rentals, and commercial storefronts and businesses.',
    },
    {
      question: 'Do you clean interior and exterior windows?',
      answer:
        'Yes. Exterior-only, interior-only, and combined interior and exterior cleaning options are available depending on access and your quote.',
    },
    {
      question: 'Can property managers and remote owners book service?',
      answer:
        'Yes. Property managers and owners who live outside the area can request estimates by phone or form and arrange access details for the appointment.',
    },
    {
      question: 'How do I schedule window cleaning in the White Mountains?',
      answer:
        'Call or text (480) 737-0850, or submit the form on this page with your community and service needs. We will follow up with a free estimate and scheduling options.',
    },
    {
      question: 'Where can I read more about each city?',
      answer:
        'Visit our Pinetop-Lakeside, Show Low, and Snowflake window cleaning pages, or start with the White Mountains regional hub for an overview of the area.',
    },
  ],
  finalCtaHeading: 'Schedule White Mountains Window Cleaning',
  finalCtaCopy:
    'Arizona Window Washing Pros is now serving Pinetop-Lakeside, Show Low, Snowflake, and nearby communities. Call (480) 737-0850 or request a free estimate to get on the calendar.',
  relatedLinks: [
    { label: 'Window cleaning in Pinetop-Lakeside', href: NORTHERN_AZ_PATHS.pinetopLakeside },
    { label: 'Window cleaning in Show Low', href: NORTHERN_AZ_PATHS.showLow },
    { label: 'Window cleaning in Snowflake', href: NORTHERN_AZ_PATHS.snowflake },
    { label: 'White Mountains window cleaning hub', href: '/white-mountains-window-cleaning' },
    { label: 'Residential window cleaning', href: '/services/residential-window-cleaning' },
    { label: 'Commercial window cleaning', href: '/commercial-window-cleaning-arizona' },
    { label: 'Cabin window cleaning', href: '/cabin-window-cleaning' },
    { label: 'Vacation-home window cleaning', href: '/vacation-home-window-cleaning' },
    { label: 'Contact us', href: '/contact' },
  ],
  serviceSchemaName: 'White Mountains Window Cleaning Expansion',
}
