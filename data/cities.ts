export interface CityData {
  cityName: string
  state: string
  zipCodes: string[]
  neighborhoods: string[]
  landmarks: string[]
  shortLocalNote: string
  uniqueTitleVariant?: string
  uniqueMetaVariant?: string
}

export const cities: Record<string, CityData> = {
  gilbert: {
    cityName: 'Gilbert',
    state: 'AZ',
    zipCodes: ['85233', '85234', '85295', '85296', '85297', '85298'],
    neighborhoods: ['Val Vista', 'Higley', 'Power Ranch', 'Seville', 'Agritopia', 'Morrison Ranch'],
    landmarks: ['Gilbert Water Tower', 'Riparian Preserve', 'Freestone Park'],
    shortLocalNote: 'Gilbert\'s rapid growth and desert climate create unique window cleaning challenges with dust storms and intense sun.',
    uniqueTitleVariant: 'Window Cleaning in Gilbert, AZ',
    uniqueMetaVariant: 'Professional window cleaning in Gilbert, Arizona. Outdoor and indoor services with deionized water for streak-free results. Starting at $150. Free quotes. Call or text for same-day service.',
  },
  chandler: {
    cityName: 'Chandler',
    state: 'AZ',
    zipCodes: ['85224', '85225', '85226', '85248', '85249', '85286'],
    neighborhoods: ['Ocotillo', 'Sun Lakes', 'Chandler Heights', 'Dobson Ranch', 'Tumbleweed'],
    landmarks: ['Chandler Fashion Center', 'Tumbleweed Park', 'Arizona Railway Museum'],
    shortLocalNote: 'Chandler\'s mix of established neighborhoods and new developments requires specialized window cleaning techniques.',
    uniqueTitleVariant: 'Window Cleaning in Chandler, AZ',
    uniqueMetaVariant: 'Expert window cleaning in Chandler, Arizona. Deionized water system removes hard water stains. Licensed & insured. Starting at $150. Free estimates available.',
  },
  mesa: {
    cityName: 'Mesa',
    state: 'AZ',
    zipCodes: ['85201', '85202', '85203', '85204', '85205', '85206', '85207', '85208', '85209', '85210', '85211', '85212', '85213', '85215'],
    neighborhoods: ['Dobson Ranch', 'Las Sendas', 'Eastmark', 'Superstition Springs', 'Red Mountain Ranch'],
    landmarks: ['Mesa Arts Center', 'Arizona Museum of Natural History', 'Usery Mountain Regional Park'],
    shortLocalNote: 'Mesa\'s large geographic area and diverse housing styles require flexible window cleaning solutions.',
    uniqueTitleVariant: 'Window Cleaning in Mesa, AZ',
    uniqueMetaVariant: 'Professional window cleaning in Mesa, Arizona. Serving all neighborhoods with deionized water technology. Starting at $150. Same-day service available.',
  },
  'queen-creek': {
    cityName: 'Queen Creek',
    state: 'AZ',
    zipCodes: ['85142', '85143'],
    neighborhoods: ['San Tan Valley', 'Johnson Ranch', 'Sossaman Estates', 'Riggs Ranch'],
    landmarks: ['Queen Creek Olive Mill', 'San Tan Mountain Regional Park'],
    shortLocalNote: 'Queen Creek\'s rural character and newer developments benefit from professional window maintenance.',
    uniqueTitleVariant: 'Window Cleaning in Queen Creek, AZ',
    uniqueMetaVariant: 'Window cleaning services in Queen Creek, Arizona. Deionized water removes mineral deposits. Licensed & insured. Starting at $150. Free quotes.',
  },
  tempe: {
    cityName: 'Tempe',
    state: 'AZ',
    zipCodes: ['85281', '85282', '85283', '85284', '85287'],
    neighborhoods: ['Tempe Town Lake', 'Papago Park', 'The Lakes', 'Kiwanis Park'],
    landmarks: ['Arizona State University', 'Tempe Town Lake', 'Papago Park'],
    shortLocalNote: 'Tempe\'s urban environment and proximity to ASU create unique window cleaning needs.',
    uniqueTitleVariant: 'Window Cleaning in Tempe, AZ',
    uniqueMetaVariant: 'Expert window cleaning in Tempe, Arizona. Professional deionized water system for crystal-clear results. Starting at $150. Free estimates.',
  },
  scottsdale: {
    cityName: 'Scottsdale',
    state: 'AZ',
    zipCodes: ['85250', '85251', '85252', '85253', '85254', '85255', '85256', '85257', '85258', '85259', '85260', '85261', '85262', '85263', '85264', '85266', '85267', '85271'],
    neighborhoods: ['Old Town', 'McCormick Ranch', 'Gainey Ranch', 'DC Ranch', 'Troon', 'Desert Mountain'],
    landmarks: ['Old Town Scottsdale', 'Taliesin West', 'Camelback Mountain'],
    shortLocalNote: 'Scottsdale\'s luxury homes and resort-style properties require premium window cleaning services.',
    uniqueTitleVariant: 'Window Cleaning in Scottsdale, AZ',
    uniqueMetaVariant: 'Premium window cleaning in Scottsdale, Arizona. Deionized water system for luxury homes. Licensed & insured. Starting at $150. Free quotes.',
  },
  'san-tan-valley': {
    cityName: 'San Tan Valley',
    state: 'AZ',
    zipCodes: ['85140', '85143'],
    neighborhoods: ['Johnson Ranch', 'San Tan Heights', 'Encanterra'],
    landmarks: ['San Tan Mountain Regional Park'],
    shortLocalNote: 'San Tan Valley\'s newer developments and desert setting require specialized window care.',
    uniqueTitleVariant: 'Window Cleaning in San Tan Valley, AZ',
    uniqueMetaVariant: 'Professional window cleaning in San Tan Valley, Arizona. Deionized water removes hard water stains. Starting at $150. Free estimates available.',
  },
  'east-valley': {
    cityName: 'East Valley',
    state: 'AZ',
    zipCodes: ['85233', '85234', '85224', '85225', '85201', '85202', '85142', '85281', '85250', '85140'],
    neighborhoods: ['All East Valley neighborhoods'],
    landmarks: ['Multiple East Valley landmarks'],
    shortLocalNote: 'Serving the entire East Valley region with professional window cleaning services.',
    uniqueTitleVariant: 'Window Cleaning in East Valley, AZ',
    uniqueMetaVariant: 'Window cleaning services throughout the East Valley. Serving Gilbert, Mesa, Chandler, Tempe, Queen Creek, and more. Deionized water system. Starting at $150.',
  },
}

export function getCityData(citySlug: string): CityData | null {
  return cities[citySlug] || null
}

export function getAllCities(): CityData[] {
  return Object.values(cities)
}


