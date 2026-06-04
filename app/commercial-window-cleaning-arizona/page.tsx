import CommercialWindowCleaningLanding from '@/components/commercial-landing/CommercialWindowCleaningLanding'
import { COMMERCIAL_PAGE_METADATA } from '@/lib/commercialLanding'

export const dynamic = 'force-static'

export const metadata = COMMERCIAL_PAGE_METADATA

export default function CommercialWindowCleaningArizonaPage() {
  return <CommercialWindowCleaningLanding />
}
