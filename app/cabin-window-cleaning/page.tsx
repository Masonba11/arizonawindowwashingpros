import ContentLandingPage, { generateContentLandingMetadata } from '@/components/seo/ContentLandingPage'
import { CABIN_WINDOW_CLEANING } from '@/lib/specialtyServicePages'

export const dynamic = 'force-static'
export const metadata = generateContentLandingMetadata(CABIN_WINDOW_CLEANING)

export default function CabinWindowCleaningPage() {
  return <ContentLandingPage config={CABIN_WINDOW_CLEANING} />
}
