import type { Metadata } from 'next'
import { BUSINESS_INFO } from '@/lib/constants'
import { generateMetadata } from '@/lib/seo'

export const NORTHERN_AZ_PATHS = {
  pinetopLakeside: '/window-cleaning-pinetop-lakeside-az',
  showLow: '/window-cleaning-show-low-az',
  snowflake: '/window-cleaning-snowflake-az',
  whiteMountains: '/white-mountains-window-cleaning',
  expansion: '/now-serving-pinetop-show-low-snowflake',
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
      'Professional window cleaning in Pinetop-Lakeside, AZ for homes, cabins and businesses. Interior, exterior, screens, tracks and frames. Request a free quote.',
    h1: 'Professional Window Cleaning in Pinetop-Lakeside, AZ',
    heroSubtitle:
      'Arizona Window Washing Pros is accepting appointments for homes, cabins, vacation properties, and local businesses throughout Pinetop and Lakeside.',
    intro: [
      'Arizona Window Washing Pros is now serving Pinetop-Lakeside with professional residential and commercial window cleaning. Whether you own a full-time home, a seasonal cabin, or a local business that needs presentable glass, we provide careful cleaning for the windows that shape how your property looks and feels.',
      'Pinetop-Lakeside properties often collect pollen, dust, and outdoor buildup that leave windows looking dull even when the rest of the home is well kept. Fingerprints and indoor film build up on interior panes, while dirty screens and tracks can make freshly washed glass still look hazy.',
      'We offer exterior window cleaning, interior detailing when requested, and optional screen, track, sill, and frame cleaning. Homeowners, cabin owners, vacation-rental hosts, and business owners can request a free estimate and schedule around occupancy plans or business hours. We serve Pinetop, Lakeside, Show Low, and Snowflake.',
    ],
    sections: [
      {
        heading: 'Window Cleaning for Pinetop-Lakeside Homes and Businesses',
        paragraphs: [
          'Pinetop-Lakeside includes primary residences, weekend cabins, seasonal homes, vacation rentals, and local storefronts. A year-round home may need routine exterior maintenance plus occasional interior detailing. A cabin that has remained vacant often needs a fuller reset before family arrives. A business may focus on entrance and customer-facing panes.',
          'Arizona Window Washing Pros provides window cleaning throughout Pinetop and Lakeside with a clear scope before work begins. Tell us whether you need interior glass, exterior glass, or both, and whether screens or tracks need attention. We will help you choose a practical one-time cleaning or a recurring rhythm that fits how the property is used.',
          'If you manage more than one White Mountains property, mention that when you request a quote. Serving homeowners and businesses here also means coordinating access notes, gate codes, and preferred arrival windows—especially for cabins and rentals that are not occupied every week.',
        ],
      },
      {
        heading: 'Residential Window Cleaning',
        paragraphs: [
          'Residential window cleaning in Pinetop-Lakeside helps everyday living spaces feel brighter and better maintained. Exterior glass collects outdoor dust, pollen residue, and weather-related film. Interior glass shows smudges and fingerprints around high-traffic rooms, patio doors, and guest areas.',
          'Our residential work is detail-focused and respectful of your property. Exterior cleaning often uses professional DI / RO purified water equipment so glass can dry with fewer mineral spots. Interior panes are cleaned with careful traditional detailing when that service is part of your quote. You can book exterior-only, interior-only, or combined interior and exterior cleaning.',
          'Primary residences, family homes, and second homes all benefit from a clear estimate based on the property. Share approximate window count, number of stories, and any hard-to-reach elevations when you request service so we can plan accurately.',
        ],
        bullets: [
          'Full-time homes and family residences',
          'Interior-only, exterior-only, or combined cleaning',
          'Optional screens, tracks, sills, and frames',
          'One-time refresh or routine maintenance',
        ],
      },
      {
        heading: 'Cabin and Vacation-Home Window Cleaning',
        paragraphs: [
          'Many White Mountains cabins and vacation homes sit unused for stretches of time. Between visits, windows collect outdoor dust, screens gather pollen, and tracks hold grit that makes the whole window area look neglected. Seasonal cleaning before arrival—or after guests leave—helps the property look ready for the next stay.',
          'Cabin and vacation-home window cleaning are a natural fit for Pinetop-Lakeside. Owners who live outside the area often need service timed to opening for the season, preparing for guests, or resetting after an extended vacancy. Property managers and rental hosts can request cleaning between stays so guests walk into clear glass.',
          'When you request a quote, mention move-in, move-out, or between-guest timing, whether access should be arranged while you are away, and whether interior rooms should be included. We schedule around occupancy plans whenever possible.',
        ],
      },
      {
        heading: 'Interior and Exterior Window Cleaning',
        paragraphs: [
          'Exterior window cleaning focuses on outdoor buildup—dust, pollen, and residue that make even a well-kept home look tired from the curb. Interior window cleaning targets fingerprints, smudges, and indoor film that affect how rooms feel in natural light.',
          'Many Pinetop-Lakeside customers book both sides for a complete result, especially before hosting, listing a home, or opening a cabin for the season. Others schedule exterior-only service more often and add interior cleaning when they want a deeper refresh. Exterior-only, interior-only, and full interior and exterior options are all available.',
          'If only certain elevations or rooms matter most—such as the front of the house or main living areas—tell us when you request an estimate. Prioritizing high-visibility glass is a practical way to improve curb appeal without cleaning every pane on every visit.',
        ],
      },
      {
        heading: 'Screen, Track, Sill and Frame Cleaning',
        paragraphs: [
          'Screens collect dust and debris that can make clean windows still look dull. Tracks and sills gather dirt that affects appearance and how smoothly windows operate. A light frame wipe-down helps the finished area look complete.',
          'Screen, track, sill, and frame detailing can be added when you want a more thorough result—especially after a vacant season, before guests arrive, or whenever screens look dusty against freshly cleaned panes.',
          'Ask about these services when you submit your estimate request so they are confirmed in the scope. These are cleaning services—not repair, restoration, or replacement of damaged screens or hardware.',
        ],
      },
      {
        heading: 'Commercial Window Cleaning',
        paragraphs: [
          'Local businesses and storefronts in Pinetop-Lakeside rely on clean glass for a strong first impression. Commercial window cleaning can include exterior storefront panes and, when requested, interior glass that customers see every day.',
          'Ask about a one-time clean or a recurring schedule that fits your business hours. We are accepting commercial appointments in Pinetop-Lakeside alongside residential and cabin work. Learn more on our commercial and storefront pages, or request a quote for your location.',
        ],
      },
      {
        heading: 'What Is Included in Our Window Cleaning Service?',
        paragraphs: [
          'Every quote is customized, but most visits start with exterior glass cleaning. Interior cleaning, screen cleaning, and track or sill detailing can be added based on your goals. Light frame wipe-downs are part of detailing when that work is selected.',
          'Confirmed services include exterior and interior window cleaning, residential and commercial cleaning, storefront cleaning, screen, track, sill, and frame cleaning, plus vacation-home and cabin window cleaning.',
          'For exterior work, we use professional DI / RO purified water equipment on many jobs so glass can dry with fewer mineral spots. Interior glass is cleaned with careful traditional detailing. Screens, tracks, sills, and frames are cleaned when selected as part of your appointment.',
        ],
        bullets: [
          'Exterior glass cleaning',
          'Interior glass cleaning when requested',
          'Screen cleaning when requested',
          'Track, sill, and frame detailing when requested',
          'Residential, cabin, vacation-home, and commercial options',
        ],
      },
      {
        heading: 'When to Schedule Window Cleaning',
        paragraphs: [
          'Many homeowners schedule window cleaning seasonally, before hosting guests, after a dusty stretch, or when glass starts looking dull. Cabin and vacation-home owners often clean before opening for the season, after an extended vacancy, or between rental stays. Businesses may prefer a steady routine so entrances stay presentable.',
          'How often windows need attention depends on occupancy, nearby dust and pollen, and whether you want exterior maintenance alone or a full interior and exterior reset. Tell us how the property is used and we can suggest a practical cadence when you request your free estimate.',
          'One-time cleaning is available whenever you need a reset. Routine exterior maintenance helps glass stay presentable between deeper cleans. Preparing a property for arrival and preparing a cabin for guests are common reasons to book in the White Mountains.',
        ],
      },
      {
        heading: 'How the Estimate Process Works',
        paragraphs: [
          'Call or text (480) 737-0850, or submit the quote form on this page with your city, property type, and service needs. Share approximate window count or home size if known, number of stories, whether you want interior and/or exterior cleaning, and any screens or tracks that need attention.',
          'We follow up with a free estimate based on the details you provide. Once you approve the scope, we schedule a convenient appointment and complete the selected services. Exterior-only cleaning can often be completed without you present when access is arranged. Interior cleaning typically requires access inside the home.',
          'If access notes matter—gates, pets, multi-story glass, cabin keys, or preferred arrival times—include those details so we can plan smoothly. We are fully insured and keep the quote process straightforward for homeowners, cabin owners, and local businesses throughout Pinetop-Lakeside.',
        ],
        bullets: [
          'Request a free estimate by phone or form',
          'Confirm scope for home, cabin, rental, or business',
          'Schedule and complete the selected services',
        ],
      },
    ],
    included: sharedIncluded,
    faqs: [
      {
        question: 'Do you clean both the inside and outside of windows?',
        answer:
          'Yes. We offer exterior-only, interior-only, and combined interior and exterior window cleaning depending on what you request in your quote.',
      },
      {
        question: 'Do you clean screens and window tracks?',
        answer:
          'Yes. Screen cleaning and track, sill, and frame detailing can be included when those services are selected as part of your appointment.',
      },
      {
        question: 'Can you clean a cabin or vacation home?',
        answer:
          'Yes. We clean full-time homes, cabins, vacation homes, and rental properties in the Pinetop-Lakeside area. Tell us about occupancy timing when you request a quote.',
      },
      {
        question: 'Do I need to be present during the service?',
        answer:
          'It depends on the scope. Exterior-only cleaning can often be completed without you present when access is arranged. Interior cleaning typically requires access inside the home. Tell us your preference when you request a quote.',
      },
      {
        question: 'Do you provide commercial window cleaning?',
        answer:
          'Yes. We provide commercial and storefront window cleaning in addition to residential service. Ask about scheduling for your business.',
      },
      {
        question: 'How do I receive an estimate?',
        answer:
          'Call or text (480) 737-0850, or submit the quote form on this page with your city, property type, and service needs. We will follow up with a free estimate.',
      },
      {
        question: 'Can I schedule a one-time cleaning?',
        answer:
          'Yes. One-time window cleaning is available, and we can also discuss routine maintenance if you prefer a recurring schedule.',
      },
      {
        question: 'Do you clean second-story windows?',
        answer:
          'Yes. We clean multi-story exterior glass using professional methods suited to accessible elevations, including water-fed pole equipment on many jobs. Share the number of stories and any access notes when you request a quote so we can plan the visit accurately.',
      },
    ],
    finalCtaHeading: 'Request a Free Window Cleaning Quote',
    finalCtaCopy:
      'Ready for clearer glass in Pinetop-Lakeside? Call Arizona Window Washing Pros or send a free quote request today. We are accepting appointments throughout the area.',
    relatedCities: [
      { label: 'window cleaning in Show Low', href: NORTHERN_AZ_PATHS.showLow },
      { label: 'Snowflake window cleaning services', href: NORTHERN_AZ_PATHS.snowflake },
    ],
    serviceLinks: [
      { label: 'residential window cleaning', href: '/services/residential-window-cleaning' },
      { label: 'exterior window cleaning', href: '/services/exterior-window-cleaning' },
      { label: 'interior window cleaning', href: '/services/interior-window-cleaning' },
      { label: 'interior and exterior window cleaning', href: '/interior-exterior-window-cleaning' },
      { label: 'screen cleaning', href: '/services/screen-cleaning' },
      { label: 'screen and track cleaning', href: '/screen-track-cleaning' },
      { label: 'cabin window cleaning', href: '/cabin-window-cleaning' },
      { label: 'vacation-home window cleaning', href: '/vacation-home-window-cleaning' },
      { label: 'commercial window cleaning', href: '/commercial-window-cleaning-arizona' },
      { label: 'storefront window cleaning', href: '/storefront-window-cleaning' },
      { label: 'White Mountains window cleaning', href: NORTHERN_AZ_PATHS.whiteMountains },
      {
        label: 'now serving Pinetop, Show Low and Snowflake',
        href: NORTHERN_AZ_PATHS.expansion,
      },
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
      'Residential and commercial window cleaning in Show Low, AZ. Interior glass, exterior glass, screens, tracks, sills and frames. Request a free estimate.',
    h1: 'Residential and Commercial Window Cleaning in Show Low, AZ',
    heroSubtitle:
      'Keep Show Low homes, rentals, and storefronts looking clear and well maintained. Arizona Window Washing Pros is accepting appointments throughout the area.',
    intro: [
      'Arizona Window Washing Pros is now serving Show Low with professional residential and commercial window cleaning. Property owners here often want windows that look clean from the curb and clear from inside—whether the property is a primary home, a rental that needs to look guest-ready, or a storefront that greets customers every day.',
      'We provide exterior glass cleaning, interior detailing when requested, and optional screen, track, sill, and frame cleaning. Homeowners, property managers, vacation-rental hosts, and local business owners can request a free estimate and book a one-time refresh or a routine schedule. Serving Show Low also means coordinating with Pinetop, Lakeside, and Snowflake when you need service across more than one address.',
      'Whether you are preparing a home for sale, resetting a rental between tenants, or keeping commercial entrance glass presentable, we make it simple to request an estimate and confirm the scope before work begins. We are accepting appointments and providing window cleaning throughout Show Low.',
    ],
    sections: [
      {
        heading: 'Window Cleaning for Show Low Homes',
        paragraphs: [
          'Homes in Show Low range from everyday residences to rental properties that need to look guest-ready. Clean windows improve natural light and help a property look cared for from the street and from inside. We clean glass for owner-occupied homes and for properties that need a reset between tenants or before new guests arrive.',
          'When you request a quote, share the home size, approximate window count if known, number of stories, and whether you want interior glass included. That helps us provide a clear estimate and recommend the right scope for your property. Full-time residences often benefit from seasonal exterior maintenance plus occasional interior detailing. Homes preparing for listing photographs or showings may want a complete interior and exterior clean so glass photographs clearly and rooms feel brighter during tours.',
          'Arizona Window Washing Pros is accepting residential appointments throughout Show Low. If you also own or manage property in Pinetop-Lakeside or Snowflake, mention that when you contact us so we can discuss scheduling across nearby White Mountain communities.',
        ],
      },
      {
        heading: 'Interior and Exterior Window Cleaning',
        paragraphs: [
          'Exterior window cleaning focuses on outdoor buildup that settles on glass over time. Interior window cleaning targets smudges, fingerprints, and indoor film that affect how rooms feel and look in natural light. Many Show Low customers book both sides for a complete result. Others schedule exterior-only service more often and add interior cleaning when they want a deeper refresh.',
          'We offer exterior-only, interior-only, and full interior and exterior options. Exterior work on many jobs uses our professional DI / RO purified water system so glass can dry with fewer mineral spots. Interior glass is detailed carefully with traditional methods when that service is part of your quote.',
          'If you are prioritizing certain rooms—such as living areas, kitchens, or street-facing elevations—tell us when you request an estimate. Matching the scope to how the home is used keeps the visit practical and focused on the glass that matters most.',
        ],
      },
      {
        heading: 'Screen, Track, Sill and Frame Cleaning',
        paragraphs: [
          'Screens collect dust and debris that can make clean windows still look dull. Tracks and sills gather dirt that affects appearance and how smoothly windows operate. Frame wipe-downs help the finished area look complete rather than only cleaning the glass.',
          'These services can be added to your Show Low window cleaning appointment when you want a more detailed result. They are especially useful for rentals between stays, homes after a dusty stretch, and properties preparing for guests or showings. Ask about screens, tracks, sills, and frames when you submit your estimate request so we can include them in the confirmed scope.',
          'Screen and track cleaning are cleaning services only. We do not repair, restore, or replace damaged screens or hardware unless that work is separately confirmed. Mention damaged screens when you request a quote so expectations stay clear.',
        ],
      },
      {
        heading: 'Commercial and Storefront Window Cleaning',
        paragraphs: [
          'Show Low businesses and storefronts benefit from clean glass that looks professional to customers and passersby. Commercial window cleaning can include exterior storefront panes and interior glass that is part of the customer experience. Clean entry doors and front glass help offices, retail spaces, and other commercial buildings look open and well maintained.',
          'If you manage an office, retail space, or other commercial building, we can discuss one-time cleaning or a recurring plan that keeps the entrance presentable. Recurring storefront cleaning is a common request for businesses that want a steady appearance without waiting until glass looks neglected. Visit our storefront window cleaning and commercial window cleaning pages for more detail, or contact us for a Show Low business estimate.',
          'Arizona Window Washing Pros is providing commercial and storefront window cleaning throughout Show Low. Tell us about your business type, preferred days, and whether you need interior glass included when you request a quote.',
        ],
      },
      {
        heading: 'Window Cleaning for Rental Properties',
        paragraphs: [
          'Rental homes and vacation rentals in Show Low often need window cleaning between stays or before new tenants arrive. Clear glass helps listings photograph better and makes a stronger first impression when guests or renters walk in. Property managers can request service with access notes, preferred timing, and a clear list of whether interior rooms, screens, and tracks should be included.',
          'Move-in and move-out cleaning are common reasons to book. A one-time reset after tenants leave can include exterior glass, interior panes in main living areas, and optional screen or track detailing. Vacation rentals that turn over more often may benefit from a simple recurring exterior plan with deeper interior cleans scheduled around peak seasons.',
          'When you request a quote for a rental property, share whether the unit will be vacant, how access works, and any deadlines tied to guest arrivals or new leases. We schedule around those needs whenever possible.',
        ],
      },
      {
        heading: 'One-Time and Routine Cleaning Options',
        paragraphs: [
          'Some Show Low customers need a single refresh—before hosting, before listing a home, after a dusty stretch, or when glass has simply gone too long without attention. Others prefer a routine schedule so exterior glass stays presentable between deeper interior cleans. Both options are available.',
          'Routine exterior maintenance is a practical choice for full-time homes and for storefronts that need a consistent look. One-time interior and exterior cleaning is often the right fit for move-in, move-out, pre-sale, or seasonal resets. Tell us how the property is used and we can suggest a cadence when you request your free estimate.',
          'There is no single schedule that fits every address. Occupancy, nearby dust, how often doors and windows are opened, and whether you want screens and tracks included all affect timing. We help you choose a practical plan without pushing services you do not need.',
        ],
      },
      {
        heading: 'Our Window Cleaning Process',
        paragraphs: [
          'Getting started is simple. Request a free quote online or call us with basic details about the property. We confirm the scope—home, rental, or business; interior, exterior, or both; and any screens, tracks, sills, or frames—then schedule a convenient appointment and complete the cleaning according to the services you selected.',
          'Exterior work often uses our professional DI / RO purified water system so glass can dry with fewer mineral spots. Interior glass is detailed carefully. Optional screens, tracks, sills, and frames are cleaned when included in the job. We are fully insured and focused on clear communication before and during the visit.',
          'If access notes matter—gates, pets, multi-story glass, rental lockboxes, or preferred arrival times—include those details in your message so we can plan smoothly.',
        ],
        bullets: [
          'Request a free estimate by phone or form',
          'Confirm scope for home, rental, or business',
          'Schedule and complete the selected services',
        ],
      },
      {
        heading: 'What Customers Can Expect',
        paragraphs: [
          'Customers can expect clear communication, a free quote before work begins, and professional service on the scheduled day. We confirm what is included so you know whether the visit covers exterior glass only, interior detailing, screens, tracks, sills, frames, or a combination.',
          'We are expanding window-cleaning availability in Show Low and nearby White Mountains communities by accepting appointments throughout the area. After service, glass should look clearer according to the scope you booked. If you also need a cabin in Pinetop-Lakeside or a home in Snowflake, ask when you contact us so we can coordinate availability.',
        ],
        bullets: [
          'Free estimates by phone or online form',
          'Clear scope before service',
          'Respectful, professional on-site work',
          'Residential, rental, and commercial options',
        ],
      },
    ],
    included: sharedIncluded,
    faqs: [
      {
        question: 'Do you provide commercial window cleaning in Show Low?',
        answer:
          'Yes. We provide commercial window cleaning for Show Low businesses. Tell us about your property type and preferred schedule when you request a quote.',
      },
      {
        question: 'Do you clean storefront windows?',
        answer:
          'Yes. We clean storefront and commercial entrance glass. One-time and recurring options are available depending on what you need.',
      },
      {
        question: 'Do you clean interior and exterior glass?',
        answer:
          'Yes. Exterior-only, interior-only, and full interior and exterior cleaning options are available.',
      },
      {
        question: 'Are screens and tracks included?',
        answer:
          'Screens, tracks, sills, and frames can be included when those services are selected as part of your appointment. Ask for them when you request your estimate so they are confirmed in the scope.',
      },
      {
        question: 'Can property managers request service?',
        answer:
          'Yes. Property managers can request window cleaning for rental homes and vacation rentals. Share access notes, timing, and the services you need when you contact us.',
      },
      {
        question: 'Do you offer one-time cleaning?',
        answer:
          'Yes. One-time window cleaning is available, and we can also discuss routine maintenance for homes or storefronts.',
      },
      {
        question: 'How can I request an estimate?',
        answer:
          'Call or text (480) 737-0850, or use the form on this page. Share your city, approximate property size or window count if known, whether you want interior and/or exterior cleaning, and any screens or tracks that need attention.',
      },
      {
        question: 'Do you clean large homes with many windows?',
        answer:
          'Yes. We clean residential properties of many sizes in Show Low. Share approximate window count, number of stories, and access notes when requesting a quote so we can estimate accurately.',
      },
    ],
    finalCtaHeading: 'Get a Free Window Cleaning Estimate',
    finalCtaCopy:
      'Request your free Show Low window cleaning estimate from Arizona Window Washing Pros. Call now or send the form below—we are accepting appointments throughout the area.',
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
      { label: 'storefront window cleaning', href: '/storefront-window-cleaning' },
      { label: 'interior and exterior window cleaning', href: '/interior-exterior-window-cleaning' },
      { label: 'track and sill cleaning', href: '/services/track-sill-cleaning' },
      { label: 'screen cleaning', href: '/services/screen-cleaning' },
      { label: 'screen and track cleaning', href: '/screen-track-cleaning' },
      { label: 'cabin window cleaning', href: '/cabin-window-cleaning' },
      { label: 'vacation-home window cleaning', href: '/vacation-home-window-cleaning' },
      { label: 'White Mountains window cleaning', href: NORTHERN_AZ_PATHS.whiteMountains },
      {
        label: 'now serving Pinetop, Show Low and Snowflake',
        href: NORTHERN_AZ_PATHS.expansion,
      },
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
      'Professional window cleaning in Snowflake, AZ for homes and businesses. Glass, screens, tracks, sills and frames. Request a free estimate.',
    h1: 'Professional Window Cleaning Services in Snowflake, AZ',
    heroSubtitle:
      'Arizona Window Washing Pros is accepting appointments for careful residential and commercial window cleaning throughout Snowflake.',
    intro: [
      'Arizona Window Washing Pros is now serving Snowflake with professional residential and commercial window cleaning. Properties with many windows can take significant time to clean well by hand. Larger homes, open living spaces, and commercial glass all benefit from a professional approach that covers exterior panes thoroughly and can include interior detailing when needed.',
      'We help homeowners and small businesses keep glass clear with respectful, detail-focused service. Exterior cleaning, interior cleaning when requested, and optional screen, track, sill, and frame detailing are available based on what you select in your quote. Serving Snowflake also means coordinating with Show Low, Pinetop, and Lakeside when you need availability across more than one town.',
      'Whether you want a one-time reset before guests arrive, routine exterior maintenance throughout the year, or commercial glass that looks presentable to customers, requesting a free estimate is the simplest way to confirm scope and schedule. Expanding service in northern Arizona means we are opening availability for Snowflake appointments—providing window cleaning throughout the community without claiming a local staffed office unless that is confirmed separately.',
    ],
    sections: [
      {
        heading: 'Residential Window Cleaning in Snowflake',
        paragraphs: [
          'Residential window cleaning in Snowflake is about making everyday living spaces feel brighter and better maintained. Exterior glass collects outdoor dust and residue. Interior glass shows fingerprints and smudges in high-traffic rooms, kitchens, and living areas where natural light matters most.',
          'Homes of many sizes benefit from a clear estimate based on the property and the services you choose. You can book exterior-only service for routine upkeep, interior-only when indoor glass is the priority, or a combined interior and exterior clean when you want a complete result. Optional screens, tracks, sills, and frames can be added when you want a more detailed finish.',
          'Arizona Window Washing Pros is accepting residential appointments in Snowflake for primary homes and other residential properties. Share approximate window count, number of stories, and whether you are preparing for guests, a listing, or general maintenance when you request a quote.',
        ],
      },
      {
        heading: 'Window Cleaning for Larger Homes and Properties',
        paragraphs: [
          'Larger homes and properties with many windows are a common reason Snowflake customers request professional help. Cleaning every pane carefully by hand is time-consuming, especially when second-story glass, patio doors, and multiple elevations are involved. A professional visit covers accessible exterior glass thoroughly and can include interior rooms when that is part of the agreed scope.',
          'When you request an estimate for a larger home, share approximate window count or square footage if known, the number of stories, and any elevations that are harder to reach. Note whether all rooms need interior cleaning or only main living areas. That information helps us plan the visit accurately and keep the quote clear.',
          'Curb appeal and natural light matter on larger properties. Clean glass improves how the home looks from the street and how rooms feel inside—useful before hosting, before selling, or simply when the property has gone too long without attention.',
        ],
      },
      {
        heading: 'Interior and Exterior Glass Cleaning',
        paragraphs: [
          'Exterior cleaning focuses on accessible outdoor glass and hard-to-reach panes where our water-fed pole system is a good fit. Interior cleaning uses traditional detailing to leave indoor glass clear and presentable. You can book exterior-only service for routine maintenance, or combine interior and exterior cleaning when you want a complete reset.',
          'Many Snowflake homeowners schedule exterior cleaning more often and add interior detailing when fingerprints and indoor film build up. Others prefer a full interior and exterior clean a few times a year. Tell us which rooms or elevations matter most if you are prioritizing part of a larger home.',
          'Exterior work on many jobs uses professional DI / RO purified water equipment so glass can dry with fewer mineral spots. Interior panes are detailed carefully when included. The most accurate way to determine what your property needs is to request a free estimate with your preferred scope.',
        ],
      },
      {
        heading: 'Screen and Track Cleaning',
        paragraphs: [
          'Screens and tracks are easy to overlook, yet they affect how clean windows look and how smoothly they operate. Screen cleaning removes built-up dust and debris. Track and sill cleaning helps remove dirt that settles in the lower window areas. Light frame wipe-downs help the finished area look complete.',
          'These services are available as part of a more detailed Snowflake appointment. If your screens look dusty or tracks need attention—especially after a windy or dusty stretch—mention that when you request your free estimate so they can be included in the confirmed scope.',
          'Screen and track cleaning are cleaning services only. We do not repair or replace damaged screens as part of standard window cleaning. Identify damaged screens when you contact us so expectations stay clear.',
        ],
      },
      {
        heading: 'Commercial Window Cleaning',
        paragraphs: [
          'Small businesses and commercial properties in Snowflake also need clean glass for a professional appearance. We can clean storefront windows and other commercial glass as part of a one-time visit or an ongoing plan. Clean entrance glass helps local businesses look open and well maintained to customers and passersby.',
          'Business owners who want more information about commercial service can review our commercial window cleaning and storefront window cleaning pages, or contact us directly for a Snowflake estimate. Tell us about preferred days, whether interior glass should be included, and whether you want a recurring schedule.',
          'Arizona Window Washing Pros is providing commercial window cleaning throughout Snowflake alongside residential service. Ask us if you are outside city limits—we also serve Show Low, Pinetop, and Lakeside.',
        ],
      },
      {
        heading: 'Routine Exterior Window Maintenance',
        paragraphs: [
          'How often windows need cleaning depends on the property, nearby dust, how often doors and windows are used, and whether the home is occupied full-time. Some Snowflake homeowners prefer seasonal exterior cleanings. Others book a deeper interior and exterior service a few times a year.',
          'Routine exterior maintenance helps glass stay presentable between deeper cleans. It is a practical option for larger homes where a full interior clean on every visit is not necessary, and for properties that want curb appeal without waiting until glass looks neglected. We can help you choose a practical schedule when you request an estimate—without pushing services you do not need.',
          'One-time services remain available whenever you need a reset—before guests arrive, before listing a home, or after a long stretch without cleaning. Routine and one-time options can be mixed over the year based on how the property is used.',
        ],
      },
      {
        heading: 'What Is Included in the Service?',
        paragraphs: [
          'Confirmed services for Snowflake appointments include exterior window cleaning, interior window cleaning, residential window cleaning, commercial window cleaning, storefront window cleaning, window screen cleaning, window track cleaning, window sill cleaning, window frame cleaning, vacation-home window cleaning, and cabin window cleaning when those services are selected.',
          'Most visits start with exterior glass. Interior cleaning, screens, tracks, sills, and frames are added based on your quote. Light frame wipe-downs are part of detailing when that work is included. Every estimate is customized so you know what is included before we arrive.',
          'For exterior work, we use professional DI / RO purified water equipment on many jobs. Interior glass is cleaned with careful traditional detailing. We are fully insured and focused on clear communication about scope, access, and timing.',
        ],
        bullets: [
          'Exterior glass cleaning',
          'Interior glass cleaning when requested',
          'Screen, track, sill, and frame detailing when requested',
          'Residential and commercial appointments',
          'One-time or routine exterior maintenance',
        ],
      },
      {
        heading: 'What Customers Can Expect',
        paragraphs: [
          'Customers can expect clear communication, a free quote before work begins, and professional service on the scheduled day. We confirm whether the visit covers exterior glass only, interior detailing, screens, tracks, sills, frames, or a combination so there are no surprises.',
          'If access notes matter—gates, pets, multi-story glass, or preferred arrival times—include those details in your message so we can plan the visit smoothly. Exterior-only cleaning can often be completed without you present when access is arranged. Interior cleaning typically requires access inside the home.',
          'Arizona Window Washing Pros is expanding window-cleaning availability in Snowflake and nearby White Mountains communities. Request a free estimate by phone or form, approve the scope, and schedule service that fits your property. After the visit, glass should look clearer and better maintained according to the services you booked.',
        ],
        bullets: [
          'Free estimates by phone or online form',
          'Clear scope before service',
          'Respectful, professional on-site work',
        ],
      },
    ],
    included: sharedIncluded,
    faqs: [
      {
        question: 'Do you clean homes with many windows?',
        answer:
          'Yes. We clean residential properties of many sizes in Snowflake, including larger homes with many windows. Share approximate window count or home size when requesting a quote so we can estimate accurately.',
      },
      {
        question: 'Do you clean second-story windows?',
        answer:
          'Yes. We clean multi-story exterior glass using professional methods suited to accessible elevations, including water-fed pole equipment on many jobs. Share the number of stories and any access notes when you request a quote.',
      },
      {
        question: 'Can I request exterior-only cleaning?',
        answer:
          'Yes. Exterior-only, interior-only, and combined interior and exterior cleaning options are available.',
      },
      {
        question: 'Do you clean screens, tracks and sills?',
        answer:
          'Yes. Screen cleaning and track, sill, and frame detailing can be included when those services are selected for your visit.',
      },
      {
        question: 'Do you serve local businesses?',
        answer:
          'Yes. We provide commercial and storefront window cleaning for local businesses. Contact us for a free commercial estimate.',
      },
      {
        question: 'Can I receive a free estimate?',
        answer:
          'Yes. Call or text (480) 737-0850, or fill out the quote form on this page with your contact details and service needs. We will follow up with a free estimate.',
      },
      {
        question: 'Do you provide one-time window cleaning?',
        answer:
          'Yes. One-time window cleaning is available, and we can also discuss routine exterior maintenance if you prefer a recurring schedule.',
      },
      {
        question: 'Do you clean both residential and commercial properties?',
        answer:
          'Yes. We clean residential homes and commercial properties in Snowflake. Tell us your property type when you request a quote.',
      },
    ],
    finalCtaHeading: 'Request Your Free Estimate',
    finalCtaCopy:
      'Get a free Snowflake window cleaning estimate from Arizona Window Washing Pros. Call today or use the form below—we are accepting appointments throughout the area.',
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
      { label: 'interior and exterior window cleaning', href: '/interior-exterior-window-cleaning' },
      { label: 'screen cleaning', href: '/services/screen-cleaning' },
      { label: 'screen and track cleaning', href: '/screen-track-cleaning' },
      { label: 'cabin window cleaning', href: '/cabin-window-cleaning' },
      { label: 'vacation-home window cleaning', href: '/vacation-home-window-cleaning' },
      { label: 'commercial window cleaning', href: '/commercial-window-cleaning-arizona' },
      { label: 'storefront window cleaning', href: '/storefront-window-cleaning' },
      { label: 'White Mountains window cleaning', href: NORTHERN_AZ_PATHS.whiteMountains },
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
