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


const getTires = async() => {
  await baseUrl.get(`/tyres?limit=30`)
  .then(res => {
    const {data} = res
    setTires(data?.results)
  })
}


console.log(tires,'jasdhsadg')

useEffect(() => {
  getTires()
},[])



  return (
    <>
    <div class="site">

      <MobileHeader/>
      <Header/>
      <CalcSlider/>
      <OurServices/>
      <Banners/>
      <NewProductsSlider tires={tires}/>
      <Campaigns/>
      <OutletSlider/>
      <MarkaSlider/>
      <Footer/>
    </div>
    </>
  )
}
