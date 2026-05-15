export type LocationWhyChooseUsProps = {
  /** Unique id prefix for heading/video a11y, e.g. mesa-window-washing */
  idPrefix: string
  /** Full H2 text, e.g. "Why Choose Us for Mesa window cleaning?" */
  sectionHeading: string
  /** Possessive form with apostrophe, e.g. "Mesa's" or "East Valley's" */
  cityPossessive: string
  /** Short city label for "your {city} home" and similar, e.g. "Mesa", "East Valley" */
  cityName: string
  /** Phrase after "experience ", e.g. "working in Mesa" or "working throughout East Valley" */
  experiencePhrase: string
  /** Text after "Whether you're in " and before ", we treat" */
  neighborhoodsSnippet: string
}

const checkPath =
  'M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'

export default function LocationWhyChooseUs({
  idPrefix,
  sectionHeading,
  cityPossessive,
  cityName,
  experiencePhrase,
  neighborhoodsSnippet,
}: LocationWhyChooseUsProps) {
  const headingId = `${idPrefix}-what-we-do-heading`

  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-6xl">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-start">
          <div>
            <h2 className="text-2xl font-bold mb-4">{sectionHeading}</h2>
            <p className="text-gray-700 mb-4">
              {cityPossessive} unique climate presents specific challenges for window cleaning, from
              intense sun that creates hard water spots to dust storms that leave windows dirty. Our
              team has extensive experience {experiencePhrase} and knows exactly how to handle these
              conditions.
            </p>
            <p className="text-gray-700 mb-4">
              We use professional-grade equipment and eco-friendly cleaning solutions to ensure your{' '}
              {cityName} home&apos;s windows are spotless and streak-free. Our local team understands{' '}
              {cityName} neighborhoods and works efficiently to minimize disruption to your day.
            </p>
            <p className="text-gray-700 mb-4">
              Between monsoon season, caliche dust, and irrigation overspray, {cityName} glass often
              needs more than a quick wipe. We clean frames, tracks, and screens where grime collects
              so your windows stay clearer longer, not just the day we leave.
            </p>
            <p className="text-gray-700 mb-4">
              Whether you&apos;re in {neighborhoodsSnippet}, we treat your property with care: shoe
              covers inside, careful ladder placement outside, and respect for landscaping and pool
              areas.
            </p>
            <p className="text-gray-700 mb-6">
              From single-story patio homes to two-story builds with hard-to-reach glass, we tailor
              each visit to your home. Ask about exterior-only, interior and exterior packages,
              screen cleaning, and hard water spot treatment. We&apos;ll recommend what actually
              makes sense for your {cityName} windows.
            </p>
            <ul className="space-y-3" role="list">
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden
                >
                  <path fillRule="evenodd" d={checkPath} clipRule="evenodd" />
                </svg>
                <span className="text-gray-800 font-medium">
                  Licensed business & insured technicians
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden
                >
                  <path fillRule="evenodd" d={checkPath} clipRule="evenodd" />
                </svg>
                <span className="text-gray-800 font-medium">Free Guarantee</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden
                >
                  <path fillRule="evenodd" d={checkPath} clipRule="evenodd" />
                </svg>
                <span className="text-gray-800 font-medium inline-flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-0.5" aria-hidden>
                    {[0, 1, 2, 3, 4].map((i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-amber-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </span>
                  <span>5-star Google reviews</span>
                  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" aria-hidden>
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden
                >
                  <path fillRule="evenodd" d={checkPath} clipRule="evenodd" />
                </svg>
                <span className="text-gray-800 font-medium">Thousands of homes serviced</span>
              </li>
            </ul>
          </div>
          <figure className="m-0 w-full max-w-sm mx-auto md:max-w-none md:mx-0">
            <h3
              id={headingId}
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-3"
            >
              What We Do For Your Windows
            </h3>
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 leading-[0]">
              <video
                className="block w-full h-auto align-top"
                controls
                muted
                playsInline
                preload="metadata"
                aria-labelledby={headingId}
              >
                <source src="/exterior-window-cleaning.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </figure>
        </div>
      </div>
    </section>
  )
}
