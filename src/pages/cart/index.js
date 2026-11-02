import React from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { useSelector } from 'react-redux'
import MobileHeader from '@/components/MobileHeader/MobileHeader'
import Head from 'next/head'
import dynamic from 'next/dynamic'

// The basket comes from localStorage and its table markup can't be parsed back
// identically from server HTML, so it renders on the client only (as it always did).
const Basket = dynamic(() => import('@/components/Basket/Basket'), { ssr: false })
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