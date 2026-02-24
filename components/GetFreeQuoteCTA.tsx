'use client'

export default function GetFreeQuoteCTA() {
  const handleGetQuote = () => {
    const contactForm = document.getElementById('contact-form')
    if (contactForm) {
      const yOffset = -20 // Small offset from top
      const y = contactForm.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <div className="text-center py-8 md:py-12">
      <button
        onClick={handleGetQuote}
        className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 font-bold text-lg md:text-xl"
        aria-label="Get Free Quote"
      >
        <svg
          className="w-6 h-6"
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
        <span>Get Free Quote</span>
      </button>
    </div>
  )
}

