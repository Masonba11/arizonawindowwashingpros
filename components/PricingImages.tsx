export default function PricingImages() {
  return (
    <div className="content-section">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Pricing</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-xl border-2 border-primary-200 overflow-hidden">
          <img 
            src="/exterior-pricing.png" 
            alt="Exterior Window Cleaning Pricing" 
            className="w-full h-auto"
          />
        </div>
        <div className="bg-white rounded-xl border-2 border-primary-200 overflow-hidden">
          <img 
            src="/interior-pricing.png" 
            alt="Interior Window Cleaning Pricing" 
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  )
}

