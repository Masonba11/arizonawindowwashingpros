import Image from 'next/image'
import type { AdLandingCityConfig } from '@/lib/adLandingConfig'
import { buildAdLandingFaqs } from '@/lib/adLandingConfig'
import { BUSINESS_INFO, SITE_HERO_IMAGE } from '@/lib/constants'
import ClickToCall from '@/components/ClickToCall'
import AdLandingForm from './AdLandingForm'
import AdLandingStickyCall from './AdLandingStickyCall'

/** Local asset — avoids remote image optimization (common 500 source on some hosts). */
const HERO_IMAGE = SITE_HERO_IMAGE

const SERVICE_AREA_CITIES = [
  'Gilbert',
  'Chandler',
  'Queen Creek',
  'Mesa',
  'Scottsdale',
  'Tempe',
] as const

function StarRow() {
  return (
    <div className="flex items-center gap-1 text-amber-400" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
          <path d="M10 1.5l2.6 5.3 5.8.8-4.2 4.1 1 5.7L10 15.9 4.8 17.4l1-5.7-4.2-4.1 5.8-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  )
}

function testimonialsForCity(city: string) {
  return [
    {
      name: 'Sarah K.',
      line: `${city} homeowner`,
      quote: `We had Arizona Window Washing Pros out after monsoon season — every pane is crystal clear. Crew was on time, careful with our landscaping, and the price matched the quote.`,
    },
    {
      name: 'Mike & Jen R.',
      line: 'East Valley',
      quote: `Two-story home with tricky high windows — no problem. They handled screens and tracks when we asked. Feels like a premium service without the attitude.`,
    },
    {
      name: 'David L.',
      line: `Near ${city}`,
      quote: `Easy to book, texted when they were on the way, and finished faster than I expected. Already scheduled our next visit.`,
    },
  ]
}

const trustItems = [
  {
    title: 'Streak-free finish',
    body: 'Hand-finished glass and frames so your views look sharp — not smeared.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.847a4.5 4.5 0 003.09 3.09L15.75 12l-2.847.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423L16.5 15.75l.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
      />
    ),
  },
  {
    title: 'Licensed & insured',
    body: 'Professional crews, proper equipment, and peace of mind on every job.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      />
    ),
  },
  {
    title: 'Local East Valley',
    body: 'We live and work here — Gilbert to Scottsdale, Tempe to Queen Creek.',
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </>
    ),
  },
  {
    title: 'Easy scheduling',
    body: 'Tell us what you need — we’ll confirm a time that fits your week.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5a2.25 2.25 0 002.25-2.25m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5a2.25 2.25 0 012.25 2.25v7.5"
      />
    ),
  },
]

const whyItems = [
  { title: 'Professional results', body: 'Detail-driven cleaning that shows from the curb and from your couch.' },
  { title: 'Reliable scheduling', body: 'Clear arrival windows and communication — no guessing games.' },
  { title: 'Friendly service', body: 'Respectful of your home, pets, and neighbors every visit.' },
  { title: 'Residential specialists', body: 'Homes are our focus — not strip malls or high-rises.' },
  { title: 'Hard-to-reach windows', body: 'Two stories, transoms, and awkward angles handled safely.' },
  { title: 'Screens & tracks', body: 'Add screens and track cleaning when you want the full refresh.' },
]

const processSteps = [
  { step: '1', title: 'Request a quote', body: 'Call or send the short form — we’ll confirm scope and pricing.' },
  { step: '2', title: 'Schedule service', body: 'Pick a day that works. We’ll show up ready to work.' },
  { step: '3', title: 'Enjoy clean windows', body: 'More light, better views, and one less chore on your list.' },
]

function IconWrap({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        {children}
      </svg>
    </div>
  )
}

