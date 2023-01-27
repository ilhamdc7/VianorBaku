import React from "react";

const DescriptionCalc = () => {
  return (
    <div class="product__tabs product-tabs product-tabs--layout--full">
      <h2 class="text-center p-3 m-0 credit-title">Kredit ilə hesablama</h2>
      <ul class="product-tabs__list  prog_wrapp">
        <li class="product-tabs__item product-tabs__item--active">
          <a href="#3">3</a>
        </li>

        <li class="product-tabs__item ">
          <a href="#6">6</a>
        </li>

        <li class="product-tabs__item ">
          <a href="#9">9</a>
        </li>

        <li class="product-tabs__item ">
          <a href="#12">12</a>
        </li>

        <li class="product-tabs__item ">
          <a href="#15">15</a>
        </li>

        <li class="product-tabs__item ">
          <a href="#18">18</a>
        </li>
      </ul>
      <div class="product-tabs__content p-0">
        <div class="row p-5">
          <div class="col-12 col-md-6 text-center">
            Miqdar :<br />
            <input
              id="miqdar"
              type="text"
              value="1"
              class="mt-3 form-control text-center"
              style={{ backgroundColor: "#fff" }}
              onchange="updateInput()"
            />
          </div>
          <div class="col-12 col-md-6 text-center">
            <div
              class="product-tabs__pane p-0 product-tabs__pane--active"
              id="3"
            >
              <div>
                <span class="wrapper_month_pay">
                  Aylıq ödəniş
                  <br />
                  <span
                    class="d-flex odenis mt-3 form-control text-center"
                    style={{ fontSize: "18px", alignItems: "center" }}
                    data-value="111"
                  >
                    111
                    <img
                      style={{ height: "8px !important" }}
                      class="manatt"
                      src="/static/images/manat.png"
                    />
                  </span>
                </span>
              </div>
            </div>

            <div class="product-tabs__pane p-0" id="6">
              <div>
                <span class="wrapper_month_pay">
                  Aylıq ödəniş
                  <br />
                  <span
                    class="d-flex odenis mt-3 form-control text-center"
                    style={{ fontSize: "18px", alignItems: "center" }}
                    data-value="59"
                  >
                    59
                    <img
                      style={{ height: "8px !important" }}
                      class="manatt"
                      src="/static/images/manat.png"
                    />
                  </span>
                </span>
              </div>
            </div>

            <div class="product-tabs__pane p-0" id="9">
              <div>
                <span class="wrapper_month_pay">
                  Aylıq ödəniş
                  <br />
                  <span
                    class="d-flex odenis mt-3 form-control text-center"
                    style={{ fontSize: "18px", alignItems: "center" }}
                    data-value="41"
                  >
                    41
                    <img
                      style={{ height: "8px !important" }}
                      class="manatt"
                      src="/static/images/manat.png"
                    />
                  </span>
                </span>
              </div>
            </div>

            <div class="product-tabs__pane p-0" id="12">
              <div>
                <span class="wrapper_month_pay">
                  Aylıq ödəniş
                  <br />
                  <span
                    class="d-flex odenis mt-3 form-control text-center"
                    style={{ fontSize: "18px", alignItems: "center" }}
                    data-value="33"
                  >
                    33
                    <img
                      style={{ height: "8px !important" }}
                      class="manatt"
                      src="/static/images/manat.png"
                    />
                  </span>
                </span>
              </div>
            </div>

            <div class="product-tabs__pane p-0" id="15">
              <div>
                <span class="wrapper_month_pay">
                  Aylıq ödəniş
                  <br />
                  <span
                    class="d-flex odenis mt-3 form-control text-center"
                    style={{ fontSize: "18px", alignItems: "center" }}
                    data-value="27"
                  >
                    27
                    <img
                      style={{ height: "8px !important" }}
                      class="manatt"
                      src="/static/images/manat.png"
                    />
                  </span>
                </span>
              </div>
            </div>

            <div class="product-tabs__pane p-0" id="18">
              <div>
                <span class="wrapper_month_pay">
                  Aylıq ödəniş
                  <br />
                  <span
                    class="d-flex odenis mt-3 form-control text-center"
                    style={{ fontSize: "18px", alignItems: "center" }}
                    data-value="24"
                  >
                    24
                    <img
                      style={{ height: "8px !important" }}
                      class="manatt"
                      src="/static/images/manat.png"
                    />
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 m-auto">
            <button
              data-id="39083"
              class="btn btn-primary btn-lg btn-block adding-to-card mt-4 kredit_form"
            >
              Kredit Müraciət
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionCalc;
