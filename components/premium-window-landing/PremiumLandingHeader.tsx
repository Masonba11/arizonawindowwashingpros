'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BUSINESS_INFO, SITE_HERO_IMAGE } from '@/lib/constants'
import { trackCallClick } from '@/lib/callTracking'

const HERO = SITE_HERO_IMAGE
const LOGO = '/AZWPlogo-Photoroom.png'

export default function PremiumLandingHeader({ callEventLabel }: { callEventLabel: string }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 sm:py-4">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src={LOGO}
            alt={BUSINESS_INFO.name}
            width={220}
            height={76}
            className="h-12 w-auto sm:h-14 md:h-[3.75rem]"
            priority
          />
        </Link>
        <motion.a
          href={`tel:${BUSINESS_INFO.phoneFormatted}`}
          onClick={() => trackCallClick(callEventLabel)}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-900/30 sm:px-6 sm:py-3 sm:text-base"
        >
          Call now
        </motion.a>
      </div>
    </header>
  )
}

export function PremiumHeroBackground() {
  return (
    <div className="absolute inset-0">
      <Image
        src={HERO}
        alt="Clean modern residential windows"
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/92 via-slate-900/85 to-blue-950/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.22),transparent_55%)]" />
    </div>
  )
}

export function StarBurst({ className = 'text-amber-400' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`} aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-5 w-5 sm:h-6 sm:w-6 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}
