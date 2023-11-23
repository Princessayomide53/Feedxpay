import React from "react";
import Card from "../../UI/Card";
import bulb from "../../../Assets/bulb.gif";
import check from "../../../Assets/check.gif";
import lock from "../../../Assets/lock.gif";

const Offer = () => {
  return (
    <section>
      <div className="flex justify-between pb-[9.38rem]">
        <div>
          <Card className="bg-[#EBFFF5] w-[4.375rem] h-[4.375rem] rounded-lg ">
            <div className="flex justify-center items-center ">
              <img src={check} alt="" className="w-[3.534rem] mt-5" />
            </div>
          </Card>
          <p className="text-[#017A59] text-[1.375rem] leading-[2rem] font-semibold pt-[2rem] pb-[1.06rem]">
            Secure Transactions
          </p>
          <p className="text-[#1D1D1F] text-[1.125rem] font-medium leading-[1.5rem]">
            Your security is our top priority.
            <br /> With state-of-the-art encryption
            <br />
            technology, your transactions are <br />
            always safe and secure.
          </p>
        </div>
        <div>
          <Card className="bg-[#EBFFF5] w-[4.375rem] h-[4.375rem] rounded-lg">
            <div className="flex justify-center items-center ">
              <img
                src={lock}
                alt=""
                className="w-[10.934rem] h-[5.734rem] mt-2"
              />
            </div>
          </Card>
          <p className="text-[#017A59] text-[1.375rem] leading-[2rem] font-semibold pt-[2rem] pb-[1.06rem]">
            User-Friendly Interface
          </p>
          <p className="text-[#1D1D1F] text-[1.125rem] font-medium leading-[1.5rem]">
            Our intuitive interface makes payments
            <br /> easy for everyone. No more navigating <br />
            through complex processes with FeedXPay, <br />
            it's just a few clicks away.
          </p>
        </div>

        <div>
          <Card className="bg-[#EBFFF5] w-[4.375rem] h-[4.375rem] rounded-lg flex justify-center items-center">
            <img src={bulb} alt="" className="w-[3.534rem]" />
          </Card>

          <p className="text-[#017A59] text-[1.375rem] leading-[2rem] font-semibold pt-[2rem] pb-[1.06rem]">
            Versatile Solutions
          </p>
          <p className="text-[#1D1D1F] text-[1.125rem] font-medium leading-[1.5rem]">
            From mobile payments to online
            <br />
            transactions, FeedXPay offers a wide
            <br />
            range of payment solutions tailored
            <br /> to your needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Offer;
