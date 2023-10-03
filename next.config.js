/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    APP_ENV: process.env.APP_ENV,
  },
}

module.exports = nextConfig
