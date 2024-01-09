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
      <div className="lg:h-[61.06rem] md:h-[40rem] h-[52.8125rem] w-full mac:max-w-[83rem] md:max-w-[45rem] xl:max-w-[75rem] pro:max-w-[52rem] max-w-[22rem] lg:max-w-[60rem] mx-auto pt-[9rem]">
        <div className="flex flex-col-reverse sm:flex-row sm:justify-between">
          <div>
            <h1 className="text-[#1D1D1F] mac:text-[2.595rem] xl:text-[2.295rem] pt-5 text-[1.375rem] lg:text-[1.795rem] font-bold lg:leading-[2.5rem] xl:leading-[3.875rem] tracking-[-0.0575rem] md:pt-[4.3rem] lg:pt-[9.3rem] pb-[1rem]">
              The <span className="text-[#017A59]">NeoBank</span> for <br />
              transcending borders.
              <br /> Built for global spending <br /> and multinational
              operations <br />
            </h1>
            <p className="text-[#8A9099] mac:text-[1.375rem] sm:px-0 text-[1.135rem] xl:text-[1.175rem] lg:text-[0.9rem] md:text-xs font-medium leading-normal lg:leading-[2.125rem] pb-[5.87rem]">
              Make all your payments across borders{" "}
              <br className="sm:block hidden " />
              effortlessly under one roof. It is quick, easy, safe{" "}
              <br className="sm:block hidden" />
              and efficient.
            </p>
            <div className="flex gap-[2rem] md:-mt-14 lg:-mt-7 xl:-mt-0 -mt-14">
              <img
                src={pngwing1}
                alt="get on playStore"
                className="object-contain xl:w-[14.375rem] w-[6.4375rem] h-[2.4375rem] lg:w-[10rem] sm:h-[5.375rem]"
              />
              <img
                src={pngwing2}
                alt="get on ios"
                className="xl:w-[14.3125rem] lg:w-[10rem] w-[6.4375rem] h-[1.9375rem] object-contain sm:h-[4.25rem] sm:mt-[0.57rem] mt-[0.3rem]"
              />
            </div>
          </div>
          <div className="lg:mt-10 xl:-mt-0 md:mt-2 ">
            <img
              src={Feedxpay}
              alt="feedxpay"
              className="object-cover xl:w-[54.5625rem] lg:w-[41.5625rem] lg:h-[40rem] md:w-[27.5625rem] md:h-[27rem] w-[20rem] xl:h-[50rem] h-[20rem]"
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
