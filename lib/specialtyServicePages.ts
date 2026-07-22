import type { ContentLandingConfig } from '@/components/seo/ContentLandingPage'
import { NORTHERN_AZ_PATHS } from '@/lib/northernArizona'
import { WHITE_MOUNTAINS_HUB } from '@/lib/whiteMountainsHub'
import { EXPANSION_ANNOUNCEMENT } from '@/lib/expansionAnnouncement'

export const SPECIALTY_PATHS = {
  cabin: '/cabin-window-cleaning',
  vacationHome: '/vacation-home-window-cleaning',
  storefront: '/storefront-window-cleaning',
  screenTrack: '/screen-track-cleaning',
  interiorExterior: '/interior-exterior-window-cleaning',
  whiteMountains: '/white-mountains-window-cleaning',
  expansion: '/now-serving-pinetop-show-low-snowflake',
} as const

const northernCityLinks = [
  { label: 'Window cleaning in Pinetop-Lakeside', href: NORTHERN_AZ_PATHS.pinetopLakeside },
  { label: 'Window cleaning in Show Low', href: NORTHERN_AZ_PATHS.showLow },
  { label: 'Window cleaning in Snowflake', href: NORTHERN_AZ_PATHS.snowflake },
]

export const CABIN_WINDOW_CLEANING: ContentLandingConfig = {
  path: SPECIALTY_PATHS.cabin,
  title: 'Cabin Window Cleaning',
  description:
    'Professional cabin window cleaning for White Mountains properties. Interior, exterior, screens, tracks, sills and frames. Call (480) 737-0850 for a free quote.',
  h1: 'Cabin Window Cleaning for White Mountains Properties',
  heroSubtitle:
    'Arizona Window Washing Pros cleans cabins and mountain retreats so glass looks clear when you arrive and stays guest-ready between visits.',
  breadcrumbName: 'Cabin Window Cleaning',
  defaultService: 'Cabin Window Cleaning',
  callEventLabel: 'cabin_window_cleaning_call',
  intro: [
    'Cabins collect a different kind of window buildup than everyday suburban homes. Pollen, dust, pine debris, and long stretches without occupancy can leave glass cloudy and screens dull. Arizona Window Washing Pros provides cabin window cleaning for owners who want clear views without spending their limited mountain time scrubbing panes.',
    'Whether your cabin is a quiet weekend escape, a seasonal second home, or a rental that welcomes guests through the year, we can schedule exterior cleaning, interior detailing, and optional screen, track, sill, and frame work based on what the property needs.',
    'We serve cabin owners throughout northern Arizona communities such as Pinetop-Lakeside, Show Low, and Snowflake. Call (480) 737-0850 or request a free estimate online to discuss timing around your next arrival or guest turnover.',
  ],
  sections: [
    {
      heading: 'Window Cleaning for Cabins',
      paragraphs: [
        'Cabin windows frame the reason many people own mountain property in the first place. When glass is hazy, the whole interior feels darker and less inviting. Professional cabin window cleaning focuses on restoring clarity to exterior and interior panes so living rooms, kitchens, and loft spaces open back up to the surrounding trees and sky.',
        'Every cabin is a little different. Some have large picture windows and sliding doors. Others have smaller divided lights, screened porches, or elevated glass that is awkward to reach from a ladder. When you request a quote, share the approximate number of windows, stories, and whether screens need attention so we can plan a practical scope of work.',
      ],
      bullets: [
        'Full-time and seasonal cabins',
        'Weekend and holiday retreats',
        'Mountain homes with hard-to-reach exterior glass',
      ],
    },
    {
      heading: 'Cleaning Before Seasonal Arrival',
      paragraphs: [
        'Many cabin owners visit for summer weeks, holiday weekends, or hunting season and want the property ready when they walk in. Scheduling window cleaning before you arrive is one of the simplest ways to make a closed-up cabin feel open and cared for again.',
        'Exterior glass often shows the seasons most clearly. Dust and outdoor debris settle while the property sits unused. A pre-arrival exterior clean, with interior detailing when access is arranged, helps your first evening feel like a real getaway instead of a cleanup project.',
      ],
    },
    {
      heading: 'Cleaning After a Vacant Period',
      paragraphs: [
        'Cabins that sit vacant for months can look neglected even when the interior was left tidy. Screens trap pollen, tracks collect grit, and exterior glass picks up weather film. A post-vacancy window cleaning resets the property for the next stay or for listing photos.',
        'If you are reopening a cabin after winter or a long gap between visits, tell us how long it has been vacant and whether you want glass only or a more detailed package that includes screens, tracks, sills, and frames.',
      ],
    },
    {
      heading: 'Interior and Exterior Glass',
      paragraphs: [
        'Exterior cabin window cleaning addresses outdoor buildup on glass that faces decks, driveways, and wooded lots. On many jobs we use professional DI / RO purified water equipment so exterior panes can dry with fewer mineral spots, which is especially helpful on elevated or hard-to-reach glass.',
        'Interior cabin window cleaning uses traditional detailing for fingerprints, smudges, and indoor film around living spaces and sleeping areas. You can book exterior-only, interior-only, or a combined interior and exterior visit depending on access and your goals for the trip.',
      ],
    },
    {
      heading: 'Screens, Tracks and Sills',
      paragraphs: [
        'Clean glass still looks unfinished when dusty screens sit in front of it. Screen cleaning removes pollen and debris that make rooms feel dim. Track, sill, and frame cleaning clears the grit that builds up around sliding windows and doors—especially useful on cabins that sit closed for long stretches.',
        'These detailing services are available when selected as part of your appointment. They are cleaning services, not repair or replacement work. If a screen is damaged, we can note it, but restoration is outside the scope of standard cleaning.',
      ],
    },
    {
      heading: 'Vacation Rental Cabins',
      paragraphs: [
        'Cabin rentals and short-term stays benefit from clear glass at check-in. Guests notice dirty windows quickly, and photos online often show bright rooms that guests expect to see in person. Scheduling window cleaning between bookings or before peak season helps keep listings looking maintained.',
        'Property managers and owners can request one-time cleanings or recurring visits tied to occupancy patterns. Share access instructions and preferred timing when you request a quote so we can plan around guest calendars.',
      ],
    },
    {
      heading: 'How the Estimate Process Works',
      paragraphs: [
        'Requesting a cabin window cleaning estimate is straightforward. Call or text (480) 737-0850, or submit the form on this page with your city, cabin type, approximate window count, and whether you need interior glass, exterior glass, screens, or track detailing.',
        'We follow up with a free estimate based on the information you provide. Once you approve the scope, we schedule a visit that fits your arrival plans or rental turnover whenever availability allows.',
      ],
    },
  ],
  included: [
    'Exterior cabin window glass cleaning',
    'Interior window cleaning when requested',
    'Screen cleaning when requested',
    'Track, sill, and frame cleaning when requested',
    'Flexible scheduling around seasonal arrival',
    'Service for full-time cabins and vacation rentals',
  ],
  faqs: [
    {
      question: 'Do you clean cabin windows in the White Mountains?',
      answer:
        'Yes. Arizona Window Washing Pros provides cabin window cleaning for properties in Pinetop, Lakeside, Show Low, and Snowflake.',
    },
    {
      question: 'Can you clean a cabin before I arrive for the season?',
      answer:
        'Yes. Many owners schedule exterior cleaning—and interior cleaning when access is arranged—before seasonal arrival so the cabin looks ready when they walk in.',
    },
    {
      question: 'Do you clean both interior and exterior cabin windows?',
      answer:
        'Yes. You can request exterior-only, interior-only, or combined interior and exterior cabin window cleaning.',
    },
    {
      question: 'Are screens, tracks, and sills included?',
      answer:
        'Screen, track, sill, and frame cleaning can be included when those services are selected as part of your quote. They are optional detailing services, not automatic on every visit unless requested.',
    },
    {
      question: 'Do you clean vacation rental cabins?',
      answer:
        'Yes. We clean windows for vacation rental cabins and short-term rental properties. Mention guest turnover timing when you request an estimate.',
    },
    {
      question: 'Do I need to be present during cabin window cleaning?',
      answer:
        'Exterior-only cleaning can often be completed when outdoor access is arranged. Interior cleaning typically requires access inside the cabin. Tell us your preference when you request a quote.',
    },
    {
      question: 'How do I get a free cabin window cleaning quote?',
      answer:
        'Call or text (480) 737-0850, or use the quote form on this page. Include your location, property type, and the services you want so we can prepare an estimate.',
    },
  ],
  finalCtaHeading: 'Request a Cabin Window Cleaning Quote',
  finalCtaCopy:
    'Ready for clearer cabin glass? Call Arizona Window Washing Pros at (480) 737-0850 or send a free estimate request today.',
  relatedLinks: [
    ...northernCityLinks,
    { label: 'Vacation-home window cleaning', href: SPECIALTY_PATHS.vacationHome },
    { label: 'White Mountains window cleaning', href: SPECIALTY_PATHS.whiteMountains },
    { label: 'Residential window cleaning', href: '/services/residential-window-cleaning' },
    { label: 'Interior and exterior cleaning', href: SPECIALTY_PATHS.interiorExterior },
    { label: 'Contact us', href: '/contact' },
  ],
  serviceSchemaName: 'Cabin Window Cleaning',
}

