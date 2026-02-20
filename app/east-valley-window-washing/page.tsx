import { Metadata } from 'next'
import CityLanding from '@/components/CityLanding'
import { BUSINESS_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'East Valley Window Cleaning | 20% OFF | Arizona Window Cleaning Pros',
  description: 'Professional window cleaning throughout the East Valley, AZ. Serving Mesa, Gilbert, Chandler, Scottsdale, Tempe, Queen Creek & San Tan Valley. 20% off first service. Licensed, insured, streak-free guarantee. Call (480) 737-0850 for free estimate.',
  alternates: {
    canonical: '/east-valley-window-washing',
  },
}

const faqs = [
  {
    question: 'What areas of the East Valley do you serve?',
    answer: 'We serve all areas of the East Valley, including Mesa, Gilbert, Chandler, Scottsdale, Tempe, Queen Creek, and San Tan Valley. We\'re your local window cleaning experts throughout the entire East Valley region.',
  },
  {
    question: 'How much does window cleaning cost in the East Valley?',
    answer: 'Window cleaning prices in the East Valley start at $150 for 1-story homes and $180 for 2-story homes. Most East Valley homes range from $150-$350. Pricing is based on number of windows and home height. Contact us for a free estimate.',
  },
  {
    question: 'Do you clean screens in the East Valley?',
    answer: 'Yes, screen cleaning is available as an add-on service throughout the East Valley. We remove screens, clean them thoroughly, and reinstall them. This helps improve air quality and extends screen life.',
  },
  {
    question: 'Do you do commercial buildings in the East Valley?',
    answer: 'Yes, we provide window cleaning services for commercial properties throughout the East Valley, including offices, retail stores, and multi-story buildings in Mesa, Gilbert, Chandler, Scottsdale, and all surrounding areas. Contact us for commercial pricing.',
  },
  {
    question: 'How quickly can you schedule in the East Valley?',
    answer: 'We offer same-day estimates and can often schedule service within 24-48 hours throughout the East Valley. Call us at (480) 737-0850 for fastest scheduling.',
  },
  {
    question: 'What if it rains after you clean my windows?',
    answer: 'We monitor weather conditions and will reschedule if rain is expected within 24 hours of service. Your satisfaction is guaranteed throughout the East Valley.',
  },
  {
    question: 'Do you offer recurring service in the East Valley?',
    answer: 'Yes, we offer recurring window cleaning service plans for East Valley homes and businesses. Regular cleaning helps maintain window clarity and prevents hard water spot buildup in Arizona\'s desert climate.',
  },
  {
    question: 'Do you clean hard water spots in the East Valley?',
    answer: 'Yes, we offer hard water spot evaluation and removal services throughout the East Valley. Arizona\'s hard water can leave mineral deposits on windows. We use specialized techniques to safely remove these spots.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: BUSINESS_INFO.name,
  telephone: '+14807370850',
  areaServed: [
    {
      '@type': 'City',
      name: 'Mesa',
      addressRegion: 'AZ',
    },
    {
      '@type': 'City',
      name: 'Gilbert',
      addressRegion: 'AZ',
    },
    {
      '@type': 'City',
      name: 'Chandler',
      addressRegion: 'AZ',
    },
    {
      '@type': 'City',
      name: 'Scottsdale',
      addressRegion: 'AZ',
    },
    {
      '@type': 'City',
      name: 'Tempe',
      addressRegion: 'AZ',
    },
    {
      '@type': 'City',
      name: 'Queen Creek',
      addressRegion: 'AZ',
    },
    {
      '@type': 'City',
      name: 'San Tan Valley',
      addressRegion: 'AZ',
    },
  ],
  serviceType: 'Window Cleaning',
  url: `${BUSINESS_INFO.website}/east-valley-window-washing`,
  '@graph': [
    {
      '@type': 'Service',
      serviceType: 'Window Cleaning',
      areaServed: [
        {
          '@type': 'City',
          name: 'Mesa',
          addressRegion: 'AZ',
        },
        {
          '@type': 'City',
          name: 'Gilbert',
          addressRegion: 'AZ',
        },
        {
          '@type': 'City',
          name: 'Chandler',
          addressRegion: 'AZ',
        },
        {
          '@type': 'City',
          name: 'Scottsdale',
          addressRegion: 'AZ',
        },
        {
          '@type': 'City',
          name: 'Tempe',
          addressRegion: 'AZ',
        },
        {
          '@type': 'City',
          name: 'Queen Creek',
          addressRegion: 'AZ',
        },
        {
          '@type': 'City',
          name: 'San Tan Valley',
          addressRegion: 'AZ',
        },
      ],
      provider: {
        '@type': 'LocalBusiness',
        name: BUSINESS_INFO.name,
        telephone: '+14807370850',
      },
    },
  ],
}

export default function EastValleyWindowWashingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <CityLanding
        city="East Valley"
        nearbyAreas={['Mesa', 'Gilbert', 'Chandler', 'Scottsdale', 'Tempe', 'Queen Creek', 'San Tan Valley']}
        faqs={faqs}
      />
    </>
  )
}

