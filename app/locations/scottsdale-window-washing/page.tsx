import Link from 'next/link'
import { BUSINESS_INFO, SERVICES, LOCATIONS } from '@/lib/constants'
import ContactForm from '@/components/ContactForm'
import FAQSection from '@/components/FAQSection'
import GoogleReviewsSlider from '@/components/GoogleReviewsSlider'
import HeroVideo from '@/components/HeroVideo'
import GallerySection from '@/components/GallerySection'
import TestimonialVideo from '@/components/TestimonialVideo'
import GetFreeQuoteCTA from '@/components/GetFreeQuoteCTA'
import { generateCityMetadata } from '@/lib/citySEO'
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo'

export const metadata = generateCityMetadata('scottsdale')

const faqs = [
  {
    question: 'How much does outdoor window cleaning cost in Scottsdale?',
    answer: 'Exterior window cleaning prices in Scottsdale start at $150 for 1-story homes and $180 for 2-story homes. Most Scottsdale homes range from $150-$350. Pricing is based on number of windows and home height. Contact us for a free estimate.',
  },
  {
    question: 'How often should I have my windows cleaned in Scottsdale?',
    answer: 'Given Scottsdale\'s desert climate with dust storms and intense sun, we recommend window cleaning every 3-4 months to maintain optimal clarity and prevent hard water spot buildup.',
  },
  {
    question: 'Do you clean both indoor and outdoor windows in Scottsdale?',
    answer: 'Yes, we offer both indoor and outdoor window cleaning services in Scottsdale. You can choose one or both depending on your needs.',
  },
  {
    question: 'What areas of Scottsdale do you serve?',
    answer: 'We serve all areas of Scottsdale, Arizona, including Old Town Scottsdale, North Scottsdale, and surrounding neighborhoods.',
  },
]

export default function ScottsdaleWindowWashingPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://arizonawindowwashingpros.com' },
    { name: 'Locations', url: 'https://arizonawindowwashingpros.com/locations' },
    { name: 'Scottsdale window cleaning', url: 'https://arizonawindowwashingpros.com/locations/scottsdale-window-washing' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <HeroVideo
        title="Scottsdale window cleaning"
        subtitle="Professional window cleaning services in Scottsdale, Arizona"
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

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl font-bold mb-4">Why Choose Us for Scottsdale window cleaning?</h2>
          <p className="text-gray-700 mb-4">
            Scottsdale&apos;s unique climate presents specific challenges for window cleaning, from intense sun that creates hard water spots to dust storms that leave windows dirty. Our team has extensive experience working in Scottsdale and knows exactly how to handle these conditions.
          </p>
          <p className="text-gray-700 mb-8">
            We use professional-grade equipment and eco-friendly cleaning solutions to ensure your Scottsdale home&apos;s windows are spotless and streak-free. Our local team understands Scottsdale neighborhoods and works efficiently to minimize disruption to your day.
          </p>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <GoogleReviewsSlider compact={false} />
        </div>
      </section>

      {/* Deionized Water Section */}
      <section className="section-padding bg-blue-50">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Our Deionized Water System Matters in Scottsdale
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            {/* Product Image */}
            <div className="order-2 md:order-1">
              <div className="bg-white rounded-2xl p-4 shadow-xl overflow-hidden">
                <img
                  src="/newstuff/newstuff9.jpg"
                  alt="Deionized Water Tank"
                  className="w-full max-w-xs mx-auto h-auto rounded-lg object-cover"
                />
                <p className="text-center text-sm font-semibold text-gray-700 mt-2">Deionized Water Tank</p>
              </div>
            </div>
            
            {/* Content */}
            <div className="order-1 md:order-2 bg-white rounded-2xl p-8 md:p-12 border-2 border-blue-100 shadow-xl">
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
                  This is not basic bucket cleaning. This is precision water purification engineered for high end residential properties in Scottsdale.
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
        </div>
      </section>
      <GetFreeQuoteCTA />

      {/* Contact Form Section */}
      <section id="contact-form" className="section-padding bg-white">
        <div className="container-custom max-w-2xl">
          <ContactForm defaultCity="Scottsdale" />
        </div>
      </section>
      <GetFreeQuoteCTA />

      {/* Testimonial Video Section */}
      <TestimonialVideo formId="contact-form" />

      {/* Gallery Section */}
      <GallerySection city="Scottsdale" />

      {/* Main Content Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <div className="content-section">
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed text-center">
              Looking for professional Scottsdale window cleaning services? You&apos;ve come to the right place. We specialize in providing top-quality window cleaning and screen cleaning for Scottsdale homeowners and businesses.
            </p>
          </div>

          {/* What's Included */}
          <div className="content-section">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">What&apos;s Included in Our Scottsdale window cleaning Service</h2>
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

          {/* Our Services in Scottsdale */}
          <div className="content-section">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Services in Scottsdale</h2>
            <p className="text-gray-700 mb-6 text-lg">
              We offer comprehensive window cleaning services throughout Scottsdale:
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
              {LOCATIONS.filter((loc) => loc.id !== 'scottsdale').map((location) => (
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Professional window cleaning in Scottsdale, Arizona</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
            </div>
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Scottsdale homeowners know that maintaining clean windows in Arizona&apos;s desert climate requires specialized expertise. With intense sun, frequent dust storms, and hard water challenges, Scottsdale windows need professional care to stay crystal clear. Arizona window cleaning Pros brings years of local experience to every Scottsdale home we serve.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Whether you live in Old Town Scottsdale, North Scottsdale, or any of the surrounding neighborhoods, we understand the unique window cleaning challenges in your area. Our team uses proven techniques and professional-grade equipment specifically suited for Scottsdale&apos;s climate conditions.
              </p>
              <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-2xl border border-primary-100 mt-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Why Scottsdale Homeowners Choose Us</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Scottsdale is a diverse community with homes ranging from luxury properties to new developments. We&apos;ve worked on all types of Scottsdale homes and understand the specific needs of each. Our flexible scheduling and competitive pricing make professional window cleaning accessible to all Scottsdale residents.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We&apos;re committed to providing exceptional service to the Scottsdale community. As your local window cleaning experts, we take pride in helping Scottsdale homeowners maintain beautiful, clear windows that enhance their home&apos;s appearance and their enjoyment of Arizona&apos;s beautiful weather.
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
              />
            </div>
            <div className="relative w-full h-[400px] max-w-md mx-auto">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
                src="https://www.youtube.com/embed/GdNlH8GPhL0"
                title="Arizona window cleaning Pros - Video 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
      <GetFreeQuoteCTA />

      {/* Pricing Guidance Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl font-bold mb-4">Pricing Guidance for Scottsdale window cleaning</h2>
          <p className="text-gray-700 mb-4">
            window cleaning prices in Scottsdale typically range from:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Small homes (10-15 windows): $150-$250</li>
            <li>Medium homes (16-25 windows): $200-$350</li>
            <li>Large homes (26+ windows): $300-$500+</li>
          </ul>
          <p className="text-gray-700 mb-4 font-semibold">
            Screen cleaning and tracks & sills are free with every window cleaning service.
          </p>
          <p className="text-gray-700 mb-8">
            <strong>Note:</strong> These are general ranges. Actual pricing depends on factors like window accessibility, property size, and specific services requested. Contact us for a free, personalized quote.
          </p>
        </div>
      </section>
      <GetFreeQuoteCTA />

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      <GetFreeQuoteCTA />
    </>
  )
}




