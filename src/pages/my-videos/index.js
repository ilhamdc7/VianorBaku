import React, { useEffect, useState } from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import MyVideos from '@/components/MyVideos/MyVideos'
import { baseUrl } from '../api/api'
import MobileHeader from '@/components/MobileHeader/MobileHeader'

const index = () => {
    const [videos, setVideos] = useState([])

const getVideos = async() => {
    baseUrl.get(`/video_blog`)
    .then(res => setVideos(res.data.results))
}

    console.log(videos)

useEffect(() => {
    getVideos()
},[])

  return (
    <>
    <MobileHeader/>
        <Header/>
        <MyVideos videos={videos}/>
        <Footer/>
    </>
  )
}

export default index