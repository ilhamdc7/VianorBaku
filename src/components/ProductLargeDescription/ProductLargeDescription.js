import React from "react";

const ProductLargeDescription = ({product}) => {
  return (
    <>
      <div
        class="product-gallery product-gallery--layout--product-full product__gallery"
        data-layout="product-full"
      >
        <div class="product-gallery__featured">
          <button type="button" class="product-gallery__zoom">
            <svg width="24" height="24">
              <path
                d="M15,18c-2,0-3.8-0.6-5.2-1.7c-1,1.3-2.1,2.8-3.5,4.6c-2.2,2.8-3.4,1.9-3.4,1.9s-0.6-0.3-1.1-0.7
	c-0.4-0.4-0.7-1-0.7-1s-0.9-1.2,1.9-3.3c1.8-1.4,3.3-2.5,4.6-3.5C6.6,12.8,6,11,6,9c0-5,4-9,9-9s9,4,9,9S20,18,15,18z M15,2
	c-3.9,0-7,3.1-7,7s3.1,7,7,7s7-3.1,7-7S18.9,2,15,2z M16,13h-2v-3h-3V8h3V5h2v3h3v2h-3V13z"
              />
            </svg>
          </button>
          <div class="owl-carousel">sekil slider main</div>
        </div>
        <div class="mt-3 product-gallery__thumbnails">
          <div class="owl-carousel">
            <div class="product-gallery__thumbnails-item image image--type--product">
              <div class="image__body">
                <img
                  class="image__tag"
                  src={`https://vianor.efgroup.az${product?.model?.model_image[0]?.tyre_images}`}
                  alt=""
                />
              </div>
            </div>
            product slider asagi h
          </div>
        </div>
      </div>

      <div class="product__header">
        <a href="/tyresdetail/39083/">
          <img
            style={{ width: "50%", margin: "10px auto" }}
            src={`https://vianor.efgroup.az${product?.model?.brend?.brand_image}`}
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
