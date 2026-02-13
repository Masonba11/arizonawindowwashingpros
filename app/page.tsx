import Link from 'next/link'
import { BUSINESS_INFO, SERVICES, LOCATIONS } from '@/lib/constants'
import ContactForm from '@/components/ContactForm'
import FAQSection from '@/components/FAQSection'
import ReviewsSection from '@/components/ReviewsSection'
import HeroVideo from '@/components/HeroVideo'
import PricingImages from '@/components/PricingImages'
import LazyYouTube from '@/components/LazyYouTube'
import GallerySection from '@/components/GallerySection'
import TestimonialVideo from '@/components/TestimonialVideo'
import CallButton from '@/components/CallButton'
import { generalFAQs } from '@/lib/faqs'
import { reviews } from '@/lib/reviews'
import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'Professional Window Washing in Mesa, Gilbert, Queen Creek, Chandler, Tempe & Scottsdale',
  description: `Expert exterior and interior window cleaning services in Mesa, Gilbert, Queen Creek, and Chandler, Arizona. Professional window cleaning and screen cleaning. Starting at $150. Free quotes available.`,
})

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroVideo
        title="Professional Window Washing Services"
        subtitle="Crystal-clear windows that make your home shine. Expert service you can trust."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CallButton
            className="btn-primary text-lg"
            eventLabel="homepage_hero_call"
          >
            Call Now: {BUSINESS_INFO.phone}
          </CallButton>
          <a href="#contact-form" className="btn-secondary text-lg bg-white text-primary-600 border-2 border-white hover:bg-primary-50">
            Get Free Quote
          </a>
        </div>
      </HeroVideo>

      {/* Gallery Section */}
      <GallerySection />

      {/* Services Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Professional window cleaning solutions tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="card card-hover group"
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">{service.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  <div className="mt-6 text-primary-600 font-semibold flex items-center group-hover:translate-x-2 transition-transform">
                    Learn more
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">We Serve These Areas</h2>
            <p className="section-subtitle">
              Professional window cleaning throughout the East Valley
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LOCATIONS.map((location) => (
              <Link
                key={location.id}
                href={`/locations/${location.slug}`}
                className="card card-hover text-center group"
              >
                <div className="p-8">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center group-hover:from-primary-200 group-hover:to-primary-300 transition-all duration-300">
                    <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-primary-600 mb-3 group-hover:text-primary-700 transition-colors">{location.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{location.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">
              Simple, straightforward process to get your windows sparkling clean
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Request a Quote',
                description: 'Fill out our simple form or give us a call. We\'ll respond quickly with a free estimate.',
                icon: '📋',
              },
              {
                step: '2',
                title: 'Schedule Service',
                description: 'Choose a time that works for you. We\'re flexible and work around your schedule.',
                icon: '📅',
              },
              {
                step: '3',
                title: 'Enjoy Clean Windows',
                description: 'Our team arrives on time and leaves your windows sparkling clean. Satisfaction guaranteed.',
                icon: '✨',
              },
            ].map((item, index) => (
              <div key={index} className="card text-center">
                <div className="p-8">
                  <div className="relative inline-block mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                      <span className="text-3xl">{item.icon}</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
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

      {/* Rich Content Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <div className="content-section">
            <div className="text-center mb-12">
              <h2 className="section-title">Why Choose Arizona Window Washing Pros?</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mt-4 rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Local Expertise</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Years of experience serving the East Valley with deep understanding of Arizona&apos;s unique climate challenges.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Eco-Friendly Solutions</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Safe for your family, pets, and the environment while effectively removing even the toughest grime.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Professional Equipment</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Latest techniques and professional-grade tools ensure streak-free, crystal-clear results every time.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Transparent Pricing</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Free quotes, no hidden fees, and satisfaction guaranteed. We make it easy to choose us.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 border border-primary-200">
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                <strong className="text-primary-700">Arizona&apos;s unique climate</strong> presents specific challenges, from intense desert sun creating hard water spots to frequent dust storms. Our team has the expertise and specialized equipment to handle it all, delivering results that last.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Video Section */}
      <TestimonialVideo formId="contact-form" />

      {/* Reviews Section */}
      <ReviewsSection reviews={reviews} maxReviews={6} />

      {/* FAQ Section */}
      <FAQSection faqs={generalFAQs} />

      {/* Pricing Images Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <PricingImages />
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="section-padding">
        <div className="container-custom max-w-2xl">
          <ContactForm />
        </div>
      </section>
    </>
  )
}

