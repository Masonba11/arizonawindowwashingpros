import { MetadataRoute } from 'next'
import { BUSINESS_INFO, SERVICES, LOCATIONS } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BUSINESS_INFO.website

  // Static pages
  const routes = [
    '',
    '/about',
    '/contact',
    '/reviews',
    '/services',
    '/locations',
  ]

  // Service pages
  const serviceRoutes = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Location pages
  const locationRoutes = LOCATIONS.map((location) => ({
    url: `${baseUrl}/locations/${location.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // Static routes
  const staticRoutes = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? ('daily' as const) : ('monthly' as const),
    priority: route === '' ? 1.0 : 0.7,
  }))

  return [...staticRoutes, ...serviceRoutes, ...locationRoutes]
}

