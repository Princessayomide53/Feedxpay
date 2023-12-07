import React, { useState, useEffect } from "react";
import "../App.css";
import Hero from "./Layout/Hero/Hero";
import Nav from "./Layout/NavBar/Nav";
import Main from "./Layout/Main/Main";
import Part from "./Layout/Part/Part";
import Join from "./Layout/Join/Join";
import Footer from "./Layout/Footer/Footer";
import Products from "./Layout/NavBar/Products";
import Company from "./Layout/NavBar/Company";
import Support from "./Layout/NavBar/Support";

const Individual = () => {
  const [modal, setModal] = useState(false);
  const [openModals, setOpenModals] = useState(false);
  const [supportModal, setSupportModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
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
    <div>
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
    </div>
  );
};

export default Individual;
