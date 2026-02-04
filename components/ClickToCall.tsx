'use client'

import { BUSINESS_INFO } from '@/lib/constants'

interface ClickToCallProps {
  phone?: string
  phoneFormatted?: string
  label?: string
  className?: string
  eventLabel?: string
  children?: React.ReactNode
}

export default function ClickToCall({ 
  phone = BUSINESS_INFO.phone, 
  phoneFormatted = BUSINESS_INFO.phoneFormatted,
  label,
  className = '',
  eventLabel = 'phone_click',
  children
}: ClickToCallProps) {
  const handleClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: eventLabel,
      })
    }
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Contact')
    }
  }

  return (
    <a
      href={`tel:${phoneFormatted}`}
      onClick={handleClick}
      className={className}
    >
      {children || label || `📞 Call ${phone}`}
    </a>
  )
}

