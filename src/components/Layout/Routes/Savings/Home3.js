import React, { useEffect } from "react";
import Headers2 from "./Headers2";
import Join from "../../Join/Join";
import Footer from "../../Footer/Footer";
import Steps from "./Steps";
import Savings from "./Savings";

const Home3 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);
  return (
    <>
      <Headers2 />
      <Steps />
      <Savings />
      <Join />
      <Footer />
    </>
  );
};

export default Home3;
