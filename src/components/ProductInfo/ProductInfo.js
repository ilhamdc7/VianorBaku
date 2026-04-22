import React from "react";

const ProductInfo = ({product}) => {
  const textBadges = [product?.ev, product?.rf].filter(
    (item) => typeof item === "string" && item.trim() !== ""
  );
  const homologationLogos = [product?.homologasiya, product?.homologasiya_two].filter(
    (item) => item?.logo
  );
  const klassName = product?.klass?.name ?? "";
  const klassNameLower = klassName.toLowerCase();
  const klassIcon =
    klassNameLower.includes("minik") || klassNameLower.includes("d klass")
      ? {
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAOCAYAAADaOrdAAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABqElEQVQ4Ea3UTygEYRjH8VkhKWKTECVJEgeKgxyk1OaGCwdcxEX2shdEOTk5OGwO2qKUJAfJSZGUAxcJNw7ag/w/SJLk+9M7mpl2dtvapz697/O+78w787yzG7ASRwPDIyjFj1mSbdpv08Zp13Br8rSaEKuf0Q5tYhujP23yCtouHKINaUUZq49xlOCqAcYmPOOV5Noo3zPuSrNcmWWNki/hwzPul6pkG4j4LdC4XWe1hejGKsahMtnzdK0io9YzfkIewzkeoHjHPZ6UBFCNZWhAN/1ELnTganWBfdh0/0JzGk8WNUy+IKxFK+hQJ8PRyP32EdGZ6PBOkclQRVSdbTTZNf8yOyjvQytusI5UZdFDDqMAu9AZqbwXGMSdzkSfq15L0YxrbEIl7Ifm/SKHiU4sQGc6hTgeoSpVIagn129DB6SvR/ksFJfQonJcIVH0MjiPAzM5RHuGqMm1cVg3nUE9ivEGZ7ySqBxB56Cjn0ffeY2+THGu1/3/Q6+nmvZAm7dAv369oV/or0fXqBracA7660kaJcwuYg8x1CFVhFiwhR1MQg/ril/L3k257nSYiwAAAABJRU5ErkJggg==",
          title: "Minik",
        }
      : klassNameLower.includes("suv")
      ? {
          src: "https://www.pngkey.com/png/full/71-719851_car-icons-suv-car.png",
          title: "SUV 4X4",
        }
      : klassNameLower.includes("yük")
      ? {
          src: "https://www.iconpacks.net/icons/1/free-truck-icon-1058-thumb.png",
          title: "Yük",
        }
      : null;

  return (
    <div class="product__info-body">
      {!!product?.companies?.manat_discount &&
      
      <div class="tag-badge tag-badge--sale">-{product?.companies.discount}m</div>
      }
      {!!product?.companies?.percentage_discount &&
      
      <div class="tag-badge tag-badge--sale">-{product?.companies.discount}%</div>
      }

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
          {!!product?.companies?.manat_discount  &&
          <>
          <div class="d-flex product__price product__price--current align-items-baseline  discount_pricee ">
            {product?.price} ₼
          </div>
          <span class="d-flex mr-1 discount_font_up mt-3">
          {product?.price - product?.companies?.manat_discount} ₼
          </span>
          </>
          }
          {!product?.companies?.end_date  &&
          
          <span class="d-flex mr-1 discount_font_up">
          {product?.price} ₼

            <img class="manat" src="/static/images/manat.png" />
          </span>
          }
          {!!product?.companies?.percent_discount && 
          <>
          <div class="d-flex product__price product__price--current align-items-baseline  discount_pricee ">
            {product?.price} ₼
            <img class="manatt" src="/static/images/manat.png" />
          </div>
          <span class="d-flex mr-1 discount_font_up mt-3">
          {(product?.price - (product?.price * product?.companies?.percent_discount / 100)).toFixed()} ₼

            <img class="manat" src="/static/images/manat.png" />
          </span>
          </>
          
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
              <a>{product?.model?.brend?.title}</a>
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
      {(klassIcon || textBadges.length > 0 || homologationLogos.length > 0) && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            marginTop: "12px",
            paddingTop: "10px",
            borderTop: "1px solid #efefef",
          }}
        >
          {klassIcon && (
            <div>
              <img
                src={klassIcon.src}
                alt={klassIcon.title}
                title={klassIcon.title}
                style={{
                  width: "36px",
                  height: "24px",
                  objectFit: "contain",
                }}
              />
            </div>
          )}
          {textBadges.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {textBadges.map((badge, index) => (
                <span
                  key={`${badge}-${index}`}
                  style={{
                    backgroundColor: /^ev/i.test(badge) ? "#2eaf4a" : "#fff",
                    border: /^ev/i.test(badge)
                      ? "1px solid #2eaf4a"
                      : "1px solid #d2d2d2",
                    color: /^ev/i.test(badge) ? "#fff" : "#222",
                    borderRadius: "999px",
                    fontSize: "12px",
                    fontWeight: "700",
                    minWidth: "44px",
                    textAlign: "center",
                    padding: "3px 10px",
                    boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          )}
          {homologationLogos.length > 0 && (
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {homologationLogos.map((item, index) => (
                <div key={`${item?.name || "homolog"}-${index}`} style={{ position: "relative" }}>
                  <img
                    src={item?.logo}
                    alt={item?.name || "homologasiya"}
                    onMouseEnter={(e) => {
                      const tooltip = e.currentTarget.nextElementSibling;
                      if (tooltip) tooltip.style.opacity = "1";
                    }}
                    onMouseLeave={(e) => {
                      const tooltip = e.currentTarget.nextElementSibling;
                      if (tooltip) tooltip.style.opacity = "0";
                    }}
                    style={{
                      width: "42px",
                      height: "30px",
                      objectFit: "contain",
                      background: "#fff",
                      border: "1px solid #d9d9d9",
                      borderRadius: "6px",
                      padding: "3px",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                      cursor: "pointer",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      left: "50%",
                      bottom: "calc(100% + 6px)",
                      transform: "translateX(-50%)",
                      backgroundColor: "#222",
                      color: "#fff",
                      fontSize: "11px",
                      whiteSpace: "nowrap",
                      padding: "4px 7px",
                      borderRadius: "4px",
                      opacity: 0,
                      pointerEvents: "none",
                      transition: "opacity 0.15s ease-in-out",
                      zIndex: 9,
                    }}
                  >
                    {item?.name || "Homologasiya"}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductInfo;
