import ContentLandingPage, { generateContentLandingMetadata } from '@/components/seo/ContentLandingPage'
import { VACATION_HOME_WINDOW_CLEANING } from '@/lib/specialtyServicePages'

export const dynamic = 'force-static'
export const metadata = generateContentLandingMetadata(VACATION_HOME_WINDOW_CLEANING)

export default function VacationHomeWindowCleaningPage() {
  return <ContentLandingPage config={VACATION_HOME_WINDOW_CLEANING} />
}
