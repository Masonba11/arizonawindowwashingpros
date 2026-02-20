'use client'

import { useEffect } from 'react'

interface GoogleReviewsSliderProps {
  compact?: boolean
}

export default function GoogleReviewsSlider({ compact = false }: GoogleReviewsSliderProps) {
  useEffect(() => {
    // Load Elfsight platform script for Google Reviews widget
    const script = document.createElement('script')
    script.src = 'https://elfsightcdn.com/platform.js'
    script.async = true
    document.body.appendChild(script)

    // Add clean styling for widget
    const styleElement = document.createElement('style')
    styleElement.textContent = `
      .elfsight-app-9700e0c9-d756-4605-a68f-cc430320952b {
        width: 100% !important;
      }
      .elfsight-app-9700e0c9-d756-4605-a68f-cc430320952b iframe {
        width: 100% !important;
        border: none !important;
        border-radius: 8px !important;
      }
    `
    document.head.appendChild(styleElement)

    // Intercept "Read more" clicks to expand reviews inline
    const handleReadMoreClicks = () => {
      const widget = document.querySelector('.elfsight-app-9700e0c9-d756-4605-a68f-cc430320952b')
      if (!widget) return

      // Find all links within the widget
      const allLinks = widget.querySelectorAll('a')
      
      allLinks.forEach((link) => {
        const anchor = link as HTMLAnchorElement
        const linkText = anchor.textContent?.toLowerCase().trim() || ''
        
        // Check if link text contains "read more" (case insensitive)
        if (linkText.includes('read more') || linkText.includes('readmore')) {
          // Remove existing listeners to avoid duplicates
          const newAnchor = anchor.cloneNode(true) as HTMLAnchorElement
          anchor.parentNode?.replaceChild(newAnchor, anchor)
          
          newAnchor.addEventListener('click', (e) => {
            e.preventDefault()
            e.stopPropagation()
            
            // Find the review container (parent elements)
            let reviewCard = newAnchor.parentElement
            let reviewText: HTMLElement | null = null
            
            // Search up the DOM tree for review content
            while (reviewCard && !reviewText) {
              // Look for text content elements
              const textElements = reviewCard.querySelectorAll('p, div, span')
              textElements.forEach((el) => {
                const element = el as HTMLElement
                if (element.textContent && element.textContent.length > 100 && !element.querySelector('a')) {
                  reviewText = element
                }
              })
              reviewCard = reviewCard.parentElement
            }
            
            if (reviewText) {
              const textElement = reviewText as HTMLElement
              // Toggle expanded state
              const isExpanded = textElement.classList.contains('expanded')
              
              if (!isExpanded) {
                // Expand: remove truncation, show full text
                textElement.classList.add('expanded')
                textElement.style.maxHeight = 'none'
                textElement.style.overflow = 'visible'
                textElement.style.whiteSpace = 'normal'
                newAnchor.textContent = 'Read less'
              } else {
                // Collapse: restore truncation
                textElement.classList.remove('expanded')
                textElement.style.maxHeight = ''
                textElement.style.overflow = ''
                textElement.style.whiteSpace = ''
                newAnchor.textContent = 'Read more'
              }
            }
          })
        }
      })
    }

    // Wait for widget to load, then set up click handlers
    let checkWidget: NodeJS.Timeout | null = null
    let observer: MutationObserver | null = null
    
    const setupHandlers = () => {
      const widget = document.querySelector('.elfsight-app-9700e0c9-d756-4605-a68f-cc430320952b')
      if (widget) {
        handleReadMoreClicks()
        // Set up a mutation observer to handle dynamically loaded reviews
        if (observer) observer.disconnect()
        observer = new MutationObserver(() => {
          handleReadMoreClicks()
        })
        observer.observe(widget, { childList: true, subtree: true })
        if (checkWidget) clearInterval(checkWidget)
      }
    }
    
    checkWidget = setInterval(setupHandlers, 500)
    
    // Also try immediately
    setTimeout(setupHandlers, 1000)

    // Cleanup
    return () => {
      if (checkWidget) clearInterval(checkWidget)
      if (observer) observer.disconnect()
      if (styleElement && document.head.contains(styleElement)) {
        document.head.removeChild(styleElement)
      }
      const existingScript = document.querySelector('script[src*="elfsightcdn.com"]')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  if (compact) {
    // Clean, simple version
    return (
      <div className="w-full">
        {/* Mobile */}
        <div className="md:hidden">
          <div 
            className="w-full overflow-hidden rounded-lg"
            style={{ 
              height: '500px',
              maxHeight: '500px',
            }}
          >
            <div 
              className="elfsight-app-9700e0c9-d756-4605-a68f-cc430320952b" 
              data-elfsight-app-lazy
            />
          </div>
        </div>
        {/* Desktop */}
        <div className="hidden md:block">
          <div 
            className="w-full overflow-hidden rounded-lg"
            style={{ 
              height: '450px',
              maxHeight: '450px',
            }}
          >
            <div 
              className="elfsight-app-9700e0c9-d756-4605-a68f-cc430320952b" 
              data-elfsight-app-lazy
            />
          </div>
        </div>
      </div>
    )
  }

  // Full version for standalone section
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
            {/* Elfsight Google Reviews Widget */}
            <div 
              className="elfsight-app-9700e0c9-d756-4605-a68f-cc430320952b" 
              data-elfsight-app-lazy
            />
          </div>
        </div>

        {/* Link to view full reviews on Google */}
        <div className="text-center mt-4 pb-2">
          <a
            href="https://share.google/r7PtiPg5MMygIYtZF"
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
