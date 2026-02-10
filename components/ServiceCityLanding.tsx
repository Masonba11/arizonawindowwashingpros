'use client'

import { useState, useRef } from 'react'
import { BUSINESS_INFO } from '@/lib/constants'
import GallerySection from '@/components/GallerySection'
import LazyYouTube from '@/components/LazyYouTube'

interface ServiceCityLandingProps {
  service: string
  serviceSlug: string
  city: string
  nearbyAreas: string[]
  faqs: Array<{ question: string; answer: string }>
}

interface HeroSectionProps {
  service: string
  city: string
  nearbyAreas: string[]
  formData: {
    name: string
    phone: string
    address: string
    type: string
    message: string
  }
  setFormData: React.Dispatch<React.SetStateAction<{
    name: string
    phone: string
    address: string
    type: string
    message: string
  }>>
  formStatus: 'idle' | 'submitting' | 'success' | 'error'
  handleFormSubmit: (e: React.FormEvent) => void
  handleCallClick: () => void
}

// Conversion-optimized hero section for service+location pages
function ConversionOptimizedHeroSection({ service, city, nearbyAreas, formData, setFormData, formStatus, handleFormSubmit, handleCallClick }: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  const getCityHeading = () => {
    const cityHeadings: { [key: string]: string } = {
      'Gilbert': 'Gilbert, Arizona',
      'Chandler': 'Chandler, Arizona',
      'Scottsdale': 'Scottsdale, Arizona',
      'Mesa': 'Mesa, Arizona',
      'Tempe': 'Tempe, Arizona',
      'Queen Creek': 'Queen Creek, Arizona',
    }
    return cityHeadings[city] || city
  }

  return (
    <section className="relative bg-white pt-8 pb-12 md:pt-16 md:pb-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Logo */}
        <div className="flex justify-center mb-6 md:mb-8">
          <img 
            src="/AZWPlogo-Photoroom.png" 
            alt={BUSINESS_INFO.name}
            className="h-20 md:h-28 w-auto object-contain"
          />
        </div>

        {/* Main Hero Content - Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Content & Form */}
          <div className="space-y-6">
            {/* Heading */}
            <div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                {service} in {getCityHeading()}
              </h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xl md:text-2xl font-bold text-gray-900">5 Star Reviews</span>
              </div>
              <p className="text-lg md:text-xl text-gray-700 mb-2">
                100s of Arizona Homeowners Served
              </p>
              <p className="text-base md:text-lg text-gray-600">
                Professional {service.toLowerCase()} services in {city}.
              </p>
            </div>

            {/* Form - Desktop */}
            <div id="quote-form" className="hidden md:block">
              <div className="bg-white rounded-2xl shadow-2xl p-6 border-2 border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">Get Your Free Quote</h2>
                {formStatus === 'success' ? (
                  <div className="text-center py-6">
                    <div className="text-green-600 text-4xl mb-3">✓</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-gray-700 mb-4 text-sm">We'll call you shortly.</p>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneFormatted}`}
                      onClick={handleCallClick}
                      className="inline-block bg-blue-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                    >
                      Or Call Now: {BUSINESS_INFO.phone}
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 text-sm border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Phone *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 text-sm border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="(480) 555-1234"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Address or City</label>
                      <input
                        type="text"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full px-3 py-2 text-sm border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder={city}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Type</label>
                      <select
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="w-full px-3 py-2 text-sm border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Message (optional)</label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={2}
                        className="w-full px-3 py-2 text-sm border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      data-cta="form"
                      className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                    >
                      {formStatus === 'submitting' ? 'Submitting...' : 'Get Free Quote'}
                    </button>
                    {formStatus === 'error' && (
                      <p className="text-red-600 text-xs text-center">
                        Something went wrong. Please call us at {BUSINESS_INFO.phone}
                      </p>
                    )}
                  </form>
                )}
              </div>
            </div>

            {/* Mobile Form */}
            <div id="quote-form" className="md:hidden">
              <div className="bg-white rounded-2xl shadow-2xl p-6 border-2 border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">Get Your Free Quote</h2>
                {formStatus === 'success' ? (
                  <div className="text-center py-6">
                    <div className="text-green-600 text-4xl mb-3">✓</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-gray-700 mb-4 text-sm">We'll call you shortly.</p>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneFormatted}`}
                      onClick={handleCallClick}
                      className="inline-block bg-blue-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                    >
                      Or Call Now: {BUSINESS_INFO.phone}
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 text-sm border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Phone *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 text-sm border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="(480) 555-1234"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Address or City</label>
                      <input
                        type="text"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full px-3 py-2 text-sm border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder={city}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Type</label>
                      <select
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="w-full px-3 py-2 text-sm border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Message (optional)</label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={2}
                        className="w-full px-3 py-2 text-sm border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      data-cta="form"
                      className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                    >
                      {formStatus === 'submitting' ? 'Submitting...' : 'Get Free Quote'}
                    </button>
                    {formStatus === 'error' && (
                      <p className="text-red-600 text-xs text-center">
                        Something went wrong. Please call us at {BUSINESS_INFO.phone}
                      </p>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Right: Testimonial Video */}
          <div className="flex flex-col items-center md:items-start">
            <div className="w-full max-w-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center md:text-left">Client Testimonial</h2>
              <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl bg-gray-900">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                >
                  <source src="/riverside-testimonial.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="text-center mt-4">
                <a
                  href={`tel:${BUSINESS_INFO.phoneFormatted}`}
                  onClick={handleCallClick}
                  className="bg-blue-600 text-white font-bold text-lg py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors shadow-lg inline-block"
                >
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ServiceCityLanding({ service, serviceSlug, city, nearbyAreas, faqs }: ServiceCityLandingProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    type: 'Residential',
    message: '',
  })
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleCallClick = () => {
    if (typeof window !== 'undefined') {
      if ((window as any).gtag) {
        (window as any).gtag('event', 'call_click', {
          service: serviceSlug,
          city: city,
          page: `/${serviceSlug}-${city.toLowerCase().replace(' ', '-')}`,
        })
      }
    }
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('submitting')

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          city: city,
          service: service,
          source: 'Google Ads Landing Page',
        }),
      })

      const result = await response.json()

      if (result.success) {
        setFormStatus('success')
        if (typeof window !== 'undefined') {
          if ((window as any).gtag) {
            (window as any).gtag('event', 'lead_submit', {
              service: serviceSlug,
              city: city,
              page: `/${serviceSlug}-${city.toLowerCase().replace(' ', '-')}`,
            })
          }
        }
      } else {
        setFormStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setFormStatus('error')
    }
  }

  return (
    <>
      {/* Mobile Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t-2 border-blue-600 shadow-2xl">
        <div className="flex">
          <a
            href={`tel:${BUSINESS_INFO.phoneFormatted}`}
            onClick={handleCallClick}
            data-cta="call"
            className="flex-1 bg-blue-600 text-white font-bold py-4 px-4 text-center hover:bg-blue-700 transition-colors"
          >
            Call Now
          </a>
          <button
            onClick={() => {
              const formSections = document.querySelectorAll('[id="quote-form"]')
              const isMobile = window.innerWidth < 768
              
              for (let i = 0; i < formSections.length; i++) {
                const section = formSections[i] as HTMLElement
                const computedStyle = window.getComputedStyle(section)
                
                if (computedStyle.display !== 'none' && computedStyle.visibility !== 'hidden') {
                  const isMobileForm = section.classList.contains('md:hidden')
                  const isDesktopForm = section.classList.contains('hidden') && section.classList.contains('md:block')
                  
                  if ((isMobile && isMobileForm) || (!isMobile && isDesktopForm) || (!isMobileForm && !isDesktopForm)) {
                    const yOffset = -20
                    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset
                    window.scrollTo({ top: y, behavior: 'smooth' })
                    return
                  }
                }
              }
              
              for (let i = 0; i < formSections.length; i++) {
                const section = formSections[i] as HTMLElement
                const computedStyle = window.getComputedStyle(section)
                if (computedStyle.display !== 'none' && computedStyle.visibility !== 'hidden') {
                  const yOffset = -20
                  const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset
                  window.scrollTo({ top: y, behavior: 'smooth' })
                  return
                }
              }
            }}
            data-cta="form"
            className="flex-1 bg-gray-100 text-gray-900 font-bold py-4 px-4 text-center hover:bg-gray-200 transition-colors"
          >
            Get Quote
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <ConversionOptimizedHeroSection 
        service={service}
        city={city}
        nearbyAreas={nearbyAreas}
        formData={formData}
        setFormData={setFormData}
        formStatus={formStatus}
        handleFormSubmit={handleFormSubmit}
        handleCallClick={handleCallClick}
      />

      {/* Trust Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Why Choose Us for {service} in {city}?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Licensed & Insured</h3>
                <p className="text-gray-600">Fully licensed and insured for your protection and peace of mind.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Free Estimates</h3>
                <p className="text-gray-600">No obligation free estimates. We provide transparent pricing upfront.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Equipment</h3>
                <p className="text-gray-600">We use professional-grade tools and techniques for superior results.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Satisfaction Guaranteed</h3>
                <p className="text-gray-600">Your satisfaction is our priority. We stand behind our work.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <GallerySection service={service} />

      {/* YouTube Videos Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">See Us In Action</h2>
            <p className="text-lg text-gray-700">
              Watch our professional window cleaning team at work
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <LazyYouTube
              videoId="TpGGKeABfCI"
              title="Arizona Window Washing Pros - Video 1"
              className="max-w-md mx-auto"
            />
            <LazyYouTube
              videoId="GdNlH8GPhL0"
              title="Arizona Window Washing Pros - Video 2"
              className="max-w-md mx-auto"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border-2 border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Professional {service} in {city}?
          </h2>
          <p className="text-xl mb-8">
            $100 OFF Your First Service — Limited Availability
          </p>
          <a
            href={`tel:${BUSINESS_INFO.phoneFormatted}`}
            onClick={handleCallClick}
            data-cta="call"
            className="inline-block bg-white text-blue-600 font-bold text-xl py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors shadow-lg mb-4"
          >
            Call Now: {BUSINESS_INFO.phone}
          </a>
          <p className="text-blue-100">
            Or fill out the form above for a free quote
          </p>
        </div>
      </section>
    </>
  )
}

