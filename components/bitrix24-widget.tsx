'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function Bitrix24Widget() {
  useEffect(() => {
    // Initialize Bitrix24 widget after the script is loaded
    const initBitrix24 = () => {
      if ((window as any).BX24) {
        (window as any).BX24.callMethod('crm.lead.list', {}, function(result: any) {
          console.log('Bitrix24 widget initialized');
        });
      }
    };

    // Add event listener for script load
    window.addEventListener('b24:loaded', initBitrix24);

    return () => {
      window.removeEventListener('b24:loaded', initBitrix24);
    };
  }, []);

  const onScriptLoad = () => {
    // Dispatch custom event when script is loaded
    window.dispatchEvent(new Event('b24:loaded'));
  };

  return (
    <>
      <Script
        src="https://cdn-ru.bitrix24.ru/b24/crm/site/form/loader_12.js"
        strategy="lazyOnload"
        onLoad={onScriptLoad}
      />
      <div id="b24-site-button-container" />
    </>
  );
}
