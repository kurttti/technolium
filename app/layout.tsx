import { Metadata } from 'next'
import Script from 'next/script'
import '@/styles/globals.css'

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
        <Script
          id="mail-ru-counter"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var _tmr = window._tmr || (window._tmr = []);
              _tmr.push({id: "3605288", type: "pageView", start: (new Date()).getTime()});
              (function (d, w, id) {
                if (d.getElementById(id)) return;
                var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
                ts.src = "https://top-fwz1.mail.ru/js/code.js";
                var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
                if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
              })(document, window, "tmr-code");
            `,
          }}
        />
        <noscript>
          <div>
            <img src="https://top-fwz1.mail.ru/counter?id=3605288;js=na" style={{position: 'absolute', left: '-9999px'}} alt="Top.Mail.Ru" />
          </div>
        </noscript>
      </head>
      <body suppressHydrationWarning={true} className="bg-white">
        {children}
        <Script
          id="b24-integration"
          strategy="afterInteractive"
          src="https://cdn-ru.bitrix24.ru/b24593293/crm/site_button/loader_2_87vvqx.js"
        />
      </body>
    </html>
  )
}