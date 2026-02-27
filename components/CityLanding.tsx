'use client'

import { BUSINESS_INFO } from '@/lib/constants'
import CallSticker from '@/components/CallSticker'
import SocialMediaSticker from '@/components/SocialMediaSticker'
import GetFreeQuoteSticker from '@/components/GetFreeQuoteSticker'
import ContactForm from '@/components/ContactForm'
import GoogleReviewsSlider from '@/components/GoogleReviewsSlider'
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

  return (
    <>
      {/* Hero Section with Image - Mobile: ends at form, Desktop: full section */}
      <section className="relative overflow-hidden md:min-h-[450px] flex items-center pt-16 pb-8 md:pt-16 md:pb-12">
        {/* Image Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/azwwppt2.png"
            alt="Arizona Window Washing Pros"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectFit: 'cover' }}
          />
          {/* Dimmed overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10 pt-0 md:pt-4 w-full">
        {/* Top Row: Logo + 20% OFF Badge */}
        <div className="flex items-center justify-between mb-4 md:mb-6 gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/AZWPlogo-Photoroom.png" 
              alt={BUSINESS_INFO.name}
              className="h-32 md:h-40 w-auto object-contain drop-shadow-2xl"
              style={{ 
                filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.8)) drop-shadow(0 0 20px rgba(255, 255, 255, 0.6)) drop-shadow(0 0 30px rgba(255, 255, 255, 0.4)) drop-shadow(2px 2px 8px rgba(0,0,0,0.8))'
              }}
            />
          </div>
          {/* 20% OFF Badge */}
          <div className="flex-shrink-0">
            <span className="bg-yellow-400 text-gray-900 px-4 py-2 md:px-6 md:py-2 rounded-full font-bold text-xs md:text-base shadow-lg">
              20% off your whole cleaning service
            </span>
          </div>
        </div>

        {/* Main Hero Content - Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left: Content & Form */}
          <div className="space-y-6">
            {/* Heading */}
            <div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-2 md:mb-3 drop-shadow-2xl" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
                {city === 'Gilbert' ? 'Gilbert, Arizona | Window Cleaning' : 
                 city === 'Chandler' ? 'Chandler, Arizona | Window Cleaning' : 
                 city === 'Scottsdale' ? 'Scottsdale, Arizona | Window Cleaning' : 
                 city === 'Queen Creek' ? 'Queen Creek, Arizona | Window Cleaning' : 
                 city === 'San Tan Valley' ? 'San Tan Valley, Arizona | Window Cleaning' : 
                 city === 'East Valley' ? 'East Valley, Arizona | Window Cleaning' : 
                 `${city} Window Cleaning`}
              </h1>
              <div className="flex items-center gap-2 mb-2 md:mb-3">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xl md:text-2xl font-bold text-white drop-shadow-lg" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>5 Star Rated</span>
                <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <p className="text-lg md:text-xl text-white mb-1 md:mb-2 drop-shadow-lg" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
                1000s of homes served across the valley
              </p>
              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-3 md:gap-4 mb-2 md:mb-3">
                <div className="flex items-center gap-2 text-white">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold text-sm md:text-base drop-shadow-lg" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold text-sm md:text-base drop-shadow-lg" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>Free In Person Quotes</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold text-sm md:text-base drop-shadow-lg" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>Mon-Sun 7am-7pm</span>
                </div>
              </div>
              <p className="text-base md:text-lg text-white/95 drop-shadow-lg" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                Streak-free window cleaning for homes & businesses.
              </p>
            </div>

            {/* Services Line */}
            <p className="text-base md:text-lg text-white mb-4 drop-shadow-lg text-center md:text-left" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
              Interior cleaning, Exterior cleaning, Tracks & sills, Screens we handle it all.
            </p>

            {/* Form - Desktop */}
            <div id="quote-form" className="hidden md:block">
              <ContactForm defaultCity={city} showTitle={false} compact={true} />
            </div>

            {/* Mobile Form */}
            <div id="quote-form" className="md:hidden">
              <ContactForm defaultCity={city} showTitle={false} compact={true} />
            </div>

          </div>

          {/* Right: Testimonial Video, Reviews, Call Button & Pricing */}
          <div className="flex flex-col items-center md:items-start -mt-6 md:-mt-2">
            <div className="w-full max-w-lg">
              {/* Google Reviews Widget - Mobile Only */}
              <div className="md:hidden mb-6">
                <GoogleReviewsSlider compact={true} />
              </div>
              
              {/* Google Reviews Widget - Desktop Only */}
              <div className="hidden md:block mb-4">
                <GoogleReviewsSlider compact={true} />
              </div>
              
              {/* Call Us Now Button - Desktop Only */}
              <div className="hidden md:block text-center md:text-left mt-4 mb-6">
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

    {/* What Makes Us Different Section */}
    <section className="pt-4 md:pt-8 pb-16 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Makes Us Different in {city}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 md:p-12 border-2 border-blue-100 shadow-xl">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-base md:text-lg">
              In Arizona the water is extremely mineral heavy. That means even after a traditional cleaning, microscopic calcium and mineral deposits can remain on the glass. Once the water dries, those deposits turn into visible streaks and hard water marks.
            </p>
            
            <div className="bg-blue-600 text-white rounded-xl p-6 text-center my-8">
              <p className="text-xl md:text-2xl font-bold">
                We operate differently.
              </p>
            </div>
            
            <p className="text-base md:text-lg">
              Arizona Window Washing Pros uses a professional grade Deionized water purification system. This is advanced filtration technology designed to remove dissolved minerals and impurities from the water before it ever touches your windows.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 my-8">
              <div className="bg-white rounded-lg p-4 border-2 border-blue-200 text-center">
                <div className="text-3xl mb-2">✨</div>
                <p className="font-semibold text-gray-900">No Streaks</p>
              </div>
              <div className="bg-white rounded-lg p-4 border-2 border-blue-200 text-center">
                <div className="text-3xl mb-2">💎</div>
                <p className="font-semibold text-gray-900">No Spotting</p>
              </div>
              <div className="bg-white rounded-lg p-4 border-2 border-blue-200 text-center">
                <div className="text-3xl mb-2">🌟</div>
                <p className="font-semibold text-gray-900">No Residue</p>
              </div>
            </div>
            
            <p className="text-base md:text-lg">
              What remains is ultra purified water that dries crystal clear. No streaks. No spotting. No residue left behind.
            </p>
            
            <p className="text-base md:text-lg">
              Because the water contains zero minerals, it evaporates cleanly and helps reduce future buildup. Your glass is left with a refined, polished appearance that stays cleaner longer.
            </p>
            
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-blue-600 my-8">
              <p className="text-base md:text-lg font-semibold text-gray-900 italic">
                This is not basic bucket cleaning. This is precision water purification engineered for high end residential properties in {city}.
              </p>
            </div>
            
            <p className="text-base md:text-lg font-semibold text-gray-900 text-center">
              For homeowners who expect clarity, longevity, and a higher standard of care, this is the difference.
            </p>
            
            <p className="text-base md:text-lg font-semibold text-gray-900 text-center mt-6">
              This is more than just cleaning your windows, it is also our mission to protect your asset.
            </p>
          </div>
        </div>
      </div>
    </section>

    </>
  )
}

// Standard hero section for other cities
function StandardHeroSection({ city, nearbyAreas, handleCallClick }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden min-h-[600px] md:min-h-[700px] flex items-center pt-20 pb-12 md:pt-20 md:pb-32">
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
              20% off your whole cleaning service
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 drop-shadow-2xl" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            {city} Window Cleaning
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

      {/* Hero Section */}
      {['Gilbert', 'Chandler', 'Scottsdale', 'Queen Creek', 'San Tan Valley', 'East Valley'].includes(city) ? (
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

      {/* Sticky Call and Social Media Stickers - Only show for non-ad landing pages */}
      {!['Gilbert', 'Chandler', 'Scottsdale', 'Queen Creek', 'San Tan Valley', 'East Valley'].includes(city) && (
        <>
          <CallSticker />
          <SocialMediaSticker />
        </>
      )}

      {/* Sticky Call and Get Free Quote Stickers - Only show for ad landing pages */}
      {['Gilbert', 'Chandler', 'Scottsdale', 'Queen Creek', 'San Tan Valley', 'East Valley'].includes(city) && (
        <>
          <CallSticker />
          <GetFreeQuoteSticker />
        </>
      )}
    </>
  )
}

