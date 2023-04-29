import React from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import WheelCalculator from '@/components/WheelCalculator/WheelCalculator'
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
    <WheelCalculator/>
    <Footer/>
    </>
  )
}

export default index