import React, { useState, useEffect } from "react";
import MobileHeader from "@/components/MobileHeader/MobileHeader";
import Header from "@/components/Header/Header";
import CalcSlider from "@/components/CalcSlider/CalcSlider";
import OurServices from "@/components/OurServices/OurServices";
import Banners from "@/components/Banners/Banners";
import NewProductsSlider from "@/components/NewProductsSlider/NewProductsSlider";
import Campaigns from "@/components/Campaigns/Campaigns";
import OutletSlider from "@/components/OutletSlider/OutletSlider";
import MarkaSlider from "@/components/MarkaSlider/MarkaSlider";
import Footer from "@/components/Footer/Footer";
import { baseUrl } from "./api/api";
import CompaniesSlider from "@/components/CompaniesSlider/CompaniesSlider";
import ScrollTop from "./scrollTop/scroll";
import LoaderComponent from "@/components/LoaderComponent/LoaderComponent";
import Head from "next/head";
import Modal from "react-bootstrap/Modal";
import styles from "../styles/Home.module.css";
import { useSelector, useDispatch } from "react-redux";
import { incrementReklam } from "@/redux/reducers/reklamSlice";
import WhatsappSticky from "../components/WhatsappSticky/WhatsappSticky";
import { persistor } from "@/redux/store/store";

const API_URL = "https://api.vianorbaku.az";
// The campaigns slider only renders this many products (see CompaniesSlider).
const MAX_DISCOUNT_PRODUCTS = 24;

// /discount's limit applies per campaign, so trim the flattened total as well
// to exactly what the slider shows.
const trimDiscountGroups = (groups) => {
  let remaining = MAX_DISCOUNT_PRODUCTS;
  return (groups ?? []).map((group) => {
    const products = (group?.products ?? []).slice(0, remaining);
    remaining -= products.length;
    return { ...group, products };
  });
};

