import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://www.naminetwork.jp/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
