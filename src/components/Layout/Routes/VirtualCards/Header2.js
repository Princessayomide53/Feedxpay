import React, { useState } from "react";
import Nav from "../../NavBar/Nav";
import pngwing1 from "../../../../Assets/pngwing1.png";
import pngwing2 from "../../../../Assets/pngwing2.png";
import VirtualCards from "../../../../Assets/VirtualCards.png";
import Products from "../../NavBar/Products";
import Support from "../../NavBar/Support";
import Company from "../../NavBar/Company";

const Header2 = () => {
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

      <section className="background h-[59.06rem]">
        <header className="max-w-[83rem] mx-auto flex justify-between pt-[9.5rem]">
          <div>
            <h1 className="text-[#1D1D1F] pt-[8.25rem] text-[2.875rem] font-bold leading-[3.875rem] tracking-[-0.0575rem]">
              Experience{" "}
              <span className="text-[#017A59]">Financial Freedom</span>
              <br />
              get a card that works
            </h1>

            <p className="text-[#8A9099] pt-[1rem]  text-[1.375rem] font-medium leading-[2.125rem]">
              Bridge the gap between convenience and security,
              <br /> get a card you can trust to make your online <br />
              transactions seemlessly.
            </p>
            <div className="flex pt-[5.88rem] gap-[2rem]">
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
          <div className="pt-[3.06rem]">
            <img
              src={VirtualCards}
              alt=""
              className="object-cover w-[31.12513rem] h-[39.625rem]"
            />
          </div>
        </header>
      </section>
    </>
  );
};

export default Header2;
