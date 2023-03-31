import React from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Contact from '@/components/Contact/Contact'
import MobileHeader from '@/components/MobileHeader/MobileHeader'

const index = () => {
  return (
    <>
    <MobileHeader/>
        <Header/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default index