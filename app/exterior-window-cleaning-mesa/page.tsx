import { Metadata } from 'next'
import ServiceCityLanding from '@/components/ServiceCityLanding'
import { BUSINESS_INFO } from '@/lib/constants'
import { generateServiceCityFAQs } from '@/lib/serviceCityFAQs'

export const metadata: Metadata = {
  title: 'Exterior Window Cleaning in Mesa, AZ | $100 OFF | Arizona window cleaning Pros',
  description: 'Professional exterior window cleaning in Mesa, Arizona. $100 off first service. Licensed, insured, streak-free guarantee. Call (480) 476-3731 for free estimate.',
  alternates: {
    canonical: '/exterior-window-cleaning-mesa',
  },
}

const faqs = generateServiceCityFAQs('Exterior Window Cleaning', 'Mesa')

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
  serviceType: 'Exterior Window Cleaning',
  url: `${BUSINESS_INFO.website}/exterior-window-cleaning-mesa`,
  '@graph': [
    {
      '@type': 'Service',
      serviceType: 'Exterior Window Cleaning',
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

export default function ExteriorWindowCleaningMesaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceCityLanding
        service="Exterior Window Cleaning"
        serviceSlug="exterior-window-cleaning"
        city="Mesa"
        nearbyAreas={['Gilbert', 'Chandler', 'Tempe']}
        faqs={faqs}
      />
    </>
  )
}

