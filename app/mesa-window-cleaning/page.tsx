import AdLandingPage from '@/components/ad-landing/AdLandingPage'
import { adLandingMetadata, getAdLandingConfig } from '@/lib/adLandingConfig'

export const dynamic = 'force-static'

export const metadata = adLandingMetadata('mesa-window-cleaning')

export default function MesaWindowCleaningLandingPage() {
  return <AdLandingPage config={getAdLandingConfig('mesa-window-cleaning')} />
}
