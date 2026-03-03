import { getServiceData } from '@/data/services'
import { generateMetadata } from './seo'

export function generateServiceMetadata(serviceSlug: string) {
  const serviceData = getServiceData(serviceSlug)
  
  if (!serviceData) {
    // Fallback for unknown services
    return generateMetadata({
      title: serviceSlug.replace(/-/g, ' '),
      description: `Professional ${serviceSlug.replace(/-/g, ' ')} services. Free quotes available.`,
      path: `/services/${serviceSlug}`,
    })
  }

  const title = serviceData.serviceName
  const description = `${serviceData.shortDescription} Starting at ${serviceData.startingPrice}. Licensed & insured. Free quotes. Call or text for same-day service.`

  return generateMetadata({
    title,
    description,
    path: `/services/${serviceSlug}`,
  })
}

