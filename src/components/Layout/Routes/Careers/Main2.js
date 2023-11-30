import React, { useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Join from "../../Join/Join";
import Footer from "../../Footer/Footer";
import Benefits from "./Benefits";
import Roles from "./Roles";
import Experience from "./Experience";

const Main2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);
  return (
    <>
      <Header />
      <Main />
      <Experience />
      <Benefits />
      <Roles />
      <Join />
      <Footer />
    </>
  );
};

export default Main2;
