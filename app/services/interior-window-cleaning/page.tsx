import Link from 'next/link'
import { BUSINESS_INFO, LOCATIONS } from '@/lib/constants'
import ContactForm from '@/components/ContactForm'
import FAQSection from '@/components/FAQSection'
import ReviewsSection from '@/components/ReviewsSection'
import HeroVideo from '@/components/HeroVideo'
import PricingReference from '@/components/PricingReference'
import PricingImages from '@/components/PricingImages'
import GallerySection from '@/components/GallerySection'
import TestimonialVideo from '@/components/TestimonialVideo'
import BeforeAfterSection from '@/components/BeforeAfterSection'
import LazyYouTube from '@/components/LazyYouTube'
import { reviews } from '@/lib/reviews'
import { generateMetadata, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'Interior Window Cleaning Services',
  description: 'Optional premium interior window cleaning add-on service. Interior glass cleaned and detailed with careful protection of floors. Priced at 30-40% of exterior service.',
  path: '/services/interior-window-cleaning',
})

const faqs = [
  {
    question: 'How much does interior window cleaning cost?',
    answer: 'Interior window cleaning is an optional add-on service priced at approximately 30-40% of the exterior service. Typical interior add-on ranges from $60-$200 depending on window count.',
  },
  {
    question: 'What is included in interior window cleaning?',
    answer: 'Our interior window cleaning includes interior glass cleaned and detailed, careful protection of floors and surrounding areas, and a streak-free finish on all accessible windows.',
  },
  {
    question: 'Do I need interior window cleaning?',
    answer: 'Interior cleaning is optional. Many homeowners find that regular exterior cleaning is sufficient. Interior cleaning is recommended if you have fingerprints, smudges, or indoor dust buildup on your windows.',
  },
  {
    question: 'How long does interior window cleaning take?',
    answer: 'Interior cleaning takes additional time as we carefully protect your floors and furniture. Most homes take an additional 30-60 minutes when added to exterior cleaning.',
  },
  {
    question: 'Will you move furniture or items near windows?',
    answer: 'We work around your furniture and belongings. If items need to be moved, we\'ll discuss this with you beforehand. Our priority is protecting your home while delivering excellent results.',
  },
]

export default function InteriorWindowCleaningPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://arizonawindowwashingpros.com' },
    { name: 'Services', url: 'https://arizonawindowwashingpros.com/services' },
    { name: 'Interior Window Cleaning', url: 'https://arizonawindowwashingpros.com/services/interior-window-cleaning' },
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
        title="Interior Window Cleaning Services"
        subtitle="Optional premium add-on service for interior glass cleaning and detailing"
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
      <GallerySection service="Interior Window Cleaning" />

      {/* Main Content Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <div className="content-section">
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed text-center">
              Interior cleaning takes additional time and care inside your home, which is why it&apos;s priced separately. This optional premium add-on service ensures both sides of your windows are crystal clear.
            </p>
          </div>

          {/* What's Included */}
          <div className="content-section">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">What&apos;s Included</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Interior glass cleaned and detailed',
                'Careful protection of floors and surrounding areas',
                'Streak-free finish on all accessible windows',
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
              Interior window cleaning is an optional add-on service. It&apos;s priced separately because it requires additional time and care inside your home.
            </p>
            <div className="bg-gradient-to-br from-primary-50 to-white border-2 border-primary-100 rounded-2xl p-8 mb-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Interior Add-On Pricing</h3>
                <p className="text-4xl font-bold text-primary-600 mb-2">30-40% of Exterior Service</p>
                <p className="text-gray-600 text-lg">Typical range: $60-$200</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-primary-200">
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong className="text-primary-700">Example:</strong> If your exterior cleaning costs $200, interior cleaning would add approximately $60-$80 (30-40%).
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Actual pricing depends on the number of interior windows and the complexity of the job. We provide free estimates so you know exactly what to expect.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-primary-700">Note:</strong> Interior cleaning is always optional. Many homeowners find that regular exterior cleaning is sufficient for maintaining clear windows. Interior cleaning is recommended if you have fingerprints, smudges, or indoor dust buildup.
              </p>
            </div>
          </div>

          {/* Before & After Section */}
          <BeforeAfterSection service="Interior Window Cleaning" />

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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Professional Interior Window Cleaning</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                While exterior window cleaning is our most popular service, interior cleaning provides that extra level of clarity and detail. Interior windows can accumulate fingerprints, smudges, and indoor dust that exterior cleaning alone cannot address.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Our interior cleaning service takes additional time and care because we work inside your home. We carefully protect your floors, furniture, and belongings while delivering a streak-free finish on all accessible windows. This attention to detail is why interior cleaning is priced as a separate add-on service.
              </p>
              <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-2xl border border-primary-100 mt-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">When to Choose Interior Cleaning</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Interior cleaning is optional and not necessary for every home. Many homeowners find that regular exterior cleaning every 3-4 months keeps their windows looking great. However, interior cleaning is recommended if you notice:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>Fingerprints and smudges on interior glass</li>
                  <li>Indoor dust buildup on windows</li>
                  <li>Pet nose prints or marks</li>
                  <li>You want both sides of windows completely clean</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  We work efficiently and carefully to minimize disruption to your home while delivering excellent results. Our team is trained to protect your belongings and leave your home exactly as we found it.
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
              title="Arizona Window Washing Pros - Video 1"
              className="max-w-md mx-auto"
            />
            <LazyYouTube
              videoId="GdNlH8GPhL0"
              title="Arizona Window Washing Pros - Video 2"
              className="max-w-md mx-auto"
            />
          </div>
        </div>
      </section>

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

      {/* Contact Form Section */}
      <section id="contact-form" className="section-padding bg-white">
        <div className="container-custom max-w-2xl">
          <PricingReference />
          <ContactForm defaultService="Interior Window Cleaning" />
        </div>
      </section>
    </>
  )
}

