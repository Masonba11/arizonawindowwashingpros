'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { PINETOP_ANCHOR_SCROLL, PINETOP_CONFIG } from '@/lib/pinetopShowLow'
import { submitWeb3FormsFromBrowser } from '@/lib/web3formsClient'

const CITIES = [
  'Pinetop',
  'Pinetop-Lakeside',
  'Show Low',
  'Lakeside',
  'White Mountain',
  'Taylor',
  'Snowflake',
  'Heber-Overgaard',
  'Other',
] as const

const inputClass =
  'w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-0 transition'

export default function PinetopAdForm({ idPrefix = 'pa' }: { idPrefix?: string }) {
  const router = useRouter()
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    service: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const fields = {
        name: form.name,
        phone: form.phone,
        email: form.email,
        city: form.city || 'White Mountains',
        service: form.service || 'Window cleaning',
        message: [
          `Name: ${form.name}`,
          `Phone: ${form.phone}`,
          `Email: ${form.email}`,
          `City: ${form.city || 'White Mountains'}`,
          `Service needed: ${form.service}`,
          '',
          form.message,
          '',
          'Lead: Pinetop/Show Low Google Ads LP',
          'Offer: Free screen cleaning with window cleaning',
        ].join('\n'),
        subject: `Pinetop/Show Low quote — ${form.name}`,
        from_name: `${PINETOP_CONFIG.name} — Pinetop Ad LP`,
      }

      const submissions = await Promise.allSettled([
        submitWeb3FormsFromBrowser(fields, { accessKey: PINETOP_CONFIG.web3FormsAccessKey }),
        submitWeb3FormsFromBrowser(fields, { accessKey: PINETOP_CONFIG.web3FormsBackupAccessKey }),
      ])
      const submitted = submissions.some(
        (result) => result.status === 'fulfilled' && result.value.success
      )

      if (submitted) {
        setStatus('success')
        if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag) {
          const w = window as unknown as { gtag: (...a: unknown[]) => void }
          w.gtag('event', 'form_submit', {
            event_category: 'conversion',
            event_label: PINETOP_CONFIG.adFormConversion,
          })
          w.gtag('event', 'conversion', {
            send_to: 'AW-17892178683/wcO-COye-vYbEPv109NC',
          })
        }
        setTimeout(() => router.push('/thank-you'), 1200)
      } else {
        console.error('Pinetop Web3Forms submissions failed', submissions)
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div id="quote" className={`rounded-3xl border-2 border-emerald-200 bg-emerald-50 p-8 text-center shadow-xl ${PINETOP_ANCHOR_SCROLL}`}>
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-3xl text-white">
          ✓
        </div>
        <h3 className="text-xl font-bold text-slate-900">Quote request received</h3>
        <p className="mt-2 text-sm text-slate-600">We&apos;ll contact you shortly about your free screen cleaning offer.</p>
      </div>
    )
  }

  return (
    <form
      id="quote"
      onSubmit={handleSubmit}
      className={`rounded-3xl border-2 border-emerald-400/50 bg-white p-6 shadow-[0_28px_80px_-16px_rgba(15,23,42,0.35)] ring-4 ring-emerald-400/15 sm:p-8 ${PINETOP_ANCHOR_SCROLL}`}
    >
      <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
        Free screen cleaning offer
      </p>
      <h2 className="mt-2 text-center text-xl font-extrabold text-slate-900">Get My Free Quote</h2>

      <div className="mt-6 space-y-4">
        <div>
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
            placeholder={PINETOP_CONFIG.phone}
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
            placeholder="your@email.com"
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
          <label htmlFor={`${idPrefix}-service`} className="mb-1 block text-xs font-semibold text-slate-700">
            Service needed *
          </label>
          <input
            id={`${idPrefix}-service`}
            required
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            className={inputClass}
            placeholder="Interior + exterior, cabin, rental, etc."
          />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-message`} className="mb-1 block text-xs font-semibold text-slate-700">
            Message
          </label>
          <textarea
            id={`${idPrefix}-message`}
            rows={3}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={`${inputClass} resize-y min-h-[80px]`}
            placeholder="Home type, number of windows, preferred dates…"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-6 w-full rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 py-4 text-base font-bold text-white shadow-lg shadow-emerald-600/30 transition hover:from-emerald-500 hover:to-emerald-400 disabled:opacity-60"
      >
        {status === 'submitting' ? 'Sending…' : 'Get My Free Quote'}
      </button>

      {status === 'error' && (
        <p className="mt-3 text-center text-sm text-red-600">
          Something went wrong. Please call {PINETOP_CONFIG.phone}
        </p>
      )}
    </form>
  )
}
