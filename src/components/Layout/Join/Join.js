import React from "react";
import join from "../../../Assets/join.png";
import pngwing1 from "../../../Assets/pngwing1.png";
import pngwing2 from "../../../Assets/pngwing2.png";

const Join = () => {
  return (
    <section
      className="bgs h-[47rem] flex xl:justify-around lg:justify-evenly"
      id="section1"
    >
      {/* <div className="lg:max-w-[60rem]"> */}
      <div className="">
        <h1 className="pb-[2rem] text-[#1D1D1F]   xl:text-[3.1875rem] lg:text-[2.9187rem] font-medium leading-[4.375rem] pt-[11.94rem]">
          Join Feedxpay <br />
          <span className="text-[#017A59]">Sign up</span> in minutes
        </h1>
        <p className="xl:text-[1.375rem] lg:text-[1.275rem] text-[#1D1D1F] font-medium leading-[2.125rem]">
          Our goal is to protect what’s most precious <br />
          to our users their time, energy and resources
        </p>
        <div className="flex pt-[5rem] gap-[2rem]">
          <img
            src={pngwing1}
            alt="get on ios"
            className="xl:w-[14.3125rem] lg:w-[12.3125rem] object-contain h-[5.3475rem] w-[5rem]  mt-[0.38rem]"
          />
          <img
            src={pngwing2}
            alt="get on ios"
            className="xl:w-[14.3125rem] lg:w-[12.3125rem] object-contain w-[5rem] h-[4.25rem] mt-[0.94rem]"
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
      {/* </div> */}
    </section>
  );
};

export default Join;
