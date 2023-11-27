const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  reactStrictMode: false,
  cleanDistDir: true,
  async rewrites() {
    return [
      {
        source: '/acf/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_PROXY_BASE_URL}/:path*`,
      },
    ]
  },
}

module.exports = withMDX(nextConfig)
