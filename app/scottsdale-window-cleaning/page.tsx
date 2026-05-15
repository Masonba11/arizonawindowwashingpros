import PremiumWindowCleaningLanding from '@/components/premium-window-landing/PremiumWindowCleaningLanding'
import {
  getPremiumWindowCleaningConfig,
  premiumWindowCleaningMetadata,
} from '@/lib/premiumWindowCleaningAds'

export const dynamic = 'force-static'

export const metadata = premiumWindowCleaningMetadata('scottsdale-window-cleaning')

export default function ScottsdaleWindowCleaningLandingPage() {
  return (
    <PremiumWindowCleaningLanding config={getPremiumWindowCleaningConfig('scottsdale-window-cleaning')} />
  )
}
