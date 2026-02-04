import Image from 'next/image'

interface BeforeAfterSectionProps {
  city?: string
  service?: string
}

export default function BeforeAfterSection({ city, service }: BeforeAfterSectionProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="section-title">Before & After Results</h2>
          <p className="section-subtitle">
            See the transformation our professional window cleaning delivers
          </p>
        </div>

        {/* Main Before/After Images - Optimized & Lazy Loaded */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-xl border-2 border-gray-200">
            <picture>
              <source srcSet="/before-after-1.webp" type="image/webp" />
              <Image
                src="/before-after-1-opt.jpg"
                alt="Window cleaning before and after transformation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
                quality={70}
              />
            </picture>
          </div>
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-xl border-2 border-gray-200">
            <picture>
              <source srcSet="/before-after-2.webp" type="image/webp" />
              <Image
                src="/before-after-2-opt.jpg"
                alt="Professional window cleaning results"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
                quality={70}
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  )
}

