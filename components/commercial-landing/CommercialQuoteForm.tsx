'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { COMMERCIAL_ANCHOR_SCROLL, COMMERCIAL_LANDING } from '@/lib/commercialLanding'
import { submitWeb3FormsFromBrowser } from '@/lib/web3formsClient'

const CITIES = [
  'Pinetop',
  'Lakeside',
  'Show Low',
  'Snowflake',
  'Other',
] as const

const PROPERTY_TYPES = [
  'Restaurant',
  'Retail Store',
  'Office Building',
  'Medical Office',
  'Gym / Fitness Studio',
  'Salon / Barbershop',
  'Shopping Plaza',
  'Property Management',
  'Other Commercial',
] as const

const FREQUENCIES = [
  'One-time',
  'Weekly',
  'Bi-weekly',
  'Monthly',
  'Bi-monthly',
  'Quarterly',
  'Custom Schedule',
] as const

interface CommercialQuoteFormProps {
  id?: string
  idPrefix?: string
  variant?: 'hero' | 'inline'
}

const inputClass =
  'w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-0 transition'

export default function CommercialQuoteForm({
  id = 'quote',
  idPrefix = 'cq',
  variant = 'hero',
}: CommercialQuoteFormProps) {
  const router = useRouter()
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    businessName: '',
    city: '',
    propertyType: '',
    frequency: '',
    message: '',
  })

  const shell =
    variant === 'hero'
      ? 'rounded-3xl border-2 border-amber-400/40 bg-white shadow-[0_28px_80px_-16px_rgba(15,23,42,0.35)] ring-4 ring-amber-400/15'
      : 'rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const json = await submitWeb3FormsFromBrowser({
        name: form.name,
        phone: form.phone,
        email: form.email,
        city: form.city || 'Arizona',
        service: `Commercial — ${form.propertyType || 'Property'}`,
        message: [
          `Business: ${form.businessName}`,
          `Property type: ${form.propertyType}`,
          `Cleaning frequency: ${form.frequency}`,
          '',
          form.message,
          '',
          `Lead: Commercial LP (${COMMERCIAL_LANDING.name})`,
        ].join('\n'),
        subject: `Commercial quote — ${form.businessName || form.name}`,
        from_name: `${COMMERCIAL_LANDING.name} — Commercial LP`,
      })
      if (json.success) {
        setStatus('success')
        if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag) {
          const w = window as unknown as { gtag: (...a: unknown[]) => void }
          w.gtag('event', 'form_submit', {
            event_category: 'conversion',
            event_label: COMMERCIAL_LANDING.formConversion,
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
      <div id={id} className={`${shell} p-8 sm:p-10 text-center`}>
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-3xl text-white">
          ✓
        </div>
        <h3 className="text-xl font-bold text-slate-900">Quote request received</h3>
        <p className="mt-2 text-sm text-slate-600">
          We&apos;ll contact you shortly with your commercial window cleaning quote.
        </p>
      </div>
    )
  }

  return (
    <form id={id} onSubmit={handleSubmit} className={`${shell} ${COMMERCIAL_ANCHOR_SCROLL} p-6 sm:p-8`}>
      <h2 className="text-center text-xl font-extrabold text-slate-900 sm:text-2xl">
        Request a Commercial Window Cleaning Quote
      </h2>
      <p className="mt-2 text-center text-sm text-slate-600">
        Fast responses. No pressure. Custom pricing based on your property.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor={`${idPrefix}-name`} className="mb-1 block text-xs font-semibold text-slate-700">
            Name *
          </label>
          <input
            id={`${idPrefix}-name`}
            required
            autoComplete="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-phone`} className="mb-1 block text-xs font-semibold text-slate-700">
            Phone *
          </label>
          <input
            id={`${idPrefix}-phone`}
            type="tel"
            required
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={inputClass}
            placeholder="480-737-0850"
          />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-email`} className="mb-1 block text-xs font-semibold text-slate-700">
            Email *
          </label>
          <input
            id={`${idPrefix}-email`}
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputClass}
            placeholder="you@business.com"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`${idPrefix}-business`} className="mb-1 block text-xs font-semibold text-slate-700">
            Business name *
          </label>
          <input
            id={`${idPrefix}-business`}
            required
            value={form.businessName}
            onChange={(e) => setForm({ ...form, businessName: e.target.value })}
            className={inputClass}
            placeholder="Your business or property name"
          />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-city`} className="mb-1 block text-xs font-semibold text-slate-700">
            City *
          </label>
          <select
            id={`${idPrefix}-city`}
            required
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
            className={inputClass}
          >
            <option value="">Select city</option>
            {CITIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor={`${idPrefix}-property`} className="mb-1 block text-xs font-semibold text-slate-700">
            Type of property *
          </label>
          <select
            id={`${idPrefix}-property`}
            required
            value={form.propertyType}
            onChange={(e) => setForm({ ...form, propertyType: e.target.value })}
            className={inputClass}
          >
            <option value="">Select type</option>
            {PROPERTY_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`${idPrefix}-frequency`} className="mb-1 block text-xs font-semibold text-slate-700">
            How often do you need cleaning? *
          </label>
          <select
            id={`${idPrefix}-frequency`}
            required
            value={form.frequency}
            onChange={(e) => setForm({ ...form, frequency: e.target.value })}
            className={inputClass}
          >
            <option value="">Select frequency</option>
            {FREQUENCIES.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`${idPrefix}-message`} className="mb-1 block text-xs font-semibold text-slate-700">
            Message
          </label>
          <textarea
            id={`${idPrefix}-message`}
            rows={3}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={`${inputClass} resize-y min-h-[88px]`}
            placeholder="Number of windows, floors, preferred times, interior/exterior needs…"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-6 w-full rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 py-4 text-base font-bold text-slate-950 shadow-lg shadow-amber-500/30 transition hover:from-amber-400 hover:to-amber-300 disabled:opacity-60"
      >
        {status === 'submitting' ? 'Sending…' : 'Request My Free Quote'}
      </button>

      {status === 'error' && (
        <p className="mt-3 text-center text-sm text-red-600">
          Something went wrong. Please call {COMMERCIAL_LANDING.phone}
        </p>
      )}
    </form>
  )
}
