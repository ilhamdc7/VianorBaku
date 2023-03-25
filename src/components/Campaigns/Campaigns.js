import Link from 'next/link'
import React from 'react'

const Campaigns = () => {
  return (
    <>
    <div class="block-space block-space--layout--divider-nl"></div>
            <div class="block-banners block">
                <div class="container">
                    <div class="block-banners__list">
                        <Link href="/search?season=Yay" class="block-banners__item block-banners__item--style--one">
                    <span class="block-banners__item-image"><img src="https://media.istockphoto.com/photos/car-tires-on-summer-country-road-picture-id1209789420?k=6&m=1209789420&s=612x612&w=0&h=ydQFK1wOjk-3qHPmJ5OQe--xLW5jb0U8-Ht6PU3FfCA=" alt=""/></span>
                    <span class="block-banners__item-image block-banners__item-image--blur"><img
                            src="https://media.istockphoto.com/photos/car-tires-on-summer-country-road-picture-id1209789420?k=6&m=1209789420&s=612x612&w=0&h=ydQFK1wOjk-3qHPmJ5OQe--xLW5jb0U8-Ht6PU3FfCA=" alt=""/></span>
                    <span class="block-banners__item-title">Yay təkərlərİ</span>
                    <span class="block-banners__item-details">
                        Bütün növ avtomobillər üçün yay təkərlərinin satışı
                                 <br/>
                                Sürtünmədən azad həyat təmin edilir
                            </span>
                    <span class="block-banners__item-button btn btn-primary btn-sm">
                        İndi al
                            </span> 
                </Link>
                <Link href="/search?season=Qış" class="block-banners__item block-banners__item--style--two">
                    <span class="block-banners__item-image"><img src="https://media.istockphoto.com/photos/winter-tire-car-in-winter-tires-on-snowy-road-detail-picture-id1210821617?k=6&m=1210821617&s=612x612&w=0&h=t8pK1J6IBV_GIkGCxtysxJR1R484U_TzjRWuegca1QY=" alt=""/></span>
                    <span class="block-banners__item-image block-banners__item-image--blur"><img
                            src="https://media.istockphoto.com/photos/winter-tire-car-in-winter-tires-on-snowy-road-detail-picture-id1210821617?k=6&m=1210821617&s=612x612&w=0&h=t8pK1J6IBV_GIkGCxtysxJR1R484U_TzjRWuegca1QY=" alt=""/></span>
                    <span class="block-banners__item-title">Qış təkərlərİ</span>
                    <span class="block-banners__item-details">
                        Bütün növ avtomobillər üçün qış təkərlərinin satışı
                         <br/>
                        
                            </span>
                     <span class="block-banners__item-button btn btn-primary btn-sm">
                        İndi al
                            </span>
                </Link>
                        <Link href="/search?season=Dörd fəsil " class="block-banners__item block-banners__item--style--two">
                    <span class="block-banners__item-image"><img src="https://media.istockphoto.com/photos/car-driving-in-the-rain-picture-id965519348?k=6&m=965519348&s=612x612&w=0&h=EkbyDMiXFJP12ZMzoxatd_RoTZvHDZ07lZ11qJxDi9I= " alt=""/></span>
                    <span class="block-banners__item-image block-banners__item-image--blur"><img
                            src="https://media.istockphoto.com/photos/car-driving-in-the-rain-picture-id965519348?k=6&m=965519348&s=612x612&w=0&h=EkbyDMiXFJP12ZMzoxatd_RoTZvHDZ07lZ11qJxDi9I= " alt=""/></span>
                    <span class="block-banners__item-title">Dörd fəsİl təkərlər</span>
                    <span class="block-banners__item-details">
                        Bütün növ avtomobillər üçün dörd fəsil təkərlərinin satışı
                     <br/>
                        
                            </span>
                    <span class="block-banners__item-button btn btn-primary btn-sm">
                        İndi al
                            </span>
                </Link>
                <Link
              href="/services/register"
              style={{ textDecoration: "none" }}
              class="block-banners__item block-banners__item--style--one"
            >
              <span class="block-banners__item-image">
                <img src="https://wallpapercave.com/wp/wp3056683.jpg" alt="" />
              </span>
              <span class="block-banners__item-image block-banners__item-image--blur">
                <img src="https://wallpapercave.com/wp/wp3056683.jpg" alt="" />
              </span>
              <span class="block-banners__item-title">Yağ dəyİşmə</span>
              <span class="block-banners__item-details">
                Mühərrik və Transmissiya yaglarının satışı və dəyişdirilməsi
                <br />
                Mühərriklərə xidmət
              </span>
              <span class="block-banners__item-button btn btn-primary btn-sm">
                İndi al
              </span>
            </Link>
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