'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { NavBar } from '@/components/nav-bar'
import { CallWidget } from '@/components/call-widget'
import Script from 'next/script'
import '@/styles/globals.css'

const METRIKA_ID = process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID || 'XXXXXXXX'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const scrollPosition = sessionStorage.getItem('scrollPosition')
      if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition))
        sessionStorage.removeItem('scrollPosition')
      }
    }
  }, [pathname])

  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString())
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => window.removeEventListener('beforeunload', handleBeforeUnload)
  }, [])

  return (
    <html lang="ru">
      <head>
        <Script
          id="yandex-metrika"
          strategy="afterInteractive"
          src="https://mc.yandex.ru/metrika/tag.js"
          onLoad={() => {
            try {
              window.ym(Number(METRIKA_ID), "init", {
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true,
                webvisor: true,
                ecommerce: "dataLayer"
              } as any);
            } catch(err) {
              console.error('Ошибка инициализации Яндекс.Метрики:', err);
            }
          }}
          onError={(e) => {
            console.error('Ошибка загрузки Яндекс.Метрики:', e);
          }}
        />
        <noscript>
          <div>
            <img 
              src={`https://mc.yandex.ru/watch/${METRIKA_ID}`} 
              style={{ position: 'absolute', left: '-9999px' }} 
              alt="" 
            />
          </div>
        </noscript>
      </head>
      <body className="min-h-screen overflow-x-hidden">
        <NavBar />
        {children}
        {pathname !== '/landing' && <CallWidget />}
        <Script
          id="b24-integration"
          strategy="afterInteractive"
          src="https://cdn-ru.bitrix24.ru/b24593293/crm/site_button/loader_2_87vvqx.js"
          onError={(e) => {
            console.error('Ошибка загрузки виджета Bitrix24:', e);
          }}
        />
      </body>
    </html>
  )
}