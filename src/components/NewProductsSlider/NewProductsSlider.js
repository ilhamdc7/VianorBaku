import React from "react";
import Product from "../Product/Product";
import Slider from "react-slick";


const NewProductsSlider = ({tires}) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3
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
        <Slider {...settings}>
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
