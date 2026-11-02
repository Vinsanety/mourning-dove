import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/about", destination: "/story", permanent: false },
      { source: "/products", destination: "/menu", permanent: false },
      { source: "/products/:slug", destination: "/menu", permanent: false },
      { source: "/subscribe", destination: "/#visit", permanent: false },
      { source: "/contact", destination: "/#visit", permanent: false },
    ];
  },
};

export default nextConfig;
