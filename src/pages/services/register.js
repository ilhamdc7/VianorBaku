import React from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import ServiceDetails from '@/components/ServiceDetails/ServiceDetails'
import MobileHeader from '@/components/MobileHeader/MobileHeader'

const register = () => {
  return (
    <>
    <MobileHeader/>
        <Header/>
        <ServiceDetails/>
        <Footer/>    
    </>
  )
}

export default register