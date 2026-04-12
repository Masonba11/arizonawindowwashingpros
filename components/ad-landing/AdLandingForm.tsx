'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { BUSINESS_INFO } from '@/lib/constants'
import { submitWeb3FormsFromBrowser } from '@/lib/web3formsClient'

interface AdLandingFormProps {
  city: string
  id?: string
}

export default function AdLandingForm({ city, id = 'ad-quote-form' }: AdLandingFormProps) {
  const router = useRouter()
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    service: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const json = await submitWeb3FormsFromBrowser({
        name: form.name,
        phone: form.phone,
        email: BUSINESS_INFO.email,
        city,
        service: form.service || 'Window cleaning',
        message: `Address: ${form.address}\n\nService needed: ${form.service}\n\nLead: Google Ads LP (${city})\n\nReply using phone on file.`,
        subject: `Ad LP quote — ${form.name} — ${city}`,
        from_name: 'Arizona Window Washing Pros — Ad LP',
      })
      if (json.success) {
        setStatus('success')
        if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag) {
          const w = window as unknown as { gtag: (...a: unknown[]) => void }
          w.gtag('event', 'form_submit', {
            event_category: 'conversion',
            event_label: 'ad_landing_quote',
          })
          w.gtag('event', 'conversion', {
            send_to: 'AW-17892178683/wcO-COye-vYbEPv109NC',
          })
        }
        if (typeof window !== 'undefined' && (window as unknown as { fbq?: (...a: unknown[]) => void }).fbq) {
          ;(window as unknown as { fbq: (...a: unknown[]) => void }).fbq('track', 'Lead')
        }
        setTimeout(() => router.push('/thank-you'), 1200)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        id={id}
        className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center shadow-lg"
      >
        <div className="text-4xl text-emerald-600 mb-3">✓</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">You&apos;re all set</h3>
        <p className="text-gray-700 text-sm">We&apos;ll reach out shortly with your quote.</p>
      </div>
    )
  }

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-xl shadow-blue-900/5"
    >
      <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 text-center">
        Get your free quote
      </h2>
      <p className="text-sm text-gray-600 text-center mb-6">
        No obligation — we&apos;ll confirm details by phone or email.
      </p>
      <div className="space-y-4">
        <div>
          <label htmlFor="ad-name" className="block text-xs font-semibold text-gray-700 mb-1">
            Name
          </label>
          <input
            id="ad-name"
            required
            autoComplete="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 focus:border-blue-500 focus:ring-0 outline-none transition"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="ad-phone" className="block text-xs font-semibold text-gray-700 mb-1">
            Phone
          </label>
          <input
            id="ad-phone"
            type="tel"
            required
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 focus:border-blue-500 focus:ring-0 outline-none transition"
            placeholder="(480) 555-1234"
          />
        </div>
        <div>
          <label htmlFor="ad-address" className="block text-xs font-semibold text-gray-700 mb-1">
            Address
          </label>
          <input
            id="ad-address"
            required
            autoComplete="street-address"
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 focus:border-blue-500 focus:ring-0 outline-none transition"
            placeholder="Street, city, ZIP"
          />
        </div>
        <div>
          <label htmlFor="ad-service" className="block text-xs font-semibold text-gray-700 mb-1">
            Service needed
          </label>
          <textarea
            id="ad-service"
            required
            rows={3}
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 focus:border-blue-500 focus:ring-0 outline-none transition resize-y min-h-[88px]"
            placeholder="e.g. Exterior only, interior + exterior, screens & tracks…"
          />
        </div>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 text-base shadow-lg shadow-blue-600/25 transition disabled:opacity-60"
        >
          {status === 'submitting' ? 'Sending…' : 'Get My Free Quote'}
        </button>
        {status === 'error' && (
          <p className="text-sm text-red-600 text-center">
            Something went wrong. Please call {BUSINESS_INFO.phone}
          </p>
        )}
      </div>
    </form>
  )
}
