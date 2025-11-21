import React, { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

const GoogleTag = () => {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];

    function gtag(...args: any[]) {
      window.dataLayer.push(...args);
    }

    gtag('js', new Date());
    gtag('config', 'G-5KJN4TSPL1');

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-5KJN4TSPL1';
    document.head.appendChild(script);
  }, []);

  return null;
};

export default GoogleTag;
