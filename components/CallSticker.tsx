'use client'

import { BUSINESS_INFO } from '@/lib/constants'
import { trackCallClick } from '@/lib/callTracking'

export default function CallSticker() {
  const handleCall = () => {
    trackCallClick('sticky_call_sticker')
  }

  return (
    <div className="fixed bottom-6 right-4 md:bottom-4 md:right-6 z-40 animate-pulse hover:animate-none">
      <a
        href={`tel:${BUSINESS_INFO.phoneFormatted}`}
        onClick={handleCall}
        className="flex items-center gap-2 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 font-bold text-sm md:text-base"
                aria-label="Call Now"
      >
          <svg
            className="w-4 h-4 md:w-5 md:h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span className="font-extrabold">Call Now</span>
      </a>
    </div>
  )
}

