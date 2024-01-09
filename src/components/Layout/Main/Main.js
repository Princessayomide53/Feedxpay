import React from "react";
import Offer from "./Offer";

const Main = () => {
  return (
    <section className="mac:max-w-[83rem] xl:max-w-[75rem] lg:max-w-[60rem] pro:max-w-[52rem] max-w-[22rem] md:max-w-[45rem] m-auto">
      <h1 className="text-[#1D1D1F] sm:text-[2.875rem] text-[1.375rem] text-center sm:text-left font-bold leading-[2.1875rem] sm:leading-[3.875rem] tracking-[-0.0575rem] py-[3.25rem] sm:py-[6.25rem]">
        You have every reason
        <br /> to <span className="text-[#017A59]">trust us</span> 100%
      </h1>
      <Offer />
    </section>
  );
};

export default Main;
