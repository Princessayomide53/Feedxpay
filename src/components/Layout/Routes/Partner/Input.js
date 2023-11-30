import React from "react";
import Card from "../../../UI/Card";

const Input = () => {
  return (
    <section className="bgs h-[90.1875rem] flex justify-center pt-[6.25rem] ">
      <Card className="h-[73.9375rem] shade w-[50.125rem] bg-white rounded-2xl">
        <h1 className="pt-[4.81rem] text-center text-[#1D1D1F] text-[2rem] font-bold leading-[3rem] ">
          Apply to become Feedxpay partner
        </h1>
        <p className="pt-[0.75rem] pb-[6.25rem] text-center text-[#1D1D1F] font-medium text-[1.125rem] leading-[1.5rem]">
          Fill out the form to confirm your decision of becoming
          <br />
          our partner. We will get back to you shortly <br /> on other
          procedures.
        </p>
        <form className="px-[5.6rem]">
          <div className="flex gap-[2rem] pb-[2rem]">
            <span className="flex flex-col">
              <label className="pb-[0.5rem] text-[ #1D1D1F] text-[0.875rem] font-medium leading-normal tracking-[-0.0175rem]">
                First Name
              </label>
              <input
                type="text"
                className="w-[18.125rem] h-[3.75rem] border-2 border-[#E8E9EB] rounded-xl"
              />
            </span>

            <span className="flex flex-col">
              <label className="pb-[0.5rem] text-[ #1D1D1F] text-[0.875rem] font-medium leading-normal tracking-[-0.0175rem]">
                Last Name
              </label>
              <input
                type="text"
                className="w-[18.125rem] h-[3.75rem] border-2 border-[#E8E9EB] rounded-xl"
              />
            </span>
          </div>
          <div className="pb-[2rem]">
            {" "}
            <label className="mb-[0.7rem] text-[ #1D1D1F] text-[0.875rem] font-medium leading-normal tracking-[-0.0175rem]">
              Email Address
            </label>
            <input
              type="text"
              className="w-full h-[3.75rem] border-2 border-[#E8E9EB] rounded-xl"
            />
          </div>
          <div className="pb-[2rem]">
            <label className="pb-[0.5rem] text-[ #1D1D1F] text-[0.875rem] font-medium leading-normal tracking-[-0.0175rem]">
              Phone Number
            </label>
            <input
              type="text"
              className="w-full h-[3.75rem] border-2 border-[#E8E9EB] rounded-xl"
            />
          </div>
          <div className="pb-[2rem]">
            <label className="pb-[0.5rem] text-[ #1D1D1F] text-[0.875rem] font-medium leading-normal tracking-[-0.0175rem]">
              Country
            </label>
            <input
              type="text"
              className="w-full h-[3.75rem] border-2 border-[#E8E9EB] rounded-xl"
            />
          </div>
          <div className="pb-[4.37rem]">
            <label className="pb-[0.5rem] text-[ #1D1D1F] text-[0.875rem] font-medium leading-normal tracking-[-0.0175rem]">
              Add note
            </label>
            <textarea
              type="text"
              className="w-full h-[9.0625rem] border-2 border-[#E8E9EB] rounded-xl"
            />
          </div>
          <button className=" bg-[#017A59] px-5 py-4 rounded-xl text-white text-[1.125rem] font-semibold leading-[1.5rem] tracking-[-0.0225rem]">
            Become a Partner
          </button>
        </form>
      </Card>
    </section>
  );
};

export default Input;
