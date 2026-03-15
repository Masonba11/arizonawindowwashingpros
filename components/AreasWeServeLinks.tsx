import Link from 'next/link'
import { LOCATIONS } from '@/lib/constants'

interface AreasWeServeLinksProps {
  currentCity?: string
  className?: string
}

export default function AreasWeServeLinks({ currentCity, className = '' }: AreasWeServeLinksProps) {
  const filteredLocations = currentCity 
    ? LOCATIONS.filter(loc => loc.slug !== currentCity)
    : LOCATIONS

  return (
    <div className={className}>
      <h3 className="text-xl font-bold mb-4 text-gray-900">Areas We Serve</h3>
      <div className="flex flex-wrap gap-2">
        {filteredLocations.map((location) => (
          <Link
            key={location.id}
            href={`/locations/${location.slug}`}
            className="text-primary-600 hover:text-primary-700 hover:underline font-medium transition-colors"
          >
            {location.name}
          </Link>
        ))}
      </div>
    </div>
  )
}


