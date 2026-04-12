'use client'

import { BUSINESS_INFO } from '@/lib/constants'
import { trackCallClick } from '@/lib/callTracking'

interface AdLandingStickyCallProps {
  eventLabel: string
}

export default function AdLandingStickyCall({ eventLabel }: AdLandingStickyCallProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-white/95 backdrop-blur border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="flex gap-2 max-w-lg mx-auto">
        <a
          href="#ad-quote-form"
          className="flex-1 text-center rounded-xl bg-blue-600 text-white font-bold py-3.5 text-sm shadow-md"
        >
          Free quote
        </a>
        <a
          href={`tel:${BUSINESS_INFO.phoneFormatted}`}
          onClick={() => trackCallClick(eventLabel)}
          className="flex-1 text-center rounded-xl border-2 border-blue-600 text-blue-700 font-bold py-3.5 text-sm bg-white"
        >
          Call now
        </a>
      </div>
    </div>
  )
}
