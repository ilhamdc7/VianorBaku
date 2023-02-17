import React, {useState, useEffect} from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import SearchBody from '@/components/SearchBody/SearchBody'
import { baseUrl } from '../api/api'
import { useRouter } from 'next/router'
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


  const [selectedBrands, setSelectedBrands] = useState([])
  const [selectedWidth, setSelectedWidth] = useState([])

  console.log(selectedBrands, 'ashdushadusa')

  const {query} = useRouter()
  useEffect(() => {
    if(query?.brand?.length >= 1){
      setSelectedBrands(query.brand.split(','))
    }
  },[query?.brand])

  useEffect(() => {
    getFilteredProducts()
  },[selectedBrands, selectedWidth])

  const getSelectedBrandsData = (data) =>{
    const results = selectedBrands?.find(item => item === data)
    if(results == undefined){
      setSelectedBrands([...selectedBrands, data])
    }else{
      const newSelectedList = selectedBrands.filter(item => item !==data)
      setSelectedBrands(newSelectedList)
    }
    
  }
  console.log(tyres)

  const getSelectedWidthData = (data) => {
    const results = selectedWidth?.find(item => item === data)
    if(results == undefined){
      setSelectedWidth([...selectedWidth, data])
    }else{
      const newSelectedList = selectedWidth.filter(item => item !==data)
      setSelectedWidth(newSelectedList)
    }
  }
  
  const getFilteredProducts = async() => {
    await baseUrl.get(`/tyre-filter?brand=${String(selectedBrands ?? '')}&width=${String(selectedWidth)}`)
    .then(res => {
      const {data,status} = res
      if(status>=200 && status<=300 ){
        setTyres(data?.results)
      }
    })
  }

  useEffect(() => {
    getBrands()
    getWidth()
  },[])

  const getBrands = async() => {
    await baseUrl.get(`/brands`)
    .then(res => {
      const {data} = res
      setBrands(data)
    })
  }

  // console.log(selectedWidth,'asdhsaygdsa')

  const getWidth = async() =>{
    await baseUrl.get(`tyre_width`)
    .then(res => {
      const {data} = res
      setWitdh(data.results)
    })
  } 

  return (
    <>
        <Header/>
        <SearchBody tyres={tyres} selectedBrands={selectedBrands} brands={brands} getSelectedWidthData={getSelectedWidthData} width={width} getSelectedBrandsData={getSelectedBrandsData}/>
        <Footer/>
    </>
  )
}

export default index