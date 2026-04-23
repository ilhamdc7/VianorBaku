import React, { useState, useEffect } from "react";
import Product from "../Product/Product";
import Slider from "react-slick";
import styles from "./companiesSlider.module.css";

const CompaniesSlider = ({ compaines, title }) => {
  const MAX_RENDERED_PRODUCTS = 24;
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

  const [length, setLength] = useState(0);
  const flattenedProducts =
    compaines?.flatMap((group) => group?.products || []) || [];
  const visibleProducts = flattenedProducts.slice(0, MAX_RENDERED_PRODUCTS);

  useEffect(() => {
    let length = 0;
    compaines?.forEach((tyres) => {
      length += tyres?.products?.length;
    });
    setLength(length);
  }, [compaines?.length]);

  return (
    <>
      <div class="block-space block-space--layout--divider-nl"></div>
      <div class="block block-products-carousel py-2" data-layout="grid-5">
        <div class="container">
          <div class="section-header">
            <div class="section-header__body">
              <h2 class="section-header__title"> {title} </h2>

              <div class="section-header__spring"></div>

              <div class="section-header__divider"></div>
            </div>
          </div>
          {visibleProducts.length >= 4 ? (
            <Slider {...settings} className={styles.slider}>
              {visibleProducts.map((tyre, index) => (
                <Product key={tyre?.id || `${title}-${index}`} tire={tyre} />
              ))}
            </Slider>
          ) : (
            <div className="d-flex align-items-center w-100">
              {visibleProducts.map((tyre, index) => (
                <Product
                  key={tyre?.id || `${title}-static-${index}`}
                  tire={tyre}
                  forSlider={true}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CompaniesSlider;
