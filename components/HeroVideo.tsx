'use client'

import Image from 'next/image'
import { BUSINESS_INFO } from '@/lib/constants'

interface HeroVideoProps {
  title: string
  subtitle?: string
  children?: React.ReactNode
  city?: string
  service?: string
  formId?: string
}

export default function HeroVideo({ title, subtitle, children, city, service, formId = 'contact-form' }: HeroVideoProps) {
  const handleGetQuote = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cta_click', {
        event_category: 'engagement',
        event_label: 'hero_get_quote',
      })
    }
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead')
    }
    const formElement = document.getElementById(formId)
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleCall = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'hero_call',
      })
    }
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Contact')
    }
  }

  return (
    <section className="relative section-padding overflow-hidden min-h-[500px] md:min-h-[600px] flex items-center">
      {/* Image Background - Optimized for LCP */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source srcSet="/hero-image.webp" type="image/webp" />
          <Image
            src="/hero-image-optimized.jpg"
            alt="Arizona Window Washing Pros"
            fill
            className="object-cover"
            priority
            quality={65}
            sizes="100vw"
          />
        </picture>
        {/* Overlay for better text readability - dimmed */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center w-full">
        {/* Standout Offer Badge */}
        <div className="mb-6 inline-block">
          <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-gray-900 px-6 py-3 md:px-8 md:py-4 rounded-full shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-center gap-2">
              <span className="text-2xl md:text-3xl font-extrabold">$100 OFF</span>
              <span className="text-sm md:text-base font-bold">First Time Service</span>
            </div>
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 drop-shadow-2xl leading-tight" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl font-semibold text-white mb-8 drop-shadow-lg max-w-3xl mx-auto leading-relaxed" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
            {subtitle}
          </p>
        )}
        
        {/* Trust + Outcome + Speed Subheadline */}
        <p className="text-base md:text-lg text-white/95 mb-8 drop-shadow-lg max-w-2xl mx-auto" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
          ✓ Licensed & Insured • ✓ Streak-Free Guarantee • ✓ Free Estimate
        </p>

        {/* CTAs */}
        {!children && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={handleGetQuote}
              className="btn-primary text-lg md:text-xl font-bold px-8 py-4 shadow-2xl hover:scale-105 transition-transform"
            >
              Get Free Quote
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phoneFormatted}`}
              onClick={handleCall}
              className="btn-secondary text-lg md:text-xl font-bold px-8 py-4 bg-white/95 text-primary-600 border-2 border-white hover:bg-white shadow-2xl hover:scale-105 transition-transform"
            >
              📞 Call Now: {BUSINESS_INFO.phone}
            </a>
          </div>
        )}
        {children}

        {/* Social Proof Strip */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-8 text-white">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⭐⭐⭐⭐⭐</span>
            <span className="text-sm md:text-base font-semibold drop-shadow-lg">5.0 Rating</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-white/50"></div>
          <div className="text-sm md:text-base font-semibold drop-shadow-lg">
            👨‍👩‍👧‍👦 Family Owned
          </div>
          <div className="hidden sm:block w-px h-6 bg-white/50"></div>
          <div className="text-sm md:text-base font-semibold drop-shadow-lg">
            🛡️ Fully Insured
          </div>
        </div>
      </div>
    </section>
  )
}

