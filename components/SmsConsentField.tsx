'use client'

import Link from 'next/link'
import { SMS_CONSENT_DISCLOSURE } from '@/lib/smsConsent'

type SmsConsentVariant = 'default' | 'compact' | 'glass' | 'light'

interface SmsConsentFieldProps {
  id: string
  checked: boolean
  onChange: (checked: boolean) => void
  variant?: SmsConsentVariant
  className?: string
}

const variantStyles: Record<
  SmsConsentVariant,
  { box: string; label: string; link: string }
> = {
  default: {
    box: 'mt-1 w-4 h-4 flex-shrink-0 text-primary-600 border-gray-300 rounded focus:ring-primary-500',
    label: 'text-xs sm:text-sm text-gray-600 leading-relaxed',
    link: 'text-primary-600 hover:text-primary-700 underline font-medium',
  },
  compact: {
    box: 'mt-0.5 w-4 h-4 flex-shrink-0 text-primary-600 border-gray-300 rounded focus:ring-primary-500',
    label: 'text-xs text-gray-600 leading-relaxed',
    link: 'text-primary-600 hover:text-primary-700 underline font-medium',
  },
  light: {
    box: 'mt-1 w-4 h-4 flex-shrink-0 text-blue-600 border-gray-300 rounded focus:ring-blue-500',
    label: 'text-xs text-gray-600 leading-relaxed',
    link: 'text-blue-600 hover:text-blue-700 underline font-medium',
  },
  glass: {
    box: 'mt-1 w-4 h-4 flex-shrink-0 text-blue-400 border-white/40 rounded focus:ring-blue-300 bg-white/10',
    label: 'text-xs text-slate-200 leading-relaxed',
    link: 'text-blue-200 hover:text-white underline font-medium',
  },
}

export default function SmsConsentField({
  id,
  checked,
  onChange,
  variant = 'default',
  className = '',
}: SmsConsentFieldProps) {
  const styles = variantStyles[variant]

  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className={styles.box}
        aria-describedby={`${id}-disclosure`}
      />
      <label htmlFor={id} id={`${id}-disclosure`} className={styles.label}>
        {SMS_CONSENT_DISCLOSURE}{' '}
        <Link href="/privacy-policy" className={styles.link}>
          Privacy Policy
        </Link>
        {' '}and{' '}
        <Link href="/terms-and-conditions" className={styles.link}>
          Terms &amp; Conditions
        </Link>
        .
      </label>
    </div>
  )
}
