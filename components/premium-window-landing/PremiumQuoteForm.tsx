'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { BUSINESS_INFO } from '@/lib/constants'
import { submitWeb3FormsFromBrowser } from '@/lib/web3formsClient'

interface PremiumQuoteFormProps {
  id: string
  idPrefix: string
  city: string
  variant: 'glass' | 'white'
  conversionLabel: string
}

export default function PremiumQuoteForm({
  id,
  idPrefix,
  city,
  variant,
  conversionLabel,
}: PremiumQuoteFormProps) {
  const router = useRouter()
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    service: '',
    preferredDate: '',
  })

  const shell =
    variant === 'glass'
      ? 'rounded-3xl border border-white/25 bg-white/[0.12] backdrop-blur-xl shadow-[0_24px_80px_-12px_rgba(0,0,0,0.45)] ring-1 ring-white/10'
      : 'rounded-3xl border border-slate-200/80 bg-white shadow-[0_24px_60px_-12px_rgba(15,23,42,0.18)]'

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
        message: [
          `Address: ${form.address}`,
          `Service needed: ${form.service}`,
          `Preferred date: ${form.preferredDate || 'Flexible'}`,
          '',
          `Lead: Premium Google Ads LP (${city})`,
        ].join('\n'),
        subject: `Premium LP quote — ${form.name} — ${city}`,
        from_name: 'Arizona Window Washing Pros — Premium LP',
      })
      if (json.success) {
        setStatus('success')
        if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag) {
          const w = window as unknown as { gtag: (...a: unknown[]) => void }
          w.gtag('event', 'form_submit', {
            event_category: 'conversion',
            event_label: conversionLabel,
          })
          w.gtag('event', 'conversion', {
            send_to: 'AW-17892178683/wcO-COye-vYbEPv109NC',
          })
        }
        if (typeof window !== 'undefined' && (window as unknown as { fbq?: (...a: unknown[]) => void }).fbq) {
          ;(window as unknown as { fbq: (...a: unknown[]) => void }).fbq('track', 'Lead')
        }
        setTimeout(() => router.push('/thank-you'), 1400)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div id={id} className={shell}>
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="ok"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 sm:p-10 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white text-3xl"
            >
              ✓
            </motion.div>
            <h3 className="text-xl font-bold text-slate-900">Request received</h3>
            <p className="mt-2 text-sm text-slate-600">
              We&apos;ll contact you shortly with your free quote.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className={`p-6 sm:p-8 ${variant === 'glass' ? 'text-white' : ''}`}
          >
            <p
              className={`text-center text-xs font-semibold uppercase tracking-[0.2em] mb-2 ${
                variant === 'glass' ? 'text-blue-200' : 'text-blue-600'
              }`}
            >
              Free quote
            </p>
            <h2
              className={`text-center text-xl sm:text-2xl font-bold mb-6 ${
                variant === 'glass' ? 'text-white' : 'text-slate-900'
              }`}
            >
              Get your quote in minutes
            </h2>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor={`${idPrefix}-name`}
                  className={`block text-xs font-semibold mb-1.5 ${
                    variant === 'glass' ? 'text-slate-200' : 'text-slate-600'
                  }`}
                >
                  Name
                </label>
                <input
                  id={`${idPrefix}-name`}
                  name="name"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={`w-full rounded-xl border-2 px-4 py-3.5 text-base outline-none transition focus:ring-2 ${
                    variant === 'glass'
                      ? 'border-white/20 bg-white/10 text-white placeholder:text-slate-400 focus:border-blue-300 focus:ring-blue-400/40'
                      : 'border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500/30'
                  }`}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor={`${idPrefix}-phone`}
                  className={`block text-xs font-semibold mb-1.5 ${
                    variant === 'glass' ? 'text-slate-200' : 'text-slate-600'
                  }`}
                >
                  Phone
                </label>
                <input
                  id={`${idPrefix}-phone`}
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  inputMode="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={`w-full rounded-xl border-2 px-4 py-3.5 text-base outline-none transition focus:ring-2 ${
                    variant === 'glass'
                      ? 'border-white/20 bg-white/10 text-white placeholder:text-slate-400 focus:border-blue-300 focus:ring-blue-400/40'
                      : 'border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500/30'
                  }`}
                  placeholder="(480) 555-1234"
                />
              </div>
              <div>
                <label
                  htmlFor={`${idPrefix}-address`}
                  className={`block text-xs font-semibold mb-1.5 ${
                    variant === 'glass' ? 'text-slate-200' : 'text-slate-600'
                  }`}
                >
                  Address
                </label>
                <input
                  id={`${idPrefix}-address`}
                  name="address"
                  required
                  autoComplete="street-address"
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  className={`w-full rounded-xl border-2 px-4 py-3.5 text-base outline-none transition focus:ring-2 ${
                    variant === 'glass'
                      ? 'border-white/20 bg-white/10 text-white placeholder:text-slate-400 focus:border-blue-300 focus:ring-blue-400/40'
                      : 'border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500/30'
                  }`}
                  placeholder="Street, city, ZIP"
                />
              </div>
              <div>
                <label
                  htmlFor={`${idPrefix}-service`}
                  className={`block text-xs font-semibold mb-1.5 ${
                    variant === 'glass' ? 'text-slate-200' : 'text-slate-600'
                  }`}
                >
                  Service needed
                </label>
                <textarea
                  id={`${idPrefix}-service`}
                  name="service"
                  required
                  rows={3}
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className={`w-full resize-y min-h-[88px] rounded-xl border-2 px-4 py-3.5 text-base outline-none transition focus:ring-2 ${
                    variant === 'glass'
                      ? 'border-white/20 bg-white/10 text-white placeholder:text-slate-400 focus:border-blue-300 focus:ring-blue-400/40'
                      : 'border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500/30'
                  }`}
                  placeholder="e.g. Exterior only, interior + exterior, screens & tracks…"
                />
              </div>
              <div>
                <label
                  htmlFor={`${idPrefix}-date`}
                  className={`block text-xs font-semibold mb-1.5 ${
                    variant === 'glass' ? 'text-slate-200' : 'text-slate-600'
                  }`}
                >
                  Preferred date
                </label>
                <input
                  id={`${idPrefix}-date`}
                  name="preferredDate"
                  type="date"
                  value={form.preferredDate}
                  onChange={(e) => setForm({ ...form, preferredDate: e.target.value })}
                  className={`w-full rounded-xl border-2 px-4 py-3.5 text-base outline-none transition focus:ring-2 ${
                    variant === 'glass'
                      ? 'border-white/20 bg-white/10 text-white [color-scheme:dark] focus:border-blue-300 focus:ring-blue-400/40'
                      : 'border-slate-200 bg-slate-50 text-slate-900 focus:border-blue-500 focus:ring-blue-500/30'
                  }`}
                />
              </div>
              <motion.button
                type="submit"
                disabled={status === 'submitting'}
                whileHover={{ scale: status === 'submitting' ? 1 : 1.02 }}
                whileTap={{ scale: status === 'submitting' ? 1 : 0.98 }}
                className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 py-4 text-base font-bold text-white shadow-lg shadow-blue-900/25 transition disabled:opacity-60"
              >
                {status === 'submitting' ? 'Sending…' : 'Get My Free Quote'}
              </motion.button>
              {status === 'error' && (
                <p
                  className={`text-center text-sm ${
                    variant === 'glass' ? 'text-red-200' : 'text-red-600'
                  }`}
                >
                  Something went wrong — please call {BUSINESS_INFO.phone}
                </p>
              )}
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
