import ContentLandingPage, { generateContentLandingMetadata } from '@/components/seo/ContentLandingPage'
import { SCREEN_TRACK_CLEANING } from '@/lib/specialtyServicePages'

export const dynamic = 'force-static'
export const metadata = generateContentLandingMetadata(SCREEN_TRACK_CLEANING)

export default function ScreenTrackCleaningPage() {
  return <ContentLandingPage config={SCREEN_TRACK_CLEANING} />
}
