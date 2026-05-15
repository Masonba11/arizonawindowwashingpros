'use client'

import { motion } from 'framer-motion'
import { trackCallClick } from '@/lib/callTracking'
import { BUSINESS_INFO } from '@/lib/constants'

export default function PremiumStickyBar({
  callEventLabel,
}: {
  callEventLabel: string
}) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] border-t border-slate-800/80 bg-slate-950/95 backdrop-blur-lg px-3 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden shadow-[0_-8px_32px_rgba(0,0,0,0.35)]">
      <div className="mx-auto flex max-w-lg gap-3">
        <motion.a
          href="#premium-quote-top"
          whileTap={{ scale: 0.97 }}
          className="flex-1 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-blue-900/30"
        >
          Get free quote
        </motion.a>
        <motion.a
          href={`tel:${BUSINESS_INFO.phoneFormatted}`}
          onClick={() => trackCallClick(`${callEventLabel}_sticky`)}
          whileTap={{ scale: 0.97 }}
          className="flex-1 rounded-xl border-2 border-white/90 bg-white py-3.5 text-center text-sm font-bold text-slate-900"
        >
          Call now
        </motion.a>
      </div>
    </div>
  )
}
