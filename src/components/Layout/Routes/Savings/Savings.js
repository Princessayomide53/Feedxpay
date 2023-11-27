import React from "react";
import Card from "../../../UI/Card";

const Savings = () => {
  const Payments = [
    {
      id: 1,
      num: "01",
      name: "Emergency Preparedness",
      text: "Sometimes, expenses come unprepared, however, with the help of savings, it becomes easy to cater for unforeseen needs when they arise.",
    },
    {
      id: 2,
      num: "02",
      name: "Financial Discipline",
      text: "Regular savings instills financial discipline and responsible money management, promoting good money spending culture.",
    },
    {
      id: 3,
      num: "03",
      name: "Interest & Investment gains",
      text: "Rather than spend on unnecessary things, savings helps you to invest and earn returns or interest, allowing your money to grow over time.",
    },
    {
      id: 4,
      num: "04",
      name: "Reduced Financial Stress",
      text: "Knowing you have money saved somewhere reduce stress and anxiety associated with financial uncertainty, allowing you to focus on other aspect of your life.",
    },
  ];
  return (
    <main className="max-w-[83rem] mx-auto flex justify-between">
      <div className="flex flex-col justify-center pt-[2rem] ">
        <h1 className="text-[2.875rem] pb-[0.5rem] font-bold leading-[3.875rem] tracking-[-0.0575rem]">
          Savings comes with <br />
          Various<span className="text-[#017A59] pl-5">Benefits</span>
        </h1>
        <p className="text-[#8A9099] text-[1.375rem] font-medium leading-[2.125rem]">
          Benefits of saving are numerous, this is
          <br />
          to give you insights as to why you should
          <br />
          start saving today.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-[1.88rem] pt-[12.06rem] pb-[7rem] place-content-start justify-start text-start items-start">
        {Payments.map((item) => (
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
    </main>
  );
};
export default Savings;
