import React, { useState } from "react";
import Nav from "../../NavBar/Nav";
import Careers from "../../../../Assets/Careers.png";
import Careers1 from "../../../../Assets/Careers1.png";
import Company from "../../NavBar/Company";
import Products from "../../NavBar/Products";
import Support from "../../NavBar/Support";

const Header = () => {
  const [modal, setModal] = useState(false);
  const [openModals, setOpenModals] = useState(false);
  const [supportModal, setSupportModal] = useState(false);

  const openModal = () => {
    setModal(true);
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
      {modal && <Products onHideModal={() => setModal(false)} />}
      {openModals && <Company onHideModals={() => setOpenModals(false)} />}
      {supportModal && (
        <Support onHideSupportModal={() => setSupportModal(false)} />
      )}
      <section className="background h-[65.12rem]">
        <header className="max-w-[83rem] mx-auto flex justify-around pt-[9.5rem]">
          <div className="pt-[7.75rem]">
            <img src={Careers1} alt="" className="w-[21.25rem] h-[40.25rem]" />
          </div>
          <div className="pt-[6.25rem]">
            <h2 className="text-[#017A59] text-center pb-[3.31rem] text-[1.5rem] font-semibold leading-[2.3125rem] tracking-[-0.03rem]">
              Feedxpay Career
            </h2>
            <h4 className="text-[#1D1D1F] text-[2rem] font-bold leading-[3rem] pb-[2.31rem]">
              Where dreamers and doers thrive
            </h4>
            <div className="flex justify-center flex-col items-center">
              <p className="pb-[2rem] text-[#1D1D1F] text-[1.375rem] font-medium leading-[1.875rem] tracking-[-0.0275rem]">
                Are you ready to be a part of a dynamic team that is
                <br /> all out to reshape the future of financial services?
                <br />
              </p>
              <p className="pb-[2rem] text-[#1D1D1F] text-[1.375rem] font-medium leading-[1.875rem] tracking-[-0.0275rem]">
                At FeedXPay, we believe in the power of innovation,
                <br /> collaboration, and a shared commitment to <br />{" "}
                excellence.
              </p>
              <p className="text-[#1D1D1F] text-[1.375rem] font-medium leading-[1.875rem] tracking-[-0.0275rem]">
                Explore exciting career opportunities with us and be
                <br /> a driving force behind the evolution of the financial
                <br /> landscape.
              </p>
            </div>
          </div>
          <div className="pt-[7.75rem]">
            <img src={Careers} alt="" className="w-[23.25rem] h-[40.25rem]" />
          </div>
        </header>
      </section>
    </>
  );
};

export default Header;
