/** @type {import('next').NextConfig} */

const withNextIntl = require('next-intl/plugin')('./src/i18n.ts')

const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.anacouto.com.br',
        port: '',
        pathname: '/**'
      }
    ]
  }
}

module.exports = withNextIntl(nextConfig)
