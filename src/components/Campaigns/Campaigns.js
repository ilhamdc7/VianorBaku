import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import { baseUrl } from '@/pages/api/api'

const Campaigns = () => {


  const [services, setServices] = useState([])

  const getServices = async() => {
    await baseUrl.get(`https://vianor.efgroup.az/services_home_page/`)
    .then(res => {
      setServices(res.data)
    })
  }

useEffect(() => {
  getServices()
},[])

  return (
    <>
    <div class="block-space block-space--layout--divider-nl"></div>
            <div class="block-banners block">
                <div class="container">
                    <div class="block-banners__list">
                      {services?.map((service) => (

                <Link href={`/search?season=${service?.season?.name}`} style={{position:'relative'}} class="block-banners__item block-banners__item--style--one">
                  
                    <span class="block-banners__item-image">
                      <img style={{background:'black'}} src={service?.image} alt=""/>
                    <div style={{zIndex:2, position:'absolute', background:'black', opacity:0.3, width:'100%', height:'100%', top:0, left:0}}/>
                      
                      </span>
                    <div style={{zIndex:3}}>
                    <span class="block-banners__item-image block-banners__item-image--blur">
                      
                            </span>
                    <span class="block-banners__item-title" style={{color: '#f25900', fontWeight:600, fontSize:28}}>{service?.title}</span>
                    <span class="block-banners__item-details" style={{maxWidth:'300px', fontWeight:600,fontSize:17}}>
                        {service?.description}
                            </span>
                    <span class="block-banners__item-button btn btn-primary btn-sm">
                        İndi al
                            </span> 
                    </div>
                </Link>
                      ))}
                
                        {/* <a href="/speacial-offer/" class="block-banners__item block-banners__item--style--one">
                    <span class="block-banners__item-image"><img src="https://media.istockphoto.com/photos/set-of-car-parts-isolated-on-white-background-3d-picture-id1034249292?k=20&m=1034249292&s=612x612&w=0&h=COqR9oHyH23bFl7v4XotimSp1gSdzxNlHF3FrztqyrA=" alt=""/></span>
                    <span class="block-banners__item-image block-banners__item-image--blur"><img
                            src="https://media.istockphoto.com/photos/set-of-car-parts-isolated-on-white-background-3d-picture-id1034249292?k=20&m=1034249292&s=612x612&w=0&h=COqR9oHyH23bFl7v4XotimSp1gSdzxNlHF3FrztqyrA=" alt=""/></span>
                    <span class="block-banners__item-title">Xüsusi təkliflər</span>
                    <span class="block-banners__item-details">
                        Avtomobilin akkumlyatorunun diaqnostikası pulsuz
                         <br/>
                        
                            </span>
                    <span class="block-banners__item-button btn btn-primary btn-sm">
                        İndi al
                            </span> 
                </a> */}
                    </div>
                </div>
            </div>
    </>
  )
}

export default Campaigns