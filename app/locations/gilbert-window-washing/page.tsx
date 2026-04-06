import Link from 'next/link'
import { BUSINESS_INFO, SERVICES, LOCATIONS } from '@/lib/constants'
import ContactForm from '@/components/ContactForm'
import FAQ from '@/components/FAQ'
import GoogleReviewsSlider from '@/components/GoogleReviewsSlider'
import HeroVideo from '@/components/HeroVideo'
import GallerySection from '@/components/GallerySection'
import TestimonialVideo from '@/components/TestimonialVideo'
import GetFreeQuoteCTA from '@/components/GetFreeQuoteCTA'
import { generateCityMetadata } from '@/lib/citySEO'
import { generateBreadcrumbSchema } from '@/lib/seo'

export const metadata = generateCityMetadata('gilbert')

const faqs = [
  {
    question: 'How much does outdoor window cleaning cost in Gilbert?',
    answer: 'Outdoor window cleaning prices in Gilbert start at $150 for 1-story homes and $180 for 2-story homes. Most Gilbert homes range from $150-$350. Pricing is based on number of windows and home height. Contact us for a free estimate.',
  },
  {
    question: 'How often should I have my windows cleaned in Gilbert?',
    answer: 'Given Gilbert\'s desert climate with dust storms and intense sun, we recommend window cleaning every 3-4 months to maintain optimal clarity and prevent hard water spot buildup.',
  },
  {
    question: 'Do you clean both indoor and outdoor windows in Gilbert?',
    answer: 'Yes, we offer both indoor and outdoor window cleaning services in Gilbert. You can choose one or both depending on your needs.',
  },
  {
    question: 'What areas of Gilbert do you serve?',
    answer: 'We serve all areas of Gilbert, Arizona, including downtown Gilbert, Val Vista, Higley, and surrounding neighborhoods.',
  },
]

