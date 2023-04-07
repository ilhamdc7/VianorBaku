import React, { useEffect, useState } from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import MyVideos from '@/components/MyVideos/MyVideos'
import { baseUrl } from '../api/api'
import MobileHeader from '@/components/MobileHeader/MobileHeader'

const index = () => {
    const [videos, setVideos] = useState([])
    const [limit, setLimit] = useState(9)

const getVideos = async() => {
    baseUrl.get(`/video_blog?limit=${limit}`)
    .then(res => setVideos(res.data.results))
}


useEffect(() => {
    getVideos()
},[limit])

  return (
    <>
    <MobileHeader/>
        <Header/>
        <MyVideos limit={limit} setLimit={setLimit} videos={videos}/>
        <Footer/>
    </>
  )
}

export default index