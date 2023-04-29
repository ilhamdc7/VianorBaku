import React from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Contact from '@/components/Contact/Contact'
import MobileHeader from '@/components/MobileHeader/MobileHeader'
import Head from 'next/head'
const index = () => {
  return (
    <>
    <Head>
        <title>Vianor təkər mərkəzi</title>
      </Head>
    <MobileHeader/>
        <Header/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default index