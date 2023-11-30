import React, { useState } from "react";
import Nav from "../../NavBar/Nav";
import Partner from "../../../../Assets/Partner.png";
import Support from "../../NavBar/Support";
import Company from "../../NavBar/Company";
import Products from "../../NavBar/Products";

const Header = () => {
  const [modal, setModals] = useState(false);
  const [openModals, setOpenModals] = useState(false);
  const [supportModal, setSupportModal] = useState(false);

  const openModal = () => {
    setModals(true);
  };

  const handleModal = () => {
    setOpenModals(true);
  };

  const handleSupportModal = () => {
    setSupportModal(true);
  };

  return (
    <>
      <Nav
        onClick={openModal}
        onOpen={handleModal}
        onSet={handleSupportModal}
      />
      {modal && <Products onHideModal={() => setModals(false)} />}
      {openModals && <Company onHideModals={() => setOpenModals(false)} />}
      {supportModal && (
        <Support onHideSupportModal={() => setSupportModal(false)} />
      )}
      <section className="relative">
        <header className="pt-[2.5rem] relative">
          <img src={Partner} alt="" className="w-full" />
          <div className="overlay absolute top-0 left-0 w-full h-full bg-[#b8d4c6] bg-opacity-50"></div>
          <div className="text-overlay absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pt-[6.25rem]">
            <h1 className="text-[#1D1D1F] text-[2.875rem] font-extrabold leading-[4.375rem]">
              <span className="text-[#017A59]"> Partner</span> with Feedxpay
              today <br />
              and increase your revenue
            </h1>
            <p className="pt-[2.5rem] text-[#1D1D1F] text-[1.5rem] font-medium leading-[2.3125rem] tracking-[-0.03rem]">
              Collaborate with us today and start generating more <br />
              revenue, add value and expand your business.
            </p>
            <button className="mt-[4.56rem]  px-7 py-3 rounded-lg bg-[#017A59] text-white text-[1.125rem] font-semibold leading-[1.5rem] tracking-[-0.0225rem]">
              Become a Partner
            </button>{" "}
          </div>{" "}
        </header>
      </section>
    </>
  );
};

export default Header;
