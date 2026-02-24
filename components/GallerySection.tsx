interface GallerySectionProps {
  city?: string
  service?: string
}

const galleryImages = [
  '/gallery-optimized/IMG_0509.webp',
  '/gallery-optimized/IMG_0512.webp',
  '/gallery-optimized/IMG_0533.webp',
  '/gallery-optimized/IMG_0580.webp',
  '/gallery-optimized/IMG_0582.webp',
  '/gallery-optimized/IMG_0598.webp',
]

export default function GallerySection({ city, service }: GallerySectionProps) {
  const title = city 
    ? `Our Work in ${city}`
    : service
    ? `Our ${service} Work`
    : 'Our Work Gallery'

  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See examples of our professional window cleaning results
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((src, index) => (
            <div key={index} className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
              <img
                src={src}
                alt={`Window cleaning example ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

