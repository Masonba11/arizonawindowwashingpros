import NorthernArizonaLocationPage from '@/components/northern-arizona/NorthernArizonaLocationPage'
import {
  generateNorthernAzMetadata,
  getNorthernAzCity,
} from '@/lib/northernArizona'

export const dynamic = 'force-static'

export const metadata = generateNorthernAzMetadata('snowflake')

export default function WindowCleaningSnowflakeAzPage() {
  return <NorthernArizonaLocationPage city={getNorthernAzCity('snowflake')} />
}
