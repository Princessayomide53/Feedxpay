import React from "react";
import Card from "../../../UI/Card";

const Benefits = () => {
  const benefits = [
    {
      id: 1,
      num: "01",
      name: "Competitive Salary",
      text: "We believe in recognizing and rewarding excellence. Enjoy a competitive salary that reflects your expertise",
    },
    {
      id: 2,
      num: "02",
      name: "Paid Leave",
      text: "We understand the importance of work-life balance and provide generous paid leave policies, allowing you to recharge and pursue personal interests.",
    },
    {
      id: 3,
      num: "03",
      name: "Allowances",
      text: "Beyond your salary, FeedXPay offers various allowances to cater to different aspects of your professional and personal life.",
    },
    {
      id: 4,
      num: "04",
      name: "Learning and Development",
      text: "Your growth is our priority. We invest in your professional development because we believe in the power of a well-equipped and empowered team.",
    },
  ];
  return (
    <section className="max-w-[83rem] mx-auto flex justify-center space-x-[3.94rem]">
      <div className="flex flex-col justify-center pt-[0.5rem] ">
        <h1 className="uppercase text-[#017A59] text-[1.5rem] pt-[6.25rem] font-semibold leading-[2.3125rem] tracking-[-0.03rem]">
          Our Benefits
        </h1>

        <p className="text-[#1D1D1F] pt-[2rem] text-[1.5rem] font-medium leading-[2.3125rem] tracking-[-0.03rem]">
          There are great benefits to <br />
          being a part of Feedxpay team. <br />
          These serve as motivations <br />
          at work and while on leave.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-[1.88rem] pt-[12.06rem] pb-[7rem] place-content-start justify-start text-start items-start">
        {benefits.map((item) => (
          <Card
            key={item.id}
            className="w-[23.3125rem] h-[18.8125rem] relative bg-white bg-opacity-40  rounded-xl shade p-[1.82rem]"
          >
            {" "}
            <p className="text-[#017A59] text-opacity-40 text-[2.875rem] font-bold leading-[3.875rem] tracking-[-0.0575rem]">
              {item.num}
            </p>
            <h1 className="pb-[1rem] text-[#017A59] pt-[1.5rem] text-[1.375rem] font-semibold leading-[2rem] ">
              {item.name}
            </h1>
            <p className="text-[#1D1D1F] text-[1.125rem font-medium leading-[1.5rem]">
              {item.text}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
