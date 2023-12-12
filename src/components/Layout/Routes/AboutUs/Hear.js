import React from "react";
import ceo from "../../../../Assets/ceo.png";
import cto from "../../../../Assets/cto.png";

const Hear = () => {
  return (
    <section className="bgs h-[50.3125rem]">
      <div className="max-w-[83rem] mx-auto py-[6.25rem]">
        <h1 className="text-[#1D1D1F] text-center text-[2rem] font-bold leading-[3rem] capitalize">
          hear from our{" "}
          <span className="text-[#017A59] uppercase">cto & ceo</span>{" "}
        </h1>

        <p className="leading-[2.125rem] text-[#8A9099] text-center pt-[0.5rem] font-medium text-[1.375rem]">
          know about Feedxpay from the big horns
        </p>
        <div className="pt-[4.81rem] flex space-x-[4.12rem] justify-center">
          <div>
            <img
              src={ceo}
              alt=""
              className="object-cover w-[35.5625rem] h-[21.1875rem]"
            />

            <p className="text-[#017A59] text-center pt-[2.5rem] text-[1.5rem] font-semibold leading-[2.3125rem] tracking-[-0.03rem]">
              Rufai Faruk
            </p>
            <p className="uppercase pt-[0.5rem] text-center text-[#1D1D1F] text-[1.375rem] font-medium leading-[1.875rem] tracking-[-0.0275rem]">
              Ceo
            </p>
          </div>
          <div>
            <img
              src={cto}
              alt=""
              className="object-cover w-[35.5625rem] h-[21.1875rem]"
            />
            <p className="text-[#017A59] text-center pt-[2.5rem] text-[1.5rem] font-semibold leading-[2.3125rem] tracking-[-0.03rem]">
              Okedeji Tofunmi
            </p>
            <p className="uppercase text-center pt-[0.5rem] text-[#1D1D1F] text-[1.375rem] font-medium leading-[1.875rem] tracking-[-0.0275rem]">
              Cto
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hear;
