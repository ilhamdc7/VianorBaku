import React, { useState, useEffect } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import MarkaBody from "@/components/MarkaBody/MarkaBody";
import { baseUrl } from "../api/api";
import MobileHeader from '@/components/MobileHeader/MobileHeader'
import Head from "next/head";
const index = () => {
  const [markas, setMarkas] = useState([]);

  const getMarka = async () => {
    await baseUrl.get(`/brands`).then((res) => setMarkas(res.data));
  };

  useEffect(() => {
    getMarka();
  }, []);

  return (
    <>
    <Head>
        <title>Vianor təkər mərkəzi</title>
        <link rel="shortcut icon" href="/vianorLogo.jpg" />

      </Head>
    <MobileHeader/>
      <Header />
      <MarkaBody markas={markas} />
      <Footer />
    </>
  );
};

export default index;
