import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getBlogPost, getRelatedPosts, getAllBlogPosts } from '@/lib/blog'
import { getWmBlogArticle } from '@/lib/wmBlogArticles'
import { generateMetadata as generatePageMetadata, generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo'
import ContactForm from '@/components/ContactForm'
import { BUSINESS_INFO } from '@/lib/constants'

export async function generateStaticParams() {
  const publishedPosts = getAllBlogPosts()
  return publishedPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)
  if (!post) return { title: 'Post Not Found' }
  return generatePageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  })
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)
  const wmArticle = getWmBlogArticle(params.slug)
  const relatedPosts = post ? getRelatedPosts(post.slug, 3) : []

  if (!post || !post.published) notFound()

  const articleSchema = generateArticleSchema(post)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: BUSINESS_INFO.website },
    { name: 'Blog', url: `${BUSINESS_INFO.website}/blog` },
    { name: post.title, url: `${BUSINESS_INFO.website}/blog/${post.slug}` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <article className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-primary-600">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{post.title}</span>
          </nav>

          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
              <time dateTime={post.datePublished}>
                Published{' '}
                {new Date(post.datePublished).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              {post.dateModified && (
                <time dateTime={post.dateModified}>
                  Updated{' '}
                  {new Date(post.dateModified).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              )}
              {post.category && (
                <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              )}
            </div>
            <p className="text-xl text-gray-800 leading-relaxed">{post.excerpt}</p>
          </header>

          <div className="prose prose-lg max-w-none text-gray-700">
            {wmArticle ? (
              wmArticle.sections.map((section) => (
                <section key={section.heading || section.paragraphs[0]?.slice(0, 24)} className="mb-10">
                  {section.heading && (
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{section.heading}</h2>
                  )}
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)} className="mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))
            ) : (
              <div className="space-y-4">
                <p>
                  This article covers practical window-cleaning guidance for Arizona homeowners. For full White
                  Mountains service details, explore our location and service pages below.
                </p>
              </div>
            )}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Related Services & Areas</h2>
            <div className="flex flex-wrap gap-3 mb-8">
              {(wmArticle?.relatedLinks || [
                { label: 'Residential window cleaning', href: '/services/residential-window-cleaning' },
                { label: 'Pinetop-Lakeside window cleaning', href: '/window-cleaning-pinetop-lakeside-az' },
                { label: 'Show Low window cleaning', href: '/window-cleaning-show-low-az' },
                { label: 'Snowflake window cleaning', href: '/window-cleaning-snowflake-az' },
                { label: 'White Mountains window cleaning', href: '/white-mountains-window-cleaning' },
                { label: 'Request a free estimate', href: '/contact' },
              ]).map((link) => (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  className="rounded-lg border border-primary-200 bg-primary-50 px-3 py-2 text-sm font-semibold text-primary-700 hover:bg-primary-100"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {relatedPosts.length > 0 && (
            <div className="mt-10 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Related Articles</h2>
              <ul className="space-y-2">
                {relatedPosts.map((relatedPost) => (
                  <li key={relatedPost.slug}>
                    <Link
                      href={`/blog/${relatedPost.slug}`}
                      className="text-primary-600 hover:text-primary-700 hover:underline font-medium"
                    >
                      {relatedPost.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-12 p-8 bg-primary-50 rounded-2xl border-2 border-primary-200">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Ready for Professional Window Cleaning?</h2>
            <p className="text-gray-700 mb-6">
              Call {BUSINESS_INFO.phone} or request a free estimate for residential or commercial window cleaning in the
              White Mountains and across Arizona.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#contact-form" className="btn-primary inline-block text-center">
                Request a Free Estimate
              </a>
              <a href={`tel:${BUSINESS_INFO.phoneFormatted}`} className="btn-secondary inline-block text-center">
                Call {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </article>

      <section id="contact-form" className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <ContactForm />
        </div>
      </section>
    </>
  )
}
