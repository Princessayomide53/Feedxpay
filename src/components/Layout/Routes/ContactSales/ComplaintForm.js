import React from "react";
import Card from "../../../UI/Card";
import Input from "../OpenAcct/Input";

const ComplaintForm = () => {
  return (
    <section className="bgs h-[80.25rem] pt-[9.38rem] flex flex-col items-center">
      <Card className="w-[50.125rem] h-[64.625rem] bg-white shades rounded-2xl pt-[4.81rem]">
        <h2 className="text-[#1D1D1F] text-[2rem] leading-[3rem] font-bold text-center">
          Write a message to our support team
        </h2>

        <p className="pt-[0.75rem] text-center text-[#1D1D1F] text-[1.125rem] font-medium leading-[1.5rem]">
          Kindly drop your message and be rest assured that <br />
          we will get back to you as quick as possible
        </p>
        <form className="pt-[7.75rem] flex flex-col items-center">
          <div className="flex gap-[2rem] pb-[2.5rem]">
            <Input
              type="text"
              label="First Name"
              className="w-[18.125rem] pl-5 h-[3.75rem] border-2 border-[#E8E9EB] rounded-xl  focus:outline-blue-400"
            />
            <Input
              type="text"
              label="Last Name"
              className="w-[18.125rem] pl-5 h-[3.75rem] border-2 border-[#E8E9EB] rounded-xl  focus:outline-blue-400"
            />
          </div>
          <div className="flex gap-[2rem] pb-[2.5rem]">
            <Input
              type="text"
              label="Email Address"
              className="w-[38.25rem] pl-5 h-[3.75rem] border-2 border-[#E8E9EB] rounded-xl  focus:outline-blue-400"
            />
          </div>
          <div>
            <Card className="w-[38.25rem] flex space-x-5 px-5 py-[0.62rem] h-[3.75rem] border-t-2 border-r-2 border-l-2 border-[#E8E9EB] rounded-sm">
              <p className="mt-2 text-[#1D1D1F] text-[1.125rem] font-semibold tracking-[-0.0225rem] leading-[1.5rem]">
                To :{" "}
              </p>{" "}
              <p className="w-[12.5625rem] h-[2.375rem] bg-[#F5F5F7] text-[#1D1D1F] text-[1.125rem] font-semibold leading-[1.5rem] tracking-[-0.0225rem] px-5 py-2 rounded-md">
                Feedxpay
              </p>
            </Card>
          </div>
          <div className="relative pb-[2.5rem]">
            <textarea
              type="text"
              className="w-[38.25rem] pl-5 h-[18.91rem] border-2 border-[#E8E9EB] rounded-b-xl  focus:outline-blue-400"
            />
          </div>
          <button className="w-[10.125rem] text-[1.125rem] font-medium leading-[1.5rem] tracking-[-0.0225rem] absolute left-28 bottom-32 h-[3.6875rem] bg-[#017A59] rounded-md text-white">
            Send Message
          </button>
        </form>
      </Card>
    </section>
  );
};

export default ComplaintForm;
