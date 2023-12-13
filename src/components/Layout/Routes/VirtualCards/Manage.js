import React from "react";
import Cards from "../../../../Assets/Cards.png";
import Machine from "../../../../Assets/Machine.png";
import GreenCard from "../../../../Assets/GreenCard.png";
import Card from "../../../UI/Card";
import wallet from "../../../../Assets/wallet.gif";
// import Card from "../../../../Assets/Card.png";

const Manage = () => {
  const manage = [
    {
      id: 1,
      img: GreenCard,
      title: "Select Card Type",
      text: "Select your preferred card type (Mastercard or Visa)",
    },
    {
      id: 2,
      img: wallet,
      title: "Exchange Currency",
      text: "Exchange your wallet balance to your preferred currency",
    },
    {
      id: 3,
      img: Machine,
      title: "Debit Card Transaction History",
      text: "Get an overview of your transaction history",
    },
  ];
  return (
    <section className="max-w-[83rem] mx-auto">
      <h2 className="text-[#1D1D1F] pt-[6.25rem] pb-[4.38rem] text-[2.875rem] font-bold leading-[3.875rem] tracking-[-0.0575rem]">
        Manage all your <br />
        <span className="text-[#017A59]">Debit Card</span> Activities
      </h2>
      <div className="flex justify-between pb-[15.38rem]">
        <div className=" flex flex-col space-y-[2.5rem]">
          {manage.map((data) => (
            <Card
              key={data.id}
              className="border-2 transition-all ease-in-out duration-300 border-[#E8E9EB] rounded-lg hover:bg-[#EBFFF5] hover:bg-opacity-40 hover:border-0 w-[36.875rem] flex items-center gap-[1.5rem] h-[9.25rem] px-[2rem] py-[0.5rem]"
            >
              <div>
                <img
                  src={data.img}
                  alt=""
                  className="object-cover w-[3.3125rem] h-[3.3125rem]"
                />
              </div>
              <div>
                <h2 className="text-[#017A59] text-[1.375rem] font-semibold leading-[2rem]">
                  {data.title}
                </h2>

                <p className="pt-[1rem] text-[#1D1D1F] leading-[1.75rem] text-[1.25rem] font-medium tracking-[-0.025rem]">
                  {data.text}
                </p>
              </div>
            </Card>
          ))}
        </div>
        <div>
          <img
            src={Cards}
            alt=""
            className="object-cover w-[26.37538rem] h-[33.5875rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default Manage;
