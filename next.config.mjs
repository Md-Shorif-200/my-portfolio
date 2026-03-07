/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['react-icons'],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co", 
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
           pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
