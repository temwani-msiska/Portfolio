import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
  
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.temwanimsiska.dev",
        port: "",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