export default function AdLandingPage({ config }: { config: AdLandingCityConfig }) {
  const { city, formCity, areaNote, callEventLabel } = config
  const faqs = buildAdLandingFaqs(city)
  const testimonials = testimonialsForCity(city)

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900 pb-[5.5rem] md:pb-0">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <Image
            src={HERO_IMAGE}
            alt="Arizona home with bright, clean windows"
            fill
            className="object-cover opacity-40"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 pt-10 pb-14 sm:pt-14 sm:pb-16 lg:py-20">
          <p className="text-center text-blue-200/90 text-xs font-semibold tracking-wide uppercase mb-3">
            {BUSINESS_INFO.name}
          </p>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-extrabold text-white leading-tight tracking-tight">
                Streak-free windows for {city} homes — trusted local pros
              </h1>
              <p className="mt-4 text-lg text-slate-200 leading-relaxed max-w-xl">
                Free, no-pressure quote for professional window cleaning. Serving {city} and the East Valley
                {areaNote ? ` (${areaNote})` : ''}.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm border border-white/10">
                  <StarRow />
                  <span className="text-sm text-white font-medium">5-star service</span>
                </div>
                <span className="text-slate-300 text-sm">Local homeowners • Insured crew</span>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#ad-quote-form"
                  className="inline-flex justify-center rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-bold px-8 py-4 text-center shadow-lg shadow-blue-900/30 transition"
                >
                  Get a Free Quote
                </a>
                <ClickToCall
                  eventLabel={callEventLabel}
                  className="inline-flex justify-center rounded-xl border-2 border-white/80 text-white font-bold px-8 py-4 text-center hover:bg-white/10 transition"
                >
                  Call {BUSINESS_INFO.phone}
                </ClickToCall>
              </div>
            </div>
            <div className="lg:pt-2">
              <AdLandingForm city={formCity} />
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="max-w-6xl mx-auto px-4 -mt-6 relative z-10">
        <div className="rounded-3xl bg-white shadow-xl shadow-slate-200/60 border border-slate-100 p-6 sm:p-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustItems.map((item) => (
              <div key={item.title} className="flex gap-4">
                <IconWrap>{item.icon}</IconWrap>
                <div>
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-1 text-sm text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-4 py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-900 mb-2">
          What neighbors say
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
          Real feedback from homeowners across the East Valley.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="rounded-2xl bg-white border border-slate-100 p-6 shadow-md shadow-slate-200/40"
            >
              <StarRow />
              <p className="mt-4 text-gray-700 text-sm leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-5 pt-4 border-t border-slate-100">
                <p className="font-bold text-gray-900">{t.name}</p>
                <p className="text-xs text-gray-500">{t.line}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="bg-white border-y border-slate-100 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-900 mb-2">
            Why choose us
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-lg mx-auto">
            Built for busy homeowners who want it done right the first time.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyItems.map((w) => (
              <div
                key={w.title}
                className="rounded-2xl border border-slate-100 bg-slate-50/80 p-6 hover:shadow-md transition-shadow"
              >
                <div className="h-1.5 w-10 rounded-full bg-blue-500 mb-4" />
                <h3 className="font-bold text-gray-900">{w.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process + CTA strip */}
      <section className="max-w-6xl mx-auto px-4 py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-900 mb-12">
          Simple from start to finish
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {processSteps.map((s) => (
            <div key={s.step} className="text-center md:text-left">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-extrabold text-lg mb-4">
                {s.step}
              </div>
              <h3 className="font-bold text-lg text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="rounded-3xl bg-blue-600 px-6 py-10 sm:px-12 text-center shadow-xl shadow-blue-600/20">
          <p className="text-white/90 text-sm font-medium uppercase tracking-wide mb-2">Ready in {city}?</p>
          <p className="text-white text-xl sm:text-2xl font-extrabold mb-6">
            Get your free quote — we&apos;ll text or call with pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#ad-quote-form"
              className="inline-flex justify-center rounded-xl bg-white text-blue-700 font-bold px-8 py-4 hover:bg-slate-50 transition"
            >
              Get a Free Quote
            </a>
            <ClickToCall
              eventLabel={`${callEventLabel}_mid`}
              className="inline-flex justify-center rounded-xl border-2 border-white text-white font-bold px-8 py-4 hover:bg-white/10 transition"
            >
              Call {BUSINESS_INFO.phone}
            </ClickToCall>
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="bg-slate-100/80 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-900 mb-4">
            Areas we serve
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
            Local routes across the East Valley — including {city} and nearby communities.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {SERVICE_AREA_CITIES.map((c) => (
              <span
                key={c}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold border ${
                  c === city
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-800 border-slate-200 shadow-sm'
                }`}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-900 mb-10">
          Common questions
        </h2>
        <div className="space-y-3">
          {faqs.map((f) => (
            <details
              key={f.question}
              className="group rounded-2xl border border-slate-200 bg-white px-5 py-1 shadow-sm open:shadow-md transition-shadow"
            >
              <summary className="cursor-pointer list-none py-4 font-bold text-gray-900 flex justify-between items-center gap-4">
                {f.question}
                <span className="text-blue-600 text-xl leading-none group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="pb-5 text-sm text-gray-600 leading-relaxed border-t border-slate-100 pt-4">
                {f.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-10 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-bold text-gray-900">{BUSINESS_INFO.name}</p>
          <p className="mt-2 text-gray-600 text-sm">
            <ClickToCall eventLabel={`${callEventLabel}_footer`} className="text-blue-600 font-semibold hover:underline">
              {BUSINESS_INFO.phone}
            </ClickToCall>
          </p>
          <p className="mt-4 text-xs text-gray-500 max-w-md mx-auto leading-relaxed">
            Gilbert, Chandler, Queen Creek, Mesa, Scottsdale, Tempe &amp; surrounding East Valley.
          </p>
        </div>
      </footer>

      <AdLandingStickyCall eventLabel={callEventLabel} />
    </div>
  )
}
