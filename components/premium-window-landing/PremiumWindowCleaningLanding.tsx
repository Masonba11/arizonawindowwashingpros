'use client'

import { motion } from 'framer-motion'
import PremiumLandingHeader, { PremiumHeroBackground, StarBurst } from './PremiumLandingHeader'
import PremiumQuoteForm from './PremiumQuoteForm'
import PremiumStickyBar from './PremiumStickyBar'
import PremiumLandingVideo from './PremiumLandingVideo'
import { FadeSection } from './motion'
import type { PremiumWindowCleaningConfig } from '@/lib/premiumWindowCleaningAds'
import { BUSINESS_INFO } from '@/lib/constants'
import ClickToCall from '@/components/ClickToCall'
import GoogleReviewsSlider from '@/components/GoogleReviewsSlider'
import { trackCallClick } from '@/lib/callTracking'

const trustPills = [
  'Fully insured',
  'Spot-free RO/DI system',
  'Fast free quotes',
  'Residential & commercial',
  '5-star rated',
]

const services: {
  title: string
  body: string
  d: string
}[] = [
  {
    title: 'Residential Window Cleaning',
    body: 'Homes of every size — careful crews, respectful of your property.',
    d: 'M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25',
  },
  {
    title: 'Commercial Window Cleaning',
    body: 'Storefronts, offices, and multi-tenant buildings on recurring routes.',
    d: 'M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6.75h1.5m-1.5 3h1.5m-1.5 3h1.5M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21',
  },
  {
    title: 'Interior Window Cleaning',
    body: 'Smudge-free inside glass — ideal before guests or listing photos.',
    d: 'M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0v.75a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 6v-.75',
  },
  {
    title: 'Exterior Window Cleaning',
    body: 'Hand-finished exteriors that stay cleaner-looking after Arizona dust.',
    d: 'M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z',
  },
  {
    title: 'Screen Cleaning',
    body: 'Professional-grade tools and cleaners — dust and pollen out, airflow and clarity in.',
    d: 'M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5',
  },
  {
    title: 'Track Cleaning',
    body: 'Tracks and sills where grime hides — included when you add the package.',
    d: 'M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z',
  },
  {
    title: 'Hard Water Removal',
    body: 'Target mineral buildup from sprinklers and hard Valley water.',
    d: 'M12 3v17.25m0 0l-3-3m3 3l3-3M6.75 8.25h.008v.008H6.75V8.25zm0 4.5h.008v.008H6.75v-.008zm0 4.5h.008v.008H6.75v-.008zm6.75-9h.008v.008h-.008V8.25zm0 4.5h.008v.008h-.008v-.008zm0 4.5h.008v.008h-.008v-.008z',
  },
  {
    title: 'Recurring Maintenance Plans',
    body: 'Set-it-and-forget-it scheduling for homes and commercial glass.',
    d: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5a2.25 2.25 0 002.25-2.25m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5a2.25 2.25 0 012.25 2.25v7.5',
  },
]

const processSteps = [
  { n: '1', title: 'Request a Free Quote', body: 'Call or send the form — we confirm scope fast.' },
  { n: '2', title: 'Schedule Your Cleaning', body: 'Pick a time that works. We arrive ready to work.' },
  { n: '3', title: 'Enjoy Spot-Free Windows', body: 'More light, sharper curb appeal, zero hassle.' },
]

const LP_VIDEOS = {
  rodi: '/landing-videos/danewaterfedpolesystem.mp4',
  screen: '/landing-videos/danescreencleaner.mp4',
  squeegee: '/landing-videos/chansquegge.mp4',
} as const

