'use client'

import { PINETOP_ANCHOR_SCROLL, PINETOP_CONFIG } from '@/lib/pinetopShowLow'

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
  const trackSubmit = () => {
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
  }

  return (
    <form
      id="quote"
      action="https://api.web3forms.com/submit"
      method="POST"
      onSubmit={trackSubmit}
      className={`rounded-3xl border-2 border-emerald-400/50 bg-white p-6 shadow-[0_28px_80px_-16px_rgba(15,23,42,0.35)] ring-4 ring-emerald-400/15 sm:p-8 ${PINETOP_ANCHOR_SCROLL}`}
    >
      <input type="hidden" name="access_key" value={PINETOP_CONFIG.web3FormsAccessKey} />
      <input type="hidden" name="subject" value="Pinetop/Show Low quote request" />
      <input type="hidden" name="from_name" value={`${PINETOP_CONFIG.name} - Pinetop Ad LP`} />
      <input type="hidden" name="redirect" value="https://arizonawindowwashingpros.com/thank-you" />
      <input type="hidden" name="lead_source" value="Pinetop/Show Low Google Ads LP" />
      <input type="hidden" name="offer" value="Free screen cleaning with window cleaning" />
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

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
            name="name"
            required
            autoComplete="name"
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
            name="phone"
            type="tel"
            required
            autoComplete="tel"
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
            name="email"
            type="email"
            required
            autoComplete="email"
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
            name="city"
            required
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
            name="service"
            required
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
            name="message"
            rows={3}
            className={`${inputClass} resize-y min-h-[80px]`}
            placeholder="Home type, number of windows, preferred dates…"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 py-4 text-base font-bold text-white shadow-lg shadow-emerald-600/30 transition hover:from-emerald-500 hover:to-emerald-400 disabled:opacity-60"
      >
        Get My Free Quote
      </button>
    </form>
  )
}
