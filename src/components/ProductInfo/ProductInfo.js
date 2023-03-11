import React from "react";

const ProductInfo = ({product}) => {
  return (
    <div class="product__info-body">
      <div class="tag-badge tag-badge--sale">-5%</div>

      <div class="tag-badge tag-badge--new">2 Taksit</div>

      <div class="tag-badge tag-badge--hot">Kredit</div>

      <div style={{ textAlign: "right" }}>
        <img
          src={product?.executive_country}
          style={{ width: "40px", display: "inline" }}
          alt=""
          data-toggle="tooltip"
          data-placement="top"
          title="Dörd Fəsil"
        />
      </div>
      <div class="product__prices-stock">
        <div class="product__prices">
          <div class="d-flex product__price product__price--current align-items-baseline  discount_pricee ">
            315
            <img class="manatt" src="/static/images/manat.png" />
          </div>

          <span class="d-flex mr-1 discount_font_up">
            300
            <img class="manat" src="/static/images/manat.png" />
          </span>
        </div>
        <div class="status-badge status-badge--style--success product__stock status-badge--has-text">
          <div class="status-badge__body">
            <div class="status-badge__text">Mövcuddur</div>
            <div
              class="status-badge__tooltip"
              tabindex="0"
              data-toggle="tooltip"
              title="In&#x20;Stock"
            ></div>
          </div>
        </div>
      </div>
      <div class="product__meta">
        <table>
          <tr>
            <th>Marka</th>
            <td>
              <a href="">NANKANG</a>
            </td>
          </tr>
          <tr>
            <th>Ölkə</th>
            <td> Tayvan</td>
          </tr>
        </table>
      </div>
      <div class="d-flex">
        {product?.model.brend?.country?.flag !== null && 
        
        <img
          alt="Tayvan"
          data-toggle="tooltip"
          data-placement="top"
          title="Tayvan"
          class="mr-2 flag-img"
          src={product?.model.brend?.country?.flag}
        />
        }
      </div>
    </div>
  );
};

export default ProductInfo;
