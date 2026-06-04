'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { COMMERCIAL_LANDING } from '@/lib/commercialLanding'
import { trackCallClick } from '@/lib/callTracking'
import { phoneGlow, quoteGlow } from './glowStyles'

const NAV = [
  { href: '#services', label: 'Services' },
  { href: '#industries', label: 'Industries' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#service-areas', label: 'Service Areas' },
  { href: '#faq', label: 'FAQ' },
] as const

const LOGO = '/AZWPlogo-Photoroom.png'

export default function CommercialLandingHeader() {
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
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6 sm:py-3">
        <Link href="/" className="flex shrink-0 items-center min-w-0">
          <Image
            src={LOGO}
            alt={COMMERCIAL_LANDING.name}
            width={400}
            height={120}
            className="h-[4.25rem] w-auto sm:h-[5.25rem] md:h-24"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Page sections">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-semibold transition ${
                scrolled
                  ? 'text-slate-600 hover:text-blue-700'
                  : 'text-white/90 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href={`tel:${COMMERCIAL_LANDING.phoneFormatted}`}
            onClick={() => trackCallClick(COMMERCIAL_LANDING.callEventLabel)}
            className={`hidden rounded-lg px-3 py-2 text-sm font-bold whitespace-nowrap sm:inline ${phoneGlow} ${
              scrolled
                ? 'text-blue-700 bg-blue-50/90'
                : 'text-white bg-white/10 backdrop-blur-sm'
            }`}
          >
            {COMMERCIAL_LANDING.phone}
          </a>
          <a
            href={COMMERCIAL_LANDING.formAnchor}
            className={`hidden rounded-lg bg-blue-600 px-3 py-2 text-xs font-bold text-white sm:inline md:px-4 md:text-sm hover:bg-blue-500 ${quoteGlow}`}
          >
            Get a Free Quote
          </a>
          <a
            href={`tel:${COMMERCIAL_LANDING.phoneFormatted}`}
            onClick={() => trackCallClick(`${COMMERCIAL_LANDING.callEventLabel}_header`)}
            className={`rounded-lg bg-slate-900 px-3 py-2 text-xs font-bold text-white sm:hidden ${phoneGlow}`}
          >
            Call Now
          </a>
        </div>
      </div>
    </header>
  )
}
