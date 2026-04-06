import Link from 'next/link'
import { BUSINESS_INFO, LOCATIONS } from '@/lib/constants'
import ContactForm from '@/components/ContactForm'
import FAQSection from '@/components/FAQSection'
import GoogleReviewsSlider from '@/components/GoogleReviewsSlider'
import HeroVideo from '@/components/HeroVideo'
import PricingReference from '@/components/PricingReference'
import GallerySection from '@/components/GallerySection'
import TestimonialVideo from '@/components/TestimonialVideo'
import LazyYouTube from '@/components/LazyYouTube'
import { generalFAQs } from '@/lib/faqs'
import { generateServiceMetadata } from '@/lib/serviceSEO'
import { generateBreadcrumbSchema } from '@/lib/seo'

export const metadata = generateServiceMetadata('screen-cleaning')

export default function ScreenCleaningPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://arizonawindowwashingpros.com' },
    { name: 'Services', url: 'https://arizonawindowwashingpros.com/services' },
    { name: 'Screen Cleaning', url: 'https://arizonawindowwashingpros.com/services/screen-cleaning' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HeroVideo
        title="Screen Cleaning (Add-On Service)"
        subtitle="Thorough screen cleaning to remove dust, pollen, and debris. Available as an add-on to window cleaning services."
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
      <GallerySection service="Screen Cleaning" />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <div className="content-section">
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed text-center">
              Window screens accumulate dust, pollen, pet hair, and other debris over time, reducing air flow and visibility. Screen cleaning is available as an add-on service to complement your window cleaning.
            </p>
          </div>

          {/* Pricing Section */}
          <div className="content-section">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Pricing</h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Screen cleaning is priced per screen and is available as an add-on service.
            </p>
            <div className="bg-gradient-to-br from-primary-50 to-white border-2 border-primary-100 rounded-2xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Screen Cleaning</h3>
                <p className="text-4xl font-bold text-primary-600 mb-2">$5-$10 per screen</p>
                <p className="text-gray-600 text-lg">Available as an add-on service</p>
              </div>
            </div>
          </div>

          {/* What's Included */}
          <div className="content-section">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">What&apos;s Included</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Removal of all screens (if needed)',
                'Thorough cleaning with specialized tools',
                'Removal of dust, pollen, and debris',
                'Pet hair and lint removal',
                'Careful reinstallation',
                'Inspection for damage or needed repairs',
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

          {/* Benefits */}
          <div className="content-section">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Benefits of Clean Screens</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              Clean screens not only look better but also function better. They allow for improved air circulation, better visibility, and can help reduce allergens in your home. Regular screen cleaning is especially important in Arizona where dust and pollen are common.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Screen cleaning is typically added to your window cleaning service for a complete window maintenance solution.
            </p>
          </div>

{/* Service Areas */}
          <div className="content-section">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Service Areas</h2>
            <p className="text-gray-700 mb-6 text-lg">
              We provide screen cleaning services in:
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Professional Screen Cleaning Services</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Window screens are your first line of defense against dust, pollen, and insects, but they can&apos;t do their job effectively when they&apos;re clogged with debris. Our professional screen cleaning service restores your screens to optimal condition, improving both appearance and functionality.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                In Arizona&apos;s desert climate, screens accumulate dust and pollen faster than in other regions. Regular screen cleaning is essential for maintaining good air quality, especially for those with allergies or respiratory sensitivities. Clean screens also improve visibility and allow more natural light into your home.
              </p>
              <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-2xl border border-primary-100 mt-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Screen Cleaning Process</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our screen cleaning process begins with a careful inspection to identify any damage or needed repairs. We then remove screens if necessary, using specialized cleaning tools and solutions to thoroughly remove all dust, pollen, pet hair, and debris. Each screen is carefully cleaned on both sides to ensure complete removal of all particles.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  After cleaning, we inspect each screen for damage, loose mesh, or bent frames. We&apos;ll let you know if any repairs are needed. Finally, we carefully reinstall each screen, ensuring proper fit and alignment. The result is screens that look like new and function perfectly.
                </p>
              </div>
            </div>
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
            <LazyYouTube
              videoId="TpGGKeABfCI"
              title="Arizona window cleaning Pros, video 1"
              className="max-w-md mx-auto"
            />
            <LazyYouTube
              videoId="GdNlH8GPhL0"
              title="Arizona window cleaning Pros, video 2"
              className="max-w-md mx-auto"
            />
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
          <PricingReference />
          <ContactForm defaultService="Screen Cleaning" />
        </div>
      </section>
    </>
  )
}

