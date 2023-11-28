import React from "react";
import Splash from "../../../../Assets/Splash.png";

const Main = () => {
  return (
    <main className="max-w-[83rem] mx-auto flex justify-around pt-[6.5rem] pb-[6rem]">
      <div>
        <img
          src={Splash}
          alt=""
          className="object-cover w-[34.125rem] h-[45.375rem]"
        />
      </div>

      <div>
        <h5 className="text-[1.5rem] text-[#017A59] font-semibold leading-[2.3125rem] tracking-[-0.03rem] pb-[2rem]">
          Our story
        </h5>
        <h2 className="text-[#1D1D1F] leading-[3rem] text-[2rem] font-bold pb-[1.5rem]">
          We sure have a story to tell of how <br />
          Feedxpay came to be
        </h2>
        <p className="text-[1.375rem] font-medium leading-[2.125rem] text-[ #1D1D1F]">
          Our cross-border payment solutions empower you <br /> to transact
          effortlessly across the globe. Say
          <br /> goodbye to complex and time-consuming
          <br /> processes. <br />{" "}
        </p>
        <p className="pt-[2rem] text-[1.375rem] font-medium leading-[2.125rem] text-[ #1D1D1F]">
          With our streamlined platform, you can send and
          <br /> receive payments with speed, security, and
          <br /> transparency. Embrace a world of possibilities and
          <br /> connect with <br /> international markets seamlessly. <br />
        </p>{" "}
        <p className="pt-[2rem] text-[1.375rem] font-medium leading-[2.125rem] text-[ #1D1D1F]">
          With our streamlined platform, you can send and <br /> receive <br />
          payments with speed, security, and transparency.
          <br /> Embrace a world of possibilities and connect with <br />
          international markets seamlessly.
        </p>
      </div>
    </main>
  );
};

export default Main;
