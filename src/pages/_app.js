import { Layout } from '@/components/layout'
import { Global } from '@emotion/react'
import { style } from '@/styles/global'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Global styles={style} />
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
