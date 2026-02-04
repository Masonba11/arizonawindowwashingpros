import Image from 'next/image'

interface BeforeAfterProps {
  city?: string
  service?: string
}

export default function BeforeAfter({ city, service }: BeforeAfterProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="section-title">Before & After Results</h2>
          <p className="section-subtitle">
            See the transformation our professional window cleaning delivers
          </p>
        </div>

        {/* Main Before/After Images - Lazy Loaded */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            { src: '/gallery/IMG_0509.jpg', caption: 'Hard water removal' },
            { src: '/gallery/IMG_0512.jpg', caption: 'Track cleaning' },
            { src: '/gallery/IMG_0533.jpg', caption: 'Exterior wash' },
            { src: '/gallery/IMG_0580.jpg', caption: 'Screen cleaning' },
            { src: '/gallery/IMG_0582.jpg', caption: 'Interior detail' },
            { src: '/gallery/IMG_0598.jpg', caption: 'Frame cleaning' },
            { src: '/gallery/IMG_0632.jpg', caption: 'Sill restoration' },
            { src: '/gallery/IMG_0651.jpg', caption: 'Final polish' },
            { src: '/gallery/IMG_0659.jpg', caption: 'Window detail' },
            { src: '/gallery/IMG_3520.jpg', caption: 'Professional finish' },
          ].filter((item, index) => index < 8).map((item, index) => {
            const webpSrc = item.src.replace('/gallery/', '/gallery-optimized/').replace('.jpg', '.webp')
            return (
            <div key={index} className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg border border-gray-200 group">
              <picture>
                <source srcSet={webpSrc} type="image/webp" />
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading="lazy"
                  quality={70}
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-white text-sm font-semibold">{item.caption}</p>
                </div>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

