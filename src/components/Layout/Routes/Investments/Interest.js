import React from "react";
import Card from "../../../UI/Card";

const Interest = () => {
  const Interest = [
    {
      id: 1,
      num: "01",
      name: "Attractive ROI",
      text: "Our solution makes it easy for businesses, companies and other financial institutions to make global payment and receive with multiple currencies.",
    },
    {
      id: 2,
      num: "02",
      name: "Access to Resources",
      text: "Our solution makes it easy for businesses, companies and other financial institutions to make global payment and receive with multiple currencies.",
    },
    {
      id: 3,
      num: "03",
      name: "Historical Performance",
      text: "Our solution makes it easy for businesses, companies and other financial institutions to make global payment and receive with multiple currencies.",
    },
    {
      id: 4,
      num: "04",
      name: "Cost and Fees",
      text: "Our solution makes it easy for businesses, companies and other financial institutions to make global payment and receive with multiple currencies.",
    },
  ];
  return (
    <section className="max-w-[83rem] mx-auto flex justify-between">
      <div className="flex flex-col justify-center pt-[0.5rem] ">
        <h1 className=" text-[2.875rem] pt-[6.25rem] font-bold leading-[3.875rem] tracking-[-0.0575rem]">
          We have our <br /> <span className="text-[#017A59]">customers’</span>
          <br />
          interest at heart
        </h1>
        <p className="text-[#8A9099] pt-[0.2rem] text-[1.375rem] font-medium leading-[2.125rem]">
          Benefits of saving are numerous, this is
          <br />
          to give you insights as to why you should
          <br />
          start saving today.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-[1.88rem] pt-[12.06rem] pb-[7rem] place-content-start justify-start text-start items-start">
        {Interest.map((item) => (
          <Card
            key={item.id}
            className="w-[23.3125rem] h-[18.8125rem] relative bg-[#EBFFF5] bg-opacity-40  rounded-xl shadow-md p-[1.82rem]"
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

export default Interest;
