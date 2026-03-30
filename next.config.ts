import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.dagatea.in',
          },
        ],
        destination: 'https://dagatea.in/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;