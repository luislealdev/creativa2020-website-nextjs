import { AppProps } from 'next/app';
import '../styles/globals.css';
import Script from 'next/script'

function App({ Component, pageProps }: AppProps) {
    return (
        <>

<Script async src="https://www.googletagmanager.com/gtag/js?id=G-58HJQEB4R7"></Script>
<Script
      id='google-analytics'
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
            gtag('config', 'G-58HJQEB4R7'), {
            page_path: window.location.pathname,
          });
        `,
        }}
    />
            <Component {...pageProps} />
        </>

    )
}

export default App;