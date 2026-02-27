'use client'

export default function GetFreeQuoteSticker() {
  const handleGetQuote = () => {
    const contactForm = document.getElementById('contact-form')
    if (contactForm) {
      const yOffset = -20 // Small offset from top
      const y = contactForm.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <div className="fixed bottom-6 right-32 md:bottom-4 md:right-40 z-40 animate-pulse hover:animate-none">
      {/* Positioned next to Call Now button on the right with better mobile spacing */}
      <button
        onClick={handleGetQuote}
        className="flex items-center gap-2 bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 px-3 py-2 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 font-bold text-sm md:text-base"
        aria-label="Get Free Quote"
      >
        <svg
          className="w-4 h-4 md:w-5 md:h-5"
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

