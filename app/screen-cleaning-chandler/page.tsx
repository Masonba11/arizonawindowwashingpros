import { Metadata } from 'next'
import ServiceCityLanding from '@/components/ServiceCityLanding'
import { BUSINESS_INFO } from '@/lib/constants'
import { generateServiceCityFAQs } from '@/lib/serviceCityFAQs'

export const metadata: Metadata = {
  title: 'Screen Cleaning in Chandler, AZ | $100 OFF | Arizona window cleaning Pros',
  description: 'Professional screen cleaning in Chandler, Arizona. $100 off first service. Licensed, insured, streak-free guarantee. Call (480) 737-0850 for free estimate.',
  alternates: {
    canonical: '/screen-cleaning-chandler',
  },
}

const faqs = generateServiceCityFAQs('Screen Cleaning', 'Chandler')

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: BUSINESS_INFO.name,
  telephone: '+14807370850',
  areaServed: {
    '@type': 'City',
    name: 'Chandler',
    addressRegion: 'AZ',
  },
  serviceType: 'Screen Cleaning',
  url: `${BUSINESS_INFO.website}/screen-cleaning-chandler`,
  '@graph': [
    {
      '@type': 'Service',
      serviceType: 'Screen Cleaning',
      areaServed: {
        '@type': 'City',
        name: 'Chandler',
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

export default function ScreenCleaningChandlerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceCityLanding
        service="Screen Cleaning"
        serviceSlug="screen-cleaning"
        city="Chandler"
        nearbyAreas={['Gilbert', 'Mesa', 'Tempe']}
        faqs={faqs}
      />
    </>
  )
}

