import LandingPage from '@/components/LandingPage'
import { generateCityLandingMetadata, generateCityLandingSchema } from '@/lib/landingPageSEO'

export const metadata = generateCityLandingMetadata('Chandler')

const nearbyAreas = ['Gilbert', 'Tempe', 'Sun Lakes']

const faqs = [
  {
    question: `How much does window washing cost in Chandler?`,
    answer: `Window washing prices in Chandler typically range from $150-$500+ depending on home size, number of windows, and services requested. We provide free, same-day estimates. Contact us for your personalized quote.`,
  },
  {
    question: `Do you offer same-day service in Chandler?`,
    answer: `Yes! We offer same-day estimates and can often schedule service within 24-48 hours. Call us at (480) 737-0850 for fastest scheduling.`,
  },
  {
    question: `Do you clean window screens in Chandler?`,
    answer: `Yes, screen cleaning is available as an add-on service. We remove screens, clean them thoroughly, and reinstall them. This helps improve air quality and extends screen life.`,
  },
  {
    question: `Do you serve commercial properties in Chandler?`,
    answer: `Yes, we provide window cleaning services for commercial properties throughout Chandler, including offices, retail stores, and multi-story buildings. Contact us for commercial pricing.`,
  },
  {
    question: `How long does window washing take in Chandler?`,
    answer: `Most residential homes in Chandler take 1-3 hours depending on size. Commercial properties vary. We'll provide a time estimate when you book.`,
  },
  {
    question: `What if it rains after you clean my windows in Chandler?`,
    answer: `We monitor weather conditions and will reschedule if rain is expected within 24 hours of service. Your satisfaction is guaranteed.`,
  },
  {
    question: `Do you clean hard water spots in Chandler?`,
    answer: `Yes, we offer hard water spot removal services. Arizona's hard water can leave mineral deposits on windows. We use specialized techniques to remove these spots safely.`,
  },
  {
    question: `What areas of Chandler do you serve?`,
    answer: `We serve all areas of Chandler, including downtown Chandler, Ocotillo, and nearby areas like Gilbert, Tempe, and Sun Lakes.`,
  },
]

export default function ChandlerWindowWashingPage() {
  const schema = generateCityLandingSchema('Chandler', nearbyAreas)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <LandingPage city="Chandler" nearbyAreas={nearbyAreas} faqs={faqs} />
    </>
  )
}

