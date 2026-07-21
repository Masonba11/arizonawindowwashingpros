export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  datePublished: string
  dateModified?: string
  author: string
  published: boolean
  category?: string
  tags?: string[]
  hasFAQs?: boolean
}

// Blog posts data - updated with all 10 posts
export const blogPosts: BlogPost[] = [
  {
    slug: 'why-hard-water-stains-permanently-damage-windows-in-arizona',
    title: 'Why Hard Water Stains Permanently Damage Windows in Arizona',
    excerpt: 'Hard water stains in Arizona aren\'t just cosmetic. They can cause permanent etching and damage to your windows. Learn why immediate professional treatment is essential.',
    datePublished: '2025-02-26',
    dateModified: '2025-02-26',
    author: 'Arizona Window Washing Pros',
    published: true,
    category: 'Education',
    tags: ['hard water stains', 'window damage', 'Arizona'],
    hasFAQs: true,
  },
  {
    slug: 'how-di-water-systems-prevent-streaks-and-mineral-deposits',
    title: 'How DI Water Systems Prevent Streaks and Mineral Deposits',
    excerpt: 'Deionized (DI) water systems remove all minerals before water touches your windows, ensuring streak-free, spot-free results that last longer.',
    datePublished: '2025-02-26',
    dateModified: '2025-02-26',
    author: 'Arizona Window Washing Pros',
    published: true,
    category: 'Education',
    tags: ['deionized water', 'DI water', 'window cleaning'],
    hasFAQs: true,
  },
  {
    slug: 'can-sprinkler-overspray-ruin-your-windows',
    title: 'Can Sprinkler Overspray Ruin Your Windows?',
    excerpt: 'Arizona\'s hard water in sprinkler systems can leave mineral deposits on windows. Learn how to prevent and remove sprinkler overspray damage.',
    datePublished: '2025-02-27',
    published: false,
    author: 'Arizona Window Washing Pros',
    category: 'Maintenance',
    tags: ['sprinklers', 'hard water', 'prevention'],
  },
  {
    slug: 'how-often-should-you-clean-windows-in-gilbert-az',
    title: 'How Often Should You Clean Windows in Gilbert, AZ?',
    excerpt: 'Gilbert\'s desert climate requires more frequent window cleaning. Learn the optimal schedule for your home based on location, exposure, and home type.',
    datePublished: '2025-02-28',
    published: false,
    author: 'Arizona Window Washing Pros',
    category: 'Maintenance',
    tags: ['Gilbert', 'window cleaning frequency', 'Arizona'],
  },
  {
    slug: 'diy-vs-professional-window-cleaning-in-arizona',
    title: 'DIY vs Professional Window Cleaning in Arizona',
    excerpt: 'Arizona\'s hard water and intense sun make DIY window cleaning challenging. Compare costs, results, and time investment of DIY vs professional service.',
    datePublished: '2025-03-01',
    published: false,
    author: 'Arizona Window Washing Pros',
    category: 'Tips',
    tags: ['DIY', 'professional', 'comparison'],
  },
  {
    slug: 'the-real-cost-of-replacing-windows-vs-maintaining-them',
    title: 'The Real Cost of Replacing Windows vs Maintaining Them',
    excerpt: 'Window replacement costs thousands. Regular professional cleaning extends window life and prevents costly replacements. See the math.',
    datePublished: '2025-03-02',
    published: false,
    author: 'Arizona Window Washing Pros',
    category: 'Cost',
    tags: ['cost', 'window replacement', 'maintenance'],
  },
  {
    slug: 'what-happens-if-hard-water-stains-are-ignored-too-long',
    title: 'What Happens If Hard Water Stains Are Ignored Too Long?',
    excerpt: 'Ignoring hard water stains leads to permanent etching, reduced visibility, and expensive window replacement. Learn when it\'s too late to fix.',
    datePublished: '2025-03-03',
    published: false,
    author: 'Arizona Window Washing Pros',
    category: 'Maintenance',
    tags: ['hard water stains', 'damage', 'prevention'],
  },
  {
    slug: 'why-arizona-new-builds-get-dust-buildup-faster',
    title: 'Why Arizona New Builds Get Dust Buildup Faster',
    excerpt: 'New construction in Arizona creates more dust and debris. Learn why new builds need more frequent window cleaning and how to protect your investment.',
    datePublished: '2025-03-04',
    published: false,
    author: 'Arizona Window Washing Pros',
    category: 'Arizona-Specific',
    tags: ['new builds', 'dust', 'construction'],
  },
  {
    slug: 'how-arizona-heat-impacts-window-longevity-and-seals',
    title: 'How Arizona Heat Impacts Window Longevity and Seals',
    excerpt: 'Arizona\'s extreme heat accelerates window seal failure and frame degradation. Regular cleaning helps identify issues early and extends window life.',
    datePublished: '2025-03-05',
    published: false,
    author: 'Arizona Window Washing Pros',
    category: 'Arizona-Specific',
    tags: ['heat', 'window seals', 'longevity'],
  },
  {
    slug: 'screen-cleaning-how-often-in-arizona-dust',
    title: 'Screen Cleaning: How Often in Arizona Dust?',
    excerpt: 'Arizona\'s dust storms and pollen require more frequent screen cleaning. Learn the optimal schedule and why clean screens improve air quality and visibility.',
    datePublished: '2025-03-06',
    published: false,
    author: 'Arizona Window Washing Pros',
    category: 'Services',
    tags: ['screen cleaning', 'dust', 'Arizona'],
  },
  // --- Northern Arizona draft articles (published: false until editorial review) ---
  {
    slug: 'how-often-should-you-clean-windows-in-northern-arizona',
    title: '[DRAFT] How Often Should You Clean Your Windows in Northern Arizona?',
    excerpt:
      'DRAFT — Guidance on residential and vacation-home window cleaning cadence for northern Arizona communities such as Pinetop-Lakeside, Show Low, and Snowflake. Not published until reviewed.',
    datePublished: '2026-06-18',
    published: false,
    author: 'Arizona Window Washing Pros',
    category: 'Maintenance',
    tags: ['northern Arizona', 'window cleaning frequency', 'Pinetop-Lakeside'],
  },
  {
    slug: 'interior-vs-exterior-window-cleaning-what-is-included',
    title: '[DRAFT] Interior vs. Exterior Window Cleaning: What Is Included?',
    excerpt:
      'DRAFT — Explains what typically comes with interior and exterior window cleaning, plus optional screens, tracks, and sills. Not published until reviewed.',
    datePublished: '2026-06-18',
    published: false,
    author: 'Arizona Window Washing Pros',
    category: 'Education',
    tags: ['interior', 'exterior', 'what is included'],
  },
  {
    slug: 'how-to-prepare-your-home-for-professional-window-cleaning',
    title: '[DRAFT] How to Prepare Your Home for Professional Window Cleaning',
    excerpt:
      'DRAFT — Practical preparation tips before a professional window cleaning appointment. Not published until reviewed.',
    datePublished: '2026-06-18',
    published: false,
    author: 'Arizona Window Washing Pros',
    category: 'Tips',
    tags: ['preparation', 'home tips'],
  },
  {
    slug: 'window-cleaning-for-vacation-homes-and-cabins',
    title: '[DRAFT] Window Cleaning for Vacation Homes and Cabins',
    excerpt:
      'DRAFT — How cabin and vacation-home owners can plan window cleaning around seasonal occupancy. Not published until reviewed.',
    datePublished: '2026-06-18',
    published: false,
    author: 'Arizona Window Washing Pros',
    category: 'Services',
    tags: ['cabins', 'vacation homes', 'White Mountains'],
  },
  {
    slug: 'why-professional-screen-and-track-cleaning-matters',
    title: '[DRAFT] Why Professional Screen and Track Cleaning Matters',
    excerpt:
      'DRAFT — Why screens and tracks affect how clean windows look and how they operate. Not published until reviewed.',
    datePublished: '2026-06-18',
    published: false,
    author: 'Arizona Window Washing Pros',
    category: 'Services',
    tags: ['screen cleaning', 'track cleaning'],
  },
]

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.filter(post => post.published)
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}

export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPost[] {
  const currentPost = getBlogPost(currentSlug)
  if (!currentPost) return []

  return blogPosts
    .filter(post => post.slug !== currentSlug && post.published)
    .filter(post => 
      post.category === currentPost.category || 
      post.tags?.some(tag => currentPost.tags?.includes(tag))
    )
    .slice(0, limit)
}
