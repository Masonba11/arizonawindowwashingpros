import { generateMetadata } from '@/lib/seo'
import { BUSINESS_INFO } from '@/lib/constants'

export const metadata = generateMetadata({
  title: 'SMS Communication Opt-In',
  description: 'SMS opt-in information for Arizona Window Washing Pros. Learn how to opt in to receive text messages for service-related communication.',
  path: '/opt-in',
})

export default function OptInPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container-custom max-w-3xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">SMS Communication Opt-In</h1>
          <p className="text-xl text-gray-700 mb-8 font-semibold">{BUSINESS_INFO.name}</p>

          <div className="bg-gray-50 border-l-4 border-primary-600 p-6 mb-8">
            <p className="text-gray-800 leading-relaxed">
              By providing your phone number, you consent to receive text messages from {BUSINESS_INFO.name} for service-related communication.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How You Opt In</h2>
            <p className="text-gray-700 mb-4">You may opt in to receive text messages by:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Submitting your phone number through our online booking form</li>
              <li>Submitting your phone number through a contact form on our website</li>
              <li>Requesting service in person (such as door-to-door service inquiries) and agreeing to receive text messages</li>
              <li>Replying to a text message sent by {BUSINESS_INFO.name} after requesting information or service</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Messages You May Receive</h2>
            <p className="text-gray-700 mb-4">Messages may include:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Appointment confirmations</li>
              <li>Scheduling reminders</li>
              <li>Arrival notifications</li>
              <li>Service updates</li>
              <li>Customer support communication related to your service request</li>
            </ul>
            <p className="text-gray-700 font-medium">We do not send promotional or bulk marketing messages.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Message Frequency</h2>
            <p className="text-gray-700">Message frequency varies depending on your service request.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Opt-Out Instructions</h2>
            <p className="text-gray-700 mb-2">You may opt out at any time by replying <strong>STOP</strong> to any message.</p>
            <p className="text-gray-700">For assistance, reply <strong>HELP</strong>.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-2">
              <strong>{BUSINESS_INFO.name}</strong>
            </p>
            <p className="text-gray-700">
              Website: <a href={BUSINESS_INFO.website} className="text-primary-600 hover:text-primary-700 underline">{BUSINESS_INFO.website}</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}








