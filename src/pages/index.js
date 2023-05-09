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
import CompaniesSlider from "@/components/CompaniesSlider/CompaniesSlider"
import ScrollTop from "./scrollTop/scroll"
import LoaderComponent from "@/components/LoaderComponent/LoaderComponent"
import Head from "next/head"
import { Modal } from "antd"
export default function Home() {

  const [tires, setTires] = useState([])
  const [loading, setLoading] = useState(false)
  const [slider, setSlider] = useState([])
  const [width, setWidth] = useState([])
  const [height, setHeight] = useState([])
  const [radius, setRadius] = useState([])
  const [brands, setBrands] = useState([])
  const [marka, setMarka] = useState([])
  const [discountTyres, setDiscountTyres] = useState([])
  const [modal, setModal] = useState(true)

  console.log(modal, 'kasjudhsyuaigd')

const getTires = async() => {
  setLoading(true)
  await baseUrl.get(`/tyres?limit=30`)
  .then(res => {
    const {data} = res
    setTires(data?.results)
  })
  await baseUrl.get(`/discount`)
  .then(res => {
    const {data, status} = res
    if(status >= 200 && status <= 300){
      setLoading(false)
      setDiscountTyres(data)
    }
  })
}

const getMarka = async() => {
  await baseUrl.get(`/markas?limit=100000000`)
  .then(res => setMarka(res.data.results))
}



const getSlider = async() => {
  await baseUrl.get(`/slider?limit=100000000`)
  .then(res => setSlider(res.data.results))
}


const getWidth = async() => {
  await baseUrl.get(`/tyre_width?limit=100000000`)
  .then(res => setWidth(res.data.results))
}


const getHeight = async() => {
  await baseUrl.get(`/tyre_height?limit=100000000`)
  .then(res => setHeight(res.data.results))
}

const getRadius = async() => {
  await baseUrl.get(`/tyre_diametr?limit=100000000`)
  .then(res => setRadius(res.data.results))
}

const getBrands = async() => {
  await baseUrl.get(`/brands?limit=100000000`)
  .then(res => setBrands(res.data))
}

useEffect(() => {
  getTires()
  getSlider()
  getWidth()
  getHeight()
  getRadius()
  getBrands()
  getMarka()
},[])


const handleCancel = () => {
    setModal(false)
}

  return (
    <>
     <Head>
        <title>Vianor təkər mərkəzi</title>
      </Head>
    <div class="site">
      <MobileHeader/>
      <Header/>
      <CalcSlider markas={marka} height={height} radius={radius} width={width} slider={slider}/>
      <OurServices/>
      {discountTyres?.length >= 1 && loading === false ?
      <CompaniesSlider compaines={discountTyres}/>
      : 
      <div className="d-flex justify-content-center align-items-center w-100" style={{height:'100px'}}>
        <LoaderComponent/>
      </div>
      }
      {/* <Banners/> */}
      <NewProductsSlider tires={tires}/>
      <Campaigns/>
      {/* <OutletSlider/> */}
      <MarkaSlider brands={brands}/>
      <Footer/>
      <Modal onCancel={handleCancel} open={modal} >
        <img className="mt-4" src="https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2022/wallpaper-update/bmw-m3-toruing-g81-01-gallery.jpg" width={'100%'}/>
      </Modal>
    </div>
    </>
  )
}
