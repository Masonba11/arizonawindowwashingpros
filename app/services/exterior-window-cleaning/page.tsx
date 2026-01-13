import Link from 'next/link'
import { BUSINESS_INFO, LOCATIONS } from '@/lib/constants'
import ContactForm from '@/components/ContactForm'
import FAQSection from '@/components/FAQSection'
import ReviewsSection from '@/components/ReviewsSection'
import HeroVideo from '@/components/HeroVideo'
import PricingReference from '@/components/PricingReference'
import { reviews } from '@/lib/reviews'
import { generateMetadata, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'Exterior Window Cleaning Services in Mesa, Gilbert, Queen Creek & Chandler',
  description: 'Professional exterior window cleaning services. Hand-washed windows with professional squeegee finish. Starting at $150 for 1-story homes, $180 for 2-story homes. Free estimates.',
  path: '/services/exterior-window-cleaning',
})

const faqs = [
  {
    question: 'How much does exterior window cleaning cost?',
    answer: 'Pricing is based on the number of windows and home height. 1-story homes start at $150, 2-story homes start at $180. Most homes fall between $150-$350. We provide free estimates before scheduling.',
  },
  {
    question: 'What is included in exterior window cleaning?',
    answer: 'Our exterior window cleaning includes hand-washed exterior window glass, professional squeegee finish, light wipe-down of window frames, and safe ladder work for two-story homes.',
  },
  {
    question: 'How long does exterior window cleaning take?',
    answer: 'Most homes take 1-2 hours depending on the number of windows and home size. We work efficiently while maintaining our high quality standards.',
  },
  {
    question: 'Do you clean windows on two-story homes?',
    answer: 'Yes, we safely clean windows on two-story homes using professional ladders and safety equipment. Two-story homes start at $180.',
  },
  {
    question: 'How often should I have my exterior windows cleaned?',
    answer: 'In Arizona\'s climate with dust storms and intense sun, we recommend exterior window cleaning every 3-4 months to maintain optimal clarity and prevent buildup.',
  },
]

export default function ExteriorWindowCleaningPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://arizonawindowwashingpros.com' },
    { name: 'Services', url: 'https://arizonawindowwashingpros.com/services' },
    { name: 'Exterior Window Cleaning', url: 'https://arizonawindowwashingpros.com/services/exterior-window-cleaning' },
  ])

  const faqSchema = generateFAQSchema(faqs)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeroVideo
        title="Exterior Window Cleaning Services in Mesa, Gilbert, Queen Creek & Chandler"
        subtitle="Professional exterior window cleaning. Our most popular and cost-effective service."
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

      {/* Main Content Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <div className="content-section">
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed text-center">
              Exterior window cleaning is our most popular and cost-effective service. We provide professional hand-washed windows with a streak-free finish that makes your home shine.
            </p>
          </div>

          {/* What's Included */}
          <div className="content-section">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">What&apos;s Included</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Hand-washed exterior window glass',
                'Professional squeegee finish',
                'Light wipe-down of window frames',
                'Safe ladder work for two-story homes',
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Section */}
          <div className="content-section">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Pricing</h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Pricing is based on number of windows and home height. We provide free estimates before scheduling so you know exactly what to expect.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-6 rounded-xl border-2 border-primary-200">
                <h3 className="text-xl font-bold mb-3 text-gray-900">1-Story Homes</h3>
                <p className="text-3xl font-bold text-primary-600 mb-2">Starting at $150</p>
                <p className="text-gray-600">Most homes: $150-$350</p>
              </div>
              <div className="bg-white p-6 rounded-xl border-2 border-primary-200">
                <h3 className="text-xl font-bold mb-3 text-gray-900">2-Story Homes</h3>
                <p className="text-3xl font-bold text-primary-600 mb-2">Starting at $180</p>
                <p className="text-gray-600">Most homes: $180-$400</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border border-primary-200">
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-primary-700">Note:</strong> Most homes fall between $150-$350. Actual pricing depends on factors like window accessibility, property size, and specific services requested. Contact us for a free, personalized quote.
              </p>
            </div>
          </div>

          {/* Service Areas */}
          <div className="content-section">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Service Areas</h2>
            <p className="text-gray-700 mb-6 text-lg">
              We proudly serve the following areas:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {LOCATIONS.map((location) => (
                <Link
                  key={location.id}
                  href={`/locations/${location.slug}`}
                  className="card card-hover text-center p-6 group"
                >
                  <span className="text-primary-600 font-semibold group-hover:text-primary-700 transition-colors">
                    {location.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rich Content Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom max-w-5xl">
          <div className="content-section">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Professional Exterior Window Cleaning</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Exterior window cleaning is the foundation of maintaining beautiful, clear windows. Arizona&apos;s unique climate presents specific challenges, from intense desert sun creating hard water spots to frequent dust storms. Our professional exterior cleaning service addresses these challenges with proven techniques and professional-grade equipment.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Our team uses hand-washing techniques combined with professional squeegees to ensure a streak-free finish on every window. We carefully clean not just the glass, but also provide a light wipe-down of window frames to remove dust and debris. For two-story homes, we safely use professional ladders and safety equipment to reach all windows.
              </p>
              <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-2xl border border-primary-100 mt-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Why Exterior Cleaning Matters</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Clean exterior windows dramatically improve your home&apos;s curb appeal and allow more natural light to enter your home. Regular exterior cleaning prevents buildup that can become difficult to remove over time, saving you money in the long run.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  As our most popular service, exterior window cleaning offers the best value for maintaining beautiful windows. Most homeowners find that regular exterior cleaning every 3-4 months keeps their windows looking great year-round.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsSection reviews={reviews} maxReviews={6} />

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* Contact Form Section */}
      <section id="contact-form" className="section-padding bg-white">
        <div className="container-custom max-w-2xl">
          <PricingReference />
          <ContactForm defaultService="Exterior Window Cleaning" />
        </div>
      </section>
    </>
  )
}

