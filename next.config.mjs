/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: "export",
  // Every page becomes folder/index.html, which any static host serves.
  trailingSlash: true,
};

export default nextConfig;
