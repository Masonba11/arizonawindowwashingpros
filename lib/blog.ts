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
}

// Blog posts data
export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-remove-hard-water-stains-from-windows',
    title: 'How to Remove Hard Water Stains from Windows',
    excerpt: 'Hard water stains are a common problem in Arizona. Learn effective methods to remove mineral deposits and when to call the professionals.',
    datePublished: '2025-01-15',
    dateModified: '2025-01-15',
    author: 'Arizona Window Washing Pros',
    published: true,
    category: 'Maintenance',
    tags: ['hard water stains', 'window cleaning', 'Arizona'],
  },
  {
    slug: 'why-deionized-water-matters-for-window-cleaning',
    title: 'Why Deionized Water Matters for Window Cleaning',
    excerpt: 'Discover why deionized water is essential for streak-free window cleaning in Arizona\'s mineral-heavy water conditions.',
    datePublished: '2025-01-20',
    dateModified: '2025-01-20',
    author: 'Arizona Window Washing Pros',
    published: true,
    category: 'Education',
    tags: ['deionized water', 'window cleaning', 'Arizona'],
  },
  {
    slug: 'how-often-should-you-clean-your-windows',
    title: 'How Often Should You Clean Your Windows?',
    excerpt: 'Learn the optimal window cleaning frequency for Arizona homes based on your location, climate, and home type.',
    datePublished: '2025-02-01',
    published: false,
    author: 'Arizona Window Washing Pros',
    category: 'Maintenance',
  },
  {
    slug: 'window-cleaning-vs-window-washing-whats-the-difference',
    title: 'Window Cleaning vs Window Washing: What\'s the Difference?',
    excerpt: 'Understanding the difference between basic window washing and professional window cleaning services.',
    datePublished: '2025-02-05',
    published: false,
    author: 'Arizona Window Washing Pros',
    category: 'Education',
  },
  {
    slug: 'best-time-of-year-for-window-cleaning-in-arizona',
    title: 'Best Time of Year for Window Cleaning in Arizona',
    excerpt: 'Discover the optimal seasons for window cleaning in Arizona and how to prepare for monsoon season.',
    datePublished: '2025-02-10',
    published: false,
    author: 'Arizona Window Washing Pros',
    category: 'Seasonal',
  },
  {
    slug: 'diy-window-cleaning-mistakes-to-avoid',
    title: 'DIY Window Cleaning Mistakes to Avoid',
    excerpt: 'Common mistakes homeowners make when cleaning windows themselves and how professional services avoid them.',
    datePublished: '2025-02-15',
    published: false,
    author: 'Arizona Window Washing Pros',
    category: 'Tips',
  },
  {
    slug: 'window-cleaning-for-luxury-homes-in-scottsdale',
    title: 'Window Cleaning for Luxury Homes in Scottsdale',
    excerpt: 'Special considerations for maintaining windows in high-end properties and luxury communities.',
    datePublished: '2025-02-20',
    published: false,
    author: 'Arizona Window Washing Pros',
    category: 'Location',
  },
  {
    slug: 'indoor-vs-outdoor-window-cleaning-which-do-you-need',
    title: 'Indoor vs Outdoor Window Cleaning: Which Do You Need?',
    excerpt: 'Understanding when to clean indoor windows, outdoor windows, or both for maximum clarity.',
    datePublished: '2025-02-25',
    published: false,
    author: 'Arizona Window Washing Pros',
    category: 'Services',
  },
  {
    slug: 'window-screen-cleaning-why-its-important',
    title: 'Window Screen Cleaning: Why It\'s Important',
    excerpt: 'Learn why regular screen cleaning improves air quality, visibility, and window function in Arizona homes.',
    datePublished: '2025-03-01',
    published: false,
    author: 'Arizona Window Washing Pros',
    category: 'Services',
  },
  {
    slug: 'preparing-your-home-for-window-cleaning-service',
    title: 'Preparing Your Home for Window Cleaning Service',
    excerpt: 'Simple steps to prepare your home before professional window cleaning service arrives.',
    datePublished: '2025-03-05',
    published: false,
    author: 'Arizona Window Washing Pros',
    category: 'Tips',
  },
  {
    slug: 'cost-of-window-cleaning-in-arizona',
    title: 'Cost of Window Cleaning in Arizona: What to Expect',
    excerpt: 'Understanding window cleaning pricing in Arizona and what factors affect the cost.',
    datePublished: '2025-03-10',
    published: false,
    author: 'Arizona Window Washing Pros',
    category: 'Pricing',
  },
  {
    slug: 'window-cleaning-safety-for-multi-story-homes',
    title: 'Window Cleaning Safety for Multi-Story Homes',
    excerpt: 'Why professional window cleaning is essential for two-story and multi-story homes in Arizona.',
    datePublished: '2025-03-15',
    published: false,
    author: 'Arizona Window Washing Pros',
    category: 'Safety',
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

