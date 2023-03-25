import React from "react";
import Link from "next/link";
const Banners = () => {
  return (
    <>
      <div class="block-space block-space--layout--divider-nl"></div>
      <div class="block-space block-space--layout--divider-lg"></div>
      <div class="block-banners block">
        <div class="container">
          <div class="block-banners__list">
            <Link
              href="/services/register"
              style={{ textDecoration: "none" }}
              class="block-banners__item block-banners__item--style--one"
            >
              <span class="block-banners__item-image">
                <img src="https://wallpapercave.com/wp/wp3056683.jpg" alt="" />
              </span>
              <span class="block-banners__item-image block-banners__item-image--blur">
                <img src="https://wallpapercave.com/wp/wp3056683.jpg" alt="" />
              </span>
              <span class="block-banners__item-title">Yağ dəyişmə</span>
              <span class="block-banners__item-details">
                Mühərrik və Transmissiya yaglarının satışı və dəyişdirilməsi
                <br />
                Mühərriklərə xidmət
              </span>
              <span class="block-banners__item-button btn btn-primary btn-sm">
                İndi al
              </span>
            </Link>
            {/* <Link
              href="/services/register"
              style={{ textDecoration: "none" }}
              class="block-banners__item block-banners__item--style--two"
            >
              <span class="block-banners__item-image">
                <img src="https://wallpapercave.com/wp/wp3056683.jpg" alt="" />
              </span>
              <span class="block-banners__item-image block-banners__item-image--blur">
                <img src="https://wallpapercave.com/wp/wp3056683.jpg" alt="" />
              </span>
              <span class="block-banners__item-title">Təkərlərin balansı</span>
              <span class="block-banners__item-details">
                Avtomobil təkərlərinin balansı xidməti həyata keçirilir
                <br />
              </span>
              <span class="block-banners__item-button btn btn-primary btn-sm">
                İndi al
              </span>
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Banners;
