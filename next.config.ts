import type { NextConfig } from "next";

const isGitHub = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  ...(isGitHub && {
    basePath: "/portfolio",
  }),
};

export default nextConfig;