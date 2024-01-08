import React, { useState, useEffect } from "react";
import Feedxpay from "../../../Assets/Feedxpay.gif";
import pngwing1 from "../../../Assets/pngwing1.png";
import pngwing2 from "../../../Assets/pngwing2.png";
import { IoIosArrowRoundUp } from "react-icons/io";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      setIsVisible(scrollTop > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <header className="background">
      <div className=" h-[61.06rem] w-full mac:max-w-[83rem] xl:max-w-[75rem] lg:max-w-[60rem] mx-auto pt-[9rem]">
        <div className="flex justify-between">
          <div>
            <h1 className="text-[#1D1D1F] mac:text-[2.595rem] xl:text-[2.295rem] lg:text-[1.295rem] font-bold lg:leading-[2.5rem] xl:leading-[3.875rem] tracking-[-0.0575rem] pt-[9.3rem] pb-[1rem]">
              The <span className="text-[#017A59]">NeoBank</span> for <br />
              transcending borders.
              <br /> Built for global spending <br /> and multinational
              operations <br />
            </h1>
            <p className="text-[#8A9099] mac:text-[1.375rem] xl:text-[1.175rem] lg:text-[11px] font-medium leading-normal xl:leading-[2.125rem] pb-[5.87rem]">
              Make all your payments across borders <br />
              effortlessly under one roof. It is quick, easy, safe <br />
              and efficient.
            </p>
            <div className="flex gap-[2rem]">
              <img
                src={pngwing1}
                alt="get on playStore"
                className="object-contain  xl:w-[14.375rem] w-[10rem] h-[5.375rem]"
              />
              <img
                src={pngwing2}
                alt="get on ios"
                className="xl:w-[14.3125rem] w-[10rem] object-contain h-[4.25rem] mt-[0.57rem]"
              />
            </div>
          </div>
          <div className="lg:-mt-5 xl:-mt-0">
            <img
              src={Feedxpay}
              alt="feedxpay"
              className="object-cover xl:w-[54.5625rem] lg:w-[45.5625rem]  h-[50rem] "
            />
          </div>
        </div>

        {isVisible && (
          <div className="relative">
            <IoIosArrowRoundUp
              onClick={scrollToTop}
              className="fixed cursor-pointer top-[38rem] z-20 right-10 text-black text-base bg-[#EBFFF5] w-12 h-12 rounded-lg"
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Hero;
