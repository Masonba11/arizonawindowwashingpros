interface GallerySectionProps {
  city?: string
  service?: string
}

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
          {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center">
              <p className="text-gray-500 text-sm">Gallery image {index + 1}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

