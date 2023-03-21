import React from "react";

const ProductInfo = ({product}) => {
  return (
    <div class="product__info-body">
      <div class="tag-badge tag-badge--sale">-5%</div>

      <div class="tag-badge tag-badge--new">Taksit</div>

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
          {product?.discount > 0 &&
          
          <div class="d-flex product__price product__price--current align-items-baseline  discount_pricee ">
            {product?.price}
            <img class="manatt" src="/static/images/manat.png" />
          </div>
          }
          {!product?.discount ?
          
          <span class="d-flex mr-1 discount_font_up">
          {product?.price}

            <img class="manat" src="/static/images/manat.png" />
          </span>
          : 
          <span class="d-flex mr-1 discount_font_up">
          {product?.price}

            <img class="manat" src="/static/images/manat.png" />
          </span>
          }
        </div>
        <div class="status-badge status-badge--style--success product__stock status-badge--has-text">
          <div class="status-badge__body">
            {product?.stock >= 1 && 
            
            <div class="status-badge__text">Mövcuddur</div>
            }
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
            <td> {product?.model?.brend?.country?.name}</td>
          </tr>
        </table>
      </div>
      <div class="d-flex">
        {product?.model?.brend?.country?.flag !== null && 
        
        <img
          alt="Tayvan"
          data-toggle="tooltip"
          data-placement="top"
          title={`${product?.model?.brend?.country?.name}`}
          class="mr-2 flag-img"
          src={product?.model?.brend?.country?.flag}
        />
        }
      </div>
    </div>
  );
};

export default ProductInfo;
