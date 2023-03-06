import React from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Basket from '@/components/Basket/Basket'
import { useSelector } from 'react-redux'

const index = () => {

  const cart = useSelector(state => state.cart)

  console.log(cart, 'uasghdyuigsauyd')


  return (
    <>
    <Header/>
    <Basket cart={cart}/>
    <Footer/>
    </>
  )
}

export default index