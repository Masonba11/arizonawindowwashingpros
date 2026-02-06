'use client'

import { useState, useEffect } from 'react'
import { BUSINESS_INFO, CITIES } from '@/lib/constants'
import { useRouter } from 'next/navigation'

export default function PopupContactForm() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasShown, setHasShown] = useState(false)
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    message: '',
  })
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  useEffect(() => {
    // Check if user has already seen the popup in this session
    const hasSeenPopup = sessionStorage.getItem('popupContactFormShown')
    
    if (!hasSeenPopup) {
      // Show popup after 5 seconds
      const timer = setTimeout(() => {
        setIsOpen(true)
        setHasShown(true)
        sessionStorage.setItem('popupContactFormShown', 'true')
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('submitting')

    const FORM_ACCESS_KEY = '0f32ed52-78cd-4ae4-8e56-df6c2b533b71'

    try {
      // Submit directly to Web3Forms from client
      const params = new URLSearchParams()
      params.append('access_key', FORM_ACCESS_KEY)
      params.append('name', formData.name)
      params.append('phone', formData.phone)
      params.append('email', formData.email)
      params.append('city', formData.city || 'Not specified')
      params.append('service', formData.message || 'Not specified')
      params.append('message', formData.message || '')
      params.append('subject', `Popup Form: $100 Off Request from ${formData.name}`)
      params.append('from_name', 'Arizona Window Washing Pros Website')
      params.append('$100_off_offer', 'true')

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json',
        },
        body: params.toString(),
      })

      const result = await response.json()

      if (result.success) {
        setFormStatus('success')
        // Track form submission
        if (typeof window !== 'undefined') {
          if ((window as any).gtag) {
            (window as any).gtag('event', 'form_submit', {
              event_category: 'conversion',
              event_label: 'popup_contact_form_100_off',
            })
          }
          if ((window as any).fbq) {
            (window as any).fbq('track', 'Lead')
          }
        }
        // Redirect to thank you page after a brief delay
        setTimeout(() => {
          router.push('/thank-you')
        }, 2000)
      } else {
        console.error('Form submission failed:', result)
        setFormStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setFormStatus('error')
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition z-10"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-6 md:p-8">
          {/* Header with Offer */}
          <div className="text-center mb-6">
            <div className="inline-block mb-4">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-6 py-2 rounded-full font-bold text-sm md:text-base shadow-lg">
                $100 OFF your window cleaning service
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Fill Out This Contact Form
            </h2>
            <p className="text-lg text-gray-700">
              and receive $100 off your window cleaning service
            </p>
          </div>

          {formStatus === 'success' ? (
            <div className="text-center py-8">
              <div className="text-green-600 text-5xl mb-4">✓</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
              <p className="text-gray-700">We'll contact you shortly with your $100 off offer.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="popup-name" className="block text-sm font-semibold text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  id="popup-name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
                />
              </div>

              <div>
                <label htmlFor="popup-phone" className="block text-sm font-semibold text-gray-700 mb-1">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="popup-phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
                  placeholder="(480) 555-1234"
                />
              </div>

              <div>
                <label htmlFor="popup-email" className="block text-sm font-semibold text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="popup-email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="popup-city" className="block text-sm font-semibold text-gray-700 mb-1">
                  City
                </label>
                <select
                  id="popup-city"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
                >
                  <option value="">Select a city</option>
                  {CITIES.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="popup-message" className="block text-sm font-semibold text-gray-700 mb-1">
                  Message About Service Type *
                </label>
                <textarea
                  id="popup-message"
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
                  placeholder="Please describe the service you need..."
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full btn-primary py-4 text-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === 'submitting' ? 'Submitting...' : 'Claim $100 Off'}
              </button>

              {formStatus === 'error' && (
                <p className="text-red-600 text-sm text-center">
                  Something went wrong. Please call us at {BUSINESS_INFO.phone}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

