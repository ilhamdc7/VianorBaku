import React, {useState, useEffect} from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import AboutUs from '@/components/AboutUs/AboutUs'
import { baseUrl } from '../api/api'
import MobileHeader from '@/components/MobileHeader/MobileHeader'
import Head from 'next/head'
const index = () => {

const [about, setAbout] = useState()

const getAbout = async() => {
    await baseUrl.get(`about/`)
    .then(res => setAbout(res.data))
}

useEffect(() => {
    getAbout()
},[])


    console.log(about, 'ajsdhsud')

  return (
    <>
    <Head>
        <title>Vianor təkər mərkəzi</title>
      </Head>
    <MobileHeader/>
        <Header/>
        <AboutUs about={about}/>
        <Footer/>
    </>
  )
}

export default index