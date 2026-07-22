import { BUSINESS_INFO } from './constants'

/**
 * Generate clean ProfessionalService schema with 0 errors
 * Replaces broken LocalBusiness schema
 */
export function generateProfessionalServiceSchema() {
  // Opening hours - do NOT include closed days, only open days
  const openingHoursSpecification = [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '16:00',
    },
  ]

  const areaServed = [
    {
      '@type': 'Place',
      name: 'Pinetop',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Pinetop',
        addressRegion: 'AZ',
        addressCountry: 'US',
      },
    },
    {
      '@type': 'Place',
      name: 'Lakeside',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Lakeside',
        addressRegion: 'AZ',
        addressCountry: 'US',
      },
    },
    {
      '@type': 'Place',
      name: 'Pinetop-Lakeside',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Pinetop-Lakeside',
        addressRegion: 'AZ',
        addressCountry: 'US',
      },
    },
    {
      '@type': 'Place',
      name: 'Show Low',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Show Low',
        addressRegion: 'AZ',
        addressCountry: 'US',
      },
    },
    {
      '@type': 'Place',
      name: 'Snowflake',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Snowflake',
        addressRegion: 'AZ',
        addressCountry: 'US',
      },
    },
  ]

  // Approximate center near Show Low / Pinetop-Lakeside
  const serviceArea = {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 34.2542,
      longitude: -110.0298,
    },
    geoRadius: 48280, // ~30 miles in meters
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${BUSINESS_INFO.website}#organization`,
    name: 'Arizona Window Washing Pros',
    description:
      'Professional residential and commercial window cleaning in Pinetop, Lakeside, Show Low, and Snowflake, Arizona. Interior, exterior, screens, tracks, sills, and frames.',
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    url: BUSINESS_INFO.website,
    logo: `${BUSINESS_INFO.website}/AZWPlogo-Photoroom.png`,
    image: `${BUSINESS_INFO.website}/AZWPlogo-Photoroom.png`,
    areaServed,
    serviceArea,
    openingHoursSpecification,
    priceRange: '$$',
    paymentAccepted: 'Cash, Credit Card, Check',
    currenciesAccepted: 'USD',
    serviceOffered: [
      'Window Cleaning',
      'Exterior Window Cleaning',
      'Interior Window Cleaning',
      'Screen Cleaning',
      'Track & Sill Cleaning',
      'Residential Window Cleaning',
      'Commercial Window Cleaning',
    ],
    knowsAbout: [
      'Window Cleaning',
      'Deionized Water Systems',
      'Screen Cleaning',
      'Residential Window Cleaning',
      'Commercial Window Cleaning',
      'Cabin Window Cleaning',
    ],
    sameAs: [
      BUSINESS_INFO.socialMedia.facebook,
      BUSINESS_INFO.socialMedia.instagram,
      BUSINESS_INFO.socialMedia.tiktok,
      BUSINESS_INFO.socialMedia.youtube,
    ].filter(Boolean),
  }
}
