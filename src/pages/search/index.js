import React, {useState, useEffect, useRef} from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
// import MobileHeader from '@/components/MobileHeader/MobileHeader'
import SearchBody from '@/components/SearchBody/SearchBody'
import { baseUrl } from '../api/api'
import { useRouter } from 'next/router'
import { useDebounce } from 'use-debounce';
import { useMount, useUpdateEffect } from 'ahooks'
import { isNil } from 'lodash'
import MobileHeader from '@/components/MobileHeader/MobileHeader'
import Head from 'next/head'

import $ from "jquery"

const PAGE_SIZE = 40
const API_URL = 'https://api.vianorbaku.az'

// Sort copies: sorting the props array in place leaks into the serialized page data,
// and the client would then re-sort an already sorted list (sizes like "R" compare as NaN).
const sortWidth = (list) => [...(list ?? [])].sort((a,b) => Number(a.size) - Number(b.size))
const sortHeight = (list) => [...(list ?? [])].sort((a,b) => b.size - a.size).reverse()
const sortRadius = (list) => [...(list ?? [])].sort((a,b) => a.size - a.size)

const index = ({ propBrands, propWidth, propHeight, propRadius }) => {

// Bind once on mount; namespaced events let the cleanup remove exactly these handlers.
useEffect(()=>{
  let mediaQuery
  let onMediaChange;

  (function() {
    $('[data-collapse]').each(function(i, element) {
        const collapse = element;
        const openedClass = $(element).data('collapse-opened-class');

        $('[data-collapse-trigger]', collapse).on('click.searchFilters', function() {
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

        $('[data-collapse-content]', collapse).on('transitionend.searchFilters', function(event) {
            if (event.originalEvent.propertyName === 'height') {
                $(this).css('height', '');
            }
        });
    });
})();

    /*
    // off canvas filters
    */
    (function() {
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
          onMediaChange = function() {
              if (offcanvas === 'mobile') {
                  if (!media.matches && sidebar.hasClass('sidebar--open')) {
                      close();
                  }
              }
          };
          mediaQuery = media;

          if (media.addEventListener) {
              media.addEventListener('change', onMediaChange);
          } else {
              media.addListener(onMediaChange);
          }

          $('.filters-button').on('click.searchFilters', function() {
              open();
          });
          $('.sidebar__backdrop, .sidebar__close').on('click.searchFilters', function() {
              close();
          });
      }
  })();

  return () => {
    $('[data-collapse-trigger], [data-collapse-content], .filters-button, .sidebar__backdrop, .sidebar__close').off('.searchFilters')
    if (mediaQuery && onMediaChange) {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', onMediaChange)
      } else {
        mediaQuery.removeListener(onMediaChange)
      }
    }
  }
},[])


  const [tyres, setTyres] = useState([])
  const [newTyres, setNewTyres] = useState([])
  const [brands, setBrands] = useState(propBrands ?? [])
  const [width, setWitdh] = useState(sortWidth(propWidth))
  const [height, setHeight] = useState(sortHeight(propHeight))
  const [radius, setRadius] = useState(sortRadius(propRadius))
  const [emptyTyre, setEmptyTyre] = useState(false)

  const [hasMore, setHasMore] = useState(false)
  const requestRef = useRef(null)
  // Rows received from the API so far; used as the next offset.
  const loadedCountRef = useRef(0)
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
  // Keep the current array when the URL holds the same values, so the router.push
  // below doesn't come back as a "new" filter and trigger a second identical request.
  const syncFromQuery = (value) => (prev) => prev.join(',') === value ? prev : value.split(',')
  useEffect(() => {
    if(query?.brand?.length >= 1){
      setSelectedBrands(syncFromQuery(query.brand))
    }
    if(query?.width?.length >= 1){
      setSelectedWidth(syncFromQuery(query.width))
    }
    if(query?.height?.length >= 1){
      setSelectedHeight(syncFromQuery(query.height))
    }
    if(query?.diametr?.length >= 1){
      setSelectedRadius(syncFromQuery(query.diametr))
    }
    if(query?.season?.length >= 1){
      setSelectedSeason(query?.season)
    }
  },[query?.brand,query?.width,query?.height,query?.diametr])


  useEffect(() => {
    if(selectedBrands.length >= 1){
      query.sbrand = ''
    }
  },[selectedBrands])


useUpdateEffect(() => {
  const url = `/search?width=${selectedWidth}&height=${selectedHeight}&diametr=${selectedRadius}&brand=${selectedBrands}`
  // Skip the redundant navigation when the state was just populated from this same URL.
  if (router.asPath !== url) {
    router.push(url)
  }
},[selectedWidth,selectedHeight,selectedRadius,selectedBrands])

  // Any filter change starts over from the first page.
  useUpdateEffect(() => {
    setTyres([])
    setHasMore(false)
    getFilteredProducts(0)
  },[selectedBrands, selectedWidth,selectedHeight,minPrice, maxPrice,selectedRadius, sortPrice, selectedSeason, query?.sbrand])

  useMount(() => {
    if(query?.sbrand?.length >= 1){
      getFilteredProducts(0)
    }
  })

  useEffect(() => () => requestRef.current?.abort(), [])

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

  // offset 0 replaces the list (new filter); a larger offset appends the next page.
  // A newer request aborts the previous one so a stale response can't overwrite fresh results.
  const getFilteredProducts = async(offset = 0) => {
    requestRef.current?.abort()
    const controller = new AbortController()
    requestRef.current = controller

    if(offset === 0){
      setEmptyTyre(false)
    }
    try {
      const res = await baseUrl.get(`/tyre-filter?search_brand=${query?.sbrand ?? ''}&brand=${String(selectedBrands ?? '')}&width=${String(selectedWidth)}&height=${String(selectedHeight)}&min_price=${minPrice}&max_price=${maxPrice}&diametr=${String(selectedRadius)}&sort_price=${sortPrice}&season=${selectedSeason}&limit=${PAGE_SIZE}&offset=${offset}`, { signal: controller.signal })
      const {data,status} = res
      if(status>=200 && status<=300 ){
        const results = data?.results ?? []
        setHasMore(!!data?.next && results.length >= 1)
        loadedCountRef.current = offset + results.length
        if(offset === 0){
          if(results.length >= 1){
            setTyres(results)
            setEmptyTyre(false)
          }else{
            setEmptyTyre(true)
          }
        }else{
          setTyres(prev => {
            const ids = new Set(prev.map(tyre => tyre?.id))
            return [...prev, ...results.filter(tyre => !ids.has(tyre?.id))]
          })
        }
      }
    } catch (e) {
      if(e?.code !== 'ERR_CANCELED'){
        console.error(e)
      }
    } finally {
      if(requestRef.current === controller){
        requestRef.current = null
      }
    }
  }

  const loadMore = () => {
    // Don't stack a page request on top of one that is still loading.
    if(requestRef.current) return
    getFilteredProducts(loadedCountRef.current)
  }

  const sortTyres = () => {
    if(!!tyres?.length){
      const newTyresList = tyres?.map((tyre) => {
        let newTyre = tyre
        if(!isNil(tyre?.companies?.end_date)){
          if(!!tyre?.companies?.manat_discount){
            const newPrice = (tyre?.price - tyre?.companies?.manat_discount).toFixed(2)
            newTyre["discount_price"] = newPrice

          }else{
            const newPrice = (tyre?.price - (tyre?.price * tyre?.companies?.percent_discount / 100)).toFixed(2)
            newTyre["discount_price"] = newPrice
          }
          return newTyre
        }else{
          newTyre['discount_price'] = tyre?.price
        }
        return newTyre
      })
      const sortedPrice = newTyresList?.sort((a,b) => Number(a.discount_price) - Number(b.discount_price))
      setNewTyres(sortedPrice)
    }
  }


  useEffect(() => {
    if(tyres.length === 0){
      setNewTyres([])
    }
  },[tyres])

  // Filter options normally arrive via getStaticProps; fetch only the ones that came back empty.
  useEffect(() => {
    if(!propBrands?.length) getBrands()
    if(!propWidth?.length) getWidth()
    if(!propHeight?.length) getHeight()
    if(!propRadius?.length) getRadius()
  },[])


  useEffect(() => {
    sortTyres()
  },[tyres])
  const getBrands = async() => {
    await baseUrl.get(`/brands?limit=1000000`)
    .then(res => {
      const {data} = res
      setBrands(data)
    })
  }


  const getWidth = async() =>{
    await baseUrl.get(`tyre_width?limit=100000000000000`)
    .then(res => setWitdh(sortWidth(res?.data?.results)))
  }

  const getHeight = async() => {
    await baseUrl.get(`tyre_height?limit=100000000000000`)
    .then(res => setHeight(sortHeight(res?.data?.results)))
  }

  const getRadius = async() => {
    await baseUrl.get(`/tyre_diametr?limit=100000000000000`)
    .then(res => setRadius(sortRadius(res?.data?.results)))
  }

  return (
    <>
     <Head>
        <title>Vianor təkər mərkəzi</title>
        <link rel="shortcut icon" href="/vianorLogo.jpg" />

      </Head>
        <Header/>
        <MobileHeader/>
        <SearchBody 
          range={range} 
          setRange={setRange} 
          getSelectedHeightData={getSelectedHeightData} 
          selectedHeight={selectedHeight} 
          tyres={newTyres} 
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
          loadMore={loadMore}
          hasMore={hasMore}
          emptyTyre={emptyTyre}
        />
        <Footer/>
    </>
  )
}

const fetchResults = async (path) => {
  try {
    const res = await fetch(`${API_URL}${path}`)
    return await res.json()
  } catch (e) {
    return null
  }
}

export async function getStaticProps() {
  const [propBrands, resWidth, resHeight, resRadius] = await Promise.all([
    fetchResults(`/brands?limit=1000000`),
    fetchResults(`/tyre_width?limit=100000000`),
    fetchResults(`/tyre_height?limit=100000000`),
    fetchResults(`/tyre_diametr?limit=100000000`),
  ])
  return {
    props: {
      propBrands: Array.isArray(propBrands) ? propBrands : [],
      propWidth: resWidth?.results ?? [],
      propHeight: resHeight?.results ?? [],
      propRadius: resRadius?.results ?? [],
    },
    revalidate: 60,
  }
}

export default index