import Link from 'next/link'
import { BUSINESS_INFO } from '@/lib/constants'
import ContactForm from '@/components/ContactForm'
import FAQSection from '@/components/FAQSection'
import GoogleReviewsSlider from '@/components/GoogleReviewsSlider'
import HeroVideo from '@/components/HeroVideo'
import { generalFAQs } from '@/lib/faqs'
import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'Contact Us',
  description: `Contact ${BUSINESS_INFO.name} for professional window cleaning services in Mesa, Gilbert, Queen Creek, and Chandler. Call ${BUSINESS_INFO.phone} or request a free quote.`,
  path: '/contact',
})

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <HeroVideo
        title="Contact Us"
        subtitle="Get in touch for a free quote on professional window cleaning services"
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

      {/* Contact Form - Above the fold */}
      <section id="contact-form" className="section-padding -mt-8 bg-white">
        <div className="container-custom max-w-5xl">
          <ContactForm />
        </div>
      </section>

      {/* Contact Info & Hours */}
      <section className="section-padding gradient-bg">
        <div className="container-custom max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="card">
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-8 text-gray-900">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <a
                        href={`tel:${BUSINESS_INFO.phoneFormatted}`}
                        className="text-primary-600 hover:text-primary-700 font-medium text-lg transition-colors"
                      >
                        {BUSINESS_INFO.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <a
                        href={`mailto:${BUSINESS_INFO.email}`}
                        className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
                      >
                        {BUSINESS_INFO.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Service Areas</h3>
                      <p className="text-gray-700">
                        {BUSINESS_INFO.serviceArea.join(', ')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="card">
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-8 text-gray-900">Business Hours</h2>
                <dl className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <dt className="font-semibold text-gray-900">Monday - Friday</dt>
                    <dd className="text-gray-700 font-medium">{BUSINESS_INFO.hours.monday}</dd>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <dt className="font-semibold text-gray-900">Saturday</dt>
                    <dd className="text-gray-700 font-medium">{BUSINESS_INFO.hours.saturday}</dd>
                  </div>
                  <div className="flex justify-between items-center">
                    <dt className="font-semibold text-gray-900">Sunday</dt>
                    <dd className="text-gray-700 font-medium">{BUSINESS_INFO.hours.sunday}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rich Content Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Get in Touch Today</h2>
            <p className="text-xl text-gray-700 mb-6">
              Ready to experience the difference professional window cleaning can make? We&apos;re here to help! Whether you have questions about our services, need a quote, or want to schedule an appointment, our friendly team is ready to assist you.
            </p>
            <p className="text-gray-700 mb-6">
              We understand that every home is unique, which is why we offer free, no-obligation quotes tailored to your specific needs. Our transparent pricing means you&apos;ll know exactly what to expect before we begin. No surprises, no hidden fees. Just honest, professional service.
            </p>
            <h3 className="text-2xl font-bold mb-4 mt-8">Multiple Ways to Reach Us</h3>
            <p className="text-gray-700 mb-4">
              You can reach us by phone, email, or by filling out our convenient contact form. We typically respond to all inquiries within 24 hours, often much sooner. For urgent requests or same-day service availability, calling us directly is the fastest way to get in touch.
            </p>
            <p className="text-gray-700">
              Our business hours are designed to accommodate your schedule, and we&apos;re available Monday through Saturday to serve you. We look forward to helping you achieve crystal-clear windows that enhance your home&apos;s beauty and your enjoyment of natural light.
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

    </>
  )
}

