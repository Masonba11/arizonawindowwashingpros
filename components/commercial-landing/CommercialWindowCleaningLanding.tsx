import CommercialLandingHeader from './CommercialLandingHeader'
import CommercialQuoteForm from './CommercialQuoteForm'
import GoogleReviewsSlider from '@/components/GoogleReviewsSlider'
import CommercialCallLink from './CommercialCallLink'
import { COMMERCIAL_FAQS, COMMERCIAL_LANDING, SERVICE_AREA_CITIES } from '@/lib/commercialLanding'

function StarRow({ className = 'text-amber-400' }: { className?: string }) {
  return (
    <div className={`flex gap-0.5 ${className}`} aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-4 w-4 fill-current sm:h-5 sm:w-5" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function SectionShell({
  id,
  className = 'bg-white',
  children,
}: {
  id?: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className={`py-14 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">{children}</div>
    </section>
  )
}

function IconCard({
  title,
  body,
  icon,
}: {
  title: string
  body: string
  icon: React.ReactNode
}) {
  return (
    <article className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-md shadow-slate-200/50 transition hover:border-blue-200 hover:shadow-lg">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">{icon}</div>
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
    </article>
  )
}

const HERO_BADGES = [
  'Interior & Exterior Glass',
  'Storefront Specialists',
  'Recurring Maintenance Plans',
  'Flexible Scheduling',
  'Locally Operated in Arizona',
] as const

const WHY_CARDS = [
  {
    title: 'Better First Impressions',
    body: 'Customers notice clean glass before they notice anything else. Spotless windows signal a business that cares about details.',
  },
  {
    title: 'Cleaner Storefront Appearance',
    body: 'Remove Arizona dust, fingerprints, and grime so your storefront looks open, inviting, and ready for foot traffic.',
  },
  {
    title: 'Professional Property Image',
    body: 'Consistent commercial window cleaning keeps offices, plazas, and retail spaces looking maintained and trustworthy.',
  },
] as const

const SERVICES = [
  {
    title: 'Exterior Window Cleaning',
    body: 'Hand-finished exterior glass for storefronts and commercial buildings — built for Arizona sun, dust, and daily exposure.',
  },
  {
    title: 'Interior Window Cleaning',
    body: 'Clear interior panes for offices, medical buildings, and customer-facing spaces where presentation matters.',
  },
  {
    title: 'Storefront Glass Cleaning',
    body: 'Storefront window cleaning Arizona businesses rely on for curb appeal — ideal for retail, salons, and plazas.',
  },
  {
    title: 'Restaurant Window Cleaning',
    body: 'Restaurant window cleaning Arizona operators schedule before hours or slow periods so dining rooms look spotless.',
  },
  {
    title: 'Office Window Cleaning',
    body: 'Office window cleaning Arizona teams trust for professional lobbies, conference rooms, and multi-story glass.',
  },
  {
    title: 'Hard Water Spot Removal',
    body: 'Target sprinkler and mineral buildup on commercial glass so windows stay clear, not cloudy.',
  },
  {
    title: 'Screen Cleaning',
    body: 'Remove dust and buildup from commercial screens so views stay sharp and airflow stays clean.',
  },
  {
    title: 'Recurring Maintenance Plans',
    body: 'Weekly, bi-weekly, or monthly routes so property managers and storefronts never fall behind on glass.',
  },
] as const

const INDUSTRIES = [
  { title: 'Restaurants', body: 'Keep dining rooms and entry glass customer-ready with flexible scheduling.' },
  { title: 'Retail Stores', body: 'Storefront window cleaning Arizona shoppers notice — clear displays, clear brand image.' },
  { title: 'Office Buildings', body: 'Professional office window cleaning Arizona businesses use for tenant-ready spaces.' },
  { title: 'Medical Offices', body: 'Clean, calm glass that supports a professional healthcare environment.' },
  { title: 'Gyms & Fitness Studios', body: 'Bright, streak-free windows that make your facility feel energetic and clean.' },
  { title: 'Salons & Barbershops', body: 'Polished glass that matches the care you put into every client experience.' },
  { title: 'Shopping Plazas', body: 'Multi-tenant curb appeal with plans built for property managers and plaza owners.' },
  { title: 'Property Managers', body: 'One partner for recurring commercial window cleaning across your portfolio.' },
] as const

const MAINTENANCE_PLANS = [
  {
    title: 'Weekly Cleaning',
    body: 'Best for high-traffic storefronts and restaurants that need glass to look perfect every week.',
  },
  {
    title: 'Bi-Weekly Cleaning',
    body: 'Best for retail shops, gyms, and busy offices that want consistent curb appeal without weekly visits.',
  },
  {
    title: 'Monthly Cleaning',
    body: 'Best for offices, medical buildings, and lower-traffic properties that still need a professional shine.',
  },
  {
    title: 'Custom Plans',
    body: 'Best for property managers and multi-location businesses that need flexible Arizona commercial window cleaning routes.',
  },
] as const

const TRUST_POINTS = [
  'Reliable Scheduling',
  'Professional Communication',
  'Interior & Exterior Cleaning',
  'Commercial-Friendly Service Times',
  'Locally Operated in Arizona',
  'Quote-Based Pricing',
  'Recurring Service Available',
  'Clean, Professional Results',
] as const

const serviceIcon = (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6.75h1.5m-1.5 3h1.5m-1.5 3h1.5M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
    />
  </svg>
)

export default function CommercialWindowCleaningLanding() {
  const formHref = COMMERCIAL_LANDING.formAnchor

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <CommercialLandingHeader />

      {/* Hero — background extends under transparent header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_0%,rgba(245,158,11,0.12),transparent_50%)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 pb-10 pt-[5.75rem] sm:px-6 sm:pb-14 sm:pt-[6.25rem] lg:pb-16">
          {/* Trust strip */}
          <div className="mb-6 flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-center backdrop-blur-sm sm:justify-start">
            <StarRow />
            <p className="text-xs font-semibold text-white sm:text-sm">
              Trusted by local customers across Arizona.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300/90">
                {COMMERCIAL_LANDING.name}
              </p>
              <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.6rem]">
                Commercial Window Cleaning in Arizona
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg">
                Keep your storefront, restaurant, office, or commercial property looking spotless with reliable interior
                and exterior window cleaning from {COMMERCIAL_LANDING.name}.
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {HERO_BADGES.map((badge) => (
                  <li
                    key={badge}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm"
                  >
                    {badge}
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-sm text-slate-300">
                Trusted by local Arizona businesses for clean, professional-looking glass.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={formHref}
                  className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-amber-500 px-8 py-4 text-center text-base font-bold text-slate-950 shadow-lg shadow-amber-900/30 transition hover:bg-amber-400"
                >
                  Get a Free Quote
                </a>
                <CommercialCallLink
                  eventSuffix="hero"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-xl border-2 border-white bg-white/10 px-8 py-4 text-center text-base font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  Call Now
                </CommercialCallLink>
              </div>
              <p className="mt-4 text-sm font-semibold text-white">
                <CommercialCallLink
                  eventSuffix="hero_inline"
                  className="underline decoration-amber-400/80 underline-offset-2 hover:text-amber-200"
                >
                  {COMMERCIAL_LANDING.phone}
                </CommercialCallLink>
                <span className="mx-2 text-slate-500">|</span>
                <a
                  href={`mailto:${COMMERCIAL_LANDING.email}`}
                  className="font-medium text-slate-300 hover:text-white"
                >
                  {COMMERCIAL_LANDING.email}
                </a>
              </p>
            </div>

            <div className="lg:sticky lg:top-24">
              <CommercialQuoteForm id="commercial-quote-form" idPrefix="hero" variant="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <div id="reviews">
        <GoogleReviewsSlider compact={false} alwaysLoadElfsight />
        <div className="bg-white pb-10 pt-2 text-center sm:pb-14">
          <a
            href={formHref}
            className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-blue-600 px-8 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-blue-700"
          >
            Get the Same Clean Results for Your Business
          </a>
        </div>
      </div>

      {/* Why it matters */}
      <SectionShell className="bg-white border-b border-slate-100">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Make the Right First Impression Before Customers Walk In
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Clean windows make a business look more professional, maintained, and welcoming. Arizona dust, hard water,
            fingerprints, and grime build up quickly on commercial glass. Regular{' '}
            <strong className="font-semibold text-slate-800">commercial window cleaning Arizona</strong> businesses
            schedule helps improve curb appeal, customer experience, and the overall appearance of the property — window
            cleaning for businesses that want to look sharp every day.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {WHY_CARDS.map((card) => (
            <IconCard
              key={card.title}
              title={card.title}
              body={card.body}
              icon={
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v14.25a1.5 1.5 0 001.5 1.5z"
                  />
                </svg>
              }
            />
          ))}
        </div>
      </SectionShell>

      {/* Services */}
      <SectionShell id="services" className="bg-slate-50">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Commercial Window Cleaning Services
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            {COMMERCIAL_LANDING.name} is your commercial window cleaners near me partner for storefronts, offices, and
            multi-tenant properties across Arizona.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <IconCard key={s.title} title={s.title} body={s.body} icon={serviceIcon} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href={formHref}
            className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-blue-600 px-8 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-blue-700"
          >
            Get a Free Quote
          </a>
        </div>
      </SectionShell>

      {/* Industries */}
      <SectionShell id="industries" className="bg-white">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Window Cleaning for Arizona Businesses
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            {COMMERCIAL_LANDING.name} helps Arizona businesses keep glass clean, clear, and customer-ready — from single
            storefronts to managed commercial buildings.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((ind) => (
            <article
              key={ind.title}
              className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 transition hover:border-blue-200 hover:bg-white hover:shadow-md"
            >
              <h3 className="font-bold text-slate-900">{ind.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{ind.body}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      {/* Recurring plans */}
      <SectionShell className="bg-gradient-to-b from-blue-950 to-slate-950 text-white">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            Weekly, Bi-Weekly, and Monthly Window Cleaning Plans
          </h2>
          <p className="mt-4 leading-relaxed text-slate-300">
            For businesses that need consistent curb appeal, {COMMERCIAL_LANDING.name} offers recurring commercial window
            cleaning plans. Whether you manage a storefront, restaurant, office, or plaza, recurring service keeps your
            property looking clean without having to request one-time cleanings every month. Arizona commercial window
            cleaning on autopilot is the smartest option for busy owners and property managers.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MAINTENANCE_PLANS.map((plan) => (
            <article
              key={plan.title}
              className="rounded-2xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-sm"
            >
              <h3 className="text-lg font-bold text-amber-300">{plan.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{plan.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={formHref}
            className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-amber-500 px-8 py-3 text-sm font-bold text-slate-950 shadow-lg transition hover:bg-amber-400"
          >
            Build My Maintenance Plan
          </a>
          <CommercialCallLink
            eventSuffix="plans"
            className="inline-flex min-h-[48px] items-center justify-center rounded-xl border-2 border-white/80 px-8 py-3 text-sm font-bold text-white transition hover:bg-white/10"
          >
            Call {COMMERCIAL_LANDING.phone}
          </CommercialCallLink>
        </div>
      </SectionShell>

      {/* Trust */}
      <SectionShell className="bg-slate-50">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Why Businesses Choose {COMMERCIAL_LANDING.name}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Property managers and business owners choose us for reliable scheduling, clear communication, and results that
            hold up in Arizona conditions.
          </p>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_POINTS.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                ✓
              </span>
              <span className="text-sm font-semibold text-slate-800">{point}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <CommercialCallLink
            eventSuffix="trust"
            className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-slate-900 px-8 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
          >
            Call Now — {COMMERCIAL_LANDING.phone}
          </CommercialCallLink>
          <a
            href={formHref}
            className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-blue-600 px-8 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
          >
            Get a Free Quote
          </a>
        </div>
      </SectionShell>

      {/* Service areas */}
      <SectionShell id="service-areas" className="bg-white border-t border-slate-100">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Commercial Window Cleaning Across Arizona
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            {COMMERCIAL_LANDING.name} serves commercial properties throughout Gilbert, Chandler, Queen Creek, San Tan
            Valley, Mesa, Scottsdale, Tempe, Phoenix, Paradise Valley, and nearby Arizona communities.
          </p>
        </div>
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {SERVICE_AREA_CITIES.map((city) => (
            <li
              key={city}
              className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-center text-sm font-semibold text-slate-800"
            >
              {city}
            </li>
          ))}
        </ul>
      </SectionShell>

      {/* FAQ */}
      <SectionShell id="faq" className="bg-slate-50">
        <h2 className="text-center text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          Commercial Window Cleaning FAQs
        </h2>
        <dl className="mx-auto mt-12 max-w-3xl divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-sm">
          {COMMERCIAL_FAQS.map((faq) => (
            <div key={faq.question} className="p-6">
              <dt className="text-base font-bold text-slate-900">{faq.question}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-slate-600">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </SectionShell>

      <footer className="border-t border-slate-200 bg-white py-8 text-center text-sm text-slate-500">
        <p className="font-bold text-slate-800">{COMMERCIAL_LANDING.name}</p>
        <p className="mt-1">
          <CommercialCallLink eventSuffix="footer" className="font-semibold text-blue-600 hover:underline">
            {COMMERCIAL_LANDING.phone}
          </CommercialCallLink>
          {' · '}
          <a href={`mailto:${COMMERCIAL_LANDING.email}`} className="hover:underline">
            {COMMERCIAL_LANDING.email}
          </a>
        </p>
        <p className="mt-2 text-xs">Commercial window cleaning · Arizona</p>
      </footer>
    </div>
  )
}
