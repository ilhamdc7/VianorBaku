import React, {useState, useEffect} from "react"
import MobileHeader from "@/components/MobileHeader/MobileHeader"
import Header from "@/components/Header/Header"
import CalcSlider from "@/components/CalcSlider/CalcSlider"
import OurServices from "@/components/OurServices/OurServices"
import Banners from "@/components/Banners/Banners"
import NewProductsSlider from "@/components/NewProductsSlider/NewProductsSlider"
import Campaigns from "@/components/Campaigns/Campaigns"
import OutletSlider from "@/components/OutletSlider/OutletSlider"
import MarkaSlider from "@/components/MarkaSlider/MarkaSlider"
import Footer from "@/components/Footer/Footer"
import { baseUrl } from "./api/api"

export default function Home() {

  const [tires, setTires] = useState([])
  const [slider, setSlider] = useState([])
  const [width, setWidth] = useState([])
  const [height, setHeight] = useState([])
  const [radius, setRadius] = useState([])
  const [brands, setBrands] = useState([])

const getTires = async() => {
  await baseUrl.get(`/tyres?limit=30`)
  .then(res => {
    const {data} = res
    setTires(data?.results)
  })
}


const getSlider = async() => {
  await baseUrl.get(`/slider`)
  .then(res => setSlider(res.data.results))
}


const getWidth = async() => {
  await baseUrl.get(`/tyre_width`)
  .then(res => setWidth(res.data.results))
}


const getHeight = async() => {
  await baseUrl.get(`/tyre_height`)
  .then(res => setHeight(res.data.results))
}

const getRadius = async() => {
  await baseUrl.get(`/tyre_diametr`)
  .then(res => setRadius(res.data.results))
}

const getBrands = async() => {
  await baseUrl.get(`/brands`)
  .then(res => setBrands(res.data))
}

useEffect(() => {
  getTires()
  getSlider()
  getWidth()
  getHeight()
  getRadius()
  getBrands()
},[])



  return (
    <>
    <div class="site">

      <MobileHeader/>
      <Header/>
      <CalcSlider height={height} radius={radius} width={width} slider={slider}/>
      <OurServices/>
      <Banners/>
      <NewProductsSlider tires={tires}/>
      <Campaigns/>
      <OutletSlider/>
      <MarkaSlider brands={brands}/>
      <Footer/>
    </div>
    </>
  )
}
