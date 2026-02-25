import Link from 'next/link'
import { BUSINESS_INFO, SERVICES, LOCATIONS } from '@/lib/constants'
import ContactForm from '@/components/ContactForm'
import FAQSection from '@/components/FAQSection'
import GoogleReviewsSlider from '@/components/GoogleReviewsSlider'
import HeroVideo from '@/components/HeroVideo'
import GallerySection from '@/components/GallerySection'
import TestimonialVideo from '@/components/TestimonialVideo'
import GetFreeQuoteCTA from '@/components/GetFreeQuoteCTA'
import CallButton from '@/components/CallButton'
import { generateMetadata, generateBreadcrumbSchema } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'San Tan Valley window cleaning',
  description: 'Professional outdoor and indoor window cleaning services in San Tan Valley, Arizona. Expert window cleaning and screen cleaning. Starting at $150 for 1-story homes. Free quotes available.',
  path: '/locations/san-tan-valley-window-washing',
})

const faqs = [
  {
    question: 'How much does outdoor window cleaning cost in San Tan Valley?',
    answer: 'Exterior window cleaning prices in San Tan Valley start at $150 for 1-story homes and $180 for 2-story homes. Most San Tan Valley homes range from $150-$350. Pricing is based on number of windows and home height. Contact us for a free estimate.',
  },
  {
    question: 'How often should I have my windows cleaned in San Tan Valley?',
    answer: 'Given San Tan Valley\'s desert climate with dust storms and intense sun, we recommend window cleaning every 3-4 months to maintain optimal clarity and prevent hard water spot buildup.',
  },
  {
    question: 'Do you clean both indoor and outdoor windows in San Tan Valley?',
    answer: 'Yes, we offer both indoor and outdoor window cleaning services in San Tan Valley. You can choose one or both depending on your needs.',
  },
  {
    question: 'What areas of San Tan Valley do you serve?',
    answer: 'We serve all areas of San Tan Valley, Arizona, including all neighborhoods and surrounding areas.',
  },
]

