import React from "react";
import Card from "../../../UI/Card";

const Easy = () => {
  const method = [
    {
      id: 1,
      num: 1,
      name: "Select Payment Method",
      text: "Making payments has never been this easy. The first step is the select your preferred method of payments.",
    },
    {
      id: 2,
      num: 2,
      name: "Complete Details Input",
      text: "Input all details and required fields including amount, destination, currency, narration and others.",
    },
    {
      id: 3,
      num: 3,
      name: "Preview Details and Send",
      text: "Preview and confirm all filled details to avoid mistakes, and then you can click send.",
    },
  ];
  return (
    <section className="max-w-[83rem] mx-auto">
      <h1 className=" text-[2.875rem] py-[6.25rem] font-bold leading-[3.875rem] tracking-[-0.0575rem]">
        Steps to <span className="text-[#017A59]">making payments,</span>
        <br />
        the easiest way possible
      </h1>
      <div className="flex justify-between pb-[10.94rem]">
        {method.map((item) => (
          <div key={item.id}>
            <Card className="w-[3.125rem] h-[3.125rem] bg-[#EBFFF5] mb-[2rem] rounded-xl py-2">
              <p className="text-center text-[#017A59] font-semibold text-[1.5rem] leading-[2.3125rem] tracking-[-0.03rem]">
                {item.num}
              </p>
            </Card>
            <h3 className="text-[#017A59] text-[1.375rem] font-semibold leading-[2rem] pb-[0.75rem]">
              {item.name}
            </h3>

            <p className="text-[#1D1D1F] w-[22rem] text-[1.125rem] font-medium leading-[1.5rem]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Easy;
