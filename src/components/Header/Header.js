import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";
import { baseUrl } from "@/pages/api/api";
import WheelCalculatorPng from "../../../assests/images/az.png";

const Header = () => {
  const [show, setShow] = useState();
  const [sumOfPriceProduct, setSumOfPriceProduct] = useState(null);
  const { cart } = useSelector((state) => state.cart);
  const [searchInput, setSearchInput] = useState("");
  const [mainData, setMainData] = useState({});

  const router = useRouter();

  useEffect(() => {
    setSumOfPriceProduct(null);
    if (cart?.length >= 1) {
      cart?.forEach((tire) => {
        setSumOfPriceProduct(
          (sumOfPriceProduct) =>
            Number(tire?.price) * tire?.quantity + sumOfPriceProduct
        );
      });
    }
  }, [cart]);

  const getMainData = async () => {
    baseUrl.get(`main`).then((res) => setMainData(res?.data));
  };

  useEffect(() => {
    getMainData();
  }, []);

  return (
    <header class=" header-site" style={{ "z-index": "10" }}>
      <div
        class="container d-flex justify-content-between;"
        style={{
          position: "relative",
          "align-items": "center",
          "justify-content": "space-between",
        }}
      >
        <div class="logo">
          <div class="logo__image">
            <a href="/" class="logo mb-3">
              <img height="90px" class="p-1" src={mainData?.logo} alt="" />
            </a>
          </div>
        </div>
        <div class="search w-100">
          <div
            class="search translate_search"
            style={{
              position: "absolute",
              "z-index": "15",
              width: "47%",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <form
              style={{ margin: "0 auto" }}
              class="search__body"
              // onSubmit={() => router.push(`/search?sbrand=${searchInput ?? ''}`)}
              // action={`/search?sbrand=${searchInput}`}
            >
              <div class="search__shadow"></div>
              <input
                class="search__input"
                placeholder="Açar söz və ya hissə nömrəsini daxil edin"
                onChange={(e) => setSearchInput(e.target.value)}
                value={searchInput}
              />
              <Link
                style={{ right: "20px" }}
                class="search__button search__button--end"
                href={`/search?sbrand=${searchInput ?? ""}`}
              >
                <button
                  class="search__button-icon"
                  type="submit"
                  style={{
                    borderStyle: "none",
                    backgroundColor: "transparent",
                    fill: "black",
                  }}
                >
                  <svg width="20" height="20">
                    <path
                      d="M19.2,17.8c0,0-0.2,0.5-0.5,0.8c-0.4,0.4-0.9,0.6-0.9,0.6s-0.9,0.7-2.8-1.6c-1.1-1.4-2.2-2.8-3.1-3.9C10.9,14.5,9.5,15,8,15
                      c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7c0,1.5-0.5,2.9-1.3,4c1.1,0.8,2.5,2,4,3.1C20,16.8,19.2,17.8,19.2,17.8z M8,3C5.2,3,3,5.2,3,8
                      c0,2.8,2.2,5,5,5c2.8,0,5-2.2,5-5C13,5.2,10.8,3,8,3z"
                    />
                  </svg>
                </button>
              </Link>

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

        <Link
          class="d-flex"
          style={{
            height: "38px",
            position: "relative",
            width: "100px",
            right: "6%",
          }}
          href={`/wheel-calculator`}
        >
          <img
            style={{ width: "100px", position: "absolute" }}
            src={WheelCalculatorPng.src}
          />
        </Link>

        <div class="indicators" style={{ textDecoration: "none" }}>
          <div class="indicator indicator--trigger--click">
            <Link href={`/cart`} class="indicator__button">
              <span class="indicator__icon" style={{ left: "0px" }}>
                <svg width="32" height="32">
                  <circle cx="10.5" cy="27.5" r="2.5" />
                  <circle cx="23.5" cy="27.5" r="2.5" />
                  <path
                    d="M26.4,21H11.2C10,21,9,20.2,8.8,19.1L5.4,4.8C5.3,4.3,4.9,4,4.4,4H1C0.4,4,0,3.6,0,3s0.4-1,1-1h3.4C5.8,2,7,3,7.3,4.3
            l3.4,14.3c0.1,0.2,0.3,0.4,0.5,0.4h15.2c0.2,0,0.4-0.1,0.5-0.4l3.1-10c0.1-0.2,0-0.4-0.1-0.4C29.8,8.1,29.7,8,29.5,8H14
            c-0.6,0-1-0.4-1-1s0.4-1,1-1h15.5c0.8,0,1.5,0.4,2,1c0.5,0.6,0.6,1.5,0.4,2.2l-3.1,10C28.5,20.3,27.5,21,26.4,21z"
                  />
                </svg>
                <span
                  class="indicator__counter"
                  style={{ background: "orange", marginLeft: "20px" }}
                >
                  {cart?.length ?? 0}
                </span>
              </span>
              <span class="indicator__title" style={{ marginLeft: "50px" }}>
                Səbət
              </span>
              <span
                class="d-flex indicator__value align-items-baseline"
                style={{ marginLeft: "50px", fontSize: "16px" }}
              >
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
                        {/* 0 <img class="manatt" src="/static/images/manat.png" />{" "} */}
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
      <div
        style={{
          "border-top": "1px solid #ebebeb",
          height: "50px",
          display: "flex",
          "align-items": "center",
          backgroundColor: "#f2f2f2",
        }}
      >
        <div class="container">
          <div style={{ "align-items": "center" }}>
            <div class="header__navbar-menu">
              <div class="main-menu">
                <ul class="main-menu__list" style={{ textDecoration: "none" }}>
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
                    <Link href="/services" class="main-menu__link second-url">
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
                    <Link href="/my-videos/" class="main-menu__link second-url">
                      VİDEO BLOG
                    </Link>
                  </li>

                  <li class="main-menu__item main-menu__item--submenu--menu main-menu__item--has-submenu">
                    <Link
                      href="/credit-form/"
                      style={{ color: "#f25900" }}
                      class="main-menu__link second-url"
                    >
                      ONLİNE KREDİT MÜRACİƏTİ
                    </Link>
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
