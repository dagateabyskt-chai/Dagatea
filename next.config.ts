import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
