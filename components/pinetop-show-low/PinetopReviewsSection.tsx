'use client'

import GoogleReviewsSlider from '@/components/GoogleReviewsSlider'
import { PINETOP_CONFIG } from '@/lib/pinetopShowLow'

/** Live Google reviews via Elfsight — real customer feedback, not static placeholders. */
export default function PinetopReviewsSection({
  headline = 'Trusted By Arizona Homeowners',
  showSubtitle = true,
}: {
  headline?: string
  showSubtitle?: boolean
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 sm:pt-16">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">{headline}</h2>
          {showSubtitle && (
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
              Real reviews from {PINETOP_CONFIG.name} customers across Arizona.
            </p>
          )}
        </div>
      </div>
      <GoogleReviewsSlider compact={false} alwaysLoadElfsight hideHeading />
    </section>
  )
}
