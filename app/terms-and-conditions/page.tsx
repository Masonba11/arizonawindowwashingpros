import Link from 'next/link'
import { BUSINESS_INFO } from '@/lib/constants'
import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'Terms & Conditions',
  description:
    'Terms & Conditions for Arizona Window Washing Pros, including SMS messaging terms, opt-out instructions, and contact information.',
  path: '/terms-and-conditions',
})

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container-custom max-w-4xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms &amp; Conditions</h1>
          <p className="text-gray-600 mb-8">
            Last updated:{' '}
            {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Messaging Brand</h2>
            <p className="text-gray-700 mb-4">
              These Terms &amp; Conditions apply to text messaging programs operated by{' '}
              <strong>{BUSINESS_INFO.name}</strong> (the messaging brand).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">SMS / Text Messaging Terms</h2>
            <p className="text-gray-700 mb-4">
              By providing your mobile phone number and affirmatively opting in (for example, by checking
              the SMS consent box on our quote or contact forms), you agree to receive recurring
              informational and promotional text messages from {BUSINESS_INFO.name}.
            </p>
            <p className="text-gray-700 mb-4">Message types may include:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Quotes and estimate follow-ups</li>
              <li>Appointment confirmations and updates</li>
              <li>Service reminders and arrival notifications</li>
              <li>Customer support related to your request</li>
              <li>Special offers and other promotional messages</li>
            </ul>
            <p className="text-gray-700 mb-4">
              <strong>Message frequency varies.</strong>
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Message and data rates may apply.</strong> Check your mobile plan for details.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Consent is not a condition of purchase.</strong> You may request a quote or
              purchase services without agreeing to receive text messages.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Opt Out (STOP)</h2>
            <p className="text-gray-700 mb-4">
              You can cancel the SMS service at any time. Just reply <strong>STOP</strong> to any text
              message from us. After you send STOP, we will send you a confirmation that you have been
              unsubscribed. After this, you will no longer receive SMS messages from us. If you want to
              join again, you may opt in through our website forms or contact us directly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Help (HELP)</h2>
            <p className="text-gray-700 mb-4">
              If you are experiencing issues with the messaging program, reply with the keyword{' '}
              <strong>HELP</strong> for more assistance, or contact us using the information below.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Carrier Liability</h2>
            <p className="text-gray-700 mb-4">
              Carriers are not liable for delayed or undelivered messages.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy</h2>
            <p className="text-gray-700 mb-4">
              Your privacy is important to us. Please review our{' '}
              <Link href="/privacy-policy" className="text-primary-600 hover:text-primary-700 underline">
                Privacy Policy
              </Link>{' '}
              to understand how we collect, use, and protect your information, including mobile numbers
              and SMS consent records.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Website Use</h2>
            <p className="text-gray-700 mb-4">
              By using {BUSINESS_INFO.website}, you agree to use the site only for lawful purposes related
              to learning about our services, requesting quotes, and communicating with our team. Content
              on this website is provided for general information and may change without notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              Questions about these Terms &amp; Conditions or our messaging program? Contact us:
            </p>
            <div className="bg-gray-50 border-l-4 border-primary-600 p-6">
              <p className="text-gray-800 font-semibold mb-2">{BUSINESS_INFO.name}</p>
              <p className="text-gray-700 mb-2">
                Email:{' '}
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="text-primary-600 hover:text-primary-700"
                >
                  {BUSINESS_INFO.email}
                </a>
              </p>
              <p className="text-gray-700 mb-2">
                Phone:{' '}
                <a
                  href={`tel:${BUSINESS_INFO.phoneFormatted}`}
                  className="text-primary-600 hover:text-primary-700"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </p>
              <p className="text-gray-700">
                Website:{' '}
                <a href={BUSINESS_INFO.website} className="text-primary-600 hover:text-primary-700">
                  {BUSINESS_INFO.website}
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
