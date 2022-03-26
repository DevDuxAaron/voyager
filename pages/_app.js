import '../style.css'
import { MenuProvider } from '../components/MenuContext/MenuContext'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <MenuProvider>
      <Component {...pageProps} />
    </MenuProvider>
  )
}