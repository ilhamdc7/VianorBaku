import React from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Basket from '@/components/Basket/Basket'
import { useSelector } from 'react-redux'
import MobileHeader from '@/components/MobileHeader/MobileHeader'
import Head from 'next/head'
const index = () => {

  const {cart} = useSelector(state => state.cart)



  return (
    <>
    <Head>
        <title>Vianor təkər mərkəzi</title>
        <link rel="shortcut icon" href="/vianorLogo.jpg" />

      </Head>
    <MobileHeader/>
    <Header/>
    <Basket cart={cart}/>
    <Footer/>
    </>
  )
}

export default index