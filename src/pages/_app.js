import '@/styles/global.css'
import { Layout } from '@/components/layout'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-regular-svg-icons'
import { faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons'
config.autoAddCss = false
library.add(faHouseChimney, faSun, faTwitter, faFacebookF)

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
