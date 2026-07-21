import Link from 'next/link'
import { BUSINESS_INFO } from '@/lib/constants'

export default function NotFound() {
  return (
    <div className="section-padding bg-white">
      <div className="container-custom max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-lg text-gray-700 mb-8">
          The page you requested is not available. Return home or request a free window cleaning quote.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Go to Homepage
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact Us
          </Link>
          <a href={`tel:${BUSINESS_INFO.phoneFormatted}`} className="btn-secondary">
            Call {BUSINESS_INFO.phone}
          </a>
        </div>
      </div>
    </div>
  )
}
