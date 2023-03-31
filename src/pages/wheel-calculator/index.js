import React from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import WheelCalculator from '@/components/WheelCalculator/WheelCalculator'
import MobileHeader from '@/components/MobileHeader/MobileHeader'

const index = () => {
  return (
    <>
    <MobileHeader/>
    <Header/>
    <WheelCalculator/>
    <Footer/>
    </>
  )
}

export default index