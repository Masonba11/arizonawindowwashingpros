import Link from 'next/link'
import { BUSINESS_INFO, SERVICES, LOCATIONS } from '@/lib/constants'
import ContactForm from '@/components/ContactForm'
import FAQSection from '@/components/FAQSection'
import ReviewsSection from '@/components/ReviewsSection'
import HeroVideo from '@/components/HeroVideo'
import PricingImages from '@/components/PricingImages'
import BeforeAfterSection from '@/components/BeforeAfterSection'
import GallerySection from '@/components/GallerySection'
import TestimonialVideo from '@/components/TestimonialVideo'
import { reviews } from '@/lib/reviews'
import { generateMetadata, generateBreadcrumbSchema } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'Gilbert window cleaning',
  description: 'Professional exterior and interior window cleaning services in Gilbert, Arizona. Expert window cleaning and screen cleaning. Starting at $150 for 1-story homes. Free quotes available.',
  path: '/locations/gilbert-window-washing',
})

const faqs = [
  {
    question: 'How much does exterior window cleaning cost in Gilbert?',
    answer: 'Exterior window cleaning prices in Gilbert start at $150 for 1-story homes and $180 for 2-story homes. Most Gilbert homes range from $150-$350. Pricing is based on number of windows and home height. Contact us for a free estimate.',
  },
  {
    question: 'How often should I have my windows cleaned in Gilbert?',
    answer: 'Given Gilbert\'s desert climate with dust storms and intense sun, we recommend window cleaning every 3-4 months to maintain optimal clarity and prevent hard water spot buildup.',
  },
  {
    question: 'Do you clean both interior and exterior windows in Gilbert?',
    answer: 'Yes, we offer both interior and exterior window cleaning services in Gilbert. You can choose one or both depending on your needs.',
  },
  {
    question: 'What areas of Gilbert do you serve?',
    answer: 'We serve all areas of Gilbert, Arizona, including downtown Gilbert, Val Vista, Higley, and surrounding neighborhoods.',
  },
]

export default function GilbertWindowWashingPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://arizonawindowwashingpros.com' },
    { name: 'Locations', url: 'https://arizonawindowwashingpros.com/locations' },
    { name: 'Gilbert window cleaning', url: 'https://arizonawindowwashingpros.com/locations/gilbert-window-washing' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HeroVideo
        title="Gilbert window cleaning"
        subtitle="Expert window cleaning in Gilbert, Arizona"
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

      {/* Testimonial Video Section */}
      <TestimonialVideo formId="contact-form" />

      {/* Gallery Section */}
      <GallerySection city="Gilbert" />

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-6">
              Looking for professional Gilbert window cleaning services? You&apos;ve come to the right place. We specialize in providing top-quality window cleaning and screen cleaning for Gilbert homeowners and businesses.
            </p>

            <h2 className="text-2xl font-bold mb-4">What&apos;s Included in Our Gilbert window cleaning Service</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
              <li>Complete exterior window cleaning (all accessible windows)</li>
              <li>Interior window cleaning (optional)</li>
              <li>Screen cleaning (optional add-on)</li>
              <li>Track and sill cleaning</li>
              <li>Frame and edge cleaning</li>
              <li>Streak-free finish guarantee</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Why Choose Us for Gilbert window cleaning?</h2>
            <p className="text-gray-700 mb-4">
              Gilbert&apos;s unique climate presents specific challenges for window cleaning, from intense sun that creates hard water spots to dust storms that leave windows dirty. Our team has extensive experience working in Gilbert and knows exactly how to handle these conditions.
            </p>
            <p className="text-gray-700 mb-8">
              We use professional-grade equipment and eco-friendly cleaning solutions to ensure your Gilbert home&apos;s windows are spotless and streak-free. Our local team understands Gilbert neighborhoods and works efficiently to minimize disruption to your day.
            </p>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <BeforeAfterSection city="Gilbert" />

      {/* Pricing Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <div className="content-section">
            <h2 className="text-2xl font-bold mb-4">Pricing Guidance for Gilbert window cleaning</h2>
            <p className="text-gray-700 mb-4">
              window cleaning prices in Gilbert typically range from:
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


            <h2 className="text-2xl font-bold mb-4 mt-8">Our Services in Gilbert</h2>
            <p className="text-gray-700 mb-4">
              We offer comprehensive window cleaning services throughout Gilbert:
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
              {LOCATIONS.filter((loc) => loc.id !== 'gilbert').map((location) => (
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Expert window cleaning in Gilbert, Arizona</h2>
            <p className="text-xl text-gray-700 mb-6">
              Gilbert homeowners appreciate the value of professional window cleaning, especially in Arizona&apos;s challenging climate. With Gilbert&apos;s rapid growth and diverse neighborhoods, from downtown to Val Vista and Higley, we bring professional window cleaning expertise to every corner of the community.
            </p>
            <p className="text-gray-700 mb-6">
              Our team understands Gilbert&apos;s unique window cleaning needs. Whether you live in an established neighborhood or a new development, we have the experience and equipment to handle your home&apos;s specific requirements. We&apos;re familiar with Gilbert&apos;s architectural styles and know how to clean windows on everything from single-story ranches to multi-story custom homes.
            </p>
            <h3 className="text-2xl font-bold mb-4 mt-8">Why Gilbert Residents Trust Us</h3>
            <p className="text-gray-700 mb-4">
              Gilbert is known for its family-friendly atmosphere and well-maintained homes. We share that commitment to quality and take pride in helping Gilbert homeowners maintain beautiful, clear windows that enhance their property values and quality of life.
            </p>
            <p className="text-gray-700">
              Our local knowledge of Gilbert neighborhoods, combined with professional training and the best equipment, ensures that every Gilbert home receives the exceptional service it deserves. We&apos;re your neighbors, and we&apos;re committed to providing the best window cleaning service in Gilbert.
            </p>
          </div>
        </div>
      </section>

      {/* YouTube Videos Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="section-title">See Us In Action</h2>
            <p className="section-subtitle">
              Watch our professional window cleaning team at work
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative w-full h-[400px] max-w-md mx-auto">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
                src="https://www.youtube.com/embed/TpGGKeABfCI"
                title="Arizona window cleaning Pros - Video 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="relative w-full h-[400px] max-w-md mx-auto">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
                src="https://www.youtube.com/embed/GdNlH8GPhL0"
                title="Arizona window cleaning Pros - Video 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsSection reviews={reviews} maxReviews={6} />

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* Pricing Images Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <PricingImages />
        </div>
      </section>

      <section id="contact-form" className="section-padding bg-white">
        <div className="container-custom max-w-2xl">
          <ContactForm defaultCity="Gilbert" />
        </div>
      </section>
    </>
  )
}

