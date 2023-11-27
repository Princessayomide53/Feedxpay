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
        <div className="max-w-[83rem] mx-auto grid grid-cols-5 pt-[6.25rem] text-white">
          <div className="mr-20">
            <img src={Logo2} alt="" className="object-cover" />
            <div className="text-2xl flex gap-[2.25rem] py-[2.25rem]">
              <FaFacebookF className="text-white" />
              <FaLinkedinIn className="text-white" />
              <FaTwitter className="text-white" />
              <IoLogoInstagram className="text-white" />
            </div>
          </div>
          <div className="space-y-[1.5rem]">
            <p className="text-[1.375rem] font-semibold from leading-[2rem]">
              Company
            </p>

            <p className="text-[1.0625rem] font-medium leading-[1.5rem] tracking-[-0.02125rem]">
              <Link to="/aboutUs"> About US</Link>
            </p>

            <p className="text-[1.0625rem] font-medium leading-[1.5rem] tracking-[-0.02125rem]">
              Blog
            </p>
            <p className="text-[1.0625rem] font-medium leading-[1.5rem] tracking-[-0.02125rem]">
              Careers
            </p>
          </div>
          <div className="space-y-[1.5rem]">
            <p className="text-[1.375rem] font-semibold from leading-[2rem]">
              Product
            </p>
            <p className="text-[1.0625rem] font-medium leading-[1.5rem] tracking-[-0.02125rem]">
              Make Savings
            </p>
            <p className="text-[1.0625rem] font-medium leading-[1.5rem] tracking-[-0.02125rem]">
              Investments
            </p>
            <p className="text-[1.0625rem] font-medium leading-[1.5rem] tracking-[-0.02125rem]">
              Cards
            </p>
            <p className="text-[1.0625rem] font-medium leading-[1.5rem] tracking-[-0.02125rem]">
              Savings
            </p>
          </div>
          <div className="space-y-[1.5rem]">
            <p className="text-[1.375rem] font-semibold from leading-[2rem]">
              Support
            </p>
            <p className="text-[1.0625rem] font-medium leading-[1.5rem] tracking-[-0.02125rem]">
              contact sales
            </p>
            <p className="text-[1.0625rem] font-medium leading-[1.5rem] tracking-[-0.02125rem]">
              {" "}
              FAQs
            </p>
            <p className="text-[1.0625rem] font-medium leading-[1.5rem] tracking-[-0.02125rem]">
              Community
            </p>
            <p className="text-[1.0625rem] font-medium leading-[1.5rem] tracking-[-0.02125rem]">
              Become Patners
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