export default function GilbertWindowWashingPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://arizonawindowwashingpros.com' },
    { name: 'Locations', url: 'https://arizonawindowwashingpros.com/locations' },
    { name: 'Gilbert window cleaning', url: 'https://arizonawindowwashingpros.com/locations/gilbert-window-washing' },
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
        title="Gilbert window cleaning"
        subtitle="Expert window cleaning in Gilbert, Arizona"
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
        <div className="container-custom max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-start">
            <div>
              <h2 className="text-2xl font-bold mb-4">Why Choose Us for Gilbert window cleaning?</h2>
              <p className="text-gray-700 mb-4">
                Gilbert&apos;s unique climate presents specific challenges for window cleaning, from intense sun that creates hard water spots to dust storms that leave windows dirty. Our team has extensive experience working in Gilbert and knows exactly how to handle these conditions.
              </p>
              <p className="text-gray-700 mb-4">
                We use professional-grade equipment and eco-friendly cleaning solutions to ensure your Gilbert home&apos;s windows are spotless and streak-free. Our local team understands Gilbert neighborhoods and works efficiently to minimize disruption to your day.
              </p>
              <p className="text-gray-700 mb-4">
                Between monsoon season, caliche dust, and irrigation overspray, Gilbert glass often needs more than a quick wipe. We clean frames, tracks, and screens where grime collects so your windows stay clearer longer, not just the day we leave.
              </p>
              <p className="text-gray-700 mb-4">
                Whether you&apos;re in downtown Gilbert, Val Vista, Higley, or newer master-planned communities, we treat your property with care: shoe covers inside, careful ladder placement outside, and respect for landscaping and pool areas.
              </p>
              <p className="text-gray-700 mb-6">
                From single-story patio homes to two-story builds with hard-to-reach glass, we tailor each visit to your home. Ask about exterior-only, interior and exterior packages, screen cleaning, and hard water spot treatment. We&apos;ll recommend what actually makes sense for your Gilbert windows.
              </p>
              <ul className="space-y-3" role="list">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-800 font-medium">
                    Licensed business & insured technicians
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-800 font-medium">Free Guarantee</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-800 font-medium inline-flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-0.5" aria-hidden>
                      {[0, 1, 2, 3, 4].map((i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-amber-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </span>
                    <span>5-star Google reviews</span>
                    <svg
                      className="w-5 h-5 flex-shrink-0"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-800 font-medium">
                    Thousands of homes serviced
                  </span>
                </li>
              </ul>
            </div>
            <figure className="m-0 w-full max-w-sm mx-auto md:max-w-none md:mx-0">
              <h3
                id="gilbert-what-we-do-heading"
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-3"
              >
                What We Do For Your Windows
              </h3>
              <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 leading-[0]">
                <video
                  className="block w-full h-auto align-top"
                  controls
                  playsInline
                  preload="metadata"
                  aria-labelledby="gilbert-what-we-do-heading"
                >
                  <source src="/exterior-window-gilbert.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <GoogleReviewsSlider compact={false} />
        </div>
      </section>
      <GetFreeQuoteCTA />

      {/* Deionized Water Section */}
      <section className="section-padding bg-blue-50">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Our Deionized Water System Matters in Gilbert
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
                <div className="mt-4 rounded-lg overflow-hidden border border-gray-200 leading-[0]">
                  <video
                    className="block w-full h-auto align-top"
                    controls
                    playsInline
                    preload="metadata"
                    aria-label="Our deionized water tank and filtration setup"
                  >
                    <source src="/di-tank-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
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
                  This is not basic bucket cleaning. This is precision water purification engineered for high end residential properties in Gilbert.
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
          <ContactForm defaultCity="Gilbert" />
        </div>
      </section>

      {/* Testimonial Video Section */}
      <TestimonialVideo formId="contact-form" />
      <GetFreeQuoteCTA />

      {/* Gallery Section */}
      <GallerySection city="Gilbert" />
      <GetFreeQuoteCTA />

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-6">
              Looking for professional Gilbert window cleaning services? You&apos;ve come to the right place. We specialize in providing top-quality window cleaning and screen cleaning for Gilbert homeowners and businesses.
            </p>

            <h2 className="text-2xl font-bold mb-4">What&apos;s Included in Our Gilbert window cleaning Service</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
              <li>Complete outdoor window cleaning (all accessible windows)</li>
              <li>Indoor window cleaning (optional)</li>
              <li>Screen cleaning (optional add-on)</li>
              <li>Track and sill cleaning</li>
              <li>Frame and edge cleaning</li>
              <li>Streak-free finish guarantee</li>
            </ul>

          </div>
        </div>
      </section>
      <GetFreeQuoteCTA />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl font-bold mb-4 mt-8">Our Services in Gilbert</h2>
          <p className="text-gray-700 mb-4">
            We offer comprehensive window cleaning services throughout Gilbert:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="text-primary-600 hover:underline font-medium"
              >
                {service.name}
              </Link>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-4">Other Service Areas</h2>
          <p className="text-gray-700 mb-4">
            We also serve these nearby areas:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {LOCATIONS.filter((loc) => loc.id !== 'gilbert').map((location) => (
              <Link
                key={location.id}
                href={`/locations/${location.slug}`}
                className="text-primary-600 hover:underline font-medium"
              >
                {location.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <GetFreeQuoteCTA />

      {/* Rich Content Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Expert window cleaning in Gilbert, Arizona</h2>
            <p className="text-xl text-gray-700 mb-6">
              Gilbert homeowners appreciate the value of professional window cleaning, especially in Arizona&apos;s challenging climate. With Gilbert&apos;s rapid growth and diverse neighborhoods, from downtown to Val Vista and Higley, we bring professional window cleaning expertise to every corner of the community.
            </p>
            <p className="text-gray-700 mb-6">
              Our team understands Gilbert&apos;s unique window cleaning needs. Whether you live in an established neighborhood or a new development, we have the experience and equipment to handle your home&apos;s specific requirements. We&apos;re familiar with Gilbert&apos;s architectural styles and know how to clean windows on everything from single-story ranches to multi-story custom homes.
            </p>
            <h3 className="text-2xl font-bold mb-4 mt-8">Why Gilbert Residents Trust Us</h3>
            <p className="text-gray-700 mb-4">
              Gilbert is known for its family-friendly atmosphere and well-maintained homes. We share that commitment to quality and take pride in helping Gilbert homeowners maintain beautiful, clear windows that enhance their property values and quality of life.
            </p>
            <p className="text-gray-700">
              Our local knowledge of Gilbert neighborhoods, combined with professional training and the best equipment, ensures that every Gilbert home receives the exceptional service it deserves. We&apos;re your neighbors, and we&apos;re committed to providing the best window cleaning service in Gilbert.
            </p>
          </div>
        </div>
      </section>
      <GetFreeQuoteCTA />

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
                title="Arizona window cleaning Pros, video 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="relative w-full h-[400px] max-w-md mx-auto">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
                src="https://www.youtube.com/embed/GdNlH8GPhL0"
                title="Arizona window cleaning Pros, video 2"
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
          <h2 className="text-2xl font-bold mb-4">Pricing Guidance for Gilbert window cleaning</h2>
          <p className="text-gray-700 mb-4">
            window cleaning prices in Gilbert typically range from:
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

      {/* FAQ Section - includes FAQPage schema automatically */}
      <FAQ faqs={faqs} />
      <GetFreeQuoteCTA />
    </>
  )
}

