let userConfig = undefined
try {
  userConfig = await import('./v0-user-next.config')
} catch (e) {
  // ignore error
}

const allowedOrigins = {
  development: ['http://localhost:3000'],
  production: [
    'https://technolium.ru',
    'https://cdn-ru.bitrix24.ru',
    'https://mc.yandex.ru'
  ]
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com']
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*'
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS'
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'X-Requested-With, Content-Type, Authorization'
          }
        ]
      },
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*'
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS'
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'X-Requested-With, Content-Type, Authorization'
          }
        ]
      },
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.bitrix24.ru https://mc.yandex.ru https://top-fwz1.mail.ru https://yastatic.net",
              "style-src 'self' 'unsafe-inline' https://*.bitrix24.ru",
              "img-src 'self' data: blob: https: http://localhost:3000 https://*.bitrix24.ru https://mc.yandex.ru",
              "connect-src 'self' https://*.bitrix24.ru wss://*.bitrix24.ru https://mc.yandex.ru https://top-fwz1.mail.ru ws://localhost:3000",
              "frame-src 'self' https://*.bitrix24.ru https://mc.yandex.ru",
              "media-src 'self' https://*.bitrix24.ru",
              "worker-src 'self' blob:",
              "font-src 'self' https://*.bitrix24.ru data:",
              "manifest-src 'self'"
            ].join('; ')
          }
        ]
      }
    ]
  }
}

mergeConfig(nextConfig, userConfig)

function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) {
    return
  }

  for (const key in userConfig) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...userConfig[key],
      }
    } else {
      nextConfig[key] = userConfig[key]
    }
  }
}

export default nextConfig
