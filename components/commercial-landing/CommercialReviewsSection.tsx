'use client'

import GoogleReviewsSlider from '@/components/GoogleReviewsSlider'
import { COMMERCIAL_ANCHOR_SCROLL, COMMERCIAL_LANDING } from '@/lib/commercialLanding'

export default function CommercialReviewsSection() {
  return (
    <section id="reviews" className={`bg-white ${COMMERCIAL_ANCHOR_SCROLL}`}>
      <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 sm:pt-16">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            What Arizona Customers Are Saying
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Local customers trust {COMMERCIAL_LANDING.name} for clean glass, reliable scheduling, and
            professional service.
          </p>
        </div>
      </div>
      <GoogleReviewsSlider compact={false} alwaysLoadElfsight hideHeading />
      <div className="bg-white pb-10 pt-2 text-center sm:pb-14">
        <a
          href={COMMERCIAL_LANDING.formAnchor}
          className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-blue-600 px-8 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-blue-700"
        >
          Get the Same Clean Results for Your Business
        </a>
      </div>
    </section>
  )
}
