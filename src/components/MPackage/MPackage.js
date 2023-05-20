import React, {useEffect, useState} from 'react'
import Product from '../Product/Product'
import { useRouter } from 'next/router'
import { baseUrl } from '@/pages/api/api'
import styles from './mPackage.module.css'


const MPackage = () => {

    const [heightList,setHeightList] = useState([])
    const [widthList,setWidthList] = useState([])
    const [radiusList,setRadiusList] = useState([])

    const [selectedFirstWidth, setSelectedFirstWidth] = useState()
    const [selectedSecondWidth, setSelectedSecondWidth] = useState()

    const [selectedFirstHeight, setSelectedFirstHeight] = useState()
    const [selectedSecondHeight, setSelectedSecondHeight] = useState()

    const [selectedFirstRadius, setSelectedFirstRadius] = useState()
    const [selectedSecondRadius, setSelectedSecondRadius] = useState()

    const [boxes, setBoxes] = useState([])
    const {query} = useRouter()
    const getMPackage = async() => {
        await baseUrl.get(`/mpaket_search/?first_width=${query?.firstWidth}&first_height=${query?.firstHeight}&first_radius=${query?.firstDiametr}&second_width=${query?.secondWidth}&second_height=${query?.secondHeight}&second_radius=${query?.secondDiametr}`)
        .then(res => setBoxes(res.data))
    }

    const router = useRouter()

    const getWidth = async() =>{
        await baseUrl.get(`tyre_width?limit=100000000000000`)
        .then(res => {
          const {data} = res
          setWidthList(data.results)
        })
      } 
    
      const getHeight = async() => {
        await baseUrl.get(`tyre_height?limit=100000000000000`)
        .then(res => setHeightList(res.data.results))
      }
    
      const getRadius = async() => {
        await baseUrl.get(`/tyre_diametr?limit=100000000000000`)
        .then(res => setRadiusList(res?.data?.results))
      }


      useEffect(() => {
        getWidth()
        getHeight()
        getRadius()
      },[])

    useEffect(() => {
       getMPackage()
       setSelectedFirstWidth(query?.firstWidth)  
       setSelectedFirstHeight(query?.firstHeight)  
       setSelectedFirstRadius(query?.firstDiametr)  
       setSelectedSecondWidth(query?.secondWidth)  
       setSelectedSecondHeight(query?.secondHeight)  
       setSelectedSecondRadius(query?.secondDiametr)  
    },[query])

    useEffect(() => {
        router.push(`pair?firstWidth=${selectedFirstWidth ?? ''}&firstHeight=${selectedFirstHeight ?? ''}&firstDiametr=${selectedFirstRadius ?? ''}&secondWidth=${selectedSecondWidth ?? ''}&secondHeight=${selectedSecondHeight ?? ''}&secondDiametr=${selectedSecondRadius ?? ''}`)
    },[selectedFirstWidth,selectedFirstHeight, selectedFirstRadius,selectedSecondWidth,selectedSecondHeight,selectedSecondRadius])

  return (
    <>
     <div class="container mt-5">

        <div className={styles.selectRow}>
            <div className={styles.leftSide}>
            <select value={selectedFirstWidth} onChange={(e) => setSelectedFirstWidth(e.target.value)} className={styles.select}>
                <option value={''}>En</option>
                {widthList?.map((width) => (
                    <option value={width?.size}>{width?.size}</option>
                ))}
            </select>
            <select value={selectedFirstHeight} onChange={(e) => setSelectedFirstHeight(e.target.value)} className={styles.select}>
                <option value={''}>Hündürlük</option>
                {heightList?.map((height) => (
                    <option value={height?.size}>{height?.size}</option>
                    ))}
            </select>
            <select value={selectedFirstRadius} onChange={(e) => setSelectedFirstRadius(e.target.value)} className={styles.select}>
                <option value={''}>Radius</option>
                {radiusList?.map((radius) => (

                <option value={radius?.size}>{radius?.size}</option>
                ))}
            </select>
            
            </div>
            <div className={styles.rightSide}>
            <select value={selectedSecondWidth} onChange={(e) => setSelectedSecondWidth(e.target.value)} className={styles.select}>
                <option value={''}>En</option>
                {widthList?.map((width) => (
                    <option value={width?.size}>{width?.size}</option>
                ))}
            </select>
            <select value={selectedSecondHeight} onChange={(e) => setSelectedSecondHeight(e.target.value)} className={styles.select}>
                <option value={''}>Hündürlük</option>
                {heightList?.map((height) => (
                    <option value={height?.size}>{height?.size}</option>
                    ))}
            </select>
            <select value={selectedSecondRadius} onChange={(e) => setSelectedSecondRadius(e.target.value)} className={styles.select}>
                <option value={''}>Radius</option>
                {radiusList?.map((radius) => (
                    <option value={radius?.size}>{radius?.size}</option>
                    ))}
            </select>
            
            </div>
        </div>
     

            <div class="row">
                {boxes?.length >= 1 ? 
                boxes?.map((box) => (
                <div class="col-lg-6 col-12">
                    <div class="pair p-2 mb-4" style={{"border": "2px solid #252424"}}>
                        <div class="row">
                            <div class="col-lg-6 col-12">
                                <Product tire={box?.first}/>
                            </div>
                            <div class="col-lg-6 col-12">
                                <Product tire={box?.last}/>
                            </div>
                            
                        </div>
                    </div>

                </div>
                ))
                :
                <div className='row w-100 h-auto d-flex justify-content-center align-items-center' >
                    <h2>Məlumat tapılmadı</h2>
                </div>
            }

               




            </div>
        </div>
    </>
  )
}

export default MPackage