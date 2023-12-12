import React, { useState } from "react";
import Nav from "../../NavBar/Nav";
import About from "../../../../Assets/About.png";
import Products from "../../NavBar/Products";
import Company from "../../NavBar/Company";
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
      <section className="background h-[62.06rem]">
        <header className="max-w-[83rem] mx-auto flex justify-around pt-[9.5rem]">
          <div>
            <h1 className="text-[#017A59] pt-[7.87rem] text-[1.5rem] font-semibold leading-[2.3125rem] tracking-[-0.03rem]">
              About us
            </h1>
            <h2 className="text-[#1D1D1F] font-bold text-[2rem] leading-[3rem] pt-[2rem] pb-[1.5rem]">
              Cross-border payment made <br />
              easily accessible to everyone
            </h2>
            <p className="text-[#1D1D1F] pt-[1rem]  text-[1.375rem] font-medium leading-[2.125rem]">
              We are on a mission to revolutionize global finance.
              <br /> With a commitment to innovation, efficiency, and <br />
              compliance, we empower individuals and businesses <br />
              to thrive in an interconnected world.
              <br />
            </p>
            <p className="pt-5 text-[#1D1D1F]  text-[1.375rem] font-medium leading-[2.125rem]">
              Our team of experts are dedicated to providing <br /> tailored
              solutions that drive growth and success.
              <br />
              Partner with FeedXPay and transcend boundaries in <br /> the world
              of finance.
            </p>
          </div>
          <div className="pt-[6.25rem]">
            <img
              src={About}
              alt=""
              className="object-cover w-[34.125rem] h-[34.125rem]"
            />
          </div>
        </header>
      </section>
    </>
  );
};

export default Header;
