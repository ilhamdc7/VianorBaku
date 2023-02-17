import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import "react-image-gallery/styles/css/image-gallery.css";
import { Provider } from 'react-redux'
import store from '../store/index'
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false; 
export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
