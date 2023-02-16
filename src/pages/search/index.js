import React, {useState, useEffect} from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import SearchBody from '@/components/SearchBody/SearchBody'
import { baseUrl } from '../api/api'
import { useRouter } from 'next/router'


const index = () => {
  
  const [tyres, setTyres] = useState([])
  const [brands, setBrands] = useState([])
  const [width, setWitdh] = useState([])


  const [selectedBrands, setSelectedBrands] = useState([])
  const [selectedWidth, setSelectedWidth] = useState([])

  console.log(selectedBrands, 'ashdushadusa')

  const {query} = useRouter()
  useEffect(() => {
    if(query?.brand?.length >= 1){
      setSelectedBrands(query.brand.split(','))
    }
  },[query?.brand])

  useEffect(() => {
    getFilteredProducts()
  },[selectedBrands, selectedWidth])

  const getSelectedBrandsData = (data) =>{
    const results = selectedBrands?.find(item => item === data)
    if(results == undefined){
      setSelectedBrands([...selectedBrands, data])
    }else{
      const newSelectedList = selectedBrands.filter(item => item !==data)
      setSelectedBrands(newSelectedList)
    }
    
  }
  console.log(tyres)

  const getSelectedWidthData = (data) => {
    const results = selectedWidth?.find(item => item === data)
    if(results == undefined){
      setSelectedWidth([...selectedWidth, data])
    }else{
      const newSelectedList = selectedWidth.filter(item => item !==data)
      setSelectedWidth(newSelectedList)
    }
  }
  
  const getFilteredProducts = async() => {
    await baseUrl.get(`/tyre-filter?brand=${String(selectedBrands ?? '')}&width=${String(selectedWidth)}`)
    .then(res => {
      const {data,status} = res
      if(status>=200 && status<=300 ){
        setTyres(data?.results)
      }
    })
  }

  useEffect(() => {
    getBrands()
    getWidth()
  },[])

  const getBrands = async() => {
    await baseUrl.get(`/brands`)
    .then(res => {
      const {data} = res
      setBrands(data)
    })
  }

  // console.log(selectedWidth,'asdhsaygdsa')

  const getWidth = async() =>{
    await baseUrl.get(`tyre_width`)
    .then(res => {
      const {data} = res
      setWitdh(data.results)
    })
  } 

  return (
    <>
        <Header/>
        <SearchBody tyres={tyres} selectedBrands={selectedBrands} brands={brands} getSelectedWidthData={getSelectedWidthData} width={width} getSelectedBrandsData={getSelectedBrandsData}/>
        <Footer/>
    </>
  )
}

export default index