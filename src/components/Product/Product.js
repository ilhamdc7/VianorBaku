import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faSnowflake, faSun } from "@fortawesome/free-solid-svg-icons";
import { addToCart } from "@/redux/reducers/cartSlice";
import { notification } from "antd";
import dynamic from "next/dynamic";
import FourSeason from '../../../assests/images/4_seasons.png'
const DateCountdown = dynamic(() => import("react-date-countdown-timer"), {
  loading: () => "Loading...",
  ssr: false,
});

const Product = ({ tire, companie, forSlider }) => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement) => {
    api.info({
      message: `Səbətə əlavə olundu`,
      icon: <FontAwesomeIcon icon={faCheckSquare} />,
      placement,
    });
  };



  console.log(tire, 'ksajidhusahd')

  const [date, setDate] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    setDate(new Date(companie?.end_date));
  }, []);

  const addToBasket = (data) => {
    dispatch(addToCart(data));
    openNotification("topRight");
  };





  function FourSeasonIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="256px"
        height="256"
        style={{ zoom: '0.1' }}
        fillRule="evenodd"
        clipRule="evenodd"
        imageRendering="optimizeQuality"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
      >
        <path
          fill="#f90"
          d="M123.5-.5h8c1.644.816 2.81 2.15 3.5 4a462.27 462.27 0 010 43c-5 5.333-10 5.333-15 0a462.27 462.27 0 010-43c.69-1.85 1.856-3.184 3.5-4z"
          opacity="0.98"
        ></path>
        <path
          fill="#f90"
          d="M39.5 34.5c3.15-.289 6.15.211 9 1.5L74 61.5c3.553 10.074.053 14.574-10.5 13.5L35 46.5c-1.526-5.261-.026-9.261 4.5-12z"
          opacity="0.958"
        ></path>
        <path
          fill="#f90"
          d="M208.5 34.5c9.104-1.062 12.938 2.938 11.5 12A514.302 514.302 0 01193.5 74c-10.074 3.553-14.574.053-13.5-10.5a390.544 390.544 0 0128.5-29z"
          opacity="0.962"
        ></path>
        <path
          fill="#00abf7"
          d="M131.5 255.5h-8a27.241 27.241 0 01-3.5-5l-1-34A816.97 816.97 0 0095.5 230c-6.743 1.799-10.743-.701-12-7.5.333-2.51 1.333-4.677 3-6.5a1552.334 1552.334 0 0032.5-18.5 504.815 504.815 0 00-.5-55 3302.481 3302.481 0 00-47.5 27l-1 39c-2.435 4.724-6.269 6.224-11.5 4.5-1.833-.5-3-1.667-3.5-3.5a308.649 308.649 0 00-2.5-29 622.713 622.713 0 01-26 14.5c-3.292.936-6.292.436-9-1.5-.826-.951-.992-1.951-.5-3a4945.307 4945.307 0 0155.5-33 94.235 94.235 0 0012-5.5c1.563-.759 2.563-1.926 3-3.5a4633.574 4633.574 0 0079-45 42.494 42.494 0 0011-5.5c1.563-.759 2.563-1.926 3-3.5a2706.013 2706.013 0 0056.5-32 3.942 3.942 0 012 1c1.098 4.005.265 7.505-2.5 10.5l-28 16c8.75 4.79 17.25 9.957 25.5 15.5 3.215 9.08.048 13.247-9.5 12.5a958.743 958.743 0 01-32-18.5 2146.144 2146.144 0 00-48 27.5 1726.057 1726.057 0 0048 28.5 758.053 758.053 0 0132-18.5c9.548-.747 12.715 3.42 9.5 12.5a309.79 309.79 0 00-24.5 15.5l26 15c3.712 2.602 4.878 6.102 3.5 10.5-2.226 4.361-5.726 5.861-10.5 4.5l-27-15.5-2.5 30c-2.513 3.712-6.013 4.878-10.5 3.5-2.602-.935-4.102-2.768-4.5-5.5a3646.49 3646.49 0 010-38l-48-28a542.165 542.165 0 00.5 57 337.45 337.45 0 0133.5 20c1.664 8.666-1.836 12.5-10.5 11.5a271.95 271.95 0 01-23.5-13.5l-1 35a20.673 20.673 0 01-3.5 4z"
          opacity="0.948"
        ></path>
        <path
          fill="#fe9900"
          d="M180.5 94.5c-.437 1.574-1.437 2.741-3 3.5a42.494 42.494 0 01-11 5.5c-17.2-22.704-38.533-27.537-64-14.5-20.738 16.02-25.738 35.853-15 59.5-.437 1.574-1.437 2.741-3 3.5a94.235 94.235 0 01-12 5.5c-14.043-30.399-8.71-56.899 16-79.5 26.571-18.19 52.905-17.857 79 1 5.297 4.455 9.63 9.621 13 15.5z"
          opacity="0.954"
        ></path>
        <path
          fill="#f90"
          d="M-.5 131.5v-8c1.582-2.47 3.915-3.97 7-4.5a342.33 342.33 0 0137 0c6.464 1.756 8.63 5.923 6.5 12.5l-3.5 3.5a462.27 462.27 0 01-43 0 19.564 19.564 0 00-4-3.5z"
          opacity="0.947"
        ></path>
      </svg>
    );
  }


  return (
    <>
      {contextHolder}
      <div
        class="block-products-carousel__column single_product"
        id="card-hover"
        style={forSlider && { width: '280px', marginLeft: '10px' }}
      >
        <div
          class="block-products-carousel__cell"
          style={{ flexDirection: "column", justifyContent: "start" }}
        >
          <div
            style={{
              height: "40px",
              backgroundColor: "#fff",
              justifyContent: "center",
              color: "#000",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              fontSize: "14px",
              alignItems: "center",
            }}
          >
            {" "}
          </div>
          {/* If else  */}
          {companie && (
            <div
              style={{
                height: "40px",
                backgroundColor: "#f25900",
                justifyContent: "center",
                color: "#000",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                fontSize: "14px",
                fontWeight: "bold",
                alignItems: "center",
              }}
            >
              {companie?.name}
            </div>
          )}

          <div class="product-card product-card--layout--grid">
            <img
              style={{ width: "80%", height: "50px", margin: "10px auto" }}
              src={tire?.model?.brend?.brand_image}
            />

            <div class="product-card__image">
              <div class="image image--type--product">
                <Link class="image__body" href={`/details/${tire?.id}`}>
                  <img
                    class="image__tag"
                    src={tire?.model?.model_image[0]?.tyre_images}
                    alt=""
                  />
                </Link>
              </div>
              {tire?.model?.season?.name === 'Yay' &&
                <>
                  <div className="season"
                    style={{ position: "absolute", bottom: "15px", right: "15px" }}
                  >
                    <FontAwesomeIcon style={{ width: '25px', height: '25px', objectFit: 'contain', color: 'orange' }} icon={faSun} />
                    <div className="season-desc-y"> Yay</div>
                  </div>

                </>
              }
              {tire?.model?.season?.name === 'M+S' &&
                <>
                  <div className="season"
                    style={{ position: "absolute", bottom: "15px", right: "15px" }}
                  >
                    <span>M+S</span>
                    <div className="season-desc-ms" > M+S</div>
                  </div>
                </>
              }
              {tire?.model?.season?.name === 'Qış' &&
                <>
                  <div className="season"
                    style={{ position: "absolute", bottom: "15px", right: "15px" }}
                  >
                    <FontAwesomeIcon style={{ width: '25px', height: '25px', objectFit: 'contain', color: '0ECEEC' }} icon={faSnowflake} />
                    <div className="season-desc-q">Qış</div>
                  </div>
                </>
              }
              {tire?.model?.season?.name === 'Dörd fəsil' &&
                <>
                  <div className="season"
                    style={{ position: "absolute", bottom: "15px", right: "15px" }}
                  >
                    <FourSeasonIcon />
                    <div class="season-desc-df" > Dörd fəsil</div>
                  </div>
                </>
              }
              <div
                style={{ position: "absolute", bottom: "15px", left: "15px" }}
              >
                {tire?.klass?.name === 'Minik' &&

                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAOCAYAAADaOrdAAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABqElEQVQ4Ea3UTygEYRjH8VkhKWKTECVJEgeKgxyk1OaGCwdcxEX2shdEOTk5OGwO2qKUJAfJSZGUAxcJNw7ag/w/SJLk+9M7mpl2dtvapz697/O+78w787yzG7ASRwPDIyjFj1mSbdpv08Zp13Br8rSaEKuf0Q5tYhujP23yCtouHKINaUUZq49xlOCqAcYmPOOV5Noo3zPuSrNcmWWNki/hwzPul6pkG4j4LdC4XWe1hejGKsahMtnzdK0io9YzfkIewzkeoHjHPZ6UBFCNZWhAN/1ELnTganWBfdh0/0JzGk8WNUy+IKxFK+hQJ8PRyP32EdGZ6PBOkclQRVSdbTTZNf8yOyjvQytusI5UZdFDDqMAu9AZqbwXGMSdzkSfq15L0YxrbEIl7Ifm/SKHiU4sQGc6hTgeoSpVIagn129DB6SvR/ksFJfQonJcIVH0MjiPAzM5RHuGqMm1cVg3nUE9ivEGZ7ySqBxB56Cjn0ffeY2+THGu1/3/Q6+nmvZAm7dAv369oV/or0fXqBracA7660kaJcwuYg8x1CFVhFiwhR1MQg/ril/L3k257nSYiwAAAABJRU5ErkJggg=="
                    style={{ width: "35px", display: "inline" }}
                    alt=""
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Minik"
                  />
                }
                {tire?.klass?.name === 'SUV 4X4' &&

                  <img
                    src="https://www.pngkey.com/png/full/71-719851_car-icons-suv-car.png"
                    style={{ width: "35px", display: "inline" }}
                    alt=""
                    data-toggle="tooltip"
                    data-placement="top"
                    title="SUV 4X4"
                  />
                }
              </div>
            </div>
            <ul class="product-card__info">
              <div class="product-card__name">
                <div>
                  <div class="product-card__badges">
                    {companie?.manat_discount >= 1 &&
                      <div class="tag-badge tag-badge--sale">-{companie?.manat_discount}₼</div>
                    }
                    {companie?.percent_discount >= 1 &&
                      <div class="tag-badge tag-badge--sale">-{companie?.percent_discount}%</div>
                    }
                    <div class="tag-badge tag-badge--new">Taksit
                      <div class="descc" style={{ textTransform: 'none' }}> Birkart, Bolkart, Ukart, Tamkart ilə 12 aya taksitə qədər əldə edə bilərsiniz.</div>
                    </div>
                    <div class="tag-badge tag-badge--hot">Kredit
                      <div class="descc" style={{ textTransform: 'none' }}> Şəxsiyyət vəsiqəsilə 3-18 aya qədər əldə edə bilərsiniz</div>
                    </div>
                  </div>

                  <div class="display-flex">
                    <div class="product__name">
                      <a href="/tyresdetail/38970/">{`${tire?.model?.brend?.title} ${tire?.model?.name}`}</a><br />
                      <b><span style={{ marginLeft: "3%" }}>
                        {`${tire?.en?.size}/${tire?.hundurluk?.size}${tire?.diametr?.size ? `/R${tire?.diametr?.size}` : ""
                          }`}
                      </span></b>
                      <b><span style={{ marginLeft: "3%" }}>
                        {`${tire?.load_index?.name ?? ""}${tire?.speed_index?.name ?? ""
                          }`}
                      </span></b>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
            {/* <ul class="product-card__info">
            <li class="product-card__meta" style={{ padding: "6px 0px" }}>
              <span class="product-card__meta-title">Ölkə :</span>
              {tire?.model?.brend?.country?.name ?? ''}
            </li>
            <li class="product-card__meta" style={{ padding: "6px 0px" }}>
              <span class="product-card__meta-title">Ölçü :</span>
              {`${tire?.en?.size}/${tire?.hundurluk?.size}${tire?.radius?.size ? `/R${tire?.radius?.size}` : ''}`}
            </li>
            <li class="product-card__meta" style={{ padding: "6px 0px" }}>
              <span class="product-card__meta-title">Miqdar :</span>4
            </li>
            <li class="product-card__meta" style={{ padding: "6px 0px" }}>
              <span class="product-card__meta-title">Fəsil :</span>
              Yay
            </li>
            <li class="product-card__meta" style={{ padding: "6px 0px" }}>
              <span class="product-card__meta-title">Tipi: </span>
              Minik
            </li>
          </ul> */}
            <div
              class="d-flex "
              style={{ justifyContent: "space-between", margin: "10px 0" }}
            >
              <div
                class="d-flex "
                style={{ marginLeft: "15px", alignItems: "flex-end" }}
              >
                {tire?.model?.brend?.country?.flag && (
                  <div className="flag-imgs">
                    <img
                      alt={`${tire?.model?.brend?.country?.name}`}
                      class="mr-2 flag-img"
                      src={tire?.model?.brend?.country?.flag}
                    />
                    <div className="descc">
                      <span>MƏNŞƏ:</span> {tire?.model?.brend?.country?.name}
                    </div>
                  </div>
                )}
                {tire?.executive_country?.flag && (
                  <div className="flag-imgs">
                    <img
                      alt={`${tire?.executive_country?.name}`}
                      class="mr-2 flag-img"
                      src={tire?.executive_country?.flag}
                    />
                    <div className="descc">
                      <span>MƏNSUBİYYƏT:</span> {tire?.executive_country?.name}
                    </div>
                  </div>
                )}
              </div>
              <div
                class="d-flex mt-2"
                style={{ marginRight: "15px", flexDirection: "column" }}
              >
                <span
                  style={{
                    fontSize: "12px",
                    color: "#000",
                    textAlign: "center",
                  }}
                >
                  Mövcud: {tire?.stock ?? 0}
                </span>
                <div style={{ display: "flex" }}>
                  <span
                    style={{ visibility: "hidden" }}
                    value="4"
                    class="stock"
                  >
                    4
                  </span>
                  {/* <button class="count_change change2">-</button>
                  <span id="change_count" class="mr-2 ml-2 count_change_span">
                    1
                  </span>
                  <button class="count_change  change">+</button> */}
                </div>
              </div>
            </div>

            <div class="product-card__footer">
              <div class="product-card__prices">
                {(companie?.manat_discount > 0 ||
                  companie?.percent_discount > 0) && (
                    <span class="d-flex product-card__price product-card__price--current align-items-baseline  discount_pricee ">
                      {tire?.price} <i className="azn">₼</i>
                    </span>
                  )}

                <div class="d-flex product-card__price product-card__price--current align-items-baseline ">
                  {companie?.manat_discount > 0 &&
                    tire?.price - companie?.manat_discount}
                  {companie?.percent_discount > 0
                    ? tire?.price -
                    (tire?.price * companie?.percent_discount) / 100
                    : ""}
                  {companie?.percent_discount === undefined &&
                    companie?.manat_discount === undefined
                    ? tire?.price
                    : ""}
                  <i className="azn">₼</i>
                </div>
              </div>

              <button
                class="product-card__addtocart-icon"
                data-id="38970"
                type="button"
                aria-label="Add to cart"
                onClick={() => addToBasket(tire)}
              >
                <svg width="20" height="20">
                  <circle cx="7" cy="17" r="2" />
                  <circle cx="15" cy="17" r="2" />
                  <path
                    d="M20,4.4V5l-1.8,6.3c-0.1,0.4-0.5,0.7-1,0.7H6.7c-0.4,0-0.8-0.3-1-0.7L3.3,3.9C3.1,3.3,2.6,3,2.1,3H0.4C0.2,3,0,2.8,0,2.6
                    V1.4C0,1.2,0.2,1,0.4,1h2.5c1,0,1.8,0.6,2.1,1.6L5.1,3l2.3,6.8c0,0.1,0.2,0.2,0.3,0.2h8.6c0.1,0,0.3-0.1,0.3-0.2l1.3-4.4
                C17.9,5.2,17.7,5,17.5,5H9.4C9.2,5,9,4.8,9,4.6V3.4C9,3.2,9.2,3,9.4,3h9.2C19.4,3,20,3.6,20,4.4z"
                  />
                </svg>
              </button>
              {/* <p
              data-toggle="tooltip"
              data-placement="top"
              title="Tooltip on top"
            >
              Tooltip on top
            </p> */}
            </div>
            <div className="prod-foot">{"YAG ALANA YAGDƏYİŞMƏ PULSUZ"}</div>
            {/* If else */}
            {companie?.end_date && (
              <div class="mytest prod-foot">
                <DateCountdown dateTo={date} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
