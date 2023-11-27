import React from "react";
import Card from "../../../UI/Card";

const Main = () => {
  const steps = [
    {
      id: 1,
      num: "01",
      name: "Payment without boundaries",
      text: "Our solution makes it easy for businesses, companies and other financial institutions to make global payment and receive with multiple currencies.",
    },
    {
      id: 2,
      num: "02",
      name: "USD transactions made easy",
      text: "Our solution makes it easy for businesses, companies and other financial institutions to make global payment and receive with multiple currencies.",
    },
    {
      id: 3,
      num: "03",
      name: "Highly Secured",
      text: "Our solution makes it easy for businesses, companies and other financial institutions to make global payment and receive with multiple currencies.",
    },
  ];
  return (
    <section className="max-w-[83rem] mx-auto">
      <h1 className=" text-[2.875rem] py-[6.25rem] font-bold leading-[3.875rem] tracking-[-0.0575rem]">
        You need a <span className="text-[#017A59]">Virtual Card</span>
        <br />
        Here’s why
      </h1>
      <div className="flex justify-between pb-[9.75rem]">
        {steps.map((item) => (
          <div>
            <Card className=" flex justify-start mb-[2rem] rounded-xl ">
              <p className="text-center text-[#017A59] opacity-40 font-bold text-[2.875rem] leading-[3.875rem] tracking-[-0.0575rem]">
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

export default Main;
