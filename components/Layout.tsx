'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'
import CallSticker from './CallSticker'
import GetFreeQuoteSticker from './GetFreeQuoteSticker'
import SocialMediaSticker from './SocialMediaSticker'
import { AD_LANDING_PATHS } from '@/lib/adLandingPaths'
import { COMMERCIAL_LANDING } from '@/lib/commercialLanding'

const LANDING_PAGES = [
  '/scottsdale-window-washing',
  '/chandler-window-washing',
  '/gilbert-window-washing',
  '/queen-creek-window-washing',
  '/san-tan-valley-window-washing',
  '/east-valley-window-washing',
  '/east-valley-reviews',
  '/east-valley-contact-us',
]

// Service+city ad landing pages
const SERVICE_CITY_PATTERNS = [
  '/exterior-window-cleaning-',
  '/interior-window-cleaning-',
  '/track-sill-cleaning-',
  '/screen-cleaning-',
]

/** Standalone pages: no header, footer, or floating stickers */
const FORM_ONLY_PAGES = ['/form', COMMERCIAL_LANDING.path, ...AD_LANDING_PATHS]

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isLandingPage = LANDING_PAGES.includes(pathname || '')
  const isServiceCityPage = SERVICE_CITY_PATTERNS.some(pattern => pathname?.startsWith(pattern))
  const isFormOnlyPage = FORM_ONLY_PAGES.includes(pathname || '')

  if (isLandingPage || isServiceCityPage || isFormOnlyPage) {
    // Minimal layout for Google Ads landing pages - no nav, no footer, no stickers
    return <div className="min-h-screen">{children}</div>
  }

  // Full layout for regular pages
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 md:pt-28 lg:pt-32">{children}</main>
      <Footer />
      <CallSticker />
      <GetFreeQuoteSticker />
      <SocialMediaSticker />
    </div>
  )
}
