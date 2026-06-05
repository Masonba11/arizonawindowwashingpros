'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { PINETOP_CONFIG } from '@/lib/pinetopShowLow'
import { trackCallClick } from '@/lib/callTracking'
import { phoneGlow, quoteGlow } from '@/components/commercial-landing/glowStyles'

const LOGO = '/AZWPlogo-Photoroom.png'

export default function PinetopAdHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-md'
          : 'border-b border-white/10 bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
        <div className="flex shrink-0 items-center min-w-0">
          <Image
            src={LOGO}
            alt={PINETOP_CONFIG.name}
            width={520}
            height={156}
            className="h-20 w-auto sm:h-24 md:h-28 lg:h-32"
            priority
          />
        </div>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href={`tel:${PINETOP_CONFIG.phoneFormatted}`}
            onClick={() => trackCallClick(PINETOP_CONFIG.adCallEvent)}
            className={`hidden rounded-lg px-3 py-2 text-sm font-bold whitespace-nowrap sm:inline ${phoneGlow} ${
              scrolled ? 'text-blue-700 bg-blue-50/90' : 'text-white bg-white/10 backdrop-blur-sm'
            }`}
          >
            {PINETOP_CONFIG.phone}
          </a>
          <a
            href={PINETOP_CONFIG.formAnchor}
            className={`hidden rounded-lg bg-emerald-600 px-3 py-2 text-xs font-bold text-white sm:inline md:px-4 md:text-sm hover:bg-emerald-500 ${quoteGlow}`}
          >
            Get My Free Quote
          </a>
          <a
            href={`tel:${PINETOP_CONFIG.phoneFormatted}`}
            onClick={() => trackCallClick(`${PINETOP_CONFIG.adCallEvent}_mobile`)}
            className={`rounded-lg bg-slate-900 px-3 py-2 text-xs font-bold text-white sm:hidden ${phoneGlow}`}
          >
            Call Now
          </a>
        </div>
      </div>
    </header>
  )
}
