import Link from 'next/link'
import { BUSINESS_INFO, SERVICES } from '@/lib/constants'
import ContactForm from '@/components/ContactForm'
import FAQSection from '@/components/FAQSection'
import ReviewsSection from '@/components/ReviewsSection'
import HeroVideo from '@/components/HeroVideo'
import { generalFAQs } from '@/lib/faqs'
import { reviews } from '@/lib/reviews'
import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'Window Washing Services',
  description: 'Professional exterior and interior window cleaning services in Mesa, Gilbert, Queen Creek, and Chandler, Arizona. Screen cleaning available as add-on. Starting at $150.',
  path: '/services',
})

export default function ServicesPage() {
  return (
    <>
      <HeroVideo
        title="Our Services"
        subtitle="Comprehensive window cleaning solutions for your home or business"
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
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-200"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h2>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span className="text-primary-600 font-semibold hover:underline">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Rich Content Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Comprehensive Window Cleaning Solutions</h2>
            <p className="text-xl text-gray-700 mb-6">
              At Arizona Window Washing Pros, we offer professional exterior and interior window cleaning services designed to meet your needs. Exterior window cleaning is our most popular service, starting at $150. We also offer interior window cleaning as an optional add-on, plus screen cleaning.
            </p>
            <p className="text-gray-700 mb-6">
              Our services are tailored to Arizona&apos;s unique climate and conditions. We understand the challenges that desert living presents for window maintenance, from dust storms to intense sun. That&apos;s why we use professional-grade equipment and proven techniques to deliver results that last.
            </p>
            <h3 className="text-2xl font-bold mb-4 mt-8">Why Choose Our Services?</h3>
            <p className="text-gray-700 mb-4">
              Every service we offer is backed by our commitment to quality and customer satisfaction. We use eco-friendly cleaning solutions that are safe for your family and pets, professional-grade equipment for superior results, and proven techniques that work in Arizona&apos;s challenging climate.
            </p>
            <p className="text-gray-700">
              Whether you need a one-time deep clean or regular maintenance, we&apos;re here to help. Our flexible service options and transparent pricing make it easy to get exactly what you need. Contact us today to learn more about our services and get a free, no-obligation quote.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsSection reviews={reviews} maxReviews={6} />

      {/* FAQ Section */}
      <FAQSection faqs={generalFAQs} />

      {/* Contact Form Section */}
      <section id="contact-form" className="section-padding bg-white">
        <div className="container-custom max-w-2xl">
          <ContactForm />
        </div>
      </section>
    </>
  )
}

