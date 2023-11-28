import React from "react";
import Header from "./Header";
import Main from "./Main";
import Join from "../../Join/Join";
import Footer from "../../Footer/Footer";
import Benefits from "./Benefits";
import Roles from "./Roles";

const Home = () => {
  return (
    <>
      <Header />
      <Main />
      <Benefits />
      <Roles />
      <Join />
      <Footer />
    </>
  );
};

export default Home;