export const VACATION_HOME_WINDOW_CLEANING: ContentLandingConfig = {
  path: SPECIALTY_PATHS.vacationHome,
  title: 'Vacation Home Window Cleaning',
  description:
    'Vacation home and seasonal property window cleaning in Arizona’s White Mountains. Interior, exterior, screens and tracks. Call (480) 737-0850 for a free quote.',
  h1: 'Vacation Home Window Cleaning',
  heroSubtitle:
    'Keep second homes and seasonal properties looking clear with professional window cleaning timed around arrivals, guests, and vacant stretches.',
  breadcrumbName: 'Vacation Home Window Cleaning',
  defaultService: 'Vacation Home Window Cleaning',
  callEventLabel: 'vacation_home_window_cleaning_call',
  intro: [
    'Vacation homes do not get daily attention the way primary residences do. Between trips, windows collect outdoor dust, fingerprints linger after guest stays, and screens gather pollen that makes even clean glass look dull. Arizona Window Washing Pros provides vacation home window cleaning designed around seasonal use rather than weekly household routines.',
    'Owners who live elsewhere often want a simple way to book service before they arrive, after guests leave, or when a property manager is preparing the home for the next stay. We offer exterior cleaning, interior detailing when access is available, and optional screen, track, sill, and frame cleaning.',
    'If your vacation property is in Pinetop-Lakeside, Show Low, Snowflake, or another White Mountains community we serve, call (480) 737-0850 or request a free quote to discuss timing and scope.',
  ],
  sections: [
    {
      heading: 'Seasonal Property Cleaning',
      paragraphs: [
        'Seasonal homes go through cycles of heavy use and quiet vacancy. Window cleaning fits naturally into those cycles: a refresh before the busy months, a reset after long empty stretches, or maintenance between peak holiday weekends.',
        'Because every vacation property has a different calendar, we customize the visit rather than assuming a fixed residential schedule. Tell us whether the home is used monthly, only in summer, or as a short-term rental so we can recommend a practical cleaning plan.',
      ],
    },
    {
      heading: 'Pre-Arrival Cleaning',
      paragraphs: [
        'Walking into a vacation home with streaky windows undercuts the whole point of getting away. Pre-arrival window cleaning focuses on exterior glass that has sat through weather and, when access is arranged, interior panes that collect indoor film while the home is closed.',
        'Owners who live in the Valley or out of state often schedule pre-arrival service so the first day on the property feels open and bright. Share your arrival date when you request a quote so we can aim for availability ahead of your trip whenever scheduling allows.',
      ],
    },
    {
      heading: 'Post-Guest Cleaning',
      paragraphs: [
        'After guests leave, sliding doors, kitchen windows, and bathroom glass often show fingerprints and smudges. Post-guest window cleaning helps reset the home for the owner’s next visit or for the next booking.',
        'This is especially useful for vacation rentals where turnover is frequent. Pairing glass cleaning with screen or track detailing after a busy stretch can make the whole window system look maintained again.',
      ],
    },
    {
      heading: 'Interior and Exterior Cleaning',
      paragraphs: [
        'Exterior vacation-home window cleaning removes outdoor buildup from glass facing decks, yards, and street views. Professional DI / RO purified water equipment is used on many exterior jobs to help glass dry with fewer mineral spots.',
        'Interior cleaning addresses the glass guests and family members touch most. Combined interior and exterior packages are popular when the home is being prepared for arrival or photographed for a listing. Exterior-only visits work well when the home is locked and only outdoor access is available.',
      ],
    },
    {
      heading: 'Screens and Tracks',
      paragraphs: [
        'Screens on vacation homes often sit in place through dusty seasons without being washed. Cleaning them improves daylight and airflow appearance. Tracks and sills collect grit that can make sliding doors feel rough and look neglected.',
        'Screen, track, sill, and frame cleaning can be added to your vacation-home appointment when requested. These are cleaning services only—we do not repair or replace screens or hardware as part of standard window cleaning.',
      ],
    },
    {
      heading: 'Property Managers',
      paragraphs: [
        'Property managers coordinating multiple White Mountains homes need clear communication and flexible scheduling. We can work from a defined scope—exterior glass, full interior and exterior, or glass plus screens and tracks—so expectations stay consistent across properties.',
        'When you request service for managed homes, include access notes, preferred contact, city, and any recurring needs. That information helps us quote accurately and schedule around occupancy.',
      ],
    },
    {
      heading: 'Owners Who Live Outside the Area',
      paragraphs: [
        'Many vacation-home owners live hours away and cannot easily clean windows themselves before a short trip. Remote owners can request estimates by phone or online form, arrange access for exterior work, and coordinate interior access through a local contact or lockbox when appropriate.',
        'You do not need to be on-site for every service type. Exterior-only cleaning is often the easiest option for absentee owners. Interior work requires safe indoor access, which we confirm before the appointment.',
      ],
    },
    {
      heading: 'How the Estimate Process Works',
      paragraphs: [
        'Call or text Arizona Window Washing Pros at (480) 737-0850, or submit the quote form with your vacation property’s location, approximate window count, and preferred services. Mention pre-arrival, post-guest, or vacancy timing so we understand the goal of the visit.',
        'We provide a free estimate based on the details you share. After you approve the scope, we schedule service according to availability and your property calendar.',
      ],
    },
  ],
  included: [
    'Exterior vacation-home window cleaning',
    'Interior glass cleaning when access is arranged',
    'Optional screen cleaning',
    'Optional track, sill, and frame detailing',
    'Scheduling around arrivals and guest turnovers',
    'Support for owners and property managers',
  ],
  faqs: [
    {
      question: 'Do you clean vacation homes and second homes?',
      answer:
        'Yes. We provide window cleaning for vacation homes, seasonal properties, second homes, and short-term rentals in the White Mountains communities we serve.',
    },
    {
      question: 'Can you clean windows before I arrive?',
      answer:
        'Yes. Pre-arrival cleaning is a common request. Exterior service can often be completed without you present when access is arranged. Interior cleaning requires indoor access.',
    },
    {
      question: 'Do you offer post-guest window cleaning?',
      answer:
        'Yes. Many owners and managers schedule cleaning after guests leave to reset glass, and optionally screens and tracks, before the next stay.',
    },
    {
      question: 'Can property managers request service?',
      answer:
        'Yes. Property managers can request estimates and schedule window cleaning for the vacation homes they oversee. Include access and contact details with your request.',
    },
    {
      question: 'What if I live outside northern Arizona?',
      answer:
        'Remote owners regularly book service by phone or form. Share your timeline, property details, and access instructions so we can plan the visit.',
    },
    {
      question: 'How do I request a vacation-home estimate?',
      answer:
        'Call or text (480) 737-0850, or use the form on this page. Include city, property type, and whether you need interior, exterior, screens, or track cleaning.',
    },
  ],
  finalCtaHeading: 'Get a Vacation Home Window Cleaning Estimate',
  finalCtaCopy:
    'Planning a trip or guest turnover? Call (480) 737-0850 or request a free quote from Arizona Window Washing Pros.',
  relatedLinks: [
    ...northernCityLinks,
    { label: 'Cabin window cleaning', href: SPECIALTY_PATHS.cabin },
    { label: 'White Mountains window cleaning', href: SPECIALTY_PATHS.whiteMountains },
    { label: 'Residential window cleaning', href: '/services/residential-window-cleaning' },
    { label: 'Screen and track cleaning', href: SPECIALTY_PATHS.screenTrack },
    { label: 'Contact us', href: '/contact' },
  ],
  serviceSchemaName: 'Vacation Home Window Cleaning',
}

