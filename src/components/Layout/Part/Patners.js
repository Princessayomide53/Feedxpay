import React from "react";
import gtb from "../../../Assets/gtb.png";
import anchor from "../../../Assets/anchor.png";
import wema from "../../../Assets/wema.png";
import map from "../../../Assets/map.png";
import fincra from "../../../Assets/fincra.png";
import providus from "../../../Assets/providus.png";

const Patners = () => {
  const patners = [
    {
      id: 1,
      img: providus,
    },
    {
      id: 2,
      img: wema,
    },
    {
      id: 3,
      img: map,
    },
    {
      id: 4,
      img: fincra,
    },
    {
      id: 5,
      img: gtb,
    },
    {
      id: 6,
      img: anchor,
    },
    // {
    //   id: 7,
    //   img: providus,
    // },
  ];

  return (
    <section className="h-[28.75rem] w-full max-w-[80rem] mx-auto">
      <h1 className="text-center text-[#1D1D1F] text-[2.875rem] pt-[6.25rem] font-bold leading-[3.875rem] tracking-[-0.0575rem]">
        Meet Our <span className="text-[#017A59]">Patners</span>
      </h1>
      <div className="w-full overflow-hidden">
        <div className="logos flex justify-between items-center pt-[4.94rem]">
          {Array.from({ length: 1 }).map((_, groupIndex) => (
            <React.Fragment key={groupIndex}>
              {patners.map((item, index) => (
                <div
                  key={index}
                  className={`w-full ${index !== 0 ? "mx-10" : ""}`}
                >
                  <img src={item.img} alt={item.id} className="object-cover" />
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
      ``
    </section>
  );
};

export default Patners;
