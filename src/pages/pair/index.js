import React from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import MPackage from '@/components/MPackage/MPackage'
import MobileHeader from '@/components/MobileHeader/MobileHeader'

const index = () => {
  return (
    <>
    <MobileHeader/>
    <Header/>
    <MPackage/>
    <Footer/>
    </>
  )
}

export default index