'use client'

import { BUSINESS_INFO } from '@/lib/constants'

interface StickyCTAProps {
  formId?: string
}

export default function StickyCTA({ formId = 'contact-form' }: StickyCTAProps) {
  const handleGetQuote = () => {
    // Track CTA click
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cta_click', {
        event_category: 'engagement',
        event_label: 'sticky_get_quote',
      })
    }
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead')
    }
    
    // Scroll to form
    const formElement = document.getElementById(formId)
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleCall = () => {
    // Track call click
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'sticky_call',
      })
    }
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Contact')
    }
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-primary-500 shadow-2xl md:hidden">
      <div className="container-custom">
        <div className="flex gap-2 py-3">
          <a
            href={`tel:${BUSINESS_INFO.phoneFormatted}`}
            onClick={handleCall}
            className="flex-1 btn-primary text-center text-base font-bold py-3"
          >
            📞 Call Now
          </a>
          <button
            onClick={handleGetQuote}
            className="flex-1 btn-secondary text-center text-base font-bold py-3 bg-primary-600 text-white hover:bg-primary-700"
          >
            Get Free Quote
          </button>
        </div>
      </div>
    </div>
  )
}

