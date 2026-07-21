import NorthernArizonaLocationPage from '@/components/northern-arizona/NorthernArizonaLocationPage'
import {
  generateNorthernAzMetadata,
  getNorthernAzCity,
} from '@/lib/northernArizona'

export const dynamic = 'force-static'

export const metadata = generateNorthernAzMetadata('pinetop-lakeside')

export default function WindowCleaningPinetopLakesideAzPage() {
  return <NorthernArizonaLocationPage city={getNorthernAzCity('pinetop-lakeside')} />
}
