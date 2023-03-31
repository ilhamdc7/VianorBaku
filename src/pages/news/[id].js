import React from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import NewsDetail from '@/components/NewsDetail/NewsDetail'
import { baseUrl } from '../api/api'
import MobileHeader from '@/components/MobileHeader/MobileHeader'

const NewsDetails = ({news}) => {


  return (
    <>  
    <MobileHeader/>
        <Header/>
        <NewsDetail post={news}/>
        <Footer/>
    </>
  )
}

export default NewsDetails


export async function getServerSideProps(context) {
  const {id} = context.query
  const news = await baseUrl.get(`/news_detail/${id}`) 
  return {
    props: {
      news:news.data
    },
  }
}