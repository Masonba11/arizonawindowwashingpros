import { getCityData } from '@/data/cities'
import { generateMetadata } from './seo'

export function generateCityMetadata(citySlug: string) {
  const cityData = getCityData(citySlug)
  
  if (!cityData) {
    // Fallback for unknown cities
    return generateMetadata({
      title: `Window Cleaning in ${citySlug.replace(/-/g, ' ')}`,
      description: `Professional window cleaning services. Free quotes available.`,
      path: `/locations/${citySlug}`,
    })
  }

  const title = cityData.uniqueTitleVariant || `Window Cleaning in ${cityData.cityName}, AZ`
  const description = cityData.uniqueMetaVariant || 
    `Professional window cleaning in ${cityData.cityName}, Arizona. Deionized water system removes hard water stains. Licensed & insured. Starting at $150. Free quotes.`

  return generateMetadata({
    title,
    description,
    path: `/locations/${citySlug}`,
  })
}

