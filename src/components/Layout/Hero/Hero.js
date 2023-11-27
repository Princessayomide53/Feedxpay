import React from "react";
import Feedxpay from "../../../Assets/Feedxpay.gif";
import pngwing1 from "../../../Assets/pngwing1.png";
import pngwing2 from "../../../Assets/pngwing2.png";

const Hero = () => {
  return (
    <header className="background">
      <div className=" h-[57.06rem] w-full max-w-[83rem] mx-auto pt-[9rem]">
        <div className="flex justify-between">
          <div>
            <h1 className="text-[#1D1D1F] text-[2.595rem] font-bold leading-[3.875rem] tracking-[-0.0575rem] pt-[9.3rem] pb-[1rem]">
              The <span className="text-[#017A59]">NeoBank</span> for <br />
              transcending borders.
              <br /> Built for global spending <br /> and multinational
              operations <br />
            </h1>
            <p className="text-[#8A9099] text-[1.375rem] font-medium leading-[2.125rem] pb-[5.87rem]">
              Make all your payments across borders <br />
              effortlessly under one roof. It is quick, easy, safe <br />
              and efficient.
            </p>
            <div className="flex gap-[2rem]">
              <img
                src={pngwing1}
                alt="get on playStore"
                className="object-contain  w-[14.375rem] h-[5.375rem]"
              />
              <img
                src={pngwing2}
                alt="get on ios"
                className="w-[14.3125rem] object-contain h-[4.25rem] mt-[0.57rem]"
              />
            </div>
          </div>
          <div className="">
            <img
              src={Feedxpay}
              alt="feedxpay"
              className="object-cover w-[54.5625rem] h-[50rem]"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
