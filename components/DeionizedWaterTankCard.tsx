export default function DeionizedWaterTankCard() {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-xl overflow-hidden">
      <img
        src="/newstuff/newstuff9.jpg"
        alt="Deionized Water Tank"
        className="w-full max-w-xs mx-auto h-auto rounded-lg object-cover"
      />
      <p className="text-center text-sm font-semibold text-gray-700 mt-2">Deionized Water Tank</p>
      <div className="mt-4 rounded-lg overflow-hidden border border-gray-200 leading-[0] max-w-[min(100%,17.5rem)] mx-auto sm:max-w-xs md:max-w-none md:mx-0">
        <video
          className="block w-full h-auto align-top"
          controls
          muted
          playsInline
          preload="metadata"
          aria-label="Our deionized water tank and filtration setup"
        >
          <source src="/di-tank-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}
