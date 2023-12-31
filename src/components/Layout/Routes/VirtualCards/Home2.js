import React, { useEffect } from "react";
import Header2 from "./Header2";
import Main from "./Main";
import Join from "../../Join/Join";
import Footer from "../../Footer/Footer";
import Manage from "./Manage";

const Home2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);
  return (
    <>
      <Header2 />
      <Main />
      <Manage />
      <Join />
      <Footer />
    </>
  );
};

export default Home2;
