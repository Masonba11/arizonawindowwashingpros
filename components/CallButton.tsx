'use client'

import { BUSINESS_INFO } from '@/lib/constants'
import { trackCallClick } from '@/lib/callTracking'

interface CallButtonProps {
  phone?: string
  phoneFormatted?: string
  label?: string
  className?: string
  eventLabel?: string
  children?: React.ReactNode
}

export default function CallButton({
  phone = BUSINESS_INFO.phone,
  phoneFormatted = BUSINESS_INFO.phoneFormatted,
  label,
  className = '',
  eventLabel = 'phone_call',
  children,
}: CallButtonProps) {
  const handleClick = () => {
    trackCallClick(eventLabel)
  }

  return (
    <a
      href={`tel:${phoneFormatted}`}
      onClick={handleClick}
      className={className}
    >
      {children || label || `Call Now: ${phone}`}
    </a>
  )
}

