import Link from 'next/link'
import { BUSINESS_INFO, SERVICES, LOCATIONS } from '@/lib/constants'
import ContactForm from '@/components/ContactForm'
import FAQSection from '@/components/FAQSection'
import ReviewsSection from '@/components/ReviewsSection'
import HeroVideo from '@/components/HeroVideo'
import { reviews } from '@/lib/reviews'
import { generateMetadata, generateBreadcrumbSchema } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'Window Washing Queen Creek',
  description: 'Professional exterior and interior window cleaning services in Queen Creek, Arizona. Expert window cleaning and screen cleaning. Starting at $150 for 1-story homes. Free quotes available.',
  path: '/locations/window-washing-queen-creek',
})

const faqs = [
  {
    question: 'How much does exterior window cleaning cost in Queen Creek?',
    answer: 'Exterior window cleaning prices in Queen Creek start at $150 for 1-story homes and $180 for 2-story homes. Most Queen Creek homes range from $150-$350. Pricing is based on number of windows and home height. Contact us for a free estimate.',
  },
  {
    question: 'How often should I have my windows cleaned in Queen Creek?',
    answer: 'Given Queen Creek\'s desert climate with dust storms and intense sun, we recommend window cleaning every 3-4 months to maintain optimal clarity and prevent hard water spot buildup.',
  },
  {
    question: 'Do you clean both interior and exterior windows in Queen Creek?',
    answer: 'Yes, we offer both interior and exterior window cleaning services in Queen Creek. You can choose one or both depending on your needs.',
  },
  {
    question: 'What areas of Queen Creek do you serve?',
    answer: 'We serve all areas of Queen Creek, Arizona, including San Tan Valley, and surrounding neighborhoods.',
  },
]

export default function WindowWashingQueenCreekPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://arizonawindowwashingpros.com' },
    { name: 'Locations', url: 'https://arizonawindowwashingpros.com/locations' },
    { name: 'Window Washing Queen Creek', url: 'https://arizonawindowwashingpros.com/locations/window-washing-queen-creek' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HeroVideo
        title="Window Washing Queen Creek"
        subtitle="Top-rated window washing in Queen Creek, Arizona"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${BUSINESS_INFO.phoneFormatted}`}
            className="btn-primary text-lg"
          >
            Call Now: {BUSINESS_INFO.phone}
          </a>
          <a href="#contact-form" className="btn-secondary text-lg bg-white text-primary-600 border-2 border-white hover:bg-primary-50">
            Get Free Quote
          </a>
        </div>
      </HeroVideo>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-6">
              Looking for professional window washing Queen Creek services? You&apos;ve come to the right place. We specialize in providing top-quality window cleaning and screen cleaning for Queen Creek homeowners and businesses.
            </p>

            <h2 className="text-2xl font-bold mb-4">What&apos;s Included in Our Window Washing Queen Creek Service</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
              <li>Complete exterior window cleaning (all accessible windows)</li>
              <li>Interior window cleaning (optional)</li>
              <li>Screen cleaning (optional add-on)</li>
              <li>Track and sill cleaning</li>
              <li>Frame and edge cleaning</li>
              <li>Streak-free finish guarantee</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Why Choose Us for Window Washing Queen Creek?</h2>
            <p className="text-gray-700 mb-4">
              Queen Creek&apos;s unique climate presents specific challenges for window cleaning, from intense sun that creates hard water spots to dust storms that leave windows dirty. Our team has extensive experience working in Queen Creek and knows exactly how to handle these conditions.
            </p>
            <p className="text-gray-700 mb-8">
              We use professional-grade equipment and eco-friendly cleaning solutions to ensure your Queen Creek home&apos;s windows are spotless and streak-free. Our local team understands Queen Creek neighborhoods and works efficiently to minimize disruption to your day.
            </p>

            <h2 className="text-2xl font-bold mb-4">Pricing Guidance for Window Washing Queen Creek</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <img 
                  src="/exterior-pricing.png" 
                  alt="Exterior Window Cleaning Pricing" 
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
              <div>
                <img 
                  src="/interior-pricing.png" 
                  alt="Interior Window Cleaning Pricing" 
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              Window washing prices in Queen Creek typically range from:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
              <li>Small homes (10-15 windows): $150-$250</li>
              <li>Medium homes (16-25 windows): $200-$350</li>
              <li>Large homes (26+ windows): $300-$500+</li>
              <li>Add-ons: Screen cleaning ($50-$100)</li>
            </ul>
            <p className="text-gray-700 mb-8">
              <strong>Note:</strong> These are general ranges. Actual pricing depends on factors like window accessibility, property size, and specific services requested. Contact us for a free, personalized quote.
            </p>


            <h2 className="text-2xl font-bold mb-4 mt-8">Our Services in Queen Creek</h2>
            <p className="text-gray-700 mb-4">
              We offer comprehensive window cleaning services throughout Queen Creek:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {SERVICES.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="text-primary-600 hover:underline font-medium"
                >
                  {service.name}
                </Link>
              ))}
            </div>

            <h2 className="text-2xl font-bold mb-4">Other Service Areas</h2>
            <p className="text-gray-700 mb-4">
              We also serve these nearby areas:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {LOCATIONS.filter((loc) => loc.id !== 'queen-creek').map((location) => (
                <Link
                  key={location.id}
                  href={`/locations/${location.slug}`}
                  className="text-primary-600 hover:underline font-medium"
                >
                  {location.name}
                </Link>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Rich Content Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Top-Rated Window Washing in Queen Creek, Arizona</h2>
            <p className="text-xl text-gray-700 mb-6">
              Queen Creek is one of Arizona&apos;s fastest-growing communities, and we&apos;re proud to serve this vibrant area. From established neighborhoods to new developments in San Tan Valley, we bring professional window cleaning expertise to every Queen Creek home.
            </p>
            <p className="text-gray-700 mb-6">
              Queen Creek&apos;s unique location means windows face the same Arizona challenges: intense sun, dust storms, and hard water. But often with newer construction and modern window designs. Our team is experienced with all types of windows and knows how to clean them effectively while protecting your investment.
            </p>
            <h3 className="text-2xl font-bold mb-4 mt-8">Serving Queen Creek with Excellence</h3>
            <p className="text-gray-700 mb-4">
              As Queen Creek continues to grow, we&apos;re committed to being the trusted window cleaning service for this community. We understand the pride Queen Creek residents take in their homes and work hard to help maintain that beautiful appearance.
            </p>
            <p className="text-gray-700">
              Whether you&apos;re in the heart of Queen Creek or in the surrounding San Tan Valley area, you can count on Arizona Window Washing Pros for reliable, professional service. We&apos;re your local window cleaning experts, dedicated to helping Queen Creek homeowners enjoy crystal-clear windows year-round.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsSection reviews={reviews} maxReviews={6} />

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      <section id="contact-form" className="section-padding bg-white">
        <div className="container-custom max-w-2xl">
          <ContactForm defaultCity="Queen Creek" />
        </div>
      </section>
    </>
  )
}

