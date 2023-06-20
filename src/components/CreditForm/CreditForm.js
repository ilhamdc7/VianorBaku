import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { isEmpty } from 'lodash'
import { baseUrl } from '@/pages/api/api'
import { notification } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";

const CreditForm = () => {

    const [postInputs, setPostInputs] = useState(getEmptyPostInputs())
    const [fileFirst, setFileFirst] = useState()
    const [countForm, setCountForm] = useState(['form'])
    const [family, setFamily] = useState([])
    const {query,push} = useRouter()



    const handleChange = (index, field, value) => {
        const checkIndex = family?.find(data => data.id === index)
            if(checkIndex){
                checkIndex[field] = value
                const newState = family?.filter(data => data.id !== index)
                setFamily([...newState, checkIndex])
            }else{
                const newObj = {id: index, [field]:value}
                setFamily([...family, newObj])
            }
            
        }
    useEffect(() => {
        if(!isEmpty(query)){
            setPostInputs({...postInputs, product_name:query?.name, product_price: query?.price, product_quantity: query?.quantity})
        }
    },[query])

    function getEmptyPostInputs(){
        return{
            product_name: '',
            product_price: '',
            product_quantity: ''
        }
    }
    const addCountForm = (e) => {
        e.preventDefault()
        setCountForm([...countForm, 'form'])
    }

    const handleUploadImage = async (file) => {
        // const blobFile = fileToDataUri(file);
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            setFileFirst(reader?.result)
        };
      };

      const [api, contextHolder] = notification.useNotification();

      const openNotification = (placement) => {
          api.info({
            message: `Müraciətiniz uğurla göndərildi`,
            icon: <FontAwesomeIcon icon={faCheckSquare} />,
            placement,
          });
        };

    const postForm = async(e) => {
        e.preventDefault()
        baseUrl.post(`apply/`, {
            ...postInputs,
            file_first: fileFirst
        },
        ).then(res => {
            const {status} = res
            if(status>=200 && status <= 300){
                openNotification('topRight')
                setTimeout(() => {
                    push('/')
                }, 1500);
            }
        })
    }

  return (
    <>
    {contextHolder}
    <div class="site__body">

                <div class="block post-view mb-4 pb-4">
                    <div class="post-view__header post-header">
                        <div class="post-header__body">

                            <h1 class="post-header__title"> ONLİNE KREDİT MÜRACİƏTİ</h1>

                        </div>
                        <div class="decor post-header__decor decor--type--bottom">
                            <div class="decor__body">
                                <div class="decor__start"></div>
                                <div class="decor__end"></div>
                                <div class="decor__center"></div>
                            </div>
                        </div>
                    </div>
                    <div class="container container--max--xl">
                        <div class="post-view__body">
                            <div class="post-view__item post-view__item-post">
                                <div class="post-view__card post">
                                    <div class="post__body typography">
                                        <form onSubmit={(e) => postForm(e)} class="" method="POST" enctype="multipart/form-data">
                                            <input type="hidden" name="csrfmiddlewaretoken" value="udH8CV6QWtJkyoigB1iRwl8ocHrVRg5gUSPz24AgHFsPlhmiRxZk0pzDkIDlRDbK"/>
                                            <label style={{"fontWeight": "700","color": "#fc5800","fontSize": "24px", "fontStyle": "italic"}}>Müştəri</label>
                                            <div class="form-row">
                                                <div class="form-group col-md-3">
                                                    <label for="form-name">Pinkod
                                                <span style={{"color": "red"}}>*</span>
                                            </label>
                                                    <input onChange={(e) => setPostInputs({...postInputs, fin_code: e.target.value})} name="finkod" type="text" class="form-control" required/>
                                                </div>
                                                <div class="form-group col-md-3">
                                                    <label for="form-name">Ad
                                                <span style={{"color": "red"}}>*</span>
                                            </label>
                                                    <input onChange={(e) => setPostInputs({...postInputs, first_name: e.target.value})} name="name" type="text" class="form-control" required/>
                                                </div>
                                                <div class="form-group col-md-3">
                                                    <label for="form-name">Soyad
                                                <span style={{"color": "red"}}>*</span>
                                            </label>
                                                    <input onChange={(e) => setPostInputs({...postInputs, surname: e.target.value})} name="surname" type="text" class="form-control" required/>
                                                </div>
                                                <div class="form-group col-md-3">
                                                    <label for="form-name">Ata adı
                                                <span style={{"color": "red"}}>*</span>
                                            </label>
                                                    <input onChange={(e) => setPostInputs({...postInputs, father_name: e.target.value})} name="father_name" type="text" class="form-control" required/>
                                                </div>
                                                <div class="form-group col-md-3">
                                                    <label for="form-name">Doğum tarixi
                                                <span style={{"color": "red"}}>*</span>
                                            </label>
                                                    <input onChange={(e) => setPostInputs({...postInputs, birth_date: e.target.value})} name="birth_date" type="date" class="form-control" required/>
                                                </div>
                                                <div class="form-group col-md-3">
                                                    <label for="form-name">Cinsi
                                                <span style={{"color": "red"}}>*</span>
                                            </label>
                                                    <select onChange={(e) => setPostInputs({...postInputs, gender: e.target.value})} name="gender" class="form-control" required>
                                                <option>
                                                </option>
                                                <option value={'qadin'}>Qadın
                                                </option>
                                                <option value={'kisi'}>Kişi
                                                </option>
                                            </select>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label for="form-name">Ölkə
                                                <span style={{"color": "red"}}>*</span>
                                            </label>
                                                    <input onChange={(e) => setPostInputs({...postInputs, country: e.target.value})} name="country" type="text" class="form-control" required/>
                                                </div>
                                            </div>
                                            <label style={{"fontWeight": "700","color": "#fc5800","fontSize": "24px", "fontStyle": "italic"}}>Şəxsiyyət vəsiqəsi</label>
                                            <div class="form-row">
                                                <div class="form-group col-md-3">
                                                    <label for="form-name">Seriya və nömrəsi
                                                <span style={{"color": "red"}}>*</span>
                                            </label>
                                                    <input onChange={(e) => setPostInputs({...postInputs, serial_number: e.target.value})} name="serial_number" type="text" class="form-control" required/>
                                                </div>
                                                 <div class="form-group col-md-2">
                                            <label for="form-name">Nömrə</label>
                                            <input name="" type="text" class="form-control" 
                                            required=""/>
                                        </div> 
                                                <div class="form-group col-md-3">
                                                    <label for="form-name">Verən orqan
                                                <span style={{"color": "red"}}>*</span>
                                            </label>
                                                    <input onChange={(e) => setPostInputs({...postInputs, organ_name: e.target.value})} name="given_place" type="text" class="form-control" required/>
                                                </div>
                                                <div class="form-group col-md-3">
                                                    <label for="form-name">Verilmə tarixi
                                                <span style={{"color": "red"}}>*</span>
                                            </label>
                                                    <input onChange={(e) => setPostInputs({...postInputs, gived_date: e.target.value})} type="date" name="given_date" class="form-control" id="form-name" required/>
                                                </div>
                                                <div class="form-group col-md-3">
                                                    <label for="form-name">Bitmə tarixi
                                                <span style={{"color": "red"}}>*</span>
                                            </label>
                                                    <input onChange={(e) => setPostInputs({...postInputs, end_date: e.target.value})} type="date" name="expire_date" class="form-control" id="form-name" required/>
                                                </div>
                                            </div>
                                            <label style={{"fontWeight": "700","color": "#fc5800","fontSize": "24px", "fontStyle": "italic"}}>
                                        Nəqliyyat vasitəsi haqqında məlumat</label>
                                            <div class="form-row">
                                                <div class="form-group col-md-12">
                                                    <select required name="drive_status" class="form-control" onChange={(e) => setPostInputs({...postInputs, about_car: e.target.value})}>
                                                  <option></option>
                                                  <option value={'Nəqliyyat vasitəsi mənə məxsusdur'}>Nəqliyyat vasitəsi mənə məxsusdur
                                                  </option>
                                                  <option value={'Nəqliyyat vasitəsinə sərəncam verilməsinə dair etibarnaməm var'}>Nəqliyyat vasitəsinə sərəncam verilməsinə dair etibarnaməm var
                                                  </option>
                                                  <option value={'Nəqliyyat vasitəsindən istifadə edilməsinə dair etibarnaməm var'}>Nəqliyyat vasitəsindən istifadə edilməsinə dair etibarnaməm var
                                                  </option>
                                              </select>
                                                </div>
                                            </div>
                                            <label style={{"fontWeight": "700","color": "#fc5800","fontSize": "24px", "fontStyle": "italic"}}>Ünvanlar</label>
                                            <div class="form-row">
                                                <div class="col-md-6">
                                                    <label style={{"color": "#fc5800","fontSize": "16px"}}> Qeydiyyat ünvanı
                                                <span style={{"color": "red"}}>*</span></label>
                                                    <div class="form-row">
                                                        <div class="form-group col-md-12">
                                                            <input onChange={(e) => setPostInputs({...postInputs, register_location: e.target.value})} name="registry_adress" type="text" class="form-control" required/>
                                                        </div>
                                                       
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label style={{"color": "#fc5800","fontSize": "16px"}}>Faktiki unvan
                                                <span style={{"color": "red"}}>*</span></label>
                                                    <div class="form-row">
                                                        <div class="form-group col-md-12">
                                                            <input onChange={(e) => setPostInputs({...postInputs, actual_location: e.target.value})} name="real_adress" type="text" class="form-control" required/>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <label style={{"fontWeight": "700","color": "#fc5800","fontSize": "24px", "fontStyle": "italic"}}>Mallar</label>
                                            <div class="form-row">
                                                <div class="form-group col-md-4">
                                                    <label for="form-name">Məhsul
                                                <span style={{"color": "red"}}>*</span>
                                            </label>
                                                    <input disabled type="text" name="product-name" class="form-control" id="form-name" readonly placeholder=" Təkər"/>
                                                </div>
                                                <div class="form-group col-md-8">
                                                    <label for="form-name">Model
                                                <span style={{"color": "red"}}>*</span>
                                            </label>

                                                    <input value={postInputs.product_name} onChange={(e) => setPostInputs({...postInputs, product_name: e.target.value})} type="text" name="protectors" class="form-control" id="form-name" required/>

                                                </div>
                                                <div class="form-group col-md-4">
                                                    <label for="form-name">Qiymət
                                                <span style={{"color": "red"}}>*</span>
                                            </label>
                                                    <input value={postInputs.product_price} onChange={(e) => setPostInputs({...postInputs, product_price: e.target.value})} type="text" placeholder="0" name="product-price" class="form-control" id="pricee" required/>
                                                </div>
                                                <div class="form-group col-md-4">
                                                    <label for="form-name">Say
                                                <span style={{"color": "red"}}>*</span>
                                            </label>

                                                    <input value={postInputs.product_quantity} onChange={(e) => setPostInputs({...postInputs, product_quantity: e.target.value})} type="text" placeholder="0" name="product-count" class="product-count form-control" id="count" required/>


                                                </div>
                                                <div class="form-group col-md-4">
                                                    <label for="form-name">Cəm
                                                <span  style={{"color": "red"}}>*</span>
                                            </label>
                                                    <input value={Number(postInputs?.product_price) * Number(postInputs?.product_quantity)} readonly type="text" placeholder="0" name="total" class="form-control product-total" id="form-name" required/>
                                                </div>
                                            </div>
                                            <label style={{"fontWeight": "700","color": "#fc5800","fontSize": "24px", "fontStyle": "italic"}}>Telefon</label>
                                            <div class="form-row">
                                                <div class="form-group col-md-3">
                                                    <label for="form-name">Nömrə 1
                                                <span style={{"color": "red"}}>*</span>
                                            </label>
                                                    <input onChange={(e) => setPostInputs({...postInputs, first_number: e.target.value})} type="tel" placeholder="[XXX] -XXX -XX -XX" name="phone-number" class="form-control" id="form-name" required/>
                                                </div>
                                                <div class="form-group col-md-3">
                                                    <label for="form-name">Tip
                                                <span style={{"color": "red"}}>*</span>
                                            </label>
                                                    <select onChange={(e) => setPostInputs({...postInputs, first_type: e.target.value})} name="phone-type" class="form-control" required>
                                                <option>
                                                </option>
                                                <option value={'Ev'}>Ev
                                                </option>
                                                <option value='Mobil'>Mobil
                                                </option>
                                            </select>
                                                </div>
                                                <div class="form-group col-md-3">
                                                    <label for="form-name">Sahibi
                                                <span style={{"color": "red"}}>*</span>
                                            </label>
                                                    <input onChange={(e) => setPostInputs({...postInputs, first_owner: e.target.value})} type="text" name="owner" class="form-control" id="form-name" required/>
                                                </div>
                                                <div class="form-group col-md-3">
                                                    <label for="form-name">Qohumluq əlaqəsi
                                                <span style={{"color": "red"}}>*</span>
                                            </label>
                                                    <input onChange={(e) => setPostInputs({...postInputs, first_relation: e.target.value})} type="text" name="relation" class="form-control" id="form-name" required/>
                                                </div>
                                                <div class="form-group col-md-3">
                                                    <label for="form-name">Nömrə  2
                                                <span style={{"color": "red"}}>*</span>
                                            </label>
                                                    <input onChange={(e) => setPostInputs({...postInputs, second_number: e.target.value})} type="tel" placeholder="[XXX] -XXX -XX -XX" name="phone-number" class="form-control" id="form-name" required/>
                                                </div>
                                                <div class="form-group col-md-3">
                                                    <label for="form-name">Tip
                                                <span style={{"color": "red"}}>*</span>
                                            </label>
                                                    <select onChange={(e) => setPostInputs({...postInputs, second_type: e.target.value})} name="phone-type" class="form-control" required>
                                                <option>
                                                </option>
                                                <option value={'Ev'}>Ev
                                                </option>
                                                <option value={'Mobil'}>Mobil
                                                </option>
                                            </select>
                                                </div>
                                                <div class="form-group col-md-3">
                                                    <label for="form-name">Sahibi
                                                <span style={{"color": "red"}}>*</span>
                                            </label>
                                                    <input onChange={(e) => setPostInputs({...postInputs, second_owner: e.target.value})} type="text" name="owner" class="form-control" id="form-name" required/>
                                                </div>
                                                <div class="form-group col-md-3">
                                                    <label for="form-name">Qohumluq əlaqəsi
                                                <span style={{"color": "red"}}>*</span>
                                            </label>
                                                    <input onChange={(e) => setPostInputs({...postInputs, second_relation: e.target.value})} type="text" name="relation" class="form-control" id="form-name" required/>
                                                </div>
                                                
                                                

                                            </div>
                                            {/* <label style={{"fontWeight": "700","color": "#fc5800","fontSize": "24px", "fontStyle": "italic"}}>Ailə üzvü</label>
                                            <button onClick={(e) => addCountForm(e)} style={{"outline":"none","float": "right","background": "transparent", "border": "none", "color": "#fc5800","fontSize": "24px"}} class="add-button">Ailə üzvlərini əlavə et +</button>
                                            <div class="repeat">
                                                {countForm?.map((fml,index) => (
                                                <div class=" repeat_row">
                                                    <div class="row">
                                                        <div class="form-group col-md-6">
                                                            <label for="form-name">A.S.A
                                                            <span style={{"color": "red"}}>*</span>
                                                        </label>
                                                            <input required type="text" name="relation-data" onChange={(e) => handleChange(index, 'fullname', e.target.value)} class="form-control" id="form-name"/>
                                                        </div>
                                                        <div class="form-group col-md-6">
                                                            <label for="form-name">Qohumluğu
                                                        <span style={{"color": "red"}}>*</span>
                                                    </label>
                                                            <input required onChange={(e) => handleChange(index, 'relation', e.target.value)} type="text" name="relation-type" class="form-control" id="form-name"/>
                                                        </div>
                                                        <div class="form-group col-md-6">
                                                            <label for="form-name">Əmək haqqı
                                                            <span style={{"color": "red"}}>*</span>
                                                        </label>
                                                            <input required onChange={(e) => handleChange(index, 'salary', e.target.value)} type="text" placeholder="0" name="salary" class="form-control"/>
                                                        </div>
                                                        <div class="form-group col-md-6">
                                                            <label for="form-name">Telefon
                                                            <span style={{"color": "red"}}>*</span>
                                                        </label>
                                                            <input required onChange={(e) => handleChange(index, 'phone', e.target.value)} name="relation-phone" type="tel" placeholder="[XXX] -XXX -XX -XX" class="form-control"/>
                                                        </div>
                                                        <div class="form-group col-md-12">
                                                            <label for="form-name">İş yeri
                                                        <span style={{"color": "red"}}>*</span>
                                                    </label>
                                                            <input required onChange={(e) => handleChange(index, 'work', e.target.value)} name="relation-work" type="text" class="form-control"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                ))}

                                            </div> */}
                                            <label style={{"fontWeight": "700","color": "#fc5800","fontSize": "24px", "fontStyle": "italic"}}>Faktiki Kredit</label>
                                            <div class="form-row">
                                                <div class="form-group col-md-4">
                                                    <label for="form-name">Bankın adı
                                                <span style={{"color": "red"}}>*</span>
                                            </label>
                                                    <input onChange={(e) => setPostInputs({...postInputs, bank_name: e.target.value})} type="text" name="bank-name" class="form-control" id="form-name" required/>
                                                </div>
                                                <div class="form-group col-md-4">
                                                    <label for="form-name">Kredit məbləği
                                                <span style={{"color": "red"}}>*</span>
                                            </label>
                                                    <input onChange={(e) => setPostInputs({...postInputs, credit_count: e.target.value})} type="text" name="credit-count" class="form-control" id="form-name" required/>
                                                </div>
                                                <div class="form-group col-md-4">
                                                    <label for="form-name">Gecikmə
                                                <span style={{"color": "red"}}>*</span>
                                            </label>
                                                    <select onChange={(e) => setPostInputs({...postInputs, bank_late: e.target.value})} name="credit-late" class="form-control" required>
                                                <option>
                                                </option>
                                                <option value={'Bəli'}>Bəli
                                                </option>
                                                <option value={'Xeyr'}>Xeyr
                                                </option>
                                            </select>
                                                </div>

                                            </div>
                                            <label style={{"fontWeight": "700","color": "#fc5800","fontSize": "24px", "fontStyle": "italic"}}>Kredit müracəti üçün lazım olan sənədlər</label>
                                            <div class="form-row">
                                                <div class="form-group col-md-6">
                                                    <label for="form-name">Şəxsiyyət vəsiqəsi
                                                <span style={{"color": "red"}}>*</span>
                                            </label>
                                                    <input onChange={(e) => handleUploadImage(e.target.files[0])} type="file" name="shexsiyyet" class="form-control" id="form-name" />
                                                </div>

                                                <div class="form-group col-md-6">
                                                    <label for="form-name">Avtomobilin qeydiyyat şəhadətnaməsi
                                                <span style={{"color": "red"}}>*</span>
                                            </label>
                                                    <input type="file" name="qeydiyyat" class="form-control" id="form-name" />
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label for="form-name">Sürücülük vəsiqəsi
                                                <span style={{"color": "red"}}>*</span>
                                            </label>
                                                    <input type="file" name="license" class="form-control" id="form-name" />
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label for="form-name">Etibarnamə
                                                <span style={{"color": "red"}}>*</span>
                                            </label>
                                                    <input type="file" name="etibarname" class="form-control" id="form-name" />
                                                </div>
                                            </div>
                                            <div class="form-group ">
                                                <button type="submit" style={{"position": "relative","left": "0"}} value="Göndər" class="btn btn-primary">Göndər</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="block-space block-space--layout--before-footer"></div>
            </div>
    </>
  )
}

export default CreditForm