import React,{useState, useEffect} from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import MarkaBody from '@/components/MarkaBody/MarkaBody'
import { baseUrl } from '../api/api'

const index = () => {

  const [markas, setMarkas] = useState([])



  const getMarka = async() => {
    await baseUrl.get(`/brands`)
    .then(res => setMarkas(res.data))
  }


  useEffect(() => {
    getMarka()
  },[])

  return (
    <>
    
    <Header/>
    <MarkaBody markas={markas}/>
    <Footer/>
    </>
  )
}

export default index