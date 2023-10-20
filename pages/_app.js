import Layout from '@/components/Layout'
import '@/styles/globals.css'
import 'typeface-roboto'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
