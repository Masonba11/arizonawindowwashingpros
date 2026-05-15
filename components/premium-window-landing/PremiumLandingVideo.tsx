'use client'

type PremiumLandingVideoProps = {
  src: string
  title: string
  description?: string
  variant?: 'dark' | 'light'
  className?: string
}

/**
 * Self-hosted landing clip: plays inline on iOS, metadata preload, user-controlled playback.
 */
export default function PremiumLandingVideo({
  src,
  title,
  description,
  variant = 'dark',
  className = '',
}: PremiumLandingVideoProps) {
  const shell =
    variant === 'dark'
      ? 'border border-white/10 bg-slate-950/40 shadow-2xl shadow-black/30'
      : 'border border-slate-200/90 bg-white shadow-xl shadow-slate-300/35'

  const cap =
    variant === 'dark'
      ? 'border-t border-white/10 bg-slate-950/60'
      : 'border-t border-slate-100 bg-slate-50/95'

  const titleCls = variant === 'dark' ? 'text-white' : 'text-slate-900'
  const descCls = variant === 'dark' ? 'text-slate-400' : 'text-slate-600'

  return (
    <div className={`overflow-hidden rounded-2xl ${shell} ${className}`}>
      <div className="mx-auto w-full max-w-[260px] bg-black sm:max-w-[300px] md:max-w-[320px] lg:max-w-[340px] aspect-[3/4]">
        <video
          className="h-full w-full object-cover"
          controls
          playsInline
          preload="metadata"
          aria-label={title}
        >
        <source src={src} type="video/mp4" />
        Your browser does not support embedded video.
        </video>
      </div>
      {(title || description) && (
        <div className={`px-4 py-3 sm:px-5 ${cap}`}>
          <p className={`text-sm font-bold ${titleCls}`}>{title}</p>
          {description ? <p className={`mt-1 text-xs leading-relaxed ${descCls}`}>{description}</p> : null}
        </div>
      )}
    </div>
  )
}
