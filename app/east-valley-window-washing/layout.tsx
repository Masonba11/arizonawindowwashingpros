import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'East Valley Window Cleaning | 20% Off | Arizona Window Cleaning Pros',
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

