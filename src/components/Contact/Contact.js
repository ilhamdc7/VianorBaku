import React, {useState} from 'react'
import { baseUrl } from '@/pages/api/api'
import { notification } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {

    const [contactForm, setContactForm] = useState(getEmptyContactForm())
    const [api, contextHolder] = notification.useNotification();

    const openNotification = (placement) => {
        api.info({
          message: `Mesajınız göndərildi`,
          icon: <FontAwesomeIcon icon={faCheckSquare} />,
          placement,
        });
      };
    


    const handleSubmit = (e) => {
        e.preventDefault()
        baseUrl.post(`contact/`, {
            ...contactForm
        }).then(res => {
            const {status} = res
            if(status >= 200 && status <= 300){
                setContactForm({...contactForm, name: '', message: '', email: '', subject: ''})
                openNotification('topRight')
            }
        })
    }

    function getEmptyContactForm(){
        return {}
    } 



  return (
    <>
    {contextHolder}
    <div class="site">

            <div class="site__body">
                <div class="block-map block">
                    <div class="block-map__body">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.77342505136!2d49.909096915850384!3d40.391713979368014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d24606bf59d%3A0xbdd528600852009a!2sNokian%20Tyres%20Baku%20077%20651%201010!5e0!3m2!1saz!2s!4v1628232255692!5m2!1saz!2s"
                            frameborder='0' scrolling='no' marginheight='0' marginwidth='0'></iframe>
                    </div>
                </div>
                <div style={{"marginTop": "30px"}} class="block-header block-header--has-breadcrumb block-header--has-title">
                    <div class="container">
                        <div class="block-header__body" >
                            <nav style={{height:'100px'}} class="breadcrumb block-header__breadcrumb" aria-label="breadcrumb">

                            <h1 style={{"paddingTop": "30px","paddingBottom": "40px"}} class="block-header__title">Bizimlə əlaqə</h1>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="block">
                    <div class="container container--max--xl">
                        <div class="card">
                            <div class="card-body card-body--padding--2">
                                <div class="row">
                                    <div class="col-12 col-lg-6 pb-4 pb-lg-0">
                                        <div class="mr-1">

                                            <h4 class="contact-us__header card-title">Ünvanımız:</h4>
                                            <div class="contact-us__address">
                                                <p>
                                                    Babək pr.38  

                                                </p>
                                                <p>
                                                    E-mail: info@vianorbaku.az

                                                </p>


                                                <p>
                                                     İş saatları: 9:00 - 20:00

                                                </p>
                                                <p>
                                                    Telefon nömrəsi:  +994 (12) 424 07 53 <span style={{marginLeft:'20px'}}>+994 (77) 406 10 10</span>


                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-lg-6">
                                        <div class="ml-1">
                                            <h4 class="contact-us__header card-title">Bizə yazın</h4>
                                            <form class="contact-form" onSubmit={handleSubmit} method="POST">
                                                <div class="form-row">
                                                    <input type="hidden" name="csrfmiddlewaretoken" value="bmfS0xps6YVo5QYbR8bpWIO2tNnFIdubB1njqGTSRaETSJ2d7ESSqMfhBOz5IAAF"/>


                                                    <div class="form-group col-md-6">
                                                        <label for="form-name">Adınız</label>
                                                        <input value={contactForm.name} onChange={(e) => setContactForm({...contactForm, name: e.target.value})} type="text" name="name" class="form-control" id="form-name" maxlength="100" required/>

                                                    </div>



                                                    <div class="form-group col-md-6">
                                                        <label for="form-email">E-mail</label>
                                                        <input value={contactForm.email} onChange={(e) => setContactForm({...contactForm, email: e.target.value})} type="email" name="email" class="form-control" id="form-email" maxlength="254" required/>

                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <label for="form-subject">Mövzu</label>
                                                    <input value={contactForm.subject} onChange={(e) => setContactForm({...contactForm, subject: e.target.value})} type="text" name="subject" class="form-control" id="form-subject" maxlength="255" required/>

                                                </div>



                                                <div class="form-group">
                                                    <label for="form-message">Mesaj</label>
                                                    <textarea value={contactForm.message} onChange={(e) => setContactForm({...contactForm, message: e.target.value})} name="message" cols="25" rows="4" class="form-control" id="form-message" required>
                                                    </textarea>

                                                </div>


                                                <div class="form-group ">
                                                    <span style={{"display": "none;"}} id="msg">Mesajınız uğurla göndərildi. Müraciətiniz üçün təşəkkür edirik</span>
                                                    <div class="g-recaptcha" data-sitekey="6LdOyPEcAAAAAEHDyQcoHzGdjLRksTVVKQlT6kdj"></div>
                                                    <button type="submit" style={{"position": "relative"}} class="btn btn-primary mt-4">
                                                        <span  disabled type="button">Mesaj göndər</span>
                                                    </button>
                                                </div>

                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="block-space block-space--layout--before-footer"></div>
            </div>

        </div>
    </>
  )
}

export default Contact