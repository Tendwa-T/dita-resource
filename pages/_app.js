import Layout from '@/components/Layout'
import { UserProvider } from '@/context/UserContext'
import { CookiesProvider, useCookies } from 'react-cookie'

import '@/styles/globals.css'
import 'typeface-roboto'

export default function App({ Component, pageProps }) {
  const [cookies, setCookie, get] = useCookies(["user"])
  console.log(cookies)
  return (
    <CookiesProvider>
      <UserProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </CookiesProvider>
  )
}
