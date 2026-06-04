'use client'

import ClickToCall from '@/components/ClickToCall'
import { COMMERCIAL_LANDING } from '@/lib/commercialLanding'

interface CommercialCallLinkProps {
  className?: string
  children: React.ReactNode
  eventSuffix?: string
}

export default function CommercialCallLink({
  className = '',
  children,
  eventSuffix = '',
}: CommercialCallLinkProps) {
  return (
    <ClickToCall
      phone={COMMERCIAL_LANDING.phone}
      phoneFormatted={COMMERCIAL_LANDING.phoneFormatted}
      eventLabel={
        eventSuffix
          ? `${COMMERCIAL_LANDING.callEventLabel}_${eventSuffix}`
          : COMMERCIAL_LANDING.callEventLabel
      }
      className={className}
    >
      {children}
    </ClickToCall>
  )
}
