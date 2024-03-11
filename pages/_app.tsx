import '../global.css';

import type { AppProps } from 'next/app';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />;
      <Script type='text/javascript'>
        {`window.$crisp=[];window.CRISP_WEBSITE_ID="3cc6bbeb-8679-4c21-aa95-0cdf5ce2d3be";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`}
      </Script>
    </>
  );
}
