import React, { useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Hear from "./Hear";
import Provide from "./Provide";
import Patners from "../../Part/Patners";
import Join from "../../Join/Join";
import Footer from "../../Footer/Footer";
import Team from "./Team";

const Main1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);
  return (
    <>
      <Header />
      <Main />
      <Hear />
      <Provide />
      <Patners />
      <Team />
      <Join />
      <Footer />
    </>
  );
};

export default Main1;
