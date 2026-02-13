'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { BUSINESS_INFO } from '@/lib/constants'
import GallerySection from '@/components/GallerySection'
import CallSticker from '@/components/CallSticker'
import SocialMediaSticker from '@/components/SocialMediaSticker'
import LazyYouTube from '@/components/LazyYouTube'
import ContactForm from '@/components/ContactForm'
import { trackCallClick } from '@/lib/callTracking'

interface CityLandingProps {
  city: string
  nearbyAreas: string[]
  faqs: Array<{ question: string; answer: string }>
}

interface HeroSectionProps {
  city: string
  nearbyAreas: string[]
  handleCallClick: () => void
}

// Conversion-optimized hero section for Gilbert and Chandler
function ConversionOptimizedHeroSection({ city, nearbyAreas, handleCallClick }: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <section className="relative overflow-hidden min-h-[600px] md:min-h-[700px] flex items-center pt-8 pb-12 md:pt-16 md:pb-20">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectFit: 'cover' }}
        >
          <source src="/hero-video-new.mov" type="video/quicktime" />
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Logo */}
        <div className="flex justify-center mb-6 md:mb-8">
          <img 
            src="/AZWPlogo-Photoroom.png" 
            alt={BUSINESS_INFO.name}
            className="h-20 md:h-28 w-auto object-contain drop-shadow-2xl"
            style={{ filter: 'drop-shadow(2px 2px 8px rgba(0,0,0,0.8))' }}
          />
        </div>

        {/* Main Hero Content - Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Content & Form */}
          <div className="space-y-6">
            {/* Heading */}
            <div>
              {/* $100 OFF Badge */}
              <div className="inline-block mb-4">
                <span className="bg-yellow-400 text-gray-900 px-4 py-2 md:px-6 md:py-2 rounded-full font-bold text-xs md:text-base shadow-lg">
                  $100 OFF Your First Service Limited Availability
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-2xl" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
                {city === 'Gilbert' ? 'Gilbert, Arizona | Window Washing' : 
                 city === 'Chandler' ? 'Chandler, Arizona | Window Washing' : 
                 city === 'Scottsdale' ? 'Scottsdale, Arizona | Window Washing' : 
                 city === 'Queen Creek' ? 'Queen Creek, Arizona | Window Washing' : 
                 city === 'San Tan Valley' ? 'San Tan Valley, Arizona | Window Washing' : 
                 `${city} Window Washing`}
              </h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xl md:text-2xl font-bold text-white drop-shadow-lg" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>5 Star Reviews</span>
              </div>
              <p className="text-lg md:text-xl text-white mb-2 drop-shadow-lg" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
                100s of Arizona Homeowners Served
              </p>
              <p className="text-base md:text-lg text-white/95 drop-shadow-lg" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                Streak-free window cleaning for homes & businesses.
              </p>
            </div>

            {/* Form - Desktop */}
            <div id="quote-form" className="hidden md:block">
              <ContactForm defaultCity={city} showTitle={false} compact={true} />
            </div>

            {/* Mobile Form */}
            <div id="quote-form" className="md:hidden">
              <ContactForm defaultCity={city} showTitle={false} compact={true} />
            </div>
          </div>

          {/* Right: Testimonial Video */}
          <div className="flex flex-col items-center md:items-start">
            <div className="w-full max-w-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center md:text-left drop-shadow-lg" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>Client Testimonial</h2>
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

