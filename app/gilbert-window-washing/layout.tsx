import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gilbert window cleaning | $100 Off | Arizona window cleaning Pros',
}

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  )
}
