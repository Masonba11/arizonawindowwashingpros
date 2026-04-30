import { Metadata } from 'next'
import CityLanding from '@/components/CityLanding'
import { BUSINESS_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Chandler window cleaning | $100 OFF | Arizona window cleaning Pros',
  description: 'Professional window cleaning in Chandler, AZ. $100 off first service. Licensed, insured, streak-free guarantee. Call (480) 737-0850 for free estimate.',
  alternates: {
    canonical: '/chandler-window-washing',
  },
}

const faqs = [
  {
    question: 'How much does window cleaning cost in Chandler?',
    answer: 'window cleaning prices in Chandler start at $150 for 1-story homes and $180 for 2-story homes. Most Chandler homes range from $150-$350. Pricing is based on number of windows and home height. Contact us for a free estimate.',
  },
  {
    question: 'Do you clean screens in Chandler?',
    answer: 'Yes, screen cleaning is available as an add-on service. We remove screens, clean them thoroughly, and reinstall them. This helps improve air quality and extends screen life.',
  },
  {
    question: 'Do you do commercial buildings in Chandler?',
    answer: 'Yes, we provide window cleaning services for commercial properties throughout Chandler, including offices, retail stores, and multi-story buildings. Contact us for commercial pricing.',
  },
  {
    question: 'How quickly can you schedule in Chandler?',
    answer: 'We offer same-day estimates and can often schedule service within 24-48 hours. Call us at (480) 737-0850 for fastest scheduling.',
  },
  {
    question: 'What if it rains after you clean my windows in Chandler?',
    answer: 'We monitor weather conditions and will reschedule if rain is expected within 24 hours of service. Your satisfaction is guaranteed.',
  },
  {
    question: 'Do you offer recurring service in Chandler?',
    answer: 'Yes, we offer recurring window cleaning service plans for Chandler homes and businesses. Regular cleaning helps maintain window clarity and prevents hard water spot buildup.',
  },
  {
    question: 'What areas of Chandler do you serve?',
    answer: 'We serve all areas of Chandler, including downtown Chandler, Ocotillo, and nearby areas like Gilbert, Tempe, and Sun Lakes.',
  },
  {
    question: 'Do you clean hard water spots in Chandler?',
    answer: 'Yes, we offer hard water spot evaluation and removal services. Arizona\'s hard water can leave mineral deposits on windows. We use specialized techniques to safely remove these spots.',
  },
]

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
  serviceType: 'window cleaning',
  url: `${BUSINESS_INFO.website}/chandler-window-washing`,
  '@graph': [
    {
      '@type': 'Service',
      serviceType: 'window cleaning',
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

export default function ChandlerWindowWashingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <CityLanding
        city="Chandler"
        nearbyAreas={['Gilbert', 'Tempe', 'Sun Lakes']}
        faqs={faqs}
      />
    </>
  )
}
