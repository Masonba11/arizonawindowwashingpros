'use client'

import { useState, useRef, useEffect } from 'react'

interface LazyYouTubeProps {
  videoId: string
  title: string
  className?: string
}

export default function LazyYouTube({ videoId, title, className = '' }: LazyYouTubeProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [shouldLoad, setShouldLoad] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!shouldLoad) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLoaded(true)
            observer.disconnect()
          }
        })
      },
      { rootMargin: '50px' }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [shouldLoad])

  const handleClick = () => {
    setShouldLoad(true)
  }

  if (!shouldLoad) {
    return (
      <div
        ref={containerRef}
        className={`relative w-full aspect-video bg-gray-900 rounded-xl overflow-hidden cursor-pointer ${className}`}
        onClick={handleClick}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors shadow-2xl">
              <svg className="w-12 h-12 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-white font-semibold">Click to load video</p>
          </div>
        </div>
      </div>
    )
  }

  if (!isLoaded) {
    return (
      <div ref={containerRef} className={`relative w-full aspect-video bg-gray-900 rounded-xl ${className}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white">Loading video...</div>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative w-full aspect-video ${className}`}>
      <iframe
        className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
        src={`https://www.youtube.com/embed/${videoId}?rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
      />
    </div>
  )
}

