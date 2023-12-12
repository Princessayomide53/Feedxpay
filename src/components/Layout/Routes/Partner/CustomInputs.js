import React from "react";
import Card from "../../../UI/Card";
import Input from "../OpenAcct/Input";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Country, State, City } from "country-state-city";

const CustomInputs = () => {
  return (
    <section
      className="bgs h-[90.1875rem] flex justify-center pt-[6.25rem] "
      id="section2"
    >
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
            <Input
              type="text"
              label="First Name"
              className="w-[18.125rem] h-[3.75rem] border-2 border-[#E8E9EB] rounded-xl  focus:outline-blue-400"
            />

            <Input
              type="text"
              label="Last Name"
              className="w-[18.125rem] h-[3.75rem] border-2 border-[#E8E9EB] rounded-xl  focus:outline-blue-400"
            />
          </div>
          <Input
            type="text"
            label="Email Address"
            className="w-full h-[3.75rem] mb-[2rem] border-2 border-[#E8E9EB] rounded-xl  focus:outline-blue-400"
          />
          <Input
            type="text"
            label="Phone Number"
            className="w-full mb-[2rem] h-[3.75rem] border-2 border-[#E8E9EB] rounded-xl  focus:outline-blue-400"
          />

          <div className="flex flex-col relative">
            <label className="pb-[0.5rem] text-[#1D1D1F] text-[0.875rem] font-medium leading-normal tracking-[-0.0175rem]">
              Country
            </label>

            <select
              defaultValue=" -- Select a Country --"
              className="block appearance-none mb-[2rem] w-full h-[2.75rem] px-5 py-2 border-2 border-[#E8E9EB] rounded-xl leading-5 focus:outline-none focus:border-blue-400"
            >
              <option value=" -- Select a Country --" disabled>
                -- Select a Country --
              </option>
              {Country.getAllCountries().map((items) => (
                <option key={items.isoCode} value={items.name}>
                  {items.name}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-3 top-2 flex items-center px-2 pointer-events-none">
              <MdOutlineKeyboardArrowDown className="text-xl" />
            </div>
          </div>
          <div className="pb-[4.37rem] flex flex-col">
            <label className="pb-[0.5rem] text-[ #1D1D1F] text-[0.875rem] font-medium leading-normal tracking-[-0.0175rem]">
              Add note
            </label>
            <textarea
              type="text"
              className="w-full h-[9.0625rem] border-2 border-[#E8E9EB] rounded-xl"
            />
          </div>
          <button className="-mt-[2rem] bg-[#017A59] px-5 py-4 rounded-xl text-white text-[1.125rem] font-semibold leading-[1.5rem] tracking-[-0.0225rem]">
            Become a Partner
          </button>
        </form>
      </Card>
    </section>
  );
};

export default CustomInputs;