export const STOREFRONT_WINDOW_CLEANING: ContentLandingConfig = {
  path: SPECIALTY_PATHS.storefront,
  title: 'Storefront Window Cleaning',
  description:
    'Commercial storefront window cleaning for Arizona businesses. Exterior and interior glass, entry doors, and recurring plans. Call (480) 737-0850 for a free quote.',
  h1: 'Storefront Window Cleaning for Local Businesses',
  heroSubtitle:
    'Keep entry glass and display windows looking clear so customers see a well-maintained business from the sidewalk and the parking lot.',
  breadcrumbName: 'Storefront Window Cleaning',
  defaultService: 'Storefront Window Cleaning',
  callEventLabel: 'storefront_window_cleaning_call',
  intro: [
    'Storefront glass is one of the first things customers notice. Fingerprints, dust, and outdoor film can make even a carefully run business look tired before anyone walks through the door. Arizona Window Washing Pros provides storefront window cleaning for businesses that want a cleaner first impression.',
    'We clean exterior storefront glass, and we can include interior glass and entry doors when those surfaces are part of your quote. Service is available as a one-time refresh or as part of a recurring commercial schedule that fits your business hours.',
    'Businesses in Show Low, Pinetop-Lakeside, Snowflake, and other communities we serve can call (480) 737-0850 or request a free commercial estimate online.',
  ],
  sections: [
    {
      heading: 'Storefront Appearance Matters',
      paragraphs: [
        'Clean storefront windows signal that a business pays attention to detail. Cloudy glass distracts from signage, product displays, and the welcome customers feel at the entrance. Regular storefront window cleaning keeps the face of the business looking open and professional.',
        'Whether you operate a retail shop, office, salon, or other customer-facing space, clear glass helps the property look maintained from the street without requiring staff to take time away from daily work.',
      ],
    },
    {
      heading: 'Exterior Storefront Glass',
      paragraphs: [
        'Exterior storefront cleaning focuses on the glass customers see from outside—large display panes, sidelights, and front elevation windows. Outdoor dust, water spots, and handprints around the entry can build up quickly, especially on high-traffic streets.',
        'Exterior commercial cleaning is often the foundation of a storefront plan. Many businesses start with exterior service and add interior glass when they want a complete refresh of the customer-facing areas.',
      ],
    },
    {
      heading: 'Interior Storefront Glass',
      paragraphs: [
        'Interior storefront glass includes the inside face of display windows and other glass that customers see once they are inside or looking in from the sidewalk. Interior detailing removes smudges that exterior cleaning alone cannot address.',
        'Interior commercial work is scheduled with access and business hours in mind. Tell us whether you prefer service before opening, after closing, or during quieter periods so we can plan around your operations when availability allows.',
      ],
    },
    {
      heading: 'Entry Doors',
      paragraphs: [
        'Entry doors collect fingerprints throughout the day. Including glass entry doors in a storefront cleaning visit helps the whole entrance look finished, not just the large display panes beside them.',
        'When you request a quote, mention whether your entrance includes glass doors, sidelights, or vestibule glass so those surfaces can be included in the scope.',
      ],
    },
    {
      heading: 'One-Time Storefront Cleaning',
      paragraphs: [
        'A one-time storefront cleaning works well before a grand opening, seasonal promotion, inspection, or after construction dust. It is also a good way to evaluate service quality before committing to a recurring plan.',
        'Share photos or a short description of the storefront when possible. That helps us estimate glass area, access needs, and whether interior work should be included.',
      ],
    },
    {
      heading: 'Recurring Commercial Cleaning',
      paragraphs: [
        'Businesses with steady foot traffic often benefit from a recurring storefront schedule. Weekly, bi-weekly, monthly, or custom intervals can keep glass from slipping back into a neglected look between cleanings.',
        'Recurring commercial clients can ask about maintenance plan options that fit their location and traffic level. The right frequency depends on how quickly fingerprints and outdoor film return on your particular storefront.',
      ],
    },
    {
      heading: 'Businesses and Offices',
      paragraphs: [
        'Storefront window cleaning is part of our broader commercial window cleaning service. Offices, retail spaces, and other commercial properties can request exterior glass, interior glass, or combined packages.',
        'If your property has multiple elevations or upstairs commercial glass, include that detail in your estimate request. Learn more on our commercial window cleaning page, or start with a storefront-focused quote for the customer entrance.',
      ],
    },
    {
      heading: 'How the Quote Process Works',
      paragraphs: [
        'Call or text (480) 737-0850, or submit the form with your business name, city, and whether you need exterior glass, interior glass, entry doors, or a recurring schedule. We provide a free estimate based on the information you share.',
        'Once you approve the quote, we schedule service at a time that works for your business whenever availability allows. Flexible timing is often important for commercial clients, and we plan around that when we can.',
      ],
    },
  ],
  included: [
    'Exterior storefront glass cleaning',
    'Interior storefront glass when requested',
    'Glass entry doors when included in the quote',
    'One-time commercial cleanings',
    'Recurring storefront maintenance options',
    'Scheduling that can work around business hours',
  ],
  faqs: [
    {
      question: 'Do you clean commercial storefront windows?',
      answer:
        'Yes. Arizona Window Washing Pros provides storefront and commercial window cleaning for businesses that want clear exterior and interior glass.',
    },
    {
      question: 'Can you clean interior storefront glass as well as exterior?',
      answer:
        'Yes. Exterior-only, interior-only, and combined interior and exterior storefront cleaning options are available depending on access and your quote.',
    },
    {
      question: 'Do you clean glass entry doors?',
      answer:
        'Yes. Glass entry doors and related entrance glass can be included when they are part of the requested scope.',
    },
    {
      question: 'Do you offer recurring storefront cleaning?',
      answer:
        'Yes. We offer recurring commercial schedules such as weekly, bi-weekly, monthly, and custom intervals based on what the business needs.',
    },
    {
      question: 'Can cleaning be scheduled outside business hours?',
      answer:
        'We offer flexible scheduling for commercial clients when availability allows so cleaning can be done at a time that works best for the business.',
    },
    {
      question: 'How do I get a storefront window cleaning quote?',
      answer:
        'Call or text (480) 737-0850, or use the form on this page with your business location and service needs. We will follow up with a free estimate.',
    },
  ],
  finalCtaHeading: 'Request a Storefront Window Cleaning Quote',
  finalCtaCopy:
    'Ready for clearer business glass? Call Arizona Window Washing Pros at (480) 737-0850 or send a free commercial estimate request.',
  relatedLinks: [
    ...northernCityLinks,
    { label: 'Commercial window cleaning', href: '/commercial-window-cleaning-arizona' },
    { label: 'White Mountains window cleaning', href: SPECIALTY_PATHS.whiteMountains },
    { label: 'Interior and exterior cleaning', href: SPECIALTY_PATHS.interiorExterior },
    { label: 'Contact us', href: '/contact' },
  ],
  serviceSchemaName: 'Storefront Window Cleaning',
}

