import React from "react";
import Card from "../../../UI/Card";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

const Frequent = () => {
  const Interest = [
    {
      id: 1,
      question: "What kind of investments do I get from Feedxpay?",
      text: "Our solution makes it easy for businesses, companies and other financial institutions to make global payment and receive with multiple currencies.",
    },
    {
      id: 2,
      question: "How can I withdraw my investments?",
      text: "Our solution makes it easy for businesses, companies and other financial institutions to make global payment and receive with multiple currencies.",
    },
    {
      id: 3,
      question: "How is Feedxpay investments regulated?",
      text: "Our solution makes it easy for businesses, companies and other financial institutions to make global payment and receive with multiple currencies.",
    },
    {
      id: 4,
      question:
        "What security measures are in place to protect my money and investments?",
      text: "Our solution makes it easy for businesses, companies and other financial institutions to make global payment and receive with multiple currencies.",
    },
    {
      id: 5,
      question: "What is the process for closing my investments?",
      text: "Our solution makes it easy for businesses, companies and other financial institutions to make global payment and receive with multiple currencies.",
    },
  ];
  return (
    <section className="max-w-[83rem] mx-auto flex justify-between">
      <div className="pt-[13.56rem]">
        <h1 className=" text-[2.875rem] font-bold leading-[3.875rem] tracking-[-0.0575rem]">
          Frequently asked <br />
          <span className="text-[#017A59]">questions</span>
          <br />
        </h1>
        <p className="text-[#8A9099] pt-[1rem] text-[1.275rem] font-medium leading-[2.125rem]">
          We provided answer to some the questions
          <br />
          you would like to ask us. If your question is
          <br />
          not answered here, kindly contact sales.
        </p>
        <Link to="/support/4">
          <button className="bg-[#017A59] mt-[5.88rem] text-white leading-[2rem] text-[1.275rem] px-5 py-[10px] rounded-xl">
            Contact sales
          </button>
        </Link>
      </div>
      <div className="flex flex-col space-y-[3.25rem] pt-[6.25rem] pb-[7rem] ">
        {Interest.map((item) => (
          <Card
            key={item.id}
            className="w-[42.3125rem] h-[5.75rem]  rounded-xl shadow-lg px-[1.52rem] py-[1rem] flex justify-start items-center"
          >
            {" "}
            <h4 className="text-[#017A59] w-[37rem] text-[1.175rem] font-semibold leading-[2rem]">
              {item.question}
            </h4>
            <IoIosArrowUp className="text-2xl" />
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Frequent;
