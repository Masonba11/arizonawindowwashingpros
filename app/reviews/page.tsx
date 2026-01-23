import Link from 'next/link'
import { BUSINESS_INFO } from '@/lib/constants'
import ContactForm from '@/components/ContactForm'
import FAQSection from '@/components/FAQSection'
import HeroVideo from '@/components/HeroVideo'
import PricingImages from '@/components/PricingImages'
import { generalFAQs } from '@/lib/faqs'
import { reviews as allReviews } from '@/lib/reviews'
import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'Customer Reviews',
  description: `Read reviews from satisfied customers of ${BUSINESS_INFO.name}. See why homeowners in Mesa, Gilbert, Queen Creek, and Chandler trust us for window washing.`,
  path: '/reviews',
})

const averageRating = 5
const totalReviews = allReviews.length

export default function ReviewsPage() {
  return (
    <>
      {/* Hero */}
      <HeroVideo
        title="Customer Reviews"
        subtitle="See what our customers are saying about our window washing services"
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

      {/* Summary Block */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="mb-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-5xl font-bold text-gray-900">{averageRating}</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-8 h-8 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-xl text-gray-600">
                Based on {totalReviews} customer reviews
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <a
                href="https://g.page/r/your-google-business-link"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Leave a Review on Google
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Rich Content Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Why Our Customers Love Us</h2>
            <p className="text-xl text-gray-700 mb-6">
              Don&apos;t just take our word for it. Hear from homeowners throughout Mesa, Gilbert, Queen Creek, and Chandler who have experienced the Arizona Window Washing Pros difference. Our commitment to excellence shows in every review we receive.
            </p>
            <p className="text-gray-700 mb-6">
              We&apos;re proud to maintain a 5-star rating across all review platforms. Our customers consistently praise our professionalism, attention to detail, fair pricing, and the exceptional results we deliver. These reviews reflect our dedication to providing the best window cleaning service in the East Valley.
            </p>
            <h3 className="text-2xl font-bold mb-4 mt-8">Real Reviews from Real Customers</h3>
            <p className="text-gray-700 mb-4">
              Every review you see here is from a verified customer who has used our services. We don&apos;t pay for reviews or use fake testimonials. Our reputation is built on genuine customer satisfaction and word-of-mouth referrals.
            </p>
            <p className="text-gray-700">
              We encourage all our customers to share their experiences, whether through Google Reviews, our website, or by telling their friends and neighbors. Your feedback helps us continue to improve and helps other homeowners make informed decisions about their window cleaning needs.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section-padding">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allReviews.map((review) => (
              <div key={review.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-gray-900">{review.name}</h3>
                    <p className="text-sm text-gray-600">{review.location}</p>
                  </div>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-2">{review.text}</p>
                <p className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Images Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <PricingImages />
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact-form" className="section-padding bg-white">
        <div className="container-custom max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h2>
            <p className="text-xl text-gray-600">
              Join our satisfied customers and get your free quote today
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={generalFAQs} />
    </>
  )
}

