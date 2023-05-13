import React, {useEffect, useState} from "react";
import {calcCredit} from '../../calc/calc'
import { useRouter } from "next/router";



const DescriptionCalc = ({product}) => {

  const [calculatedPrice, setCalculatedPrice] = useState(0)
  const [monthValue,setMonthValue] = useState(3)
  const [percentageValue,setPercentageValue] = useState(1.111)
  const [quantity,setQuantity] = useState(1)
  const [creditCalcPrice, setCreditCalcPrice] = useState()

  const router = useRouter()

  useEffect(() => {
    if(!!product?.companies?.manat_discount){
      const price = product?.price - product?.companies?.manat_discount
      setCreditCalcPrice(price)
    }else if(!!product?.companies?.percent_discount){
      const price = product?.price - (product?.price * product?.companies?.percent_discount / 100)
      setCreditCalcPrice(price?.toFixed())
    }else{
      setCreditCalcPrice(product?.price)
    }
  },[product?.companies?.manat_discount, product?.companies?.percent_discount])


  useEffect(() => {
    if(monthValue > 0, percentageValue > 0, creditCalcPrice){
      const calculatedPrice = calcCredit(creditCalcPrice,percentageValue,monthValue, quantity)
      setCalculatedPrice(calculatedPrice)
    }
  },[monthValue, quantity,creditCalcPrice])


  const handleChangeMonth = (month, percentage) => {
    setMonthValue(month)
    setPercentageValue(percentage)
  }


  const changeQuantity = (value) => {
    setQuantity(value.replace(/\D/g))
  }

  const linktoCreditForm = () => {
    router.push({
      pathname: '/credit-form',
      query: {quantity: quantity, price: product?.price, name: product?.model?.name}
    })
  }

  return (
    <div class="product__tabs product-tabs product-tabs--layout--full">
      <h2 class="text-center p-3 m-0 credit-title">Kredit ilə hesablama</h2>
      <ul class="product-tabs__list  prog_wrapp">
        <li onClick={() => handleChangeMonth(3,1.111)} className={`product-tabs__item ${monthValue === 3 && 'product-tabs__item--active'}`}>
          <a>3</a>
        </li>

        <li onClick={() => handleChangeMonth(6,1.176)} className={`product-tabs__item ${monthValue === 6 && 'product-tabs__item--active'}`}>
          <a>6</a>
        </li>

        <li onClick={() => handleChangeMonth(9,1.235)} className={`product-tabs__item ${monthValue === 9 && 'product-tabs__item--active'}`}>
          <a>9</a>
        </li>

        <li onClick={() => handleChangeMonth(12,1.316)} className={`product-tabs__item ${monthValue === 12 && 'product-tabs__item--active'}`}>
          <a>12</a>
        </li>

        <li onClick={() => handleChangeMonth(15,1.37)} className={`product-tabs__item ${monthValue === 15 && 'product-tabs__item--active'}`}>
          <a>15</a>
        </li>

        <li onClick={() => handleChangeMonth(18,1.449)} className={`product-tabs__item ${monthValue === 18 && 'product-tabs__item--active'}`}>
          <a>18</a>
        </li>
      </ul>
      <div class="product-tabs__content p-0">
        <div class="row p-5">
          <div class="col-12 col-md-6 text-center">
            Miqdar :<br />
            <input
              id="miqdar"
              type="text"
              value={quantity}
              class="mt-3 form-control text-center"
              style={{ backgroundColor: "#fff" }}
              onChange={(e) => changeQuantity(e.target.value)}
            />
          </div>
          <div class="col-12 col-md-6 text-center">
            <div
              class="product-tabs__pane p-0 product-tabs__pane--active"
              id="3"
            >
              <div>
                <span class="wrapper_month_pay">
                  Aylıq ödəniş
                  <br />
                  <span
                    class="d-flex odenis mt-3 form-control text-center"
                    style={{ fontSize: "18px", alignItems: "center" }}
                    data-value="111"
                  >
                    {(calculatedPrice * quantity).toFixed(0)}
                    <img
                      style={{ height: "8px !important" }}
                      class="manatt"
                      src="/static/images/manat.png"
                    />
                  </span>
                </span>
              </div>
            </div>

          </div>
          <div class="col-12 col-md-6 m-auto">
              <button
              onClick={linktoCreditForm}
              data-id="39083"
              class="btn btn-primary btn-lg btn-block adding-to-card mt-4 kredit_form"
            >
              Kredit Müraciət
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionCalc;
