import React from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Basket from '@/components/Basket/Basket'
import { useSelector } from 'react-redux'
import MobileHeader from '@/components/MobileHeader/MobileHeader'

const index = () => {

  const cart = useSelector(state => state.cart)



  return (
    <>
    <MobileHeader/>
    <Header/>
    <Basket cart={cart}/>
    <Footer/>
    </>
  )
}

export default index