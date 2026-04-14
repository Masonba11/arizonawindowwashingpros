import { Metadata } from 'next'
import CityLanding from '@/components/CityLanding'
import { BUSINESS_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Scottsdale window cleaning | $100 OFF | Arizona window cleaning Pros',
  description: 'Professional window cleaning in Scottsdale, AZ. $100 off first service. Licensed, insured, streak-free guarantee. Call (480) 476-3731 for free estimate.',
  alternates: {
    canonical: '/scottsdale-window-washing',
  },
}

const faqs = [
  {
    question: 'How much does window cleaning cost in Scottsdale?',
    answer: 'window cleaning prices in Scottsdale typically range from $150-$500+ depending on home size, number of windows, and services requested. We provide free, same-day estimates. Contact us for your personalized quote.',
  },
  {
    question: 'Do you clean screens in Scottsdale?',
    answer: 'Yes, screen cleaning is available as an add-on service. We remove screens, clean them thoroughly, and reinstall them. This helps improve air quality and extends screen life.',
  },
  {
    question: 'Do you do commercial buildings in Scottsdale?',
    answer: 'Yes, we provide window cleaning services for commercial properties throughout Scottsdale, including offices, retail stores, and multi-story buildings. Contact us for commercial pricing.',
  },
  {
    question: 'How quickly can you schedule in Scottsdale?',
    answer: 'We offer same-day estimates and can often schedule service within 24-48 hours. Call us at (480) 476-3731 for fastest scheduling.',
  },
  {
    question: 'What if it rains after you clean my windows in Scottsdale?',
    answer: 'We monitor weather conditions and will reschedule if rain is expected within 24 hours of service. Your satisfaction is guaranteed.',
  },
  {
    question: 'Do you offer recurring service in Scottsdale?',
    answer: 'Yes, we offer recurring window cleaning service plans for Scottsdale homes and businesses. Regular cleaning helps maintain window clarity and prevents hard water spot buildup.',
  },
  {
    question: 'What areas of Scottsdale do you serve?',
    answer: 'We serve all areas of Scottsdale, including Old Town, North Scottsdale, South Scottsdale, and nearby areas like Paradise Valley, Arcadia, and Fountain Hills.',
  },
  {
    question: 'Do you clean hard water spots in Scottsdale?',
    answer: 'Yes, we offer hard water spot evaluation and removal services. Arizona\'s hard water can leave mineral deposits on windows. We use specialized techniques to safely remove these spots.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: BUSINESS_INFO.name,
  telephone: '+14804763731',
  areaServed: {
    '@type': 'City',
    name: 'Scottsdale',
    addressRegion: 'AZ',
  },
  serviceType: 'window cleaning',
  url: `${BUSINESS_INFO.website}/scottsdale-window-washing`,
  '@graph': [
    {
      '@type': 'Service',
      serviceType: 'window cleaning',
      areaServed: {
        '@type': 'City',
        name: 'Scottsdale',
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

export default function ScottsdaleWindowWashingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <CityLanding
        city="Scottsdale"
        nearbyAreas={['Paradise Valley', 'Arcadia', 'Fountain Hills']}
        faqs={faqs}
      />
    </>
  )
}
