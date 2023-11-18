/** @type {import('next').NextConfig} */
module = {
  experimental: {
    typedRoutes: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pokeapi.co',
      },
    ],
  },
};

module.exports = nextConfig;
