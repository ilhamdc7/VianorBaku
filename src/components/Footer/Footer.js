import React from 'react'
import ScrollTop from '@/pages/scrollTop/scroll'
import Link from 'next/link'
const Footer = () => {
    return (
        <>
            <ScrollTop />
            <div class="section-header__divider"></div>
            <footer class="site__footer">
                <div class="site-footer">
                    {/* <div class="decor site-footer__decor decor--type--bottom">
                        <div class="decor__body">
                            <div class="decor__start"></div>
                            <div class="decor__end"></div>
                            <div class="decor__center"></div>
                        </div>
                    </div> */}

                    <div class="site-footer__widgets">
                        <div class="container">
                            <div class="row">
                            <div class="col-12 col-xl-12">
                                    <iframe width="100%" height="250px" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.77342505136!2d49.909096915850384!3d40.391713979368014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d24606bf59d%3A0xbdd528600852009a!2sNokian%20Tyres%20Baku%20077%20651%201010!5e0!3m2!1saz!2s!4v1628232255692!5m2!1saz!2s"
                                        frameborder='0' scrolling='no' marginheight='0' marginwidth='0'></iframe>
                                </div>
                                <div class="col-md-12 col-6 col-xl-2 mt-5">
                                    <h5 class="footer-contacts__title text-center text-lg-left">Bizimlə əlaqə</h5>

                                    <div class="site-footer__widget footer-contacts">

                                        <address class="footer-contacts__contacts d-flex flex-column">
                                            <dl style={{ "width": "100%", "marginBottom": "15px" }}>
                                                <dt style={{textTransform:'uppercase'}}>Telefon nömrəsİ</dt>


                                                <dd style={{ "whiteSpace": "nowrap" }}>+994 12 424-07-53</dd>

                                                <dd style={{ "whiteSpace": "nowrap" }}>+994 77 406-10-10</dd>


                                            </dl>
                                            <dl style={{ "width": "100%", "marginBottom": "15px" }}>
                                                <dt style={{textTransform:'uppercase'}}>Elektron poçt ünvanı</dt>
                                                <dd style={{textTransform:'uppercase'}}>info@vianorbaku.az</dd>
                                            </dl>

                                        </address>
                                    </div>
                                    <div class="diplay-flex justify-content-right mt-3 mb-3">
                                        <div class="footer-newsletter__social-links social-links">
                                            <ul class="social-links__list">

                                                <li class="social-links__item social-links__item--facebook">
                                                    <a href="https://www.facebook.com/vianorbaku.az" target="_blank">
                                                        <i class="fab fa-facebook"></i>
                                                    </a>
                                                </li>

                                                <li class="social-links__item social-links__item--instagram"><a href="https://www.instagram.com/vianorbaku.az/" target="_blank"><i
                                                    class="fab fa-instagram"></i></a></li>

                                                <li class="social-links__item social-links__item--youtube">
                                                    <a href="https://www.youtube.com/channel/UCF02nJ08PqiFt853clXcOsw/videos" target="_blank">
                                                        <i
                                                            class="fab fa-youtube"></i></a></li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12 col-6 col-xl-2">
                                    <h5 style={{ "visibility": "hidden" }} class="footer-contacts__title text-center text-lg-left">
                                        Bizimlə əlaqə</h5>
                                    <div class="site-footer__widget footer-contacts">
                                        <address class="footer-contacts__contacts d-flex flex-column">
                                            <dl style={{ "width": "100%", "marginBottom": "15px", textTransform:'uppercase', fontSize:'16px' }}>
                                                <dt>Bİzİm ünvan</dt>
                                                <dd>Babək pr.38</dd>
                                            </dl>
                                            <dl style={{ "width": "100%" }}>
                                                <dt>İş saatları</dt>
                                                <dd>9:00 - 20:00</dd>
                                            </dl>
                                        </address>
                                    </div>

                                </div>
                                
                                <div class="col-12 col-xl-3 mt-5">
                                    <div class="site-footer__widget footer-contacts">
                                        <h5 class="footer-contacts__title text-center text-lg-left ">Vianor</h5>

                                        <address class="footer-contacts__contacts d-flex flex-column m-0">

                                            <dd class="mb-1 footer-links__item"><Link class="hoovver" style={{ "color": "black" }}
                                                href="/">ƏSAS SƏHİFƏ</Link>
                                            </dd>

                                            <dd class="mb-1 footer-links__item"><Link class="hoovver" style={{ "color": "black" }}
                                                href="/news">XƏBƏRLƏR</Link>
                                            </dd>

                                            <dd class="mb-1 footer-links__item"><Link class="hoovver" style={{ "color": "black" }}
                                                href="/blog-list">TƏKƏRLƏRİN SINAQ TESTLƏRİ</Link>
                                            </dd>

                                            <dd class="mb-1 footer-links__item"><Link class="hoovver" style={{ "color": "black" }}
                                                href="/services">XİDMƏTLƏR</Link>
                                            </dd>

                                            <dd class="mb-1 footer-links__item"><Link class="hoovver" style={{ "color": "black" }}
                                                href="/marka">MARKALAR</Link>
                                            </dd>

                                            <dd class="mb-1 footer-links__item"><Link class="hoovver" style={{ "color": "black" }}
                                                href="/woman-blog">XANIMLARA ÖZƏL</Link>
                                            </dd>

                                            <dd class="mb-1 footer-links__item"><Link class="hoovver" style={{ "color": "black" }}
                                                href="/my-videos/">VİDEO BLOG</Link>
                                            </dd>

                                            <dd class="mb-1 footer-links__item"><Link class="hoovver" style={{ "color": "black" }}
                                                href="/credit-form/">ONLİNE KREDİT MÜRACİƏTİ</Link>
                                            </dd>


                                            <dd class="mb-1 footer-links__item"><Link class="hoovver" style={{ "color": "black" }}
                                                href="/about-us">HAQQIMIZDA</Link>
                                            </dd>

                                            <dd class="mb-1 footer-links__item"><Link class="hoovver" style={{ "color": "black" }}
                                                href="/contact">ƏLAQƏ</Link>
                                            </dd>

                                        </address>
                                    </div>

                                </div>
                                <div class="col-12 col-xl-3 mt-5">
                                    <h5 class="footer-contacts__title text-center text-lg-left">Xidmətlər</h5>
                                    <div class="site-footer__widget footer-contacts">
                                        <address class="footer-contacts__contacts d-flex flex-column m-0">

                                            <dd class="mb-1 footer-links__item"><a class="hoovver" style={{ "color": "black" }}
                                                href={'/services/register'}>AKKUMLYATOR SERVİSİ</a>
                                            </dd>

                                            <dd class="mb-1 footer-links__item"><a class="hoovver" style={{ "color": "black" }}
                                                href={'/services/register'}>TƏKƏRLƏRİN BALANSI</a>
                                            </dd>

                                            <dd class="mb-1 footer-links__item"><a class="hoovver" style={{ "color": "black" }}
                                                href={'/services/register'}>RAZVAL XİDMƏTİ</a>
                                            </dd>

                                            <dd class="mb-1 footer-links__item"><a class="hoovver" style={{ "color": "black" }}
                                                href={'/services/register'}>TƏKƏRLƏRİN TƏMİRİ</a>
                                            </dd>

                                            <dd class="mb-1 footer-links__item"><a class="hoovver" style={{ "color": "black" }}
                                                href={'/services/register'}>YAGDƏYİŞMƏ</a>
                                            </dd>

                                            <dd class="mb-1 footer-links__item"><a class="hoovver" style={{ "color": "black" }}
                                                href={'/services/register'}>DİSKLƏRİN TƏMİRİ</a>
                                            </dd>

                                            <dd class="mb-1 footer-links__item"><a class="hoovver" style={{ "color": "black" }}
                                                href={'/services/register'}>ÇİLİNGƏR XİDMƏTLƏRİ</a>
                                            </dd>

                                            <dd class="mb-1 footer-links__item"><a class="hoovver" style={{ "color": "black" }}
                                                href={'/services/register'}>FİLTERLƏRİN DƏYİŞDİRİLMƏSİ</a>
                                            </dd>

                                            <dd class="mb-1 footer-links__item"><a class="hoovver" style={{ "color": "black" }}
                                                href={'/services/register'}>ƏYLƏC SERVİSİ</a>
                                            </dd>

                                        </address>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="site-footer__bottom">
                        <div class="container">
                            <div class="site-footer__bottom-row">
                                <div class="site-footer__copyright w-100">
                                    <div class="">
                                        <div class="row">
                                            <div class="col-7"> Copyright © 2022 Vianorbaku.az </div>
                                            <div class="col-5" style={{ "textAlign": "end" }}>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer