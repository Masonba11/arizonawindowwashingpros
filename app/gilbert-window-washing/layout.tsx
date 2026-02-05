import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gilbert Window Washing | $100 Off | Arizona Window Washing Pros',
}

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

