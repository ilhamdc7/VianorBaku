import React,{useState, useEffect} from "react";
import Product from "../Product/Product";
import Slider from "@mui/material/Slider";
import InfiniteScroll from "react-infinite-scroll-component";
import LoaderComponent from "../LoaderComponent/LoaderComponent";

const SearchBody = ({ 
  radius,
  tyres,
  brands, 
  getSelectedBrandsData, 
  width, 
  getSelectedWidthData, 
  selectedBrands, 
  height, 
  getSelectedHeightData,
  selectedHeight, 
  range, 
  setRange,
  getSelectedRadiusData,
  setSelectedBrands,
  setSelectedWidth,
  setSelectedHeight,
  setSelectedRadius,
  setSortPrice,
  selectedWidth,
  selectedRadius,
  setLimit,
  limit,
  emptyTyre
 }) => {


  function handleChanges(event, newValue) {
    setRange(newValue);
  }


  const changeWidth = (e) => {
    setSelectedWidth([e])
  }
  const changeHeight = (e) => {
    setSelectedHeight([e])
  }
  const changeMarka = (e) => {
    setSelectedBrands([e])
  }
  const changeRadius = (e) => {
    setSelectedRadius([e])
  }



  return (
    <div class="site__body">
      <div class="block-header block-header--has-breadcrumb block-header--has-title">
        <div class="container">
          <div class="block-header__body">
            <h1 class="block-header__title">Nəticələr</h1>
          </div>
        </div>
      </div>

      <div className="container sidebar-container container--max--xl">
        <div className="w-100 d-flex" >
          {/* <div className="block-split__item block-split__item-sidebar col-auto"> */}
          <div class="sidebar sidebar--offcanvas--mobile" >
            <div class="sidebar__backdrop"></div>
            <div class="sidebar__body">
              <div class="sidebar__header">
                <div class="sidebar__title">Axtar</div>
                <button class="sidebar__close" type="button">
                  <svg width="12" height="12">
                    <path
                      d="M10.8,10.8L10.8,10.8c-0.4,0.4-1,0.4-1.4,0L6,7.4l-3.4,3.4c-0.4,0.4-1,0.4-1.4,0l0,0c-0.4-0.4-0.4-1,0-1.4L4.6,6L1.2,2.6
                                                c-0.4-0.4-0.4-1,0-1.4l0,0c0.4-0.4,1-0.4,1.4,0L6,4.6l3.4-3.4c0.4-0.4,1-0.4,1.4,0l0,0c0.4,0.4,0.4,1,0,1.4L7.4,6l3.4,3.4
                                                C11.2,9.8,11.2,10.4,10.8,10.8z"
                    />
                  </svg>
                </button>
              </div>
              <div class="sidebar__content">
                <div
                  class="widget widget-filters widget-filters--offcanvas--mobile"
                  data-collapse
                  data-collapse-opened-class="filter--opened"
                >
                  <form method="get" class="items" id="item">
                    <input
                      type="hidden"
                      value="1"
                      name="page"
                      id="page_inp"
                      className=""
                    />
                    <input
                      type="hidden"
                      value="ASC"
                      name="sort"
                      id="sorting"
                    />
                    <div class="widget__header widget-filters__header">
                      <h4>Axtar</h4>
                    </div>
                    <input
                      name="min-price"
                      type="hidden"
                      id="filter-price__min-input"
                    />
                    <input
                      name="max-price"
                      type="hidden"
                      id="filter-price__max-input"
                    />
                    <div class="widget-filters__list">
                      <div class="widget-filters__item">
                        <div
                          class="filter filter filter--opened"
                          data-collapse-item
                        >
                          <button
                            type="button"
                            class="filter__title"
                            data-collapse-trigger
                          >
                            Qiymət
                            <span class="filter__arrow">
                              <svg width="12px" height="7px">
                                <path d="M0.286,0.273 L0.286,0.273 C-0.070,0.629 -0.075,1.204 0.276,1.565 L5.516,6.993 L10.757,1.565 C11.108,1.204 11.103,0.629 10.747,0.273 L10.747,0.273 C10.385,-0.089 9.796,-0.086 9.437,0.279 L5.516,4.296 L1.596,0.279 C1.237,-0.086 0.648,-0.089 0.286,0.273 Z" />
                              </svg>
                            </span>
                          </button>



                          <div class="filter__body" data-collapse-content>
                            <div class="filter__container">
                              <div style={{ width: "14rem", padding: "20px" }}>
                                <Slider max={2000} min={0} value={range} onChange={handleChanges} valueLabelDisplay="auto" />
                             {range[0]} M - {range[1]} M
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="widget-filters__item">
                        <div
                          class="filter filter filter--opened"
                          data-collapse-item
                        >
                          <button
                            type="button"
                            class="filter__title"
                            data-collapse-trigger
                          >
                            Marka
                            <span class="filter__arrow">
                              <svg width="12px" height="7px">
                                <path d="M0.286,0.273 L0.286,0.273 C-0.070,0.629 -0.075,1.204 0.276,1.565 L5.516,6.993 L10.757,1.565 C11.108,1.204 11.103,0.629 10.747,0.273 L10.747,0.273 C10.385,-0.089 9.796,-0.086 9.437,0.279 L5.516,4.296 L1.596,0.279 C1.237,-0.086 0.648,-0.089 0.286,0.273 Z" />
                              </svg>
                            </span>
                          </button>
                          <div class="filter__body" data-collapse-content>
                            <div class="filter__container">
                              <div class="filter-list">
                                <div class="filter-list__list multiselect">
                                  {brands?.map((brand) => (

                                    <label
                                      class="filter-list__item "
                                      multiple="multiple"
                                    >
                                      <span class="input-check filter-list__input">
                                        <span class="input-check__body">

                                          <input
                                            onChange={(e) => getSelectedBrandsData(e.target.value)}
                                            class="input-check__input change_filter input_brand"
                                            name="brand"
                                            type="checkbox"
                                            data-brand="APOLLO"
                                            value={brand?.title}
                                            checked={selectedBrands?.find(item => item === brand.title) ?? false}
                                          />
                                          <span class="input-check__box"></span>
                                          <span class="input-check__icon">
                                            <svg width="9px" height="7px">
                                              <path d="M9,1.395L3.46,7L0,3.5L1.383,2.095L3.46,4.2L7.617,0L9,1.395Z" />
                                            </svg>
                                          </span>
                                        </span>
                                      </span>
                                      <span class="filter-list__title">
                                        {brand?.title}
                                      </span>
                                    </label>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="widget-filters__item">
                        <div
                          class="filter filter filter--opened"
                          data-collapse-item
                        >
                          <button
                            type="button"
                            class="filter__title"
                            data-collapse-trigger
                          >
                            Eni
                            <span class="filter__arrow">
                              <svg width="12px" height="7px">
                                <path d="M0.286,0.273 L0.286,0.273 C-0.070,0.629 -0.075,1.204 0.276,1.565 L5.516,6.993 L10.757,1.565 C11.108,1.204 11.103,0.629 10.747,0.273 L10.747,0.273 C10.385,-0.089 9.796,-0.086 9.437,0.279 L5.516,4.296 L1.596,0.279 C1.237,-0.086 0.648,-0.089 0.286,0.273 Z" />
                              </svg>
                            </span>
                          </button>
                          <div class="filter__body" data-collapse-content>
                            <div class="filter__container">
                              <div class="filter-list">
                                <div class="filter-list__list">
                                  {width?.map((wt) => (
                                    <label class="filter-list__item">
                                      <span class="input-check filter-list__input">
                                        <span class="input-check__body">
                                          <input
                                            onChange={(e) => getSelectedWidthData(e.target.value)}
                                            class="input-check__input change_filter input_width"
                                            name="width"
                                            type="checkbox"
                                            checked={selectedWidth?.find(item => item === wt.size) ?? false}
                                            data-width="10"
                                            value={wt.size}
                                          />
                                          <span class="input-check__box"></span>
                                          <span class="input-check__icon">
                                            <svg width="9px" height="7px">
                                              <path d="M9,1.395L3.46,7L0,3.5L1.383,2.095L3.46,4.2L7.617,0L9,1.395Z" />
                                            </svg>
                                          </span>
                                        </span>
                                      </span>
                                      <span class="filter-list__title">
                                        {wt?.size}
                                      </span>
                                    </label>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="widget-filters__item">
                        <div
                          class="filter filter filter--opened"
                          data-collapse-item
                        >
                          <button
                            type="button"
                            class="filter__title"
                            data-collapse-trigger
                          >
                            Hündürlük
                            <span class="filter__arrow">
                              <svg width="12px" height="7px">
                                <path d="M0.286,0.273 L0.286,0.273 C-0.070,0.629 -0.075,1.204 0.276,1.565 L5.516,6.993 L10.757,1.565 C11.108,1.204 11.103,0.629 10.747,0.273 L10.747,0.273 C10.385,-0.089 9.796,-0.086 9.437,0.279 L5.516,4.296 L1.596,0.279 C1.237,-0.086 0.648,-0.089 0.286,0.273 Z" />
                              </svg>
                            </span>
                          </button>
                          <div class="filter__body" data-collapse-content>
                            <div class="filter__container">
                              <div class="filter-list">
                                <div class="filter-list__list">
                                  {height?.map((hgt) => (

                                  <label class="filter-list__item">
                                    <span class="input-check filter-list__input">
                                      <span class="input-check__body">
                                        <input
                                          onChange={(e) => getSelectedHeightData(e.target.value)}
                                          class="input-check__input change_filter input_height"
                                          name="height"
                                          type="checkbox"
                                          checked={selectedHeight.find(item => item === hgt.size) ?? false}
                                          data-height="10.5"
                                          value={hgt?.size}
                                        />
                                        <span class="input-check__box"></span>
                                        <span class="input-check__icon">
                                          <svg width="9px" height="7px">
                                            <path d="M9,1.395L3.46,7L0,3.5L1.383,2.095L3.46,4.2L7.617,0L9,1.395Z" />
                                          </svg>
                                        </span>
                                      </span>
                                    </span>

                                    <span class="filter-list__title">
                                      {hgt?.size}
                                    </span>
                                  </label>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="widget-filters__item">
                        <div
                          class="filter filter filter--opened"
                          data-collapse-item
                        >
                          <button
                            type="button"
                            class="filter__title"
                            data-collapse-trigger
                          >
                            Radius
                            <span class="filter__arrow">
                              <svg width="12px" height="7px">
                                <path d="M0.286,0.273 L0.286,0.273 C-0.070,0.629 -0.075,1.204 0.276,1.565 L5.516,6.993 L10.757,1.565 C11.108,1.204 11.103,0.629 10.747,0.273 L10.747,0.273 C10.385,-0.089 9.796,-0.086 9.437,0.279 L5.516,4.296 L1.596,0.279 C1.237,-0.086 0.648,-0.089 0.286,0.273 Z" />
                              </svg>
                            </span>
                          </button>

                          <div class="filter__body" data-collapse-content>
                            <div class="filter__container">
                              <div class="filter-list">
                                <div class="filter-list__list">
                                  {radius?.map((rds) => (

                                  <label class="filter-list__item">
                                    <span class="input-check filter-list__input">
                                      <span class="input-check__body">
                                        <input
                                          onChange={(e) => getSelectedRadiusData(e.target.value)}
                                          class="input-check__input change_filter input_radius"
                                          name="radius"
                                          type="checkbox"
                                          data-radius="13"
                                          checked={selectedRadius?.find(item => item === rds.size) ?? false}
                                          value={rds?.size}
                                        />
                                        <span class="input-check__box"></span>
                                        <span class="input-check__icon">
                                          <svg width="9px" height="7px">
                                            <path d="M9,1.395L3.46,7L0,3.5L1.383,2.095L3.46,4.2L7.617,0L9,1.395Z" />
                                          </svg>
                                        </span>{" "}
                                      </span>
                                    </span>
                                    <span class="filter-list__title">
                                      {rds?.size}
                                    </span>
                                  </label>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="widget-filters__actions d-flex">
                      <button
                        class="btn btn-primary btn-sm"
                        type="submit"
                        id="filter"
                      >
                        Axtar
                      </button>
                      <button
                        class="btn btn-secondary btn-sm reset"
                        onclick="resetFunction()"
                        type="button"
                      >
                        {" "}
                        Sıfırla
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}

          <div className="d-block poducts-area-left" style={{ marginLeft: '3%', width: '80%' }}>
            <div class="products-view__options view-options view-options--offcanvas--mobile">
              <div class="view-options__body">
                <button
                  type="button"
                  class="view-options__filters-button filters-button"
                >
                  <span class="filters-button__icon">
                    <svg width="16" height="16">
                      <path
                        d="M7,14v-2h9v2H7z M14,7h2v2h-2V7z M12.5,6C12.8,6,13,6.2,13,6.5v3c0,0.3-0.2,0.5-0.5,0.5h-2
                                                        C10.2,10,10,9.8,10,9.5v-3C10,6.2,10.2,6,10.5,6H12.5z M7,2h9v2H7V2z M5.5,5h-2C3.2,5,3,4.8,3,4.5v-3C3,1.2,3.2,1,3.5,1h2
                                                        C5.8,1,6,1.2,6,1.5v3C6,4.8,5.8,5,5.5,5z M0,2h2v2H0V2z M9,9H0V7h9V9z M2,14H0v-2h2V14z M3.5,11h2C5.8,11,6,11.2,6,11.5v3
                                                        C6,14.8,5.8,15,5.5,15h-2C3.2,15,3,14.8,3,14.5v-3C3,11.2,3.2,11,3.5,11z"
                      />
                    </svg>
                  </span>
                  <span class="filters-button__title">Axtar</span>
                  <span class="filters-button__counter">3</span>
                </button>

                <div className=" filter_area">

                  <select value={selectedWidth?.length === 1 && selectedWidth[0]} onChange={(e) => changeWidth(e.target.value)} className="form-control form-control-sm w-15">
                    <option value={''}>En</option>
                    {width?.map((wt) => (
                      <option value={wt.size}>{wt.size}</option>
                    ))}

                  </select>
                  <select value={selectedHeight?.length === 1 && selectedHeight[0]} onChange={(e) => changeHeight(e.target.value)} className="form-control form-control-sm w-15">
                    <option value={''}>Hündürlük</option>
                    {height?.map((hgt) => (
                      <option>{hgt?.size}</option>
                    ))}
                    
                  </select>
                  <select value={selectedRadius?.length === 1 && selectedRadius[0]} onChange={(e) => changeRadius(e.target.value)} className="form-control form-control-sm w-15">
                    <option value={''}>Radius</option>
                    {radius?.map((rds) => (
                      <option>{rds?.size}</option>
                    ))}
                    
                  </select>
                  <select value={selectedBrands?.length === 1 && selectedBrands[0]} onChange={(e) => changeMarka(e.target.value)} className="form-control form-control-sm w-15">
                    <option value={''}>Marka</option>
                    {brands?.map((brand) => (
                      <option value={brand?.title}>{brand?.title}</option>
                    ))}
                    
                  </select>
                  <select onChange={(e) => setSortPrice(e.target.value)} className="form-control form-control-sm w-15 form-sort">
                    <option value={'False'}>Yuxaridan Asagi</option>
                    <option value={'True'}>Asagidan Yuxari </option>
                  </select>
                </div>
              </div>
            </div>
            {tyres?.length >= 1 ? 
            <div className="d-flex flex-wrap all-products" style={{ width: '100%' }}>
              <InfiniteScroll 
                dataLength={limit}
                next={() => setLimit(limit => limit + 40)}
                hasMore={true || false}
                // loader={<h3>Loading...</h3>}
                style={{display:'flex', flexWrap:'wrap'}}
              >
              {tyres?.map((tyre) => (
                  <Product tire={tyre} />
              ))}
              </InfiniteScroll>
            </div>
          :
          emptyTyre === false && tyres?.length === 0 ?
          <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%'}}>
          <LoaderComponent/>  
          </div>
          :
          emptyTyre === true && tyres?.length === 0 &&
          <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%'}}>
          <span>Axtarışınıza uyğun nəticə tapılmadı.</span>
          </div>
          }
            
          </div>
        </div>
      </div>
      <div class="block-space block-space--layout--before-footer"></div>
    </div>
  );
};

export default SearchBody;
