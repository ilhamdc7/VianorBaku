import React from "react";

const CalcSlider = () => {
  return (
    <div class="block block-slideshow">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-12" style={{ height: "450px" }}>
            <div class="my-container pr-0 ">
              <div
                class="h-100 bg-grey resp-for-slide"
                style={{ border: "1px solid grey !important" }}
              >
                <div class="btn-area ">
                  <button
                    id="btn1"
                    style={{ padding: "8px" }}
                    type="button"
                    class="btn btn-primary btn-lg "
                  >
                    Təkərə görə axtarış
                  </button>
                  <button
                    id="btn2"
                    style={{ padding: "6px" }}
                    type="button"
                    class="btn btn-primary btn-lg "
                  >
                    Avtomobilə görə axtarış
                  </button>
                </div>
                <div class="m-paket">
                  <a href="/filterAdditional/" class="btn btn-success">
                    M paket axtarish
                  </a>
                </div>

                <div
                  id="block1"
                  class="block-1 h-100"
                  style={{
                    display: "block",
                    "align-items": "flex-start",
                    "flex-direction": "column",
                  }}
                >
                  <div class="block-finder__body container container--max--xl">
                    <form class="block-finder__form" method="get">
                      <input
                        type="hidden"
                        name="csrfmiddlewaretoken"
                        value="CniG49ASLt4s7ESoduey2n3jnIZlOnBduEXKIDBHSicWjsRXM6Z9siwvtlxyp81Y"
                      />
                      <div class="container-fluid ml-lg-0">
                        <div
                          class="row justify-content-around"
                          style={{ position: "relative" }}
                        >
                          <div class="col-lg-6 col-12 filter-inputs">
                            <div class="block-finder__form-control block-finder__form-control--select">
                              <select
                                id="12-width"
                                class="select_search en"
                                style={{ border: "1px solid grey" }}
                              >
                                <option value="">En (mm)</option>
                                <option value="">Hamısı</option>

                                <option name="width" class="width" value="10">
                                  10
                                </option>

                                <input
                                  id="width"
                                  hidden
                                  name="width"
                                  value=""
                                />
                              </select>
                            </div>
                          </div>
                          <div class="col-lg-6  col-12 filter-inputs">
                            <div class="block-finder__form-control block-finder__form-control--select">
                              <select
                                id="12-height"
                                class="height"
                                aria-label="Vehicle Make"
                              >
                                <option value="">Hündürlük (%)</option>
                                <option value="">Hamısı</option>
                              </select>
                            </div>
                          </div>
                          <div class="col-lg-6  col-12 filter-inputs">
                            <div class="block-finder__form-control block-finder__form-control--select">
                              <select
                                class="radius"
                                id="12-radius"
                                aria-label="Vehicle Model"
                              >
                                <option value="">Diametr (düym)</option>
                                <option value="">Hamısı</option>

                                <input
                                  id="radius"
                                  hidden
                                  name="radius"
                                  value=""
                                />
                              </select>
                            </div>
                          </div>

                          <div class="col-lg-6  col-12 filter-inputs">
                            <button
                              class="block-finder__form-control block-finder__form-control--button tyres_filter "
                              type="submit"
                              style={{ width: "100%" }}
                            >
                              Axtar
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="container container--max--xl text-center">
                    <img height="100px" src="/static/images/tyre.svg" />
                    <img height="100px" src="/static/images/tyre2.svg" />
                  </div>
                </div>

                <div
                  id="block2"
                  class="block-2 h-100 "
                  style={{ display: "none", flexDirection: "column" }}
                >
                  <div class="block-finder__body container a container--max--xl">
                    <input
                      type="hidden"
                      name="csrfmiddlewaretoken"
                      value="CniG49ASLt4s7ESoduey2n3jnIZlOnBduEXKIDBHSicWjsRXM6Z9siwvtlxyp81Y"
                    />
                    <div class="container-fluid">
                      <div class="row " style={{ position: "relative" }}>
                        <div class="col-xl-6 col-lg-6 col-12 filter-inputs-2">
                          <div class="block-finder__form-control block-finder__form-control--select select_form">
                            <select
                              name="vendor_name"
                              id="vendor_name"
                              class="select_search marka"
                            >
                              <option selected="selected" disabled="">
                                Markanı seçin
                              </option>

                              <option value="167">УАЗ</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-12 filter-inputs-2">
                          <div class="block-finder__form-control block-finder__form-control--select select_form">
                            <select
                              name="model_name"
                              id="model_name"
                              class="select_search model"
                            >
                              <option value="">Model seçin</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-12 filter-inputs-2">
                          <div class="block-finder__form-control block-finder__form-control--select select_form">
                            <select
                              name="year"
                              id="year"
                              class="select_search year"
                            >
                              <option value="">İli seçin</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-12 filter-inputs-2">
                          <div class="block-finder__form-control block-finder__form-control--select select_form">
                            <select
                              name="modification_name"
                              id="modification_name"
                              class="select_search motor"
                            >
                              <option value="">Motor seçin</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-12">
                          <div
                            class="row cleaned  h-md-100 "
                            style={{
                              overflowX: "auto",
                              border: "1px solid #000",
                              margin: "10px",
                              padding: "10px",
                            }}
                          >
                            <div class="col-12 carTyreClass "></div>
                            <div class="col-12  d-flex">
                              <div class="row carTyreClassSecond w-100"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="container container--max--xl text-center">
                    <img height="100px" src="/static/images/car.gif" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8 col-12 for-slide">{/* // For slider // */}</div>
        </div>
      </div>
    </div>
  );
};

export default CalcSlider;
