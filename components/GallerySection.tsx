import Image from 'next/image'

interface GallerySectionProps {
  city?: string
  service?: string
}

// Pre-defined gallery images with optimized paths
const galleryImages = [
  { src: '/gallery/IMG_0509.jpg', webp: '/gallery-optimized/IMG_0509.webp', caption: 'Hard water removal' },
  { src: '/gallery/IMG_0512.jpg', webp: '/gallery-optimized/IMG_0512.webp', caption: 'Track cleaning' },
  { src: '/gallery/IMG_0533.jpg', webp: '/gallery-optimized/IMG_0533.webp', caption: 'Exterior wash' },
  { src: '/gallery/IMG_0580.jpg', webp: '/gallery-optimized/IMG_0580.webp', caption: 'Screen cleaning' },
  { src: '/gallery/IMG_0582.jpg', webp: '/gallery-optimized/IMG_0582.webp', caption: 'Interior detail' },
  { src: '/gallery/IMG_0598.jpg', webp: '/gallery-optimized/IMG_0598.webp', caption: 'Frame cleaning' },
  { src: '/gallery/IMG_0632.jpg', webp: '/gallery-optimized/IMG_0632.webp', caption: 'Sill restoration' },
  { src: '/gallery/IMG_0651.jpg', webp: '/gallery-optimized/IMG_0651.webp', caption: 'Final polish' },
]

export default function GallerySection({ city, service }: GallerySectionProps) {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Work Gallery</h2>
          <p className="section-subtitle">
            Professional window cleaning results from real jobs
          </p>
        </div>

        {/* Gallery Grid - Optimized & Lazy Loaded */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((item, index) => (
            <div key={index} className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg border border-gray-200 group">
              <picture>
                <source srcSet={item.webp} type="image/webp" />
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
          ))}
        </div>
      </div>
    </section>
  )
}

