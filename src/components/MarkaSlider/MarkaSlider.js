import Link from "next/link";
import React from "react";
import Slider from "react-slick";


const MarkaSlider = ({brands}) => {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
      };

        
  return (
    <>
      <div class="block-space block-space--layout--divider-nl"></div>
      <div class="block brands-imagess" style={{backgroundColor:'white'}}>
        <div class="container">
          <div class="section-header">
            <div class="section-header__body">
              <h2 class="section-header__title">Markalar</h2>
              <div class="section-header__spring"></div>

              <div class="section-header__divider"></div>
            </div>
          </div>
          <div class="brands-images" >
            <Slider autoplay={true} {...settings}>
            {brands?.map((brand)=> (
              
              <Link
                href={`/search?brand=${brand?.title}`}
                class="image__body block-brands__item brand d-flex flex-column"
                style={{ width: "100%", cursor: "pointer", height:'80px' }}
              >
              <div style={{height:'80px', width:'fit-content', display:'flex', justifyContent:'center',alignItems:'center'}}>
                <img
                  class="image__tag brand-image"
                  src={brand?.brand_image}
                  style={{objectFit:'contain'}}
                  alt=""
                  />
                  </div>
              </Link>
            ) )}
              
            </Slider>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default MarkaSlider;
