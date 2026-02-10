'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'
import CallSticker from './CallSticker'
import SocialMediaSticker from './SocialMediaSticker'

const LANDING_PAGES = [
  '/scottsdale-window-washing',
  '/chandler-window-washing',
  '/gilbert-window-washing',
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isLandingPage = LANDING_PAGES.includes(pathname || '')

  if (isLandingPage) {
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
      <SocialMediaSticker />
    </div>
  )
}
