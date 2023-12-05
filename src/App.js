import "./App.css";
import Hero from "./components/Layout/Hero/Hero";
import Nav from "./components/Layout/NavBar/Nav";
import Main from "./components/Layout/Main/Main";
import Part from "./components/Layout/Part/Part";
import Join from "./components/Layout/Join/Join";
import Footer from "./components/Layout/Footer/Footer";
import { useState, useEffect } from "react";
import Products from "./components/Layout/NavBar/Products";
import Company from "./components/Layout/NavBar/Company";
import Support from "./components/Layout/NavBar/Support";
// import { IoIosArrowRoundUp } from "react-icons/io";
// import RouterComponent from "./components/Layout/RouterComponent/RouterComponent";
// import Subscribe from "./components/Layout/Footer/Subscribe";

function App() {
  const [modal, setModals] = useState(false);
  const [openModals, setOpenModals] = useState(false);
  const [supportModal, setSupportModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);

  const openModal = () => {
    setModals(true);
  };
  const closeModal = () => {
    setModals(false);
  };

  const handleModal = () => {
    setOpenModals(true);
  };
  const handleCloseModal = () => {
    setOpenModals(false);
  };

  const handleSupportModal = () => {
    setSupportModal(true);
  };

  const handleCloseSupportModal = () => {
    setSupportModal(false);
  };

  return (
    <div className="">
      <Nav
        onClick={openModal}
        onOpen={handleModal}
        onSet={handleSupportModal}
      />
      {modal && <Products onHideModal={closeModal} />}
      {openModals && <Company onHideModals={handleCloseModal} />}
      {supportModal && <Support onHideSupportModal={handleCloseSupportModal} />}
      <Hero />
      <Main />
      <Part />
      <Join />
      <Footer />
      {/* <RouterComponent /> */}
      {/* <Subscribe /> */}
      {/* <Patners /> */}
      {/* <div className="relative">
        <IoIosArrowRoundUp className="absolute -top-[5rem] z-20 right-10 text-black text-lg bg-[#EBFFF5] w-14 h-14 rounded-lg" />
      </div> */}
    </div>
  );
}

export default App;
