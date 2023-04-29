import React,{useState, useEffect} from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import NewsBody from '@/components/NewsBody/NewsBody'
import { baseUrl } from '../api/api'
import MobileHeader from '@/components/MobileHeader/MobileHeader'
import Head from 'next/head'
const news = () => {


  const [news, setNews] = useState([])
  const [limit, setLimit] = useState(9)

  const getNews = async() => {
    await baseUrl.get(`/news?limit=${limit}`)
    .then(res => setNews(res.data.results))
  }

  useEffect(() => {
    getNews()
  },[limit])



  return (
    <>
    <Head>
        <title>Vianor təkər mərkəzi</title>
      </Head>
    <MobileHeader/>
    <Header/>
    <NewsBody setLimit={setLimit} limit={limit} post={news}/>
    <Footer/>
    </>
  )
}

export default news