/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for Cloudflare Pages
  output: 'export',

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Trailing slashes for cleaner URLs
  trailingSlash: true,

  // Transpile workspace packages
  transpilePackages: [
    '@panopticlick/fingerprint-sdk',
    '@panopticlick/valuation-engine',
    '@panopticlick/types',
  ],

  // Strict mode for better development
  reactStrictMode: true,

  // Experimental features
  experimental: {
    // Typed routes disabled - causes issues with dynamic hrefs
    // typedRoutes: true,
  },
};

module.exports = nextConfig;
