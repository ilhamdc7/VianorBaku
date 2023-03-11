import React, {useEffect, useState} from 'react'
import Product from '../Product/Product'
import { useRouter } from 'next/router'
import { baseUrl } from '@/pages/api/api'


const MPackage = () => {

    const [boxes, setBoxes] = useState([])
    const {query} = useRouter()
    console.log(boxes,'asjsaujujasdhash')


    const getMPackage = async() => {
        await baseUrl.get(`/mpaket_search/?first_width=${query?.firstWidth}&first_height=${query?.firstHeight}&first_radius=${query?.firstDiametr}&second_width=${query?.secondWidth}&second_height=${query?.secondHeight}&second_radius=${query?.secondDiametr}`)
        .then(res => setBoxes(res.data))
    }


    useEffect(() => {
       getMPackage()  
    },[query])

  return (
    <>
     <div class="container mt-5">
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