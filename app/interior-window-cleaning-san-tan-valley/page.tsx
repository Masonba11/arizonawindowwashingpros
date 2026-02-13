import { Metadata } from 'next'
import ServiceCityLanding from '@/components/ServiceCityLanding'
import { BUSINESS_INFO } from '@/lib/constants'
import { generateServiceCityFAQs } from '@/lib/serviceCityFAQs'

export const metadata: Metadata = {
  title: 'Interior Window Cleaning in San Tan Valley, AZ | $100 OFF | Arizona Window Washing Pros',
  description: 'Professional interior window cleaning in San Tan Valley, Arizona. $100 off first service. Licensed, insured, streak-free guarantee. Call (480) 737-0850 for free estimate.',
  alternates: {
    canonical: '/interior-window-cleaning-san-tan-valley',
  },
}

const faqs = generateServiceCityFAQs('Interior Window Cleaning', 'San Tan Valley')

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: BUSINESS_INFO.name,
  telephone: '+14807370850',
  areaServed: {
    '@type': 'City',
    name: 'San Tan Valley',
    addressRegion: 'AZ',
  },
  serviceType: 'Interior Window Cleaning',
  url: `${BUSINESS_INFO.website}/interior-window-cleaning-san-tan-valley`,
  '@graph': [
    {
      '@type': 'Service',
      serviceType: 'Interior Window Cleaning',
      areaServed: {
        '@type': 'City',
        name: 'San Tan Valley',
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

export default function InteriorWindowCleaningSanTanValleyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceCityLanding
        service="Interior Window Cleaning"
        serviceSlug="interior-window-cleaning"
        city="San Tan Valley"
        nearbyAreas={['Queen Creek', 'Gilbert', 'Mesa']}
        faqs={faqs}
      />
    </>
  )
}

