import { Metadata } from 'next'
import ServiceCityLanding from '@/components/ServiceCityLanding'
import { BUSINESS_INFO } from '@/lib/constants'
import { generateServiceCityFAQs } from '@/lib/serviceCityFAQs'

export const metadata: Metadata = {
  title: 'Track & Sill Cleaning in San Tan Valley, AZ | $100 OFF | Arizona window cleaning Pros',
  description: 'Professional track and sill cleaning in San Tan Valley, Arizona. $100 off first service. Licensed, insured, streak-free guarantee. Call (480) 476-3731 for free estimate.',
  alternates: {
    canonical: '/track-sill-cleaning-san-tan-valley',
  },
}

const faqs = generateServiceCityFAQs('Track & Sill Cleaning', 'San Tan Valley')

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: BUSINESS_INFO.name,
  telephone: '+14804763731',
  areaServed: {
    '@type': 'City',
    name: 'San Tan Valley',
    addressRegion: 'AZ',
  },
  serviceType: 'Track & Sill Cleaning',
  url: `${BUSINESS_INFO.website}/track-sill-cleaning-san-tan-valley`,
  '@graph': [
    {
      '@type': 'Service',
      serviceType: 'Track & Sill Cleaning',
      areaServed: {
        '@type': 'City',
        name: 'San Tan Valley',
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

export default function TrackSillCleaningSanTanValleyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceCityLanding
        service="Track & Sill Cleaning"
        serviceSlug="track-sill-cleaning"
        city="San Tan Valley"
        nearbyAreas={['Queen Creek', 'Gilbert', 'Mesa']}
        faqs={faqs}
      />
    </>
  )
}

