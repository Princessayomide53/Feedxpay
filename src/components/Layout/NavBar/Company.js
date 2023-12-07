import React from "react";
import Modal2 from "../../UI/Modal2";
import { Link } from "react-router-dom";

const Company = (props) => {
  const Products = [
    {
      id: 1,
      name: "About Us",
      text: "Make payment locally and internationally, also schedule payments",
    },
    {
      id: 2,
      name: "Careers",
      text: "Make payment locally and internationally, also schedule payments",
    },
    {
      id: 3,
      name: "Blog",
      text: "Make payment locally and internationally, also schedule payments",
    },
  ];

  return (
    <Modal2 onClose={props.onHideModals}>
      <div className="py-[0.3rem] px-[0.3rem]">
        {Products.map((data) => (
          <Link to={`/main/${data.id}`} key={data.id}>
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
    </Modal2>
  );
};

export default Company;
