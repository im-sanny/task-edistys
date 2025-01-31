import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['cdn.sanity.io', 'another-domain.com', 'example.com'],
  },
};

export default nextConfig;
