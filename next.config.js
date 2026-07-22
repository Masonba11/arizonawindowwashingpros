/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/commercial-window-cleaning',
        destination: '/commercial-window-cleaning-arizona',
        permanent: true,
      },
      // Former East Valley pages → White Mountains hub
      {
        source:
          '/:prefix(exterior-window-cleaning|interior-window-cleaning|screen-cleaning|track-sill-cleaning)-:city(gilbert|mesa|chandler|scottsdale|tempe|queen-creek|san-tan-valley|east-valley)',
        destination: '/white-mountains-window-cleaning',
        permanent: true,
      },
      {
        source:
          '/:city(gilbert|mesa|chandler|scottsdale|tempe|queen-creek|san-tan-valley|east-valley)-window-:kind(washing|cleaning)',
        destination: '/white-mountains-window-cleaning',
        permanent: true,
      },
      {
        source: '/east-valley-contact-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/east-valley-reviews',
        destination: '/reviews',
        permanent: true,
      },
      {
        source: '/locations/:slug(mesa-window-washing|gilbert-window-washing|gilbert-window-cleaning|window-washing-queen-creek|chandler-window-washing|scottsdale-window-washing|tempe-window-washing|san-tan-valley-window-washing|east-valley-window-washing)',
        destination: '/white-mountains-window-cleaning',
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
  },
  // Enable compression
  compress: true,
  // Optimize production builds
  swcMinify: true,
}

module.exports = nextConfig










