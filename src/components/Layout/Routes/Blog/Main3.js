import React, { useEffect } from "react";
import Header from "./Header";
import Join from "../../Join/Join";
import Footer from "../../Footer/Footer";
import Blog from "./Blog";

const Main3 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);
  return (
    <>
      <Header />
      <Blog />
      <Join />
      <Footer />
    </>
  );
};

export default Main3;
