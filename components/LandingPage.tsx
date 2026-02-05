'use client'

import { useState } from 'react'
import Image from 'next/image'
import { BUSINESS_INFO } from '@/lib/constants'

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

  const handleCall = () => {
    // Track call click
    if (typeof window !== 'undefined') {
      if ((window as any).gtag) {
        (window as any).gtag('event', 'click_call', {
          event_category: 'conversion',
          event_label: `${city}_landing_page`,
        })
      } else {
        console.log('Call CTA clicked:', city)
      }
    }
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('submitting')

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          city,
          source: 'google_ads_landing',
        }),
      })

      if (response.ok) {
        setFormStatus('success')
        // Track form submission
        if (typeof window !== 'undefined') {
          if ((window as any).gtag) {
            (window as any).gtag('event', 'submit_lead', {
              event_category: 'conversion',
              event_label: `${city}_landing_page`,
            })
          } else {
            console.log('Form submitted:', city)
          }
        }
        // Reset form
        setFormData({ name: '', phone: '', address: '', type: 'Residential', message: '' })
      } else {
        setFormStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setFormStatus('error')
    }
  }

  const services = [
    'Exterior Windows',
    'Interior Windows',
    'Screens',
    'Tracks & Sills',
    'Hard Water Spot Removal',
    'Commercial',
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Above the Fold */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Offer Badge */}
          <div className="inline-block mb-6">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-6 py-2 rounded-full font-bold text-sm md:text-base shadow-lg">
              $100 OFF Your First Service (Limited Time)
            </div>
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
            {city} Window Washing
          </h1>

          {/* Subhead */}
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Streak-free window cleaning for homes & businesses
          </p>

          {/* Trust Bullets */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span className="text-gray-700 font-semibold">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span className="text-gray-700 font-semibold">Free Estimates</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span className="text-gray-700 font-semibold">Streak-Free Guarantee</span>
            </div>
          </div>

          {/* Primary CTA - Call Button */}
          <div className="mb-8">
            <a
              href={`tel:${BUSINESS_INFO.phoneFormatted}`}
              onClick={handleCall}
              data-cta="call"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl md:text-2xl px-8 py-4 md:px-12 md:py-5 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-200 mb-4"
            >
              📞 Call Now: {BUSINESS_INFO.phone}
            </a>
            <p className="text-gray-600 text-sm md:text-base">
              Same-day estimates available • Fast response
            </p>
          </div>
        </div>
      </section>

      {/* Lead Form - Above fold on desktop, below on mobile */}
      <section id="quote-form" className="py-8 md:py-12 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-900">
            Get Your Free Estimate
          </h2>
          {formStatus === 'success' ? (
            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 text-center">
              <p className="text-green-800 font-bold text-lg mb-2">Thanks — we'll call you shortly!</p>
              <p className="text-green-700">Or call us now: <a href={`tel:${BUSINESS_INFO.phoneFormatted}`} className="font-bold underline">{BUSINESS_INFO.phone}</a></p>
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
                data-cta="form"
                disabled={formStatus === 'submitting'}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-4 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
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

      {/* How It Works */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Call or Request Quote</h3>
              <p className="text-gray-600">Contact us by phone or fill out the form above</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Get Same-Day Estimate</h3>
              <p className="text-gray-600">We'll provide a clear, upfront estimate</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">We Clean — You Inspect</h3>
              <p className="text-gray-600">Professional service with streak-free results</p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Gallery */}
      <section className="py-12 md:py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Our Work Gallery
          </h2>
          <p className="text-center text-gray-600 mb-8 text-lg">
            Professional window cleaning results from real jobs
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { src: '/gallery/IMG_0509.jpg', webp: '/gallery-optimized/IMG_0509.webp', caption: 'Hard water removal' },
              { src: '/gallery/IMG_0512.jpg', webp: '/gallery-optimized/IMG_0512.webp', caption: 'Track cleaning' },
              { src: '/gallery/IMG_0533.jpg', webp: '/gallery-optimized/IMG_0533.webp', caption: 'Exterior wash' },
              { src: '/gallery/IMG_0580.jpg', webp: '/gallery-optimized/IMG_0580.webp', caption: 'Screen cleaning' },
              { src: '/gallery/IMG_0582.jpg', webp: '/gallery-optimized/IMG_0582.webp', caption: 'Interior detail' },
            ].map((item, index) => (
              <div key={index} className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg border border-gray-200 group">
                <picture>
                  <source srcSet={item.webp} type="image/webp" />
                  <Image
                    src={item.src}
                    alt={item.caption}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    style={{ transform: 'rotate(90deg)' }}
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    loading="lazy"
                    quality={70}
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-2">
                    <p className="text-white text-xs font-semibold text-center">{item.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Our Services in {city}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {services.map((service) => (
              <div
                key={service}
                className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-blue-500 transition-colors"
              >
                <p className="font-semibold text-gray-900">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Why Choose Us
          </h2>
          <div className="space-y-4">
            {[
              'Locally owned and operated in the {city} area',
              'Professional equipment and eco-friendly solutions',
              'On-time appointments with reliable scheduling',
              'Clear pricing after free estimate',
              'Satisfaction guaranteed — we stand behind our work',
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl flex-shrink-0">✓</span>
                <p className="text-lg text-gray-700">{item.replace('{city}', city)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Nearby */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600">
            <strong>Service Areas Nearby:</strong> {nearbyAreas.join(', ')}
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <div className="inline-block bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-bold text-sm md:text-base mb-6">
              $100 OFF Your First Service (Limited Time)
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Crystal-Clear Windows in {city}?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Call now for fastest scheduling or get your free estimate above
          </p>
          <a
            href={`tel:${BUSINESS_INFO.phoneFormatted}`}
            onClick={handleCall}
            data-cta="call"
            className="inline-block bg-white text-blue-600 hover:bg-blue-50 font-bold text-xl md:text-2xl px-10 py-5 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-200"
          >
            📞 Call {BUSINESS_INFO.phone}
          </a>
        </div>
      </section>

      {/* Mobile Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-blue-600 shadow-2xl md:hidden">
        <div className="flex gap-2 p-3">
          <a
            href={`tel:${BUSINESS_INFO.phoneFormatted}`}
            onClick={handleCall}
            data-cta="call"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center font-bold py-3 rounded-lg"
          >
            Call Now
          </a>
          <a
            href="#quote-form"
            data-cta="form"
            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 text-center font-bold py-3 rounded-lg"
          >
            Get Quote
          </a>
        </div>
      </div>
    </div>
  )
}

