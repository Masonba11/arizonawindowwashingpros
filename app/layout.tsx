import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Layout from '@/components/Layout'
import { BUSINESS_INFO } from '@/lib/constants'
import { generateLocalBusinessSchema } from '@/lib/seo'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: `${BUSINESS_INFO.name} | Professional Window Washing in Mesa, Gilbert, Queen Creek, Chandler, Tempe & Scottsdale`,
    template: `%s | ${BUSINESS_INFO.name}`,
  },
  description: `Professional exterior and interior window cleaning services in Mesa, Gilbert, Queen Creek, and Chandler, Arizona. Expert window cleaning and screen cleaning. Starting at $150.`,
  keywords: ['window washing', 'window cleaning', 'Mesa', 'Gilbert', 'Queen Creek', 'Chandler', 'Arizona'],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  verification: {
    google: 'uy7E4EzIJKxVa3yig5faj1NSEATJWA1WUjVMzGxGWlU',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const localBusinessSchema = generateLocalBusinessSchema()

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          src="https://link.msgsndr.com/js/external-tracking.js"
          data-tracking-id="tk_49e1c696121549738e0bd78b6017394b"
          async
        />
        <script
          src="https://link.msgsndr.com/js/form_embed.js"
          async
        />
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17892178683"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17892178683');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}

