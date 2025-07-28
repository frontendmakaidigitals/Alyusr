import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "images.pexels.com", // Add any other domains you use
      "upload.wikimedia.org",
    ],
  },
};

export default nextConfig;
