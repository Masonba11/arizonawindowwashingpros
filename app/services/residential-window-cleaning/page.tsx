import Link from 'next/link'
import { BUSINESS_INFO, LOCATIONS, getLocationHref } from '@/lib/constants'
import ContactForm from '@/components/ContactForm'
import FAQSection from '@/components/FAQSection'
import GoogleReviewsSlider from '@/components/GoogleReviewsSlider'
import HeroVideo from '@/components/HeroVideo'
import { generateServiceMetadata } from '@/lib/serviceSEO'
import { generateBreadcrumbSchema, generateFAQSchema, generateServiceSchema } from '@/lib/seo'
import { NORTHERN_AZ_PATHS } from '@/lib/northernArizona'

export const metadata = generateServiceMetadata('residential-window-cleaning')

const faqs = [
  {
    question: 'What is included in residential window cleaning?',
    answer:
      'Residential window cleaning typically includes exterior glass cleaning. Interior cleaning, screen cleaning, and track, sill, or frame detailing can be added based on your quote.',
  },
  {
    question: 'Do you clean interior and exterior windows?',
    answer:
      'Yes. We offer exterior-only, interior-only, and combined interior and exterior cleaning for homes.',
  },
  {
    question: 'Can I add screen and track cleaning?',
    answer:
      'Yes. Screen cleaning and track, sill, and frame cleaning are available as part of a more detailed residential visit.',
  },
  {
    question: 'Do you clean cabins and vacation homes?',
    answer:
      'Yes. We clean full-time residences, cabins, vacation homes, and rentals in the communities we serve.',
  },
  {
    question: 'How do I get a residential estimate?',
    answer:
      'Call or text (480) 737-0850, or submit the quote form on this page with your city and service needs.',
  },
]

export default function ResidentialWindowCleaningPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: BUSINESS_INFO.website },
    { name: 'Services', url: `${BUSINESS_INFO.website}/services` },
    {
      name: 'Residential Window Cleaning',
      url: `${BUSINESS_INFO.website}/services/residential-window-cleaning`,
    },
  ])
  const faqSchema = generateFAQSchema(faqs)
  const serviceSchema = generateServiceSchema(
    'Residential Window Cleaning',
    'Complete residential window cleaning for Arizona homes, including interior, exterior, screens, tracks, and frames.',
    `${BUSINESS_INFO.website}/services/residential-window-cleaning`
  )

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <HeroVideo
        title="Residential Window Cleaning"
        subtitle="Professional interior and exterior window cleaning for Arizona homes, cabins, and vacation properties."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`tel:${BUSINESS_INFO.phoneFormatted}`} className="btn-primary text-lg">
            Call Now: {BUSINESS_INFO.phone}
          </a>
          <a
            href="#contact-form"
            className="btn-secondary text-lg bg-white text-primary-600 border-2 border-white hover:bg-primary-50"
          >
            Get Free Quote
          </a>
        </div>
      </HeroVideo>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Residential window cleaning from Arizona Window Washing Pros helps homes look brighter and better
            maintained. We clean exterior glass, offer interior detailing when requested, and can include screens,
            tracks, sills, and frames as part of a complete residential visit.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Homeowners book us for routine maintenance, seasonal refreshes, move-in or move-out cleanings, and
            vacation-home preparation. Explore related options like{' '}
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
            </Link>
            .
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">What Residential Service Can Include</h2>
          <ul className="grid gap-3 sm:grid-cols-2 mb-8">
            {[
              'Exterior window glass cleaning',
              'Interior window detailing',
              'Screen cleaning',
              'Track and sill cleaning',
              'Frame wipe-down',
              'Homes, cabins, and vacation properties',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-primary-600 text-[10px] font-bold text-white">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
          <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">Where We Provide Residential Service</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We serve Pinetop, Lakeside, Show Low, and Snowflake, including{' '}
            <Link href={NORTHERN_AZ_PATHS.pinetopLakeside} className="text-primary-600 font-semibold hover:underline">
              Pinetop-Lakeside window cleaning
            </Link>
            ,{' '}
            <Link href={NORTHERN_AZ_PATHS.showLow} className="text-primary-600 font-semibold hover:underline">
              window cleaning in Show Low
            </Link>
            , and{' '}
            <Link href={NORTHERN_AZ_PATHS.snowflake} className="text-primary-600 font-semibold hover:underline">
              Snowflake window cleaning services
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-6xl">
          <GoogleReviewsSlider compact={false} />
        </div>
      </section>

      <FAQSection faqs={faqs} title="Residential Window Cleaning FAQs" />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Service Areas</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {LOCATIONS.map((location) => (
              <Link
                key={location.id}
                href={getLocationHref(location)}
                className="card card-hover text-center p-4"
              >
                <span className="text-primary-600 font-semibold">{location.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="contact-form" className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <ContactForm defaultService="Residential Window Cleaning" />
        </div>
      </section>
    </>
  )
}
