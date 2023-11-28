import React from "react";
import Tofunmi from "../../../../Assets/Tofunmi.png";
import faruk from "../../../../Assets/faruk.png";
import yellow from "../../../../Assets/yellow.png";

const Team = () => {
  return (
    <section className="max-w-[83rem] mx-auto">
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
            We are a team of individuals from different educational background
            <br />
            working together with the goal of building a new and better future
            of
            <br />
            successful and permission-less entrepreneurship for everyone.
          </p>
          <p className="pt-[1rem] text-[#1D1D1F] text-[1.0625rem] font-medium leading-[1.5rem] tracking-[-0.02125rem]">
            {" "}
            If you run a business or ever decide to do so, we are here to
            support you.
          </p>
        </div>
      </div>
      <div className="flex  justify-between pt-[4.88rem] pb-[11.87rem]">
        <div>
          <img src={faruk} alt="" />
        </div>

        <div>
          <img src={Tofunmi} alt="" />
        </div>
        <div>
          <img src={yellow} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Team;
