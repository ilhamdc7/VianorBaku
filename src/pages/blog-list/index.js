import React, { useEffect, useState } from 'react'
import Header from '@/components/Header/Header' 
import Footer from '@/components/Footer/Footer'
import NewsBody from '@/components/NewsBody/NewsBody'
import { baseUrl } from '../api/api'
import BlogsBody from '@/components/BlogsBody/BlogsBody'
import MobileHeader from '@/components/MobileHeader/MobileHeader'

const index = () => {

const [blogs,setBlogs] = useState([])

const getBlogs = async() => {
 baseUrl.get(`/tyre_blog`)
 .then(res => setBlogs(res.data.results))
}


useEffect(() =>{
  getBlogs()
},[])

  return (
    <>
    <MobileHeader/>
    <Header/>
    <BlogsBody post={blogs}/>
    <Footer/>
    </>
  )
}

export default index