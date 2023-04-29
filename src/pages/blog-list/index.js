import React, { useEffect, useState } from 'react'
import Header from '@/components/Header/Header' 
import Footer from '@/components/Footer/Footer'
import NewsBody from '@/components/NewsBody/NewsBody'
import { baseUrl } from '../api/api'
import BlogsBody from '@/components/BlogsBody/BlogsBody'
import MobileHeader from '@/components/MobileHeader/MobileHeader'
import Head from 'next/head'

const index = () => {

const [blogs,setBlogs] = useState([])
const [limit, setLimit] = useState(9)

const getBlogs = async() => {
 baseUrl.get(`/tyre_blog?limit=${limit}`)
 .then(res => setBlogs(res.data.results))
}


useEffect(() =>{
  getBlogs()
},[limit])

  return (
    <>
   <Head>
        <title>Vianor təkər mərkəzi</title>
      </Head>
    <MobileHeader/>
    <Header/>
    <BlogsBody setLimit={setLimit} limit={limit} post={blogs}/>
    <Footer/>
    </>
  )
}

export default index