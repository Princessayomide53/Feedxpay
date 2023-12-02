import React, { useState } from "react";
import Card from "../../../UI/Card";
import Logo from "../../../../Assets/Logo.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa";
import Input from "./Input";
import { Country, State, City } from "country-state-city";
import { LiaEyeSolid } from "react-icons/lia";

const OpenAccount = () => {
  const [show, setShow] = useState(false);

  const handlePassword = () => {
    setShow((prevShow) => !prevShow);
  };
  const handleSubmit = () => {};
  return (
    <section className="h-[61.375rem] bg-[#EBFFF5] py-[2.38rem] flex flex-col items-center">
      <Card className="bg-white w-[37.5rem] h-[56.625rem] rounded-xl">
        <article className="flex flex-col items-center pt-[2rem]">
          <img
            src={Logo}
            alt=""
            className="object-cover w-[16.5rem] h-[2.875rem]"
          />
          <h4 className="pt-[1rem] capitalize text-[#1D1D1F] text-[1.5rem] font-medium leading-normal">
            Open account
          </h4>
        </article>
        <form
          className="px-[5.6rem] pt-[3.12rem] space-y-[2rem]"
          onSubmit={handleSubmit}
        >
          <div className="flex gap-[3rem]">
            <Input
              label="First Name"
              type="text"
              className="w-[11.5rem] h-[2.75rem] pl-5 border-2 border-[#E8E9EB] rounded-xl focus:outline-blue-400"
            />
            <Input
              label="Last Name"
              type="text"
              className="w-[11.5rem] h-[2.75rem] pl-5 border-2 border-[#E8E9EB] rounded-xl focus:outline-blue-400"
            />
          </div>
          <Input
            label="Email Address"
            type="text"
            className="w-full h-[2.75rem] pl-5 border-2 border-[#E8E9EB] rounded-xl focus:outline-blue-400"
          />

          <Input
            label="Phone Number"
            type="text"
            className="w-full h-[2.75rem] pl-5 border-2 border-[#E8E9EB] rounded-xl focus:outline-blue-400"
          />
          <div className="flex flex-col relative">
            <label className="pb-[0.5rem] text-[#1D1D1F] text-[0.875rem] font-medium leading-normal tracking-[-0.0175rem]">
              Country
            </label>

            <select className="block appearance-none w-full h-[2.75rem] px-5 py-2 border-2 border-[#E8E9EB] rounded-xl leading-5 focus:outline-none focus:border-blue-400">
              <option value="" disabled selected>
                -- Select a Country --
              </option>
              {Country.getAllCountries().map((items) => (
                <option key={items.isoCode} value={items.name}>
                  {items.name}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-3 top-7 flex items-center px-2 pointer-events-none">
              <MdOutlineKeyboardArrowDown className="text-xl" />
            </div>
          </div>

          <div className="relative">
            <Input
              label="Password"
              type={show ? "text" : "password"}
              className={`w-full h-[2.75rem] pl-5 border-2 border-[#E8E9EB] rounded-xl focus:outline-blue-400
              `}
            />
            {show ? (
              <LiaEyeSolid
                className="absolute top-11 right-3 cursor-pointer"
                onClick={handlePassword}
              />
            ) : (
              <FaEyeSlash
                className="absolute top-11 right-3 cursor-pointer"
                onClick={handlePassword}
              />
            )}
          </div>
          <div className="flex gap-2 items-center">
            <Input
              type="checkbox"
              className="w-[1.25rem] h-[1.25rem] text-white appearance-none rounded-sm bg-white border border-[#017A59] checked:text-white checked:bg-[#017A59]"
            />
            <p className="text-xs text-[#1D1D1F] font-medium leading-normal tracking-tight">
              I have read, understood and agreed to the{" "}
              <span className="text-[#017A59]">
                Privacy
                <br /> Policy
              </span>{" "}
              and <span className="text-[#017A59]">Terms and Conditions</span>
            </p>
          </div>

          <button className="bg-[#017A59] w-full py-4 rounded-xl text-white text-[1.125rem] font-semibold leading-[1.5rem] tracking-[-0.0225rem]">
            Open Account
          </button>
          <p className="text-[0.875rem] text-center font-medium leading-normal tracking-[-0.0175rem]">
            Already have an account?
            <span className="text-[#017A59]"> Sign in</span>
          </p>
        </form>
      </Card>
    </section>
  );
};

export default OpenAccount;
