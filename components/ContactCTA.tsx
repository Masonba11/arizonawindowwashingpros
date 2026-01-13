import Link from 'next/link'
import { BUSINESS_INFO } from '@/lib/constants'

export default function ContactCTA() {
  return (
    <div className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white section-padding overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl"></div>
      
      <div className="container-custom text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Ready for Crystal-Clear Windows?
        </h2>
        <p className="text-xl md:text-2xl mb-10 text-primary-100 max-w-2xl mx-auto">
          Get your free quote today. We serve Mesa, Gilbert, Queen Creek, and Chandler.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${BUSINESS_INFO.phoneFormatted}`}
            className="btn-secondary bg-white text-primary-600 hover:bg-primary-50 border-white"
          >
            Call Now: {BUSINESS_INFO.phone}
          </a>
          <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:from-white hover:to-primary-50 border-white">
            Get Free Quote
          </Link>
        </div>
      </div>
    </div>
  )
}

