import Image from 'next/image'

interface GallerySectionProps {
  city?: string
  service?: string
}

// Pre-defined gallery images with optimized paths
const galleryImages = [
  { src: '/gallery/IMG_0509.jpg', webp: '/gallery-optimized/IMG_0509.webp' },
  { src: '/gallery/IMG_0512.jpg', webp: '/gallery-optimized/IMG_0512.webp' },
  { src: '/gallery/IMG_0533.jpg', webp: '/gallery-optimized/IMG_0533.webp' },
  { src: '/gallery/IMG_0580.jpg', webp: '/gallery-optimized/IMG_0580.webp' },
  { src: '/gallery/IMG_0582.jpg', webp: '/gallery-optimized/IMG_0582.webp' },
  { src: '/gallery/IMG_0598.jpg', webp: '/gallery-optimized/IMG_0598.webp' },
  { src: '/gallery/IMG_0632.jpg', webp: '/gallery-optimized/IMG_0632.webp' },
  { src: '/gallery/IMG_0651.jpg', webp: '/gallery-optimized/IMG_0651.webp' },
]

export default function GallerySection({ city, service }: GallerySectionProps) {
  return (
    <section className="py-16 md:py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Work Gallery</h2>
          <p className="text-lg text-gray-700">
            Professional window cleaning results from real jobs
          </p>
        </div>

        {/* Gallery Grid - Optimized & Lazy Loaded */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {galleryImages.map((item, index) => (
            <div key={index} className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg border border-gray-200 group">
              <div className="relative w-full h-full" style={{ transform: 'rotate(90deg)' }}>
                <picture>
                  <source srcSet={item.webp} type="image/webp" />
                  <Image
                    src={item.src}
                    alt="Our window cleaning work"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    loading="lazy"
                    quality={70}
                  />
                </picture>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

