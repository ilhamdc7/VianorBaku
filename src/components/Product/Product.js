import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { addToCart } from "@/redux/reducers/cartSlice";
import { notification } from "antd";
import dynamic from "next/dynamic";
const DateCountdown = dynamic(() => import("react-date-countdown-timer"), {
  loading: () => "Loading...",
  ssr: false,
});

const Product = ({ tire, companie }) => {
  const [api, contextHolder] = notification.useNotification();


  console.log(tire, 'iyugytuafgytfty')

  const openNotification = (placement) => {
    api.info({
      message: `Səbətə əlavə olundu`,
      icon: <FontAwesomeIcon icon={faCheckSquare} />,
      placement,
    });
  };

  const [date, setDate] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    setDate(new Date(companie?.end_date));
  }, []);

  const addToBasket = (data) => {
    dispatch(addToCart(data));
    openNotification("topRight");
  };

  return (
    <>
      {contextHolder}
      <div
        class="block-products-carousel__column single_product"
        id="card-hover"
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
          {companie &&

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
          }

          <div class="product-card product-card--layout--grid">
            <img
              style={{ width: '80%', height: '50px', margin: '10px auto'}}
              src={
                tire?.model?.brend?.brand_image
              }
            />

            <div class="product-card__image">
              <div class="image image--type--product">
                <Link class="image__body" href={`/details/${tire?.id}`}>
                  <img
                    class="image__tag"
                    src={
                      tire?.model?.model_image[0]?.tyre_images
                    }
                    alt=""
                  />
                </Link>

              </div>
              <div
                style={{ position: "absolute", bottom: "15px", right: "15px" }}
              >
                <img
                  src="data:image/png;base64,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"
                  style={{ width: "30px", display: "inline-block" }}
                  alt=""
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Yay"
                />
              </div>
              <div
                style={{ position: "absolute", bottom: "15px", left: "15px" }}
              >
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAOCAYAAADaOrdAAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABqElEQVQ4Ea3UTygEYRjH8VkhKWKTECVJEgeKgxyk1OaGCwdcxEX2shdEOTk5OGwO2qKUJAfJSZGUAxcJNw7ag/w/SJLk+9M7mpl2dtvapz697/O+78w787yzG7ASRwPDIyjFj1mSbdpv08Zp13Br8rSaEKuf0Q5tYhujP23yCtouHKINaUUZq49xlOCqAcYmPOOV5Noo3zPuSrNcmWWNki/hwzPul6pkG4j4LdC4XWe1hejGKsahMtnzdK0io9YzfkIewzkeoHjHPZ6UBFCNZWhAN/1ELnTganWBfdh0/0JzGk8WNUy+IKxFK+hQJ8PRyP32EdGZ6PBOkclQRVSdbTTZNf8yOyjvQytusI5UZdFDDqMAu9AZqbwXGMSdzkSfq15L0YxrbEIl7Ifm/SKHiU4sQGc6hTgeoSpVIagn129DB6SvR/ksFJfQonJcIVH0MjiPAzM5RHuGqMm1cVg3nUE9ivEGZ7ySqBxB56Cjn0ffeY2+THGu1/3/Q6+nmvZAm7dAv369oV/or0fXqBracA7660kaJcwuYg8x1CFVhFiwhR1MQg/ril/L3k257nSYiwAAAABJRU5ErkJggg=="
                  style={{ width: "35px", display: "inline" }}
                  alt=""
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Minik"
                />
              </div>
            </div>
            <ul class="product-card__info">
              <div class="product-card__name">
                <div>
                  <div class="product-card__badges">
                    <div class="tag-badge tag-badge--sale">-16%</div>
                    <div class="tag-badge tag-badge--new">2 Taksit </div>
                    <div class="tag-badge tag-badge--hot">Kredit </div>
                  </div>

                  <div class="display-flex">
                    <div class="product__name">
                      <a href="/tyresdetail/38970/">{`${tire?.model?.brend?.title} ${tire?.model?.name}`}</a>
                      <span style={{ marginLeft: "3%" }}>
                        <b>{`${tire?.en?.size}/${tire?.hundurluk?.size}${tire?.radius?.size ? `/R${tire?.diametr?.size}` : ""
                          } ${tire?.load_index?.name ?? ""}${tire?.speed_index?.name ?? ""
                          }`}</b>
                      </span>
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
                class="d-flex"
                style={{ marginLeft: "15px", alignItems: "flex-end" }}
              >{tire?.model?.brend?.country?.flag &&
                <img
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Koreya"
                  alt="Koreya"
                  class="mr-2 flag-img"
                  src={tire?.model?.brend?.country?.flag}
                />
                }
                {tire?.executive_country?.flag &&
                  <img
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Koreya"
                    alt="Koreya"
                    class="mr-2 flag-img"
                    src={tire?.executive_country?.flag}
                  />
                }
              </div>
              <div
                class="d-flex"
                style={{ marginRight: "15px", flexDirection: "column" }}
              >
                <span
                  style={{
                    fontSize: "12px",
                    color: "#000",
                    textAlign: "center",
                  }}
                >
                  Mövcuddur : {tire?.stock ?? 0}
                </span>
                <div style={{ display: "flex" }}>
                  <span
                    style={{ visibility: "hidden" }}
                    value="4"
                    class="stock"
                  >
                    4
                  </span>
                  <button class="count_change change2">-</button>
                  <span id="change_count" class="mr-2 ml-2 count_change_span">
                    1
                  </span>
                  <button class="count_change  change">+</button>
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
