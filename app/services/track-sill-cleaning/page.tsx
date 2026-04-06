import Link from 'next/link'
import { BUSINESS_INFO, LOCATIONS } from '@/lib/constants'
import ContactForm from '@/components/ContactForm'
import FAQSection from '@/components/FAQSection'
import GoogleReviewsSlider from '@/components/GoogleReviewsSlider'
import HeroVideo from '@/components/HeroVideo'
import GallerySection from '@/components/GallerySection'
import TestimonialVideo from '@/components/TestimonialVideo'
import LazyYouTube from '@/components/LazyYouTube'
import { generateServiceMetadata } from '@/lib/serviceSEO'
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo'

export const metadata = generateServiceMetadata('track-sill-cleaning')

const faqs = [
  {
    question: 'What is track and sill cleaning?',
    answer: 'Track and sill cleaning involves deep cleaning of the window tracks (the channels where windows slide) and sills (the bottom horizontal ledge). This removes dirt, debris, dust, and buildup that accumulates over time.',
  },
  {
    question: 'How much does track and sill cleaning cost?',
    answer: 'Track and sill cleaning is typically included as part of our window cleaning service. Pricing varies based on the number of windows and home size. Contact us for a free estimate.',
  },
  {
    question: 'Why is track and sill cleaning important?',
    answer: 'Clean tracks and sills help windows operate smoothly, prevent buildup that can damage windows over time, and improve the overall appearance of your windows. In Arizona\'s dusty environment, tracks accumulate debris quickly.',
  },
  {
    question: 'How often should I have tracks and sills cleaned?',
    answer: 'We recommend track and sill cleaning as part of your regular window cleaning service, typically every 3-4 months. This helps maintain window function and appearance in Arizona\'s climate.',
  },
  {
    question: 'Is track and sill cleaning included in window cleaning?',
    answer: 'Yes, track and sill cleaning is included as part of our comprehensive window cleaning service for all locations we serve.',
  },
]

export default function TrackSillCleaningPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://arizonawindowwashingpros.com' },
    { name: 'Services', url: 'https://arizonawindowwashingpros.com/services' },
    { name: 'Track & Sill Cleaning', url: 'https://arizonawindowwashingpros.com/services/track-sill-cleaning' },
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
        title="Track & Sill Cleaning Services"
        subtitle="Deep cleaning of window tracks and sills to remove dirt, debris, and buildup for smooth operation and better appearance."
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
      <GallerySection service="Track & Sill Cleaning" />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <div className="content-section">
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed text-center">
              Window tracks and sills accumulate dirt, dust, debris, and buildup over time, especially in Arizona\'s dusty environment. Track and sill cleaning is included in our comprehensive window cleaning service to keep your windows operating smoothly and looking their best.
            </p>
          </div>

          {/* What's Included */}
          <div className="content-section">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">What&apos;s Included in Track & Sill Cleaning</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Deep cleaning of window tracks (sliding channels)',
                'Sill cleaning and debris removal',
                'Removal of dirt, dust, and buildup',
                'Pet hair and lint removal',
                'Vacuuming of hard-to-reach areas',
                'Inspection for needed repairs or maintenance',
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
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Benefits of Track & Sill Cleaning</h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed text-lg">
                Clean tracks and sills are essential for maintaining window function and appearance. In Arizona\'s climate, windows are constantly exposed to dust, sand, and debris that can build up in tracks and sills.
              </p>
              <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-2xl border border-primary-100">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Why Regular Track & Sill Cleaning Matters</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>Smooth window operation: Clean tracks allow windows to slide easily</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>Prevents damage: Removing debris prevents scratches and damage to window mechanisms</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>Better appearance: Clean sills and tracks improve overall window appearance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>Improved air quality: Removing accumulated dust and allergens from tracks</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>Extended window life: Regular cleaning helps prevent premature wear and damage</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

{/* Pricing Section */}
          <div className="content-section bg-gradient-to-br from-primary-50 to-white border-2 border-primary-100">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Pricing for Track & Sill Cleaning</h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Track and sill cleaning is included as part of our comprehensive window cleaning service. Pricing is based on the number of windows and home size, just like our exterior window cleaning service.
            </p>
            <div className="bg-white/80 p-4 rounded-xl border border-primary-200">
              <p className="text-gray-700">
                <strong className="text-primary-700">Note:</strong> Track and sill cleaning is automatically included when you schedule window cleaning services. There\'s no additional charge for this service when booking our standard window cleaning.
              </p>
            </div>
          </div>

          {/* Service Areas */}
          <div className="content-section">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Track & Sill Cleaning in Your Area</h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              We provide track and sill cleaning services throughout the East Valley:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Professional Track & Sill Cleaning in Arizona</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
            </div>
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Window tracks and sills are often overlooked but play a crucial role in window function and appearance. In Arizona\'s desert climate, windows are exposed to constant dust, sand, and debris that accumulate in tracks and on sills.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Our track and sill cleaning service removes this buildup using specialized tools and techniques. We clean both sliding window tracks and stationary window sills to ensure your windows operate smoothly and look their best.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Track and sill cleaning is included as part of our comprehensive window cleaning service. When you schedule window cleaning with us, you get not just clean glass, but clean tracks, sills, and frames as well.
              </p>
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
      <FAQSection faqs={faqs} />

<section id="contact-form" className="section-padding bg-white">
        <div className="container-custom max-w-2xl">
          <ContactForm />
        </div>
      </section>
    </>
  )
}




