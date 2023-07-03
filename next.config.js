/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "res.cloudinary.com",
      "lh3.googleusercontent.com",
      "next-auth.js.org",
      "avatars.githubusercontent.com",
      "platform-lookaside.fbsbx.com",
    ],
  },
};

module.exports = nextConfig;
