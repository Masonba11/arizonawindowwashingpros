import ContentLandingPage, { generateContentLandingMetadata } from '@/components/seo/ContentLandingPage'
import { INTERIOR_EXTERIOR_WINDOW_CLEANING } from '@/lib/specialtyServicePages'

export const dynamic = 'force-static'
export const metadata = generateContentLandingMetadata(INTERIOR_EXTERIOR_WINDOW_CLEANING)

export default function InteriorExteriorWindowCleaningPage() {
  return <ContentLandingPage config={INTERIOR_EXTERIOR_WINDOW_CLEANING} />
}
