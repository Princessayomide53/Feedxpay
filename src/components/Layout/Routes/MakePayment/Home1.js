import React, { useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Join from "../../Join/Join";
import Footer from "../../Footer/Footer";
import Easy from "./Easy";

const Home1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);
  return (
    <div>
      <Header />
      <Main />
      <Easy />
      <Join />
      <Footer />
    </div>
  );
};

export default Home1;
