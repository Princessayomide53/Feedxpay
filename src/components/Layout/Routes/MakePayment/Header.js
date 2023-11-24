import React from "react";
import Nav from "../../NavBar/Nav";
import Pay from "../../../../Assets/Pay.png";
import pngwing1 from "../../../../Assets/pngwing1.png";
import pngwing2 from "../../../../Assets/pngwing2.png";

const Header = () => {
  return (
    <>
      <Nav />
      <header className=" background h-[59.5625rem]">
        <div className="flex justify-around max-w-[83rem] mx-auto">
          <div className="pt-[12.81rem]">
            <h1 className="text-[#1D1D1F] pb-[1rem] text-[2.875rem] font-bold leading-[3.875rem] tracking-[-0.0575rem]">
              Make <span className="text-[#017A59]">payments</span> across{" "}
              <br />
              borders seemlessly.
            </h1>
            <p className="text-[#8A9099] text-[1.375rem] font-medium leading-[2.125rem]">
              Send money locally and internationally to <br />
              any country. It is quick and easy.
            </p>
            <div className="flex pt-[6rem] gap-[2rem]">
              <img
                src={pngwing1}
                alt=""
                className="object-contain  w-[14.375rem] h-[5.375rem]"
              />
              <img
                src={pngwing2}
                alt=""
                className="w-[14.3125rem] object-contain h-[4.25rem] mt-[0.56rem]"
              />
            </div>
          </div>
          <div className="pt-[3.94rem]">
            <img
              src={Pay}
              alt="Pay"
              className="w-[49.3125rem] h-[45.0625rem]"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
