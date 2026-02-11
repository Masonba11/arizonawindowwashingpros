'use client'

import { BUSINESS_INFO } from '@/lib/constants'
import { trackCallClick } from '@/lib/callTracking'

interface OfferBannerProps {
  showUrgency?: boolean
}

export default function OfferBanner({ showUrgency = true }: OfferBannerProps) {
  return (
    <section className="section-padding bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
      <div className="container-custom max-w-4xl">
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl border-4 border-yellow-300">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
              Free Estimate • Same-Week Availability • First-Time Customer Offer
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
              <a
                href={`tel:${BUSINESS_INFO.phoneFormatted}`}
                className="btn-primary text-lg font-bold px-8 py-4"
                onClick={() => trackCallClick('offer_banner_call')}
              >
                Call Now for Fastest Scheduling
              </a>
            </div>
            {showUrgency && (
              <p className="text-gray-700 font-semibold text-lg">
                Limited availability this week • Book now to secure your spot
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

