import React from 'react'
import { Metadata } from 'next'
import Script from 'next/script'
import '@/styles/globals.css'
import Bitrix24Widget from '@/components/bitrix24-widget'

const METRIKA_ID = process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID
const MAILRU_COUNTER_IDS = ["3605288", "3606029"]

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
        {MAILRU_COUNTER_IDS.map((counterId) => (
          <React.Fragment key={`mail-ru-wrapper-${counterId}`}>
            <Script
              key={`mail-ru-counter-${counterId}`}
              id={`mail-ru-counter-${counterId}`}
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  var _tmr = window._tmr || (window._tmr = []);
                  _tmr.push({id: "${counterId}", type: "pageView", start: (new Date()).getTime()});
                  (function (d, w, id) {
                    if (d.getElementById(id)) return;
                    var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
                    ts.src = "https://top-fwz1.mail.ru/js/code.js";
                    var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
                    if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
                  })(document, window, "tmr-code-${counterId}");
                `
              }}
            />
            <noscript>
              <div>
                <img src={`https://top-fwz1.mail.ru/counter?id=${counterId};js=na`} style={{ position: 'absolute', left: '-9999px' }} alt="Top.Mail.Ru" />
              </div>
            </noscript>
          </React.Fragment>
        ))}
      </head>
      <body suppressHydrationWarning={true} className="bg-white">
        {children}
        <Bitrix24Widget />
      </body>
    </html>
  )
}