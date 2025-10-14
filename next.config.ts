import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "images.pexels.com", // Add any other domains you use
      "upload.wikimedia.org",
    ],
    // Serve optimized images inline rather than as attachments to improve DevTools preview and avoid download prompts
    contentDispositionType: "inline",
  },
};

export default nextConfig;
