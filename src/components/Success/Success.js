import React from 'react'

const Success = () => {
  return (
    <>
    <div class="site__body">
            <div class="block-space block-space--layout--spaceship-ledge-height"></div>
            <div class="block order-success">
                <div class="container container--max--xl">
                    <div class="order-success__body">
                        <div class="order-success__header">
                            <div class="order-success__icon">
                                <svg width="100" height="100">
                                    <path d="M50,100C22.4,100,0,77.6,0,50S22.4,0,50,0s50,22.4,50,50S77.6,100,50,100z M50,2C23.5,2,2,23.5,2,50
        s21.5,48,48,48s48-21.5,48-48S76.5,2,50,2z M44.2,71L22.3,49.1l1.4-1.4l21.2,21.2l34.4-34.4l1.4,1.4L45.6,71
        C45.2,71.4,44.6,71.4,44.2,71z" />
                                </svg>
                            </div>
                            <h1 class="order-success__title">Təşəkkür edirik</h1>
                            <div class="order-success__subtitle">Sifarişiniz alındı</div>
                            <div class="order-success__actions">
                                <a href="/" class="btn btn-sm btn-secondary">Ana menuya qayıt</a>
                            </div>
                        </div>

                        <div class="card">
                            <div class="order-list">
                                <table>
                                    <thead class="order-list__header">
                                        <tr>
                                            <th class="order-list__column-label" colspan="2">Məhsul</th>
                                            <th class="order-list__column-quantity">Say</th>
                                            <th class="order-list__column-total">Ümumi</th>
                                        </tr>
                                    </thead>
                                    <tbody class="order-list__products">

                                    </tbody>
                                    <tbody class="asd " style={{"borderTop": "1px solid grey"}}>
                                        <tr>
                                            <th class="order-list__column-label" colspan="3">Çatdırılma</th>
                                            <td class="order-list__column-total deliver"></td>
                                        </tr>
                                    </tbody>
                                    <tfoot class="order-list__footer">
                                        <tr>
                                            <th class="order-list__column-label" colspan="3">Ümumi</th>
                                            <td class="order-list__column-total totalli"></td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="block-space block-space--layout--before-footer"></div>
        </div>


        <div class="section-header__divider"></div>
        
                                            
              
    </>
  )
}

export default Success