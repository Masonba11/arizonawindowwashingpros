import { FAQ } from './faqs'

export function generateServiceFAQs(serviceName: string, city?: string): FAQ[] {
  const locationText = city ? ` in ${city}` : ''
  
  return [
    {
      question: `How much does ${serviceName.toLowerCase()} cost${locationText}?`,
      answer: `Pricing for ${serviceName.toLowerCase()}${locationText} starts at $150 for 1-story homes and $180 for 2-story homes. Most homes range from $150-$350. Pricing is based on number of windows, home height, and accessibility. We provide free, no-obligation estimates so you know exactly what to expect.`,
    },
    {
      question: 'Are you insured?',
      answer: 'Yes, we are fully licensed and insured. Your property and our team are protected. We carry comprehensive liability insurance for your peace of mind.',
    },
    {
      question: 'Do you clean both interior and exterior windows?',
      answer: 'Yes! We offer both interior and exterior window cleaning services. You can choose one or both depending on your needs. Many customers prefer to have both done for a complete, crystal-clear result.',
    },
    {
      question: 'Can you remove hard water spots?',
      answer: 'Yes, we specialize in removing hard water spots and mineral deposits. Our professional techniques and specialized solutions effectively remove even stubborn hard water stains, restoring your windows to crystal clarity.',
    },
    {
      question: 'Do you clean window screens?',
      answer: 'Yes, we offer professional screen cleaning as an add-on service. We thoroughly clean screens to remove dust, pollen, pet hair, and debris, improving air flow and visibility.',
    },
    {
      question: 'How long does the service take?',
      answer: 'Most homes take 1-2 hours depending on the number of windows and home size. We work efficiently while maintaining our high quality standards. Larger homes or multi-story properties may take 2-4 hours.',
    },
    {
      question: 'How do I schedule?',
      answer: 'Scheduling is easy! Call us at (480) 737-0850 or fill out our free quote form. We typically have same-week availability and will work with your schedule to find a convenient time.',
    },
    {
      question: 'What if I\'m not satisfied?',
      answer: 'We stand behind our work with a 100% satisfaction guarantee. If you\'re not completely happy with the results, we\'ll return to make it right at no additional charge. Your satisfaction is our priority.',
    },
  ]
}

export function generateLocationFAQs(city: string): FAQ[] {
  return [
    {
      question: `How much does window cleaning cost in ${city}?`,
      answer: `Window cleaning prices in ${city} start at $150 for 1-story homes and $180 for 2-story homes. Most ${city} homes range from $150-$350. Pricing is based on number of windows and home height. Contact us for a free, personalized estimate.`,
    },
    {
      question: 'Are you insured?',
      answer: 'Yes, we are fully licensed and insured. Your property and our team are protected with comprehensive liability insurance for your peace of mind.',
    },
    {
      question: `Do you clean both interior and exterior windows in ${city}?`,
      answer: `Yes, we offer both interior and exterior window cleaning services in ${city}. You can choose one or both depending on your needs. Many customers prefer to have both done for a complete, crystal-clear result.`,
    },
    {
      question: 'Can you remove hard water spots?',
      answer: 'Yes, we specialize in removing hard water spots and mineral deposits common in Arizona. Our professional techniques and specialized solutions effectively remove even stubborn hard water stains.',
    },
    {
      question: 'Do you clean window screens?',
      answer: 'Yes, we offer professional screen cleaning as an add-on service. We thoroughly clean screens to remove dust, pollen, pet hair, and debris, improving air flow and visibility.',
    },
    {
      question: 'How long does window cleaning take?',
      answer: 'Most homes take 1-2 hours depending on the number of windows and home size. We work efficiently while maintaining our high quality standards. Larger homes may take 2-4 hours.',
    },
    {
      question: 'How do I schedule?',
      answer: 'Scheduling is easy! Call us at (480) 737-0850 or fill out our free quote form. We typically have same-week availability and will work with your schedule to find a convenient time.',
    },
    {
      question: 'What if I\'m not satisfied?',
      answer: 'We stand behind our work with a 100% satisfaction guarantee. If you\'re not completely happy with the results, we\'ll return to make it right at no additional charge. Your satisfaction is our priority.',
    },
  ]
}


