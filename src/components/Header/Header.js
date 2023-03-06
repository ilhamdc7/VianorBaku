import React ,{ useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

const Header = () => {
  const [show, setShow] = useState();
  const [sumOfPriceProduct, setSumOfPriceProduct] = useState(null)
  const cart = useSelector(state => state.cart)
  const [searchInput ,setSearchInput] = useState('')

  useEffect(() => {
    setSumOfPriceProduct(null)
    cart?.forEach((tire) => {
     setSumOfPriceProduct(sumOfPriceProduct => (Number(tire?.price) * tire?.quantity) + sumOfPriceProduct )
    })
  },[cart])


  return (
    <header class=" header-site" style={{ "background-color": "#FFF", "z-index": "10" }}>
      <div style={{ "background": "#fff", "border-bottom": "1px solid #ebebeb" }}>
        <div class="container">
          <div
            class="d-flex justify-content-between"
            style={{ "align-items": "center", "height": "50px" }}
          >
            <div class="topbar--classic d-flex ">
              <div class="topbar__item-text ">
                <a class="topbar__link first-url" href="/about_us">
                  HAQQIMIZDA
                </a>
              </div>

              <div class="topbar__item-text ">
                <a class="topbar__link first-url" href="/contact">
                  ƏLAQƏ
                </a>
              </div>
            </div>

            <div  className={`topbar__menu ${show ? "topbar__menu--open" : ""}`} >
              <button
                class="topbar__button topbar__button--has-arrow topbar__menu-button"
                type="button"
                onClick={() => setShow(!show)}
              >
                <span class="topbar__button-title language-span">AZ</span>
                <span class="topbar__button-arrow">
                  <svg width="7px" height="5px">
                    <path d="M0.280,0.282 C0.645,-0.084 1.238,-0.077 1.596,0.297 L3.504,2.310 L5.413,0.297 C5.770,-0.077 6.363,-0.084 6.728,0.282 C7.080,0.634 7.088,1.203 6.746,1.565 L3.504,5.007 L0.262,1.565 C-0.080,1.203 -0.072,0.634 0.280,0.282 Z" />
                  </svg>
                </span>
              </button>
              <div class="topbar__menu-body">
                <a
                  style={{ " white-space": "nowrap" }}
                  class="topbar__menu-item language-button"
                  id=""
                  href="/"
                >
                  <img src="https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg" alt="" />
                  <span class="choosed-language">Azərbaycanca </span>
                </a>

                <a
                  style={{ " white-space": "nowrap" }}
                  class="topbar__menu-item language-button"
                  id=""
                  href="/ru/"
                >
                  <img src="/static/flags/ru.gif" alt="" />
                  <span class="choosed-language">Русский </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="container d-flex justify-content-between;"
        style={{ "position": "relative", "align-items": "center", "justify-content": "space-between" }}
      >
        <div class="logo">
          <div class="logo__image">
            <a href="/" class="logo">
              <img
                height="70px"
                class="p-1"
                src="http://www.vianorbaku.az/static/images/vianorLogo.jpg"
                alt=""
              />
            </a>
          </div>
        </div>
        <div class="search w-100">
          <div
            class="search translate_search"
            style={{ "position": "absolute", "z-index": "15", "width": "47%", "top": "50%", "left": "50%", "transform": "translate(-50%, -50%)" }}
          >
            <form
              style={{ "margin": "0 auto" }}
              class="search__body"
            >
              <div class="search__shadow"></div>
              <input
                class="search__input"
                placeholder="Açar söz və ya hissə nömrəsini daxil edin"
                onChange={(e) => setSearchInput(e.target.value)}
                value={searchInput}
              />
              <a style={{right:'20px'}} class="search__button search__button--end" href={`/search?sbrand=${searchInput}`}>
                <span  class="search__button-icon">
                  <svg  width="20" height="20" >
                    <path
                      d="M19.2,17.8c0,0-0.2,0.5-0.5,0.8c-0.4,0.4-0.9,0.6-0.9,0.6s-0.9,0.7-2.8-1.6c-1.1-1.4-2.2-2.8-3.1-3.9C10.9,14.5,9.5,15,8,15
                      c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7c0,1.5-0.5,2.9-1.3,4c1.1,0.8,2.5,2,4,3.1C20,16.8,19.2,17.8,19.2,17.8z M8,3C5.2,3,3,5.2,3,8
                      c0,2.8,2.2,5,5,5c2.8,0,5-2.2,5-5C13,5.2,10.8,3,8,3z"
                    />
                  </svg>
                </span>
              </a>

              <div class="search__box"></div>
              <div class="search__decor">
                <div class="search__decor-start"></div>
                <div class="search__decor-end"></div>
              </div>

              <div class="search__dropdown search__dropdown--suggestions suggestions">
                <div class="suggestions__group">
                  <div class="suggestions__group-title">Məhsullar</div>

                  <div class="suggestions__group-content"></div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <a
          class="d-flex"
          style={{ "height": "38px", "position": "relative", "width": "100px", "right": "6%" }}
          href="http://www.vianorbaku.az/calculator/"
        >
          <img
            style={{ "width": "100px", "position": "absolute" }}
            src="http://www.vianorbaku.az/static/images/az.png"
          />
        </a>

        <div class="indicators" style={{ textDecoration: 'none' }}>
          <div class="indicator indicator--trigger--click">
            <Link href={`/cart`} class="indicator__button">
              <span class="indicator__icon" style={{ left: '0px' }}>
                <svg width="32" height="32">
                  <circle cx="10.5" cy="27.5" r="2.5" />
                  <circle cx="23.5" cy="27.5" r="2.5" />
                  <path
                    d="M26.4,21H11.2C10,21,9,20.2,8.8,19.1L5.4,4.8C5.3,4.3,4.9,4,4.4,4H1C0.4,4,0,3.6,0,3s0.4-1,1-1h3.4C5.8,2,7,3,7.3,4.3
            l3.4,14.3c0.1,0.2,0.3,0.4,0.5,0.4h15.2c0.2,0,0.4-0.1,0.5-0.4l3.1-10c0.1-0.2,0-0.4-0.1-0.4C29.8,8.1,29.7,8,29.5,8H14
            c-0.6,0-1-0.4-1-1s0.4-1,1-1h15.5c0.8,0,1.5,0.4,2,1c0.5,0.6,0.6,1.5,0.4,2.2l-3.1,10C28.5,20.3,27.5,21,26.4,21z"
                  />
                </svg>
                <span class="indicator__counter" style={{ background: 'orange', marginLeft: '20px' }}>{cart?.length}</span>
              </span>
              <span class="indicator__title" style={{ marginLeft: '50px' }}>Səbət</span>
              <span class="d-flex indicator__value align-items-baseline" style={{ marginLeft: '50px', fontSize:'16px' }}>
                {sumOfPriceProduct} AZN
              </span>
            </Link>

            <div class="indicator__content" style={{ "z-index": "300" }}>
              <div class="dropcart" style={{ "z-index": "200" }}>
                <ul class="dropcart__list"></ul>
                <div class="dropcart__totals">
                  <table>
                    <tr>
                      <th>Ümumi</th>
                      <td class="total-price align-items-baseline">
                        0 <img class="manatt" src="/static/images/manat.png" />{" "}
                      </td>
                    </tr>
                  </table>
                </div>
                <div class="dropcart__actions">
                  <a href="/cart/" class="btn btn-secondary">
                    Səbətə bax
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ "border-top": "1px solid #ebebeb", "height": "50px", "display": "flex", "align-items": "center" }}>
        <div class="container">
          <div style={{ "align-items": "center" }}>
            <div class="header__navbar-menu">
              <div class="main-menu">
                <ul class="main-menu__list" style={{ textDecoration: 'none' }}>
                  <li class="main-menu__item main-menu__item--submenu--menu main-menu__item--has-submenu">
                    <Link href="/" class="main-menu__link second-url">
                      ƏSAS SƏHİFƏ
                    </Link>
                  </li>

                  <li class="main-menu__item main-menu__item--submenu--menu main-menu__item--has-submenu">
                    <Link href="/news" class="main-menu__link second-url">
                      XƏBƏRLƏR
                    </Link>
                  </li>

                  <li class="main-menu__item main-menu__item--submenu--menu main-menu__item--has-submenu">
                    <Link href="/blog-list" class="main-menu__link second-url">
                      TƏKƏRLƏRİN SINAQ TESTLƏRİ
                    </Link>
                  </li>

                  <li class="main-menu__item main-menu__item--submenu--menu main-menu__item--has-submenu">
                    <Link
                      href="/services"
                      class="main-menu__link second-url"
                    >
                      XİDMƏTLƏR
                    </Link>
                  </li>

                  <li class="main-menu__item main-menu__item--submenu--menu main-menu__item--has-submenu">
                    <Link href="/marka" class="main-menu__link second-url">
                      MARKALAR
                    </Link>
                  </li>

                  <li class="main-menu__item main-menu__item--submenu--menu main-menu__item--has-submenu">
                    <a href="/woman-blog" class="main-menu__link second-url">
                      XANIMLARA ÖZƏL
                    </a>
                  </li>

                  <li class="main-menu__item main-menu__item--submenu--menu main-menu__item--has-submenu">
                    <a href="/my-videos/" class="main-menu__link second-url">
                      VİDEO BLOG
                    </a>
                  </li>

                  <li class="main-menu__item main-menu__item--submenu--menu main-menu__item--has-submenu">
                    <a
                      href="/credit-form/"
                      style={{ "color": "#f25900" }}
                      class="main-menu__link second-url"
                    >
                      ONLİNE KREDİT MÜRACİƏTİ
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
