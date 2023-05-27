import React, {useEffect, useState} from "react";
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
const ProductLargeDescription = ({ product }) => {
  
  const [images, setImages] = useState([])

  useEffect(() => {
    setImages([])
    product?.model?.model_image?.map((image) => {
      setImages(images => [...images, {original: image?.tyre_images, thumbnail: image?.tyre_images}])
    })
  },[])



 


  // const images = [
  //   {
  //     original: "http://vianorbaku.az/media/tyres/1_zcLnFy1.png",
  //     thumbnail: "http://vianorbaku.az/media/tyres/1_zcLnFy1.png",
  //   },
  //   {
  //     original: "http://vianorbaku.az/media/tyres/1_SVHmmAm.jpg",
  //     thumbnail: "http://vianorbaku.az/media/tyres/1_SVHmmAm.jpg",
  //   },
  //   {
  //     original: "http://vianorbaku.az/media/tyres/1_zcLnFy1.png",
  //     thumbnail: "http://vianorbaku.az/media/tyres/1_zcLnFy1.png",
  //   },
  // ];
  return (
    <>
      <div
        class="product-gallery product-gallery--layout--product-full product__gallery"
        data-layout="product-full"
      >
        <Carousel shouldMaximizeOnClick={true} images={images} />
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
        {/* <div class="product__excerpt">None</div> */}
        {/* <div class="product__features">
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
              Miqdar: <span>{product?.stock}</span>
            </li>

            <li>
              Klas: <span> {product?.klass?.name}</span>
            </li>

            <li>
              Fəsil :<span> {product?.model?.season?.name}</span>
            </li>
          </ul>
        </div> */}
        <div class="product__actions">
      <h5>Xüsusiyyətlər:</h5>
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
          Marka: <span>{product?.model?.brend?.title}</span>
        </li>
        <li>
          Klas: <span>{product?.klass?.name}</span>
        </li>
        <li>
          Buraxılış ili: <span>{product?.year?.year}</span>
        </li>
        <li>
          Ölkə: <span>{product?.model?.brend?.country?.name}</span>
        </li>
      </ul>
      <div class="product__actions-divider"></div>
    </div>
      </div>
    </>
  );
};

export default ProductLargeDescription;
