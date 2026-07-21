import { MetadataRoute } from 'next'
import { BUSINESS_INFO, LOCATIONS, SERVICES, getLocationHref } from '@/lib/constants'
import { PINETOP_AD_PATH } from '@/lib/pinetopShowLow'
import { getAllBlogPosts } from '@/lib/blog'
import { getAllSpecialtyPaths } from '@/lib/specialtyServicePages'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BUSINESS_INFO.website

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/commercial-window-cleaning-arizona`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}${PINETOP_AD_PATH}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/reviews`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  const specialtyPages = getAllSpecialtyPaths().map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  const cityPages = LOCATIONS.map((location) => ({
    url: `${baseUrl}${getLocationHref(location)}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority:
      location.id === 'pinetop-lakeside' ||
      location.id === 'show-low' ||
      location.id === 'snowflake' ||
      location.id === 'pinetop-show-low'
        ? 0.9
        : 0.8,
  }))

  const servicePages = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const blogPages = getAllBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.dateModified ? new Date(post.dateModified) : new Date(post.datePublished),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...specialtyPages, ...cityPages, ...servicePages, ...blogPages]
}
