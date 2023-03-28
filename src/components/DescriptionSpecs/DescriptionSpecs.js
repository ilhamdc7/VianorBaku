import React from "react";

const DescriptionSpecs = ({product}) => {
  return (
    <div class="product__actions">
      <h5>Xüsusiyyətlər:</h5>
      <ul>
        <li>
          En: <span>{product?.en?.size}</span>
        </li>
        <li>
          Hündürlük: <span>{product?.hundurluk?.size}</span>
        </li>
        <li>
          Diametr: <span>{product?.diametr?.size}</span>
        </li>
        <li>
          Marka: <span>{product?.model?.brend?.title}</span>
        </li>
        <li>
          Klas: <span>{product?.klass?.name}</span>
        </li>
        <li>
          Buraxılış ili: <span>{product?.year?.year}</span>
        </li>
        <li>
          Ölkə: <span>{product?.model?.brend?.country?.name}</span>
        </li>
      </ul>
      <div class="product__actions-divider"></div>
    </div>
  );
};

export default DescriptionSpecs;
