import React from "react";
import Tofunmi from "../../../../Assets/Tofunmi.png";
import faruk from "../../../../Assets/faruk.png";
import yellow from "../../../../Assets/yellow.png";
import Card from "../../../UI/Card";

const Team = () => {
  return (
    <section className="max-w-[73rem] mx-auto">
      <h2 className=" uppercase pt-[6.25rem] text-[#017A59] text-[1.5rem] font-semibold leading-[2.3125rem] tracking-[-0.03rem]">
        Our Team
      </h2>
      <div className="flex justify-between">
        <p className="pt-[1.28rem] text-[#1D1D1F] text-[2rem] font-bold leading-[3rem]">
          The amazing people <br />
          doing the work
        </p>
        <div>
          <p className="text-[#1D1D1F] text-[1.0625rem] font-medium leading-[1.5rem] tracking-[-0.02125rem]">
            At FeedXPay, our success is built on the foundation of a dedicated
            and
            <br /> diverse team of professionals who share a passion for
            innovation,
            <br /> excellence, and a commitment to redefining the future of
            financial
            <br /> services.
          </p>
          {/* <p className="pt-[1rem] text-[#1D1D1F] text-[1.0625rem] font-medium leading-[1.5rem] tracking-[-0.02125rem]">
            {" "}
            If you run a business or ever decide to do so, we are here to
            support you.
          </p> */}
        </div>
      </div>
      <div className="flex space-x-[1.5rem]  justify-center pt-[4.88rem] pb-[11.87rem] overflow-hidden">
        <div className="relative">
          <img src={faruk} alt="" />
          <Card className="bg-[#017A59] px-[1rem] py-[0.69rem] w-[28.652rem] h-[5.125rem] absolute top-[25rem] left-0 rounded-br-xl rounded-bl-xl">
            <h5 className="text-white capitalize text-[1.5rem] font-semibold leading-[2.3125rem] tracking-[-0.03rem]">
              Rufai Faruk
            </h5>
            <p className="text-[1.125rem] text-white font-semibold leading-[1.5rem] tracking-[-0.0225rem]">
              Chief Executive officer
            </p>
          </Card>
        </div>
        <div className="relative">
          <img src={Tofunmi} alt="" />
          <Card className="bg-[#017A59] px-[1rem] py-[0.69rem] w-[28.652rem] h-[5.125rem] absolute top-[25rem] left-0 rounded-br-xl rounded-bl-xl">
            <h5 className="text-white capitalize text-[1.5rem] font-semibold leading-[2.3125rem] tracking-[-0.03rem]">
              Okedeji Tofunmi
            </h5>
            <p className="text-[1.125rem] text-white font-semibold leading-[1.5rem] tracking-[-0.0225rem]">
              Chief Technology officer
            </p>
          </Card>
        </div>
        <div className="relative">
          <img src={yellow} alt="" />
          <Card className="bg-[#017A59] px-[1rem] py-[0.69rem] w-[29.5625rem] h-[5.125rem] absolute top-[25rem] left-0 rounded-br-xl rounded-bl-xl">
            <h5 className="text-white capitalize text-[1.5rem] font-semibold leading-[2.3125rem] tracking-[-0.03rem]">
              Akin Fayokon
            </h5>
            <p className="text-[1.125rem] text-white font-semibold leading-[1.5rem] tracking-[-0.0225rem]">
              Chief information security officer
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Team;
