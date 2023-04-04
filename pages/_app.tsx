import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
    <Head>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
    </Head>
      <Component {...pageProps} />

    </div>
  )
}

export default MyApp
