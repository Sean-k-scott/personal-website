import React from 'react'
import '../styles/globals.css'
import Layout from './components/layout'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Layout>
  )
}
export default MyApp
