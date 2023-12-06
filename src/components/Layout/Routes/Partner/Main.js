import React from "react";
import Card from "../../../UI/Card";

const Main = () => {
  const main = [
    {
      id: 1,
      num: "01",
      name: "Customer centricity",
      text: "We continuously seek  truth, learn and improve in areas of making important decision that as to do with work, relationship, customer centricity and everything that is critical to our business.",
    },
    {
      id: 2,
      num: "02",
      name: "Ownership",
      text: "We continuously seek  truth, learn and improve in areas of making important decision that as to do with work, relationship, customer centricity and everything that is critical to our business.",
    },
    {
      id: 3,
      num: "03",
      name: "Clear Communication",
      text: "We continuously seek  truth, learn and improve in areas of making important decision that as to do with work, relationship, customer centricity and everything that is critical to our business.",
    },
    {
      id: 4,
      num: "04",
      name: "Innovation",
      text: "We continuously seek  truth, learn and improve in areas of making important decision that as to do with work, relationship, customer centricity and everything that is critical to our business.",
    },
  ];
  return (
    <section className="max-w-[83rem] mx-auto">
      <h1 className="pt-[6.25rem] text-[#1D1D1F] text-center text-[2.875rem] font-bold leading-[3.875rem] tracking-[-0.0575rem]">
        <span className="text-[#017A59]">Why</span> become Our Partner
      </h1>

      <p className="pt-[1.28rem] text-center pb-[8.69rem] text-[#1D1D1F] text-[1.375rem] font-medium leading-[1.875rem] tracking-[-0.0275rem]">
        We continuously seek truth, learn and improve in areas of <br />
        making important decision that as to do with work, relationship, <br />
        customer centricity and everything that is critical to our business.
      </p>
      <div className="grid grid-cols-2 place-items-center gap-[3.25rem] pb-[6.25rem]">
        {main.map((list) => (
          <Card
            key={list.id}
            className="w-[36rem] h-[22.375rem] rounded-md shade p-[1.25rem]"
          >
            <h4 className="text-[#017A5966] pb-[2.37rem] text-[2.875rem] font-bold leading-[3.875rem] tracking-[-0.0575rem]">
              {list.num}
            </h4>
            <h2 className="text-[#017A59] text-[1.375rem] font-semibold leading-[2rem] pb-[0.75rem]">
              {list.name}
            </h2>
            <p className="text-[#1D1D1F] text-[1.375rem] font-medium leading-[2.125rem]">
              {list.text}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Main;
