import React, {useState, useEffect} from 'react'
import { baseUrl } from '@/pages/api/api'
import { useRouter } from 'next/router'


const ServiceDetails = () => {

    const [services, setServices] = useState([])
    const [postInputs, setPostInputs] = useState(getEmptyInputs())

    const getServices = async() => {
        await baseUrl.get(`/services`)
        .then(res => {
            const {data} = res
            setServices(data)
        })
    }


    const router = useRouter()


    useEffect(() => {
        getServices()
    },[])



    const handleSubmit = (e) => {
        e.preventDefault()
        baseUrl.post(`/send-request`, {
            service: postInputs.service,
            name: postInputs.name,
            surname: postInputs.surname,
            number: postInputs.phone,
            avto_marka: postInputs.marka,
            avto_model : postInputs.model,
            avto_year: postInputs.year,
            date: postInputs.date,
            hour: postInputs.hour,
            comment: postInputs.comment
        }).then(res => {
            const {status} = res
            if(status >= 200 && status <= 300){
                router.push('/')
            }
        })
    }

    function getEmptyInputs(){
        return{
            service: null,
            name: null,
            surname: null,
            phone: null,
            marka: null,
            model: null,
            year: null,
            comment:null,
            date: null,
            hour: null
        }
    }

  return (
    <div class="site">

            <div class="site__body">
                <div class="block-space block-space--layout--after-header"></div>
                <div class="block">
                    <div class="container container--max--xl">

                        <div class="row justify-content-center">
                            <div class="col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="card ml-md-3 mr-md-3">
                                    <div class="card-body card-body--padding--2">
                                        <h1 class="card-title card-title--lg">Servisə qeydiyyat</h1>
                                        <p class="mb-4">
                                            Xidmətə yazılmaq üçün aşağıdakı məlumatları daxil edin
                                        </p>

                                        <form method="POST" onSubmit={handleSubmit}>
                                            <input type="hidden" name="csrfmiddlewaretoken" value="yPTJKSi6OV1wx7nCECeW429arqT8o0LkC8m6XVbiaObQe6w62q90hiqAIPPLoO2J"/>

                                            <div class="form-group service-name" data-service="TƏKƏRLƏRİN BALANSI">
                                                <label for="track-order-id">Xidmətin adı</label>
                                                <select onChange={(e) => setPostInputs({...postInputs,service:e.target.value })} style={{height:'200px'}} name="service_name" class="form-control" id="options" required multiple>
                                                    {services?.map((service) => (
                                                        <option value={service?.id}>{service?.name}</option>
                                                    ))}
                                                    </select>

                                            </div>

                                            <div class="form-group service-name" data-service="TƏKƏRLƏRİN BALANSI">
                                                <label for="track-order-id">Ad</label>
                                                <input onChange={(e) => setPostInputs({...postInputs, name:e.target.value})} type="text" name="name" class="form-control" placeholder="Ad" label="Ad" maxlength="128" required id="id_name"/>

                                            </div>

                                            <div class="form-group service-name" data-service="TƏKƏRLƏRİN BALANSI">
                                                <label for="track-order-id">Soyad</label>
                                                <input onChange={(e) => setPostInputs({...postInputs, surname:e.target.value})} type="text" name="surname" class="form-control" placeholder="Soyad" label="Soyad" maxlength="128" required id="id_surname"/>

                                            </div>

                                            <div class="form-group service-name" data-service="TƏKƏRLƏRİN BALANSI">
                                                <label for="track-order-id">Nömrə</label>
                                                <input onChange={(e) => setPostInputs({...postInputs, phone:e.target.value})} type="text" name="phone" class="form-control" placeholder="Telefon nömrəsi" id="phonenumber" label="Telefon nömrəsi(format: 050 999 99 99)" maxlength="15" required/>

                                            </div>

                                            <div class="form-group service-name" data-service="TƏKƏRLƏRİN BALANSI">
                                                <label for="track-order-id">Avto marka</label>
                                                <input onChange={(e) => setPostInputs({...postInputs, marka:e.target.value})} type="text" name="car_marka" class="form-control" placeholder="Avtomobilin markası" label="Avtomobilin markası" maxlength="128" required id="id_car_marka"/>

                                            </div>

                                            <div class="form-group service-name" data-service="TƏKƏRLƏRİN BALANSI">
                                                <label for="track-order-id">Avto model</label>
                                                <input onChange={(e) => setPostInputs({...postInputs, model:e.target.value})} type="text" name="car_model" class="form-control" placeholder="Avtomobilin modeli" label="Avtomobilin modeli" maxlength="128" required id="id_car_model"/>

                                            </div>

                                            <div class="form-group service-name" data-service="TƏKƏRLƏRİN BALANSI">
                                                <label for="track-order-id">Avto il</label>
                                                <input onChange={(e) => setPostInputs({...postInputs, year: e.target.value})} type="text" name="car_year" class="form-control" placeholder="Avtomobilin ili" label="Avtomobilin ili" maxlength="128" required id="id_car_year"/>

                                            </div>

                                            <div class="form-group service-name" data-service="TƏKƏRLƏRİN BALANSI">
                                                <label for="track-order-id">Komment</label>
                                                <textarea onChange={(e) => setPostInputs({...postInputs, comment:e.target.value})} name="comment" cols="40" rows="10" class="form-control" label="Kommentariya" maxlength="500" required id="id_comment">
</textarea>

                                            </div>

                                            <div class="form-group service-name" data-service="TƏKƏRLƏRİN BALANSI">
                                                <label for="track-order-id">Tarix</label>
                                                <input onChange={(e) => setPostInputs({...postInputs, date:e.target.value})} type="date" name="date" class="form-control" placeholder="Tarixi seç" required id="id_date"/>

                                            </div>

                                            <div class="form-group service-name" data-service="TƏKƏRLƏRİN BALANSI">
                                                <label for="track-order-id">Saat</label>
                                                <input onChange={(e) => setPostInputs({...postInputs, hour: e.target.value})} maxLength={5} type="text" name="time" class="form-control" id="time" label="Saat" placeholder="hh:mm" maxlength="6" required/>

                                            </div>


                                            <div class="form-group pt-4 mb-1">
                                                <button type="submit" class="btn btn-primary btn-lg btn-block">Xidmətə yazıl</button>
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

        </div>

  )
}

export default ServiceDetails