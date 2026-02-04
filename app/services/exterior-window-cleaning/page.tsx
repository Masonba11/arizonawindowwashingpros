import Link from 'next/link'
import { BUSINESS_INFO, LOCATIONS, SERVICES } from '@/lib/constants'
import ContactForm from '@/components/ContactForm'
import FAQSection from '@/components/FAQSection'
import ReviewsSection from '@/components/ReviewsSection'
import HeroVideo from '@/components/HeroVideo'
import PricingImages from '@/components/PricingImages'
import StickyCTA from '@/components/StickyCTA'
import BeforeAfterSection from '@/components/BeforeAfterSection'
import GallerySection from '@/components/GallerySection'
import TrustSection from '@/components/TrustSection'
import OfferBanner from '@/components/OfferBanner'
import QuoteForm from '@/components/QuoteForm'
import WorkVideo from '@/components/WorkVideo'
import { reviews } from '@/lib/reviews'
import { generateMetadata, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo'
import { generateServiceFAQs } from '@/lib/enhancedFAQs'

export const metadata = generateMetadata({
  title: 'Exterior Window Cleaning Services in Mesa, Gilbert, Queen Creek, Chandler, Tempe & Scottsdale',
  description: 'Professional exterior window cleaning services. Hand-washed windows with professional squeegee finish. Starting at $150 for 1-story homes, $180 for 2-story homes. Free estimates. Licensed & insured.',
  path: '/services/exterior-window-cleaning',
})

const faqs = generateServiceFAQs('Exterior Window Cleaning')

// Force static generation to prevent build timeouts
export const dynamic = 'force-static'

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
      <StickyCTA />
      <HeroVideo
        title="Exterior Window Cleaning Services in Mesa, Gilbert, Queen Creek, Chandler, Tempe & Scottsdale"
        subtitle="Professional exterior window cleaning. Our most popular and cost-effective service."
        service="Exterior Window Cleaning"
      />
      
      {/* Quote Form in Hero Area */}
      <section className="section-padding bg-white -mt-20 relative z-20">
        <div className="container-custom max-w-2xl">
          <QuoteForm defaultService="Exterior Window Cleaning" compact />
        </div>
      </section>

      {/* Click-to-Call CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Crystal-Clear Windows?
          </h2>
          <p className="text-xl text-white/90 mb-6">
            Call now for fastest scheduling or get your free quote below
          </p>
          <a
            href={`tel:${BUSINESS_INFO.phoneFormatted}`}
            className="inline-block btn-secondary text-xl font-bold px-8 py-4 bg-white text-primary-600 hover:bg-primary-50 shadow-2xl"
            onClick={() => {
              if (typeof window !== 'undefined' && (window as any).gtag) {
                (window as any).gtag('event', 'phone_click', {
                  event_category: 'engagement',
                  event_label: 'mid_page_call',
                })
              }
            }}
          >
            📞 Call {BUSINESS_INFO.phone}
          </a>
        </div>
      </section>

      {/* Before & After Section */}
      <BeforeAfterSection service="Exterior Window Cleaning" />

      {/* Gallery Section */}
      <GallerySection service="Exterior Window Cleaning" />

      {/* Work Video Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="section-title">See Our Work in Action</h2>
            <p className="section-subtitle">
              Watch our professional team deliver streak-free results
            </p>
          </div>
          <WorkVideo
            src="/videos/work-video-1.mp4"
            poster="/before-after-1.jpg"
            alt="Professional window cleaning in action"
          />
        </div>
      </section>

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

      {/* Trust Section */}
      <TrustSection />

      {/* Offer Banner */}
      <OfferBanner />

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

      {/* Related Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="section-title">Related Services</h2>
            <p className="section-subtitle">
              Complete your window cleaning with these additional services
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.filter(s => s.slug !== 'exterior-window-cleaning').map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="card card-hover p-6 text-center group"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Click-to-Call CTA Before Form */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get Your Free Quote Today
          </h2>
          <p className="text-xl text-white/90 mb-6">
            Or call us directly for fastest response
          </p>
          <a
            href={`tel:${BUSINESS_INFO.phoneFormatted}`}
            className="inline-block btn-secondary text-xl font-bold px-8 py-4 bg-white text-primary-600 hover:bg-primary-50 shadow-2xl mb-6"
            onClick={() => {
              if (typeof window !== 'undefined' && (window as any).gtag) {
                (window as any).gtag('event', 'phone_click', {
                  event_category: 'engagement',
                  event_label: 'pre_form_call',
                })
              }
            }}
          >
            📞 Call {BUSINESS_INFO.phone}
          </a>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="section-padding bg-white">
        <div className="container-custom max-w-2xl">
          <QuoteForm defaultService="Exterior Window Cleaning" />
        </div>
      </section>
    </>
  )
}

