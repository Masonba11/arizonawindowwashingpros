import LandingPage from '@/components/LandingPage'
import { generateCityLandingMetadata, generateCityLandingSchema } from '@/lib/landingPageSEO'

export const metadata = generateCityLandingMetadata('Scottsdale')

const nearbyAreas = ['Paradise Valley', 'Arcadia', 'Fountain Hills']

const faqs = [
  {
    question: `How much does window washing cost in Scottsdale?`,
    answer: `Window washing prices in Scottsdale typically range from $150-$500+ depending on home size, number of windows, and services requested. We provide free, same-day estimates. Contact us for your personalized quote.`,
  },
  {
    question: `Do you offer same-day service in Scottsdale?`,
    answer: `Yes! We offer same-day estimates and can often schedule service within 24-48 hours. Call us at (480) 737-0850 for fastest scheduling.`,
  },
  {
    question: `Do you clean window screens in Scottsdale?`,
    answer: `Yes, screen cleaning is available as an add-on service. We remove screens, clean them thoroughly, and reinstall them. This helps improve air quality and extends screen life.`,
  },
  {
    question: `Do you serve commercial properties in Scottsdale?`,
    answer: `Yes, we provide window cleaning services for commercial properties throughout Scottsdale, including offices, retail stores, and multi-story buildings. Contact us for commercial pricing.`,
  },
  {
    question: `How long does window washing take in Scottsdale?`,
    answer: `Most residential homes in Scottsdale take 1-3 hours depending on size. Commercial properties vary. We'll provide a time estimate when you book.`,
  },
  {
    question: `What if it rains after you clean my windows in Scottsdale?`,
    answer: `We monitor weather conditions and will reschedule if rain is expected within 24 hours of service. Your satisfaction is guaranteed.`,
  },
  {
    question: `Do you clean hard water spots in Scottsdale?`,
    answer: `Yes, we offer hard water spot removal services. Arizona's hard water can leave mineral deposits on windows. We use specialized techniques to remove these spots safely.`,
  },
  {
    question: `What areas of Scottsdale do you serve?`,
    answer: `We serve all areas of Scottsdale, including Old Town, North Scottsdale, South Scottsdale, and nearby areas like Paradise Valley, Arcadia, and Fountain Hills.`,
  },
]

export default function ScottsdaleWindowWashingPage() {
  const schema = generateCityLandingSchema('Scottsdale', nearbyAreas)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <LandingPage city="Scottsdale" nearbyAreas={nearbyAreas} faqs={faqs} />
    </>
  )
}

