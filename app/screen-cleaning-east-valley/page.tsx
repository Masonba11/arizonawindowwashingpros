import { Metadata } from 'next'
import ServiceCityLanding from '@/components/ServiceCityLanding'
import { BUSINESS_INFO } from '@/lib/constants'
import { generateServiceCityFAQs } from '@/lib/serviceCityFAQs'

export const metadata: Metadata = {
  title: 'Screen Cleaning in East Valley, AZ | 20% OFF | Arizona Window Cleaning Pros',
  description: 'Professional screen cleaning throughout the East Valley, Arizona. Serving Mesa, Gilbert, Chandler, Scottsdale, Tempe, Queen Creek & San Tan Valley. 20% off first service. Licensed, insured, streak-free guarantee. Call (480) 476-3731 for free estimate.',
  alternates: {
    canonical: '/screen-cleaning-east-valley',
  },
}

const faqs = generateServiceCityFAQs('Screen Cleaning', 'East Valley')

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: BUSINESS_INFO.name,
  telephone: '+14804763731',
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
  serviceType: 'Screen Cleaning',
  url: `${BUSINESS_INFO.website}/screen-cleaning-east-valley`,
  '@graph': [
    {
      '@type': 'Service',
      serviceType: 'Screen Cleaning',
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
        telephone: '+14804763731',
      },
    },
  ],
}

export default function ScreenCleaningEastValleyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceCityLanding
        service="Screen Cleaning"
        serviceSlug="screen-cleaning"
        city="East Valley"
        nearbyAreas={['Mesa', 'Gilbert', 'Chandler', 'Scottsdale', 'Tempe', 'Queen Creek', 'San Tan Valley']}
        faqs={faqs}
      />
    </>
  )
}

