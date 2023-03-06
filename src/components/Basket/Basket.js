import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem } from '@/redux/reducers/cartSlice';
import Link from 'next/link';


const Basket = ({cart}) => {

  const [sumOfPriceProduct, setSumOfPriceProduct] = useState(null)
  const [count, setCount] = useState(0)
  const dispatch = useDispatch()





  useEffect(() => {
    setSumOfPriceProduct(null)
    cart?.forEach((tire) => {
     setSumOfPriceProduct(sumOfPriceProduct => (Number(tire?.price) * tire?.quantity) + sumOfPriceProduct )
    })
  },[count])



  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id))
    setCount(count => count + 1)
  }


  const handleDecremant = (id) => {
    dispatch(decrementQuantity(id))
    setCount(count => count - 1)
  }

  const handleDelete = (id) => {
    dispatch(removeItem(id))
    setCount(count => count + 1)
  }

  return (
    <div class="site__body">
      <div class="block-header block-header--has-breadcrumb block-header--has-title">
        <div class="container">
          <div class="block-header__body">
            <h1 class="block-header__title">Səbət</h1>
          </div>
        </div>
      </div>
      <div class="block">
        <div class="container container--max--xl">
          <div class="cart">
            <div class="cart__table cart-table">
              <table class="cart-table__table">
                <thead class="cart-table__head">
                  <tr class="cart-table__row">
                    <th class="cart-table__column cart-table__column--image">
                      Şəkil
                    </th>
                    <th class="cart-table__column cart-table__column--product">
                      Məhsul
                    </th>
                    <th class="cart-table__column cart-table__column--price">
                      Qiymət
                    </th>
                    <th class="cart-table__column cart-table__column--quantity">
                      Say
                    </th>
                    <th class="cart-table__column cart-table__column--total">
                      Ümumi
                    </th>
                    <th class="cart-table__column cart-table__column--remove"></th>
                  </tr>
                </thead>
                <tbody class="cart-table__body">
                  {cart?.map((tire) => (
                  <tr class="cart-table__row">
                    <td class="cart-table__column cart-table__column--image">
                      <div class="image image--type--product">
                        <a href="product-full.html" class="image__body">
                          <img
                            class="image__tag"
                            src={tire?.model?.model_image[0]?.tyre_images.slice(0,6) !== '/media' ? tire?.model?.model_image[0]?.tyre_images : `https://vianor.efgroup.az${tire?.model?.model_image[0]?.tyre_images}`}
                            alt=""
                          />
                        </a>
                      </div>
                    </td>
                    <td class="cart-table__column cart-table__column--product">
                      <a href="" class="cart-table__product-name">
                        {tire?.model?.name}
                      </a>
                      <ul class="cart-table__options">
                        <li>Eni: {tire?.en?.size}</li>
                        <li>Hündürlük: {tire?.hundurluk?.size}</li>
                        <li>Radius: {tire?.diametr?.size}</li>
                      </ul>
                    </td>
                    <td
                      class="cart-table__column cart-table__column--price"
                      data-title="Price"
                    >
                      {tire?.price} AZN
                    </td>
                    <td
                      class="cart-table__column cart-table__column--quantity"
                      data-title="Quantity"
                    >
                      <div class="cart-table__quantity input-number">
                        <button onClick={() => handleDecremant(tire?.id)} class="input-number__sub" style={{left:'0px'}}></button>
                        <input
                          price-data="300"
                          quantity-data=""
                          name="quantity"
                          class="input-number__input quantity border-0 py-2"
                          min="1"
                          max="4"
                          type="submit"
                          value={tire?.quantity}
                        />
                        <button onClick={() => handleIncrement(tire?.id)} class="input-number__add" style={{right: '0px'}}/>
                      </div>
                    </td>
                    <td
                      data-price=""
                      data-id=""
                      class="cart-table__column cart-table__column--total total total_price"
                      data-title="Total"
                    >
                      {tire?.price * tire?.quantity} AZN
                    </td>
                    <td class="cart-table__column cart-table__column--remove">
                      <button
                        name="remove"
                        data-id="39083"
                        type="button"
                        class="cart-table__remove btn btn-sm btn-icon btn-muted"
                        onClick={() => handleDelete(tire?.id)}
                      >
                        <svg width="12" height="12">
                          <path
                            d="M10.8,10.8L10.8,10.8c-0.4,0.4-1,0.4-1.4,0L6,7.4l-3.4,3.4c-0.4,0.4-1,0.4-1.4,0l0,0c-0.4-0.4-0.4-1,0-1.4L4.6,6L1.2,2.6
                                c-0.4-0.4-0.4-1,0-1.4l0,0c0.4-0.4,1-0.4,1.4,0L6,4.6l3.4-3.4c0.4-0.4,1-0.4,1.4,0l0,0c0.4,0.4,0.4,1,0,1.4L7.4,6l3.4,3.4
                                C11.2,9.8,11.2,10.4,10.8,10.8z"
                          ></path>
                        </svg>
                      </button>
                    </td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div class="cart__totals">
              <div class="card">
                <div class="card-body card-body--padding--2">
                  <h3 class="card-title">Səbət cəmi</h3>
                  <table
                    class="cart__totals-table"
                    style={{ marginBottom: "10px !important" }}
                  >
                    <tr>
                      <th>Məhsulların ümumi dəyəri</th>
                      <td class="totalling">{sumOfPriceProduct} ₼</td>
                    </tr>
                    <tr>
                      <th class="for-del">Çatdırılma</th>
                      0 ₼
                      <td class="adding">
                        <span class="delivery"></span>
                      </td>
                    </tr>
                  </table>
                  <div
                    style={{
                      borderBottom: "2px solid #ebebeb",
                      marginBottom: "5px",
                    }}
                  ></div>
                  <table
                    class="cart__totals-table"
                    style={{ marginBottom: "10px !important" }}
                  >
                    <tr>
                      <th>Ümumi</th>
                      <td class="totalling-sum">{sumOfPriceProduct} ₼</td>
                    </tr>
                  </table>
                  <Link class="btn btn-primary btn-xl btn-block" href="/checkout/">
                    Sifarişi rəsimləşdir
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="block-space block-space--layout--before-footer"></div>
    </div>
  );
}

export default Basket