import Link from 'next/link'
import { BUSINESS_INFO, LOCATIONS } from '@/lib/constants'
import ContactForm from '@/components/ContactForm'
import FAQSection from '@/components/FAQSection'
import GoogleReviewsSlider from '@/components/GoogleReviewsSlider'
import HeroVideo from '@/components/HeroVideo'
import { generalFAQs } from '@/lib/faqs'
import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'Service Areas',
  description: 'Professional window cleaning services in Mesa, Gilbert, Queen Creek, and Chandler, Arizona. Local experts serving the East Valley.',
  path: '/locations',
})

export default function LocationsPage() {
  return (
    <>
      <HeroVideo
        title="Our Service Areas"
        subtitle="Professional window cleaning services throughout the East Valley"
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
            {LOCATIONS.map((location) => (
              <Link
                key={location.id}
                href={`/locations/${location.slug}`}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-200"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{location.name} window cleaning</h2>
                <p className="text-gray-600 mb-4">{location.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Serving the East Valley with Excellence</h2>
            <p className="text-xl text-gray-700 mb-6">
              Arizona window cleaning Pros is proud to serve homeowners and businesses throughout the East Valley, including Mesa, Gilbert, Queen Creek, and Chandler. As a locally owned and operated business, we understand the unique needs of Arizona residents and are committed to providing exceptional service in every community we serve.
            </p>
            <p className="text-gray-700 mb-6">
              Each area we serve has its own character and specific window cleaning challenges. Whether you&apos;re in the heart of Mesa, the growing community of Queen Creek, or anywhere in between, we bring the same level of professionalism, attention to detail, and customer service to every job.
            </p>
            <h3 className="text-2xl font-bold mb-4 mt-8">Local Knowledge, Professional Service</h3>
            <p className="text-gray-700 mb-4">
              Our familiarity with each area we serve means we understand local conditions, common issues, and the best approaches for each neighborhood. We know the best times to schedule service, how to navigate different property types, and what to expect from the local climate.
            </p>
            <p className="text-gray-700">
              No matter which East Valley community you call home, you can count on Arizona window cleaning Pros for reliable, professional window cleaning service. We&apos;re your neighbors, and we&apos;re committed to helping you maintain a beautiful home with crystal-clear windows.
            </p>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="section-subtitle">Real reviews from Google</p>
          </div>
          <GoogleReviewsSlider compact={false} />
        </div>
      </section>

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

