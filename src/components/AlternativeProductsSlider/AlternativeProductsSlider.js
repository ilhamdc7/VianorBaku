import React from "react";
import Product from "@/components/Product/Product";
import Slider from "react-slick";

const AlternativeProductsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div class="block-space block-space--layout--divider-nl"></div>
      <div class="block block-products-carousel" data-layout="grid-5">
        <div class="container container--max--xl">
          <div class="section-header">
            <div class="section-header__body">
              <h2 class="section-header__title">Alternativ məhsullar</h2>
              <div class="section-header__spring"></div>
              <div class="section-header__arrows">
                <div class="arrow section-header__arrow section-header__arrow--prev arrow--prev">
                  <button class="arrow__button" type="button">
                    <svg width="7" height="11">
                      <path d="M6.7,0.3L6.7,0.3c-0.4-0.4-0.9-0.4-1.3,0L0,5.5l5.4,5.2c0.4,0.4,0.9,0.3,1.3,0l0,0c0.4-0.4,0.4-1,0-1.3l-4-3.9l4-3.9C7.1,1.2,7.1,0.6,6.7,0.3z" />
                    </svg>
                  </button>
                </div>
                <div class="arrow section-header__arrow section-header__arrow--next arrow--next">
                  <button class="arrow__button" type="button">
                    <svg width="7" height="11">
                      <path
                        d="M0.3,10.7L0.3,10.7c0.4,0.4,0.9,0.4,1.3,0L7,5.5L1.6,0.3C1.2-0.1,0.7,0,0.3,0.3l0,0c-0.4,0.4-0.4,1,0,1.3l4,3.9l-4,3.9
	C-0.1,9.8-0.1,10.4,0.3,10.7z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="section-header__divider"></div>
            </div>
          </div>
          <Slider {...settings}>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </Slider>
        </div>
      </div>
    </>
  );
};

export default AlternativeProductsSlider;
