import ContentLandingPage, { generateContentLandingMetadata } from '@/components/seo/ContentLandingPage'
import { WHITE_MOUNTAINS_HUB } from '@/lib/whiteMountainsHub'

export const dynamic = 'force-static'
export const metadata = generateContentLandingMetadata(WHITE_MOUNTAINS_HUB)

export default function WhiteMountainsWindowCleaningPage() {
  return <ContentLandingPage config={WHITE_MOUNTAINS_HUB} />
}
