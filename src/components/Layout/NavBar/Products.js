import React from "react";
import Modal from "../../UI/Modal";
import { Link } from "react-router-dom";

const Products = (props) => {
  const Products = [
    {
      id: 1,
      name: "Make Payments",
      text: "Make payment locally and internationally, also schedule payments",
    },
    {
      id: 2,
      name: "Virtual Cards",
      text: "Make payment locally and internationally, also schedule payments",
    },
    {
      id: 3,
      name: "Savings",
      text: "Make payment locally and internationally, also schedule payments",
    },
    {
      id: 4,
      name: "Investments",
      text: "Make payment locally and internationally, also schedule payments",
    },
  ];

  return (
    <Modal onClose={props.onHideModal}>
      <div className="py-[0.3rem] px-[0.3rem]">
        {Products.map((data) => (
          <Link to={`/home${data.id}`}>
            <div key={data.id} className="bg-text py-4 px-2">
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
    </Modal>
  );
};

export default Products;
