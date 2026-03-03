import { generateFAQSchema } from '@/lib/seo'

export interface FAQ {
  question: string
  answer: string
}

interface FAQProps {
  faqs: FAQ[]
  title?: string
  className?: string
}

/**
 * Unified FAQ component that:
 * 1. Renders FAQ UI
 * 2. Automatically outputs FAQPage schema JSON-LD
 * 3. Ensures schema matches visible content exactly
 */
export default function FAQ({ faqs, title = 'Frequently Asked Questions', className = '' }: FAQProps) {
  if (!faqs || faqs.length === 0) {
    return null
  }

  const faqSchema = generateFAQSchema(faqs)

  return (
    <>
      {/* FAQPage Schema - only output when FAQs exist */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* FAQ UI */}
      <section className={`section-padding bg-gray-50 ${className}`}>
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            {title}
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

