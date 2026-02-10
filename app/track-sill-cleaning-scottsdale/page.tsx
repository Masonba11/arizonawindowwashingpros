import { Metadata } from 'next'
import ServiceCityLanding from '@/components/ServiceCityLanding'
import { BUSINESS_INFO } from '@/lib/constants'
import { generateServiceCityFAQs } from '@/lib/serviceCityFAQs'

export const metadata: Metadata = {
  title: 'Track & Sill Cleaning in Scottsdale, AZ | $100 OFF | Arizona Window Washing Pros',
  description: 'Professional track and sill cleaning in Scottsdale, Arizona. $100 off first service. Licensed, insured, streak-free guarantee. Call (480) 737-0850 for free estimate.',
  alternates: {
    canonical: '/track-sill-cleaning-scottsdale',
  },
}

const faqs = generateServiceCityFAQs('Track & Sill Cleaning', 'Scottsdale')

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: BUSINESS_INFO.name,
  telephone: '+14807370850',
  areaServed: {
    '@type': 'City',
    name: 'Scottsdale',
    addressRegion: 'AZ',
  },
  serviceType: 'Track & Sill Cleaning',
  url: `${BUSINESS_INFO.website}/track-sill-cleaning-scottsdale`,
  '@graph': [
    {
      '@type': 'Service',
      serviceType: 'Track & Sill Cleaning',
      areaServed: {
        '@type': 'City',
        name: 'Scottsdale',
        addressRegion: 'AZ',
      },
      provider: {
        '@type': 'LocalBusiness',
        name: BUSINESS_INFO.name,
        telephone: '+14807370850',
      },
    },
  ],
}

export default function TrackSillCleaningScottsdalePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceCityLanding
        service="Track & Sill Cleaning"
        serviceSlug="track-sill-cleaning"
        city="Scottsdale"
        nearbyAreas={['Tempe', 'Phoenix']}
        faqs={faqs}
      />
    </>
  )
}

