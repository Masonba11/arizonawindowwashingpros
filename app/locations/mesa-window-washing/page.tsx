import Link from 'next/link'
import { BUSINESS_INFO, SERVICES, LOCATIONS } from '@/lib/constants'
import ContactForm from '@/components/ContactForm'
import FAQSection from '@/components/FAQSection'
import GoogleReviewsSlider from '@/components/GoogleReviewsSlider'
import HeroVideo from '@/components/HeroVideo'
import GallerySection from '@/components/GallerySection'
import GetFreeQuoteCTA from '@/components/GetFreeQuoteCTA'
import LocationWhyChooseUs from '@/components/LocationWhyChooseUs'
import DeionizedWaterTankCard from '@/components/DeionizedWaterTankCard'
import { generateCityMetadata } from '@/lib/citySEO'
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo'

export const metadata = generateCityMetadata('mesa')

const faqs = [
  {
    question: 'How much does outdoor window cleaning cost in Mesa?',
    answer: 'Exterior window cleaning prices in Mesa start at $150 for 1-story homes and $180 for 2-story homes. Most Mesa homes range from $150-$350. Pricing is based on number of windows and home height. Contact us for a free estimate.',
  },
  {
    question: 'How often should I have my windows cleaned in Mesa?',
    answer: 'Given Mesa\'s desert climate with dust storms and intense sun, we recommend window cleaning every 3-4 months to maintain optimal clarity and prevent hard water spot buildup.',
  },
  {
    question: 'Do you clean both indoor and outdoor windows in Mesa?',
    answer: 'Yes, we offer both indoor and outdoor window cleaning services in Mesa. You can choose one or both depending on your needs.',
  },
  {
    question: 'What areas of Mesa do you serve?',
    answer: 'We serve all areas of Mesa, Arizona, including downtown Mesa, East Mesa, West Mesa, and surrounding neighborhoods.',
  },
]

export default function MesaWindowWashingPage() {
  const city = "Mesa"
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://arizonawindowwashingpros.com' },
    { name: 'Locations', url: 'https://arizonawindowwashingpros.com/locations' },
    { name: 'Mesa window cleaning', url: 'https://arizonawindowwashingpros.com/locations/mesa-window-washing' },
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
        title="Mesa window cleaning"
        subtitle="Professional window cleaning services in Mesa, Arizona"
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

      <LocationWhyChooseUs
        idPrefix="mesa-window-washing"
        sectionHeading="Why Choose Us for Mesa window cleaning?"
        cityPossessive="Mesa's"
        cityName="Mesa"
        experiencePhrase="working in Mesa"
        neighborhoodsSnippet="downtown Mesa, East Mesa, West Mesa, or newer master-planned communities"
      />

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
              Why Our Deionized Water System Matters in Mesa
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            {/* Product Image */}
            <div className="order-2 md:order-1">
              <DeionizedWaterTankCard />
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
                  This is not basic bucket cleaning. This is precision water purification engineered for high end residential properties in Mesa.
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
        <div className="container-custom max-w-5xl">
          <ContactForm defaultCity="Mesa" />
        </div>
      </section>
      <GetFreeQuoteCTA />

      {/* Gallery Section */}
      <GallerySection city="Mesa" />


      {/* Main Content Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <div className="content-section">
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed text-center">
              Looking for professional Mesa window cleaning services? You&apos;ve come to the right place. We specialize in providing top-quality window cleaning and screen cleaning for Mesa homeowners and businesses.
            </p>
          </div>

          {/* What's Included */}
          <div className="content-section">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">What&apos;s Included in Our Mesa window cleaning Service</h2>
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

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />
    </>
  )
}

