import React from "react";
import Experience1 from "../../../../Assets/Experience1.png";

const Experience = () => {
  return (
    <section className="background h-[77.125rem]">
      <div className="max-w-[83rem] mx-auto pt-[6.25rem] pb-[10.81rem] flex flex-col justify-center items-center">
        <h1 className="text-[#017A59] text-[2.875rem] font-bold leading-[3.875rem] tracking-[-0.0575rem] pb-[1.25rem]">
          Feedxpay Experience
        </h1>
        <p className="text-[#1D1D1F] pb-[6.25rem] text-[1.4rem] text-center font-medium leading-[2.3125rem] tracking-[-0.03rem]">
          Looking for a place to explore your knowledge? Come and join a team of
          problem solvers,
          <br />
          artists, entrepreneurs, engineers and designers, customer service
          providers and creators in
          <br />
          their best form, doing their best work in creating a new bank for
          transacting business and
          <br />
          making payments easily and in quick time.
        </p>
        <div>
          <img
            src={Experience1}
            alt=""
            className="h-[39.4375rem] w-[71.5rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
