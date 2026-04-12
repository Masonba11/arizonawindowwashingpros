import AdLandingPage from '@/components/ad-landing/AdLandingPage'
import { adLandingMetadata, getAdLandingConfig } from '@/lib/adLandingConfig'

export const dynamic = 'force-static'

export const metadata = adLandingMetadata('tempe-window-cleaning')

export default function TempeWindowCleaningLandingPage() {
  return <AdLandingPage config={getAdLandingConfig('tempe-window-cleaning')} />
}
