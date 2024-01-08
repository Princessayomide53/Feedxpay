import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import Logo2 from "../../../Assets/Logo2.png";
import Subscribe from "./Subscribe";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="h-[69.875rem] bg-[#017A59] ">
        <div className="mac:max-w-[83rem] xl:max-w-[75rem] lg:max-w-[60rem] mx-auto grid grid-cols-5 pt-[6.25rem] text-white">
          <div className="mr-20">
            <img src={Logo2} alt="" className="object-cover" />
            <div className="text-3xl flex gap-[2.25rem] py-[2.25rem]">
              <FaFacebookF className="text-white xl:text-3xl lg:text-4xl" />
              <FaLinkedinIn className="text-white xl:text-3xl lg:text-4xl" />
              <FaTwitter className="text-white xl:text-3xl lg:text-4xl" />
              <IoLogoInstagram className="text-white xl:text-3xl lg:text-4xl" />
            </div>
          </div>
          <div className="space-y-[1.5rem]">
            <p className="text-[1.375rem] font-semibold from leading-[2rem]">
              Company
            </p>

            <p className="text-[1.0625rem] font-medium leading-[1.5rem] tracking-[-0.02125rem]">
              <Link to="/main/1"> About US</Link>
            </p>

            <p className="text-[1.0625rem] font-medium leading-[1.5rem] tracking-[-0.02125rem]">
              Blog
            </p>
            <p className="text-[1.0625rem] font-medium leading-[1.5rem] tracking-[-0.02125rem]">
              <Link to="/main/2">Careers</Link>
            </p>
          </div>
          <div className="space-y-[1.5rem]">
            <p className="text-[1.375rem] font-semibold from leading-[2rem]">
              Product
            </p>

            <p className="text-[1.0625rem] font-medium leading-[1.5rem] tracking-[-0.02125rem]">
              <Link to="/home/1"> Make Savings</Link>
            </p>

            <p className="text-[1.0625rem] font-medium leading-[1.5rem] tracking-[-0.02125rem]">
              <Link to="/home/4"> Investments</Link>
            </p>

            <p className="text-[1.0625rem] font-medium leading-[1.5rem] tracking-[-0.02125rem]">
              <Link to="/home/2">Cards</Link>
            </p>

            <p className="text-[1.0625rem] font-medium leading-[1.5rem] tracking-[-0.02125rem]">
              <Link to="/home/3"> Savings </Link>
            </p>
          </div>
          <div className="space-y-[1.5rem]">
            <p className="text-[1.375rem] font-semibold from leading-[2rem]">
              Support
            </p>
            <p className="text-[1.0625rem] font-medium leading-[1.5rem] tracking-[-0.02125rem]">
              <Link to="/support/4">contact sales</Link>
            </p>
            <p className="text-[1.0625rem] font-medium leading-[1.5rem] tracking-[-0.02125rem]">
              <Link to="/support/1">FAQs</Link>
            </p>
            <p className="text-[1.0625rem] font-medium leading-[1.5rem] tracking-[-0.02125rem]">
              Community
            </p>
            <p className="text-[1.0625rem] font-medium leading-[1.5rem] tracking-[-0.02125rem]">
              <Link to="/support/2"> Become Patners</Link>
            </p>
          </div>
          <div className="space-y-[1.5rem]">
            <p className="text-[1.375rem] font-semibold from leading-[2rem]">
              Legal
            </p>
            <p className="text-[1.0625rem] font-medium leading-[1.5rem] tracking-[-0.02125rem]">
              Terms Use
            </p>
            <p className="text-[1.0625rem] font-medium leading-[1.5rem] tracking-[-0.02125rem]">
              {" "}
              Policies
            </p>
          </div>
        </div>
        <Subscribe />
      </footer>
    </>
  );
};

export default Footer;
