import Link from 'next/link'
import { BUSINESS_INFO, SERVICES, LOCATIONS } from '@/lib/constants'
import ContactForm from '@/components/ContactForm'
import FAQSection from '@/components/FAQSection'
import ReviewsSection from '@/components/ReviewsSection'
import HeroVideo from '@/components/HeroVideo'
import PricingImages from '@/components/PricingImages'
import BeforeAfterSection from '@/components/BeforeAfterSection'
import { reviews } from '@/lib/reviews'
import { generateMetadata, generateBreadcrumbSchema } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'Tempe Window Washing',
  description: 'Professional exterior and interior window cleaning services in Tempe, Arizona. Expert window cleaning and screen cleaning. Starting at $150 for 1-story homes. Free quotes available.',
  path: '/locations/tempe-window-washing',
})

const faqs = [
  {
    question: 'How much does exterior window cleaning cost in Tempe?',
    answer: 'Exterior window cleaning prices in Tempe start at $150 for 1-story homes and $180 for 2-story homes. Most Tempe homes range from $150-$350. Pricing is based on number of windows and home height. Contact us for a free estimate.',
  },
  {
    question: 'How often should I have my windows cleaned in Tempe?',
    answer: 'Given Tempe\'s desert climate with dust storms and intense sun, we recommend window cleaning every 3-4 months to maintain optimal clarity and prevent hard water spot buildup.',
  },
  {
    question: 'Do you clean both interior and exterior windows in Tempe?',
    answer: 'Yes, we offer both interior and exterior window cleaning services in Tempe. You can choose one or both depending on your needs.',
  },
  {
    question: 'What areas of Tempe do you serve?',
    answer: 'We serve all areas of Tempe, Arizona, including downtown Tempe, South Tempe, and surrounding neighborhoods.',
  },
]

export default function TempeWindowWashingPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://arizonawindowwashingpros.com' },
    { name: 'Locations', url: 'https://arizonawindowwashingpros.com/locations' },
    { name: 'Tempe Window Washing', url: 'https://arizonawindowwashingpros.com/locations/tempe-window-washing' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HeroVideo
        title="Tempe Window Washing"
        subtitle="Professional window cleaning services in Tempe, Arizona"
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
              Looking for professional Tempe window washing services? You&apos;ve come to the right place. We specialize in providing top-quality window cleaning and screen cleaning for Tempe homeowners and businesses.
            </p>
          </div>

          {/* What's Included */}
          <div className="content-section">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">What&apos;s Included in Our Tempe Window Washing Service</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Complete exterior window cleaning (all accessible windows)',
                'Interior window cleaning (optional)',
                'Screen cleaning (optional add-on)',
                'Track and sill cleaning',
                'Frame and edge cleaning',
                'Streak-free finish guarantee',
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

          {/* Why Choose Us */}
          <div className="content-section">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Choose Us for Tempe Window Washing?</h2>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                Tempe&apos;s unique climate presents specific challenges for window cleaning, from intense sun that creates hard water spots to dust storms that leave windows dirty. Our team has extensive experience working in Tempe and knows exactly how to handle these conditions.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                We use professional-grade equipment and eco-friendly cleaning solutions to ensure your Tempe home&apos;s windows are spotless and streak-free. Our local team understands Tempe neighborhoods and works efficiently to minimize disruption to your day.
              </p>
            </div>
          </div>

          {/* Before & After Section */}
          <BeforeAfterSection city="Tempe" />

          {/* Pricing Guidance */}
          <div className="content-section bg-gradient-to-br from-primary-50 to-white border-2 border-primary-100">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Pricing Guidance for Tempe Window Washing</h2>
            <p className="text-gray-700 mb-6 text-lg">
              Window washing prices in Tempe typically range from:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {[
                { label: 'Small homes (10-15 windows)', price: '$150-$250' },
                { label: 'Medium homes (16-25 windows)', price: '$200-$350' },
                { label: 'Large homes (26+ windows)', price: '$300-$500+' },
                { label: 'Add-ons: Screen cleaning', price: '$50-$100' },
              ].map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-xl border border-gray-200">
                  <p className="text-gray-700 font-medium mb-1">{item.label}</p>
                  <p className="text-primary-600 font-bold text-lg">{item.price}</p>
                </div>
              ))}
            </div>
            <div className="bg-white/80 p-4 rounded-xl border border-primary-200">
              <p className="text-gray-700">
                <strong className="text-primary-700">Note:</strong> These are general ranges. Actual pricing depends on factors like window accessibility, property size, and specific services requested. Contact us for a free, personalized quote.
              </p>
            </div>
          </div>

          {/* Our Services in Tempe */}
          <div className="content-section">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Services in Tempe</h2>
            <p className="text-gray-700 mb-6 text-lg">
              We offer comprehensive window cleaning services throughout Tempe:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SERVICES.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="card card-hover text-center p-6 group"
                >
                  <span className="text-primary-600 font-semibold group-hover:text-primary-700 transition-colors">
                    {service.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Other Service Areas */}
          <div className="content-section">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Other Service Areas</h2>
            <p className="text-gray-700 mb-6 text-lg">
              We also serve these nearby areas:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {LOCATIONS.filter((loc) => loc.id !== 'tempe').map((location) => (
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Professional Window Washing in Tempe, Arizona</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
            </div>
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Tempe homeowners know that maintaining clean windows in Arizona&apos;s desert climate requires specialized expertise. With intense sun, frequent dust storms, and hard water challenges, Tempe windows need professional care to stay crystal clear. Arizona Window Washing Pros brings years of local experience to every Tempe home we serve.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Whether you live in downtown Tempe, South Tempe, or any of the surrounding neighborhoods, we understand the unique window cleaning challenges in your area. Our team uses proven techniques and professional-grade equipment specifically suited for Tempe&apos;s climate conditions.
              </p>
              <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-2xl border border-primary-100 mt-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Why Tempe Homeowners Choose Us</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Tempe is a diverse community with homes ranging from historic properties to new developments. We&apos;ve worked on all types of Tempe homes and understand the specific needs of each. Our flexible scheduling and competitive pricing make professional window cleaning accessible to all Tempe residents.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We&apos;re committed to providing exceptional service to the Tempe community. As your local window cleaning experts, we take pride in helping Tempe homeowners maintain beautiful, clear windows that enhance their home&apos;s appearance and their enjoyment of Arizona&apos;s beautiful weather.
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
            <div className="relative w-full h-[400px] max-w-md mx-auto">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
                src="https://www.youtube.com/embed/TpGGKeABfCI"
                title="Arizona Window Washing Pros - Video 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="relative w-full h-[400px] max-w-md mx-auto">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
                src="https://www.youtube.com/embed/GdNlH8GPhL0"
                title="Arizona Window Washing Pros - Video 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
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

      <section id="contact-form" className="section-padding bg-white">
        <div className="container-custom max-w-2xl">
          <ContactForm defaultCity="Tempe" />
        </div>
      </section>
    </>
  )
}




