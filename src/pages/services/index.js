import React,{useState,useEffect} from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import ServicesBody from '@/components/ServicesBody/ServicesBody'
import { baseUrl } from '../api/api'



const index = () => {

  const [services, setServices] = useState([])

  const getServices = async() => {
    baseUrl.get(`/services`)
    .then(res => setServices(res.data))
  }

  console.log(services)

  useEffect(() => {
    getServices()
  },[])


  return (
    <>
    <Header/>
    <ServicesBody services={services}/>
    <Footer/>
    </>

  )
}

export default index