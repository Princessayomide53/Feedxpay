import React, { useEffect } from "react";
import Join from "../../Join/Join";
import Footer from "../../Footer/Footer";
import Header from "./Header";
import Patners from "../../Part/Patners";
import Main from "./Main";
import CustomInputs from "./CustomInputs";

const Support2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);
  return (
    <>
      <Header />
      <Main />
      <Patners />
      <CustomInputs />
      <Join />
      <Footer />
    </>
  );
};

export default Support2;
