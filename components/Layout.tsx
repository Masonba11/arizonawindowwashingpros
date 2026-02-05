'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'
import CallSticker from './CallSticker'
import SocialMediaSticker from './SocialMediaSticker'

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  
  // Landing pages don't get nav/footer/stickers
  const isLandingPage = pathname?.includes('scottsdale-window-washing') || 
                        pathname?.includes('chandler-window-washing') || 
                        pathname?.includes('gilbert-window-washing')
  
  if (isLandingPage) {
    return <>{children}</>
  }
  
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

