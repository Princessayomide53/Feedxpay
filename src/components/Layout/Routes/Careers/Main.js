import React from "react";
import Card from "../../../UI/Card";
import customer from "../../../../Assets/customer.png";

const Main = () => {
  const grow = [
    {
      id: 1,
      image: customer,
      name: "Customer centricity",
      text: "We place our valued customer, at the center of everything we do. Our customer-centric approach is more than a philosophy; it's a guiding principle that shapes every interaction",
    },
    {
      id: 2,
      image: customer,
      name: "OwnerShip",
      text: "All members of our team take responsibility for understanding customer needs, providing tailored solutions, and ensuring that every interaction reflects our dedication to our customers satisfaction.",
    },
    {
      id: 3,
      image: customer,
      name: "Clear Communication",
      text: "Transparency is the heartbeat of our company. We believe in clear, concise and open communication is encouraged at every touchpoint. ",
    },
    {
      id: 4,
      image: customer,
      name: "Innovation",
      text: "We embrace the latest technologies to offer cutting-edge financial solutions. We constantly push the boundaries to bring you innovative services that redefine your financial experience..",
    },
    {
      id: 5,
      image: customer,
      name: "Adaptability and Flexibility",
      text: "Whether it's adapting to new regulations or enhancing our services based on your feedback, we prioritize flexibility to ensure that our platform evolves with you.",
    },
    {
      id: 6,
      image: customer,
      name: "Obsession with high quality and excellence",
      text: "Quality isn't just a standard we meet, it's an obsession that permeates every aspect of our services. Our commitment to high quality and excellence is unwavering.",
    },
  ];
  return (
    <section>
      <main className="pt-[6.25rem] max-w-[75rem] mx-auto">
        <h1 className="text-center text-[#1D1D1F] text-[2.875rem] font-bold leading-[3.875rem] tracking-[-0.0575rem] pb-[1.8rem]">
          We <span className="text-[#017A59]">help each other</span> grow
        </h1>

        <p className="text-center pb-[8.69rem] text-[#1D1D1F] text-[1.375rem] font-medium leading-[1.875rem] tracking-[ -0.0275rem]">
          We continuously seek truth, learn and improve in areas of <br />
          making important decision that as to do with work, relationship,{" "}
          <br />
          customer centricity and everything that is critical to our business.
        </p>
        <div className="grid grid-cols-2 gap-[3.05rem] pb-[7rem]">
          {grow.map((call) => (
            <Card
              className="w-[36rem] h-[22.375rem] rounded-lg shade p-7"
              key={call.id}
            >
              <Card className="w-[4rem] h-[4rem] rounded-lg bg-[#F5F5F7]">
                <div className="flex py-4 justify-center">
                  <img
                    src={call.image}
                    alt=""
                    className="object-cover w-[1.54219rem] h-[1.74219rem]"
                  />
                </div>
              </Card>
              <h2 className=" text-xl pt-[1.5rem] pb-[0.75rem] text-[#017A59] text-[1.375rem] font-semibold leading-[2rem]">
                {call.name}
              </h2>

              <p className="text-[#1D1D1F] text-[1.375rem] font-semibold leading-[2.125rem]">
                {call.text}
              </p>
            </Card>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Main;
