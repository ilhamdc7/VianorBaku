import React from 'react'
import Checkout from '@/components/Checkout/Checkout'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import MobileHeader from '@/components/MobileHeader/MobileHeader'


const index = () => {
  return (
   <>
   <MobileHeader/>
   <Header/>
   <Checkout/>
   <Footer/>
   </>
  )
}

export default index