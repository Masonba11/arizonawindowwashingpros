export interface ServiceData {
  serviceName: string
  slug: string
  shortDescription: string
  longDescription: string
  startingPrice: string
  faqQuestions?: string[]
}

export const services: Record<string, ServiceData> = {
  'exterior-window-cleaning': {
    serviceName: 'Exterior Window Cleaning',
    slug: 'exterior-window-cleaning',
    shortDescription: 'Professional outdoor window cleaning with deionized water for streak-free results.',
    longDescription: 'Our exterior window cleaning service uses professional-grade deionized water purification to remove hard water stains, mineral deposits, and dust. Perfect for Arizona\'s challenging climate.',
    startingPrice: '$150',
    faqQuestions: [
      'How much does exterior window cleaning cost?',
      'How often should I clean my exterior windows?',
      'Do you use deionized water?',
      'Will you clean second-story windows?',
    ],
  },
  'interior-window-cleaning': {
    serviceName: 'Interior Window Cleaning',
    slug: 'interior-window-cleaning',
    shortDescription: 'Indoor window cleaning for crystal-clear views from inside your home.',
    longDescription: 'Interior window cleaning removes fingerprints, smudges, and dust from inside your windows. Often combined with exterior cleaning for complete clarity.',
    startingPrice: '$80',
    faqQuestions: [
      'Can I get interior and exterior cleaning together?',
      'How long does interior window cleaning take?',
      'Do you move furniture?',
    ],
  },
  'screen-cleaning': {
    serviceName: 'Screen Cleaning',
    slug: 'screen-cleaning',
    shortDescription: 'Thorough screen cleaning to remove dust, pollen, and debris.',
    longDescription: 'Window screen cleaning removes built-up dust, pollen, and debris that accumulates in Arizona\'s desert climate. Helps improve airflow and visibility.',
    startingPrice: '$50',
    faqQuestions: [
      'Do you clean screens on-site?',
      'How often should screens be cleaned?',
      'Can you repair damaged screens?',
    ],
  },
  'track-sill-cleaning': {
    serviceName: 'Track & Sill Cleaning',
    slug: 'track-sill-cleaning',
    shortDescription: 'Deep cleaning of window tracks and sills to remove dirt and debris.',
    longDescription: 'Track and sill cleaning removes accumulated dirt, dust, and debris from window tracks and sills. Essential for proper window function and appearance.',
    startingPrice: '$40',
    faqQuestions: [
      'Why is track cleaning important?',
      'How often should tracks be cleaned?',
      'Do you use special tools for track cleaning?',
    ],
  },
  'residential-window-cleaning': {
    serviceName: 'Residential Window Cleaning',
    slug: 'residential-window-cleaning',
    shortDescription:
      'Complete residential window cleaning for Arizona homes, including interior, exterior, screens, tracks, and frames.',
    longDescription:
      'Residential window cleaning covers exterior glass, optional interior detailing, and add-on screen, track, sill, and frame cleaning for homes, cabins, and vacation properties.',
    startingPrice: '$150',
    faqQuestions: [
      'What is included in residential window cleaning?',
      'Do you clean interior and exterior windows?',
      'Can I add screen and track cleaning?',
    ],
  },
}

export function getServiceData(serviceSlug: string): ServiceData | null {
  return services[serviceSlug] || null
}

export function getAllServices(): ServiceData[] {
  return Object.values(services)
}


