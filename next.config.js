const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  reactStrictMode: false,
  cleanDistDir: true,
  async rewrites() {
    return [
      {
        source:'/dsi/api/:path*',
        destination: 'http://192.168.0.113:29090/dsi/api/:path*'
      },
      {
        source:'/acf/api/:path*',
        destination: 'https://acf.abacussw.co.kr/acf/api/:path*'
      },

    ]    
  }
}


 

module.exports = withMDX(nextConfig)
