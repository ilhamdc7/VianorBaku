import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Provider } from 'react-redux'
import store from '../store/index'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
