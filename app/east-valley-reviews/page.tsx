import { Metadata } from 'next'
import CityLanding from '@/components/CityLanding'
import { BUSINESS_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'East Valley Window Cleaning Reviews | 20% OFF | Arizona Window Cleaning Pros',
  description:
    'See why East Valley homeowners trust Arizona Window Cleaning Pros. Live Google reviews, testimonial video, and free quotes across Mesa, Gilbert, Chandler, Scottsdale, Tempe, Queen Creek, and San Tan Valley.',
  alternates: {
    canonical: '/east-valley-reviews',
  },
}

const faqs = [
  {
    question: 'Are these reviews from real East Valley customers?',
    answer:
      'Yes. Our Google reviews are from real customers we have served across East Valley cities including Mesa, Gilbert, Chandler, Scottsdale, Tempe, Queen Creek, and San Tan Valley.',
  },
  {
    question: 'How do I get a quote for my East Valley home?',
    answer:
      'You can call us directly at (480) 476-3731 or submit the quote form on this page. We provide free in-person quotes throughout the East Valley.',
  },
  {
    question: 'Do you offer interior and exterior window cleaning?',
    answer:
      'Yes. We provide both interior and exterior window cleaning, plus tracks and sills and screen cleaning options, depending on your needs.',
  },
  {
    question: 'Do you service all East Valley neighborhoods?',
    answer:
      'Yes, we service homes and businesses across the East Valley, including Mesa, Gilbert, Chandler, Scottsdale, Tempe, Queen Creek, and San Tan Valley.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: BUSINESS_INFO.name,
  telephone: '+14804763731',
  areaServed: [
    { '@type': 'City', name: 'Mesa', addressRegion: 'AZ' },
    { '@type': 'City', name: 'Gilbert', addressRegion: 'AZ' },
    { '@type': 'City', name: 'Chandler', addressRegion: 'AZ' },
    { '@type': 'City', name: 'Scottsdale', addressRegion: 'AZ' },
    { '@type': 'City', name: 'Tempe', addressRegion: 'AZ' },
    { '@type': 'City', name: 'Queen Creek', addressRegion: 'AZ' },
    { '@type': 'City', name: 'San Tan Valley', addressRegion: 'AZ' },
  ],
  serviceType: 'Window Cleaning Reviews',
  url: `${BUSINESS_INFO.website}/east-valley-reviews`,
}

export default function EastValleyReviewsPage() {
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

