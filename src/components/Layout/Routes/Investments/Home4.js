import React, { useEffect } from "react";
import Header4 from "./Header4";
import Main from "./Main";
import Interest from "./Interest";
import Frequent from "./Frequent";
import Join from "../../Join/Join";
import Footer from "../../Footer/Footer";

const Home4 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);
  return (
    <>
      <Header4 />
      <Main />
      <Interest />
      <Frequent />
      <Join />
      <Footer />
    </>
  );
};

export default Home4;
