import { Metadata } from 'next'
import ServiceCityLanding from '@/components/ServiceCityLanding'
import { BUSINESS_INFO } from '@/lib/constants'
import { generateServiceCityFAQs } from '@/lib/serviceCityFAQs'

export const metadata: Metadata = {
  title: 'Interior Window Cleaning in East Valley, AZ | 20% OFF | Arizona Window Cleaning Pros',
  description: 'Professional interior window cleaning throughout the East Valley, Arizona. Serving Mesa, Gilbert, Chandler, Scottsdale, Tempe, Queen Creek & San Tan Valley. 20% off first service. Licensed, insured, streak-free guarantee. Call (480) 476-3731 for free estimate.',
  alternates: {
    canonical: '/interior-window-cleaning-east-valley',
  },
}

const faqs = generateServiceCityFAQs('Interior Window Cleaning', 'East Valley')

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
  serviceType: 'Interior Window Cleaning',
  url: `${BUSINESS_INFO.website}/interior-window-cleaning-east-valley`,
  '@graph': [
    {
      '@type': 'Service',
      serviceType: 'Interior Window Cleaning',
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

export default function InteriorWindowCleaningEastValleyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceCityLanding
        service="Interior Window Cleaning"
        serviceSlug="interior-window-cleaning"
        city="East Valley"
        nearbyAreas={['Mesa', 'Gilbert', 'Chandler', 'Scottsdale', 'Tempe', 'Queen Creek', 'San Tan Valley']}
        faqs={faqs}
      />
    </>
  )
}

