import React from "react";
import Product from "../Product/Product";
import Slider from "react-slick";
import styles from "./newProductSlider.module.css";

const NewProductsSlider = ({ tires }) => {
  const MAX_RENDERED_PRODUCTS = 24;
  const visibleTires = (tires || []).slice(0, MAX_RENDERED_PRODUCTS);
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      <div class="block-space block-space--layout--divider-nl"></div>
      <div class="block block-products-carousel py-2" data-layout="grid-5">
        <div class="container">
          <div class="section-header">
            <div class="section-header__body">
              <h2 class="section-header__title"> Yeni gələnlər </h2>

              <div class="section-header__spring"></div>

              <div class="section-header__divider"></div>
            </div>
          </div>
          {visibleTires.length >= 4 ? (
            <Slider {...settings} className={styles.slider}>
              {visibleTires.map((tire, index) => (
                <Product key={tire?.id || `new-${index}`} tire={tire} />
              ))}
            </Slider>
          ) : (
            <div className="d-flex align-items-center w-100">
              {visibleTires.map((tire, index) => (
                <Product key={tire?.id || `new-static-${index}`} tire={tire} forSlider={true} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NewProductsSlider;
