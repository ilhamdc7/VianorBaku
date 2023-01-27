import React from "react";
import Link from "next/link";

const Product = ({ tire }) => {

  console.log(tire, 'asjhdysgd')

  return (
    <Link href={`/details/${tire?.id}`}>
    <div class="block-products-carousel__column" id="card-hover">
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

        <div class="product-card product-card--layout--grid">
          <a
            style={{ height: "70px", display: "flex", alignItems: "center" }}
            href="/tyresdetail/38970/"
          >
            <img
              style={{ width: "50%", margin: "10px auto" }}
              src={tire?.model?.brend?.brand_image}
            />
          </a>
          <div class="product-card__image">
            <div class="image image--type--product">
              <a href="/tyresdetail/38970/" class="image__body">
                <img
                  class="image__tag"
                  src={tire?.model?.model_image[0]?.tyre_images}
                  alt=""
                />
              </a>
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
            <div style={{ position: "absolute", bottom: "15px", left: "15px" }}>
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
                  <div class="tag-badge tag-badge--hot">Kredit </div>
                </div>

                <div class="display-flex">
                  <div class="product__name">
                    <a href="/tyresdetail/38970/">Kinergy eco2 K435</a>
                    <br />
                    <b> 195/65R15 91T</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul class="product-card__info">
            <li class="product-card__meta" style={{ padding: "6px 0px" }}>
              <span class="product-card__meta-title">Ölkə :</span>
              Koreya
            </li>
            <li class="product-card__meta" style={{ padding: "6px 0px" }}>
              <span class="product-card__meta-title">Ölçü :</span>
              195/65R15
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
          </ul>
          <div class="d-flex " style={{ justifyContent: "space-between;" }}>
            <div
              class="d-flex"
              style={{ marginLeft: "15px", alignItems: "flex-end" }}
            >
              <img
                data-toggle="tooltip"
                data-placement="top"
                title="Koreya"
                alt="Koreya"
                class="mr-2 flag-img"
                src="/media/country/flag-korea.png"
              />
            </div>
            <div
              class="d-flex"
              style={{ marginRight: "15px", flexDirection: "column" }}
            >
              <span
                style={{ fontSize: "12px", color: "#000", textAlign: "center" }}
              >
                {" "}
                Mövcuddur : 4{" "}
              </span>
              <div style={{ display: "flex" }}>
                <span style={{ visibility: "hidden" }} value="4" class="stock">
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
              <div class="d-flex product-card__price product-card__price--current align-items-baseline ">
                115 <img class="manatt" src="/static/images/manat.png" />
              </div>
            </div>

            <button
              class="product-card__addtocart-icon"
              data-id="38970"
              type="button"
              aria-label="Add to cart"
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
            <p
              data-toggle="tooltip"
              data-placement="top"
              title="Tooltip on top"
            >
              Tooltip on top
            </p>
          </div>
        </div>
      </div>
    </div>

    </Link>
  );
};

export default Product;
