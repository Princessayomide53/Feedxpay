import React, { useState } from "react";
import Nav from "../../NavBar/Nav";
import Pay from "../../../../Assets/Pay.png";
import pngwing1 from "../../../../Assets/pngwing1.png";
import pngwing2 from "../../../../Assets/pngwing2.png";
// import Modal from "../../../UI/Modal";
import Products from "../../NavBar/Products";
import Support from "../../NavBar/Support";
import Company from "../../NavBar/Company";

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
      <header className=" background h-[67.5625rem]">
        <div className="flex justify-around max-w-[83rem] mx-auto pt-[9.5rem]">
          <div className="pt-[12.11rem]">
            <h1 className="text-[#1D1D1F] pb-[1rem] text-[2.875rem] font-bold leading-[3.875rem] tracking-[-0.0575rem]">
              Make <span className="text-[#017A59]">payments</span> across{" "}
              <br />
              borders seemlessly.
            </h1>
            <p className="text-[#8A9099] text-[1.375rem] font-medium leading-[2.125rem]">
              Send money locally and internationally to <br />
              any country. It is quick and easy.
            </p>
            <div className="flex pt-[6rem] gap-[2rem]">
              <img
                src={pngwing1}
                alt=""
                className="object-contain  w-[14.375rem] h-[5.375rem]"
              />
              <img
                src={pngwing2}
                alt=""
                className="w-[14.3125rem] object-contain h-[4.25rem] mt-[0.56rem]"
              />
            </div>
          </div>
          <div className="pt-[3.94rem]">
            <img
              src={Pay}
              alt="Pay"
              className="w-[49.3125rem] h-[42.0625rem]"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
