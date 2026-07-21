/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Tools/widgets sometimes request /locations/<pathname>; Gilbert ads use /gilbert-window-cleaning
      {
        source: '/locations/gilbert-window-cleaning',
        destination: '/locations/gilbert-window-washing',
        permanent: false,
      },
      {
        source: '/commercial-window-cleaning',
        destination: '/commercial-window-cleaning-arizona',
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










