import { BUSINESS_INFO } from '@/lib/constants'
import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'Privacy Policy',
  description: 'Privacy Policy for Arizona Window Washing Pros. Learn how we collect, use, and protect your personal information.',
})

export default function PrivacyPolicyPage() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen bg-white">
      <div className="container-custom max-w-4xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 mb-4">
              {BUSINESS_INFO.name} ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at {BUSINESS_INFO.website} and use our services.
            </p>
            <p className="text-gray-700">
              By using our website and services, you consent to the data practices described in this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
            <p className="text-gray-700 mb-4">We may collect personal information that you voluntarily provide to us when you:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Fill out a contact form or request a quote</li>
              <li>Schedule a service appointment</li>
              <li>Communicate with us via phone, email, or text message</li>
              <li>Subscribe to our newsletter or marketing communications</li>
            </ul>
            <p className="text-gray-700 mb-4">This information may include:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Physical address</li>
              <li>Service preferences and property details</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Automatically Collected Information</h3>
            <p className="text-gray-700 mb-4">When you visit our website, we may automatically collect certain information about your device and browsing behavior, including:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Device information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use the information we collect for the following purposes:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>To provide, maintain, and improve our services</li>
              <li>To process and schedule service requests</li>
              <li>To communicate with you about your service requests, appointments, and inquiries</li>
              <li>To send you service-related updates, confirmations, and reminders via text message (with your consent)</li>
              <li>To respond to your questions and provide customer support</li>
              <li>To send marketing communications (with your consent, and you may opt out at any time)</li>
              <li>To analyze website usage and improve user experience</li>
              <li>To detect, prevent, and address technical issues</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tracking Technologies and Cookies</h2>
            <p className="text-gray-700 mb-4">
              We use various tracking technologies to collect and store information about your use of our website:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Google Analytics</h3>
            <p className="text-gray-700 mb-4">
              We use Google Analytics to understand how visitors interact with our website. Google Analytics uses cookies to collect information such as how often users visit our site, what pages they visit, and what other sites they used prior to coming to our site. We use the information we get from Google Analytics to improve our website and services.
            </p>
            <p className="text-gray-700 mb-4">
              Google's ability to use and share information collected by Google Analytics about your visits to our site is restricted by the <a href="https://www.google.com/analytics/terms/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline">Google Analytics Terms of Service</a> and the <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline">Google Privacy Policy</a>. You can opt out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline">Google Analytics Opt-out Browser Add-on</a>.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Meta Pixel (Facebook Pixel)</h3>
            <p className="text-gray-700 mb-4">
              We use Meta Pixel (Facebook Pixel) to track conversions, optimize ad delivery, and build audiences for advertising purposes. Meta Pixel collects information about your activity on our website, such as pages visited and actions taken. This information is used to show you relevant ads on Facebook and Instagram and to measure the effectiveness of our advertising campaigns.
            </p>
            <p className="text-gray-700 mb-4">
              You can opt out of Facebook's use of cookies and pixels by visiting <a href="https://www.facebook.com/help/568137493302217" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline">Facebook's Ad Settings</a> or by adjusting your browser settings to refuse cookies.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Cookies</h3>
            <p className="text-gray-700 mb-4">
              Cookies are small data files stored on your device. We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookies through your browser settings, but disabling cookies may limit your ability to use certain features of our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">SMS Communications</h2>
            <p className="text-gray-700 mb-4">
              If you provide your phone number, you may receive text messages from us for service-related communications, including appointment confirmations, scheduling reminders, arrival notifications, and service updates. Message frequency varies depending on your service requests.
            </p>
            <p className="text-gray-700 mb-4">
              You can opt out of receiving text messages at any time by replying <strong>STOP</strong> to any message. For assistance, reply <strong>HELP</strong>.
            </p>
            <p className="text-gray-700 mb-4">
              For more information about our SMS communications, please see our <a href="/opt-in" className="text-primary-600 hover:text-primary-700 underline">SMS Communication Opt-In page</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing and Disclosure</h2>
            <p className="text-gray-700 mb-4">We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li><strong>Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf, such as payment processing, email delivery, SMS messaging, and website analytics.</li>
              <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to valid requests by public authorities.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
              <li><strong>With Your Consent:</strong> We may share your information with your explicit consent.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights and Choices</h2>
            <p className="text-gray-700 mb-4">You have the following rights regarding your personal information:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li><strong>Access:</strong> You can request access to the personal information we hold about you.</li>
              <li><strong>Correction:</strong> You can request that we correct any inaccurate or incomplete information.</li>
              <li><strong>Deletion:</strong> You can request that we delete your personal information, subject to certain legal exceptions.</li>
              <li><strong>Opt-Out:</strong> You can opt out of marketing communications at any time by following the unsubscribe instructions in our emails or by contacting us directly.</li>
              <li><strong>Do Not Track:</strong> Your browser may offer a "Do Not Track" option. We currently do not respond to "Do Not Track" signals.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-700 mb-4">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us, and we will take steps to delete such information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 border-l-4 border-primary-600 p-6">
              <p className="text-gray-800 font-semibold mb-2">{BUSINESS_INFO.name}</p>
              <p className="text-gray-700 mb-2">
                <a href={`tel:${BUSINESS_INFO.phoneFormatted}`} className="text-primary-600 hover:text-primary-700">
                  {BUSINESS_INFO.phone}
                </a>
              </p>
              <p className="text-gray-700 mb-2">
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-primary-600 hover:text-primary-700">
                  {BUSINESS_INFO.email}
                </a>
              </p>
              <p className="text-gray-700">
                Website: <a href={BUSINESS_INFO.website} className="text-primary-600 hover:text-primary-700">{BUSINESS_INFO.website}</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

