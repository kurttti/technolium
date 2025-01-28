'use client'

import Script from 'next/script'

export function MailRuCounter() {
  return (
    <>
      <Script id="mail-ru-counter-3606079" strategy="afterInteractive">
        {`
          var _tmr = window._tmr || (window._tmr = []);
          _tmr.push({id: "3606079", type: "pageView", start: (new Date()).getTime()});
          (function (d, w, id) {
            if (d.getElementById(id)) return;
            var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
            ts.src = "https://top-fwz1.mail.ru/js/code.js";
            var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
            if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
          })(document, window, "tmr-code");
        `}
      </Script>
      <noscript>
        <div>
          <img 
            src="https://top-fwz1.mail.ru/counter?id=3606079;js=na" 
            style={{ position: 'absolute', left: '-9999px' }} 
            alt="Top.Mail.Ru" 
          />
        </div>
      </noscript>
    </>
  )
}
