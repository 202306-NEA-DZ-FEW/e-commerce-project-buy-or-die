require("dotenv").config()
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
  },
}

module.exports = nextConfig
