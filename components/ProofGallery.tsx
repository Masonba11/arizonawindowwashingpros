import Image from 'next/image'

interface ProofGalleryProps {
  images: Array<{ src: string; alt: string; caption?: string }>
}

export default function ProofGallery({ images }: ProofGalleryProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <div key={index} className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg border border-gray-200 group">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            loading="lazy"
          />
          {image.caption && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-white text-sm font-semibold">{image.caption}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}


