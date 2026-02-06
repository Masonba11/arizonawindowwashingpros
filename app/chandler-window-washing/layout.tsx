import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chandler Window Washing | $100 Off | Arizona Window Washing Pros',
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
