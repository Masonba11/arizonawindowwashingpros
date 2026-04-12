import AdLandingPage from '@/components/ad-landing/AdLandingPage'
import { adLandingMetadata, getAdLandingConfig } from '@/lib/adLandingConfig'

export const dynamic = 'force-static'

export const metadata = adLandingMetadata('chandler-window-cleaning')

export default function ChandlerWindowCleaningLandingPage() {
  return <AdLandingPage config={getAdLandingConfig('chandler-window-cleaning')} />
}
