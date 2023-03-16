import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import "react-image-gallery/styles/css/image-gallery.css";
import { Provider } from 'react-redux'
import {store, persistor} from '../redux/store/store'
import { config } from "@fortawesome/fontawesome-svg-core";
import { PersistGate } from 'redux-persist/integration/react';
import ScrollTop from './scrollTop/scroll';

config.autoAddCss = false; 
export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}
