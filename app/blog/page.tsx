import Link from 'next/link'
import { generateMetadata } from '@/lib/seo'
import { getAllBlogPosts } from '@/lib/blog'

export const metadata = generateMetadata({
  title: 'Window Cleaning Tips & Advice',
  description: 'Expert tips and advice on window cleaning, hard water stain removal, and maintaining crystal-clear windows in Arizona. Learn from the professionals.',
  path: '/blog',
})

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <>
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
            Window Cleaning Tips & Advice
          </h1>
          <p className="text-xl text-gray-600 text-center mb-12">
            Expert insights on window cleaning, maintenance, and Arizona-specific challenges
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card card-hover group"
              >
                <div className="p-6">
                  {post.published && (
                    <time className="text-sm text-gray-500 mb-2 block">
                      {new Date(post.datePublished).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  )}
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="text-primary-600 font-semibold flex items-center group-hover:translate-x-2 transition-transform">
                    Read more
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

