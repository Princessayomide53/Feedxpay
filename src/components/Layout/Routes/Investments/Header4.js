import React, { useState } from "react";
import Nav from "../../NavBar/Nav";
import Invests from "../../../../Assets/Invests.png";
import pngwing1 from "../../../../Assets/pngwing1.png";
import pngwing2 from "../../../../Assets/pngwing2.png";
import Products from "../../NavBar/Products";
import Company from "../../NavBar/Company";
import Support from "../../NavBar/Support";

const Header4 = () => {
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

      <section className="background h-[67.06rem]">
        <header className="max-w-[83rem] mx-auto flex justify-between pt-[9.5rem]">
          <div>
            <h1 className="text-[#1D1D1F] pt-[13.81rem] text-[2.875rem] font-bold leading-[3.875rem] tracking-[-0.0575rem]">
              Invest Smart
              <br />
              Safeguard your Future <br />
              <span className="text-[#017A59]">Invest TODAY!</span>
            </h1>

            <p className="text-[#8A9099] pt-[1rem]  text-[1.375rem] font-medium leading-[2.125rem]">
              All seasons are not the same. Save now and start <br />
              enjoying financial independence.
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
          <div className="pt-[5.55rem]">
            <img
              src={Invests}
              alt=""
              className="object-cover w-[44.1875rem] h-[44.3125rem]"
            />
          </div>
        </header>
      </section>
    </>
  );
};

export default Header4;
