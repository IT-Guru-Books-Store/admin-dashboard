/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "cdn.pixabay.com"], // Replace with the domain of the image
  },
  eslint: {
    // This allows production builds to successfully complete even if your project has ESLint errors.
    // need to remove..
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
