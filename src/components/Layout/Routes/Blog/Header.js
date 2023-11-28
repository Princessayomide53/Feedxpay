import React, { useState } from "react";
import Nav from "../../NavBar/Nav";
import Products from "../../NavBar/Products";
import Company from "../../NavBar/Company";

const Header = () => {
  const [modal, setModals] = useState(false);
  const [openModals, setOpenModals] = useState(false);

  const openModal = () => {
    setModals(true);
  };

  const handleModal = () => {
    setOpenModals(true);
  };

  return (
    <>
      <Nav onClick={openModal} onOpen={handleModal} />
      {modal && <Products onHideModal={() => setModals(false)} />}
      {openModals && <Company onHideModals={() => setOpenModals(false)} />}
    </>
  );
};

export default Header;
