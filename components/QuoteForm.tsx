'use client'

import { useState } from 'react'
import { BUSINESS_INFO, SERVICES, CITIES } from '@/lib/constants'

interface QuoteFormProps {
  defaultCity?: string
  defaultService?: string
  compact?: boolean
}

export default function QuoteForm({ defaultCity = '', defaultService = '', compact = false }: QuoteFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: defaultCity,
    service: defaultService,
    notes: '',
    textMe: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formStarted, setFormStarted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    if (!formStarted) {
      setFormStarted(true)
      // Track form start
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'form_start', {
          event_category: 'engagement',
          event_label: 'quote_form',
        })
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          message: formData.notes || `Quote request for ${formData.service || 'window cleaning'}`,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        // Track form submit success
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'form_submit', {
            event_category: 'conversion',
            event_label: 'quote_form_success',
          })
        }
        if (typeof window !== 'undefined' && (window as any).fbq) {
          (window as any).fbq('track', 'Lead')
        }
        
        // Reset form
        setFormData({
          name: '',
          phone: '',
          city: defaultCity,
          service: defaultService,
          notes: '',
          textMe: false,
        })
        setFormStarted(false)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={`card ${compact ? 'p-6' : 'p-8 md:p-10'}`}>
      {!compact && (
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Get Your Free Quote
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
            placeholder="(480) 555-1234"
          />
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
            City / Zip Code *
          </label>
          <select
            id="city"
            name="city"
            required
            value={formData.city}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
          >
            <option value="">Select your city</option>
            {CITIES.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
            Service Type *
          </label>
          <select
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
          >
            <option value="">Select a service</option>
            {SERVICES.map((service) => (
              <option key={service.id} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="notes" className="block text-sm font-semibold text-gray-700 mb-2">
            Notes (Optional)
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={3}
            value={formData.notes}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
            placeholder="Any special requests or questions?"
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="textMe"
            name="textMe"
            checked={formData.textMe}
            onChange={handleInputChange}
            className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
          />
          <label htmlFor="textMe" className="ml-2 text-sm text-gray-700">
            Text me my quote
          </label>
        </div>

        {submitStatus === 'success' && (
          <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4">
            <p className="text-green-800 font-semibold">
              ✅ Thank you! We'll contact you within minutes during business hours.
            </p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="bg-red-50 border-2 border-red-500 rounded-lg p-4">
            <p className="text-red-800 font-semibold">
              ❌ Something went wrong. Please call us directly at {BUSINESS_INFO.phone}
            </p>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary text-lg font-bold py-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Get My Free Quote'}
        </button>

        <p className="text-center text-sm text-gray-600">
          We respond in minutes during business hours.
        </p>
      </form>
    </div>
  )
}


