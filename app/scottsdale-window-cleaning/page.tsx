import AdLandingPage from '@/components/ad-landing/AdLandingPage'
import { adLandingMetadata, getAdLandingConfig } from '@/lib/adLandingConfig'

export const dynamic = 'force-static'

export const metadata = adLandingMetadata('scottsdale-window-cleaning')

export default function ScottsdaleWindowCleaningLandingPage() {
  return <AdLandingPage config={getAdLandingConfig('scottsdale-window-cleaning')} />
}
