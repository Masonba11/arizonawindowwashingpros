interface BeforeAfterSectionProps {
  city?: string
  service?: string
}

export default function BeforeAfterSection({ city, service }: BeforeAfterSectionProps) {
  const title = city
    ? `Before & After: ${city} Window Cleaning`
    : service
    ? `Before & After: ${service}`
    : 'Before & After Results'

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See the dramatic difference our professional window cleaning makes
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid grid-cols-2 gap-0">
                <div className="bg-gray-200 aspect-square flex items-center justify-center p-4">
                  <div className="text-center">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Before</p>
                    <p className="text-xs text-gray-500">Image {index + 1}</p>
                  </div>
                </div>
                <div className="bg-gray-100 aspect-square flex items-center justify-center p-4">
                  <div className="text-center">
                    <p className="text-sm font-semibold text-gray-700 mb-2">After</p>
                    <p className="text-xs text-gray-500">Image {index + 1}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

