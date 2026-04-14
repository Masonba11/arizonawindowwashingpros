import { Metadata } from 'next'
import CityLanding from '@/components/CityLanding'
import { BUSINESS_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'San Tan Valley window cleaning | $100 OFF | Arizona window cleaning Pros',
  description: 'Professional window cleaning in San Tan Valley, AZ. $100 off first service. Licensed, insured, streak-free guarantee. Call (480) 476-3731 for free estimate.',
  alternates: {
    canonical: '/san-tan-valley-window-washing',
  },
}

const faqs = [
  {
    question: 'How much does window cleaning cost in San Tan Valley?',
    answer: 'window cleaning prices in San Tan Valley start at $150 for 1-story homes and $180 for 2-story homes. Most San Tan Valley homes range from $150-$350. Pricing is based on number of windows and home height. Contact us for a free estimate.',
  },
  {
    question: 'Do you clean screens in San Tan Valley?',
    answer: 'Yes, screen cleaning is available as an add-on service. We remove screens, clean them thoroughly, and reinstall them. This helps improve air quality and extends screen life.',
  },
  {
    question: 'Do you do commercial buildings in San Tan Valley?',
    answer: 'Yes, we provide window cleaning services for commercial properties throughout San Tan Valley, including offices, retail stores, and multi-story buildings. Contact us for commercial pricing.',
  },
  {
    question: 'How quickly can you schedule in San Tan Valley?',
    answer: 'We offer same-day estimates and can often schedule service within 24-48 hours. Call us at (480) 476-3731 for fastest scheduling.',
  },
  {
    question: 'What if it rains after you clean my windows in San Tan Valley?',
    answer: 'We monitor weather conditions and will reschedule if rain is expected within 24 hours of service. Your satisfaction is guaranteed.',
  },
  {
    question: 'Do you offer recurring service in San Tan Valley?',
    answer: 'Yes, we offer recurring window cleaning service plans for San Tan Valley homes and businesses. Regular cleaning helps maintain window clarity and prevents hard water spot buildup.',
  },
  {
    question: 'What areas of San Tan Valley do you serve?',
    answer: 'We serve all areas of San Tan Valley, Arizona, including nearby areas like Queen Creek, Gilbert, and Mesa.',
  },
  {
    question: 'Do you clean hard water spots in San Tan Valley?',
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
    name: 'San Tan Valley',
    addressRegion: 'AZ',
  },
  serviceType: 'window cleaning',
  url: `${BUSINESS_INFO.website}/san-tan-valley-window-washing`,
  '@graph': [
    {
      '@type': 'Service',
      serviceType: 'window cleaning',
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

export default function SanTanValleyWindowWashingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <CityLanding
        city="San Tan Valley"
        nearbyAreas={['Queen Creek', 'Gilbert', 'Mesa']}
        faqs={faqs}
      />
    </>
  )
}

