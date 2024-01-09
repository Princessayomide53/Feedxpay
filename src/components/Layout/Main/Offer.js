import React from "react";
import Card from "../../UI/Card";
import bulb from "../../../Assets/bulb.gif";
import check from "../../../Assets/check.gif";
import lock from "../../../Assets/lock.gif";

const Offer = () => {
  return (
    <section>
      <div className="flex flex-col space-y-[3.75rem] sm:space-y-0 sm:flex-row sm:justify-between pb-[9.38rem]">
        <div className="flex-col flex justify-center sm:justify-start sm:items-start items-center">
          <Card className="bg-[#EBFFF5] sm:w-[4.375rem] w-[2.5rem] h-[2.5rem] sm:h-[4.375rem] rounded-lg ">
            <div className="flex justify-center items-center ">
              <img
                src={check}
                alt=""
                className="sm:w-[3.534rem] w-[2.21431rem] sm:mt-5 mt-3"
              />
            </div>
          </Card>
          <p className="text-[#017A59] lg:text-[1.375rem] md:text-[1rem] text-[1.125rem] leading-[2rem] font-semibold pt-[2rem] pb-[1.06rem]">
            Quick Action
          </p>
          <p className="text-[#1D1D1F] text-center md:text-[11px] sm:text-left xl:text-[1.125rem] lg:text-sm text-sm leading-normal font-medium xl:leading-[1.5rem]">
            At the tap of a button, funds are
            <br className="hidden sm:block" /> sent and received almost
            instantly.
            <br className="hidden sm:block" /> Enjoy fast, seamless payments
            with <br className="hidden sm:block" />
            Feedxpay .
          </p>
        </div>
        <div className="flex-col flex justify-center sm:justify-start sm:items-start items-center">
          <Card className="bg-[#EBFFF5] sm:w-[4.375rem] w-[2.5rem] h-[2.5rem] sm:h-[4.375rem] rounded-lg">
            <div className="flex justify-center items-center ">
              <img
                src={lock}
                alt=""
                className="sm:w-[10.934rem] sm:h-[5.734rem] w-[8.534rem] h-[3.5734rem] sm:mt-2 mt-1"
              />
            </div>
          </Card>
          <p className="text-[#017A59] md:text-[1rem] lg:text-[1.375rem] text-[1.125rem]  leading-[2rem] font-semibold pt-[2rem] pb-[1.06rem]">
            Secured Funds
          </p>
          <p className="text-[#1D1D1F] px-2 md:text-[11px] sm:px-0 xl:text-[1.125rem] text-center sm:text-left lg:text-sm font-medium xl:leading-[1.5rem]">
            We are committed to providing a <br className="hidden sm:block" />{" "}
            secure, transparent, and efficient
            <br className="hidden sm:block" /> platform for your financial
            needs.
            <br className="hidden sm:block" /> Whether you're an individual
            <br className="hidden sm:block" /> investor or a business entity, we
            <br className="hidden sm:block" /> have got you covered.
          </p>
        </div>

        <div className="flex-col flex justify-center sm:justify-start sm:items-start items-center">
          <Card className="bg-[#EBFFF5] sm:w-[4.375rem] w-[2.5rem] h-[2.5rem] sm:h-[4.375rem] rounded-lg flex justify-center items-center">
            <img src={bulb} alt="" className="w-[3.534rem]" />
          </Card>

          <p className="text-[#017A59] md:text-[1rem] text-center sm:text-left sm:text-[1.375rem] text-[1.125rem] leading-[2rem] font-semibold pt-[2rem] pb-[1.06rem]">
            Access to Resources
          </p>
          <p className="text-[#1D1D1F] md:text-[11px] px-2 sm:px-0 text-center sm:text-left xl:text-[1.125rem] lg:text-sm font-medium xl:leading-[1.5rem]">
            We provide you with unparalleled <br className="hidden sm:block" />
            access to resources that empower <br className="hidden sm:block" />{" "}
            your journey towards success.
            <br className="" /> Our commitment is to ensure that
            <br className="hidden sm:block" /> you have the tools, knowledge,
            and
            <br className="hidden sm:block" /> support needed to achieve your{" "}
            <br />
            goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Offer;
