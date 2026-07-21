import Link from 'next/link'
import { BUSINESS_INFO, SERVICES, LOCATIONS, getLocationHref } from '@/lib/constants'
import ContactForm from '@/components/ContactForm'
import FAQSection from '@/components/FAQSection'
import GoogleReviewsSlider from '@/components/GoogleReviewsSlider'
import HeroVideo from '@/components/HeroVideo'
import GallerySection from '@/components/GallerySection'
import CallButton from '@/components/CallButton'
import { generalFAQs } from '@/lib/faqs'
import { generateMetadata } from '@/lib/seo'
import { NORTHERN_AZ_PATHS } from '@/lib/northernArizona'

export const metadata = generateMetadata({
  title: 'Window Cleaning in Arizona | East Valley & Northern Arizona',
  description:
    'Professional residential and commercial window cleaning from Arizona Window Washing Pros. Serving the East Valley and northern Arizona communities including Pinetop-Lakeside, Show Low, and Snowflake. Free quotes.',
  path: '/',
})

const NORTHERN_AZ_LINKS = [
  {
    name: 'Pinetop-Lakeside Window Cleaning',
    href: NORTHERN_AZ_PATHS.pinetopLakeside,
    description: 'Homes, cabins, and businesses in Pinetop-Lakeside.',
  },
  {
    name: 'Show Low Window Cleaning',
    href: NORTHERN_AZ_PATHS.showLow,
    description: 'Residential, rental, and storefront window cleaning in Show Low.',
  },
  {
    name: 'Snowflake Window Cleaning',
    href: NORTHERN_AZ_PATHS.snowflake,
    description: 'Residential and commercial window cleaning in Snowflake.',
  },
] as const

export default function HomePage() {
  return (
    <>
      <HeroVideo
        title="Professional Window Cleaning Services"
        subtitle="Crystal-clear windows for homes and businesses across the East Valley and northern Arizona. Expert service you can trust."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CallButton className="btn-primary text-lg" eventLabel="homepage_hero_call">
            Call Now: {BUSINESS_INFO.phone}
          </CallButton>
          <a
            href="#contact-form"
            className="btn-secondary text-lg bg-white text-primary-600 border-2 border-white hover:bg-primary-50"
          >
            Get Free Quote
          </a>
        </div>
      </HeroVideo>

      <GallerySection />

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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {service.name}
                  </h3>
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
            <Link href="/commercial-window-cleaning-arizona" className="card card-hover group">
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  Commercial Window Cleaning
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Storefront and commercial glass cleaning for businesses that want a professional first
                  impression.
                </p>
                <div className="mt-6 text-primary-600 font-semibold flex items-center group-hover:translate-x-2 transition-transform">
                  Learn more
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-emerald-50 border-y border-emerald-100">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Northern Arizona Service Areas</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Arizona Window Washing Pros provides residential and commercial window cleaning throughout
              Pinetop-Lakeside, Show Low, Snowflake, and nearby White Mountains communities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {NORTHERN_AZ_LINKS.map((area) => (
              <Link key={area.href} href={area.href} className="card card-hover text-center group bg-white">
                <div className="p-8">
                  <h3 className="text-xl font-bold text-primary-700 mb-3 group-hover:text-primary-800">
                    {area.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{area.description}</p>
                  <span className="mt-4 inline-block text-primary-600 font-semibold">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">We Serve These Areas</h2>
            <p className="section-subtitle">
              Professional window cleaning throughout the East Valley and northern Arizona
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LOCATIONS.map((location) => (
              <Link
                key={location.id}
                href={getLocationHref(location)}
                className="card card-hover text-center group"
              >
                <div className="p-8">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center group-hover:from-primary-200 group-hover:to-primary-300 transition-all duration-300">
                    <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-primary-600 mb-3 group-hover:text-primary-700 transition-colors">
                    {location.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{location.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
                description:
                  "Fill out our simple form or give us a call. We'll respond quickly with a free estimate.",
                icon: '📋',
              },
              {
                step: '2',
                title: 'Schedule Service',
                description: "Choose a time that works for you. We're flexible and work around your schedule.",
                icon: '📅',
              },
              {
                step: '3',
                title: 'Enjoy Clean Windows',
                description:
                  'Our team arrives on time and leaves your windows sparkling clean. Satisfaction guaranteed.',
                icon: '✨',
              },
            ].map((item) => (
              <div key={item.step} className="card text-center">
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Local Expertise</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Experience serving East Valley and northern Arizona communities with professional
                      residential and commercial window cleaning.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Eco-Friendly Solutions</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Safe for your family, pets, and the environment while effectively removing even the
                      toughest grime.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Professional Equipment</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Latest techniques and professional-grade tools ensure streak-free, crystal-clear
                      results every time.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 border border-primary-200">
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                <strong className="text-primary-700">{BUSINESS_INFO.name}</strong> provides residential and
                commercial window cleaning for Arizona homes and businesses—including the East Valley and
                northern Arizona service areas such as Pinetop-Lakeside, Show Low, and Snowflake.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="section-subtitle">Real reviews from Google</p>
          </div>
          <GoogleReviewsSlider compact={false} />
        </div>
      </section>

      <FAQSection faqs={generalFAQs} />

      <section id="contact-form" className="section-padding">
        <div className="container-custom max-w-5xl">
          <ContactForm />
        </div>
      </section>
    </>
  )
}
