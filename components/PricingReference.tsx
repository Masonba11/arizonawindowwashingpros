export default function PricingReference() {
  return (
    <div className="bg-gradient-to-br from-primary-50 to-white border-2 border-primary-100 rounded-2xl p-8 mb-8">
      <h3 className="text-2xl font-bold mb-6 text-gray-900">Pricing Reference</h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center pb-4 border-b border-gray-200">
          <div>
            <p className="font-semibold text-gray-900">Exterior Window Cleaning (1-story)</p>
            <p className="text-sm text-gray-600">Most homes: $150-$350</p>
          </div>
          <p className="text-primary-600 font-bold text-lg">From $150</p>
        </div>
        <div className="flex justify-between items-center pb-4 border-b border-gray-200">
          <div>
            <p className="font-semibold text-gray-900">Exterior Window Cleaning (2-story)</p>
            <p className="text-sm text-gray-600">Most homes: $180-$400</p>
          </div>
          <p className="text-primary-600 font-bold text-lg">From $180</p>
        </div>
        <div className="flex justify-between items-center pb-4 border-b border-gray-200">
          <div>
            <p className="font-semibold text-gray-900">Interior Add-On</p>
            <p className="text-sm text-gray-600">Typically: $60-$200</p>
          </div>
          <p className="text-primary-600 font-bold text-lg">+30-40%</p>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold text-gray-900">Screen Cleaning</p>
            <p className="text-sm text-gray-600">Per screen</p>
          </div>
          <p className="text-primary-600 font-bold text-lg">$5-$10</p>
        </div>
      </div>
      <p className="text-sm text-gray-600 mt-6 italic">
        * Pricing is based on number of windows and home height. Free estimates provided before scheduling.
      </p>
    </div>
  )
}






