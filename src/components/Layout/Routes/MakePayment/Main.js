import React from "react";
import Card from "../../../UI/Card";
import check2 from "../../../../Assets/check2.gif";
import guard from "../../../../Assets/guard.gif";
import transfer from "../../../../Assets/transfer.gif";
import wallet from "../../../../Assets/wallet.gif";

const Main = () => {
  const Payments = [
    {
      id: 1,
      img: check2,
      name: "Instant transfer",
      text: "Our solution makes it easy for businesses, companies and other financial institutions to make global payment and receive with multiple currencies.",
    },
    {
      id: 2,
      img: transfer,
      name: "Low Tranfer fee",
      text: "Our solution makes it easy for businesses, companies and other financial institutions to make global payment and receive with multiple currencies.",
    },
    {
      id: 3,
      img: wallet,
      name: "Transparent Exchange Rate",
      text: "Our solution makes it easy for businesses, companies and other financial institutions to make global payment and receive with multiple currencies.",
    },
    {
      id: 4,
      img: guard,
      name: "Safe & Secure Transactions",
      text: "Our solution makes it easy for businesses, companies and other financial institutions to make global payment and receive with multiple currencies.",
    },
  ];
  return (
    <main className="max-w-[83rem] mx-auto flex justify-between">
      <div className="flex flex-col justify-center pt-[2rem] ">
        <h1 className="text-[2.875rem] pb-[0.5rem] font-bold leading-[3.875rem] tracking-[-0.0575rem]">
          We offer the best <br />
          <span className="text-[#017A59] ">payment service.</span> You <br />
          can bank on US
        </h1>
        <p className="text-[#8A9099] text-[1.375rem] font-medium leading-[2.125rem]">
          Easily send and receive money without <br />
          location barrier.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-[1.88rem] pt-[8.19rem] pb-[6.25rem] place-content-start justify-start text-start items-start">
        {Payments.map((item, index) => (
          <Card
            key={item.id}
            className="w-[23.3125rem] h-[18.8125rem] relative bg-[#EBFFF5] bg-opacity-40  rounded-xl shadow-md p-[1.82rem]"
          >
            {" "}
            <div className="mb-[0.75rem]">
              <img
                src={item.img}
                alt="gif"
                className={`object-cover w-[4.0625rem] absolute top-[1.5rem]  ${
                  index === 2 ? "right-[17.8rem]" : "right-[18.5rem]"
                } ${index === 0 ? "w-[5.0625rem]" : "w-[4.0625rem]"} ${
                  index === 1 ? "w-[4.7625rem]" : "w-[4.0625rem]"
                } ${index === 1 ? "pt-3" : "pt-0"}`}
              />
            </div>
            <h1 className="pb-[1rem] text-[#017A59] pt-[3.7rem] text-[1.375rem] font-semibold leading-[2rem] ">
              {item.name}
            </h1>
            <p className="text-[#1D1D1F] text-[1.125rem font-medium leading-[1.5rem]">
              {item.text}
            </p>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default Main;
