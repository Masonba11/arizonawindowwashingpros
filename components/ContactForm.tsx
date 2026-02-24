'use client'

import { useState } from 'react'
import { BUSINESS_INFO } from '@/lib/constants'
import { useRouter } from 'next/navigation'
import { trackCallClick } from '@/lib/callTracking'

interface ContactFormProps {
  defaultCity?: string
  defaultService?: string
  showTitle?: boolean
  compact?: boolean
}

export default function ContactForm({
  defaultCity = '',
  defaultService = '',
  showTitle = true,
  compact = false,
}: ContactFormProps) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: defaultCity || '',
    message: '',
  })
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

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
      params.append('subject', `New Contact Form Submission from ${formData.name}`)
      params.append('from_name', 'Arizona Window Cleaning Pros Website')

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
              event_label: 'contact_form_success',
            })
          }
          if ((window as any).fbq) {
            (window as any).fbq('track', 'Lead')
          }
        }
        // Redirect to thank you page after a brief delay
        setTimeout(() => {
          router.push('/thank-you')
        }, 1500)
      } else {
        console.error('Form submission failed:', result)
        setFormStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setFormStatus('error')
    }
  }

  return (
    <div className={compact ? "bg-white rounded-2xl shadow-2xl border-2 border-gray-200" : "card"}>
      <div className={compact ? "p-6" : "p-8 md:p-10"}>
        {showTitle && (
          <div className="text-center mb-8">
            <h2 className={compact ? "text-xl font-bold text-gray-900 mb-4 text-center" : "text-3xl md:text-4xl font-bold text-gray-900 mb-3"}>
              Get Your Free Quote
            </h2>
            {!compact && <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>}
          </div>
        )}

        {formStatus === 'success' ? (
          <div className={compact ? "text-center py-6" : "text-center py-8"}>
            <div className={compact ? "text-green-600 text-4xl mb-3" : "text-green-600 text-5xl mb-4"}>✓</div>
            <h3 className={compact ? "text-xl font-bold text-gray-900 mb-2" : "text-2xl font-bold text-gray-900 mb-2"}>Thank You!</h3>
            <p className={compact ? "text-gray-700 mb-4 text-sm" : "text-gray-700"}>We'll contact you shortly.</p>
            {compact && (
              <a
                href={`tel:${BUSINESS_INFO.phoneFormatted}`}
                onClick={() => trackCallClick('contact_form_success_call')}
                className="inline-block bg-blue-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                Or Call Now: {BUSINESS_INFO.phone}
              </a>
            )}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={compact ? "space-y-3" : "space-y-4"}>
            <div>
              <label htmlFor="name" className={compact ? "block text-xs font-semibold text-gray-700 mb-1" : "block text-sm font-semibold text-gray-700 mb-1"}>
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={compact ? "w-full px-3 py-2 text-sm border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" : "w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"}
              />
            </div>

            <div>
              <label htmlFor="phone" className={compact ? "block text-xs font-semibold text-gray-700 mb-1" : "block text-sm font-semibold text-gray-700 mb-1"}>
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={compact ? "w-full px-3 py-2 text-sm border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" : "w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"}
                placeholder="(480) 555-1234"
              />
            </div>

            <div>
              <label htmlFor="email" className={compact ? "block text-xs font-semibold text-gray-700 mb-1" : "block text-sm font-semibold text-gray-700 mb-1"}>
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={compact ? "w-full px-3 py-2 text-sm border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" : "w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"}
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="city" className={compact ? "block text-xs font-semibold text-gray-700 mb-1" : "block text-sm font-semibold text-gray-700 mb-1"}>
                City
              </label>
              <input
                type="text"
                id="city"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                placeholder="Enter your city"
                className={compact ? "w-full px-3 py-2 text-sm border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" : "w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"}
              />
            </div>

            <div>
              <label htmlFor="message" className={compact ? "block text-xs font-semibold text-gray-700 mb-1" : "block text-sm font-semibold text-gray-700 mb-1"}>
                Message About Service Type
              </label>
              <textarea
                id="message"
                rows={compact ? 2 : 4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={compact ? "w-full px-3 py-2 text-sm border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" : "w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"}
                placeholder="Please describe the service you need (e.g., Exterior window cleaning, Interior cleaning, Screen cleaning, etc.)"
              />
            </div>

            <button
              type="submit"
              disabled={formStatus === 'submitting'}
              className={compact ? "w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm" : "w-full btn-primary py-4 text-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed"}
            >
              {formStatus === 'submitting' ? 'Submitting...' : 'Get Free Quote'}
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
  )
}
