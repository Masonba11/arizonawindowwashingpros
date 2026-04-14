import { BUSINESS_INFO } from './constants'
import type { Metadata } from 'next'

export function generateCityLandingMetadata(city: string): Metadata {
  return {
    title: `${city} Window Cleaning | $100 Off | Arizona Window Cleaning Pros`,
    description: `Professional ${city} window cleaning services. $100 off first service. Licensed & insured. Free estimates. Call (480) 476-3731 for same-day service.`,
    alternates: {
      canonical: `${BUSINESS_INFO.website}/${city.toLowerCase()}-window-washing`,
    },
  }
}

export function generateCityLandingSchema(city: string, nearbyAreas: string[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BUSINESS_INFO.name,
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    url: `${BUSINESS_INFO.website}/${city.toLowerCase()}-window-washing`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: BUSINESS_INFO.address.city,
      addressRegion: BUSINESS_INFO.address.state,
      postalCode: BUSINESS_INFO.address.zip,
      addressCountry: 'US',
    },
    areaServed: [
      {
        '@type': 'City',
        name: city,
        addressRegion: 'AZ',
        addressCountry: 'US',
      },
      ...nearbyAreas.map((area) => ({
        '@type': 'City',
        name: area,
        addressRegion: 'AZ',
        addressCountry: 'US',
      })),
    ],
    serviceType: 'Window Cleaning Service',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Window Cleaning Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: `${city} Window Cleaning`,
            description: `Professional window cleaning services in ${city}, Arizona.`,
            provider: {
              '@type': 'LocalBusiness',
              name: BUSINESS_INFO.name,
            },
          },
        },
      ],
    },
  }
}


