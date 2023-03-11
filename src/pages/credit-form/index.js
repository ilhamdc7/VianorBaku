import React from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import CreditForm from '@/components/CreditForm/CreditForm'
import MobileHeader from '@/components/MobileHeader/MobileHeader'
const index = () => {
  return (
    <>
    <MobileHeader/>
        <Header/>
        <CreditForm/>
        <Footer/>
    </>
  )
}

export default index