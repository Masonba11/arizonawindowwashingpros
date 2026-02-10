import { Metadata } from 'next'
import ServiceCityLanding from '@/components/ServiceCityLanding'
import { BUSINESS_INFO } from '@/lib/constants'
import { generateServiceCityFAQs } from '@/lib/serviceCityFAQs'

export const metadata: Metadata = {
  title: 'Track & Sill Cleaning in Tempe, AZ | $100 OFF | Arizona Window Washing Pros',
  description: 'Professional track and sill cleaning in Tempe, Arizona. $100 off first service. Licensed, insured, streak-free guarantee. Call (480) 737-0850 for free estimate.',
  alternates: {
    canonical: '/track-sill-cleaning-tempe',
  },
}

const faqs = generateServiceCityFAQs('Track & Sill Cleaning', 'Tempe')

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: BUSINESS_INFO.name,
  telephone: '+14807370850',
  areaServed: {
    '@type': 'City',
    name: 'Tempe',
    addressRegion: 'AZ',
  },
  serviceType: 'Track & Sill Cleaning',
  url: `${BUSINESS_INFO.website}/track-sill-cleaning-tempe`,
  '@graph': [
    {
      '@type': 'Service',
      serviceType: 'Track & Sill Cleaning',
      areaServed: {
        '@type': 'City',
        name: 'Tempe',
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

export default function TrackSillCleaningTempePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceCityLanding
        service="Track & Sill Cleaning"
        serviceSlug="track-sill-cleaning"
        city="Tempe"
        nearbyAreas={['Mesa', 'Chandler', 'Scottsdale']}
        faqs={faqs}
      />
    </>
  )
}

