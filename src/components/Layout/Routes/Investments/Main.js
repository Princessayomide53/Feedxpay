import React from "react";
import T from "../../../../Assets/T.png";
import $ from "../../../../Assets/$.png";
import Netflix from "../../../../Assets/Netflix.png";
import Estate from "../../../../Assets/Estate.png";
import Income from "../../../../Assets/Income.png";
import Card from "../../../UI/Card";

const Main = () => {
  const stocks = [
    {
      id: 1,
      img: [Netflix, T, $],
      name: "stocks",
      risks: "High",
      text: "Choose your preferred savings plan and complete the important informations required.",
    },
    {
      id: 2,
      img: Estate,
      name: "stocks",
      risks: "High",
      text: "Choose your preferred savings plan and complete the important informations required.",
    },
    {
      id: 3,
      img: Income,
      name: "stocks",
      risks: "High",
      text: "Choose your preferred savings plan and complete the important informations required.",
    },
  ];
  return (
    <section className="max-w-[83rem] mx-auto">
      <h1 className="pt-[6.25rem] text-[#1D1D1F] text-center text-[2.875rem] font-bold leading-[3.875rem] tracking-[-0.0575rem]">
        There are <span className="text-[#017A59]">options</span> to pick from
      </h1>

      <p className="text-center pt-[0.5rem] pb-[6.44rem] text-[#8A9099] text-[1.375rem] font-medium leading-[2.125rem]">
        We got you covered, choose from our best investment options
      </p>

      <div className="flex justify-between ">
        {stocks.map((item, index) => (
          <Card
            className="w-[25.625rem] h-[20.8125rem] cursor-pointer hover:shadow-xl px-[0.8rem] py-[2rem] border-[2px] transition-all duration-300 ease-in-out rounded-lg hover:bg-[#EBFFF5] hover:bg-opacity-40 border-[#E8E9EB]"
            key={item.id}
          >
            <div className="flex">
              {Array.isArray(item.img) ? (
                item.img.length > 0 &&
                item.img.map((image, subIndex) => (
                  <img
                    key={subIndex}
                    src={image}
                    alt={`Step ${item.stocks} - img ${subIndex + 1}`}
                  />
                ))
              ) : (
                <img
                  src={item.img}
                  alt={`Step ${item.stocks} - img`}
                  className={`w-[5rem] h-[4.2rem] ${
                    index === 2 ? "mr-4" : ""
                  }  ${index === 1 ? "ml-4" : ""}`}
                />
              )}
            </div>

            <div className="px-7">
              <h2 className="text-[#1D1D1F] text-[1.5rem] font-semibold leading-[2.3125rem] tracking-[0.03rem]">
                {item.name}
              </h2>
              <p
                className={`pt-[0.19rem]  text-[1.375rem] font-medium leading-[1.875rem] tracking-[-0.0275rem] ${
                  index === 0 ? "text-[#EB7070]" : ""
                } ${index === 1 ? "text-[#CFA200]" : ""} ${
                  index === 2 ? "text-[#017A59]" : ""
                }`}
              >
                {item.risks}
              </p>
              <p className="text-[#1D1D1F] pt-[1rem] text-[1.375rem] font-medium leading-[1.875rem] tracking-[-0.0275rem]">
                {item.text}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Main;
