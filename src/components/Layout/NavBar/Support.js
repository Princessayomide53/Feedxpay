import React from "react";
import Modal3 from "../../UI/Modal3";
import { Link } from "react-router-dom";

const Support = (props) => {
  const support = [
    {
      id: 1,
      name: "FAQs",
      text: "We answered some important questions you would like to ask us.",
    },
    {
      id: 2,
      name: "Become a partner",
      text: "We are a fast growing cross-border payment platform. We will be happy to have you join us.",
    },
    {
      id: 3,
      name: "Community",
      text: "Join our community of great people whose mission is to serve a global audience at a click.",
    },
    {
      id: 4,
      name: "Contact Sales",
      text: "Do you need help with our services or would like to make enquiries? We got you covered.",
    },
  ];

  return (
    <Modal3 onClose={props.onHideSupportModal}>
      <div className="py-[0.3rem] px-[0.3rem]">
        {support.map((data) => (
          <Link to={`/support/${data.id}`} key={data.id}>
            <div className="bg-text py-4 px-2">
              <h1 className="pb-[0.2rem] text-[#1D1D1F] text-[1.375rem] font-semibold leading-[2rem]">
                {data.name}
              </h1>
              <p className=" text-[1.125rem] font-medium leading-[1.5rem] text-[#1D1D1F]">
                {data.text}
              </p>
            </div>{" "}
          </Link>
        ))}
      </div>
    </Modal3>
  );
};

export default Support;
