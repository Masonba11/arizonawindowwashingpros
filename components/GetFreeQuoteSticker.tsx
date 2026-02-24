'use client'

export default function GetFreeQuoteSticker() {
  const handleGetQuote = () => {
    // Find the first visible form element
    const formSections = document.querySelectorAll('[id="quote-form"]')
    
    // On mobile, prefer the mobile form, on desktop prefer desktop form
    const isMobile = window.innerWidth < 768
    
    for (let i = 0; i < formSections.length; i++) {
      const section = formSections[i] as HTMLElement
      const computedStyle = window.getComputedStyle(section)
      
      if (computedStyle.display !== 'none' && computedStyle.visibility !== 'hidden') {
        // Check if this is the right form for the current viewport
        const isMobileForm = section.classList.contains('md:hidden')
        const isDesktopForm = section.classList.contains('hidden') && section.classList.contains('md:block')
        
        if ((isMobile && isMobileForm) || (!isMobile && isDesktopForm) || (!isMobileForm && !isDesktopForm)) {
          const yOffset = -20 // Small offset from top
          const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset
          window.scrollTo({ top: y, behavior: 'smooth' })
          return
        }
      }
    }
    
    // Fallback: scroll to first visible form
    for (let i = 0; i < formSections.length; i++) {
      const section = formSections[i] as HTMLElement
      const computedStyle = window.getComputedStyle(section)
      if (computedStyle.display !== 'none' && computedStyle.visibility !== 'hidden') {
        const yOffset = -20
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset
        window.scrollTo({ top: y, behavior: 'smooth' })
        return
      }
    }
  }

  return (
    <div className="fixed bottom-20 left-4 md:bottom-4 md:left-6 z-40 animate-pulse hover:animate-none">
      <button
        onClick={handleGetQuote}
        className="flex items-center gap-3 bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 px-6 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 font-bold text-lg md:text-xl"
        aria-label="Get Free Quote"
      >
        <svg
          className="w-6 h-6 md:w-7 md:h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <span className="font-extrabold">Get Free Quote</span>
      </button>
    </div>
  )
}

