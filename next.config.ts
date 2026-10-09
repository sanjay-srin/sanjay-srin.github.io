import type { NextConfig } from "next";

// Static export for GitHub Pages (served from the root of <username>.github.io).
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
