import React, { useState } from "react";
import "../../../App.css";
import Logo from "../../../Assets/Logo.png";
import { TiArrowSortedDown } from "react-icons/ti";
import { Link, useLocation } from "react-router-dom";
import { HashLink as HashRouterLink } from "react-router-hash-link";
import { Squash as Hamburger } from "hamburger-react";

const Nav = (props) => {
  const [nav, setNav] = useState(false);
  const location = useLocation();

  const handleClick = () => {
    setNav(false);
  };

  return (
    <section className="bg">
      <nav className="lg:fixed fixed left-0 top-0 w-full bg h-[8.63rem] lg:h-[10.5rem] z-30">
        <div className="flex py-5 mac:max-w-[83rem] pro:max-w-[52rem] max-w-[22rem] xl:max-w-[75rem] md:max-w-[45rem] lg:max-w-[60rem] mx-auto space-x-[5rem]">
          <Link to="/">
            <button
              className={
                location.pathname === "/" ||
                location.pathname.startsWith("/home/") ||
                location.pathname.startsWith("/main/") ||
                location.pathname.startsWith("/support/")
                  ? "active text-[#017A59] uppercase text-xs xl:text-base pb-2 cursor-pointer border-b-[3px] border-[#017A59] font-semibold leading-normal tracking-[-0.02rem]"
                  : "text-[#8A9099] uppercase text-xs xl:text-[1rem] cursor-pointer font-semibold leading-normal tracking-[-0.02rem]"
              }
            >
              For Individuals
            </button>
          </Link>

          <Link to="/business">
            <button
              className={
                location.pathname === "/business"
                  ? "active text-[#017A59] uppercase pb-2 text-xs xl:text-base cursor-pointer border-b-[3px] border-[#017A59] font-semibold leading-normal tracking-[-0.02rem]"
                  : "text-[#8A9099] uppercase text-xs xl:text-[1rem] cursor-pointer font-semibold leading-normal tracking-[-0.02rem]"
              }
            >
              For Business
            </button>
          </Link>
        </div>

        <div className="flex justify-between max-w-[22rem] mx-auto py-[0.85rem] md:max-w-[45rem] pro:max-w-[52rem] lg:hidden">
          <Link to="/">
            <img
              src={Logo}
              alt=""
              className="lg:w-[14.5rem] lg:h-[2.5rem] w-[8.4375rem] h-[1.4375rem] lg:hidden block"
            />{" "}
          </Link>
          <div className="lg:hidden block ">
            <Hamburger
              direction="squash"
              size={25}
              color="black"
              className="burger-menu"
              toggled={nav}
              toggle={() => setNav(!nav)}
            />
          </div>
        </div>
        <div className="lg:flex hidden justify-between mac:max-w-[83rem] xl:max-w-[75rem] lg:max-w-[60rem] mx-auto py-[1.17rem]">
          <Link to="/">
            <img src={Logo} alt="" className="w-[14.5rem] h-[2.5rem] " />
          </Link>

          <ul className="flex space-x-[3.12rem] mt-3">
            <li
              className="flex gap-1 cursor-pointer text-[#1D1D1F] text-[1.0625rem] font-semibold leading-[1.5rem] tracking-[-0.02125rem]"
              onClick={props.onClick}
            >
              Products <TiArrowSortedDown className="mt-1" />{" "}
            </li>

            <li
              onClick={props.onOpen}
              className="flex gap-1 cursor-pointer text-[#1D1D1F] text-[1.0625rem] font-semibold leading-[1.5rem] tracking-[-0.02125rem]"
            >
              Company <TiArrowSortedDown className="mt-1" />
            </li>

            <li
              onClick={props.onSet}
              className="flex gap-1 cursor-pointer text-[#1D1D1F] text-[1.0625rem] font-semibold leading-[1.5rem] tracking-[-0.02125rem]"
            >
              Support <TiArrowSortedDown className="mt-1" />
            </li>
          </ul>

          <div className="flex space-x-[2rem]">
            {/* <p className="mt-3 text-[#1D1D1F] text-[1.0625rem] font-semibold leading-[1.5rem] tracking-[-0.02125rem]">
              <Link to="/signIn">Sign in</Link>
            </p> */}
            <HashRouterLink smooth to="#section1">
              <button className="bg-[#017A59] text-white hidden lg:block px-5 py-3 rounded-xl  text-[1.125rem] font-semibold leading-[1.5rem] tracking-[-0.0225rem]">
                Get Started
              </button>
            </HashRouterLink>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Nav;
