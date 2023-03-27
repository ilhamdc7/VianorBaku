import Link from "next/link";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import styles from "./calcSlider.module.css";
import { baseUrl } from "@/pages/api/api";
import { useRouter } from "next/router";

const CalcSlider = ({ slider, width, height, radius, markas }) => {
  const [filterBy, setFilterBy] = useState("forTire");
  const [selectedWidth, setSelectedWidth] = useState(null);
  const [selectedHeight, setSelectedHeight] = useState(null);
  const [selectedRadius, setSelectedRadius] = useState(null);
  const [selectedMarka, setSelectedMarka] = useState(null);
  const [models, setModels] = useState([])
  const [years, setYears] = useState([])
  const [engines, setEngines] = useState([])
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedEngine, setSelectedEngine] = useState(null);
  const [mPackageInputs, setMPackageInputs] = useState(getEmptyPostInputs())

  const router = useRouter()


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const calcSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  useEffect(() => {
    const results = markas.filter((data) => data.name === selectedMarka)
    setModels(results[0]?.models)
    setSelectedModel(null)
  }, [selectedMarka])


  useEffect(() => {
    getYears()
  }, [selectedModel])


  const getYears = async () => {
    await baseUrl.get(`/years?limit=100000000`)
      .then(res => setYears(res.data.results))
  }

  useEffect(() => {
    getEngines()
  }, [])

  const getEngines = async () => {
    await baseUrl.get(`engines?limit=100000000`)
      .then(res => setEngines(res.data.results))
  }


  function getEmptyPostInputs() {
    return {
      firstWidth: null,
      firstHeight: null,
      firstDiametr: null,
      secondWidth: null,
      secondHeight: null,
      secondDiametr: null
    }
  }


  const handleSearchMPackage = () => {
    router.push({
      pathname: '/pair',
      query: mPackageInputs
    })
  }


  return (
    // <div class="block block-slideshow">
    //   <div class="container">
    //     <div class="row">
    //       <div class="col-lg-4 col-12" style={{ height: "450px" }}>

    //         <Slider {...calcSettings} className="calc-slider">
    //           <div>
    //             <button
    //               onClick={() => setFilterBy("forTire")}
    //               id="btn1"
    //               style={
    //                 filterBy === "forTire"
    //                   ? {
    //                     padding: "20px",
    //                     backgroundColor: "rgb(242, 89, 0)",
    //                     height: "100%",
    //                   }
    //                   : {
    //                     padding: "20px",
    //                     backgroundColor: "rgb(255, 255, 255)",
    //                     height: "100%",
    //                   }
    //               }
    //               type="button"
    //               class="btn btn-primary btn-lg "
    //             >
    //               Təkərə görə axtarış
    //             </button>
    //             <div
    //               id="block1"
    //               class="block-1 h-100" >
    //               <div class="block-finder__body container container--max--xl">
    //                 <form class="block-finder__form" method="get">
    //                   <input
    //                     type="hidden"
    //                     name="csrfmiddlewaretoken"
    //                     value="CniG49ASLt4s7ESoduey2n3jnIZlOnBduEXKIDBHSicWjsRXM6Z9siwvtlxyp81Y"
    //                   />
    //                   <div class="container-fluid ml-lg-0">
    //                     <div
    //                       class="row justify-content-around t-filter-area"
    //                       style={{ position: "relative" }}
    //                     >
    //                       <div class="col-lg-6 col-12 filter-inputs">
    //                         <div style={{ width: "100%", height: "40px" }}>
    //                           <select
    //                             onChange={(e) =>
    //                               setSelectedWidth(e.target.value)
    //                             }
    //                             style={{
    //                               width: "100%",
    //                               height: "100%",
    //                               outline: "none",
    //                               color:'black'
    //                             }}
    //                           >
    //                             <option value={""}>En(mm)</option>
    //                             {width?.map((wth) => (
    //                               <option value={wth?.size}>{wth?.size}</option>
    //                             ))}
    //                           </select>
    //                         </div>
    //                       </div>
    //                       <div class="col-lg-6  col-12 filter-inputs">
    //                         <div style={{ width: "100%", height: "40px" }}>
    //                           <select
    //                             onChange={(e) =>
    //                               setSelectedHeight(e.target.value)
    //                             }
    //                             style={{
    //                               width: "100%",
    //                               height: "100%",
    //                               outline: "none",
    //                               color:'black'
    //                             }}
    //                           >
    //                             <option value={""}>Hündürlük(%)</option>
    //                             {height?.map((hgt) => (
    //                               <option value={hgt?.size}>{hgt?.size}</option>
    //                             ))}
    //                           </select>
    //                         </div>
    //                       </div>
    //                       <div class="col-lg-6  col-12 filter-inputs">
    //                         <div style={{ width: "100%", height: "40px" }}>
    //                           <select
    //                             onChange={(e) =>
    //                               setSelectedRadius(e.target.value)
    //                             }
    //                             style={{
    //                               width: "100%",
    //                               height: "100%",
    //                               outline: "none",
    //                               color:'black'
    //                             }}
    //                           >
    //                             <option value={""}>Diametr(düym)</option>
    //                             {radius?.map((rds) => (
    //                               <option value={rds?.size}>{rds?.size}</option>
    //                             ))}
    //                           </select>
    //                         </div>
    //                       </div>

    //                       <div class="col-lg-6  col-12 filter-inputs">
    //                         <Link
    //                           href={`/search?width=${selectedWidth}&height=${selectedHeight}&diametr=${selectedRadius}`}
    //                           className="tyres_filter_a"
    //                         >
    //                           <button
    //                             class="block-finder__form-control block-finder__form-control--button tyres_filter "
    //                             style={{ width: "100%" }}
    //                           >
    //                             Axtar
    //                           </button>
    //                         </Link>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </form>
    //               </div>
    //             </div>
    //           </div>
    //           <div>
    //             <button
    //               onClick={() => setFilterBy("forCar")}
    //               id="btn2"
    //               style={
    //                 filterBy === "forCar"
    //                   ? {
    //                     padding: "20px",
    //                     backgroundColor: "rgb(242, 89, 0)",
    //                     height: "125%",
    //                   }
    //                   : {
    //                     padding: "20px",
    //                     backgroundColor: "rgb(255, 255, 255)",
    //                     height: "100%",
    //                   }
    //               }
    //               type="button"
    //               class="btn btn-primary btn-lg "
    //             >
    //               Avtomobilə görə axtarış
    //             </button>
    //             <div
    //               id="block2"
    //               class="block-2 h-100 " >
    //               <div class="block-finder__body container a container--max--xl">
    //                 <input
    //                   type="hidden"
    //                   name="csrfmiddlewaretoken"
    //                   value="CniG49ASLt4s7ESoduey2n3jnIZlOnBduEXKIDBHSicWjsRXM6Z9siwvtlxyp81Y"
    //                 />
    //                 <div class="container-fluid">
    //                   <div class="row " style={{ position: "relative" }}>
    //                     <div class="col-xl-6 col-lg-6 col-12 filter-inputs-2 mb-3">
    //                       <div style={{ width: "100%", height: "40px" }}>
    //                         <select
    //                           style={{
    //                             width: "100%",
    //                             height: "100%",
    //                             outline: "none",
    //                           }}
    //                           onChange={(e) => setSelectedMarka(e.target.value)}
    //                         >
    //                           <option value={''}>Marka</option>
    //                           {markas?.map((marka) => (

    //                             <option value={marka?.name}>{marka.name}</option>
    //                           ))}

    //                         </select>
    //                       </div>
    //                     </div>
    //                     <div class="col-xl-6 col-lg-6 col-12 filter-inputs-2 mb-3">
    //                       <div style={{ width: "100%", height: "40px" }}>
    //                         <select
    //                           style={{
    //                             width: "100%",
    //                             height: "100%",
    //                             outline: "none",
    //                           }}
    //                           value={selectedModel}
    //                           onChange={(e) => setSelectedModel(e.target.value)}
    //                         >
    //                           <option value={''}>Model</option>
    //                           {models?.map((model) => (

    //                             <option value={model?.name}>{model?.name}</option>
    //                           ))}

    //                         </select>
    //                       </div>
    //                     </div>
    //                     <div class="col-xl-6 col-lg-6 col-12 filter-inputs-2 mb-3">
    //                       <div style={{ width: "100%", height: "40px" }}>
    //                         <select
    //                           style={{
    //                             width: "100%",
    //                             height: "100%",
    //                             outline: "none",
    //                           }}
    //                           onChange={(e) => setSelectedYear(e.target.value)}
    //                           value={selectedYear}
    //                         >
    //                           <option value={''}>Avtomobilin ili</option>
    //                           {years?.map((year) => (
    //                             <option value={year?.year}>{year?.year}</option>
    //                           ))}

    //                         </select>
    //                       </div>
    //                     </div>
    //                     <div class="col-xl-6 col-lg-6 col-12 filter-inputs-2 mb-3">
    //                       <div style={{ width: "100%", height: "40px" }}>
    //                         <select
    //                           style={{
    //                             width: "100%",
    //                             height: "100%",
    //                             outline: "none",
    //                           }}
    //                           onChange={(e) => setSelectedEngine(e.target.value)}
    //                           value={selectedEngine}
    //                         >
    //                           <option value={''}>Mühərrik</option>
    //                           {engines?.map((engine) => (
    //                             <option value={engine?.size}>{engine?.size}</option>

    //                           ))}

    //                         </select>
    //                       </div>
    //                     </div>
    //                     <div class="col-12">
    //                       <div
    //                         class="row cleaned  h-md-100 "
    //                         style={{
    //                           overflowX: "auto",
    //                           border: "1px solid #000",
    //                           margin: "10px",
    //                           padding: "10px",
    //                           height: "60px"
    //                         }}
    //                       >
    //                         <div class="col-12 carTyreClass "></div>
    //                         <div class="col-12  d-flex">
    //                           <div
    //                             class="row carTyreClassSecond w-100"
    //                             style={{ overflowX: "auto" }}
    //                           >
    //                             <div class="col-xl-4 col-lg-4 col-sm-4 col-6 pl-lg-0  ml-lg-0 mb-sm-0 mb-3 p-0">
    //                               <div 
    //                                  style={{
    //                                   border: "1px solid #000",
    //                                   padding: "5px 0",
    //                                   fontSize: "15px",
    //                                 }}>
    //                                 <a
                                   
    //                                 >
    //                                   {" "}
    //                                   <span
    //                                     class=" my-span"
    //                                     style={{ color: "black" }}
    //                                   >
    //                                     {" "}
    //                                     215/65 R17{" "}
    //                                   </span>{" "}
    //                                 </a>
    //                               </div>
    //                             </div>{" "}

    //                           </div>{" "}
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>

    //           </div>
    //           <div>

    //             <button
    //               onClick={() => setFilterBy("forMPackage")}
    //               id="btn2"
    //               style={
    //                 filterBy === "forMPackage"
    //                   ? {
    //                     padding: "20px",
    //                     backgroundColor: "rgb(242, 89, 0)",
    //                     height: "125%",
    //                   }
    //                   : {
    //                     padding: "20px",
    //                     backgroundColor: "rgb(255, 255, 255)",
    //                     height: "100%",
    //                   }
    //               }
    //               type="button"
    //               class="btn btn-primary btn-lg "
    //             >
    //               M paket axtarışı
    //             </button>

    //             <div className="block-3"  >
    //               <div className="d-flex alig-items-center">
    //                 <select onChange={(e) => setMPackageInputs({ ...mPackageInputs, firstWidth: e.target.value })} placeholder="En" style={{ width: '30%', height: '40px', marginLeft: '3%' }} type={'text'}>
    //                   <option value={''}>En</option>
    //                   {width?.map((wdt) => (
    //                     <option value={wdt?.size}>{wdt?.size}</option>
    //                   ))}
    //                 </select>
    //                 <select onChange={(e) => setMPackageInputs({ ...mPackageInputs, firstHeight: e.target.value })} placeholder="Hündürlük" style={{ width: '30%', height: '40px', marginLeft: '3%' }} type={'text'}>
    //                   <option value={''}>Hündürlük</option>
    //                   {height?.map((hgt) => (
    //                     <option value={hgt?.size}>{hgt?.size}</option>
    //                   ))}
    //                 </select>
    //                 <select onChange={(e) => setMPackageInputs({ ...mPackageInputs, firstDiametr: e.target.value })} placeholder="Diametr" style={{ width: '30%', height: '40px', marginLeft: '3%' }} type={'text'}>
    //                   <option value={''}>Diametr</option>
    //                   {radius?.map((rds) => (

    //                     <option value={rds?.size}>{rds?.size}</option>
    //                   ))}
    //                 </select>
    //               </div>
    //               <div className="d-flex alig-items-center block-second">
    //                 <select onChange={(e) => setMPackageInputs({ ...mPackageInputs, secondWidth: e.target.value })} placeholder="En" style={{ width: '30%', height: '40px', marginLeft: '3%' }} type={'text'}>
    //                   <option value={''}>En</option>
    //                   {width?.map((wdt) => (
    //                     <option value={wdt?.size}>{wdt?.size}</option>
    //                   ))}
    //                 </select>
    //                 <select onChange={(e) => setMPackageInputs({ ...mPackageInputs, secondHeight: e.target.value })} placeholder="Hündürlük" style={{ width: '30%', height: '40px', marginLeft: '3%' }} type={'text'}>
    //                   <option value={''}>Hündürlük</option>
    //                   {height?.map((hgt) => (
    //                     <option value={hgt?.size}>{hgt?.size}</option>
    //                   ))}
    //                 </select>
    //                 <select onChange={(e) => setMPackageInputs({ ...mPackageInputs, secondDiametr: e.target.value })} placeholder="Diametr" style={{ width: '30%', height: '40px', marginLeft: '3%' }} type={'text'}>
    //                   <option value={''}>Diametr</option>
    //                   {radius?.map((rds) => (

    //                     <option value={rds?.size}>{rds?.size}</option>
    //                   ))}
    //                 </select>
    //               </div>
    //               <button onClick={handleSearchMPackage} className="m-search">Axtar</button>
    //             </div>
    //           </div>
    //         </Slider>

    //       </div>
    //       <div class="col-lg-8 col-12 for-slide" style={{ marginTop: "20px" }}>
    //         <Slider {...settings}>
    //           {slider?.map((sld) => (
    //             <div
    //               className={styles.sliderContainer}
    //               style={{
    //                 width: "500px",
    //                 height: "120px",
    //                 overflow: "hidden",
    //               }}
    //             >
    //               <img src={sld?.image} width={"100%"} />
    //             </div>
    //           ))}
    //         </Slider>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div class="block block-slideshow">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-12" style={{ height: "450px" }}>
          <div class="my-container pr-0 ">
            <div
              class="bg-grey resp-for-slide"
              style={{ border: "1px solid grey !important" }}
            >
              <div class="btn-area" >
                <button
                  onClick={() => setFilterBy("forTire")}
                  id="btn1"
                  style={
                    filterBy === "forTire"
                      ? {
                          padding: "10px",
                          backgroundColor: "rgb(242, 89, 0)",
                          height: "100%",
                          color:"#fff"
                        }
                      : {
                          padding: "10px",
                          backgroundColor: "#ededed",
                          height: "100%",
                        }
                  }
                  type="button"
                  class="btn btn-primary btn-lg "
                >
                  Təkərə görə axtarış
                </button>
                <button
                  onClick={() => setFilterBy("forCar")}
                  id="btn2"
                  style={
                    filterBy === "forCar"
                      ? {
                          padding: "10px",
                          backgroundColor: "rgb(242, 89, 0)",
                          height: "125%",
                          color:"#fff"
                        }
                      : {
                          padding: "10px",
                          backgroundColor: "#ededed",
                          height: "100%",
                        }
                  }
                  type="button"
                  class="btn btn-primary btn-lg "
                >
                  Avtomobilə görə axtarış
                </button>
                <button
                  onClick={() => setFilterBy("forMPackage")}
                  id="btn3"
                  style={
                    filterBy === "forMPackage"
                      ? {
                          padding: "10px",
                          backgroundColor: "rgb(242, 89, 0)",
                          height: "125%",
                          color:"#fff"
                        }
                      : {
                          padding: "10px",
                          backgroundColor: "#ededed",
                          height: "100%",
                        }
                  }
                  type="button"
                  class="btn btn-primary btn-lg "
                >
                  M paket axtarışı
                </button>
              </div>
              <div class="m-paket">
                
              </div>

              <div
                id="block1"
                class="block-1 h-100"
                style={
                  filterBy === "forTire"
                    ? {
                        display: "block",
                        alignItems: "flex-start",
                        flexDirection: "column",
                      }
                    : {
                        display: "none",
                        alignItems: "flex-start",
                        flexDirection: "column",
                      }
                }
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
                              onChange={(e) =>
                                setSelectedWidth(e.target.value)
                              }
                              style={{
                                width: "100%",
                                height: "100%",
                                outline: "none",
                              }}
                            >
                              <option value={""}>En(mm)</option>
                              {width?.map((wth) => (
                                <option value={wth?.size}>{wth?.size}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div class="col-lg-6  col-12 filter-inputs">
                          <div style={{ width: "100%", height: "40px" }}>
                            <select
                              onChange={(e) =>
                                setSelectedHeight(e.target.value)
                              }
                              style={{
                                width: "100%",
                                height: "100%",
                                outline: "none",
                              }}
                            >
                              <option value={""}>Hündürlük(%)</option>
                              {height?.map((hgt) => (
                                <option value={hgt?.size}>{hgt?.size}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div class="col-lg-6  col-12 filter-inputs">
                          <div style={{ width: "100%", height: "40px" }}>
                            <select
                              onChange={(e) =>
                                setSelectedRadius(e.target.value)
                              }
                              style={{
                                width: "100%",
                                height: "100%",
                                outline: "none",
                              }}
                            >
                              <option value={""}>Diametr(düym)</option>
                              {radius?.map((rds) => (
                                <option value={rds?.size}>{rds?.size}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div class="col-lg-6  col-12 filter-inputs">
                          <Link
                            href={`/search?width=${selectedWidth}&height=${selectedHeight}&diametr=${selectedRadius}`}
                            className="tyres_filter_a"
                          >
                            <button
                              class="block-finder__form-control block-finder__form-control--button tyres_filter "
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
                style={
                  filterBy === "forCar"
                    ? {
                        display: "block",
                        alignItems: "flex-start",
                        flexDirection: "column",
                      }
                    : {
                        display: "none",
                        alignItems: "flex-start",
                        flexDirection: "column",
                      }
                }
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
                        <div style={{ width: "100%", height: "40px" }} className="marka">
                          <select
                            style={{
                              width: "100%",
                              height: "100%",
                              outline: "none",
                            }}
                            onChange={(e) => setSelectedMarka(e.target.value)}
                          >
                            <option value={''}>Marka</option>
                            {markas?.map((marka) => (

                            <option value={marka?.name}>{marka.name}</option>
                            ))}
                            
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
                            value={selectedModel}
                            onChange={(e) => setSelectedModel(e.target.value)}
                          >
                            <option value={''}>Model</option>
                            {models?.map((model) => (

                            <option value={model?.name}>{model?.name}</option>
                            ))}

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
                            onChange={(e) => setSelectedYear(e.target.value)}
                            value={selectedYear}
                          >
                            <option value={''}>Avtomobilin ili</option>
                            {years?.map((year) => (
                            <option value={year?.year}>{year?.year}</option>
                            ))}
                            
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
                            onChange={(e) => setSelectedEngine(e.target.value)}
                            value={selectedEngine}
                          >
                            <option value={''}>Mühərrik</option>
                            {engines?.map((engine) => (
                              <option value={engine?.size}>{engine?.size}</option>

                            ))}
                            
                          </select>
                        </div>
                      </div>
                      <div class="col-12">
                        <div
                          class="row cleaned  h-md-100 "
                          style={{
                            // overflowX: "auto",
                            border: "1px solid #000",
                            margin: "20px 10px 10px 10px",
                            padding: "10px",
                          }}
                        >
                          <div class="col-12 carTyreClass "></div>
                          <div class="col-12  d-flex">
                            <div
                              class="row carTyreClassSecond w-100"
                              // style={{ overflowX: "auto" }}
                            >
                              <div class="col-xl-12 col-lg-12 col-sm-12 col-12 pl-lg-0  ml-lg-0 mb-sm-0 mb-3 p-0">
                                <div>
                                  <a
                                    style={{
                                      border: "1px solid #000",
                                      padding: "5px 0",
                                      fontSize: "15px",
                                      width:'fit-content',
                                      display:'block'
                                    }}
                                  >
                                    {" "}
                                    <span
                                      class="my-span"
                                      style={{ color: "black" }}
                                    >
                                      {" "}
                                      215/65 R17{" "}
                                    </span>{" "}
                                  </a>
                                </div>
                              </div>{" "}
                             
                            </div>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              
              <div className="block-3" style={
                  filterBy === "forMPackage"
                    ? {
                        display: "block",
                        alignItems: "flex-start",
                        flexDirection: "column",
                      }
                    : {
                        display: "none",
                        alignItems: "flex-start",
                        flexDirection: "column",
                      }
                }>
                <div className="d-flex alig-items-center">
                  <select onChange={(e) => setMPackageInputs({...mPackageInputs, firstWidth: e.target.value})} placeholder="En" style={{width:'30%', height:'40px', marginLeft:'3%'}} type={'text'}>
                  <option value={''}>En</option>
                    {width?.map((wdt) => (
                      <option value={wdt?.size}>{wdt?.size}</option>
                    ))}
                  </select>
                  <select onChange={(e) => setMPackageInputs({...mPackageInputs, firstHeight: e.target.value})} placeholder="Hündürlük" style={{width:'30%', height:'40px', marginLeft:'3%'}} type={'text'}>
                    <option value={''}>Hündürlük</option>
                    {height?.map((hgt) => (
                    <option value={hgt?.size}>{hgt?.size}</option>
                    ))}
                  </select>
                  <select onChange={(e) => setMPackageInputs({...mPackageInputs, firstDiametr: e.target.value})} placeholder="Diametr" style={{width:'30%', height:'40px', marginLeft:'3%'}} type={'text'}>
                    <option value={''}>Diametr</option>
                    {radius?.map((rds) => (

                    <option value={rds?.size}>{rds?.size}</option>
                    ))}
                  </select>
                </div>
                <div className="d-flex alig-items-center mt-3">
                  <select onChange={(e) => setMPackageInputs({...mPackageInputs, secondWidth: e.target.value})} placeholder="En" style={{width:'30%', height:'40px', marginLeft:'3%'}} type={'text'}>
                  <option value={''}>En</option>
                    {width?.map((wdt) => (
                      <option value={wdt?.size}>{wdt?.size}</option>
                    ))}
                  </select>
                  <select onChange={(e) => setMPackageInputs({...mPackageInputs, secondHeight: e.target.value})} placeholder="Hündürlük" style={{width:'30%', height:'40px', marginLeft:'3%'}} type={'text'}>
                  <option value={''}>Hündürlük</option>
                    {height?.map((hgt) => (
                    <option value={hgt?.size}>{hgt?.size}</option>
                    ))}
                  </select>
                  <select onChange={(e) => setMPackageInputs({...mPackageInputs, secondDiametr: e.target.value})} placeholder="Diametr" style={{width:'30%', height:'40px', marginLeft:'3%'}} type={'text'}>
                  <option value={''}>Diametr</option>
                    {radius?.map((rds) => (

                    <option value={rds?.size}>{rds?.size}</option>
                    ))}
                  </select>
                </div>
                <button onClick={handleSearchMPackage} className="m-search">Axtar</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-8 col-12 for-slide" style={{ marginTop: "20px" }}>
          <Slider {...settings}>
            {slider?.map((sld) => (
              <div
                className={styles.sliderContainer}
                style={{
                  width: "500px",
                  height: "120px",
                  overflow: "hidden",
                }}
              >
                <img src={sld?.image} width={"100%"} />
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
