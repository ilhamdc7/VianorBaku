import React from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Success from '@/components/Success/Success'
import MobileHeader from '@/components/MobileHeader/MobileHeader'



const index = () => {
  return (
    <>
    <MobileHeader/>
    <Header/>
    <Success/>
    <Footer/>
    </>
  )
}

export default index