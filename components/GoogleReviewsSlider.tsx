'use client'

import { useEffect } from 'react'

export default function GoogleReviewsSlider() {
  useEffect(() => {
    // Load Elfsight platform script for Google Reviews widget
    // Replace 'YOUR_WIDGET_ID' with your actual Elfsight widget ID
    const script = document.createElement('script')
    script.src = 'https://static.elfsight.com/platform/platform.js'
    script.async = true
    script.defer = true
    document.body.appendChild(script)

    return () => {
      const existingScript = document.querySelector('script[src*="elfsight"]')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return (
    <section className="py-6 md:py-8 bg-white relative z-10 border-t border-gray-200">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
            What Our Customers Say
          </h2>
          <p className="text-sm md:text-base text-gray-600">Real reviews from Google</p>
        </div>
        
        {/* Google Reviews Widget */}
        <div className="w-full overflow-hidden rounded-lg shadow-lg bg-white">
          <div 
            className="w-full"
            style={{ 
              minHeight: '400px',
            }}
          >
            {/* 
              To display Google Reviews:
              
              Option 1: Use Elfsight (Free)
              1. Go to https://apps.elfsight.com/panel/applications/
              2. Sign up/login (free)
              3. Create a "Google Reviews" widget
              4. Connect your Google Business Profile
              5. Copy the widget ID (looks like: abc123def456)
              6. Replace 'YOUR_WIDGET_ID' below with your widget ID
              
              Option 2: Use Google Reviews Embed Code
              If you have a direct embed code from Google, replace the div below
              with: <div dangerouslySetInnerHTML={{ __html: 'YOUR_EMBED_CODE' }} />
            */}
            <div 
              className="elfsight-app-YOUR_WIDGET_ID"
              data-elfsight-app-lazy
            />
          </div>
        </div>

        {/* Link to view full reviews on Google */}
        <div className="text-center mt-4 pb-2">
          <a
            href="https://share.google.com/D6qJAxatm16v8sPWD"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-semibold transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            View All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  )
}
