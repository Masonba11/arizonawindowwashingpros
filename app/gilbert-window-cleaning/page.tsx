import AdLandingPage from '@/components/ad-landing/AdLandingPage'
import { adLandingMetadata, getAdLandingConfig } from '@/lib/adLandingConfig'

export const dynamic = 'force-static'

export const metadata = adLandingMetadata('gilbert-window-cleaning')

export default function GilbertWindowCleaningLandingPage() {
  return <AdLandingPage config={getAdLandingConfig('gilbert-window-cleaning')} />
}
