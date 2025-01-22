'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { NavBar } from '@/components/nav-bar'
import { CallWidget } from '@/components/call-widget'
import Script from 'next/script'
import '@/styles/globals.css'

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
      <body>
        <NavBar />
        <main >
          {children}
        </main>
        
        <CallWidget />

        {/* Bitrix24 Integration */}
        <Script
          id="b24-integration"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,u){
                var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);
                var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
              })(window,document,'https://cdn-ru.bitrix24.ru/b24593293/crm/site_button/loader_2_87vvqx.js');
            `
          }}
        />
      </body>
    </html>
  )
}



import './globals.css'