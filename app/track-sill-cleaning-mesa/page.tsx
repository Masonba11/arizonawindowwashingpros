import { Metadata } from 'next'
import ServiceCityLanding from '@/components/ServiceCityLanding'
import { BUSINESS_INFO } from '@/lib/constants'
import { generateServiceCityFAQs } from '@/lib/serviceCityFAQs'

export const metadata: Metadata = {
  title: 'Track & Sill Cleaning in Mesa, AZ | $100 OFF | Arizona window cleaning Pros',
  description: 'Professional track and sill cleaning in Mesa, Arizona. $100 off first service. Licensed, insured, streak-free guarantee. Call (480) 476-3731 for free estimate.',
  alternates: {
    canonical: '/track-sill-cleaning-mesa',
  },
}

const faqs = generateServiceCityFAQs('Track & Sill Cleaning', 'Mesa')

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: BUSINESS_INFO.name,
  telephone: '+14804763731',
  areaServed: {
    '@type': 'City',
    name: 'Mesa',
    addressRegion: 'AZ',
  },
  serviceType: 'Track & Sill Cleaning',
  url: `${BUSINESS_INFO.website}/track-sill-cleaning-mesa`,
  '@graph': [
    {
      '@type': 'Service',
      serviceType: 'Track & Sill Cleaning',
      areaServed: {
        '@type': 'City',
        name: 'Mesa',
        addressRegion: 'AZ',
      },
      provider: {
        '@type': 'LocalBusiness',
        name: BUSINESS_INFO.name,
        telephone: '+14804763731',
      },
    },
  ],
}

export default function TrackSillCleaningMesaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceCityLanding
        service="Track & Sill Cleaning"
        serviceSlug="track-sill-cleaning"
        city="Mesa"
        nearbyAreas={['Gilbert', 'Chandler', 'Tempe']}
        faqs={faqs}
      />
    </>
  )
}

