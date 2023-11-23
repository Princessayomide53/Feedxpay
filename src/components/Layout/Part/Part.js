import React from "react";
import Payment from "./Payment";
import Patners from "./Patners";

const Part = () => {
  return (
    <section className="max-w-[85rem] m-auto">
      <h1 className="text-[2.785rem] pb-[5.69rem] text-[#1D1D1F] font-bold leading-[3.875rem] tracking-[-0.0575rem]">
        What you stand to <span className="text-[#017A59]">enjoy</span>
        <br /> being a part of us
      </h1>
      <Payment />
      <Patners />
    </section>
  );
};

export default Part;
