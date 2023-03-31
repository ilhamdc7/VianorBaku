import React,{useState, useEffect} from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import NewsBody from '@/components/NewsBody/NewsBody'
import { baseUrl } from '../api/api'
import MobileHeader from '@/components/MobileHeader/MobileHeader'

const news = () => {


  const [news, setNews] = useState([])

  const getNews = async() => {
    await baseUrl.get(`/news`)
    .then(res => setNews(res.data.results))
  }



  useEffect(() => {
    getNews()
  },[])



  return (
    <>
    <MobileHeader/>
    <Header/>
    <NewsBody post={news}/>
    <Footer/>
    </>
  )
}

export default news