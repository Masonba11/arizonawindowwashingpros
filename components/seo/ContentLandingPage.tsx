import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import FAQSection from '@/components/FAQSection'
import HeroVideo from '@/components/HeroVideo'
import ClickToCall from '@/components/ClickToCall'
import { BUSINESS_INFO } from '@/lib/constants'
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateServiceSchema,
  generateMetadata,
} from '@/lib/seo'
import type { Metadata } from 'next'

export type SeoFaq = { question: string; answer: string }

export type SeoSection = {
  heading: string
  paragraphs: string[]
  bullets?: string[]
}

export type SeoLink = { label: string; href: string }

export type ContentLandingConfig = {
  path: string
  title: string
  description: string
  h1: string
  heroSubtitle: string
  breadcrumbName: string
  defaultCity?: string
  defaultService?: string
  callEventLabel: string
  intro: string[]
  sections: SeoSection[]
  included?: string[]
  faqs: SeoFaq[]
  finalCtaHeading: string
  finalCtaCopy: string
  relatedLinks: SeoLink[]
  serviceSchemaName?: string
  showForm?: boolean
}

export function generateContentLandingMetadata(config: ContentLandingConfig): Metadata {
  return generateMetadata({
    title: config.title,
    description: config.description,
    path: config.path,
  })
}

export default function ContentLandingPage({ config }: { config: ContentLandingConfig }) {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: BUSINESS_INFO.website },
    { name: config.breadcrumbName, url: `${BUSINESS_INFO.website}${config.path}` },
  ])
  const faqSchema = generateFAQSchema(config.faqs)
  const serviceSchema = config.serviceSchemaName
    ? generateServiceSchema(
        config.serviceSchemaName,
        config.description,
        `${BUSINESS_INFO.website}${config.path}`
      )
    : null

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
      {serviceSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      )}

      <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-100">
        <div className="container-custom py-3 text-sm text-gray-600">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-primary-600">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-gray-900 font-medium" aria-current="page">
              {config.breadcrumbName}
            </li>
          </ol>
        </div>
      </nav>

      <HeroVideo title={config.h1} subtitle={config.heroSubtitle}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact-form" className="btn-primary text-lg">
            Request a Free Estimate
          </a>
          <ClickToCall
            eventLabel={config.callEventLabel}
            className="btn-secondary text-lg bg-white text-primary-600 border-2 border-white hover:bg-primary-50"
          >
            Call {BUSINESS_INFO.phone}
          </ClickToCall>
        </div>
      </HeroVideo>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          {config.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="text-lg text-gray-700 leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <a href="#contact-form" className="btn-primary text-center">
              Get a Window Cleaning Quote
            </a>
            <ClickToCall
              eventLabel={`${config.callEventLabel}_intro`}
              className="btn-secondary text-center"
            >
              Call Arizona Window Washing Pros
            </ClickToCall>
          </div>
        </div>
      </section>

      {config.sections.map((section) => (
        <section key={section.heading} className="section-padding bg-gray-50 even:bg-white">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-gray-700 leading-relaxed mb-5 text-lg">
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

      {config.included && config.included.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Is Included</h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {config.included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-primary-600 text-[10px] font-bold text-white">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {config.relatedLinks.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Pages</h2>
            <ul className="flex flex-wrap gap-3">
              {config.relatedLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block rounded-lg border border-primary-200 bg-white px-4 py-2 text-sm font-semibold text-primary-700 hover:bg-primary-50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <FAQSection faqs={config.faqs} />

      <section className="section-padding bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{config.finalCtaHeading}</h2>
          <p className="text-lg text-primary-100 mb-8">{config.finalCtaCopy}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact-form" className="btn-primary bg-white text-primary-700 hover:bg-primary-50">
              Request a Free Estimate
            </a>
            <ClickToCall
              eventLabel={`${config.callEventLabel}_final`}
              className="btn-secondary border-2 border-white text-white hover:bg-white/10"
            >
              Call {BUSINESS_INFO.phone}
            </ClickToCall>
          </div>
        </div>
      </section>

      {(config.showForm ?? true) && (
        <section id="contact-form" className="section-padding bg-white">
          <div className="container-custom max-w-5xl">
            <ContactForm
              defaultCity={config.defaultCity}
              defaultService={config.defaultService || config.serviceSchemaName}
            />
          </div>
        </section>
      )}
    </>
  )
}
