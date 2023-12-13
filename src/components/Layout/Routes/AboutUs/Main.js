import React from "react";
import Splash from "../../../../Assets/Splash.png";

const Main = () => {
  return (
    <main className="max-w-[83rem] mx-auto flex justify-evenly pt-[6.5rem] pb-[6rem]">
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
          Welcome to FeedXPay, where our journey is not
          <br />
          just a narrative but a commitment to redefining
          <br /> how individuals and businesses navigate the
          <br /> financial landscape.
        </p>
        <p className="pt-[2rem] text-[1.375rem] font-medium leading-[2.125rem] text-[ #1D1D1F]">
          Our journey began with a vision to simplify <br /> financial
          processes, eliminate barriers to doing
          <br /> business internationally, and empower users to
          <br /> take control of their financial destinies. We <br />
          embarked on a mission to create a platform that
          <br /> goes beyond conventional banking, offering a<br />{" "}
          comprehensive suite of services that cater to the
          <br /> diverse needs of our users.
        </p>{" "}
        <p className="pt-[2rem] text-[1.375rem] font-medium leading-[2.125rem] text-[ #1D1D1F]">
          FeedXPay is not just a platform, it's a commitment <br />
          to your financial success.
        </p>
      </div>
    </main>
  );
};

export default Main;
