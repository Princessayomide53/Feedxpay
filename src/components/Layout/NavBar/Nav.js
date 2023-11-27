import React from "react";
import "../../../App.css";
import Logo from "../../../Assets/Logo.png";
import { TiArrowSortedDown } from "react-icons/ti";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <section className="bg ">
      <nav className="fixed left-0 top-0 w-full bg h-[10.5rem] z-30">
        <div className="flex py-5 max-w-[83rem] mx-auto ">
          <p className="text-[#017A59] pb-2 uppercase text-[1rem] px-5 border-b-[3px] border-[#017A59] font-semibold leading-normal tracking-[-0.02rem]">
            For Individuals
          </p>
          <p className="text-[#017A59] pb-2 uppercase text-[1rem] px-5 border-b-[3px] border-[#017A59] font-semibold leading-normal tracking-[-0.02rem]">
            For Business
          </p>
        </div>
        <div className="flex justify-between max-w-[83rem] mx-auto py-[1.17rem]">
          <Link to="/">
            <img src={Logo} alt="" className="w-[14.5rem] h-[2.5rem]" />
          </Link>

          <ul className="flex space-x-[3.12rem] mt-3">
            <li
              className="flex gap-1 cursor-pointer text-[#1D1D1F] text-[1.0625rem] font-semibold leading-[1.5rem] tracking-[-0.02125rem]"
              onClick={props.onClick}
            >
              Products <TiArrowSortedDown className="mt-1" />{" "}
            </li>
            <li className="flex gap-1 text-[#1D1D1F] text-[1.0625rem] font-semibold leading-[1.5rem] tracking-[-0.02125rem]">
              Company <TiArrowSortedDown className="mt-1" />
            </li>
            <li className="flex gap-1 text-[#1D1D1F] text-[1.0625rem] font-semibold leading-[1.5rem] tracking-[-0.02125rem]">
              Support <TiArrowSortedDown className="mt-1" />
            </li>
          </ul>

          <div className="flex space-x-[2rem]">
            <p className="mt-3 text-[#1D1D1F] text-[1.0625rem] font-semibold leading-[1.5rem] tracking-[-0.02125rem]">
              Sign in
            </p>
            <button className="bg-[#017A59] text-white px-5 py-3 rounded-xl  text-[1.125rem] font-semibold leading-[1.5rem] tracking-[-0.0225rem]">
              Open an account
            </button>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Nav;
