import { Metadata } from 'next'
import { NavBar } from '@/components/nav-bar'
import { CallWidget } from '@/components/call-widget'
import Script from 'next/script'
import '@/styles/globals.css'
import { ScrollManager } from '@/components/scroll-manager'
import { PageTransitionProvider } from '@/contexts/page-transition-context'

const METRIKA_ID = process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID

export const metadata: Metadata = {
  title: 'Технолиум - онлайн университет',
  description: 'Обучение современным IT-профессиям',
  icons: {
    icon: '/TechnoliumLogo.svg',
    apple: '/TechnoliumLogo.svg',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" suppressHydrationWarning={true}>
      <head>
        {METRIKA_ID && (
          <Script
            id="yandex-metrika"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                ym(${METRIKA_ID}, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true
                });
              `,
            }}
          />
        )}
      </head>
      <body suppressHydrationWarning={true} className="bg-white">
        <NavBar />
        <PageTransitionProvider>
          <ScrollManager />
          <main className="overflow-x-hidden">
            {children}
          </main>
        </PageTransitionProvider>
        <Script
          id="b24-integration"
          strategy="afterInteractive"
          src="https://cdn-ru.bitrix24.ru/b24593293/crm/site_button/loader_2_87vvqx.js"
        />
      </body>
    </html>
  )
}