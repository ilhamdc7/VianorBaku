import Link from 'next/link'
import React from 'react'

const MarkaBody = ({markas}) => {
  return (
    <>
    <div class="block post-view mb-4 pb-4">
            <div class="post-view__header post-header">
                <div class="post-header__body">

                    <h1 class="post-header__title">Markalar</h1>

                </div>

            </div>
            <div class="container container--max--xl">
                <div class="post-view__body">
                    <div class="post-view__item post-view__item-post">
                        <div class="post-view__card post">
                            <div class="post__body typography">

                                <div class="block block-brands block-brands--layout--columns-5-full  bg-white">
                                    <div class="container container--max--xl">
                                        <ul class="block-brands__list border-0 m-0 p-0">
                                            <input type="hidden" name="csrfmiddlewaretoken" value="4voA5Bkl5MgLFqT3rQl5llOo43k4GRdT8ORXiEdxrFq5mp2xPEg9yB5OlsgHGFui"/>

                                    {markas?.map((marka) => (

                                            <li class="block-brands__item brand d-flex flex-column" style={{"cursor": "pointer"}}>


                                                <Link href="/tyre/filter/?page=1&brand=APOLLO" class="block-brands__item-link mb-0 pb-0">
                                        
                                           
                                            <img class="neeeded" src={`https://vianor.efgroup.az${marka?.brand_image}`} alt=""/>
                                          

                                        </Link>
                                            </li>
                                    ))}






                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="block-space block-space--layout--before-footer"></div>


        <div class="section-header__divider"></div>
    </>
  )
}

export default MarkaBody