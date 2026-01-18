'use client'

import { useEffect } from 'react'

interface ContactFormProps {
  defaultCity?: string
  defaultService?: string
  showTitle?: boolean
}

export default function ContactForm({
  defaultCity = '',
  defaultService = '',
  showTitle = true,
}: ContactFormProps) {
  useEffect(() => {
    // Form embed script is loaded in layout.tsx
  }, [])

  return (
    <div className="card">
      <div className="p-8 md:p-10">
        {showTitle && (
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Get Your Free Quote
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
          </div>
        )}
        <div className="w-full" style={{ minHeight: '642px' }}>
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/orc3drG7uSKXTeTDk7C2"
            style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
            id="inline-orc3drG7uSKXTeTDk7C2"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Contact Us"
            data-height="642"
            data-layout-iframe-id="inline-orc3drG7uSKXTeTDk7C2"
            data-form-id="orc3drG7uSKXTeTDk7C2"
            title="Contact Us"
          />
        </div>
      </div>
    </div>
  )
}
