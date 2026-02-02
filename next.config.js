/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['www.javier.soy', 'javier.soy', 'images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.javier.soy',
      },
    ],
  },
};

module.exports = nextConfig;
