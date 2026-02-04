'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

interface WorkVideoProps {
  src: string
  poster?: string
  alt: string
}

export default function WorkVideo({ src, poster, alt }: WorkVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [shouldLoad, setShouldLoad] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (shouldLoad) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true)
            observer.disconnect()
          }
        })
      },
      { rootMargin: '100px' }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [shouldLoad])

  const handlePlay = () => {
    setIsPlaying(true)
    if (!shouldLoad) {
      setShouldLoad(true)
    }
  }

  return (
    <div ref={containerRef} className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border-2 border-gray-200 group">
      {!shouldLoad && poster && (
        <div className="absolute inset-0">
          <Image
            src={poster}
            alt={alt}
            fill
            className="object-cover"
            loading="lazy"
            quality={75}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 to-gray-800/30 flex items-center justify-center z-10 cursor-pointer" onClick={handlePlay}>
            <div className="bg-white/90 rounded-full p-6 hover:bg-white transition-colors">
              <svg className="w-16 h-16 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      )}
      {shouldLoad && (
        <>
          {!isPlaying && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-gray-800/50 flex items-center justify-center z-10 cursor-pointer" onClick={handlePlay}>
              <div className="bg-white/90 rounded-full p-6 hover:bg-white transition-colors">
                <svg className="w-16 h-16 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}
          <video
            src={src}
            poster={poster}
            controls={isPlaying}
            autoPlay={isPlaying}
            muted
            playsInline
            loop
            preload="none"
            className="w-full h-full object-cover"
            onPlay={() => setIsPlaying(true)}
          >
            Your browser does not support the video tag.
          </video>
        </>
      )}
    </div>
  )
}

