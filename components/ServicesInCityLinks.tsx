import Link from 'next/link'
import { SERVICES } from '@/lib/constants'

interface ServicesInCityLinksProps {
  city: string
  citySlug: string
  className?: string
}

export default function ServicesInCityLinks({ city, citySlug, className = '' }: ServicesInCityLinksProps) {
  return (
    <div className={className}>
      <h3 className="text-xl font-bold mb-4 text-gray-900">Our Services in {city}</h3>
      <ul className="space-y-2">
        {SERVICES.map((service) => (
          <li key={service.id}>
            <Link
              href={`/services/${service.slug}`}
              className="text-primary-600 hover:text-primary-700 hover:underline font-medium transition-colors"
            >
              {service.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}


