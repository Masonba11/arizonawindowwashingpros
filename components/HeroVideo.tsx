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

