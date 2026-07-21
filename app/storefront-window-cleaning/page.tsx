import ContentLandingPage, { generateContentLandingMetadata } from '@/components/seo/ContentLandingPage'
import { STOREFRONT_WINDOW_CLEANING } from '@/lib/specialtyServicePages'

export const dynamic = 'force-static'
export const metadata = generateContentLandingMetadata(STOREFRONT_WINDOW_CLEANING)

export default function StorefrontWindowCleaningPage() {
  return <ContentLandingPage config={STOREFRONT_WINDOW_CLEANING} />
}
