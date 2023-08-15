import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import Head from "next/head";
import Script from "next/script";
import "react-image-gallery/styles/css/image-gallery.css";
import { Provider } from "react-redux";
import { store, persistor } from "../redux/store/store";
import { config } from "@fortawesome/fontawesome-svg-core";
import { PersistGate } from "redux-persist/integration/react";
import ScrollTop from "./scrollTop/scroll";

config.autoAddCss = false;
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-83CDTNYEX7"
        ></Script>
        <Script>
          {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-83CDTNYEX7')`}
        </Script>
        <Script
          dangerouslySetInnerHTML={{
            __html: `
          !function(e,t,n,o,a,c,s){e[o]||(e[o]=function(){(e[o].q=e[o].q||[]).push(arguments)}),e[o].p=a;var r=t.createElement(n),l=t.getElementsByTagName(n)[0];r.async=1,r.src=c,l.parentNode.insertBefore(r,l)}
          (window,document,"script","mp","754520602975881","//cdn.megapanel.io/mp/pixel.js");
          mp("track","PAGE_VIEW");
          `,
          }}
        ></Script>
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  );
}
