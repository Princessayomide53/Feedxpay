import Nav from "../../NavBar/Nav";
import Contact from "../../../../Assets/Contact.png";
import Card from "../../../UI/Card";
import Support from "../../NavBar/Support";
import Products from "../../NavBar/Products";
import Company from "../../NavBar/Company";
import { useState } from "react";
import { Link } from "react-router-dom";

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
      <section className="relative">
        <header className="pt-[1.5rem] relative">
          <img src={Contact} alt="" className="w-full" />
          <div className="overlay absolute top-0 left-0 w-full h-full bg-[#b8d4c6] bg-opacity-50"></div>
          <div className="text-overlay absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-[#1D1D1F] text-[3.1875rem] font-extrabold leading-[4.375rem]">
              We are here to point you <br />
              in the <span className="text-[#017A59]">right directions</span>
            </h1>
            <p className="pt-[1.5rem] text-[#1D1D1F] text-[1.5rem] font-medium leading-[2.3125rem] tracking-[-0.03rem]">
              Collaborate with us today and start generating more
              <br />
              revenue, add value and expand your business.
            </p>
            <Link to="/support/1">
              <button className="mt-[4.56rem]  px-7 py-3 rounded-lg bg-[#017A59] text-white text-[1.125rem] font-semibold leading-[1.5rem] tracking-[-0.0225rem]">
                Read FAQs
              </button>
            </Link>{" "}
          </div>{" "}
          <div className="relative">
            <Card className="absolute -top-[7.5rem] p-[2.5rem] backdrop-blur-lg left-1/2 transform -translate-x-1/2 w-[48.8125rem] h-[10.625rem] rounded-lg bg-[#EBFFF5] bg-opacity-50">
              <div className="flex justify-between">
                <p className=" text-[#017A59] text-[1.125rem] font-medium leading-[1.5rem]">
                  Telephone:{" "}
                  <span className="text-[#1D1D1F]">+234 903 527 9530</span>
                </p>
                <p className="text-[#017A59] text-[1.125rem] font-semibold leading-[1.5rem] tracking-[-0.0225rem]">
                  Support Email:{" "}
                  <span className="text-[#1D1D1F]">Hello@Feedxpay.com</span>
                </p>
              </div>
              <p className="text-center pt-[2rem] text-[#1D1D1F] text-[1.375rem] font-medium leading-[2.125rem]">
                We are available between{" "}
                <span className="text-[#017A59]">8AM to 5AM</span> on weekdays
              </p>
            </Card>
          </div>
        </header>
      </section>
    </>
  );
};

export default Header;
