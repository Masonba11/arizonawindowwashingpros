import Link from 'next/link'
import { BUSINESS_INFO } from '@/lib/constants'
import ContactForm from '@/components/ContactForm'
import FAQSection from '@/components/FAQSection'
import ReviewsSection from '@/components/ReviewsSection'
import HeroVideo from '@/components/HeroVideo'
import { generalFAQs } from '@/lib/faqs'
import { reviews } from '@/lib/reviews'
import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'About Us',
  description: `Learn about ${BUSINESS_INFO.name} - your trusted local window washing professionals serving Mesa, Gilbert, Queen Creek, and Chandler, Arizona.`,
  path: '/about',
})

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <HeroVideo
        title="About Arizona Window Washing Pros"
        subtitle="Your trusted local window cleaning experts"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${BUSINESS_INFO.phoneFormatted}`}
            className="btn-primary text-lg"
          >
            Call Now: {BUSINESS_INFO.phone}
          </a>
          <a href="#contact-form" className="btn-secondary text-lg bg-white text-primary-600 border-2 border-white hover:bg-primary-50">
            Get Free Quote
          </a>
        </div>
      </HeroVideo>

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <div className="content-section">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Story</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
            </div>
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                {BUSINESS_INFO.name} has been serving homeowners and businesses throughout the East Valley for years. We started with a simple mission: to provide exceptional window cleaning services that make a real difference in how your property looks and feels.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                As a locally owned and operated business, we understand the unique needs of Arizona homeowners. From the intense sun that creates hard water spots to the dust storms that leave windows dirty, we&apos;ve seen it all and know exactly how to handle it.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                What sets us apart is our commitment to quality, reliability, and customer satisfaction. Every member of our team is trained in the latest window cleaning techniques and uses professional-grade equipment to ensure your windows sparkle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding gradient-bg">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="section-title">Why Choose Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🏆', title: 'Experienced Professionals', desc: 'Our team has years of experience cleaning windows in Arizona\'s unique climate conditions.' },
              { icon: '✨', title: 'Quality Guaranteed', desc: 'We stand behind our work. If you\'re not satisfied, we\'ll make it right.' },
              { icon: '🏠', title: 'Local & Trusted', desc: 'As a local business, we\'re invested in our community and your satisfaction.' },
              { icon: '⚡', title: 'Fast & Reliable', desc: 'We show up on time, work efficiently, and leave your property looking its best.' },
              { icon: '💰', title: 'Fair Pricing', desc: 'Transparent, competitive pricing with no hidden fees. Free quotes for every job.' },
              { icon: '🛡️', title: 'Fully Insured', desc: 'We\'re fully licensed and insured for your peace of mind.' },
            ].map((item, index) => (
              <div key={index} className="card card-hover">
                <div className="p-6">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Values */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Values</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Excellence in Every Detail', desc: 'We don\'t just clean windows. We ensure every pane, track, and sill is spotless. Our attention to detail is what makes us stand out.' },
              { title: 'Customer-First Approach', desc: 'Your satisfaction is our top priority. We listen to your needs, answer your questions, and deliver results that exceed expectations.' },
              { title: 'Community Commitment', desc: 'As part of the East Valley community, we\'re committed to supporting our neighbors and building lasting relationships.' },
            ].map((item, index) => (
              <div key={index} className="card">
                <div className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Pricing</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <img 
                src="/exterior-pricing.png" 
                alt="Exterior Window Cleaning Pricing" 
                className="w-full rounded-xl shadow-lg"
              />
            </div>
            <div>
              <img 
                src="/interior-pricing.png" 
                alt="Interior Window Cleaning Pricing" 
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rich Content Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Commitment to Excellence</h2>
            <p className="text-xl text-gray-700 mb-6">
              At Arizona Window Washing Pros, we believe that clean windows are more than just a cosmetic improvement. They enhance your quality of life by bringing more natural light into your home and improving your view of the beautiful Arizona landscape.
            </p>
            <p className="text-gray-700 mb-6">
              We&apos;ve built our reputation on reliability, quality, and customer satisfaction. Every job is completed with meticulous attention to detail, using professional-grade equipment and eco-friendly cleaning solutions. Our team members are not just employees. They&apos;re trained professionals who take pride in their work.
            </p>
            <h3 className="text-2xl font-bold mb-4 mt-8">Local Expertise, Professional Results</h3>
            <p className="text-gray-700 mb-4">
              Living and working in Arizona has given us unique insights into the challenges local homeowners face. We know how to effectively remove hard water spots caused by mineral-rich water, how to clean windows after dust storms, and how to maintain windows in extreme heat conditions.
            </p>
            <p className="text-gray-700 mb-6">
              Our local knowledge, combined with professional training and the best equipment, ensures that your windows receive the care they need to look their best year-round. We&apos;re not just a cleaning service. We&apos;re your neighbors, committed to helping you maintain a beautiful home.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsSection reviews={reviews} maxReviews={6} />

      {/* FAQ Section */}
      <FAQSection faqs={generalFAQs} />

      {/* Contact Form */}
      <section id="contact-form" className="section-padding bg-white">
        <div className="container-custom max-w-2xl">
          <ContactForm />
        </div>
      </section>
    </>
  )
}

