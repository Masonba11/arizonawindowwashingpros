import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getBlogPost, getRelatedPosts, getAllBlogPosts } from '@/lib/blog'
import { generateMetadata as generatePageMetadata, generateArticleSchema } from '@/lib/seo'
import ContactForm from '@/components/ContactForm'

export async function generateStaticParams() {
  const publishedPosts = getAllBlogPosts()
  return publishedPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return generatePageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  })
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)
  const relatedPosts = post ? getRelatedPosts(post.slug, 2) : []

  if (!post || !post.published) {
    notFound()
  }

  const articleSchema = generateArticleSchema(post)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <Link
            href="/blog"
            className="text-primary-600 hover:text-primary-700 mb-6 inline-flex items-center font-medium"
          >
            ← Back to Blog
          </Link>

          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-gray-600 mb-6">
              <time dateTime={post.datePublished}>
                {new Date(post.datePublished).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              {post.category && (
                <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              )}
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p className="text-xl font-semibold text-gray-900">{post.excerpt}</p>
              
              {/* Blog content - MDX files are in content/blog/ directory */}
              {/* For now, showing excerpt. To load MDX dynamically, install @next/mdx */}
              <div className="space-y-4">
                <p>
                  Full blog post content is available in MDX format. The complete article includes detailed information, 
                  internal links to our services and city pages, and actionable advice for Arizona homeowners.
                </p>
                <p>
                  To enable full MDX rendering, install <code>@next/mdx</code> and configure it in <code>next.config.js</code>.
                  The MDX files are located in the <code>content/blog/</code> directory.
                </p>
              </div>
            </div>
          </div>

          {/* Internal Links Section - Required for SEO */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Services</h2>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                href="/services/exterior-window-cleaning"
                className="text-primary-600 hover:text-primary-700 hover:underline font-medium"
              >
                Exterior Window Cleaning
              </Link>
              <Link
                href="/services/interior-window-cleaning"
                className="text-primary-600 hover:text-primary-700 hover:underline font-medium"
              >
                Interior Window Cleaning
              </Link>
              <Link
                href="/services/screen-cleaning"
                className="text-primary-600 hover:text-primary-700 hover:underline font-medium"
              >
                Screen Cleaning
              </Link>
              <Link
                href="/services/track-sill-cleaning"
                className="text-primary-600 hover:text-primary-700 hover:underline font-medium"
              >
                Track & Sill Cleaning
              </Link>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-gray-900 mt-8">Serving Arizona Cities</h2>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                href="/locations/gilbert-window-washing"
                className="text-primary-600 hover:text-primary-700 hover:underline font-medium"
              >
                Window Cleaning in Gilbert
              </Link>
              <Link
                href="/locations/mesa-window-washing"
                className="text-primary-600 hover:text-primary-700 hover:underline font-medium"
              >
                Window Cleaning in Mesa
              </Link>
              <Link
                href="/locations/chandler-window-washing"
                className="text-primary-600 hover:text-primary-700 hover:underline font-medium"
              >
                Window Cleaning in Chandler
              </Link>
              <Link
                href="/locations/tempe-window-washing"
                className="text-primary-600 hover:text-primary-700 hover:underline font-medium"
              >
                Window Cleaning in Tempe
              </Link>
              <Link
                href="/locations/window-washing-queen-creek"
                className="text-primary-600 hover:text-primary-700 hover:underline font-medium"
              >
                Window Cleaning in Queen Creek
              </Link>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
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

          {/* CTA Section */}
          <div className="mt-12 p-8 bg-primary-50 rounded-2xl border-2 border-primary-200">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Ready for Professional Window Cleaning?</h2>
            <p className="text-gray-700 mb-6">
              Get a free quote for professional window cleaning services in the East Valley. Our deionized water system ensures streak-free results.
            </p>
            <Link
              href="#contact-form"
              className="btn-primary inline-block"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </article>

      {/* Contact Form */}
      <section id="contact-form" className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <ContactForm />
        </div>
      </section>
    </>
  )
}

