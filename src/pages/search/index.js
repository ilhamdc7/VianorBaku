import React, {useState, useEffect} from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
// import MobileHeader from '@/components/MobileHeader/MobileHeader'
import SearchBody from '@/components/SearchBody/SearchBody'
import { baseUrl } from '../api/api'
import { useRouter } from 'next/router'
import { useDebounce } from 'use-debounce';
import { useMount, useUpdateEffect } from 'ahooks'
import MobileHeader from '@/components/MobileHeader/MobileHeader'

import $ from "jquery"

const index = () => {
  
useEffect(()=>{
  $(function() {
    $('[data-collapse]').each(function(i, element) {
        const collapse = element;
        const openedClass = $(element).data('collapse-opened-class');

        $('[data-collapse-trigger]', collapse).on('click', function() {
            const item = $(this).closest('[data-collapse-item]');
            const content = item.children('[data-collapse-content]');
            const itemParents = item.parents();

            itemParents.slice(0, itemParents.index(collapse) + 1).filter('[data-collapse-item]').css('height', '');

            if (item.is('.' + openedClass)) {
                const startHeight = content.height();

                content.css('height', startHeight + 'px');
                content.height(); // force reflow
                item.removeClass(openedClass);

                content.css('height', '');
            } else {
                const startHeight = content.height();

                item.addClass(openedClass);

                const endHeight = content.height();

                content.css('height', startHeight + 'px');
                content.height(); // force reflow
                content.css('height', endHeight + 'px');
            }
        });

        $('[data-collapse-content]', collapse).on('transitionend', function(event) {
            if (event.originalEvent.propertyName === 'height') {
                $(this).css('height', '');
            }
        });
    });
})

    /*
    // off canvas filters
    */
    $(function() {
      const body = $('body');
      const sidebar = $('.sidebar');
      const offcanvas = sidebar.hasClass('sidebar--offcanvas--mobile') ? 'mobile' : 'always';
      const media = matchMedia('(max-width: 991px)');

      if (sidebar.length) {
          const open = function() {
              if (offcanvas === 'mobile' && !media.matches) {
                  return;
              }

              const bodyWidth = body.width();
              body.css('overflow', 'hidden');
              body.css('paddingRight', (body.width() - bodyWidth) + 'px');

              sidebar.addClass('sidebar--open');
          };
          const close = function() {
              body.css('overflow', 'auto');
              body.css('paddingRight', '');

              sidebar.removeClass('sidebar--open');
          };
          const onMediaChange = function() {
              if (offcanvas === 'mobile') {
                  if (!media.matches && sidebar.hasClass('sidebar--open')) {
                      close();
                  }
              }
          };

          if (media.addEventListener) {
              media.addEventListener('change', onMediaChange);
          } else {
              media.addListener(onMediaChange);
          }

          $('.filters-button').on('click', function() {
              open();
          });
          $('.sidebar__backdrop, .sidebar__close').on('click', function() {
              close();
          });
      }
  });

})


  const [tyres, setTyres] = useState([])
  const [brands, setBrands] = useState([])
  const [width, setWitdh] = useState([])  
  const [height, setHeight] = useState([])
  const [radius, setRadius] = useState([])
  const [emptyTyre, setEmptyTyre] = useState(false)

  const [limit, setLimit] = useState(40)
  const [selectedBrands, setSelectedBrands] = useState([])
  const [selectedWidth, setSelectedWidth] = useState([])
  const [selectedHeight, setSelectedHeight] = useState([])
  const [selectedRadius, setSelectedRadius] = useState([])
  const [range, setRange] = React.useState([0, 2000]);
  const [minPrice] = useDebounce(range[0], 400)
  const [maxPrice] = useDebounce(range[1], 400)
  const [sortPrice, setSortPrice] = useState('')
  const [selectedSeason, setSelectedSeason] = useState('')


  const router = useRouter()
  const {query} = useRouter()
  useEffect(() => {
    if(query?.brand?.length >= 1){
      setSelectedBrands(query.brand.split(','))
    }
    if(query?.width?.length >= 1){
      setSelectedWidth(query.width.split(','))
    }
    if(query?.height?.length >= 1){
      setSelectedHeight(query.height.split(','))
    }
    if(query?.diametr?.length >= 1){
      setSelectedRadius(query.diametr.split(','))
    }
    if(query?.season?.length >= 1){
      setSelectedSeason(query?.season)
    }
  },[query?.brand,query?.width,query?.height,query?.radius])


  useEffect(() => {
    if(selectedBrands.length >= 1){
      query.sbrand = ''
    }
  },[selectedBrands])


useUpdateEffect(() => {
  router.push(`/search?width=${selectedWidth}`)
},[selectedWidth])
  
  useUpdateEffect(() => {
    getFilteredProducts()
  },[selectedBrands, selectedWidth,selectedHeight,minPrice, maxPrice,selectedRadius, sortPrice, selectedSeason, query?.sbrand,limit])
  
  useMount(() => {
    if(query?.sbrand?.length >= 1){
      getFilteredProducts()
    }
  })

  const getSelectedBrandsData = (data) =>{
    const results = selectedBrands?.find(item => item === data)
    if(results == undefined){
      setSelectedBrands([...selectedBrands, data])
    }else{
      const newSelectedList = selectedBrands.filter(item => item !==data)
      setSelectedBrands(newSelectedList)
    }
    
  }

  const getSelectedWidthData = (data) => {
    const results = selectedWidth?.find(item => item === data)
    if(results == undefined){
      setSelectedWidth([...selectedWidth, data])
    }else{
      const newSelectedList = selectedWidth.filter(item => item !==data)
      setSelectedWidth(newSelectedList)
    }
  }

  const getSelectedHeightData = (data) => {
    const results = selectedHeight?.find(item => item === data)
    if(results == undefined){
      setSelectedHeight([...selectedHeight, data])
    }else{
      const newSelectedList = selectedHeight.filter(item => item !==data)
      setSelectedHeight(newSelectedList)
    }
  }

  const getSelectedRadiusData = (data) => {
    const results = selectedRadius?.find(item => item === data)
    if(results == undefined){
      setSelectedRadius([...selectedRadius, data])
    }else{
      const newSelectedList = selectedRadius.filter(item => item !==data)
      setSelectedRadius(newSelectedList)
    }
  }

  useUpdateEffect(() => {
    setLimit(40)
    setTyres([])
  },[selectedBrands, selectedWidth,selectedHeight,minPrice, maxPrice,selectedRadius, sortPrice, selectedSeason, query?.sbrand])
  
  const getFilteredProducts = async() => {
    setEmptyTyre(false)
    await baseUrl.get(`/tyre-filter?search_brand=${query?.sbrand ?? ''}&brand=${String(selectedBrands ?? '')}&width=${String(selectedWidth)}&height=${String(selectedHeight)}&min_price=${minPrice}&max_price=${maxPrice}&diametr=${String(selectedRadius)}&sort_price=${sortPrice}&season=${selectedSeason}&limit=${limit}`)
    .then(res => {
      const {data,status} = res
      if(status>=200 && status<=300 ){
        if(data?.results?.length >= 1){
          setTyres(data?.results)
          setEmptyTyre(false)
        }else{
          setEmptyTyre(true)
        }
      }
    })
  }

  useEffect(() => {
    getBrands()
    getWidth()
    getHeight()
    getRadius()
  },[])

  const getBrands = async() => {
    await baseUrl.get(`/brands?limit=1000000`)
    .then(res => {
      const {data} = res
      setBrands(data)
    })
  }


  const getWidth = async() =>{
    await baseUrl.get(`tyre_width?limit=100000000000000`)
    .then(res => {
      const {data} = res
      setWitdh(data.results)
    })
  } 

  const getHeight = async() => {
    await baseUrl.get(`tyre_height?limit=100000000000000`)
    .then(res => setHeight(res.data.results))
  }

  const getRadius = async() => {
    await baseUrl.get(`/tyre_diametr?limit=100000000000000`)
    .then(res => setRadius(res?.data?.results))
  }

  return (
    <>
     
        <Header/>
        <MobileHeader/>
        <SearchBody 
          range={range} 
          setRange={setRange} 
          getSelectedHeightData={getSelectedHeightData} 
          selectedHeight={selectedHeight} 
          tyres={tyres} 
          height={height} 
          selectedBrands={selectedBrands} 
          brands={brands} 
          getSelectedWidthData={getSelectedWidthData} 
          width={width} 
          getSelectedBrandsData={getSelectedBrandsData}
          getSelectedRadiusData={getSelectedRadiusData}
          radius={radius}
          setSelectedBrands={setSelectedBrands}
          setSelectedHeight={setSelectedHeight}
          setSelectedRadius={setSelectedRadius}
          setSelectedWidth={setSelectedWidth}
          setSortPrice={setSortPrice}
          selectedWidth={selectedWidth}
          selectedRadius={selectedRadius}
          setLimit={setLimit}
          limit={limit}
          emptyTyre={emptyTyre}
        />
        <Footer/>
    </>
  )
}

export default index