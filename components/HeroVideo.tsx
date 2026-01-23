'use client'

interface HeroVideoProps {
  title: string
  subtitle?: string
  children?: React.ReactNode
}

export default function HeroVideo({ title, subtitle, children }: HeroVideoProps) {
  return (
    <section className="relative section-padding overflow-hidden min-h-[400px] md:min-h-[500px] flex items-center">
      {/* Image Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-image.png"
          alt="Professional window cleaning service"
          className="w-full h-full object-cover"
        />
        {/* Overlay for better text readability - dimmed */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center w-full">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-2xl leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-white/95 mb-10 drop-shadow-lg max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}

