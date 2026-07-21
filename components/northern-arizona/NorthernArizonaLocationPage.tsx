import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import FAQSection from '@/components/FAQSection'
import GoogleReviewsSlider from '@/components/GoogleReviewsSlider'
import HeroVideo from '@/components/HeroVideo'
import ClickToCall from '@/components/ClickToCall'
import { BUSINESS_INFO } from '@/lib/constants'
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
} from '@/lib/seo'
import {
  generateNorthernAzServiceSchema,
  type NorthernAzCityPage,
} from '@/lib/northernArizona'

export default function NorthernArizonaLocationPage({ city }: { city: NorthernAzCityPage }) {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: BUSINESS_INFO.website },
    { name: 'Locations', url: `${BUSINESS_INFO.website}/locations` },
    {
      name: `Window Cleaning ${city.cityName}`,
      url: `${BUSINESS_INFO.website}${city.path}`,
    },
  ])

  const faqSchema = generateFAQSchema(city.faqs)
  const serviceSchema = generateNorthernAzServiceSchema(city)

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

      <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-100">
        <div className="container-custom py-3 text-sm text-gray-600">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-primary-600">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/locations" className="hover:text-primary-600">
                Locations
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-gray-900 font-medium" aria-current="page">
              {city.cityName}
            </li>
          </ol>
        </div>
      </nav>

      <HeroVideo title={city.h1} subtitle={city.heroSubtitle}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact-form" className="btn-primary text-lg">
            Request a Free Quote
          </a>
          <ClickToCall
            eventLabel={city.callEventLabel}
            className="btn-secondary text-lg bg-white text-primary-600 border-2 border-white hover:bg-primary-50"
          >
            Call {BUSINESS_INFO.phone}
          </ClickToCall>
        </div>
      </HeroVideo>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          {city.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="text-lg text-gray-700 leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <a href="#contact-form" className="btn-primary text-center">
              Get a Free Quote
            </a>
            <ClickToCall
              eventLabel={`${city.callEventLabel}_intro`}
              className="btn-secondary text-center"
            >
              Call Now
            </ClickToCall>
          </div>
        </div>
      </section>

      {city.sections.map((section) => (
        <section key={section.heading} className="section-padding bg-gray-50 even:bg-white">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="text-gray-700 leading-relaxed mb-5 text-lg">
                {paragraph}
              </p>
            ))}
            {section.bullets && (
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {section.bullets.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-800"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-600 text-xs font-bold text-white">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Services Included With Your Quote
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {city.included.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-primary-600 text-[10px] font-bold text-white">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-gray-700 leading-relaxed">
            Explore related services:{' '}
            {city.serviceLinks.map((link, index) => (
              <span key={link.href}>
                <Link href={link.href} className="text-primary-600 font-semibold hover:underline">
                  {link.label}
                </Link>
                {index < city.serviceLinks.length - 2 ? ', ' : index === city.serviceLinks.length - 2 ? ', and ' : '.'}
              </span>
            ))}
          </p>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-6xl">
          <GoogleReviewsSlider compact={false} />
        </div>
      </section>

      <FAQSection
        faqs={city.faqs}
        title={`${city.cityName} Window Cleaning FAQs`}
      />

      <section className="section-padding bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{city.finalCtaHeading}</h2>
          <p className="text-lg text-primary-100 mb-8">{city.finalCtaCopy}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact-form"
              className="btn-primary bg-white text-primary-700 hover:bg-primary-50"
            >
              Request a Free Quote
            </a>
            <ClickToCall
              eventLabel={`${city.callEventLabel}_final`}
              className="btn-secondary border-2 border-white text-white hover:bg-white/10"
            >
              Call {BUSINESS_INFO.phone}
            </ClickToCall>
          </div>
          <p className="mt-8 text-sm text-primary-100">
            Also serving{' '}
            {city.relatedCities.map((related, index) => (
              <span key={related.href}>
                <Link href={related.href} className="underline hover:text-white font-semibold">
                  {related.label}
                </Link>
                {index < city.relatedCities.length - 1 ? ' and ' : '.'}
              </span>
            ))}
          </p>
        </div>
      </section>

      <section id="contact-form" className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <ContactForm defaultCity={city.defaultCity} defaultService="Window Cleaning" />
        </div>
      </section>
    </>
  )
}
