'use client'

import { BUSINESS_INFO } from '@/lib/constants'

export default function CallSticker() {
  const handleCall = () => {
    // Track call click
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'sticky_call_sticker',
      })
    }
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Contact')
    }
  }

  return (
    <div className="fixed bottom-20 md:bottom-6 right-6 z-40 animate-pulse hover:animate-none">
      <a
        href={`tel:${BUSINESS_INFO.phoneFormatted}`}
        onClick={handleCall}
        className="flex items-center gap-3 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 font-bold text-lg md:text-xl"
        aria-label="Call 480-737-0850"
      >
        <svg
          className="w-6 h-6 md:w-7 md:h-7"
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
        <span className="hidden sm:inline">Call Now:</span>
        <span className="font-extrabold">480-737-0850</span>
      </a>
    </div>
  )
}

