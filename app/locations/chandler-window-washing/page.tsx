import Link from 'next/link'
import { BUSINESS_INFO, SERVICES, LOCATIONS } from '@/lib/constants'
import ContactForm from '@/components/ContactForm'
import FAQSection from '@/components/FAQSection'
import GoogleReviewsSlider from '@/components/GoogleReviewsSlider'
import HeroVideo from '@/components/HeroVideo'
import PricingImages from '@/components/PricingImages'
import BeforeAfterSection from '@/components/BeforeAfterSection'
import GallerySection from '@/components/GallerySection'
import TestimonialVideo from '@/components/TestimonialVideo'
import { generateMetadata, generateBreadcrumbSchema } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'Chandler window cleaning',
  description: 'Professional exterior and interior window cleaning services in Chandler, Arizona. Expert window cleaning and screen cleaning. Starting at $150 for 1-story homes. Free quotes available.',
  path: '/locations/chandler-window-washing',
})

const faqs = [
  {
    question: 'How much does exterior window cleaning cost in Chandler?',
    answer: 'Exterior window cleaning prices in Chandler start at $150 for 1-story homes and $180 for 2-story homes. Most Chandler homes range from $150-$350. Pricing is based on number of windows and home height. Contact us for a free estimate.',
  },
  {
    question: 'How often should I have my windows cleaned in Chandler?',
    answer: 'Given Chandler\'s desert climate with dust storms and intense sun, we recommend window cleaning every 3-4 months to maintain optimal clarity and prevent hard water spot buildup.',
  },
  {
    question: 'Do you clean both interior and exterior windows in Chandler?',
    answer: 'Yes, we offer both interior and exterior window cleaning services in Chandler. You can choose one or both depending on your needs.',
  },
  {
    question: 'What areas of Chandler do you serve?',
    answer: 'We serve all areas of Chandler, Arizona, including downtown Chandler, Ocotillo, and surrounding neighborhoods.',
  },
]

export default function ChandlerWindowWashingPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://arizonawindowwashingpros.com' },
    { name: 'Locations', url: 'https://arizonawindowwashingpros.com/locations' },
    { name: 'Chandler window cleaning', url: 'https://arizonawindowwashingpros.com/locations/chandler-window-washing' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HeroVideo
        title="Chandler window cleaning"
        subtitle="Reliable window cleaning services in Chandler, Arizona"
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
      <GallerySection city="Chandler" />

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-6">
              Looking for professional Chandler window cleaning services? You&apos;ve come to the right place. We specialize in providing top-quality window cleaning and screen cleaning for Chandler homeowners and businesses.
            </p>

            <h2 className="text-2xl font-bold mb-4">What&apos;s Included in Our Chandler window cleaning Service</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
              <li>Complete exterior window cleaning (all accessible windows)</li>
              <li>Interior window cleaning (optional)</li>
              <li>Screen cleaning (optional add-on)</li>
              <li>Track and sill cleaning</li>
              <li>Frame and edge cleaning</li>
              <li>Streak-free finish guarantee</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Why Choose Us for Chandler window cleaning?</h2>
            <p className="text-gray-700 mb-4">
              Chandler&apos;s unique climate presents specific challenges for window cleaning, from intense sun that creates hard water spots to dust storms that leave windows dirty. Our team has extensive experience working in Chandler and knows exactly how to handle these conditions.
            </p>
            <p className="text-gray-700 mb-8">
              We use professional-grade equipment and eco-friendly cleaning solutions to ensure your Chandler home&apos;s windows are spotless and streak-free. Our local team understands Chandler neighborhoods and works efficiently to minimize disruption to your day.
            </p>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <BeforeAfterSection city="Chandler" />

      {/* Pricing Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <div className="content-section">
            <h2 className="text-2xl font-bold mb-4">Pricing Guidance for Chandler window cleaning</h2>
            <p className="text-gray-700 mb-4">
              window cleaning prices in Chandler typically range from:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
              <li>Small homes (10-15 windows): $150-$250</li>
              <li>Medium homes (16-25 windows): $200-$350</li>
              <li>Large homes (26+ windows): $300-$500+</li>
              <li>Add-ons: Screen cleaning ($50-$100)</li>
            </ul>
            <p className="text-gray-700 mb-8">
              <strong>Note:</strong> These are general ranges. Actual pricing depends on factors like window accessibility, property size, and specific services requested. Contact us for a free, personalized quote.
            </p>


            <h2 className="text-2xl font-bold mb-4 mt-8">Our Services in Chandler</h2>
            <p className="text-gray-700 mb-4">
              We offer comprehensive window cleaning services throughout Chandler:
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
              {LOCATIONS.filter((loc) => loc.id !== 'chandler').map((location) => (
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
        </div>
      </section>

      {/* Rich Content Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Reliable Window Cleaning in Chandler, Arizona</h2>
            <p className="text-xl text-gray-700 mb-6">
              Chandler is a thriving community known for its excellent schools, beautiful neighborhoods, and strong sense of community. We&apos;re proud to serve Chandler homeowners with the same level of professionalism and attention to detail that makes this city special.
            </p>
            <p className="text-gray-700 mb-6">
              From downtown Chandler to Ocotillo and all surrounding areas, we bring professional window cleaning expertise to every Chandler home. Our team understands Chandler&apos;s diverse architectural styles, from historic homes to modern developments, and knows how to clean windows on each type effectively.
            </p>
            <h3 className="text-2xl font-bold mb-4 mt-8">Why Chandler Homeowners Choose Us</h3>
            <p className="text-gray-700 mb-4">
              Chandler residents value quality and professionalism, and that&apos;s exactly what we deliver. We&apos;re committed to providing exceptional window cleaning service that matches the high standards Chandler homeowners expect. Our reliable service, fair pricing, and attention to detail have made us a trusted choice throughout the community.
            </p>
            <p className="text-gray-700">
              Whether you need a one-time deep clean or regular maintenance, we&apos;re here to help keep your Chandler home looking its best. We understand the importance of maintaining property values and take pride in helping Chandler homeowners preserve the beauty of their homes with crystal-clear windows.
            </p>
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

      {/* Contact Form Section - Moved Up */}
      <section id="contact-form" className="section-padding bg-white">
        <div className="container-custom max-w-2xl">
          <ContactForm defaultCity="Chandler" />
        </div>
      </section>

      {/* Deionized Water Section */}
      <section className="section-padding bg-blue-50">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Our Deionized Water System Matters in Chandler
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
                  This is not basic bucket cleaning. This is precision water purification engineered for high end residential properties in Chandler.
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

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* Pricing Images Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <PricingImages />
        </div>
      </section>
    </>
  )
}

