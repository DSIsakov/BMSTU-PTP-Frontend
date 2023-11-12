/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dsisakov.pythonanywhere.com",
        port: "",
        pathname: "/api/teams/team/**",
      },
      {
        protocol: "https",
        hostname: "dsisakov.pythonanywhere.com",
        port: "",
        pathname: "/api/tours/tour/**",
      },
      {
        protocol: "https",
        hostname: "dsisakov.pythonanywhere.com",
        port: "",
        pathname: "/api/news/**",
      },
      {
        protocol: "https",
        hostname: "dsisakov.pythonanywhere.com",
        port: "",
        pathname: "/api/users/user/**",
      },
    ],
  },
};

module.exports = nextConfig;
