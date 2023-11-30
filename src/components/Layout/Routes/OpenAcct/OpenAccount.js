import React from "react";
import Card from "../../../UI/Card";
import Logo from "../../../../Assets/Logo.png";

const OpenAccount = () => {
  return (
    <section className="h-[61.375rem] bg-[#EBFFF5] py-[2.38rem] flex flex-col items-center">
      <Card className="bg-white w-[37.5rem] h-[56.625rem] rounded-xl">
        <article>
          <img
            src={Logo}
            alt=""
            className="pt-[2rem] object-cover w-[] h-[2.875rem]"
          />
        </article>
      </Card>
    </section>
  );
};

export default OpenAccount;
