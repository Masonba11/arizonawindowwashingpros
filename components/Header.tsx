'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { BUSINESS_INFO, SERVICES, LOCATIONS, getLocationHref } from '@/lib/constants'
import { trackCallClick } from '@/lib/callTracking'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [locationsOpen, setLocationsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/98 shadow-soft backdrop-blur-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-24 md:h-28 lg:h-32">
          {/* Logo */}
          <Link href="/" className="flex items-center h-full">
            <img 
              src="/AZWPlogo-Photoroom.png" 
              alt={BUSINESS_INFO.name}
              className="h-20 md:h-24 lg:h-28 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all group-hover:w-full"></span>
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary-600 font-medium flex items-center">
                Services
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 w-64 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="rounded-xl border border-gray-100 bg-white shadow-large overflow-hidden">
                  <div className="py-2 max-h-[70vh] overflow-y-auto">
                    {SERVICES.map((service) => (
                      <Link
                        key={service.id}
                        href={`/services/${service.slug}`}
                        className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-primary-50 hover:to-transparent hover:text-primary-600 transition-all duration-200"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Locations Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary-600 font-medium flex items-center">
                Locations
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 w-64 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="rounded-xl border border-gray-100 bg-white shadow-large overflow-hidden">
                  <div className="py-2 max-h-[70vh] overflow-y-auto">
                    {LOCATIONS.map((location) => (
                      <Link
                        key={location.id}
                        href={getLocationHref(location)}
                        className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-primary-50 hover:to-transparent hover:text-primary-600 transition-all duration-200"
                      >
                        {location.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link href="/reviews" className="text-gray-700 hover:text-primary-600 font-medium transition-colors relative group">
              Reviews
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-600 font-medium transition-colors relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-600 font-medium transition-colors relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Phone CTA Button - More Visible */}
          <a
            href={`tel:${BUSINESS_INFO.phoneFormatted}`}
            className="hidden md:flex btn-primary text-base font-bold px-6 py-3 shadow-lg hover:shadow-xl transition-shadow"
            onClick={() => trackCallClick('header_call')}
          >
            {BUSINESS_INFO.phone}
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="space-y-2">
              <Link
                href="/"
                className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* Services Accordion */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="w-full flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-primary-50"
                >
                  <span>Services</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {servicesOpen && (
                  <div className="pl-4 space-y-1">
                    {SERVICES.map((service) => (
                      <Link
                        key={service.id}
                        href={`/services/${service.slug}`}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-primary-50 hover:text-primary-600"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Locations Accordion */}
              <div>
                <button
                  onClick={() => setLocationsOpen(!locationsOpen)}
                  className="w-full flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-primary-50"
                >
                  <span>Locations</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${locationsOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {locationsOpen && (
                  <div className="pl-4 space-y-1">
                    {LOCATIONS.map((location) => (
                      <Link
                        key={location.id}
                        href={getLocationHref(location)}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-primary-50 hover:text-primary-600"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {location.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/reviews"
                className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Reviews
              </Link>
              <Link
                href="/about"
                className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>

            {/* Mobile Phone CTA */}
            <div className="mt-4 px-4">
              <a
                href={`tel:${BUSINESS_INFO.phoneFormatted}`}
                className="block w-full btn-primary text-center"
                onClick={() => {
                  setMobileMenuOpen(false)
                  trackCallClick('mobile_header_call')
                }}
              >
                Call {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

