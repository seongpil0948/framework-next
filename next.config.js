/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    serverActions: true,
    // typedRoutes: true
  },
  cleanDistDir: true,
  async rewrites() {
    return [
      {
        source:'/dsi/api/:path*',
        destination: 'http://192.168.0.113:29090/dsi/api/:path*'
      },
    ]    
  }
}

module.exports = nextConfig
