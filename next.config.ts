import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/privacy-policy",
        destination: "/privacy",
        permanent: true
      },
      {
        source: "/terms-of-use",
        destination: "/terms",
        permanent: true
      },
      {
        source: "/legal/privacy",
        destination: "/privacy",
        permanent: true
      },
      {
        source: "/legal/terms",
        destination: "/terms",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
