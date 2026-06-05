import PinetopAdForm from './PinetopAdForm'
import PinetopAdHeader from './PinetopAdHeader'
import PinetopReviewsSection from './PinetopReviewsSection'
import ClickToCall from '@/components/ClickToCall'
import {
  DI_RO_BENEFITS,
  PINETOP_AD_FAQS,
  PINETOP_AD_SERVICES,
  PINETOP_ANCHOR_SCROLL,
  PINETOP_CONFIG,
  PINETOP_SERVICE_AREAS,
} from '@/lib/pinetopShowLow'

const TRUST_BADGES = [
  'Rated 5 Stars',
  'Fully Insured',
  'Professional DI / RO Water System',
  'Free Screen Cleaning Limited-Time Offer',
] as const

const OFFER_BULLETS = [
  'Free screen cleaning with window cleaning',
  'Interior and exterior options available',
  'Glass, tracks, sills, frames, and screens',
  'Great for cabins, vacation homes, rentals, and full-time homes',
] as const

function Section({
  id,
  className = 'bg-white',
  children,
}: {
  id?: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className={`py-12 sm:py-16 ${PINETOP_ANCHOR_SCROLL} ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">{children}</div>
    </section>
  )
}

export default function PinetopAdLanding() {
  const quote = PINETOP_CONFIG.formAnchor
  const tel = `tel:${PINETOP_CONFIG.phoneFormatted}`

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <PinetopAdHeader />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_0%,rgba(16,185,129,0.15),transparent_55%)]" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-4 pb-10 pt-[5.5rem] sm:px-6 sm:pb-14 sm:pt-[6rem]">
          <div className="mb-4 inline-flex rounded-full border border-emerald-400/40 bg-emerald-500/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-emerald-100">
            Limited-time White Mountains offer
          </div>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
            <div>
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
                Pinetop &amp; Show Low Window Cleaning — Free Screen Cleaning Included
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg">
                Professional interior and exterior window cleaning for homes, cabins, rentals, and vacation
                properties in the White Mountains.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {TRUST_BADGES.map((b) => (
                  <li
                    key={b}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm"
                  >
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={quote}
                  className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-emerald-500 px-8 py-4 text-center text-base font-bold text-white shadow-lg transition hover:bg-emerald-400"
                >
                  Get My Free Quote
                </a>
                <ClickToCall
                  eventLabel={PINETOP_CONFIG.adCallEvent}
                  className="inline-flex min-h-[52px] items-center justify-center rounded-xl border-2 border-white bg-white/10 px-8 py-4 text-center text-base font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  Call Now
                </ClickToCall>
              </div>
            </div>
            <div className="lg:sticky lg:top-28">
              <PinetopAdForm />
            </div>
          </div>
        </div>
      </section>

      <Section className="border-b border-emerald-100 bg-emerald-50">
        <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
          Limited-Time Offer For Pinetop &amp; Show Low Residents
        </h2>
        <p className="mt-4 max-w-3xl text-slate-700 leading-relaxed">
          Book a window cleaning service and we&apos;ll include screen cleaning for free. Dirty screens can make
          clean windows still look dusty, so this helps your whole home look brighter and cleaner.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {OFFER_BULLETS.map((b) => (
            <li key={b} className="flex items-start gap-3 rounded-xl border border-emerald-200 bg-white p-4 text-sm font-medium text-slate-800">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">✓</span>
              {b}
            </li>
          ))}
        </ul>
      </Section>

      <Section className="bg-white">
        <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">Professional DI / RO Water-Fed Pole Cleaning</h2>
        <p className="mt-4 max-w-3xl text-slate-600 leading-relaxed">
          For exterior windows, we use a professional DI / RO purified water system. This helps remove minerals
          from the water so windows dry cleaner with fewer spots. It also lets us safely clean many exterior and
          hard-to-reach windows from the ground.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {DI_RO_BENEFITS.map((b) => (
            <li key={b} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800">{b}</li>
          ))}
        </ul>
      </Section>

      <Section id="services" className="bg-slate-50">
        <h2 className="text-center text-2xl font-extrabold text-slate-900 sm:text-3xl">Our Services</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PINETOP_AD_SERVICES.map((s) => (
            <article key={s.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-bold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
          Serving Pinetop, Show Low &amp; Nearby White Mountains Areas
        </h2>
        <p className="mt-4 max-w-3xl text-slate-600">
          We are now booking window cleaning in Pinetop-Lakeside, Show Low, Lakeside, White Mountain, Taylor,
          Snowflake, Heber-Overgaard, and nearby communities.
        </p>
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {PINETOP_SERVICE_AREAS.map((area) => (
            <li key={area} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-center text-sm font-semibold text-slate-800">{area}</li>
          ))}
        </ul>
      </Section>

      <PinetopReviewsSection />

      <Section className="bg-slate-50">
        <h2 className="text-center text-2xl font-extrabold text-slate-900 sm:text-3xl">FAQ</h2>
        <dl className="mx-auto mt-10 max-w-3xl divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-sm">
          {PINETOP_AD_FAQS.map((faq) => (
            <div key={faq.question} className="p-5 sm:p-6">
              <dt className="font-bold text-slate-900">{faq.question}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-slate-600">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section className="bg-gradient-to-br from-emerald-900 via-slate-900 to-slate-950 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold sm:text-3xl">Get Cleaner Windows In Pinetop Or Show Low</h2>
          <p className="mt-4 text-slate-300">Request a free quote today and ask about our free screen cleaning offer.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={quote} className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-emerald-500 px-8 py-4 font-bold text-white transition hover:bg-emerald-400">Get My Free Quote</a>
            <ClickToCall eventLabel={`${PINETOP_CONFIG.adCallEvent}_final`} className="inline-flex min-h-[52px] items-center justify-center rounded-xl border-2 border-white px-8 py-4 font-bold text-white transition hover:bg-white/10">Call Now</ClickToCall>
          </div>
          <p className="mt-6 font-bold"><a href={tel} className="hover:text-emerald-300">{PINETOP_CONFIG.phone}</a></p>
        </div>
      </Section>

      <footer className="border-t border-slate-200 bg-white py-8 text-center text-sm text-slate-600">
        <p className="font-bold text-slate-900">{PINETOP_CONFIG.name}</p>
        <p className="mt-1"><a href={tel} className="font-semibold text-emerald-700 hover:underline">{PINETOP_CONFIG.phone}</a></p>
        <p className="mt-2 text-xs">Pinetop · Show Low · Lakeside · White Mountains · Fully insured</p>
        <p className="mt-3"><a href="/privacy-policy" className="text-xs text-slate-500 hover:underline">Privacy Policy</a></p>
      </footer>
    </div>
  )
}