export const SCREEN_TRACK_CLEANING: ContentLandingConfig = {
  path: SPECIALTY_PATHS.screenTrack,
  title: 'Screen and Track Cleaning',
  description:
    'Window screen, track, sill and frame cleaning to finish the job after glass washing. Call Arizona Window Washing Pros at (480) 737-0850 for a free quote.',
  h1: 'Window Screen, Track, Sill and Frame Cleaning',
  heroSubtitle:
    'Detail the full window system—not just the glass—with professional screen, track, sill, and frame cleaning from Arizona Window Washing Pros.',
  breadcrumbName: 'Screen and Track Cleaning',
  defaultService: 'Screen and Track Cleaning',
  callEventLabel: 'screen_track_cleaning_call',
  intro: [
    'Freshly cleaned glass can still look unfinished if dusty screens and gritty tracks remain in place. Screen and track cleaning completes the window system so daylight looks clearer and sliding windows feel better maintained.',
    'Arizona Window Washing Pros offers window screen cleaning along with track, sill, and frame detailing as optional services that pair with residential, cabin, vacation-home, and commercial glass cleaning. These services focus on cleaning—not repair, restoration, or replacement.',
    'Homeowners and businesses in Pinetop-Lakeside, Show Low, Snowflake, and other communities we serve can call (480) 737-0850 to add screens and tracks to a free window cleaning estimate.',
  ],
  sections: [
    {
      heading: 'What Screen and Track Cleaning Includes',
      paragraphs: [
        'Screen and track cleaning is a detailing package that addresses the surfaces around the glass. Screens are cleaned to remove dust, pollen, and debris. Tracks are cleared of grit and buildup. Sills and frames can be wiped down so the full window opening looks finished.',
        'Exact scope depends on what you select in your quote. Some customers want screens only. Others want tracks, sills, and frames included with a full interior and exterior glass cleaning. We clarify what is included before work begins.',
      ],
      bullets: [
        'Window screen cleaning',
        'Window track cleaning',
        'Sill cleaning',
        'Frame wipe-down as part of detailing',
      ],
    },
    {
      heading: 'Window Screen Cleaning',
      paragraphs: [
        'Screens catch pollen, dust, and outdoor debris that reduce natural light and make rooms look dingy. Cleaning screens helps freshly washed windows look their best and improves the appearance of screened openings on cabins and vacation homes that sit unused for stretches of time.',
        'Screen cleaning is an add-on service available with window cleaning appointments. We clean screens; we do not repair tears, rebuild frames, or replace mesh as part of standard service.',
      ],
    },
    {
      heading: 'Window Track Cleaning',
      paragraphs: [
        'Window tracks collect dirt, insects, and debris that build up over months of use. Cleaning tracks improves the finished look of sliding windows and doors and helps the operating area feel less neglected.',
        'Track cleaning is available when requested. It is a cleaning service focused on removing loose debris and buildup from the track area, not mechanical repair of rollers or hardware.',
      ],
    },
    {
      heading: 'Sill and Frame Cleaning',
      paragraphs: [
        'Sills and frames gather dust that remains visible even after the glass is clear. A light wipe-down of these surfaces as part of detailing helps the whole window opening look polished.',
        'Frame cleaning in our service means cleaning the accessible frame surfaces as part of the appointment—not painting, refinishing, or repairing damaged frames.',
      ],
    },
    {
      heading: 'Why Screens and Tracks Matter',
      paragraphs: [
        'Glass cleaning alone solves only part of the visual problem. Dirty screens sit directly in the sightline, and dirty tracks draw the eye along the bottom of every sliding door. Addressing those surfaces is especially noticeable on mountain properties where pollen and dust settle quickly.',
        'Many homeowners schedule screen and track detailing with seasonal glass cleaning, before guests arrive, or when preparing a home for photos or a move.',
      ],
    },
    {
      heading: 'Pairing With Interior and Exterior Glass Cleaning',
      paragraphs: [
        'Screen and track cleaning works best alongside professional interior and exterior window cleaning. Clean glass, clean screens, and clear tracks create a consistent result across the whole opening.',
        'You can also request screens or tracks with exterior-only service when that matches your budget and access. Tell us your priorities when you request a quote so we can build a practical package.',
      ],
    },
    {
      heading: 'How the Estimate Process Works',
      paragraphs: [
        'Call or text (480) 737-0850, or use the form on this page. Note how many screens you have, whether tracks and sills need attention, and whether glass cleaning should be included in the same visit.',
        'We provide a free estimate based on your property details. Once approved, we schedule the appointment and complete the selected detailing services as part of your window cleaning visit.',
      ],
    },
  ],
  included: [
    'Window screen cleaning when selected',
    'Window track cleaning when selected',
    'Sill cleaning when selected',
    'Frame wipe-down as part of detailing',
    'Available with residential and commercial glass cleaning',
    'Clear scope confirmation before work begins',
  ],
  faqs: [
    {
      question: 'Do you clean window screens?',
      answer:
        'Yes. Screen cleaning is available as an add-on with window cleaning appointments.',
    },
    {
      question: 'Do you clean window tracks and sills?',
      answer:
        'Yes. Track, sill, and frame detailing can be included when those services are selected as part of your quote.',
    },
    {
      question: 'Is screen cleaning the same as screen repair?',
      answer:
        'No. We clean screens. We do not repair, restore, or replace screens as part of standard window cleaning service.',
    },
    {
      question: 'Can I book screens and tracks without glass cleaning?',
      answer:
        'These detailing services are typically paired with window cleaning. Ask when you request a quote if you have a specific scope in mind, and we will clarify what we can schedule.',
    },
    {
      question: 'Why clean screens if the glass is already washed?',
      answer:
        'Dirty screens sit in front of clean glass and can make windows look hazy again. Cleaning screens helps the finished result look clearer and more complete.',
    },
    {
      question: 'How do I add screen and track cleaning to my estimate?',
      answer:
        'Call or text (480) 737-0850, or note screens, tracks, sills, and frames on the quote form when you request service.',
    },
  ],
  finalCtaHeading: 'Add Screen and Track Cleaning to Your Quote',
  finalCtaCopy:
    'Want a more complete window clean? Call Arizona Window Washing Pros at (480) 737-0850 or request a free estimate today.',
  relatedLinks: [
    ...northernCityLinks,
    { label: 'Interior and exterior window cleaning', href: SPECIALTY_PATHS.interiorExterior },
    { label: 'Cabin window cleaning', href: SPECIALTY_PATHS.cabin },
    { label: 'Residential window cleaning', href: '/services/residential-window-cleaning' },
    { label: 'White Mountains window cleaning', href: SPECIALTY_PATHS.whiteMountains },
    { label: 'Contact us', href: '/contact' },
  ],
  serviceSchemaName: 'Screen and Track Cleaning',
}

