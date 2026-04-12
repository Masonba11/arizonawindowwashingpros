'use client'

import { useState } from 'react'
import { BUSINESS_INFO } from '@/lib/constants'
import { useRouter } from 'next/navigation'
import { trackCallClick } from '@/lib/callTracking'
import { submitWeb3FormsFromBrowser } from '@/lib/web3formsClient'

interface ContactFormProps {
  defaultCity?: string
  defaultService?: string
  showTitle?: boolean
  compact?: boolean
}

function GoogleGIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  )
}

function TrustPanel({ compact }: { compact: boolean }) {
  const shell = compact
    ? 'rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 text-white p-5 shadow-lg border border-white/10'
    : 'rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 text-white p-7 md:p-8 shadow-xl border border-white/10'

  return (
    <aside
      className={
        compact
          ? 'md:w-[min(100%,17rem)] md:flex-shrink-0'
          : 'lg:w-[min(100%,22rem)] lg:flex-shrink-0 lg:sticky lg:top-28'
      }
    >
      <div className={shell}>
        <p className="text-amber-300/95 font-bold text-xs uppercase tracking-[0.12em] mb-2">
          Arizona&apos;s trusted crew
        </p>
        <h3 className={`font-extrabold text-white leading-tight ${compact ? 'text-lg' : 'text-xl md:text-2xl'}`}>
          #1 rated window cleaning company
        </h3>
        <p className={`text-white/75 mt-2 ${compact ? 'text-xs' : 'text-sm'}`}>
          Join thousands of happy homeowners across the Valley.
        </p>

        <ul className={`space-y-3 mt-5 ${compact ? 'text-sm' : 'text-base'}`}>
          <li className="flex items-start gap-3">
            <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-300">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 1.994 0 5.301-4.301 9.6-9.6 9.6-5.301 0-9.6-4.299-9.6-9.6 0-.674.058-1.344.166-1.994zm8.615 3.7a.75.75 0 00-1.22-.72l-3.54 5.16-1.6-1.6a.75.75 0 10-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span>
              <span className="font-semibold text-white">Licensed &amp; insured</span>
              <span className="block text-white/70 text-xs mt-0.5">Full coverage for your peace of mind.</span>
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white/10">
              <GoogleGIcon className="w-5 h-5" />
            </span>
            <span className="min-w-0">
              <span className="font-semibold text-white flex flex-wrap items-center gap-2">
                5-star Google rated
                <span className="flex text-amber-400" aria-label="5 out of 5 stars">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="h-3.5 w-3.5 md:h-4 md:w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </span>
              </span>
              <span className="block text-white/70 text-xs mt-0.5">Real reviews from neighbors like you.</span>
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-sky-500/20 text-sky-200">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </span>
            <span>
              <span className="font-semibold text-white">Locally owned &amp; operated</span>
              <span className="block text-white/70 text-xs mt-0.5">Valley-based team, not a national call center.</span>
            </span>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default function ContactForm({
  defaultCity = '',
  defaultService = '',
  showTitle = true,
  compact = false,
}: ContactFormProps) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: defaultCity || '',
    message: '',
  })
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [submitErrorDetail, setSubmitErrorDetail] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('submitting')
    setSubmitErrorDetail(null)

    try {
      const serviceLine =
        defaultService || formData.message || 'Not specified'

      const result = await submitWeb3FormsFromBrowser({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        city: formData.city || 'Not specified',
        service: serviceLine,
        message: formData.message || '',
        subject: `New Contact Form Submission from ${formData.name}`,
        from_name: 'Arizona Window Washing Pros Website',
      })

      if (result.success) {
        setFormStatus('success')
        if (typeof window !== 'undefined') {
          if ((window as any).gtag) {
            ;(window as any).gtag('event', 'form_submit', {
              event_category: 'conversion',
              event_label: 'contact_form_success',
            })
          }
          if ((window as any).fbq) {
            ;(window as any).fbq('track', 'Lead')
          }
        }
        setTimeout(() => {
          router.push('/thank-you')
        }, 1500)
      } else {
        console.error('Form submission failed:', result.message || result)
        const detail =
          typeof result.message === 'string'
            ? result.message.replace(/[<>]/g, '').slice(0, 220)
            : null
        setSubmitErrorDetail(detail)
        setFormStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitErrorDetail(null)
      setFormStatus('error')
    }
  }

  const outerClass =
    compact
      ? 'bg-white rounded-2xl shadow-2xl border-2 border-gray-200 pb-28 md:pb-6 overflow-hidden'
      : 'card pb-28 md:pb-10 overflow-hidden'

  const innerClass = compact
    ? 'p-6 flex flex-col gap-6 md:flex-row md:items-stretch md:gap-6'
    : 'p-6 sm:p-8 md:p-10 flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10'

  return (
    <div className={outerClass}>
      <div className={innerClass}>
        {formStatus === 'success' ? (
          <div
            className={
              compact
                ? 'text-center py-6 w-full'
                : 'text-center py-8 lg:col-span-2 w-full max-w-lg mx-auto'
            }
          >
            <div className={compact ? 'text-green-600 text-4xl mb-3' : 'text-green-600 text-5xl mb-4'}>✓</div>
            <h3 className={compact ? 'text-xl font-bold text-gray-900 mb-2' : 'text-2xl font-bold text-gray-900 mb-2'}>
              Thank You!
            </h3>
            <p className={compact ? 'text-gray-700 mb-4 text-sm' : 'text-gray-700'}>We&apos;ll contact you shortly.</p>
            {compact && (
              <a
                href={`tel:${BUSINESS_INFO.phoneFormatted}`}
                onClick={() => trackCallClick('contact_form_success_call')}
                className="inline-block bg-blue-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                Or Call Now: {BUSINESS_INFO.phone}
              </a>
            )}
          </div>
        ) : (
          <>
            <TrustPanel compact={compact} />

            <div className="min-w-0 flex-1">
              {showTitle && (
                <div className="text-center lg:text-left mb-6">
                  <h2
                    className={
                      compact
                        ? 'text-xl font-bold text-gray-900 mb-2'
                        : 'text-3xl md:text-4xl font-bold text-gray-900 mb-3'
                    }
                  >
                    Get Your Free Quote
                  </h2>
                  {!compact && (
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-600 lg:mx-0 mx-auto rounded-full" />
                  )}
                </div>
              )}

              <form onSubmit={handleSubmit} className={compact ? 'space-y-3' : 'space-y-4'}>
                <div>
                  <label
                    htmlFor="name"
                    className={
                      compact
                        ? 'block text-xs font-semibold text-gray-700 mb-1'
                        : 'block text-sm font-semibold text-gray-700 mb-1'
                    }
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={
                      compact
                        ? 'w-full px-3 py-3 text-base border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                        : 'w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition'
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className={
                      compact
                        ? 'block text-xs font-semibold text-gray-700 mb-1'
                        : 'block text-sm font-semibold text-gray-700 mb-1'
                    }
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    autoComplete="tel"
                    inputMode="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={
                      compact
                        ? 'w-full px-3 py-3 text-base border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                        : 'w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition'
                    }
                    placeholder="(480) 555-1234"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className={
                      compact
                        ? 'block text-xs font-semibold text-gray-700 mb-1'
                        : 'block text-sm font-semibold text-gray-700 mb-1'
                    }
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    inputMode="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={
                      compact
                        ? 'w-full px-3 py-3 text-base border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                        : 'w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition'
                    }
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="city"
                    className={
                      compact
                        ? 'block text-xs font-semibold text-gray-700 mb-1'
                        : 'block text-sm font-semibold text-gray-700 mb-1'
                    }
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    autoComplete="address-level2"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Enter your city"
                    className={
                      compact
                        ? 'w-full px-3 py-3 text-base border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                        : 'w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition'
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={
                      compact
                        ? 'block text-xs font-semibold text-gray-700 mb-1'
                        : 'block text-sm font-semibold text-gray-700 mb-1'
                    }
                  >
                    Message About Service Type
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={compact ? 2 : 4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={
                      compact
                        ? 'w-full px-3 py-3 text-base border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                        : 'w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition'
                    }
                    placeholder="Please describe the service you need (e.g., Exterior window cleaning, Interior cleaning, Screen cleaning, etc.)"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className={
                    compact
                      ? 'w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm'
                      : 'w-full btn-primary py-4 text-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed'
                  }
                >
                  {formStatus === 'submitting' ? 'Submitting...' : 'Get Free Quote'}
                </button>

                {formStatus === 'error' && (
                  <div className="text-sm text-center space-y-1">
                    <p className="text-red-600 font-medium">
                      Something went wrong. Please call us at {BUSINESS_INFO.phone}
                    </p>
                    {submitErrorDetail && (
                      <p className="text-gray-600 text-xs break-words">{submitErrorDetail}</p>
                    )}
                  </div>
                )}
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
