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

  const rNote = product?.r_note;
  const klassName = product?.klass?.name ?? "";
  const klassNameLower = klassName.toLowerCase();
  const klassIcon =
    klassNameLower.includes("minik") || klassNameLower.includes("d klass")
      ? {
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAOCAYAAADaOrdAAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABqElEQVQ4Ea3UTygEYRjH8VkhKWKTECVJEgeKgxyk1OaGCwdcxEX2shdEOTk5OGwO2qKUJAfJSZGUAxcJNw7ag/w/SJLk+9M7mpl2dtvapz697/O+78w787yzG7ASRwPDIyjFj1mSbdpv08Zp13Br8rSaEKuf0Q5tYhujP23yCtouHKINaUUZq49xlOCqAcYmPOOV5Noo3zPuSrNcmWWNki/hwzPul6pkG4j4LdC4XWe1hejGKsahMtnzdK0io9YzfkIewzkeoHjHPZ6UBFCNZWhAN/1ELnTganWBfdh0/0JzGk8WNUy+IKxFK+hQJ8PRyP32EdGZ6PBOkclQRVSdbTTZNf8yOyjvQytusI5UZdFDDqMAu9AZqbwXGMSdzkSfq15L0YxrbEIl7Ifm/SKHiU4sQGc6hTgeoSpVIagn129DB6SvR/ksFJfQonJcIVH0MjiPAzM5RHuGqMm1cVg3nUE9ivEGZ7ySqBxB56Cjn0ffeY2+THGu1/3/Q6+nmvZAm7dAv369oV/or0fXqBracA7660kaJcwuYg8x1CFVhFiwhR1MQg/ril/L3k257nSYiwAAAABJRU5ErkJggg==",
          title: "Minik",
        }
      : klassNameLower.includes("suv")
      ? {
          src: "https://www.pngkey.com/png/full/71-719851_car-icons-suv-car.png",
          title: "SUV 4X4",
        }
      : klassNameLower.includes("yük")
      ? {
          src: "https://www.iconpacks.net/icons/1/free-truck-icon-1058-thumb.png",
          title: "Yük",
        }
      : null;



 


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
        style={{ position: "relative" }}
      >
        <Carousel shouldMaximizeOnClick={true} images={images} />
        {typeof rNote === "string" && rNote.trim() !== "" && (
          <div
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              width: "0",
              height: "0",
              borderTop: "95px solid #f25800",
              borderLeft: "95px solid transparent",
              zIndex: "3",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-83px",
                right: "6px",
                color: "#fff",
                textAlign: "center",
                lineHeight: "1.1",
                fontWeight: "700",
              }}
            >
              <div style={{ fontSize: "12px" }}>Klass</div>
              <div style={{ fontSize: "20px", lineHeight: "1" }}>{rNote}</div>
            </div>
          </div>
        )}
        {klassIcon && (
          <img
            src={klassIcon.src}
            alt={klassIcon.title}
            title={klassIcon.title}
            style={{
              position: "absolute",
              left: "12px",
              bottom: "70px",
              width: "34px",
              zIndex: "3",
            }}
          />
        )}
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
