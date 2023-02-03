import React from "react";
import Product from "../Product/Product";
import Slider from "react-slick";
import styles from './newProductSlider.module.css'


const NewProductsSlider = ({tires}) => {


      const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
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
        <Slider {...settings} className={styles.slider} >
          {tires?.map((tire) => (
            <Product tire={tire}/>
          ))}
        </Slider>
      </div>
    </div>
    </>
  );
};

export default NewProductsSlider;
