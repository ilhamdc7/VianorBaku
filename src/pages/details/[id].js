import React, {useState, useEffect} from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ProductLargeDescription from "@/components/ProductLargeDescription/ProductLargeDescription";
import ProductInfo from "@/components/ProductInfo/ProductInfo";
import DescriptionServices from "@/components/DescriptionServices/DescriptionServices";
import DescriptionSpecs from "@/components/DescriptionSpecs/DescriptionSpecs";
import DescriptionCalc from "@/components/DescriptionCalc/DescriptionCalc";
import AlternativeProductsSlider from "@/components/AlternativeProductsSlider/AlternativeProductsSlider";
import { baseUrl } from "../api/api";
import MobileHeader from '@/components/MobileHeader/MobileHeader'
const Description = ({product}) => {

  console.log(product,'hsaudhuisauidsh')

const [width, setWidth] = useState('')
const [height, setHeight] = useState('')
const [diametr, setDiametr] = useState('')
const [similarTyres, setSimilarTyres] = useState([])



 const getSimilarTyres = async() => {
  await baseUrl.get(`/tyre-filter?width=${width}&height=${height}&diametr=${diametr}`)
  .then(res => setSimilarTyres(res.data.results))
}


useEffect(() => {
  setWidth(product?.en?.size)
  setHeight(product?.hundurluk?.size)
  setDiametr(product?.diametr?.size)
},[])


useEffect(() => {
  getSimilarTyres()
},[width, height, diametr])

  return (
    <>
    <MobileHeader/>
      <Header />
      <div class="site__body">
        <div class="block-header block-header--has-breadcrumb">
          <div class="container">
            <div class="block-header__body">
              <nav
                class="breadcrumb block-header__breadcrumb"
                aria-label="breadcrumb"
              ></nav>
            </div>
          </div>
        </div>
        <div class="block-split">
        <div class="container container--max--xl">
          <div class="block-split__row row no-gutters">
            <div class="block-split__item block-split__item-content col-auto">
              <div class="product product--layout--full">
                <div class="product__body">
                  <div class="product__card product__card--one"></div>
                  <div class="product__card product__card--two"></div>
                  <ProductLargeDescription product={product}/>
                  <div class="product__info">
                    <div class="product__info-card">
                      <div class="product-form product__form bg-whi">
                        <ProductInfo product={product} />
                      </div>
                      <DescriptionServices />
                      <div class="product-form product__form"></div>
                      <DescriptionSpecs />
                      <div class="product-form product__form"></div>

                      <div class="product__actions">
                        <div class="product__actions-item product__actions-item--addtocart">
                          <button
                            class="btn btn-primary btn-lg btn-block adding-to-card"
                            data-id="39083"
                          >
                            S??b??t?? at
                          </button>
                        </div>
                        <div class="product__actions-divider"></div>
                      </div>
                      <div class="product-form product__form"></div>
                      <div class="product__actions">
                        <div>
                          {product?.taksitCards?.map((card) => (
                          <img className="mb-3" width={'65px'} height="35px" style={{margin:'0px 5px'}} src={card?.image} />
                          ))}
                          
                        </div>

                        <h5 class="product__title">
                          {" "}
                          Taksit kartlar?? il?? al????
                        </h5>
                        <div
                          class="shop-features__item-subtitle"
                          style={{ "font-size": "16px" }}
                        >
                          2 ayl??q taksit il?? aya 150
                          <img
                            style={{ height: "8px !important" }}
                            class="manatt"
                            src="/static/images/manat.png"
                          />
                        </div>
                        <div class="product__actions-divider"></div>
                      </div>
                    </div>
                  </div>
                  <div class="spec"></div>
                  <DescriptionCalc product={product}/>
                </div>
              </div>
              
              <AlternativeProductsSlider tyres={similarTyres}/>
            </div>
          </div>
        </div>
      </div>
      <div class="block-space block-space--layout--before-footer"></div>
      </div>
  
      <Footer />
    </>
  );
};

export default Description;


export async function getServerSideProps(context) {
    const {id} = context.query
    const {data} = await baseUrl.get(`/tyres_detail/${id}/`)
    return {
      props: {
        product:data
      }
    }
  }