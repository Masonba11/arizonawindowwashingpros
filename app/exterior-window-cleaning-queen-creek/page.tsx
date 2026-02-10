import { Metadata } from 'next'
import ServiceCityLanding from '@/components/ServiceCityLanding'
import { BUSINESS_INFO } from '@/lib/constants'
import { generateServiceCityFAQs } from '@/lib/serviceCityFAQs'

export const metadata: Metadata = {
  title: 'Exterior Window Cleaning in Queen Creek, AZ | $100 OFF | Arizona Window Washing Pros',
  description: 'Professional exterior window cleaning in Queen Creek, Arizona. $100 off first service. Licensed, insured, streak-free guarantee. Call (480) 737-0850 for free estimate.',
  alternates: {
    canonical: '/exterior-window-cleaning-queen-creek',
  },
}

const faqs = generateServiceCityFAQs('Exterior Window Cleaning', 'Queen Creek')

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
  serviceType: 'Exterior Window Cleaning',
  url: `${BUSINESS_INFO.website}/exterior-window-cleaning-queen-creek`,
  '@graph': [
    {
      '@type': 'Service',
      serviceType: 'Exterior Window Cleaning',
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

export default function ExteriorWindowCleaningQueenCreekPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceCityLanding
        service="Exterior Window Cleaning"
        serviceSlug="exterior-window-cleaning"
        city="Queen Creek"
        nearbyAreas={['Gilbert', 'Mesa', 'Chandler']}
        faqs={faqs}
      />
    </>
  )
}

