import '../styles.css'
import '../chat-window.css'
import InstantMessenger from '../components/chat-window'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <InstantMessenger />
      <Component {...pageProps} />
    </>
  )
}