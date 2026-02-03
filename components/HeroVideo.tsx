'use client'

interface HeroVideoProps {
  title: string
  subtitle?: string
  children?: React.ReactNode
}

export default function HeroVideo({ title, subtitle, children }: HeroVideoProps) {
  return (
    <section className="relative section-padding overflow-hidden min-h-[400px] md:min-h-[500px] flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Overlay for better text readability - darker */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center w-full">
        {/* Standout Offer Badge */}
        <div className="mb-6 inline-block">
          <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-gray-900 px-6 py-3 md:px-8 md:py-4 rounded-full shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-center gap-2">
              <span className="text-2xl md:text-3xl font-extrabold">$50 OFF</span>
              <span className="text-sm md:text-base font-bold">First Time Service</span>
            </div>
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 drop-shadow-2xl leading-tight" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl font-semibold text-white mb-10 drop-shadow-lg max-w-3xl mx-auto leading-relaxed" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}

