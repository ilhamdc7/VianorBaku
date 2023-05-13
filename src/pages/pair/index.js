import React from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import MPackage from '@/components/MPackage/MPackage'
import MobileHeader from '@/components/MobileHeader/MobileHeader'
import Head from 'next/head'
const index = () => {
  return (
    <>
    <Head>
        <title>Vianor təkər mərkəzi</title>
        <link rel="shortcut icon" href="/vianorLogo.jpg" />

      </Head>
    <MobileHeader/>
    <Header/>
    <MPackage/>
    <Footer/>
    </>
  )
}

export default index