/** @type {import('next').NextConfig} */
const nextConfig = {
// Only use if gonna import from outside

//   // images: {
//   //   remotePatterns: [
//   //     {
//   //       protocol: "https",
//   //       hostname: "images.unsplash.com",
//   //     },
//   //   ],
//   // },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
