import React from "react";
import Card from "../../../UI/Card";

const Steps = () => {
  const steps = [
    {
      id: 1,
      steps: "01",
      text: "Download the Feedxpay App and deposit enough amount of money into your account.",
    },
    {
      id: 2,
      steps: "02",
      text: "Choose your preferred savings plan and complete the important informations required.",
    },
    {
      id: 3,
      steps: "03",
      text: "Sit back and watch your money grow over the period of saving. Nothing beats this feeling.",
    },
  ];
  return (
    <section className="max-w-[83rem] mx-auto">
      <h1 className="text-[2.875rem] pt-[6.25rem] text-center text-[#1D1D1F] font-bold leading-[3.875rem] tracking-[-0.0575rem]">
        Get Started in{" "}
        <span className="text-[#017A59]">three simple steps</span>
      </h1>

      <p className="text-[#8A9099] text-center pt-[0.5rem] text-[1.375rem] font-medium leading-[2.125rem]">
        Here are three easy steps to get your savings journey started
      </p>

      <div className="flex gap-[1.62rem] pt-[6.44rem] pb-[6.25rem]">
        {steps.map((step) => (
          <Card
            key={step.id}
            className="w-[27.625rem] contain p-[2rem] ease-in-out transition-all duration-300 text-[#ffffff] h-[16.5rem] border-2 border-[#017A59] rounded-lg hover:shadow-xl"
          >
            <h2 className="text-[2.875rem]  text1 font-bold leading-[3.875rem] tracking-[-0.0575rem]">
              {step.steps}
            </h2>

            <p className=" text2 pt-[2rem] text-[1.375rem] font-medium leading-[1.875rem] tracking-[-0.0275rem]">
              {step.text}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Steps;
