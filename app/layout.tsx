import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import './globals.css'
import Layout from '@/components/Layout'
import { BUSINESS_INFO } from '@/lib/constants'
import { generateProfessionalServiceSchema } from '@/lib/schema'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS_INFO.website),
  title: {
    default: `${BUSINESS_INFO.name} | Window Cleaning in Gilbert, Queen Creek, Mesa, Chandler & Tempe`,
    template: `%s | ${BUSINESS_INFO.name}`,
  },
  description: `Professional exterior and interior window cleaning services in Mesa, Gilbert, Queen Creek, and Chandler, Arizona. Expert window cleaning and screen cleaning. Starting at $150.`,
  icons: {
    icon: [{ url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' }],
    apple: '/favicon.ico',
  },
  verification: {
    google: 'uy7E4EzIJKxVa3yig5faj1NSEATJWA1WUjVMzGxGWlU',
  },
}

const thirdPartyLoaderScript = `
(function () {
  function loadThirdPartyScripts() {
    try {
      var proto = window.location.protocol;
      if (proto !== 'http:' && proto !== 'https:') return;
    } catch (e) {
      return;
    }
    if (${JSON.stringify(process.env.NODE_ENV === 'development')}) {
      return;
    }
    var script1 = document.createElement('script');
    script1.src = 'https://link.msgsndr.com/js/external-tracking.js';
    script1.setAttribute('data-tracking-id', 'tk_49e1c696121549738e0bd78b6017394b');
    script1.defer = true;
    document.head.appendChild(script1);

    var script2 = document.createElement('script');
    script2.src = 'https://link.msgsndr.com/js/form_embed.js';
    script2.defer = true;
    document.head.appendChild(script2);

    var script3 = document.createElement('script');
    script3.src = 'https://www.googletagmanager.com/gtag/js?id=AW-17892178683';
    script3.async = true;
    document.head.appendChild(script3);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'AW-17892178683');
    gtag('config', 'AW-17892178683/wcO-COye-vYbEPv109NC', {
      phone_conversion_number: '480-476-3731',
    });

    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '1920089745213611');
    fbq('track', 'PageView');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadThirdPartyScripts);
  } else if ('requestIdleCallback' in window) {
    requestIdleCallback(loadThirdPartyScripts, { timeout: 2000 });
  } else {
    setTimeout(loadThirdPartyScripts, 2000);
  }
})();
`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const professionalServiceSchema = generateProfessionalServiceSchema()

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* App Router: do not use <head> here — it conflicts with the Metadata API and can cause RSC 500s. */}
        <link rel="preload" href="/hero-image-optimized.jpg" as="image" fetchPriority="high" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="preconnect" href="https://elfsightcdn.com" />
        <link rel="dns-prefetch" href="https://elfsightcdn.com" />
        <link rel="dns-prefetch" href="https://link.msgsndr.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
        <Script id="third-party-loader" strategy="lazyOnload" dangerouslySetInnerHTML={{ __html: thirdPartyLoaderScript }} />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1920089745213611&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