export default function SanTanValleyWindowWashingPage() {
  const city = "San Tan Valley"
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://arizonawindowwashingpros.com' },
    { name: 'Locations', url: 'https://arizonawindowwashingpros.com/locations' },
    { name: 'San Tan Valley window cleaning', url: 'https://arizonawindowwashingpros.com/locations/san-tan-valley-window-washing' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HeroVideo
        title="San Tan Valley window cleaning"
        subtitle="Professional window cleaning services in San Tan Valley, Arizona"
        
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CallButton
            className="btn-primary text-lg"
            eventLabel="san_tan_valley_location_hero_call"
          >
            Call Now: {BUSINESS_INFO.phone}
          </CallButton>
          <a href="#contact-form" className="btn-secondary text-lg bg-white text-primary-600 border-2 border-white hover:bg-primary-50">
            Get Free Quote
          </a>
        </div>
      </HeroVideo>

      {/* Google Reviews Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <GoogleReviewsSlider compact={false} />
        </div>
      </section>

      {/* Deionized Water Section */}
      <section className="section-padding bg-blue-50">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Our Deionized Water System Matters in San Tan Valley
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 md:p-12 border-2 border-blue-100 shadow-xl">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-base md:text-lg">
                In Arizona the water is extremely mineral heavy. That means even after a traditional cleaning, microscopic calcium and mineral deposits can remain on the glass. Once the water dries, those deposits turn into visible streaks and hard water marks.
              </p>
              
              <div className="bg-blue-600 text-white rounded-xl p-6 text-center my-8">
                <p className="text-xl md:text-2xl font-bold">
                  We operate differently.
                </p>
              </div>
              
              <p className="text-base md:text-lg">
                Arizona Window Washing Pros uses a professional grade Deionized water purification system. This is advanced filtration technology designed to remove dissolved minerals and impurities from the water before it ever touches your windows.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 my-8">
                <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200 text-center">
                  <div className="text-3xl mb-2">✨</div>
                  <p className="font-semibold text-gray-900">No Streaks</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200 text-center">
                  <div className="text-3xl mb-2">💎</div>
                  <p className="font-semibold text-gray-900">No Spotting</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200 text-center">
                  <div className="text-3xl mb-2">🌟</div>
                  <p className="font-semibold text-gray-900">No Residue</p>
                </div>
              </div>
              
              <p className="text-base md:text-lg">
                What remains is ultra purified water that dries crystal clear. No streaks. No spotting. No residue left behind.
              </p>
              
              <p className="text-base md:text-lg">
                Because the water contains zero minerals, it evaporates cleanly and helps reduce future buildup. Your glass is left with a refined, polished appearance that stays cleaner longer.
              </p>
              
              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-blue-600 my-8">
                <p className="text-base md:text-lg font-semibold text-gray-900 italic">
                  This is not basic bucket cleaning. This is precision water purification engineered for high end residential properties in San Tan Valley.
                </p>
              </div>
              
              <p className="text-base md:text-lg font-semibold text-gray-900 text-center">
                For homeowners who expect clarity, longevity, and a higher standard of care, this is the difference.
              </p>
              
              <p className="text-base md:text-lg font-semibold text-gray-900 text-center mt-6">
                This is more than just cleaning your windows, it is also our mission to protect your asset.
              </p>
            </div>
          </div>
        </div>
      </section>
      <GetFreeQuoteCTA />

      {/* Contact Form Section */}
      <section id="contact-form" className="section-padding bg-white">
        <div className="container-custom max-w-2xl">
          <ContactForm defaultCity="San Tan Valley" />
        </div>
      </section>
      <GetFreeQuoteCTA />

      {/* Testimonial Video Section */}
      <TestimonialVideo formId="contact-form" />

      {/* Gallery Section */}
      <GallerySection city="San Tan Valley" />

      {/* Main Content Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <div className="content-section">
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed text-center">
              Looking for professional San Tan Valley window cleaning services? You&apos;ve come to the right place. We specialize in providing top-quality window cleaning and screen cleaning for San Tan Valley homeowners and businesses.
            </p>
          </div>

          {/* What's Included */}
          <div className="content-section">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">What&apos;s Included in Our San Tan Valley window cleaning Service</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Complete outdoor window cleaning (all accessible windows)',
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
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Choose Us for San Tan Valley window cleaning?</h2>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                San Tan Valley&apos;s unique climate presents specific challenges for window cleaning, from intense sun that creates hard water spots to dust storms that leave windows dirty. Our team has extensive experience working in San Tan Valley and knows exactly how to handle these conditions.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                We use professional-grade equipment and eco-friendly cleaning solutions to ensure your San Tan Valley home&apos;s windows are spotless and streak-free. Our local team understands San Tan Valley neighborhoods and works efficiently to minimize disruption to your day.
              </p>
            </div>
          </div>


          {/* Pricing Guidance */}
          <div className="content-section bg-gradient-to-br from-primary-50 to-white border-2 border-primary-100">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Pricing Guidance for San Tan Valley window cleaning</h2>
            <p className="text-gray-700 mb-6 text-lg">
              window cleaning prices in San Tan Valley typically range from:
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

          {/* Our Services in San Tan Valley */}
          <div className="content-section">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Services in San Tan Valley</h2>
            <p className="text-gray-700 mb-6 text-lg">
              We offer comprehensive window cleaning services throughout San Tan Valley:
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
              {LOCATIONS.filter((loc) => loc.id !== 'san-tan-valley').map((location) => (
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Professional window cleaning in San Tan Valley, Arizona</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
            </div>
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                San Tan Valley homeowners know that maintaining clean windows in Arizona&apos;s desert climate requires specialized expertise. With intense sun, frequent dust storms, and hard water challenges, San Tan Valley windows need professional care to stay crystal clear. Arizona window cleaning Pros brings years of local experience to every San Tan Valley home we serve.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Whether you live in any of San Tan Valley&apos;s neighborhoods or surrounding areas, we understand the unique window cleaning challenges in your area. Our team uses proven techniques and professional-grade equipment specifically suited for San Tan Valley&apos;s climate conditions.
              </p>
              <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-2xl border border-primary-100 mt-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Why San Tan Valley Homeowners Choose Us</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  San Tan Valley is a growing community with diverse homes. We&apos;ve worked on all types of San Tan Valley homes and understand the specific needs of each. Our flexible scheduling and competitive pricing make professional window cleaning accessible to all San Tan Valley residents.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We&apos;re committed to providing exceptional service to the San Tan Valley community. As your local window cleaning experts, we take pride in helping San Tan Valley homeowners maintain beautiful, clear windows that enhance their home&apos;s appearance and their enjoyment of Arizona&apos;s beautiful weather.
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
                title="Arizona window cleaning Pros - Video 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="relative w-full h-[400px] max-w-md mx-auto">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
                src="https://www.youtube.com/embed/GdNlH8GPhL0"
                title="Arizona window cleaning Pros - Video 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      <GetFreeQuoteCTA />

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

<GetFreeQuoteCTA />
    </>
  )
}

