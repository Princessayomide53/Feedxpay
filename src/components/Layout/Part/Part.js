import React from "react";
import Payment from "./Payment";
import Patners from "./Patners";

const Part = () => {
  return (
    <section className="">
      <div className="mac:max-w-[83rem] xl:max-w-[75rem] lg:max-w-[60rem] m-auto">
        <h1 className="text-[2.785rem]  text-[#1D1D1F] font-bold leading-[3.875rem] tracking-[-0.0575rem]">
          What you stand to <span className="text-[#017A59]">enjoy</span>
          <br /> being a part of us
        </h1>
        <Payment />
      </div>

      <Patners />
    </section>
  );
};

export default Part;
