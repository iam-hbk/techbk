import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  experimental: {
    optimizePackageImports: ["@tabler/icons-react", "gsap"],
  },
};

export default nextConfig;
