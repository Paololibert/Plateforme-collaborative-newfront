import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://plateforme-collaborative-backend.vercel.app/:path*',
      },
    ];
  },
};

export default nextConfig;
