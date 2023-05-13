import React from "react";
import Link from "next/link";

const ServicesBody = ({services}) => {
  return (
    <>
      <div class="container">
        <div class="block-header__body">
          <h1 class="block-header__title">Xidmətlər</h1>
        </div>
      </div>
      <div class="container container--max--xl">
            <div class="block-banners__list py-3 row">
                {services?.map((service) => (
                <div class="posts-list__item col-12 col-md-6 col-xl-4 mb-4" >
                    <div class="post-card post-card--layout--grid-sm">
                        <div class="post-card__image">
                            <Link href={'/services/register'}>
                        <img style={{"padding": "10px", "width": "430px", "height": "300px"}} src={`${service?.image}`} alt=""/>
                    </Link>
                        </div>
                        <div class="post-card__content">

                            <div class="post-card__title">
                                <h2>{service?.name}</h2>
                            </div>

                            <div class="post-card__excerpt">
                                <div class="typography">
                                    {service?.description}
                                </div>
                            </div>
                            <div class="py-3">
                            <Link href={'/services/register'}>Xidmətə yazıl</Link>
                            </div>

                        </div>
                    </div>
                </div>
                ))}
                

            </div>
        </div>
    </>
  );
};

export default ServicesBody;