export default function Home({
  slider,
  propHeight,
  propRadius,
  propWidth,
  propDiscountTyres,
}) {
  const FETCH_LIMIT = 5000;
  const [tires, setTires] = useState([]);
  const [discountLoading, setDiscountLoading] = useState(!propDiscountTyres);
  const [actionTyres, setActionTyres] = useState([]);
  // const [slider, setSlider] = useState([])
  const [width, setWidth] = useState([]);
  const [height, setHeight] = useState([]);
  const [radius, setRadius] = useState([]);
  const [brands, setBrands] = useState([]);
  const [marka, setMarka] = useState([]);
  const [discountTyres, setDiscountTyres] = useState(propDiscountTyres ?? []);
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState();

  const { count } = useSelector((state) => state.reklam);
  const dispatch = useDispatch();

  // Count the visit only after the persisted state is restored, otherwise
  // rehydration would overwrite the increment.
  useEffect(() => {
    if (persistor.getState().bootstrapped) {
      dispatch(incrementReklam());
      return;
    }
    const unsubscribe = persistor.subscribe(() => {
      if (persistor.getState().bootstrapped) {
        unsubscribe();
        dispatch(incrementReklam());
      }
    });
    return unsubscribe;
  }, []);

  const getNewTyres = async () => {
    try {
      const res = await baseUrl.get(`/new_tyres?limit=30`);
      setTires(res?.data?.results ?? []);
    } catch (e) {
      setTires([]);
    }
  };

  const getActionTyres = async () => {
    try {
      const res = await baseUrl.get(`/aksiya`);
      if (res?.status >= 200 && res?.status <= 300) {
        setActionTyres(res?.data ?? []);
      }
    } catch (e) {
      setActionTyres([]);
    }
  };

  const getDiscountTyres = async () => {
    setDiscountLoading(true);
    try {
      const res = await baseUrl.get(`/discount?limit=${MAX_DISCOUNT_PRODUCTS}`);
      if (res?.status >= 200 && res?.status <= 300) {
        setDiscountTyres(trimDiscountGroups(res?.data));
        setDiscountLoading(false);
      }
    } catch (e) {
      // Keep loader visible and retry in background until data arrives.
      setTimeout(getDiscountTyres, 5000);
    }
  };

  const getMarka = async () => {
    await baseUrl
      .get(`/markas?limit=${FETCH_LIMIT}`)
      .then((res) => setMarka(res.data.results));
  };

  useEffect(() => {
    setWidth(propWidth?.sort((a, b) => a.size - b.size) ?? []);
    setHeight(propHeight?.sort((a, b) => b.size - a.size).reverse() ?? []);
    setRadius(propRadius?.sort((a, b) => a.size - b.size) ?? []);
  }, [propHeight, propWidth, propRadius]);

  // const getSlider = async() => {
  //   await baseUrl.get(`/slider?limit=100000000`)
  //   .then(res => setSlider(res.data.results))
  // }

  // const getWidth = async() => {
  //   await baseUrl.get(`/tyre_width?limit=100000000`)
  //   .then(res => {
  //     const {data} = res
  //     const results = data?.results?.sort((a,b) => a.size - b.size)
  //     setWidth(results)
  //   })
  // }

  // const getHeight = async() => {
  //   await baseUrl.get(`/tyre_height?limit=100000000`)
  //   .then(res => {
  //     const {data} = res
  //     const results = data?.results?.sort((a,b) => b.size - a.size)
  //     setHeight(results.reverse())
  //   })
  // }

  // const getRadius = async() => {
  //   await baseUrl.get(`/tyre_diametr?limit=100000000`)
  //   .then(res => {
  //     const {data} = res
  //     const results = data?.results?.sort((a,b) => a.size - b.size)
  //     setRadius(results)
  //   })
  // }

  const getBrands = async () => {
    await baseUrl
      .get(`/brands?limit=${FETCH_LIMIT}`)
      .then((res) => setBrands(res.data));
  };

  useEffect(() => {
    // The popup modal is disabled below, so /popup is no longer requested.
    getNewTyres();
    getActionTyres();
    // Normally provided by getStaticProps; fetch here only if that failed.
    if (!propDiscountTyres) {
      getDiscountTyres();
    }
    // getSlider()
    // getWidth()
    // getHeight()
    // getRadius()
    getBrands();
    getMarka();
  }, []);

  const handleCancel = (e) => {
    setModal(false);
  };

  return (
    <>
      <Head>
        <title>Vianor təkər mərkəzi</title>
        <link rel="shortcut icon" href="/vianorLogo.jpg" />
      </Head>
      <div class="site">
        <MobileHeader />
        <Header />
        <CalcSlider
          markas={marka}
          height={height}
          radius={radius}
          width={width}
          slider={slider}
        />
        <OurServices />
        {actionTyres?.length >= 1 && (
          <CompaniesSlider title={"Aksiyalar"} compaines={actionTyres} />
        )}
        {discountTyres?.length >= 1 && discountLoading === false ? (
          <CompaniesSlider title={"Kampaniyalar"} compaines={discountTyres} />
        ) : (
          <div
            className="d-flex justify-content-center align-items-center w-100"
            style={{ height: "100px" }}
          >
            <LoaderComponent />
          </div>
        )}
        {/* <Banners/> */}
        <NewProductsSlider tires={tires} />
        <Campaigns />
        {/* <OutletSlider/> */}
        <MarkaSlider brands={brands} />
        <Footer />
        {/* <Modal show={modal && count%3 === 0} className={styles.modalPop} onBackdropClick={handleCancel}>
        <span onClick={handleCancel} style={{cursor:'pointer', marginLeft:'95%', marginTop:'10px'}}>x</span>
        <div className="w-100 mt-4" style={{display:'flex', justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}>
        <span style={{marginLeft:'5px', fontWeight:600}}>{modalData?.title}</span>
        <img className="w-100 mt-2" src={modalData?.image} width={'100%'}/>
        </div>
      </Modal> */}
      </div>
      <WhatsappSticky />
    </>
  );
}

const fetchJson = async (path) => {
  try {
    const res = await fetch(`${API_URL}${path}`);
    return await res.json();
  } catch (e) {
    return null;
  }
};

export async function getStaticProps() {
  const [slider, propWidth, propHeight, propRadius, discount] =
    await Promise.all([
      fetchJson(`/slider?limit=100000000`),
      fetchJson(`/tyre_width?limit=100000000`),
      fetchJson(`/tyre_height?limit=100000000`),
      fetchJson(`/tyre_diametr?limit=100000000`),
      fetchJson(`/discount?limit=${MAX_DISCOUNT_PRODUCTS}`),
    ]);
  return {
    props: {
      slider: slider?.results ?? [],
      propWidth: propWidth?.results ?? [],
      propHeight: propHeight?.results ?? [],
      propRadius: propRadius?.results ?? [],
      propDiscountTyres: Array.isArray(discount)
        ? trimDiscountGroups(discount)
        : null,
    },
    revalidate: 10,
  };
}
