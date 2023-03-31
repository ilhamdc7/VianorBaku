import React,{useState,useEffect} from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import ServicesBody from '@/components/ServicesBody/ServicesBody'
import { baseUrl } from '../api/api'
import MobileHeader from '@/components/MobileHeader/MobileHeader'



const index = () => {

  const [services, setServices] = useState([])

  const getServices = async() => {
    baseUrl.get(`/services`)
    .then(res => setServices(res.data))
  }

  useEffect(() => {
    getServices()
  },[])


  return (
    <>
    <MobileHeader/>
    <Header/>
    <ServicesBody services={services}/>
    <Footer/>
    </>

  )
}

export default index