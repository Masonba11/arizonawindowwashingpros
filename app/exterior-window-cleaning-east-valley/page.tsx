import { Metadata } from 'next'
import ServiceCityLanding from '@/components/ServiceCityLanding'
import { BUSINESS_INFO } from '@/lib/constants'
import { generateServiceCityFAQs } from '@/lib/serviceCityFAQs'

export const metadata: Metadata = {
  title: 'Exterior Window Cleaning in East Valley, AZ | 20% OFF | Arizona Window Cleaning Pros',
  description: 'Professional exterior window cleaning throughout the East Valley, Arizona. Serving Mesa, Gilbert, Chandler, Scottsdale, Tempe, Queen Creek & San Tan Valley. 20% off first service. Licensed, insured, streak-free guarantee. Call (480) 737-0850 for free estimate.',
  alternates: {
    canonical: '/exterior-window-cleaning-east-valley',
  },
}

const faqs = generateServiceCityFAQs('Exterior Window Cleaning', 'East Valley')

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: BUSINESS_INFO.name,
  telephone: '+14807370850',
  areaServed: [
    {
      '@type': 'City',
      name: 'Mesa',
      addressRegion: 'AZ',
    },
    {
      '@type': 'City',
      name: 'Gilbert',
      addressRegion: 'AZ',
    },
    {
      '@type': 'City',
      name: 'Chandler',
      addressRegion: 'AZ',
    },
    {
      '@type': 'City',
      name: 'Scottsdale',
      addressRegion: 'AZ',
    },
    {
      '@type': 'City',
      name: 'Tempe',
      addressRegion: 'AZ',
    },
    {
      '@type': 'City',
      name: 'Queen Creek',
      addressRegion: 'AZ',
    },
    {
      '@type': 'City',
      name: 'San Tan Valley',
      addressRegion: 'AZ',
    },
  ],
  serviceType: 'Exterior Window Cleaning',
  url: `${BUSINESS_INFO.website}/exterior-window-cleaning-east-valley`,
  '@graph': [
    {
      '@type': 'Service',
      serviceType: 'Exterior Window Cleaning',
      areaServed: [
        {
          '@type': 'City',
          name: 'Mesa',
          addressRegion: 'AZ',
        },
        {
          '@type': 'City',
          name: 'Gilbert',
          addressRegion: 'AZ',
        },
        {
          '@type': 'City',
          name: 'Chandler',
          addressRegion: 'AZ',
        },
        {
          '@type': 'City',
          name: 'Scottsdale',
          addressRegion: 'AZ',
        },
        {
          '@type': 'City',
          name: 'Tempe',
          addressRegion: 'AZ',
        },
        {
          '@type': 'City',
          name: 'Queen Creek',
          addressRegion: 'AZ',
        },
        {
          '@type': 'City',
          name: 'San Tan Valley',
          addressRegion: 'AZ',
        },
      ],
      provider: {
        '@type': 'LocalBusiness',
        name: BUSINESS_INFO.name,
        telephone: '+14807370850',
      },
    },
  ],
}

export default function ExteriorWindowCleaningEastValleyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceCityLanding
        service="Exterior Window Cleaning"
        serviceSlug="exterior-window-cleaning"
        city="East Valley"
        nearbyAreas={['Mesa', 'Gilbert', 'Chandler', 'Scottsdale', 'Tempe', 'Queen Creek', 'San Tan Valley']}
        faqs={faqs}
      />
    </>
  )
}

