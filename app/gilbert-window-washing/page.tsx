import { Metadata } from 'next'
import CityLanding from '@/components/CityLanding'
import { BUSINESS_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Gilbert Window Washing | $100 OFF | Arizona Window Washing Pros',
  description: 'Professional window washing in Gilbert, AZ. $100 off first service. Licensed, insured, streak-free guarantee. Call (480) 737-0850 for free estimate.',
  alternates: {
    canonical: '/gilbert-window-washing',
  },
}

const faqs = [
  {
    question: 'How much does window washing cost in Gilbert?',
    answer: 'Window washing prices in Gilbert start at $150 for 1-story homes and $180 for 2-story homes. Most Gilbert homes range from $150-$350. Pricing is based on number of windows and home height. Contact us for a free estimate.',
  },
  {
    question: 'Do you clean screens in Gilbert?',
    answer: 'Yes, screen cleaning is available as an add-on service. We remove screens, clean them thoroughly, and reinstall them. This helps improve air quality and extends screen life.',
  },
  {
    question: 'Do you do commercial buildings in Gilbert?',
    answer: 'Yes, we provide window cleaning services for commercial properties throughout Gilbert, including offices, retail stores, and multi-story buildings. Contact us for commercial pricing.',
  },
  {
    question: 'How quickly can you schedule in Gilbert?',
    answer: 'We offer same-day estimates and can often schedule service within 24-48 hours. Call us at (480) 737-0850 for fastest scheduling.',
  },
  {
    question: 'What if it rains after you clean my windows in Gilbert?',
    answer: 'We monitor weather conditions and will reschedule if rain is expected within 24 hours of service. Your satisfaction is guaranteed.',
  },
  {
    question: 'Do you offer recurring service in Gilbert?',
    answer: 'Yes, we offer recurring window cleaning service plans for Gilbert homes and businesses. Regular cleaning helps maintain window clarity and prevents hard water spot buildup.',
  },
  {
    question: 'What areas of Gilbert do you serve?',
    answer: 'We serve all areas of Gilbert, including downtown Gilbert, and nearby areas like Chandler, Mesa, and Queen Creek.',
  },
  {
    question: 'Do you clean hard water spots in Gilbert?',
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
    name: 'Gilbert',
    addressRegion: 'AZ',
  },
  serviceType: 'Window Washing',
  url: `${BUSINESS_INFO.website}/gilbert-window-washing`,
  '@graph': [
    {
      '@type': 'Service',
      serviceType: 'Window Washing',
      areaServed: {
        '@type': 'City',
        name: 'Gilbert',
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

export default function GilbertWindowWashingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <CityLanding
        city="Gilbert"
        nearbyAreas={['Chandler', 'Mesa', 'Queen Creek']}
        faqs={faqs}
      />
    </>
  )
}
