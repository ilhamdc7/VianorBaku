import { Html, Head, Main, NextScript } from 'next/document'
import ScrollTop from './scrollTop/scroll';
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" rel="stylesheet"></link>
      </Head>
      <body>

        <Main />
        <NextScript />

      </body>
    </Html>
  )
}
