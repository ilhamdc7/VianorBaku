import { baseUrl } from '@/pages/api/api'
import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import {useMount} from 'ahooks'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { removeAllItem } from '@/redux/reducers/cartSlice'


const Checkout = () => {


    const {cart} = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const [postInputs, setPostInputs] = useState(getPostInputs())
    const [sumOfPriceProduct, setSumOfPriceProduct] = useState(null)
    const [postCart, setPostCart] = useState([])
    const router = useRouter()

  const handlePhoneNumberChange = (event) => {
    const inputValue = event.target.value;
    if (!inputValue) {
        setPostInputs({...postInputs, phone: '994'})
    } else {
        setPostInputs({...postInputs, phone: inputValue.replace(/\D/g)})
    }
  };

    useEffect(() => {
        setSumOfPriceProduct(null)
        cart?.forEach((tire) => {
         setSumOfPriceProduct(sumOfPriceProduct => (Number(tire?.price) * tire?.quantity) + sumOfPriceProduct )
        })
      },[cart])


    function getPostInputs(){
        return{
            name: '',
            surname: '',
            phone: '994',
            email: '',

        }
    }


    
    useMount(() => {
        setPostCart([])
            cart?.forEach((element) => {
            setPostCart(postCart => [...postCart, {tyre: element?.id, quantity: element?.quantity}])
            })
    })


   

    const handlePostCart = (e) => {
        e.preventDefault()
         baseUrl.post(`/order/`, {
            name: postInputs.name,
            surname: postInputs.surname,
            email: postInputs.email,
            total: sumOfPriceProduct,
            phone_number: postInputs.phone,
            order_item: postCart

        }).then(res => {
            const {status} = res
            if(status>= 200 && status <= 300){
                router.push('/success')
                dispatch(removeAllItem([]))
            }
        })
    }

  return (
    <div class="site__body">
            <div class="block-header block-header--has-breadcrumb block-header--has-title">
                <div class="container">
                    <div class="block-header__body">
                        <h1 class="block-header__title">Yoxla</h1>
                    </div>
                </div>
            </div>
            <div class="checkout block">
                <div class="container container--max--xl">
                    <div class="row">
                        <div class="col-12 col-lg-6 col-xl-7">
                            <div class="card mb-lg-0">
                                <div class="card-body card-body--padding--2">
                                    <h3 class="card-title">Faktura detalları</h3>
                                    <form method="post">
                                        <input type="hidden" name="csrfmiddlewaretoken" value="kYejDs1hpCtbeiNEOKI7ZHden3kwBdHmKDmK3BvHaOcG1bRG4gpAtLEtv4wWBANQ"/>
                                        <div class="for-hidden">

                                        </div>
                                        <div class="form-row">


                                            <div class="form-group col-md-6">
                                                <label for="checkout-first-name">Ad</label>
                                                <input onChange={(e) => setPostInputs({...postInputs, name: e.target.value})} type="text" name="first_name" class="form-control" id="checkout-first-name" placeholder="First Name" maxlength="50" required/>
                                            </div>

                                            <div class="form-group col-md-6">
                                                <label for="checkout-last-name">Soyad</label>
                                                <input onChange={(e) => setPostInputs({...postInputs, surname: e.target.value})} type="text" name="last_name" class="form-control" id="checkout-last-name" placeholder="Last Name" maxlength="50" required/>
                                            </div>

                                            <div class="form-group col-md-6">
                                                <label for="checkout-email">Elektron poçt ünvanı</label>
                                                <input onChange={(e) => setPostInputs({...postInputs, email: e.target.value})} type="email" name="email" class="form-control" id="checkout-email" placeholder="Email address" required maxlength="50"/>
                                            </div>

                                            <div class="form-group col-md-6">
                                                <label for="checkout-phone">Telefon nömrəsİ</label>
                                                <input value={postInputs.phone} onChange={(e) => handlePhoneNumberChange(e)} type="text" name="phone" class="form-control" id="checkout-phone" placeholder="Phone" required maxlength="50"/>
                                            </div> 

                                        </div>

                                        <div class="g-recaptcha" data-sitekey="6LdOyPEcAAAAAEHDyQcoHzGdjLRksTVVKQlT6kdj"></div>
                                        <button onClick={handlePostCart} type="submit" class="btn btn-primary btn-xl btn-block my-btn">Sifariş et</button>
                                    </form>
                                </div>
                                <div class="card-divider"></div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-6 col-xl-5 mt-4 mt-lg-0">
                            <div class="card mb-0">
                                <div class="card-body card-body--padding--2">
                                    <h3 class="card-title">Sizin sifarişiniz</h3>
                                    <table class="checkout__totals">
                                        <thead class="checkout__totals-header">
                                            <tr>
                                                <th>Məhsul</th>
                                                <th>Ümumi</th>
                                            </tr>
                                        </thead>
                                        <tbody class="checkout__totals-products">


                                            <tr>
                                                <td>Çatdırılma</td>
                                                <td><span class="delivery">0 ₼</span> </td>
                                            </tr>
                                            {cart?.map((crt) => (
                                            <tr>
                                                <td>{crt?.model?.name}</td>
                                                <td><span class="delivery">{Number(crt?.price) * crt?.quantity} ₼</span> </td>
                                            </tr>
                                            ))}

                                        </tbody>
                                        <tfoot class="checkout__totals-footer">
                                            <tr>
                                                <th>Ümumi</th>
                                                <td class="totals">{sumOfPriceProduct} ₼</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="block-space block-space--layout--before-footer"></div>
        </div>
  )
}

export default Checkout