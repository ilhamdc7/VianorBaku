import React from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Success from '@/components/Success/Success'
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
    <Success/>
    <Footer/>
    </>
  )
}

export default index