export const INTERIOR_EXTERIOR_WINDOW_CLEANING: ContentLandingConfig = {
  path: SPECIALTY_PATHS.interiorExterior,
  title: 'Interior and Exterior Window Cleaning',
  description:
    'Complete interior and exterior window cleaning for Arizona homes and businesses. Optional screens, tracks and frames. Call (480) 737-0850 for a free quote.',
  h1: 'Interior and Exterior Window Cleaning',
  heroSubtitle:
    'Clear glass inside and out with professional interior detailing and exterior window cleaning from Arizona Window Washing Pros.',
  breadcrumbName: 'Interior and Exterior Window Cleaning',
  defaultService: 'Interior and Exterior Window Cleaning',
  callEventLabel: 'interior_exterior_window_cleaning_call',
  intro: [
    'Interior and exterior window cleaning is the most complete way to restore clarity to a home or business. Exterior service removes outdoor buildup; interior detailing clears fingerprints and indoor film that exterior work alone cannot reach.',
    'Arizona Window Washing Pros offers exterior-only, interior-only, and combined packages so you can match the visit to your goals and access. Optional screen, track, sill, and frame cleaning can finish the detailing when you want the full window system addressed.',
    'Whether you need a full clean for a primary residence, cabin, vacation home, or storefront, call (480) 737-0850 or request a free estimate for interior and exterior window cleaning.',
  ],
  sections: [
    {
      heading: 'Complete Interior and Exterior Cleaning',
      paragraphs: [
        'A combined interior and exterior visit treats both sides of the glass in one coordinated appointment. The result is clearer views from inside the room and a cleaner appearance from the curb or sidewalk.',
        'Combined cleanings are popular before guests arrive, when listing a property, after a long vacant period, or whenever windows have gone many months without professional attention.',
      ],
    },
    {
      heading: 'Exterior Window Cleaning',
      paragraphs: [
        'Exterior window cleaning focuses on outdoor film, dust, and weather-related buildup. On many jobs we use professional DI / RO purified water equipment so exterior glass can dry with fewer mineral spots—helpful on second-story and hard-to-reach panes.',
        'Exterior-only service is a practical option when you want curb appeal improved and indoor access is limited. It is also a strong maintenance choice between deeper interior detailing visits.',
      ],
    },
    {
      heading: 'Interior Window Cleaning',
      paragraphs: [
        'Interior window cleaning uses traditional detailing to remove smudges, fingerprints, and indoor film from glass in living spaces, kitchens, offices, and other rooms. Interior work requires access inside the property.',
        'Interior-only cleaning can make sense after painting, renovations, or when exterior glass was recently cleaned but interior panes need attention. Many customers eventually prefer a full interior and exterior package for the most consistent result.',
      ],
    },
    {
      heading: 'When to Choose Both Interior and Exterior',
      paragraphs: [
        'Choose a combined package when both sides of the glass look dull, when preparing a home for arrival or photos, or when you want a thorough reset after seasons of neglect. Cabins and vacation homes often benefit from both sides after long vacant stretches.',
        'If you are unsure, describe the property and how the windows look today when you request a quote. We can help you decide whether exterior-only or a full interior and exterior visit is the better fit.',
      ],
    },
    {
      heading: 'Screens, Tracks, Sills and Frames',
      paragraphs: [
        'Optional detailing completes an interior and exterior glass package. Screen cleaning, track cleaning, and sill and frame wipe-downs address the surfaces that sit around the glass and often show dust first.',
        'These add-ons are cleaning services only. They do not include screen repair, hardware repair, or frame restoration. Select them when you want a more finished look across the full window opening.',
      ],
    },
    {
      heading: 'Homes, Cabins and Businesses',
      paragraphs: [
        'Interior and exterior window cleaning is available for residential homes, cabins, vacation properties, and commercial spaces such as storefronts and offices. The same core services apply, with scheduling adjusted for access and business hours when needed.',
        'Explore our residential and commercial pages for property-type context, or stay on this page if you already know you want a complete glass package.',
      ],
    },
    {
      heading: 'How the Estimate Process Works',
      paragraphs: [
        'Call or text Arizona Window Washing Pros at (480) 737-0850, or submit the quote form with your city, property type, approximate number of windows, and whether you need interior glass, exterior glass, or both. Mention screens and tracks if you want those included.',
        'We follow up with a free estimate. After you approve the scope, we schedule the appointment and complete the selected interior and exterior services.',
      ],
    },
  ],
  included: [
    'Exterior window glass cleaning',
    'Interior window glass cleaning when requested',
    'Combined interior and exterior packages',
    'Optional screen cleaning',
    'Optional track, sill, and frame detailing',
    'Residential and commercial appointments',
  ],
  faqs: [
    {
      question: 'Do you clean both the inside and outside of windows?',
      answer:
        'Yes. We offer exterior-only, interior-only, and combined interior and exterior window cleaning.',
    },
    {
      question: 'Do I need both interior and exterior cleaning?',
      answer:
        'Not always. Exterior-only service improves curb appeal and outdoor glass. A combined visit is best when both sides look dull or when you want a complete refresh.',
    },
    {
      question: 'Do you clean second-story windows?',
      answer:
        'Yes. Exterior cleaning often uses professional water-fed pole equipment that helps reach elevated glass. Share stories and access notes when you request a quote.',
    },
    {
      question: 'Can screens and tracks be included with interior and exterior cleaning?',
      answer:
        'Yes. Screen, track, sill, and frame cleaning can be added when those services are selected as part of your appointment.',
    },
    {
      question: 'Do I need to be home for the service?',
      answer:
        'Exterior-only cleaning can often be completed without you present when access is arranged. Interior cleaning typically requires access inside the property.',
    },
    {
      question: 'How do I request an interior and exterior estimate?',
      answer:
        'Call or text (480) 737-0850, or use the form on this page with your location and service preferences. We provide a free estimate.',
    },
  ],
  finalCtaHeading: 'Request an Interior and Exterior Window Cleaning Quote',
  finalCtaCopy:
    'Want clearer glass inside and out? Call Arizona Window Washing Pros at (480) 737-0850 or send a free estimate request today.',
  relatedLinks: [
    ...northernCityLinks,
    { label: 'Screen and track cleaning', href: SPECIALTY_PATHS.screenTrack },
    { label: 'Residential window cleaning', href: '/services/residential-window-cleaning' },
    { label: 'Cabin window cleaning', href: SPECIALTY_PATHS.cabin },
    { label: 'Storefront window cleaning', href: SPECIALTY_PATHS.storefront },
    { label: 'White Mountains window cleaning', href: SPECIALTY_PATHS.whiteMountains },
    { label: 'Contact us', href: '/contact' },
  ],
  serviceSchemaName: 'Interior and Exterior Window Cleaning',
}

export const SPECIALTY_SERVICE_PAGES: ContentLandingConfig[] = [
  CABIN_WINDOW_CLEANING,
  VACATION_HOME_WINDOW_CLEANING,
  STOREFRONT_WINDOW_CLEANING,
  SCREEN_TRACK_CLEANING,
  INTERIOR_EXTERIOR_WINDOW_CLEANING,
]

/** All specialty, regional hub, and expansion paths for sitemap generation. */
export function getAllSpecialtyPaths(): string[] {
  return [
    ...SPECIALTY_SERVICE_PAGES.map((page) => page.path),
    WHITE_MOUNTAINS_HUB.path,
    EXPANSION_ANNOUNCEMENT.path,
  ]
}
