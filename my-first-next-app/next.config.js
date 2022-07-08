/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}


// https://nextjs.org/docs/api-reference/next.config.js/ignoring-typescript-errors

//module.exports = nextConfig

module.exports = {
  nextConfig,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}