import React, { useEffect } from "react";
import Header from "./Header";
import Join from "../../Join/Join";
import Footer from "../../Footer/Footer";

const Support4 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);
  return (
    <>
      <Header />
      <Join />
      <Footer />
    </>
  );
};

export default Support4;
