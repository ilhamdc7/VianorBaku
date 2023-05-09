import React from 'react'

const AboutUs = ({about}) => {
  return (
    <>
    <div class="site">

        <div class="site__body">
            <div class="block-map block" style={{"backgroundPosition": "center","backgroundSize": "100% 100%", "backgroundRepeat": "no-repeat","position": "relative", "backgroundImage": `url(${about?.image})`}}>
            </div>
            <div class="block post-view mb-4 pb-4">
                <div class="post-view__header post-header">
                    <div class="post-header__body">

                        <h1 class="post-header__title">Haqqımızda</h1>

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
                            <div class="post-view__card post" dangerouslySetInnerHTML={{__html: about?.text}}>
                                

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="block-space block-space--layout--before-footer"></div>
        </div>
       \

</div>
    </>
  )
}

export default AboutUs