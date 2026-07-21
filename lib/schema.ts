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

  // Area served as Place objects with PostalAddress (correct format)
  const areaServed = [
    {
      '@type': 'Place',
      name: 'Gilbert',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Gilbert',
        addressRegion: 'AZ',
        addressCountry: 'US',
      },
    },
    {
      '@type': 'Place',
      name: 'Queen Creek',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Queen Creek',
        addressRegion: 'AZ',
        addressCountry: 'US',
      },
    },
    {
      '@type': 'Place',
      name: 'Mesa',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mesa',
        addressRegion: 'AZ',
        addressCountry: 'US',
      },
    },
    {
      '@type': 'Place',
      name: 'Chandler',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Chandler',
        addressRegion: 'AZ',
        addressCountry: 'US',
      },
    },
    {
      '@type': 'Place',
      name: 'Tempe',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Tempe',
        addressRegion: 'AZ',
        addressCountry: 'US',
      },
    },
    {
      '@type': 'Place',
      name: 'Scottsdale',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Scottsdale',
        addressRegion: 'AZ',
        addressCountry: 'US',
      },
    },
    {
      '@type': 'Place',
      name: 'San Tan Valley',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'San Tan Valley',
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
    {
      '@type': 'Place',
      name: 'White Mountains',
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'AZ',
        addressCountry: 'US',
      },
    },
  ]

  // Service area as GeoCircle (correct format: geoRadius is NUMBER in meters)
  // 25 miles = 40233.6 meters
  const serviceArea = {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 33.4152, // Mesa, AZ approximate center
      longitude: -111.8315,
    },
    geoRadius: 40234, // 25 miles in meters (number, not object)
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${BUSINESS_INFO.website}#organization`,
    name: 'Arizona Window Washing Pros', // Must match exactly
    description: 'Professional window cleaning services in Gilbert, Queen Creek, Mesa, Chandler, Tempe, Scottsdale, San Tan Valley, Pinetop-Lakeside, Show Low, and Snowflake, Arizona. Expert window cleaning, screen cleaning, and hard water stain removal using deionized water systems.',
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    url: BUSINESS_INFO.website,
    logo: `${BUSINESS_INFO.website}/AZWPlogo-Photoroom.png`,
    image: `${BUSINESS_INFO.website}/AZWPlogo-Photoroom.png`,
    // Only include address if we have a real street address
    // address: {
    //   '@type': 'PostalAddress',
    //   addressLocality: BUSINESS_INFO.address.city,
    //   addressRegion: BUSINESS_INFO.address.state,
    //   postalCode: BUSINESS_INFO.address.zip,
    //   addressCountry: 'US',
    // },
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
      'Hard Water Stain Removal',
      'Track & Sill Cleaning',
      'Residential Window Cleaning',
      'Commercial Window Cleaning',
    ],
    knowsAbout: [
      'Window Cleaning',
      'Deionized Water Systems',
      'Hard Water Stain Removal',
      'Screen Cleaning',
      'Residential Window Cleaning',
      'Commercial Window Cleaning',
    ],
    sameAs: [
      BUSINESS_INFO.socialMedia.facebook,
      BUSINESS_INFO.socialMedia.instagram,
      BUSINESS_INFO.socialMedia.tiktok,
      BUSINESS_INFO.socialMedia.youtube,
    ].filter(Boolean),
  }
}


