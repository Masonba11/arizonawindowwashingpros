import Image from 'next/image'

export default function PricingImages() {
  return (
    <div className="content-section">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Pricing</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-xl border-2 border-primary-200 overflow-hidden relative aspect-[3/4]">
          <Image 
            src="/exterior-pricing.png" 
            alt="Exterior Window Cleaning Pricing" 
            fill
            className="object-contain"
            loading="lazy"
            quality={75}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="bg-white rounded-xl border-2 border-primary-200 overflow-hidden relative aspect-[3/4]">
          <Image 
            src="/interior-pricing.png" 
            alt="Interior Window Cleaning Pricing" 
            fill
            className="object-contain"
            loading="lazy"
            quality={75}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  )
}




