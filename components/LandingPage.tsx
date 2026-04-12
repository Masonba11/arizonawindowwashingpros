'use client'

import { useState } from 'react'
import { BUSINESS_INFO } from '@/lib/constants'
import { trackCallClick } from '@/lib/callTracking'
import { submitWeb3FormsFromBrowser } from '@/lib/web3formsClient'

interface LandingPageProps {
  city: string
  nearbyAreas: string[]
  faqs: Array<{ question: string; answer: string }>
}

export default function LandingPage({ city, nearbyAreas, faqs }: LandingPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    type: 'Residential',
    message: '',
  })
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('submitting')

    try {
      const digits = formData.phone.replace(/\D/g, '')
      const email =
        digits.length > 0 ? `${digits}@noreply.com` : `lead-${Date.now()}@noreply.com`

      const result = await submitWeb3FormsFromBrowser({
        name: formData.name,
        phone: formData.phone,
        email,
        address: formData.address,
        message: `Service Type: ${formData.type}\nAddress: ${formData.address}\nCity: ${city}\nSource: google_ads_landing\n\nMessage: ${formData.message || 'No additional message'}`,
        subject: `New Lead: ${formData.type} Window Cleaning - ${city}`,
        from_name: 'Arizona Window Washing Pros',
      })

      if (result.success) {
        setFormStatus('success')
        if (typeof window !== 'undefined') {
          if ((window as any).gtag) {
            (window as any).gtag('event', 'submit_lead', {
              event_category: 'conversion',
              event_label: `${city}_landing_page`,
            })
          }
        }
        setFormData({ name: '', phone: '', address: '', type: 'Residential', message: '' })
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            {city} Window Cleaning
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Professional window cleaning services for homes and businesses
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="text-gray-700">✓ Licensed & Insured</span>
            <span className="text-gray-700">✓ Free Estimates</span>
            <span className="text-gray-700">✓ Same-Day Service</span>
          </div>
          <a
            href={`tel:${BUSINESS_INFO.phoneFormatted}`}
            onClick={() => trackCallClick(`${city}_landing_page`)}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg transition"
          >
            Call {BUSINESS_INFO.phone}
          </a>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 md:py-16 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-900">
            Get Your Free Estimate
          </h2>
          {formStatus === 'success' ? (
            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 text-center">
              <p className="text-green-800 font-bold text-lg mb-2">Thank you! We'll call you shortly.</p>
              <p className="text-green-700">Or call us now: <a href={`tel:${BUSINESS_INFO.phoneFormatted}`} onClick={() => trackCallClick(`${city}_landing_page_success`)} className="font-bold underline">{BUSINESS_INFO.phone}</a></p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="(480) 555-1234"
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-1">
                  Address / City *
                </label>
                <input
                  type="text"
                  id="address"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder={`${city}, AZ`}
                />
              </div>
              <div>
                <label htmlFor="type" className="block text-sm font-semibold text-gray-700 mb-1">
                  Type *
                </label>
                <select
                  id="type"
                  required
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Any specific requests or questions?"
                />
              </div>
              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-4 rounded-lg shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === 'submitting' ? 'Submitting...' : 'Get Free Estimate'}
              </button>
              {formStatus === 'error' && (
                <p className="text-red-600 text-sm text-center">Something went wrong. Please call us directly.</p>
              )}
            </form>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">
            Why Choose Us
          </h2>
          <div className="space-y-3">
            {[
              `Locally owned and operated in ${city}`,
              'Professional equipment and eco-friendly solutions',
              'On-time appointments with reliable scheduling',
              'Clear pricing after free estimate',
              'Satisfaction guaranteed',
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-lg">✓</span>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-bold mb-2 text-gray-900">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready for Crystal-Clear Windows?
          </h2>
          <p className="text-lg mb-6 text-blue-100">
            Call us today for your free estimate
          </p>
          <a
            href={`tel:${BUSINESS_INFO.phoneFormatted}`}
            onClick={() => trackCallClick(`${city}_landing_page`)}
            className="inline-block bg-white text-blue-600 hover:bg-blue-50 font-bold text-lg px-8 py-4 rounded-lg shadow-lg transition"
          >
            Call {BUSINESS_INFO.phone}
          </a>
        </div>
      </section>
    </div>
  )
}
