import React from "react";
import Money from "../../../Assets/Money.png";
import "../../../App.css";

const Payment = () => {
  return (
    <section className="flex justify-around">
      <div className="overflow-y-scroll container  px-[1.56rem]">
        <div className="text">
          <h1 className="pb-[1rem] text-[#017A59] text-[1.375rem] font-semibold leading-[2rem]">
            Virtual Account Creation Globally
          </h1>
          <p className="pb-[5.38rem] text-[#1D1D1F] text-[1.25rem] font-medium leading-[1.75rem] tracking-[-0.025rem]">
            Create a functioning business account that caters
            <br /> to your business needs locally and internationally.
            <br />
            It takes less than 10 - minutes
          </p>
          <h1 className="pb-[1rem] text-[#017A59] text-[1.375rem] font-semibold leading-[2rem]">
            API's for global expansion.
          </h1>
          <p className="pb-[5.38rem] text-[#1D1D1F] text-[1.25rem] font-medium leading-[1.75rem] tracking-[-0.025rem]">
            The world is your canvas when you integrate our <br />
            API's into your payment process.
          </p>
          <h1 className="pb-[1rem] text-[#017A59] text-[1.375rem] font-semibold leading-[2rem]">
            Business registration
          </h1>
          <p className="pb-[5.38rem] text-[#1D1D1F] text-[1.25rem] font-medium leading-[1.75rem] tracking-[-0.025rem]">
            We understand the value of location to businesses <br />
            and we are here to facilitate your business registration <br />
            anywhere in the world. compliance and registration <br />
            world wide.
          </p>
          <h1 className="pb-[1rem] text-[#017A59] text-[1.375rem] font-semibold leading-[2rem]">
            Global payroll.
          </h1>
          <p className="pb-[4.38rem] text-[#1D1D1F] text-[1.25rem] font-medium leading-[1.75rem] tracking-[-0.025rem]">
            Hire staff from all over the world and pay salaries <br />
            in one click. No conversion or tax problems, just a <br />
            hassle free payroll.
          </p>
        </div>
      </div>
      <div>
        <img
          src={Money}
          alt=""
          className="object-cover w-[48.22694rem] h-[30rem]"
        />
      </div>
    </section>
  );
};

export default Payment;
