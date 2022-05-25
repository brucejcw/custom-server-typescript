import React from 'react'
import { GlobalStyle } from '@client/styles/GlobalStyle'
import '@client/lib/i18n'
import Layout from '@client/components/Layout'

function MyApp({ Component, pageProps }: any) {
    return (
        <Layout {...pageProps}>
            <GlobalStyle />
            <Component {...pageProps} />
        </Layout>
    )
}
export default MyApp
