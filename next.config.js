/** @type {import('next').NextConfig} */

const withNextIntl = require('next-intl/plugin')('./src/i18n.ts')

const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'www.anacouto.com.br',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'www.anacouto.com.br',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'http',
        hostname: 'www.legacy.anacouto.com.br',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'www.legacy.anacouto.com.br',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'http',
        hostname: 'legacy.anacouto.com.br',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'legacy.anacouto.com.br',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'http',
        hostname: 'www.web.anacouto.com.br',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'www.web.anacouto.com.br',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'http',
        hostname: 'web.anacouto.com.br',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'web.anacouto.com.br',
        port: '',
        pathname: '/**'
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/site',
        destination: 'https://site.anacouto.com.br/',
        permanent: true
      },
      {
        source: '/app',
        destination: 'https://laje-ac.com.br/app/',
        permanent: true
      }
    ]
  }
}

module.exports = withNextIntl(nextConfig)
