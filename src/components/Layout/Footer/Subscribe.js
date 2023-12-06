import React from "react";
import { IoArrowForwardCircle } from "react-icons/io5";

const Subscribe = () => {
  return (
    <section className="pt-[18.25rem] max-w-[85rem] mx-auto">
      <h4 className="text-white text-[1.5rem] font-semibold leading-[2.3125rem] tracking-[-0.03rem]">
        Follow our latest news
      </h4>
      <div className="pt-[0.5rem] pb-[1.5rem] flex gap-[1.81rem]">
        <input
          type="text"
          className="w-[22rem] h-[3.6875rem] rounded-2xl pl-7 focus:outline-blue-400"
          placeholder="Add your email Address"
        />
        <IoArrowForwardCircle className="text-white text-5xl mt-3" />
      </div>
      <p className="text-white border-b-4 pb-[4.38rem] border-white font-medium leading-[1.5rem] text-[1.0625rem] tracking-[-0.02125rem]">
        Get information and updates on our financial services.
      </p>

      <p className="text-white pt-[4.37rem]  font-semibold leading-[1.5rem] text-[1.125rem] tracking-[-0.0225remm]">
        Feedxpay and featured customers are financial technology companies and
        not a bank. Banking services are provided by our partnered banks who{" "}
        <br />
        are duly licensed by CBN
      </p>
    </section>
  );
};

export default Subscribe;
