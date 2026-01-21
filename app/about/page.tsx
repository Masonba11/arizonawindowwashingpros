import Link from 'next/link'
import { BUSINESS_INFO } from '@/lib/constants'
import ContactForm from '@/components/ContactForm'
import HeroVideo from '@/components/HeroVideo'
import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'About Us',
  description: `Learn about ${BUSINESS_INFO.name} - founded in 2026 by Mason Ball, Chansyn Mapa, and Dane Howard. Three friends who built a window washing business on discipline, reliability, and genuine care for Arizona homeowners.`,
  path: '/about',
})

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <HeroVideo
        title="About Arizona Window Washing Pros"
        subtitle="Three friends. A shared vision. Built on trust."
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

      {/* Opening Section - Why We Started */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Why We Started</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
          </div>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-xl leading-relaxed">
              Arizona Window Washing Pros was founded in 2026 by three friends: Mason Ball, Chansyn Mapa, and Dane Howard. But our story didn't start in 2026. It started years earlier, in middle school, when we met and became close friends.
            </p>
            <p className="leading-relaxed">
              Our bond was built through football—those early morning practices, grueling workouts, and the lessons that came with being part of a team. We learned discipline. We learned accountability. We learned what it means to show up, even when it's hard.
            </p>
            <p className="leading-relaxed">
              As life moved forward, we took that same drive, that same work ethic, and that same commitment to doing things right, and we repurposed it into building something together.
            </p>
            <p className="leading-relaxed font-medium">
              Arizona Window Washing Pros exists because we wanted to bring something different to Arizona homeowners—professional, dependable service from people who genuinely care about the work and the community they serve.
            </p>
            <p className="leading-relaxed">
              We created this business for homeowners who are tired of no-shows, rushed jobs, and inconsistent quality. We wanted to be the people you could count on, every single time.
            </p>
          </div>
        </div>
      </section>

      {/* Our Background */}
      <section className="section-padding gradient-bg">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Background</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
          </div>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="leading-relaxed">
              Football taught us more than just how to play a game. It taught us how to show up consistently, day after day, even when you don't feel like it. It taught us that every detail matters, from how you prepare to how you finish.
            </p>
            <p className="leading-relaxed">
              That mindset translates directly to how we approach every window washing job. We show up on time. We communicate clearly. We do the job right, without cutting corners.
            </p>
            <p className="leading-relaxed">
              When you've learned to be accountable to your teammates, you understand what it means to be accountable to your customers. When you've spent years pushing through when things get tough, you don't walk away from a job when it's challenging. You figure it out.
            </p>
            <p className="leading-relaxed">
              That's where our reliability comes from. It's not a marketing promise—it's who we are. It's built into how we operate because it's how we've learned to live.
            </p>
          </div>
        </div>
      </section>

      {/* How We Treat Our Customers */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">How We Treat Our Customers</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
          </div>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="leading-relaxed">
              We treat your home with respect. We understand that inviting someone into your space requires trust, and we work hard to earn and keep that trust every single time.
            </p>
            <p className="leading-relaxed">
              Clear communication matters to us. If we're going to be late, we'll let you know. If there's something we notice about your windows that needs attention, we'll point it out. If you have questions, we'll give you honest answers.
            </p>
            <p className="leading-relaxed">
              We show up on time. It's a simple thing, but it's not always a given. We know your time is valuable, and we respect that by being where we say we'll be when we say we'll be there.
            </p>
            <p className="leading-relaxed">
              Most importantly, we don't cut corners. We take pride in our work because the quality of what we do reflects who we are. Every window, every track, every sill gets the attention it deserves. We wouldn't have it any other way.
            </p>
          </div>
        </div>
      </section>

      {/* Why Arizona Window Washing Pros Exists */}
      <section className="section-padding gradient-bg">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Why Arizona Window Washing Pros Exists</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
          </div>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="leading-relaxed">
              We're a local business, built to serve Arizona homeowners with quality window washing services. But we're also built to last—not just as a company, but as part of this community.
            </p>
            <p className="leading-relaxed">
              We're not interested in quick wins or shortcuts. We're interested in building long-term relationships with people who live here, work here, and care about this place as much as we do.
            </p>
            <p className="leading-relaxed">
              Everything we do is built on trust, not shortcuts. When you choose Arizona Window Washing Pros, you're choosing people who genuinely care about the work and the community they serve.
            </p>
            <p className="leading-relaxed">
              We take pride in what we do because we understand that when you trust us with your home, that's not something we take lightly. It's a responsibility we're honored to have.
            </p>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="leading-relaxed text-xl">
              We're grateful for every customer who trusts us with their window washing needs. This isn't just our business—it's our commitment to showing up and doing things the right way, for the long haul.
            </p>
            <p className="leading-relaxed">
              When you choose Arizona Window Washing Pros, you're choosing people who genuinely care about the work and the community they serve.
            </p>
            <p className="leading-relaxed">
              Thank you for considering us. We'd be honored to earn your trust.
            </p>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-gray-600 text-base">
                — Mason Ball, Chansyn Mapa, and Dane Howard
              </p>
              <p className="text-gray-600 text-base mt-2">
                Founders, Arizona Window Washing Pros
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="section-padding bg-gray-50">
        <div className="container-custom max-w-2xl">
          <ContactForm />
        </div>
      </section>
    </>
  )
}
