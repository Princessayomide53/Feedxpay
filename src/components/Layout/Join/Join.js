import React from "react";
import join from "../../../Assets/join.png";
import pngwing1 from "../../../Assets/pngwing1.png";
import pngwing2 from "../../../Assets/pngwing2.png";

const Join = () => {
  return (
    <section className="bgs h-screen flex justify-around" id="section1">
      <div className="">
        <h1 className="pb-[2rem] text-[#1D1D1F]   text-[3.1875rem] font-medium leading-[4.375rem] pt-[11.94rem]">
          Join Feedxpay <br />
          <span className="text-[#017A59]">Sign up</span> in minutes
        </h1>
        <p className="text-[1.375rem] text-[#1D1D1F] font-medium leading-[2.125rem]">
          Our goal is to protect what’s most precious <br />
          to our users their time, energy and resources
        </p>
        <div className="flex pt-[5rem] gap-[2rem]">
          <img
            src={pngwing1}
            alt="get on ios"
            className="w-[14.3125rem] object-contain h-[5.3475rem]  mt-[0.38rem]"
          />
          <img
            src={pngwing2}
            alt="get on ios"
            className="w-[14.3125rem] object-contain h-[4.25rem] mt-[0.94rem]"
          />
        </div>
      </div>
      <div className="pt-[7.56rem] pb-[7.5rem]">
        <img
          src={join}
          alt="home"
          className="object-cover w-[29.375rem] h-[34.4375rem]"
        />
      </div>
    </section>
  );
};

export default Join;
