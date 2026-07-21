import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import FAQSection from '@/components/FAQSection'
import GoogleReviewsSlider from '@/components/GoogleReviewsSlider'
import HeroVideo from '@/components/HeroVideo'
import DeionizedWaterTankCard from '@/components/DeionizedWaterTankCard'
import ClickToCall from '@/components/ClickToCall'
import {
  DI_RO_BENEFITS,
  PINETOP_CONFIG,
  PINETOP_SEO_FAQS,
  PINETOP_SEO_METADATA,
  PINETOP_SEO_SERVICES,
  PINETOP_SERVICE_AREAS,
  WHY_CHOOSE_US,
} from '@/lib/pinetopShowLow'
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo'

export const dynamic = 'force-static'

export const metadata = PINETOP_SEO_METADATA

const INTRO_MENTIONS = [
  'Full-time residences',
  'Cabins',
  'Vacation homes',
  'Airbnb and rental properties',
  'Seasonal cleanings',
  'Move-in / move-out cleanings',
] as const

export default function WindowCleaningPinetopShowLowPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://arizonawindowwashingpros.com' },
    {
      name: 'Window Cleaning Pinetop & Show Low',
      url: `https://arizonawindowwashingpros.com${PINETOP_CONFIG.seoPath}`,
    },
  ])

  const faqSchema = generateFAQSchema([...PINETOP_SEO_FAQS])

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
        title="Window Cleaning In Pinetop, Show Low & The White Mountains"
        subtitle="Arizona Window Washing Pros provides professional window cleaning for homes, cabins, vacation properties, rentals, and full-time residences throughout Pinetop-Lakeside, Show Low, and nearby areas."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact-form" className="btn-primary text-lg">
            Get a Free Quote
          </a>
          <ClickToCall eventLabel={PINETOP_CONFIG.seoCallEvent} className="btn-secondary text-lg bg-white text-primary-600 border-2 border-white hover:bg-primary-50">
            Call Now
          </ClickToCall>
        </div>
      </HeroVideo>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Professional Window Cleaning For Mountain Homes &amp; Cabins
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
            Homes in the White Mountains deal with dust, pollen, weather, fingerprints, hard water, and dirty
            screens. Our window cleaning service helps your glass look clearer, your home feel brighter, and your
            property look better maintained — whether you need{' '}
            <strong>window cleaning Pinetop</strong> homeowners rely on or{' '}
            <strong>Show Low window washing</strong> for a rental between guests.
          </p>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {INTRO_MENTIONS.map((item) => (
              <li key={item} className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-800">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-600 text-xs font-bold text-white">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Pinetop &amp; Show Low Window Cleaning Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full" />
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              From <strong>exterior window cleaning Pinetop</strong> cabins to{' '}
              <strong>interior window cleaning Show Low</strong> homes, we tailor each visit to your property.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PINETOP_SEO_SERVICES.map((service) => (
              <article key={service.title} className="card p-6 h-full">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{service.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 text-center text-gray-600">
            Explore our{' '}
            <Link href="/services/exterior-window-cleaning" className="text-primary-600 font-semibold hover:underline">
              exterior window cleaning
            </Link>
            ,{' '}
            <Link href="/services/interior-window-cleaning" className="text-primary-600 font-semibold hover:underline">
              interior window cleaning
            </Link>
            , and{' '}
            <Link href="/services/screen-cleaning" className="text-primary-600 font-semibold hover:underline">
              screen cleaning
            </Link>{' '}
            services for more details.
          </p>
        </div>
      </section>

      <section className="section-padding bg-blue-50">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Purified Water Exterior Window Cleaning
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <DeionizedWaterTankCard />
            <div className="bg-white rounded-2xl p-8 border-2 border-blue-100 shadow-xl">
              <p className="text-gray-700 leading-relaxed mb-6">
                Our DI / RO water-fed pole system uses purified water to help clean exterior glass with fewer spots
                and no harsh residue. This is especially helpful for exterior windows, second-story glass, and
                hard-to-reach windows on mountain homes and cabins throughout the{' '}
                <strong>White Mountains window cleaning</strong> area.
              </p>
              <ul className="grid gap-2 sm:grid-cols-2">
                {DI_RO_BENEFITS.map((b) => (
                  <li key={b} className="rounded-lg bg-blue-50 border border-blue-200 px-3 py-2 text-sm font-semibold text-gray-800">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Window Cleaning Service Areas
          </h2>
          <p className="text-gray-700 text-center max-w-2xl mx-auto mb-8">
            We serve <strong>Pinetop window cleaners</strong> and Show Low area homeowners across these communities.
            If you are near Pinetop or Show Low and are not sure if we service your area, contact us and we&apos;ll
            let you know.
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {PINETOP_SERVICE_AREAS.map((area) => (
              <li key={area} className="card text-center p-4 font-semibold text-primary-700">
                {area}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-gray-600">
            Dedicated local pages:{' '}
            <Link href="/window-cleaning-pinetop-lakeside-az" className="text-primary-600 font-semibold hover:underline">
              Pinetop-Lakeside window cleaning
            </Link>
            ,{' '}
            <Link href="/window-cleaning-show-low-az" className="text-primary-600 font-semibold hover:underline">
              window cleaning in Show Low
            </Link>
            , and{' '}
            <Link href="/window-cleaning-snowflake-az" className="text-primary-600 font-semibold hover:underline">
              Snowflake window cleaning
            </Link>
            . Also serving the greater Phoenix metro. See our{' '}
            <Link href="/locations" className="text-primary-600 font-semibold hover:underline">
              service areas
            </Link>{' '}
            page for East Valley locations.
          </p>
        </div>
      </section>

      <section className="section-padding bg-emerald-50 border-y border-emerald-100">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ask About Our Free Screen Cleaning Offer
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            For a limited time, we are offering free screen cleaning with window cleaning appointments in the Pinetop
            and Show Low area. Screens collect dust and debris, and cleaning them helps your freshly cleaned windows
            look even better. Mention the offer when you request your quote.
          </p>
          <a href="#contact-form" className="btn-primary inline-block mt-8">
            Get a Free Quote
          </a>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Why Homeowners Choose Arizona Window Washing Pros
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {WHY_CHOOSE_US.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 text-white text-sm font-bold">
                  ✓
                </span>
                <span className="text-gray-700 font-medium pt-0.5">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-6xl">
          <GoogleReviewsSlider compact={false} />
        </div>
      </section>

      <FAQSection faqs={[...PINETOP_SEO_FAQS]} />

      <section className="section-padding bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Schedule Window Cleaning In Pinetop Or Show Low
          </h2>
          <p className="text-lg text-primary-100 mb-8">
            Get a free quote from Arizona Window Washing Pros and keep your windows looking clean, clear, and
            bright — perfect for <strong>cabin window cleaning Pinetop</strong> getaways and{' '}
            <strong>vacation home window cleaning Show Low</strong> properties alike.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact-form" className="btn-primary bg-white text-primary-700 hover:bg-primary-50">
              Get a Free Quote
            </a>
            <ClickToCall
              eventLabel={`${PINETOP_CONFIG.seoCallEvent}_final`}
              className="btn-secondary border-2 border-white text-white hover:bg-white/10"
            >
              Call Now
            </ClickToCall>
          </div>
        </div>
      </section>

      <section id="contact-form" className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <ContactForm defaultCity="Pinetop" defaultService="Window Cleaning" />
        </div>
      </section>
    </>
  )
}
