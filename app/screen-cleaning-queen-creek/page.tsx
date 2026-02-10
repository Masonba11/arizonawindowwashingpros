import { Metadata } from 'next'
import ServiceCityLanding from '@/components/ServiceCityLanding'
import { BUSINESS_INFO } from '@/lib/constants'
import { generateServiceCityFAQs } from '@/lib/serviceCityFAQs'

export const metadata: Metadata = {
  title: 'Screen Cleaning in Queen Creek, AZ | $100 OFF | Arizona Window Washing Pros',
  description: 'Professional screen cleaning in Queen Creek, Arizona. $100 off first service. Licensed, insured, streak-free guarantee. Call (480) 737-0850 for free estimate.',
  alternates: {
    canonical: '/screen-cleaning-queen-creek',
  },
}

const faqs = generateServiceCityFAQs('Screen Cleaning', 'Queen Creek')

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: BUSINESS_INFO.name,
  telephone: '+14807370850',
  areaServed: {
    '@type': 'City',
    name: 'Queen Creek',
    addressRegion: 'AZ',
  },
  serviceType: 'Screen Cleaning',
  url: `${BUSINESS_INFO.website}/screen-cleaning-queen-creek`,
  '@graph': [
    {
      '@type': 'Service',
      serviceType: 'Screen Cleaning',
      areaServed: {
        '@type': 'City',
        name: 'Queen Creek',
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

export default function ScreenCleaningQueenCreekPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceCityLanding
        service="Screen Cleaning"
        serviceSlug="screen-cleaning"
        city="Queen Creek"
        nearbyAreas={['Gilbert', 'Mesa', 'Chandler']}
        faqs={faqs}
      />
    </>
  )
}

