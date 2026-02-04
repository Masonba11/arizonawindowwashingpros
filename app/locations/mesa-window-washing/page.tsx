import Link from 'next/link'
import { BUSINESS_INFO, SERVICES, LOCATIONS } from '@/lib/constants'
import ContactForm from '@/components/ContactForm'
import FAQSection from '@/components/FAQSection'
import ReviewsSection from '@/components/ReviewsSection'
import HeroVideo from '@/components/HeroVideo'
import PricingImages from '@/components/PricingImages'
import dynamic from 'next/dynamic'
import BeforeAfterSection from '@/components/BeforeAfterSection'
import GallerySection from '@/components/GallerySection'
import TrustSection from '@/components/TrustSection'

// Dynamically import client components to prevent build timeouts
const StickyCTA = dynamic(() => import('@/components/StickyCTA'), { ssr: false })
const OfferBanner = dynamic(() => import('@/components/OfferBanner'), { ssr: false })
const QuoteForm = dynamic(() => import('@/components/QuoteForm'), { ssr: false })
const WorkVideo = dynamic(() => import('@/components/WorkVideo'), { ssr: false })
const LazyYouTube = dynamic(() => import('@/components/LazyYouTube'), { ssr: false })
import { reviews } from '@/lib/reviews'
import { generateMetadata, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo'
import { generateLocationFAQs } from '@/lib/enhancedFAQs'

export const metadata = generateMetadata({
  title: 'Mesa Window Washing | Professional Window Cleaning Services',
  description: 'Professional exterior and interior window cleaning services in Mesa, Arizona. Expert window cleaning and screen cleaning. Starting at $150 for 1-story homes. Licensed & insured. Free quotes available.',
  path: '/locations/mesa-window-washing',
})

const city = 'Mesa'
const faqs = generateLocationFAQs(city)

export default function MesaWindowWashingPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://arizonawindowwashingpros.com' },
    { name: 'Locations', url: 'https://arizonawindowwashingpros.com/locations' },
    { name: 'Mesa Window Washing', url: 'https://arizonawindowwashingpros.com/locations/mesa-window-washing' },
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
        title={`Window Washing in ${city}, Arizona`}
        subtitle="Professional window cleaning services. Licensed, insured, and locally owned."
        city={city}
      />
      
      {/* Quote Form in Hero Area */}
      <section className="section-padding bg-white -mt-20 relative z-20">
        <div className="container-custom max-w-2xl">
          <QuoteForm defaultCity={city} compact />
        </div>
      </section>

      {/* Click-to-Call CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Crystal-Clear Windows in {city}?
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
      <BeforeAfterSection city={city} />

      {/* Gallery Section */}
      <GallerySection city={city} />

      {/* Work Video Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="section-title">See Our Work in {city}</h2>
            <p className="section-subtitle">
              Watch our professional team deliver streak-free results
            </p>
          </div>
          <WorkVideo
            src="/videos/work-video-1.mp4"
            poster="/before-after-1.jpg"
            alt={`Professional window cleaning in ${city}`}
          />
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <div className="content-section">
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed text-center">
              Looking for professional {city} window washing services? You&apos;ve come to the right place. We specialize in providing top-quality window cleaning and screen cleaning for {city} homeowners and businesses.
            </p>
          </div>

          {/* What's Included */}
          <div className="content-section">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">What&apos;s Included in Our Mesa Window Washing Service</h2>
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
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Choose Us for Mesa Window Washing?</h2>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                Mesa&apos;s unique climate presents specific challenges for window cleaning, from intense sun that creates hard water spots to dust storms that leave windows dirty. Our team has extensive experience working in Mesa and knows exactly how to handle these conditions.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                We use professional-grade equipment and eco-friendly cleaning solutions to ensure your Mesa home&apos;s windows are spotless and streak-free. Our local team understands Mesa neighborhoods and works efficiently to minimize disruption to your day.
              </p>
            </div>
          </div>

          {/* Pricing Guidance */}
          <div className="content-section bg-gradient-to-br from-primary-50 to-white border-2 border-primary-100">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Pricing Guidance for Mesa Window Washing</h2>
            <p className="text-gray-700 mb-6 text-lg">
              Window washing prices in Mesa typically range from:
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

          {/* Our Services in Mesa */}
          <div className="content-section">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Services in Mesa</h2>
            <p className="text-gray-700 mb-6 text-lg">
              We offer comprehensive window cleaning services throughout Mesa:
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
              {LOCATIONS.filter((loc) => loc.id !== 'mesa').map((location) => (
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Professional Window Washing in Mesa, Arizona</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
            </div>
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Mesa homeowners know that maintaining clean windows in Arizona&apos;s desert climate requires specialized expertise. With intense sun, frequent dust storms, and hard water challenges, Mesa windows need professional care to stay crystal clear. Arizona Window Washing Pros brings years of local experience to every Mesa home we serve.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Whether you live in downtown Mesa, East Mesa, West Mesa, or any of the surrounding neighborhoods, we understand the unique window cleaning challenges in your area. Our team uses proven techniques and professional-grade equipment specifically suited for Mesa&apos;s climate conditions.
              </p>
              <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-2xl border border-primary-100 mt-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Why Mesa Homeowners Choose Us</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Mesa is a diverse community with homes ranging from historic properties to new developments. We&apos;ve worked on all types of Mesa homes and understand the specific needs of each. Our flexible scheduling and competitive pricing make professional window cleaning accessible to all Mesa residents.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We&apos;re committed to providing exceptional service to the Mesa community. As your local window cleaning experts, we take pride in helping Mesa homeowners maintain beautiful, clear windows that enhance their home&apos;s appearance and their enjoyment of Arizona&apos;s beautiful weather.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Videos Section - Lazy Loaded */}
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

      {/* Trust Section */}
      <TrustSection city={city} />

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

      {/* Related Services in City */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="section-title">Related Services in {city}</h2>
            <p className="section-subtitle">
              Complete your window cleaning with these additional services
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
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

      {/* Nearby Cities */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="section-title">We Also Serve Nearby Areas</h2>
            <p className="section-subtitle">
              Professional window cleaning in surrounding communities
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {LOCATIONS.filter((loc) => loc.id !== 'mesa').map((location) => (
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
      </section>

      {/* Click-to-Call CTA Before Form */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get Your Free Quote in {city} Today
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
          <QuoteForm defaultCity={city} />
        </div>
      </section>
    </>
  )
}

