import Link from 'next/link'
import { BUSINESS_INFO } from '@/lib/constants'
import HeroVideo from '@/components/HeroVideo'
import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'Thank You',
  description: 'Thank you for contacting Arizona Window Washing Pros. We\'ll be in touch soon!',
  path: '/thank-you',
})

export default function ThankYouPage() {
  return (
    <>
      <HeroVideo
        title="Thank You!"
        subtitle="We've received your message and will contact you soon."
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <div className="text-center space-y-6">
            <div className="mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Thank You for Contacting Us!
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                We've received your message and our team will get back to you as soon as possible, usually within 24 hours.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl border border-primary-100 space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">What Happens Next?</h2>
              <ul className="text-left space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <span className="text-primary-600 font-bold">1.</span>
                  <span>We'll review your request and contact you within 24 hours</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary-600 font-bold">2.</span>
                  <span>We'll provide a free, no-obligation estimate for your window cleaning needs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary-600 font-bold">3.</span>
                  <span>We'll schedule a convenient time for your service</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 space-y-4">
              <p className="text-gray-700">
                Need immediate assistance? Call us directly:
              </p>
              <a
                href={`tel:${BUSINESS_INFO.phoneFormatted}`}
                className="inline-block btn-primary text-lg"
              >
                Call Now: {BUSINESS_INFO.phone}
              </a>
            </div>

            <div className="pt-6 space-x-4">
              <Link href="/" className="text-primary-600 hover:text-primary-700 font-semibold">
                ← Back to Home
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/services" className="text-primary-600 hover:text-primary-700 font-semibold">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}




