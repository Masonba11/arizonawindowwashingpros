import { Metadata } from 'next'
import CityLanding from '@/components/CityLanding'
import { BUSINESS_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact Us | East Valley Window Cleaning | 20% OFF',
  description:
    'Contact Arizona Window Cleaning Pros for East Valley window cleaning. Call (480) 737-0850 or request a free quote online. Serving Mesa, Gilbert, Chandler, Scottsdale, Tempe, Queen Creek, and San Tan Valley.',
  alternates: {
    canonical: '/east-valley-contact-us',
  },
}

const faqs = [
  {
    question: 'How can I contact Arizona Window Cleaning Pros in the East Valley?',
    answer:
      'You can call us at (480) 737-0850 or fill out the quote form on this page. We respond quickly and can schedule service throughout the East Valley.',
  },
  {
    question: 'Do you offer free in-person quotes?',
    answer:
      'Yes. We offer free in-person quotes for East Valley homes and businesses so you get accurate pricing based on your property.',
  },
  {
    question: 'What are your hours?',
    answer:
      'We are available Monday through Sunday from 7am to 7pm for calls, quotes, and scheduling.',
  },
  {
    question: 'Which East Valley cities do you serve?',
    answer:
      'We serve Mesa, Gilbert, Chandler, Scottsdale, Tempe, Queen Creek, and San Tan Valley.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: BUSINESS_INFO.name,
  telephone: '+14807370850',
  areaServed: [
    { '@type': 'City', name: 'Mesa', addressRegion: 'AZ' },
    { '@type': 'City', name: 'Gilbert', addressRegion: 'AZ' },
    { '@type': 'City', name: 'Chandler', addressRegion: 'AZ' },
    { '@type': 'City', name: 'Scottsdale', addressRegion: 'AZ' },
    { '@type': 'City', name: 'Tempe', addressRegion: 'AZ' },
    { '@type': 'City', name: 'Queen Creek', addressRegion: 'AZ' },
    { '@type': 'City', name: 'San Tan Valley', addressRegion: 'AZ' },
  ],
  serviceType: 'Window Cleaning',
  url: `${BUSINESS_INFO.website}/east-valley-contact-us`,
}

export default function EastValleyContactUsPage() {
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

