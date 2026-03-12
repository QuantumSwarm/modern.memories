/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allow all images for now (we'll tighten later)
      },
    ],
  },
};

export default nextConfig;