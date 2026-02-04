import { BUSINESS_INFO } from '@/lib/constants'

interface TrustSectionProps {
  city?: string
}

export default function TrustSection({ city }: TrustSectionProps) {
  const trustPoints = [
    { icon: '🏠', title: 'Locally Owned', description: 'Arizona-based business serving your community' },
    { icon: '🛡️', title: 'Fully Insured', description: 'Protected for your peace of mind' },
    { icon: '✨', title: 'Streak-Free Guarantee', description: '100% satisfaction or we return' },
    { icon: '💰', title: 'Transparent Pricing', description: 'No hidden fees, upfront quotes' },
    { icon: '⚡', title: 'Fast Scheduling', description: 'Same-week availability' },
    { icon: '👥', title: 'Friendly Pros', description: 'Professional, courteous service' },
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
      <div className="container-custom max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="section-title">Why Homeowners Choose Us</h2>
          <p className="section-subtitle">
            Trusted by {city ? `${city} ` : ''}homeowners for professional window cleaning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map((point, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{point.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>

        {city && (
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700">
              <strong className="text-primary-700">Service Area:</strong> Proudly serving <strong>{city}</strong> and nearby areas.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

