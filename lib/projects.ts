export type ProjectDraft = {
  slug: string
  title: string
  city: string
  propertyType: string
  servicePerformed: string
  customerGoal: string
  challenges: string
  workCompleted: string
  results: string
  relatedServiceHref: string
  relatedLocationHref: string
  /** Draft placeholders must stay noindex until real photos and permission are added. */
  published: false
  draftNote: string
}

export const PROJECT_DRAFTS: ProjectDraft[] = [
  {
    slug: 'cabin-window-cleaning-pinetop-lakeside',
    title: 'Cabin Window Cleaning in Pinetop-Lakeside',
    city: 'Pinetop-Lakeside',
    propertyType: 'Cabin',
    servicePerformed: 'Interior and exterior window cleaning with screens (to be confirmed after job)',
    customerGoal: '[PLACEHOLDER — ask customer goal after completed job]',
    challenges: '[PLACEHOLDER — note access, stories, vacancy, screens]',
    workCompleted: '[PLACEHOLDER — list services actually performed]',
    results: '[PLACEHOLDER — describe visible improvement after cleaning]',
    relatedServiceHref: '/cabin-window-cleaning',
    relatedLocationHref: '/window-cleaning-pinetop-lakeside-az',
    published: false,
    draftNote: 'DRAFT — do not index until real photos, dates, and publish permission are added.',
  },
  {
    slug: 'residential-window-cleaning-show-low',
    title: 'Residential Window Cleaning in Show Low',
    city: 'Show Low',
    propertyType: 'Primary residence',
    servicePerformed: 'Residential window cleaning (to be confirmed after job)',
    customerGoal: '[PLACEHOLDER]',
    challenges: '[PLACEHOLDER]',
    workCompleted: '[PLACEHOLDER]',
    results: '[PLACEHOLDER]',
    relatedServiceHref: '/services/residential-window-cleaning',
    relatedLocationHref: '/window-cleaning-show-low-az',
    published: false,
    draftNote: 'DRAFT — do not index until real photos, dates, and publish permission are added.',
  },
  {
    slug: 'storefront-window-cleaning-show-low',
    title: 'Storefront Window Cleaning in Show Low',
    city: 'Show Low',
    propertyType: 'Storefront / commercial',
    servicePerformed: 'Storefront window cleaning (to be confirmed after job)',
    customerGoal: '[PLACEHOLDER]',
    challenges: '[PLACEHOLDER]',
    workCompleted: '[PLACEHOLDER]',
    results: '[PLACEHOLDER]',
    relatedServiceHref: '/storefront-window-cleaning',
    relatedLocationHref: '/window-cleaning-show-low-az',
    published: false,
    draftNote: 'DRAFT — do not index until real photos, dates, and publish permission are added.',
  },
  {
    slug: 'large-home-window-cleaning-snowflake',
    title: 'Large Home Window Cleaning in Snowflake',
    city: 'Snowflake',
    propertyType: 'Large residential home',
    servicePerformed: 'Residential window cleaning (to be confirmed after job)',
    customerGoal: '[PLACEHOLDER]',
    challenges: '[PLACEHOLDER]',
    workCompleted: '[PLACEHOLDER]',
    results: '[PLACEHOLDER]',
    relatedServiceHref: '/services/residential-window-cleaning',
    relatedLocationHref: '/window-cleaning-snowflake-az',
    published: false,
    draftNote: 'DRAFT — do not index until real photos, dates, and publish permission are added.',
  },
]

export function getProjectDraft(slug: string): ProjectDraft | undefined {
  return PROJECT_DRAFTS.find((p) => p.slug === slug)
}

export function getAllProjectDraftSlugs(): string[] {
  return PROJECT_DRAFTS.map((p) => p.slug)
}
