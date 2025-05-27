import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Strata Manager | {process.env.NEXT_PUBLIC_BUILDING_NAME}</title>
        <meta name="description" content="Manage your strata scheme easily" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
