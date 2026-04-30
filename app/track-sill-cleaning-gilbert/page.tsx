import { Metadata } from 'next'
import ServiceCityLanding from '@/components/ServiceCityLanding'
import { BUSINESS_INFO } from '@/lib/constants'
import { generateServiceCityFAQs } from '@/lib/serviceCityFAQs'

export const metadata: Metadata = {
  title: 'Track & Sill Cleaning in Gilbert, AZ | $100 OFF | Arizona window cleaning Pros',
  description: 'Professional track and sill cleaning in Gilbert, Arizona. $100 off first service. Licensed, insured, streak-free guarantee. Call (480) 737-0850 for free estimate.',
  alternates: {
    canonical: '/track-sill-cleaning-gilbert',
  },
}

const faqs = generateServiceCityFAQs('Track & Sill Cleaning', 'Gilbert')

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: BUSINESS_INFO.name,
  telephone: '+14807370850',
  areaServed: {
    '@type': 'City',
    name: 'Gilbert',
    addressRegion: 'AZ',
  },
  serviceType: 'Track & Sill Cleaning',
  url: `${BUSINESS_INFO.website}/track-sill-cleaning-gilbert`,
  '@graph': [
    {
      '@type': 'Service',
      serviceType: 'Track & Sill Cleaning',
      areaServed: {
        '@type': 'City',
        name: 'Gilbert',
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

export default function TrackSillCleaningGilbertPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceCityLanding
        service="Track & Sill Cleaning"
        serviceSlug="track-sill-cleaning"
        city="Gilbert"
        nearbyAreas={['Chandler', 'Mesa', 'Queen Creek']}
        faqs={faqs}
      />
    </>
  )
}