// Standard hero section for other cities
function StandardHeroSection({ city, nearbyAreas, handleCallClick }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden min-h-[600px] md:min-h-[700px] flex items-center pt-8 pb-12 md:pt-20 md:pb-32">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectFit: 'cover' }}
        >
          <source src="/hero-video-new.mov" type="video/quicktime" />
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Heading and Offer Badge */}
        <div className="text-center mb-6 md:mb-8">
          <div className="inline-block mb-4 md:mb-6">
            <span className="bg-yellow-400 text-gray-900 px-4 py-2 md:px-6 md:py-2 rounded-full font-bold text-xs md:text-base shadow-lg">
              $100 OFF Your First Service Limited Availability
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 drop-shadow-2xl" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            {city} Window Washing
          </h1>
          
          <p className="text-lg md:text-2xl text-white mb-4 md:mb-8 drop-shadow-lg" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
            Streak-free window cleaning for homes & businesses.
          </p>
        </div>

        {/* Form - Mobile First (appears right after heading) */}
        <div id="quote-form" className="mb-8 md:hidden">
          <ContactForm defaultCity={city} showTitle={false} compact={true} />
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left: Content */}
          <div className="text-center md:text-left">
            {/* Trust Bullets */}
            <div className="flex flex-wrap gap-3 md:gap-4 mb-6 md:mb-8 justify-center md:justify-start">
              <div className="flex items-center gap-2 text-gray-700 text-sm md:text-base">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 text-sm md:text-base">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Free Estimates</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 text-sm md:text-base">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Streak-Free Guarantee</span>
              </div>
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6 md:mb-8 justify-center md:justify-start">
              <a
                href={`tel:${BUSINESS_INFO.phoneFormatted}`}
                onClick={handleCallClick}
                data-cta="call"
                className="bg-blue-600 text-white font-bold text-lg md:text-xl py-3 md:py-4 px-6 md:px-8 rounded-lg hover:bg-blue-700 transition-colors shadow-lg text-center"
              >
 Call Now: {BUSINESS_INFO.phone}
              </a>
            </div>

            <p className="text-base md:text-lg text-gray-600">
              Serving {city} and nearby areas: {nearbyAreas.join(', ')}
            </p>
          </div>

          {/* Right: Form (Desktop) */}
          <div id="quote-form" className="hidden md:block">
            <ContactForm defaultCity={city} showTitle={false} compact={true} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default function CityLanding({ city, nearbyAreas, faqs }: CityLandingProps) {
  const handleCallClick = () => {
    trackCallClick(`city_landing_${city.toLowerCase().replace(' ', '_')}`)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'call_click', {
        city: city,
        page: `/${city.toLowerCase()}-window-washing`,
      })
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
              // Find the first visible form element
              const formSections = document.querySelectorAll('[id="quote-form"]')
              
              // On mobile, prefer the mobile form, on desktop prefer desktop form
              const isMobile = window.innerWidth < 768
              
              for (let i = 0; i < formSections.length; i++) {
                const section = formSections[i] as HTMLElement
                const computedStyle = window.getComputedStyle(section)
                
                if (computedStyle.display !== 'none' && computedStyle.visibility !== 'hidden') {
                  // Check if this is the right form for the current viewport
                  const isMobileForm = section.classList.contains('md:hidden')
                  const isDesktopForm = section.classList.contains('hidden') && section.classList.contains('md:block')
                  
                  if ((isMobile && isMobileForm) || (!isMobile && isDesktopForm) || (!isMobileForm && !isDesktopForm)) {
                    const yOffset = -20 // Small offset from top
                    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset
                    window.scrollTo({ top: y, behavior: 'smooth' })
                    return
                  }
                }
              }
              
              // Fallback: scroll to first visible form
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
      {['Gilbert', 'Chandler', 'Scottsdale', 'Queen Creek', 'San Tan Valley'].includes(city) ? (
        <ConversionOptimizedHeroSection 
          city={city}
          nearbyAreas={nearbyAreas}
          handleCallClick={handleCallClick}
        />
      ) : (
        <StandardHeroSection 
          city={city}
          nearbyAreas={nearbyAreas}
          handleCallClick={handleCallClick}
        />
      )}

      {/* Trust Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Why Choose Us for {city} Window Washing?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Locally Owned & Operated</h3>
                <p className="text-gray-600">We're a {city} area business, not a franchise. Your satisfaction is our reputation.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Equipment & Careful Workmanship</h3>
                <p className="text-gray-600">We use professional-grade tools and techniques for streak-free results every time.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Clear Pricing After Estimate</h3>
                <p className="text-gray-600">No surprises. We provide transparent pricing before we start any work.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No Pushy Upsells</h3>
                <p className="text-gray-600">We recommend what you need, not what we want to sell. Simple and honest.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">On-Time Appointments</h3>
                <p className="text-gray-600">We respect your time. When we say we'll be there, we're there.</p>
              </div>
            </div>
          </div>

          {/* What You Get Checklist */}
          <div className="bg-blue-50 rounded-2xl p-8 border-2 border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">What You Get</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Exterior window cleaning (all accessible windows)',
                'Track and sill cleaning',
                'Frame and edge cleaning',
                'Streak-free finish guarantee',
                'Professional equipment and techniques',
                'Eco-friendly cleaning solutions',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <GallerySection city={city} />

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

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Our {city} Window Washing Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Exterior Window Cleaning', desc: 'Complete exterior cleaning for all accessible windows' },
              { name: 'Interior Window Cleaning', desc: 'Optional add-on for interior glass cleaning' },
              { name: 'Screen Cleaning', desc: 'Thorough screen cleaning to remove dust and debris' },
              { name: 'Tracks & Sills', desc: 'Deep cleaning of window tracks and sills' },
              { name: 'Commercial Window Washing', desc: 'Professional service for businesses and offices' },
              { name: 'Hard Water Spot Evaluation', desc: 'Assessment and removal of hard water deposits' },
            ].map((service, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-colors">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Call or Request a Quote', desc: 'Call us at (480) 737-0850 or fill out the form above. We respond quickly.' },
              { step: '2', title: 'Get Fast Pricing', desc: 'We provide a free, same-day estimate. No surprises, clear pricing.' },
              { step: '3', title: 'We Clean — You Inspect', desc: 'Our team arrives on time, cleans your windows, and you inspect the results.' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
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
            Ready for Streak-Free Windows in {city}?
          </h2>
          <p className="text-xl mb-8">
            $100 OFF Your First Service Limited Availability
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

      {/* Sticky Call and Social Media Stickers - Only show for non-ad landing pages */}
      {!['Gilbert', 'Chandler', 'Scottsdale', 'Queen Creek', 'San Tan Valley'].includes(city) && (
        <>
          <CallSticker />
          <SocialMediaSticker />
        </>
      )}
    </>
  )
}

