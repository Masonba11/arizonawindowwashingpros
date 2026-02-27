'use client'

import { useEffect, useRef, useState } from 'react'

interface GallerySectionProps {
  city?: string
  service?: string
}

// Gallery items from newstuff folder
const galleryItems = [
  { type: 'image', src: '/newstuff/newstuff6.jpg', name: 'newstuff6' },
  { type: 'image', src: '/newstuff/newstuff7.jpg', name: 'newstuff7' },
  { type: 'image', src: '/newstuff/newstuff8.jpg', name: 'newstuff8' },
  { type: 'image', src: '/newstuff/newstuff9.jpg', name: 'newstuff9' },
  { type: 'image', src: '/newstuff/newstuff10.jpg', name: 'newstuff10' },
  { type: 'image', src: '/newstuff/newstuff11.jpg', name: 'newstuff11' },
  { type: 'image', src: '/newstuff/newstuff12.jpg', name: 'newstuff12' },
  { type: 'image', src: '/newstuff/newstuff13.jpg', name: 'newstuff13' },
  { type: 'image', src: '/newstuff/newstuff14.jpg', name: 'newstuff14' },
  { type: 'image', src: '/newstuff/newstuff15.jpg', name: 'newstuff15' },
  { type: 'image', src: '/newstuff/newstuff16.jpg', name: 'newstuff16' },
  { type: 'image', src: '/newstuff/newstuff18.jpg', name: 'newstuff18' },
  { type: 'image', src: '/newstuff/newstuff20.jpg', name: 'newstuff20' },
  { type: 'image', src: '/newstuff/newstuff21.jpg', name: 'newstuff21' },
  { type: 'image', src: '/newstuff/newstuff22.jpg', name: 'newstuff22' },
  { type: 'video', src: '/newstuff/newstuff2.mov', name: 'newstuff2' },
  { type: 'video', src: '/newstuff/newstuff3.mov', name: 'newstuff3' },
  { type: 'video', src: '/newstuff/newstuff4.MOV', name: 'newstuff4' },
  { type: 'video', src: '/newstuff/newstuff17.mov', name: 'newstuff17' },
  { type: 'video', src: '/newstuff/newstuff19.MOV', name: 'newstuff19' },
  { type: 'video', src: '/newstuff/newstuff23.mov', name: 'newstuff23' },
  { type: 'video', src: '/newstuff/newstuff24.MOV', name: 'newstuff24' },
  { type: 'video', src: '/newstuff/newstuff25.MOV', name: 'newstuff25' },
  { type: 'video', src: '/newstuff/newstuff26.MOV', name: 'newstuff26' },
  { type: 'video', src: '/newstuff/newstuff27.MOV', name: 'newstuff27' },
  { type: 'video', src: '/newstuff/newstuff28.MOV', name: 'newstuff28' },
  { type: 'video', src: '/newstuff/newstuff29.MOV', name: 'newstuff29' },
  { type: 'video', src: '/newstuff/newstuff30.MOV', name: 'newstuff30' },
]

// Lazy video component that only plays when visible
function LazyVideo({ src, name }: { src: string; name: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setIsVisible(true)
            setHasStarted(true)
            // Start playing when visible
            video.play().catch(() => {
              // Autoplay may be blocked, user will need to click
            })
          } else if (!entry.isIntersecting && hasStarted) {
            // Pause when not visible
            video.pause()
          }
        })
      },
      {
        threshold: 0.5, // Start when 50% visible
      }
    )

    observer.observe(video)

    return () => {
      observer.disconnect()
    }
  }, [hasStarted])

  return (
    <video
      ref={videoRef}
      src={src}
      className="w-full h-full object-cover"
      loop
      muted
      playsInline
      controls
      preload="metadata"
      onClick={(e) => {
        // Allow user to play/pause on click
        const video = e.currentTarget
        if (video.paused) {
          video.play()
        } else {
          video.pause()
        }
      }}
    />
  )
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
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 max-w-xs md:max-w-none mx-auto md:mx-0">
          {galleryItems.map((item, index) => (
            <div key={index} className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt={`Window cleaning example ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              ) : (
                <LazyVideo src={item.src} name={item.name} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
