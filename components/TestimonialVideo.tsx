'use client'

import { useRef } from 'react'

interface TestimonialVideoProps {
  formId?: string
}

export default function TestimonialVideo({ formId = 'contact-form' }: TestimonialVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleScrollToForm = () => {
    const formElement = document.getElementById(formId)
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Testimonial</h2>
          <p className="text-lg text-gray-700">See what our customers have to say</p>
        </div>
        
        {/* Video */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl mb-8 bg-gray-900">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            controls
            playsInline
            preload="metadata"
          >
            <source src="/riverside-testimonial.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={handleScrollToForm}
            className="bg-blue-600 text-white font-bold text-xl py-4 px-8 rounded-lg hover:bg-blue-700 transition-colors shadow-lg inline-block"
          >
            Get Free Quote
          </button>
        </div>
      </div>
    </section>
  )
}

