import { Metadata } from 'next'
import ServiceCityLanding from '@/components/ServiceCityLanding'
import { BUSINESS_INFO } from '@/lib/constants'
import { generateServiceCityFAQs } from '@/lib/serviceCityFAQs'

export const metadata: Metadata = {
  title: 'Interior Window Cleaning in Mesa, AZ | $100 OFF | Arizona window cleaning Pros',
  description: 'Professional interior window cleaning in Mesa, Arizona. $100 off first service. Licensed, insured, streak-free guarantee. Call (480) 737-0850 for free estimate.',
  alternates: {
    canonical: '/interior-window-cleaning-mesa',
  },
}

const faqs = generateServiceCityFAQs('Interior Window Cleaning', 'Mesa')

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: BUSINESS_INFO.name,
  telephone: '+14807370850',
  areaServed: {
    '@type': 'City',
    name: 'Mesa',
    addressRegion: 'AZ',
  },
  serviceType: 'Interior Window Cleaning',
  url: `${BUSINESS_INFO.website}/interior-window-cleaning-mesa`,
  '@graph': [
    {
      '@type': 'Service',
      serviceType: 'Interior Window Cleaning',
      areaServed: {
        '@type': 'City',
        name: 'Mesa',
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

export default function InteriorWindowCleaningMesaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceCityLanding
        service="Interior Window Cleaning"
        serviceSlug="interior-window-cleaning"
        city="Mesa"
        nearbyAreas={['Gilbert', 'Chandler', 'Tempe']}
        faqs={faqs}
      />
    </>
  )
}

