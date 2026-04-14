import { Metadata } from 'next'
import ServiceCityLanding from '@/components/ServiceCityLanding'
import { BUSINESS_INFO } from '@/lib/constants'
import { generateServiceCityFAQs } from '@/lib/serviceCityFAQs'

export const metadata: Metadata = {
  title: 'Screen Cleaning in Tempe, AZ | $100 OFF | Arizona window cleaning Pros',
  description: 'Professional screen cleaning in Tempe, Arizona. $100 off first service. Licensed, insured, streak-free guarantee. Call (480) 476-3731 for free estimate.',
  alternates: {
    canonical: '/screen-cleaning-tempe',
  },
}

const faqs = generateServiceCityFAQs('Screen Cleaning', 'Tempe')

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: BUSINESS_INFO.name,
  telephone: '+14804763731',
  areaServed: {
    '@type': 'City',
    name: 'Tempe',
    addressRegion: 'AZ',
  },
  serviceType: 'Screen Cleaning',
  url: `${BUSINESS_INFO.website}/screen-cleaning-tempe`,
  '@graph': [
    {
      '@type': 'Service',
      serviceType: 'Screen Cleaning',
      areaServed: {
        '@type': 'City',
        name: 'Tempe',
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

export default function ScreenCleaningTempePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceCityLanding
        service="Screen Cleaning"
        serviceSlug="screen-cleaning"
        city="Tempe"
        nearbyAreas={['Mesa', 'Chandler', 'Scottsdale']}
        faqs={faqs}
      />
    </>
  )
}

