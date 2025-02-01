import React from 'react'
import { Metadata } from 'next'
import Script from 'next/script'
import '@/styles/globals.css'
import { Toaster } from '@/components/ui/toaster'
import Bitrix24Widget from '@/components/widgets/bitrix24-widget'
import { MailRuCounter } from '@/components/widgets/mail-ru-counter-3606079'
import { PageAttribute } from '@/components/layout/page-attribute'

const METRIKA_ID = process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID
const MAILRU_COUNTER_IDS = ["3605288", "3606029"]

export const metadata: Metadata = {
  title: 'Технолиум',
  description: 'Обучаем современным IT-профессиям с нуля. Помогаем освоить востребованные навыки и построить успешную карьеру в IT. Практические занятия, опытные преподаватели, поддержка в обучении.',
  keywords: 'обучение IT, программирование, разработка, онлайн курсы, IT образование, технологии, карьера в IT',
  authors: [{ name: 'Технолиум' }],
  creator: 'Технолиум',
  publisher: 'Технолиум',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/TechnoliumLogo.svg',
    apple: '/TechnoliumLogo.svg',
  },
  openGraph: {
    title: 'Технолиум - Онлайн университет современных IT-профессий',
    description: 'Обучаем современным IT-профессиям с нуля. Помогаем освоить востребованные навыки и построить успешную карьеру в IT.',
    url: 'https://technolium.ru',
    siteName: 'Технолиум',
    images: [
      {
        url: 'https://technolium.ru/TechnoliumLogo.svg',
        width: 800,
        height: 600,
        alt: 'Технолиум логотип',
      },
      {
        url: 'https://technolium.ru/footerlogo.png',
        width: 1200,
        height: 630,
        alt: 'Технолиум - Онлайн университет современных IT-профессий',
      }
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
  },
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
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                ym(${METRIKA_ID}, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:true
                });
              `,
            }}
          />
        )}
        {METRIKA_ID && (
          <noscript>
            <div>
              <img src={`https://mc.yandex.ru/watch/${METRIKA_ID}`} style={{ position: 'absolute', left: '-9999px' }} alt="" />
            </div>
          </noscript>
        )}
      </head>
      <body suppressHydrationWarning={true} className="bg-white">
        <PageAttribute />
        {children}
        <MailRuCounter />
        <Bitrix24Widget />
      </body>
    </html>
  )
}