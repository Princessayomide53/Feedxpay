import React from "react";
import Card from "../../../UI/Card";

const Provide = () => {
  const provide = [
    {
      id: 1,
      num: "01",
      name: "Cross-border Payment",
      text: "Connect with the world effortlessly. Our Cross-Border Payment solution provides you with the tools to send and receive funds internationally.",
    },
    {
      id: 2,
      num: "02",
      name: "Connecting Business",
      text: "Our solution makes it easy for businesses, companies and other financial institutions to make global payment and receive with multiple currencies.",
    },
    {
      id: 3,
      num: "03",
      name: "Breaking Boundaries",
      text: "We break down the barriers hindering you from enjoying exemplary business and personal financial transactions.",
    },
    {
      id: 4,
      num: "04",
      name: "Trusted Financial Services",
      text: "Our commitment to being a Trusted Financial Service provider goes beyond transactions – it's about building a relationship founded on trust, security, and empowerment.",
    },
  ];
  return (
    <section className="max-w-[83rem] mx-auto flex justify-evenly">
      <div className="flex flex-col justify-center pt-[0.5rem] ">
        <h1 className="uppercase text-[#017A59] text-[1.5rem] pt-[6.25rem] font-semibold leading-[2.3125rem] tracking-[-0.03rem]">
          What we provide
        </h1>

        <p className="text-[#1D1D1F] pt-[2rem] text-[1.5rem] font-medium leading-[2.3125rem] tracking-[-0.03rem]">
          We are here to offer you <br />
          topnotch payment and business <br />
          services you will not find <br />
          anywhere else.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-[1.88rem] pt-[12.06rem] pb-[7rem] place-content-start justify-start text-start items-start">
        {provide.map((item) => (
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

export default Provide;
