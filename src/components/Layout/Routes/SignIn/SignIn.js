import React, { useState } from "react";
import Card from "../../../UI/Card";
import Logo from "../../../../Assets/Logo.png";
import Input from "../OpenAcct/Input";
import { FaEyeSlash } from "react-icons/fa";
import { LiaEyeSolid } from "react-icons/lia";

const SignIn = () => {
  const [hide, setHide] = useState(false);

  const handleHide = () => {
    setHide((prevHide) => prevHide);
  };
  return (
    <section className="bg-[#EBFFF5] h-[64rem] flex items-center justify-center">
      <Card className="w-[37.5rem] h-[43.375rem] rounded-xl bg-white">
        <article className="pt-[2rem] flex items-center flex-col">
          <img
            src={Logo}
            alt=""
            className="object-cover w-[16.5rem] h-[2.875rem]"
          />
          <h2 className="pt-[1rem] capitalize text-[#1D1D1F] text-[1.5rem] font-medium leading-normal">
            Sign in to your account
          </h2>
        </article>
        <form>
          <div className="pt-[4.31rem] px-[6.25rem] ">
            <Input
              label="Email Address"
              type="text"
              className="w-full h-[2.75rem] pl-5 border-2 border-[#E8E9EB] rounded-xl focus:outline-blue-400 mb-[2rem]"
            />
            <div className="relative">
              <Input
                label="Password"
                type={hide ? "text" : "password"}
                className={`w-full h-[2.75rem] pl-5 border-2 border-[#E8E9EB] rounded-xl focus:outline-blue-400
              `}
              />
              {hide ? (
                <LiaEyeSolid
                  className="absolute top-11 right-3 cursor-pointer"
                  onClick={handleHide}
                />
              ) : (
                <FaEyeSlash
                  className="absolute top-11 right-3 cursor-pointer"
                  onClick={handleHide}
                />
              )}
            </div>

            <div className="pt-[1rem] flex justify-between">
              <span className="flex gap-1">
                <Input
                  type="checkbox"
                  className="w-[0.75rem] h-[0.75rem] -mt-1 border-2 border-[#E8E9EB] rounded-xl focus:outline-blue-400"
                />
                <p className="text-[#8A9099] text-[0.875rem] font-medium leading-normal tracking-[-0.0175rem]">
                  Remember Me
                </p>
              </span>

              <h5 className="text-[#017A59] font-medium leading-normal tracking-[-0.0175rem]">
                Forgot Password
              </h5>
            </div>
            <button className="bg-[#017A59] mt-[3.62rem] w-full py-4 rounded-xl text-white text-[1.125rem] font-semibold leading-[1.5rem] tracking-[-0.0225rem]">
              Sign In
            </button>
            <p className="text-[0.875rem] text-center font-medium leading-normal tracking-[-0.0175rem] pt-[1rem]">
              Don’t have an account?
              <span className="text-[#017A59]">Sign Up </span>
            </p>
          </div>
        </form>
      </Card>
    </section>
  );
};

export default SignIn;
