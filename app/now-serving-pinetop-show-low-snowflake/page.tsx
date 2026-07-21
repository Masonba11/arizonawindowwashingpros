import ContentLandingPage, { generateContentLandingMetadata } from '@/components/seo/ContentLandingPage'
import { EXPANSION_ANNOUNCEMENT } from '@/lib/expansionAnnouncement'

export const dynamic = 'force-static'
export const metadata = generateContentLandingMetadata(EXPANSION_ANNOUNCEMENT)

export default function NowServingWhiteMountainsPage() {
  return <ContentLandingPage config={EXPANSION_ANNOUNCEMENT} />
}
