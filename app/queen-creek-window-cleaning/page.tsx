import AdLandingPage from '@/components/ad-landing/AdLandingPage'
import { adLandingMetadata, getAdLandingConfig } from '@/lib/adLandingConfig'

export const dynamic = 'force-static'

export const metadata = adLandingMetadata('queen-creek-window-cleaning')

export default function QueenCreekWindowCleaningLandingPage() {
  return <AdLandingPage config={getAdLandingConfig('queen-creek-window-cleaning')} />
}
