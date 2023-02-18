import Link from "next/link";
import React, {useState} from "react";
import Slider from "react-slick";
import styles from "./calcSlider.module.css";

const CalcSlider = ({slider, width, height, radius}) => {


  const [filterBy, setFilterBy] = useState('forTire')
  const [selectedWidth, setSelectedWidth] = useState(null)
  const [selectedHeight, setSelectedHeight] = useState(null)
  const [selectedRadius, setSelectedRadius] = useState(null)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
                  onClick={() => setFilterBy('forTire')}
                    id="btn1"
                    style={filterBy === 'forTire' ? {padding: "6px", backgroundColor: 'rgb(242, 89, 0)', height: '125%'} : {padding: '8px', backgroundColor: 'rgb(255, 255, 255)', height: '100%' }}
                    type="button"
                    class="btn btn-primary btn-lg "
                  >
                    Təkərə görə axtarış
                  </button>
                  <button
                    onClick={() => setFilterBy('forCar')}
                    id="btn2"
                    style={filterBy === 'forCar' ? {padding: "6px", backgroundColor: 'rgb(242, 89, 0)', height: '125%'} : {padding: '8px', backgroundColor: 'rgb(255, 255, 255)', height: '100%' }}
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
                  style={filterBy === 'forTire' ? {display:'block',alignItems: "flex-start",flexDirection: "column"} : {display:'none',alignItems: "flex-start",flexDirection: "column"}}
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
                            <div style={{ width: "100%", height: "40px" }}>
                              <select
                                onChange={(e) => setSelectedWidth(e.target.value)}
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  outline: "none",
                                }}
                              >
                                <option value={''}>En(mm)</option>
                                {width?.map((wth) => (
                                  <option value={wth?.size}>{wth?.size}</option>
                                ))}
                                
                              </select>
                            </div>
                          </div>
                          <div class="col-lg-6  col-12 filter-inputs">
                            <div style={{ width: "100%", height: "40px" }}>
                              <select
                                onChange={(e) => setSelectedHeight(e.target.value)}
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  outline: "none",
                                }}
                              >
                                <option value={''}>Hündürlük(%)</option>
                                {height?.map((hgt) => (
                                    <option value={hgt?.size}>{hgt?.size}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div class="col-lg-6  col-12 filter-inputs mt-3">
                            <div style={{ width: "100%", height: "40px" }}>
                              <select
                                onChange={(e) => setSelectedRadius(e.target.value)}
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  outline: "none",
                                }}
                              >
                                <option value={''}>Diametr(düym)</option>
                                {radius?.map((rds) => (
                                  <option value={rds?.size}>{rds?.size}</option>
                                ))}
                                
                              </select>
                            </div>
                          </div>

                          <div class="col-lg-6  col-12 filter-inputs">
                            <Link href={`/search?width=${selectedWidth}&height=${selectedHeight}&diametr=${selectedRadius}`}>
                            <button
                              class="block-finder__form-control block-finder__form-control--button tyres_filter mt-3"
                              style={{ width: "100%" }}
                            >
                              Axtar
                            </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div
                  id="block2"
                  class="block-2 h-100 "
                  style={filterBy === 'forCar' ? {display:'block',alignItems: "flex-start",flexDirection: "column"} : {display:'none',alignItems: "flex-start",flexDirection: "column"}}
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
                        <div style={{ width: "100%", height: "40px" }}>
                              <select
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  outline: "none",
                                }}
                              >
                                <option>asdasdsa</option>
                                <option>asdasdsa</option>
                                <option>asdasdsa</option>
                                <option>asdasdsa</option>
                                <option>asdasdsa</option>
                                <option>asdasdsa</option>
                                <option>asdasdsa</option>
                              </select>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-12 filter-inputs-2">
                        <div style={{ width: "100%", height: "40px" }}>
                              <select
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  outline: "none",
                                }}
                              >
                                <option>asdasdsa</option>
                                <option>asdasdsa</option>
                                <option>asdasdsa</option>
                                <option>asdasdsa</option>
                                <option>asdasdsa</option>
                                <option>asdasdsa</option>
                                <option>asdasdsa</option>
                              </select>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-12 filter-inputs-2 mt-3">
                        <div style={{ width: "100%", height: "40px" }}>
                              <select
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  outline: "none",
                                }}
                              >
                                <option>asdasdsa</option>
                                <option>asdasdsa</option>
                                <option>asdasdsa</option>
                                <option>asdasdsa</option>
                                <option>asdasdsa</option>
                                <option>asdasdsa</option>
                                <option>asdasdsa</option>
                              </select>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-12 filter-inputs-2 mt-3">
                        <div style={{ width: "100%", height: "40px" }}>
                              <select
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  outline: "none",
                                }}
                              >
                                <option>asdasdsa</option>
                                <option>asdasdsa</option>
                                <option>asdasdsa</option>
                                <option>asdasdsa</option>
                                <option>asdasdsa</option>
                                <option>asdasdsa</option>
                                <option>asdasdsa</option>
                              </select>
                            </div>
                        </div>
                        {/* <div class="col-12">
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
                        </div> */}
                      </div>
                    </div>
                  </div>

                </div>


              </div>
            </div>
          </div>
          <div class="col-lg-8 col-12 for-slide" style={{ marginTop: "20px" }}>
            <Slider {...settings}>
              {slider?.map((sld) => (

              <div
                className={styles.sliderContainer}
                style={{ width: "500px", height: "120px", overflow: "hidden" }}
              >
                <img
                  src={sld?.image}
                  width={"100%"}
                />
              </div>
              ))}
              
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalcSlider;
