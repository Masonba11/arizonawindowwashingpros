import Link from 'next/link'
import { BUSINESS_INFO, LOCATIONS, getLocationHref } from '@/lib/constants'
import ContactForm from '@/components/ContactForm'
import FAQSection from '@/components/FAQSection'
import GoogleReviewsSlider from '@/components/GoogleReviewsSlider'
import HeroVideo from '@/components/HeroVideo'
import { generalFAQs } from '@/lib/faqs'
import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'Service Areas',
  description:
    'Window cleaning service areas in Pinetop, Lakeside, Show Low, and Snowflake, Arizona. Residential and commercial window cleaning. Free quotes available.',
  path: '/locations',
})

export default function LocationsPage() {
  return (
    <>
      <HeroVideo
        title="Our Service Areas"
        subtitle="Professional window cleaning in Pinetop, Lakeside, Show Low, and Snowflake"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`tel:${BUSINESS_INFO.phoneFormatted}`} className="btn-primary text-lg">
            Call Now: {BUSINESS_INFO.phone}
          </a>
          <a
            href="#contact-form"
            className="btn-secondary text-lg bg-white text-primary-600 border-2 border-white hover:bg-primary-50"
          >
            Get Free Quote
          </a>
        </div>
      </HeroVideo>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {LOCATIONS.map((location) => (
              <Link
                key={location.id}
                href={getLocationHref(location)}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-200"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{location.name} window cleaning</h2>
                <p className="text-gray-600 mb-4">{location.description}</p>
                <span className="text-primary-600 font-semibold hover:underline">Learn more →</span>
              </Link>
            ))}
            <Link
              href="/white-mountains-window-cleaning"
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-200"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-3">White Mountains window cleaning</h2>
              <p className="text-gray-600 mb-4">
                Regional coverage hub for Pinetop, Lakeside, Show Low, and Snowflake.
              </p>
              <span className="text-primary-600 font-semibold hover:underline">Learn more →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 section-padding">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Serving the White Mountains with Excellence
            </h2>
            <p className="text-xl text-gray-700 mb-6">
              Arizona Window Washing Pros provides residential and commercial window cleaning in Pinetop, Lakeside,
              Show Low, and Snowflake. We help homeowners, cabin owners, vacation properties, and local businesses keep
              glass clear and well maintained.
            </p>
            <p className="text-gray-700 mb-6">
              Whether you need a one-time clean, seasonal cabin preparation, or recurring storefront service, we make
              it easy to request a free estimate and schedule an appointment.
            </p>
            <h3 className="text-2xl font-bold mb-4 mt-8">Local Knowledge, Professional Service</h3>
            <p className="text-gray-700">
              Tell us about your property type and the services you need—exterior glass, interior detailing, screens,
              tracks, sills, or frames—and we will help you choose a practical plan for your White Mountains home or
              business.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="section-subtitle">Real reviews from Google</p>
          </div>
          <GoogleReviewsSlider compact={false} />
        </div>
      </section>

      <FAQSection faqs={generalFAQs} />

      <section id="contact-form" className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <ContactForm />
        </div>
      </section>
    </>
  )
}
