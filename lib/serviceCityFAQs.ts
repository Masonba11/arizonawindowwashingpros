// FAQ generators for service+city landing pages

export function generateServiceCityFAQs(service: string, city: string) {
  const serviceName = service.toLowerCase()
  const cityName = city.toLowerCase()

  if (serviceName.includes('exterior')) {
    return [
      {
        question: `How much does exterior window cleaning cost in ${city}?`,
        answer: `Exterior window cleaning prices in ${city} start at $150 for 1-story homes and $180 for 2-story homes. Most ${city} homes range from $150-$350. Pricing is based on number of windows and home height. Contact us for a free estimate.`,
      },
      {
        question: `What is included in exterior window cleaning in ${city}?`,
        answer: `Our exterior window cleaning in ${city} includes hand-washed exterior window glass, professional squeegee finish, light wipe-down of window frames, track and sill cleaning, safe ladder work for two-story homes, and a streak-free finish guarantee.`,
      },
      {
        question: `How often should I have my windows cleaned in ${city}?`,
        answer: `Given ${city}'s desert climate with dust storms and intense sun, we recommend exterior window cleaning every 3-4 months to maintain optimal clarity and prevent hard water spot buildup.`,
      },
      {
        question: `Do you clean both interior and exterior windows in ${city}?`,
        answer: `Yes, we offer both interior and exterior window cleaning services in ${city}. Exterior cleaning is our most popular service, and interior cleaning is available as an optional add-on.`,
      },
    ]
  }

  if (serviceName.includes('interior')) {
    return [
      {
        question: `How much does interior window cleaning cost in ${city}?`,
        answer: `Interior window cleaning is an optional add-on service priced at approximately 30-40% of the exterior service. Typical interior add-on ranges from $60-$200 depending on window count. Contact us for a free estimate in ${city}.`,
      },
      {
        question: `What is included in interior window cleaning in ${city}?`,
        answer: `Our interior window cleaning in ${city} includes interior glass cleaned and detailed, careful protection of floors and surrounding areas, and a streak-free finish on all accessible windows.`,
      },
      {
        question: `Do I need interior window cleaning in ${city}?`,
        answer: `Interior cleaning is optional. Many ${city} homeowners find that regular exterior cleaning is sufficient. Interior cleaning is recommended if you have fingerprints, smudges, or indoor dust buildup on your windows.`,
      },
      {
        question: `How long does interior window cleaning take in ${city}?`,
        answer: `Interior cleaning takes additional time as we carefully protect your floors and furniture. Most ${city} homes take an additional 30-60 minutes when added to exterior cleaning.`,
      },
    ]
  }

  if (serviceName.includes('track') || serviceName.includes('sill')) {
    return [
      {
        question: `What is track and sill cleaning in ${city}?`,
        answer: `Track and sill cleaning involves deep cleaning of the window tracks (the channels where windows slide) and sills (the bottom horizontal ledge) in ${city}. This removes dirt, debris, dust, and buildup that accumulates over time.`,
      },
      {
        question: `How much does track and sill cleaning cost in ${city}?`,
        answer: `Track and sill cleaning is typically included as part of our window cleaning service in ${city}. Pricing varies based on the number of windows and home size. Contact us for a free estimate.`,
      },
      {
        question: `Why is track and sill cleaning important in ${city}?`,
        answer: `Clean tracks and sills help windows operate smoothly, prevent buildup that can damage windows over time, and improve the overall appearance of your windows. In ${city}'s dusty environment, tracks accumulate debris quickly.`,
      },
      {
        question: `How often should I have tracks and sills cleaned in ${city}?`,
        answer: `We recommend track and sill cleaning as part of your regular window cleaning service in ${city}, typically every 3-4 months. This helps maintain window function and appearance in Arizona's climate.`,
      },
    ]
  }

  if (serviceName.includes('screen')) {
    return [
      {
        question: `How much does screen cleaning cost in ${city}?`,
        answer: `Screen cleaning is priced per screen and is available as an add-on service in ${city}. Typical pricing is $5-$10 per screen. Contact us for a free estimate based on your specific needs.`,
      },
      {
        question: `What is included in screen cleaning in ${city}?`,
        answer: `Our screen cleaning service in ${city} includes removal of all screens (if needed), thorough cleaning with specialized tools, removal of dust, pollen, and debris, pet hair and lint removal, careful reinstallation, and inspection for damage or needed repairs.`,
      },
      {
        question: `Why should I clean my screens in ${city}?`,
        answer: `Clean screens not only look better but also function better. They allow for improved air circulation, better visibility, and can help reduce allergens in your home. Regular screen cleaning is especially important in ${city} where dust and pollen are common.`,
      },
      {
        question: `How often should I have my screens cleaned in ${city}?`,
        answer: `Screen cleaning is typically added to your window cleaning service in ${city} for a complete window maintenance solution. We recommend cleaning screens every 3-4 months along with your regular window cleaning.`,
      },
    ]
  }

  // Default FAQs
  return [
    {
      question: `How much does ${service.toLowerCase()} cost in ${city}?`,
      answer: `Pricing for ${service.toLowerCase()} in ${city} varies based on your specific needs. Contact us for a free, no-obligation estimate.`,
    },
    {
      question: `What areas of ${city} do you serve?`,
      answer: `We serve all areas of ${city}, Arizona, and surrounding neighborhoods. Contact us to confirm service availability in your area.`,
    },
    {
      question: `How quickly can you schedule ${service.toLowerCase()} in ${city}?`,
      answer: `We offer same-day estimates and can often schedule service within 24-48 hours in ${city}. Call us at (480) 476-3731 for fastest scheduling.`,
    },
    {
      question: `Do you offer recurring service in ${city}?`,
      answer: `Yes, we offer recurring service plans for ${city} homes and businesses. Regular service helps maintain optimal results and prevents buildup.`,
    },
  ]
}

