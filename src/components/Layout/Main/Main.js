import React from "react";
import Offer from "./Offer";

const Main = () => {
  return (
    <section className="max-w-[83rem] m-auto">
      <h1 className="text-[#1D1D1F]  text-[2.875rem] font-bold leading-[3.875rem] tracking-[-0.0575rem] py-[6.25rem]">
        You have every reason
        <br /> to <span className="text-[#017A59]">trust us</span> 100%
      </h1>
      <Offer />
    </section>
  );
};

export default Main;
