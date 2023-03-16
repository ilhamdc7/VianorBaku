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
              style={{ width: "50%", margin: "10px auto",height:'50px' }}
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
                  src="/static/images/summer.png"
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
                  src="/static/images/minik.png"
                  style={{ width: "35px", display: "inline" }}
                  alt=""
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Minik"
                />
              </div>
            </div>
            <div class="product-card__info">
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
                        <b>{`${tire?.en?.size}/${tire?.hundurluk?.size}${
                          tire?.radius?.size ? `/R${tire?.diametr?.size}` : ""
                        } ${tire?.load_index?.name ?? ""}${
                          tire?.speed_index?.name ?? ""
                        }`}</b>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
