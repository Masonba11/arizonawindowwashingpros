import PremiumWindowCleaningLanding from '@/components/premium-window-landing/PremiumWindowCleaningLanding'
import {
  getPremiumWindowCleaningConfig,
  premiumWindowCleaningMetadata,
} from '@/lib/premiumWindowCleaningAds'

export const dynamic = 'force-static'

export const metadata = premiumWindowCleaningMetadata('gilbert-window-cleaning')

export default function GilbertWindowCleaningLandingPage() {
  return (
    <PremiumWindowCleaningLanding config={getPremiumWindowCleaningConfig('gilbert-window-cleaning')} />
  )
}