export default function PremiumWindowCleaningLanding({
  config,
}: {
  config: PremiumWindowCleaningConfig
}) {
  const { city, formCity, headline, subheadline, heroAudienceLines, rodiBullets, serviceIntro, testimonials, callEventLabel } =
    config
  const formConversion = `premium_lp_${city.toLowerCase().replace(/\s+/g, '_')}_quote`

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-28 md:pb-0">
      <PremiumLandingHeader callEventLabel={callEventLabel} />

      {/* Hero */}
      <section className="relative pt-[4.5rem] sm:pt-20 overflow-hidden">
        <PremiumHeroBackground />
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14 lg:items-start">
            <div className="lg:order-1 lg:col-start-1">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200/90 mb-3">
                  {BUSINESS_INFO.name}
                </p>
                <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.65rem]">
                  {headline}
                </h1>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-200/95">{subheadline}</p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <StarBurst />
                  <span className="text-sm font-semibold text-white">Trusted by Arizona homeowners & businesses</span>
                </div>
                <ul className="mt-6 space-y-2.5 text-sm text-slate-200/90">
                  {heroAudienceLines.map((line) => (
                    <li key={line} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                      {line}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {trustPills.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <motion.a
                    href="#premium-quote-top"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-blue-400 px-8 py-4 text-center text-base font-bold text-white shadow-xl shadow-blue-950/40"
                  >
                    Get free quote
                  </motion.a>
                  <ClickToCall
                    eventLabel={callEventLabel}
                    className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border-2 border-white/90 bg-white/10 px-8 py-4 text-center text-base font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
                  >
                    Call {BUSINESS_INFO.phone}
                  </ClickToCall>
                </div>
              </motion.div>
            </div>
            <div className="lg:order-2 lg:col-start-2">
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08 }}
              >
                <PremiumQuoteForm
                  id="premium-quote-top"
                  idPrefix="hero"
                  city={formCity}
                  variant="glass"
                  conversionLabel={formConversion}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="relative bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeSection>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                Trusted by Arizona Homeowners & Businesses
              </h2>
              <div className="mt-4 flex justify-center items-center gap-2">
                <StarBurst className="text-amber-400" />
                <span className="text-lg font-bold text-slate-800">5.0</span>
                <span className="text-slate-500 text-sm">Google-rated experience</span>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {testimonials.map((t, i) => (
                <motion.article
                  key={t.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className="rounded-2xl border border-slate-100 bg-slate-50/80 p-5 shadow-md shadow-slate-200/50"
                >
                  <div className="mb-3 flex items-center gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <svg key={j} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-slate-700">&ldquo;{t.quote}&rdquo;</p>
                  <footer className="mt-4 border-t border-slate-200/80 pt-3">
                    <p className="font-bold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.line}</p>
                  </footer>
                </motion.article>
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <motion.a
                href="#premium-quote-top"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex rounded-2xl bg-slate-900 px-8 py-4 text-base font-bold text-white shadow-lg"
              >
                Get the same 5-star service
              </motion.a>
            </div>
          </FadeSection>
          <div className="mt-14 max-w-4xl mx-auto">
            <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Live Google reviews
            </p>
            <GoogleReviewsSlider compact alwaysLoadElfsight={false} />
          </div>
        </div>
      </section>

      {/* RO/DI */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-14 sm:py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeSection>
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14 mb-12">
              <div className="text-center lg:text-left">
                <h2 className="text-2xl font-extrabold sm:text-3xl tracking-tight">Why our RO/DI system works better</h2>
                <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Purified water helps us rinse cleaner — without leaving the minerals behind that cause spots when the
                  Arizona sun hits your glass.
                </p>
              </div>
              <PremiumLandingVideo
                variant="dark"
                src={LP_VIDEOS.rodi}
                title="Water-fed pole with RO/DI rinse"
                description="See how we feed spot-fighting purified water straight to the glass for a controlled, professional finish."
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {rodiBullets.map((b, i) => (
                <motion.div
                  key={b}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/25 text-blue-200">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm font-medium leading-relaxed text-slate-100">{b}</p>
                </motion.div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 sm:py-20 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeSection>
            <h2 className="text-center text-2xl font-extrabold text-slate-900 sm:text-3xl tracking-tight">
              Residential & commercial services
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600 text-sm sm:text-base">{serviceIntro}</p>

            <div className="mt-12 grid gap-8 rounded-3xl border border-slate-200/90 bg-white p-6 shadow-lg shadow-slate-200/50 sm:p-8 lg:grid-cols-2 lg:items-center lg:gap-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">Screens</p>
                <h3 className="mt-2 text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                  Professional-grade screen cleaning
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                  We use dedicated screen tools and professional-grade cleaners to lift embedded dust and pollen — so
                  airflow improves and your view stays crisp through Arizona seasons.
                </p>
                <a
                  href="#premium-quote-top"
                  className="mt-5 inline-flex text-sm font-bold text-blue-600 hover:text-blue-700"
                >
                  Add screens to your quote →
                </a>
              </div>
              <PremiumLandingVideo
                variant="light"
                src={LP_VIDEOS.screen}
                title="Screen cleaning in action"
                description="A careful pass with the right product — without stressing frames or mesh."
              />
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s) => (
                <motion.div
                  key={s.title}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                  className="group rounded-2xl border border-slate-200/90 bg-white p-6 shadow-md shadow-slate-200/40"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d={s.d} />
                    </svg>
                  </div>
                  <h3 className="font-bold text-slate-900">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.body}</p>
                  <a
                    href="#premium-quote-top"
                    className="mt-4 inline-flex text-sm font-bold text-blue-600 hover:text-blue-700"
                  >
                    Get quote →
                  </a>
                </motion.div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* Mop & squeegee technique */}
      <section className="border-y border-slate-100 bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeSection>
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">Technique</p>
                <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                  Mop &amp; squeegee, done right
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base max-w-xl">
                  Traditional tools still matter. We pair proven mop-and-squeegee technique with purified rinses where
                  it counts — so edges stay clean and the finish stays consistent pane to pane.
                </p>
                <a
                  href="#premium-quote-top"
                  className="mt-5 inline-flex text-sm font-bold text-blue-600 hover:text-blue-700"
                >
                  Request this level of detail →
                </a>
              </div>
              <PremiumLandingVideo
                variant="light"
                src={LP_VIDEOS.squeegee}
                title="Mop & squeegee finish work"
                description="Controlled agitation and a sharp rubber pass — the classic combo that still delivers."
              />
            </div>
          </FadeSection>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-slate-100 bg-slate-50 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeSection>
            <h2 className="text-center text-2xl font-extrabold text-slate-900 sm:text-3xl tracking-tight mb-12">
              How it works
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {processSteps.map((s) => (
                <div key={s.n} className="text-center md:text-left">
                  <div className="mx-auto md:mx-0 mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 text-xl font-extrabold text-white shadow-lg">
                    {s.n}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.5),transparent_45%)]" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <FadeSection>
            <div className="max-w-2xl mx-auto text-center mb-10">
              <h2 className="text-2xl font-extrabold text-white sm:text-4xl tracking-tight">Ready for cleaner windows?</h2>
              <p className="mt-3 text-slate-300 text-base sm:text-lg">
                Fill out the form and we&apos;ll get back to you quickly with a free quote.
              </p>
            </div>
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start max-w-5xl mx-auto">
              <PremiumQuoteForm
                id="premium-quote-bottom"
                idPrefix="footer"
                city={formCity}
                variant="white"
                conversionLabel={`${formConversion}_footer`}
              />
              <div className="text-center lg:text-left">
                <motion.a
                  href={`tel:${BUSINESS_INFO.phoneFormatted}`}
                  onClick={() => trackCallClick(`${callEventLabel}_final`)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex w-full lg:w-auto min-h-[56px] items-center justify-center rounded-2xl border-2 border-white bg-white px-10 py-4 text-lg font-bold text-slate-900 shadow-xl"
                >
                  Call {BUSINESS_INFO.phone}
                </motion.a>
                <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-2">
                  {trustPills.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white py-8 text-center text-sm text-slate-500">
        <p className="font-semibold text-slate-800">{BUSINESS_INFO.name}</p>
        <p className="mt-1">
          <ClickToCall eventLabel={`${callEventLabel}_foot`} className="text-blue-600 font-semibold hover:underline">
            {BUSINESS_INFO.phone}
          </ClickToCall>
        </p>
        <p className="mt-2 text-xs max-w-md mx-auto px-4">
          Licensed & insured • {city} &amp; surrounding East Valley • Premium window cleaning
        </p>
      </footer>

      <PremiumStickyBar callEventLabel={callEventLabel} />
    </div>
  )
}
