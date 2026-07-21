import NorthernArizonaLocationPage from '@/components/northern-arizona/NorthernArizonaLocationPage'
import {
  generateNorthernAzMetadata,
  getNorthernAzCity,
} from '@/lib/northernArizona'

export const dynamic = 'force-static'

export const metadata = generateNorthernAzMetadata('show-low')

export default function WindowCleaningShowLowAzPage() {
  return <NorthernArizonaLocationPage city={getNorthernAzCity('show-low')} />
}
