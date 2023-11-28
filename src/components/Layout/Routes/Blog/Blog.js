import React from "react";
import dollar from "../../../../Assets/dollar.png";
import bulb from "../../../../Assets/bulb.png";
import Business from "../../../../Assets/Business.png";
import Card from "../../../UI/Card";

const Blog = () => {
  const blog = [
    {
      id: 1,
      image: dollar,
      name: "How to earn money on Feedxpay",
      text: "Lorem ipsum dolor sit amet consectetur. Ac volutpat ac turpis lacus. Et proin in rutrum sit cras nunc quis. Luctus est facilisi massa nibh pretium odio et fermentum....",
      date: "feb 10 22",
      time: "2hrs ago",
      By: "By: Faruk Rufai",
    },
    {
      id: 2,
      image: Business,
      name: "How to grow your business with Feedxpay",
      text: "Lorem ipsum dolor sit amet consectetur. Ac volutpat ac turpis lacus. Et proin in rutrum sit cras nunc quis. Luctus est facilisi massa nibh pretium odio et fermentum....",
      date: "feb 10 22",
      time: "2hrs ago",
      By: "By: Oluwapelumi Okeowo",
    },
    {
      id: 3,
      image: bulb,
      name: "Light up your world with business insights from Feedxpay",
      text: "Lorem ipsum dolor sit amet consectetur. Ac volutpat ac turpis lacus. Et proin in rutrum sit cras nunc quis. Luctus est facilisi massa nibh pretium odio et fermentum....",
      date: "feb 10 22",
      time: "2hrs ago",
      By: "By: Tofunmi Okedeji",
    },
  ];
  return (
    <section className="background h-[155rem]">
      <div className="max-w-[83rem] mx-auto pt-[7.5rem]">
        <h1 className="pt-[6.35rem] pb-[3.75rem] text-[#017A59] text-center text-[3.1875rem] font-bold leading-[4.375rem]">
          Feedxpay Blog
        </h1>
        <div className="flex flex-col justify-center items-center space-y-[6.25rem]">
          {blog.map((blx) => (
            <Card className="h-[35.625rem] w-[71.5rem] bg-white rounded-3xl shadow-lg flex justify-between">
              <div>
                <img
                  src={blx.image}
                  alt=""
                  className="w-[27.625rem] h-[35.625rem]"
                />
              </div>
              <div className="p-5 ">
                <h2 className="text-[#017A59] pt-[3rem] text-[2.875rem] font-bold leading-[3.875rem] tracking-[-0.0575rem]">
                  {blx.name}
                </h2>
                <p className="text-[#8A9099] text-[1.5rem] leading-[2.3125rem] w-[38.375rem] pt-[2.25rem] font-semibold tracking-[-0.03rem]">
                  {blx.text} <span className="text-[#017A59]">see more</span>
                </p>
                <div className="flex justify-between pt-[3.19rem]">
                  <p className="text-[#8A9099] text-[1.375rem] font-medium leading-[1.875rem] tracking-[-0.0275rem]">
                    {blx.date}
                  </p>
                  <p className="text-[#8A9099] text-[1.375rem] font-medium leading-[1.875rem] tracking-[-0.0275rem]">
                    {blx.time}
                  </p>
                </div>
                <p className="pt-[1.94rem] text-[#017A59] text-[1.375rem] font-bold leading-[1.875rem] tracking-[-0.0275rem]">
                  {blx.By}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <div className="flex justify-center pt-[5.13rem]">
        <div className="flex space-x-[2.81rem]">
          <p className="text-[#1D1D1F] text-[1.5rem] font-semibold leading-[2.3125rem] tracking-[-0.03rem]">
            Prev
          </p>
          <p className="text-[#1D1D1F] text-[1.5rem] font-semibold leading-[2.3125rem] tracking-[-0.03rem]">
            1
          </p>
          <p className="bg-[#017A59] rounded-full px-5 py-2 -mt-2 text-[1.5rem] font-semibold leading-[2.3125rem] tracking-[-0.03rem]">
            2
          </p>
          <p className="text-[1.5rem] text-[#1D1D1F] font-semibold leading-[2.3125rem] tracking-[-0.03rem]">
            3
          </p>
          <p className="text-[1.5rem] text-[#1D1D1F] font-semibold leading-[2.3125rem] tracking-[-0.03rem]">
            4
          </p>
          <p className="text-[1.5rem] text-[#1D1D1F] font-semibold leading-[2.3125rem] tracking-[-0.03rem]">
            Next
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
