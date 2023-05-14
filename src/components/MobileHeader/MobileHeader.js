import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { useSelector } from "react-redux";
import WheelCalculatorPng from '../../../assests/images/az.png'


const Header = () => {
    const [show, setShow] = useState(false);

    const [search, setSearch] = useState(false);
    const [searchInput, setSearchInput] = useState('');


    const [sumOfPriceProduct, setSumOfPriceProduct] = useState(null)
    const {cart} = useSelector(state => state.cart)



    useEffect(() => {
        setSumOfPriceProduct(null)
        if(cart?.length >= 1){
          cart?.forEach((tire) => {
           setSumOfPriceProduct(sumOfPriceProduct => (Number(tire?.price) * tire?.quantity) + sumOfPriceProduct )
          })
        }
      },[cart])
    return (
        <div>
            <header class="site__mobile-header"  >
                <div class="mobile-header">
                    <div class="container mob-header">
                        <div class="mobile-header__body">
                            <button class="mobile-header__menu-button" type="button" onClick={() => setShow(true)}>
                                <svg width="18px" height="14px">
                                    <path
                                        d="M-0,8L-0,6L18,6L18,8L-0,8ZM-0,-0L18,-0L18,2L-0,2L-0,-0ZM14,14L-0,14L-0,12L14,12L14,14Z" />
                                </svg>
                            </button>
                            <a class="mobile-header__logo" href="/">

                                {/* <img class="p-1" src="/static/images/vianorLogo.jpg" alt="" /> */}

                            </a>
                            <div className={` mobile-header__search mobile-search ${search ? "mobile-header__search--open" : ""}`}>
                                <form class="mobile-search__body">
                                    <input onChange={(e) => setSearchInput(e.target.value)} name="filterData" type="text" id="mobile-search" autocomplete="off" class="mobile-search__input" placeholder="Enter keyword or part number" />

                                    <Link id="for-submitting" href={`/search?sbrand=${searchInput ?? ''}`} class="mobile-search__button mobile-search__button--search">
                                        <svg width="20" height="20">
                                            <path d="M19.2,17.8c0,0-0.2,0.5-0.5,0.8c-0.4,0.4-0.9,0.6-0.9,0.6s-0.9,0.7-2.8-1.6c-1.1-1.4-2.2-2.8-3.1-3.9C10.9,14.5,9.5,15,8,15
	c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7c0,1.5-0.5,2.9-1.3,4c1.1,0.8,2.5,2,4,3.1C20,16.8,19.2,17.8,19.2,17.8z M8,3C5.2,3,3,5.2,3,8
	c0,2.8,2.2,5,5,5c2.8,0,5-2.2,5-5C13,5.2,10.8,3,8,3z" />
                                        </svg>
                                        </Link>
                                  
                                    <button type="button" class="mobile-search__button mobile-search__button--close"    onClick={() => setSearch(false)}>
                                        <svg width="20" height="20">
                                            <path d="M16.7,16.7L16.7,16.7c-0.4,0.4-1,0.4-1.4,0L10,11.4l-5.3,5.3c-0.4,0.4-1,0.4-1.4,0l0,0c-0.4-0.4-0.4-1,0-1.4L8.6,10L3.3,4.7
	c-0.4-0.4-0.4-1,0-1.4l0,0c0.4-0.4,1-0.4,1.4,0L10,8.6l5.3-5.3c0.4-0.4,1-0.4,1.4,0l0,0c0.4,0.4,0.4,1,0,1.4L11.4,10l5.3,5.3
	C17.1,15.7,17.1,16.3,16.7,16.7z" />
                                        </svg>
                                    </button>
                                    <div class="mobile-search__field"></div>
                                </form>
                            </div>



                            <Link class="d-flex" style={{ "height": "38px", "position": "relative", "width": "100px", "left": "2%", "top": "12%" }} href="/wheel-calculator/">
                                <img style={{ "width": "100px", "position": "absolute;" }} src={WheelCalculatorPng.src} />
                            </Link>


                            <div class="mobile-header__indicators">
                                <div class="mobile-indicator mobile-indicator--search d-md-none">
                                    <button type="button" class="mobile-indicator__button" onClick={() => setSearch(true)}>
                                        <span class="mobile-indicator__icon"><svg width="20" height="20">
                                            <path d="M19.2,17.8c0,0-0.2,0.5-0.5,0.8c-0.4,0.4-0.9,0.6-0.9,0.6s-0.9,0.7-2.8-1.6c-1.1-1.4-2.2-2.8-3.1-3.9C10.9,14.5,9.5,15,8,15
	c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7c0,1.5-0.5,2.9-1.3,4c1.1,0.8,2.5,2,4,3.1C20,16.8,19.2,17.8,19.2,17.8z M8,3C5.2,3,3,5.2,3,8
	c0,2.8,2.2,5,5,5c2.8,0,5-2.2,5-5C13,5.2,10.8,3,8,3z" />
                                        </svg>
                                        </span>
                                    </button>
                                </div>
                                <div class="mobile-indicator d-none d-md-block">
                                    <a href="account-login.html" class="mobile-indicator__button">
                                        <span class="mobile-indicator__icon"><svg width="20" height="20">
                                            <path d="M20,20h-2c0-4.4-3.6-8-8-8s-8,3.6-8,8H0c0-4.2,2.6-7.8,6.3-9.3C4.9,9.6,4,7.9,4,6c0-3.3,2.7-6,6-6s6,2.7,6,6
	c0,1.9-0.9,3.6-2.3,4.7C17.4,12.2,20,15.8,20,20z M14,6c0-2.2-1.8-4-4-4S6,3.8,6,6s1.8,4,4,4S14,8.2,14,6z" />
                                        </svg>
                                        </span>
                                    </a>
                                </div>
                                <div class="mobile-indicator d-none d-md-block">
                                    <a href="wishlist.html" class="mobile-indicator__button">
                                        <span class="mobile-indicator__icon">
                                            <svg width="20" height="20">
                                                <path d="M14,3c2.2,0,4,1.8,4,4c0,4-5.2,10-8,10S2,11,2,7c0-2.2,1.8-4,4-4c1,0,1.9,0.4,2.7,1L10,5.2L11.3,4C12.1,3.4,13,3,14,3 M14,1
	c-1.5,0-2.9,0.6-4,1.5C8.9,1.6,7.5,1,6,1C2.7,1,0,3.7,0,7c0,5,6,12,10,12s10-7,10-12C20,3.7,17.3,1,14,1L14,1z" />
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                                <div class="mobile-indicator">
                                    <Link href="/cart/" class="mobile-indicator__button">
                                        <span class="mobile-indicator__icon">
                                            <svg width="20" height="20">
                                                <circle cx="7" cy="17" r="2" />
                                                <circle cx="15" cy="17" r="2" />
                                                <path d="M20,4.4V5l-1.8,6.3c-0.1,0.4-0.5,0.7-1,0.7H6.7c-0.4,0-0.8-0.3-1-0.7L3.3,3.9C3.1,3.3,2.6,3,2.1,3H0.4C0.2,3,0,2.8,0,2.6
	V1.4C0,1.2,0.2,1,0.4,1h2.5c1,0,1.8,0.6,2.1,1.6L5.1,3l2.3,6.8c0,0.1,0.2,0.2,0.3,0.2h8.6c0.1,0,0.3-0.1,0.3-0.2l1.3-4.4
	C17.9,5.2,17.7,5,17.5,5H9.4C9.2,5,9,4.8,9,4.6V3.4C9,3.2,9.2,3,9.4,3h9.2C19.4,3,20,3.6,20,4.4z" />
                                            </svg>
                                            <span class="mobile-indicator__counter">{cart?.length ?? 0}</span>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* mobile-menu--open */}
            <div  className={`mobile-menu ${show ? "mobile-menu--open" : "mobile-menu"}`}  >
                <div class="mobile-menu__backdrop"></div>
                <div class="mobile-menu__body">
                    <button class="mobile-menu__close" type="button" onClick={() => setShow(false)}>
                        <svg width="12" height="12">
                            <path d="M10.8,10.8L10.8,10.8c-0.4,0.4-1,0.4-1.4,0L6,7.4l-3.4,3.4c-0.4,0.4-1,0.4-1.4,0l0,0c-0.4-0.4-0.4-1,0-1.4L4.6,6L1.2,2.6
             c-0.4-0.4-0.4-1,0-1.4l0,0c0.4-0.4,1-0.4,1.4,0L6,4.6l3.4-3.4c0.4-0.4,1-0.4,1.4,0l0,0c0.4,0.4,0.4,1,0,1.4L7.4,6l3.4,3.4
             C11.2,9.8,11.2,10.4,10.8,10.8z"></path>
                        </svg>
                    </button>
                    <div class="mobile-menu__panel">
                        <div class="mobile-menu__panel-header">
                            <div class="mobile-menu__panel-title">Menyu</div>
                        </div>
                        <div class="mobile-menu__panel-body">
                            {/* <!-- <div class="mobile-menu__settings-list">
                                 <div class="mobile-menu__setting" data-mobile-menu-item>
                                     <button class="mobile-menu__setting-button" title="Language" data-mobile-menu-trigger>
         
                                         <span class="mobile-menu__setting-title">Dil seçin</span>
                                         <span class="mobile-menu__setting-arrow"><svg width="6px" height="9px">
                                                 <path
                                                     d="M0.3,7.4l3-2.9l-3-2.9c-0.4-0.3-0.4-0.9,0-1.3l0,0c0.4-0.3,0.9-0.4,1.3,0L6,4.5L1.6,8.7c-0.4,0.4-0.9,0.4-1.3,0l0,0C-0.1,8.4-0.1,7.8,0.3,7.4z" />
                                             </svg>
                                         </span>
                                     </button>
                                     <div class="mobile-menu__setting-panel" data-mobile-menu-panel>
                                         <div class="mobile-menu__panel mobile-menu__panel--hidden">
                                             <div class="mobile-menu__panel-header">
                                                 <button class="mobile-menu__panel-back" type="button">
                                                     <svg width="7" height="11">
                                                         <path
                                                             d="M6.7,0.3L6.7,0.3c-0.4-0.4-0.9-0.4-1.3,0L0,5.5l5.4,5.2c0.4,0.4,0.9,0.3,1.3,0l0,0c0.4-0.4,0.4-1,0-1.3l-4-3.9l4-3.9C7.1,1.2,7.1,0.6,6.7,0.3z" />
                                                     </svg>
                                                 </button>
                                                 <div class="mobile-menu__panel-title">Language</div>
                                             </div>
                                             <div class="mobile-menu__panel-body">
                                                 <ul class="mobile-menu__links">
                                                     
                                                     
                                                     
                                                     
                                                     <li data-mobile-menu-item>
                                                         <a type="button" class=""
                                                             href="/"
                                                             data-mobile-menu-trigger>
                                                             <div class="mobile-menu__links-image">
                                                                 <img src="/static/flags/az.gif" alt="">
                                                             </div>
                                                             Azərbaycanca
                                                         </a>
                                                     </li>
         
                                                     
                                                     <li data-mobile-menu-item>
                                                         <a type="button" class=""
                                                             href="/ru"
                                                             data-mobile-menu-trigger>
                                                             <div class="mobile-menu__links-image">
                                                                 <img src="/static/flags/ru.gif" alt=""/>
                                                             </div>
                                                             Русский
                                                         </a>
                                                     </li>
         
                                                     
         
                                                 </ul>
         
                                             </div>
                                         </div>
                                     </div>
                                 </div>
         
                             </div> --> */}
                            <ul class="mobile-menu__links">




                              {/* Dil ucun yer */}


                            </ul>
                            {/* <!-- <div class="mobile-menu__divider"></div> -->
                             <!-- <div class="mobile-menu__indicators">
         
                             </div> --> */}
                            <div class="mobile-menu__divider"></div>
                            <ul class="mobile-menu__links">




                                <li data-mobile-menu-item="">
                                    <a href="/" class="" data-mobile-menu-trigger="">
                                        ƏSAS SƏHİFƏ

                                    </a></li><a href="/" class="" data-mobile-menu-trigger="">





                                </a><li data-mobile-menu-item=""><a href="/" class="" data-mobile-menu-trigger="">
                                </a><a href="/news" class="" data-mobile-menu-trigger="">
                                        XƏBƏRLƏR

                                    </a></li><a href="/news-list" class="" data-mobile-menu-trigger="">





                                </a><li data-mobile-menu-item=""><a href="/news-list" class="" data-mobile-menu-trigger="">
                                </a><a href="/blog-list" class="" data-mobile-menu-trigger="">
                                        TƏKƏRLƏRİN SINAQ TESTLƏRİ

                                    </a></li><a href="/blogs-list" class="" data-mobile-menu-trigger="">





                                </a><li data-mobile-menu-item=""><a href="/blogs-list" class="" data-mobile-menu-trigger="">
                                </a><a href="/services" class="" data-mobile-menu-trigger="">
                                        XİDMƏTLƏR

                                    </a></li><a href="/tyresservices-list" class="" data-mobile-menu-trigger="">





                                </a><li data-mobile-menu-item=""><a href="/tyresservices-list" class="" data-mobile-menu-trigger="">
                                </a><a href="/marka" class="" data-mobile-menu-trigger="">
                                        MARKALAR

                                    </a></li><a href="/brands" class="" data-mobile-menu-trigger="">





                                </a><li data-mobile-menu-item=""><a href="/brands" class="" data-mobile-menu-trigger="">
                                </a><a href="/woman-blog" class="" data-mobile-menu-trigger="">
                                        XANIMLARA ÖZƏL

                                    </a></li><a href="/woman-blog" class="" data-mobile-menu-trigger="">





                                </a><li data-mobile-menu-item=""><a href="/woman-blog" class="" data-mobile-menu-trigger="">
                                </a><a href="/my-videos/" class="" data-mobile-menu-trigger="">
                                        VİDEO BLOG

                                    </a></li><a href="/my-videos/" class="" data-mobile-menu-trigger="">





                                </a><li data-mobile-menu-item=""><a href="/my-videos/" class="" data-mobile-menu-trigger="">
                                </a><a href="/credit-form/" class="" data-mobile-menu-trigger="">
                                        ONLİNE KREDİT MÜRACİƏTİ

                                    </a></li><a href="/credit-form/" class="" data-mobile-menu-trigger="">



                                </a><li data-mobile-menu-item=""><a href="/credit-form/" class="" data-mobile-menu-trigger="">
                                </a><a href="/about-us" class="" data-mobile-menu-trigger="">
                                        HAQQIMIZDA


                                    </a></li><li data-mobile-menu-item=""><a href="/about_us" class="" data-mobile-menu-trigger="">
                                    </a><a href="/contact" class="" data-mobile-menu-trigger="">
                                        ƏLAQƏ



                                    </a></li></ul><a href="/contact" class="" data-mobile-menu-trigger="">
                                <div class="mobile-menu__spring"></div>
                                <div class="mobile-menu__divider"></div>
                            </a><a class="mobile-menu__contacts" href="">
                                <div class="mobile-menu__contacts-subtitle">Bizə zəng edin</div>
                                <div class="mobile-menu__contacts-title">012 4240753</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header