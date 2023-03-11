import React from "react";

// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
// import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';

// import ImageGallery from 'react-image-gallery';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
const ProductLargeDescription = ({ product }) => {
  // const images = [9, 8, 7, 6, 5].map((number) => ({
  //   src: `https://placedog.net/${number}00/${number}00?id=${number}`
  // }));
  const images = [
    {
      original: "http://vianorbaku.az/media/tyres/1_zcLnFy1.png",
      thumbnail: "http://vianorbaku.az/media/tyres/1_zcLnFy1.png",
    },
    {
      original: "http://vianorbaku.az/media/tyres/1_SVHmmAm.jpg",
      thumbnail: "http://vianorbaku.az/media/tyres/1_SVHmmAm.jpg",
    },
    {
      original: "http://vianorbaku.az/media/tyres/1_zcLnFy1.png",
      thumbnail: "http://vianorbaku.az/media/tyres/1_zcLnFy1.png",
    },
  ];
  return (
    <>
      <div
        class="product-gallery product-gallery--layout--product-full product__gallery"
        data-layout="product-full"
      >
        <Carousel images={images} />
      </div>

      <div class="product__header">
        <a>
          <img
            style={{ width: "50%", margin: "10px auto" }}
            src={product?.model?.brend?.brand_image}
          />
        </a>
        <h1 class="product__title">{product?.model?.name}</h1>
      </div>
      <div class="product__main">
        <div class="product__excerpt">None</div>
        <div class="product__features">
          <div class="product__features-title">Əsas xüsusiyyətlər:</div>
          <ul>
            <li>
              En: <span>{product?.en?.size}</span>
            </li>

            <li>
              Hündürlük: <span>{product?.hundurluk?.size}</span>
            </li>

            <li>
              Diametr: <span>{product?.diametr?.size}</span>
            </li>

            <li>
              Miqdar: <span>{product?.model?.stock}</span>
            </li>

            <li>
              Klas: <span> SUV 4X4</span>
            </li>

            <li>
              Fəsil :<span> Dörd Fəsil</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProductLargeDescription;
