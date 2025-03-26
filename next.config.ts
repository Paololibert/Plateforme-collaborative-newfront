import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://plateforme-collaborative-backend.vercel.app/:path*',//localhost:3001
      },
    ];
  },
};

export default nextConfig;
