import { BUSINESS_INFO } from './constants'
import type { Metadata } from 'next'

export function generateLocalBusinessSchema() {
  // Convert hours to schema.org format
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
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '00:00',
      closes: '00:00',
      closed: true,
    },
  ]

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BUSINESS_INFO.website}#organization`,
    name: BUSINESS_INFO.name,
    alternateName: 'Arizona Window Cleaning Pros',
    description: 'Professional exterior and interior window cleaning services in Mesa, Gilbert, Queen Creek, and Chandler, Arizona. Expert window cleaning and screen cleaning.',
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    url: BUSINESS_INFO.website,
    logo: `${BUSINESS_INFO.website}/AZWPlogo-Photoroom.png`,
    image: `${BUSINESS_INFO.website}/AZWPlogo-Photoroom.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.city,
      addressRegion: BUSINESS_INFO.address.state,
      postalCode: BUSINESS_INFO.address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      addressLocality: BUSINESS_INFO.address.city,
      addressRegion: BUSINESS_INFO.address.state,
      addressCountry: 'US',
    },
    areaServed: BUSINESS_INFO.serviceArea
      .filter((area) => area !== 'AZ')
      .map((city) => ({
        '@type': 'City',
        name: city,
        addressRegion: 'AZ',
        addressCountry: 'US',
      })),
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        addressLocality: 'Mesa',
        addressRegion: 'AZ',
        addressCountry: 'US',
      },
      geoRadius: {
        '@type': 'Distance',
        value: '25',
        unitCode: 'mi',
      },
    },
    openingHoursSpecification,
    priceRange: '$$',
    paymentAccepted: 'Cash, Credit Card, Check',
    currenciesAccepted: 'USD',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Window Cleaning Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Exterior Window Cleaning',
            description: 'Professional exterior window cleaning for crystal-clear views.',
            provider: {
              '@type': 'LocalBusiness',
              name: BUSINESS_INFO.name,
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Interior Window Cleaning',
            description: 'Optional premium add-on service for interior glass cleaning and detailing.',
            provider: {
              '@type': 'LocalBusiness',
              name: BUSINESS_INFO.name,
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Screen Cleaning',
            description: 'Thorough screen cleaning to remove dust, pollen, and debris.',
            provider: {
              '@type': 'LocalBusiness',
              name: BUSINESS_INFO.name,
            },
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '12',
      bestRating: '5',
      worstRating: '1',
    },
    knowsAbout: [
      'Window Cleaning',
      'Exterior Window Cleaning',
      'Interior Window Cleaning',
      'Screen Cleaning',
      'Residential Window Cleaning',
      'Commercial Window Cleaning',
    ],
  }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function generateServiceSchema(serviceName: string, serviceDescription: string, serviceUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: serviceDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: BUSINESS_INFO.name,
      telephone: BUSINESS_INFO.phone,
      email: BUSINESS_INFO.email,
      address: {
        '@type': 'PostalAddress',
        addressLocality: BUSINESS_INFO.address.city,
        addressRegion: BUSINESS_INFO.address.state,
        postalCode: BUSINESS_INFO.address.zip,
        addressCountry: 'US',
      },
    },
    areaServed: BUSINESS_INFO.serviceArea
      .filter((area) => area !== 'AZ')
      .map((city) => ({
        '@type': 'City',
        name: city,
        addressRegion: 'AZ',
        addressCountry: 'US',
      })),
    url: serviceUrl,
    serviceType: 'Window Cleaning Service',
    category: 'Home Improvement',
  }
}

export function generateMetadata({
  title,
  description,
  path = '',
}: {
  title: string // Page-specific title only (template will add business name)
  description: string
  path?: string
}): Metadata {
  // Don't add business name here - let layout.tsx template handle it
  // This prevents duplication: template adds it once
  const url = `${BUSINESS_INFO.website}${path}`
  const fullTitleForOG = `${title} | ${BUSINESS_INFO.name}` // Only for OG/Twitter

  return {
    title, // Page title only - template adds business name
    description,
    openGraph: {
      title: fullTitleForOG,
      description,
      url,
      siteName: BUSINESS_INFO.name,
      type: 'website',
      locale: 'en_US',
      images: [
        {
          url: `${BUSINESS_INFO.website}/AZWPlogo-Photoroom.png`,
          width: 1200,
          height: 630,
          alt: BUSINESS_INFO.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitleForOG,
      description,
      images: [`${BUSINESS_INFO.website}/AZWPlogo-Photoroom.png`],
    },
    alternates: {
      canonical: url,
    },
  }
}

