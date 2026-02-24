import { FAQ } from '@/lib/faqs'

interface FAQSectionProps {
  faqs: FAQ[]
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Frequently Asked Questions
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
  )
}

