import { MetadataRoute } from 'next'
import { BUSINESS_INFO, SERVICES, LOCATIONS } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BUSINESS_INFO.website
  const now = new Date()
  
  // Homepage - highest priority
  const homepage = {
    url: baseUrl,
    lastModified: now,
    changeFrequency: 'daily' as const,
    priority: 1.0,
  }

  // High-priority static pages
  const highPriorityPages = [
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ]

  // Location pages - high priority for local SEO
  const locationRoutes = LOCATIONS.map((location) => ({
    url: `${baseUrl}/locations/${location.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.95, // Very high priority for location-based SEO
  }))

  // Service pages - important for service-based SEO
  const serviceRoutes = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85, // High priority for service pages
  }))

  // Secondary pages
  const secondaryPages = [
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/reviews`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8, // Reviews are important for local SEO
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // Return in priority order: homepage, locations, services, then other pages
  return [
    homepage,
    ...locationRoutes,
    ...highPriorityPages,
    ...serviceRoutes,
    ...secondaryPages,
  ]
}

