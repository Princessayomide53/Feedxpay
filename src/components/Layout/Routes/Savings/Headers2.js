import React, { useState } from "react";
import Nav from "../../NavBar/Nav";
import Savings from "../../../../Assets/Savings.png";
import pngwing1 from "../../../../Assets/pngwing1.png";
import pngwing2 from "../../../../Assets/pngwing2.png";
import Products from "../../NavBar/Products";

const Headers2 = () => {
  const [modal, setModals] = useState(false);

  const openModal = () => {
    setModals(true);
  };
  return (
    <>
      <Nav onClick={openModal} />
      {modal && <Products onHideModal={() => setModals(false)} />}

      <header className=" background h-[67.06rem]">
        <div className="max-w-[83rem] mx-auto flex justify-between pt-[9.5rem]">
          <div className="pt-[11.75rem]">
            <h1 className="text-[#1D1D1F] pb-[1rem] text-[2.875rem] font-bold tracking-[-0.0575rem]">
              Financial wellness starts
              <br />
              with <span className="text-[#017A59]">Savings</span>. Transform{" "}
              <br />
              your future today
            </h1>

            <p className="text-[#8A9099] text-[1.375rem] leading-[2.125rem] font-medium">
              All seasons are not the same. Save now and start <br />
              enjoying financial independence.
            </p>
            <div className="flex pt-[6rem] gap-[2rem]">
              <img
                src={pngwing1}
                alt="get on PlayStore"
                className="object-contain  w-[14.375rem] h-[5.375rem]"
              />
              <img
                src={pngwing2}
                alt="get on ios"
                className="w-[14.3125rem] object-contain h-[4.25rem] mt-[0.56rem]"
              />
            </div>
          </div>
          <div className="pt-[5.05rem]">
            <img
              src={Savings}
              alt=""
              className="h-[41.6875rem] w-[44.5625rem]"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Headers2;
