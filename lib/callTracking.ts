/**
 * Track phone call clicks for Google Ads conversion tracking
 * This function should be called whenever a user clicks on a phone number link
 */
export function trackCallClick(eventLabel?: string) {
  if (typeof window === 'undefined') return

  // Google Ads conversion tracking
  if ((window as any).gtag) {
    // Track as conversion
    ;(window as any).gtag('event', 'conversion', {
      send_to: 'AW-17892178683/wcO-COye-vYbEPv109NC',
    })
    
    // Also track as engagement event
    ;(window as any).gtag('event', 'phone_click', {
      event_category: 'engagement',
      event_label: eventLabel || 'phone_call',
    })
  }

  // Facebook Pixel tracking
  if ((window as any).fbq) {
    ;(window as any).fbq('track', 'Contact')
  }
}

