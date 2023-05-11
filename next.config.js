/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/tr",
      },
      {
        source: "/evler",
        destination: "/tr/evler",
      },
      {
        source: "/en/houses",
        destination: "/en/evler",
      },
      {
        source: "/mobilyalar",
        destination: "/tr/mobilyalar",
      },
      {
        source: "/en/furnitures",
        destination: "/en/mobilyalar",
      },
      {
        source: "/evler/:slug*",
        destination: "/tr/evler/:slug*",
      },
      {
        source: "/en/houses/:slug*",
        destination: "/en/evler/:slug*",
      },
      {
        source: "/mobilyalar/:slug*",
        destination: "/tr/mobilyalar/:slug*",
      },
      {
        source: "/en/furnitures/:slug*",
        destination: "/en/mobilyalar/:slug*",
      },
    ];
  },
};

module.exports = nextConfig;
