'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { CITIES, SERVICES } from '@/lib/constants'

interface ContactFormProps {
  defaultCity?: string
  defaultService?: string
  showTitle?: boolean
}

export default function ContactForm({
  defaultCity = '',
  defaultService = '',
  showTitle = true,
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: defaultCity,
    service: defaultService,
    message: '',
    company: '', // Honeypot field
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const router = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Honeypot check
    if (formData.company) {
      console.log('Bot detected via honeypot')
      return // Silent fail for bots
    }

    // Basic validation
    if (!formData.name || !formData.phone || !formData.email) {
      console.log('Validation failed:', { name: formData.name, phone: formData.phone, email: formData.email })
      setSubmitStatus('error')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    console.log('Submitting form...', { name: formData.name, email: formData.email })

    try {
      // Send to both our API (for backup) and Web3Forms (for email)
      // Web3Forms requires client-side calls on free plan
      const FORM_ACCESS_KEY = '0f32ed52-78cd-4ae4-8e56-df6c2b533b71'
      
      // Submit to Web3Forms directly from client (required for free plan)
      try {
        const web3formsParams = new URLSearchParams()
        web3formsParams.append('access_key', FORM_ACCESS_KEY)
        web3formsParams.append('name', formData.name)
        web3formsParams.append('phone', formData.phone)
        web3formsParams.append('email', formData.email)
        web3formsParams.append('city', formData.city || 'Not specified')
        web3formsParams.append('service', formData.service || 'Not specified')
        web3formsParams.append('message', formData.message || '')
        web3formsParams.append('subject', `New Contact Form Submission from ${formData.name}`)
        web3formsParams.append('from_name', 'Arizona Window Washing Pros Website')

        console.log('Submitting to Web3Forms from client...')
        const web3formsResponse = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
          },
          body: web3formsParams.toString(),
        })

        const web3formsResult = await web3formsResponse.json()
        console.log('Web3Forms response:', web3formsResult)
        
        if (web3formsResult.success) {
          console.log('✅ Web3Forms submission successful!')
        } else {
          console.warn('⚠️ Web3Forms returned:', web3formsResult)
        }
      } catch (web3formsError) {
        console.error('Web3Forms error (non-critical):', web3formsError)
        // Continue - we'll also save to our API
      }

      // Also save to our API route for backup
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          city: formData.city,
          service: formData.service,
          message: formData.message,
        }),
      })

      let data
      try {
        data = await response.json()
      } catch (parseError) {
        console.error('Failed to parse response:', parseError)
        setSubmitStatus('error')
        setIsSubmitting(false)
        return
      }

      console.log('API Response:', { 
        status: response.status, 
        statusText: response.statusText,
        data: data,
        success: data.success 
      })

      if (response.ok && data.success) {
        console.log('✅ Form submitted successfully, redirecting...')
        console.log('Response message:', data.message)
        // Clear form data
        setFormData({
          name: '',
          phone: '',
          email: '',
          city: defaultCity,
          service: defaultService,
          message: '',
          company: '',
        })
        // Set success status
        setSubmitStatus('success')
        // Redirect to thank-you page on success
        try {
          router.push('/thank-you')
        } catch (redirectError) {
          console.error('Redirect error:', redirectError)
          // If redirect fails, the success message will show
        }
      } else {
        console.error('Form submission failed:', { status: response.status, data })
        setSubmitStatus('error')
        setIsSubmitting(false)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="card">
      <div className="p-8 md:p-10">
        {showTitle && (
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Get Your Free Quote
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Honeypot field */}
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                onChange={handleChange}
                className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-gray-50 focus:bg-white"
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
                onChange={handleChange}
                className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-gray-50 focus:bg-white"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-gray-50 focus:bg-white"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
                City
              </label>
              <select
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-gray-50 focus:bg-white"
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
              <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                Service
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-gray-50 focus:bg-white"
              >
                <option value="">Select a service</option>
                {SERVICES.map((service) => (
                  <option key={service.id} value={service.name}>
                    {service.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
            />
          </div>

          {submitStatus === 'success' && (
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 text-green-800 px-6 py-4 rounded-xl flex items-center space-x-3">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-semibold">Thanks! We&apos;ll call/text you shortly.</span>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-gradient-to-r from-red-50 to-rose-50 border-2 border-red-200 text-red-800 px-6 py-4 rounded-xl flex items-center space-x-3">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-semibold">There was an error submitting your form. Please try again or call us directly.</span>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting || submitStatus === 'success'}
            className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : submitStatus === 'success' ? 'Submitted!' : 'Get Free Quote'}
          </button>
        </form>
      </div>
    </div>
  )
}

