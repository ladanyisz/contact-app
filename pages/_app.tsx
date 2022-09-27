import '@popperjs/core'
import 'bootstrap/dist/css/bootstrap.css'
import ContactsProvider from '../context/ContactsProvider'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <ContactsProvider><Component {...pageProps} /></ContactsProvider>
}

export default MyApp
