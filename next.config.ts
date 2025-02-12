import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
	protocol: "https",
	hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      },
    ] 
  },
};

export default nextConfig;
