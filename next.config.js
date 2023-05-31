/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.cloudflare.steamstatic.com', 'cdn.akamai.steamstatic.com'],
  },
};

module.exports = nextConfig;
