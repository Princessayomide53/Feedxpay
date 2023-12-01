import React, { useState } from "react";
import Nav from "../../NavBar/Nav";
import Card from "../../../UI/Card";
import { IoIosArrowUp } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";
import Support from "../../NavBar/Support";
import Company from "../../NavBar/Company";
import Products from "../../NavBar/Products";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const Questions = [
    {
      id: 1,
      question: "What is Feedxpay?",
      text: "Our solution makes it easy for businesses, companies and other financial institutions to make global payment and receive with multiple currencies.",
    },
    {
      id: 2,
      question: "Is my money safe with Feedxpay?",
      text: "Our solution makes it easy for businesses, companies and other financial institutions to make global payment and receive with multiple currencies.",
    },
    {
      id: 3,
      question: "How can I open an account with Feedxpay?",
      text: "Our solution makes it easy for businesses, companies and other financial institutions to make global payment and receive with multiple currencies.",
    },
    {
      id: 4,
      question:
        "Are there any fees associated with opening or maintaining an account?",
      text: "Our solution makes it easy for businesses, companies and other financial institutions to make global payment and receive with multiple currencies.",
    },
    {
      id: 5,
      question:
        "What security measures are in place to protect my account and personal information?",
      text: "Our solution makes it easy for businesses, companies and other financial institutions to make global payment and receive with multiple currencies.",
    },
    {
      id: 6,
      question: "Can I link my other bank accounts to my FeedxPay account?",
      text: "Our solution makes it easy for businesses, companies and other financial institutions to make global payment and receive with multiple currencies.",
    },
    {
      id: 7,
      question:
        "How long does it take to transfer money to and from my FeedxPay account?",
      text: "Our solution makes it easy for businesses, companies and other financial institutions to make global payment and receive with multiple currencies.",
    },
    {
      id: 8,
      question: "Can I deposit cash or checks into my FeedxPay account?",
      text: "Our solution makes it easy for businesses, companies and other financial institutions to make global payment and receive with multiple currencies.",
    },
    {
      id: 9,
      question: "Is there a minimum balance requirement for my account?",
      text: "Our solution makes it easy for businesses, companies and other financial institutions to make global payment and receive with multiple currencies.",
    },
    {
      id: 10,
      question:
        "Can I set up automatic bill payments with my FeedxPay account?",
      text: "Our solution makes it easy for businesses, companies and other financial institutions to make global payment and receive with multiple currencies.",
    },
    {
      id: 11,
      question: "Can I open joint accounts with other individuals?",
      text: "Our solution makes it easy for businesses, companies and other financial institutions to make global payment and receive with multiple currencies.",
    },
    {
      id: 12,
      question: "What is the process for closing my FeedxPay account?",
      text: "Our solution makes it easy for businesses, companies and other financial institutions to make global payment and receive with multiple currencies.",
    },
    {
      id: 13,
      question:
        "How long does it take to receive a response from customer support?",
      text: "Our solution makes it easy for businesses, companies and other financial institutions to make global payment and receive with multiple currencies.",
    },
    {
      id: 14,
      question:
        "Are there any rewards or cashback programs for using my FeedxPay account?",
      text: "Our solution makes it easy for businesses, companies and other financial institutions to make global payment and receive with multiple currencies.",
    },
    {
      id: 15,
      question:
        "Are there any limits on the number of transactions I can make per month?",
      text: "Our solution makes it easy for businesses, companies and other financial institutions to make global payment and receive with multiple currencies.",
    },
    {
      id: 16,
      question: "Does FeedxPay offer investment or wealth management services?",
      text: "Our solution makes it easy for businesses, companies and other financial institutions to make global payment and receive with multiple currencies.",
    },
    {
      id: 17,
      question:
        "Are there any limitations on the types of businesses I can pay using my FeedxPay account?",
      text: "Our solution makes it easy for businesses, companies and other financial institutions to make global payment and receive with multiple currencies.",
    },
    {
      id: 18,
      question:
        "Does FeedxPay support mobile payments like Apple Pay or Google Pay?",
      text: "Our solution makes it easy for businesses, companies and other financial institutions to make global payment and receive with multiple currencies.",
    },
    {
      id: 19,
      question:
        "What happens if I forget my account password or get locked out of my account?",
      text: "Our solution makes it easy for businesses, companies and other financial institutions to make global payment and receive with multiple currencies.",
    },
    {
      id: 20,
      question: "Are there any special offers or promotions for new customers?",
      text: "Our solution makes it easy for businesses, companies and other financial institutions to make global payment and receive with multiple currencies.",
    },
  ];
  const [open, setOpen] = useState(Questions.map(() => false));
  const [modal, setModals] = useState(false);
  const [openModals, setOpenModals] = useState(false);
  const [supportModal, setSupportModal] = useState(false);
  const handleOpen = (index) => {
    setOpen((prevOpen) => {
      const newOpen = [...prevOpen];
      newOpen[index] = !newOpen[index];
      return newOpen;
    });
  };

  const openModal = () => {
    setModals(true);
  };

  const handleModal = () => {
    setOpenModals(true);
  };

  const handleSupportModal = () => {
    setSupportModal(true);
  };

  return (
    <>
      <Nav
        onClick={openModal}
        onOpen={handleModal}
        onSet={handleSupportModal}
      />
      {modal && <Products onHideModal={() => setModals(false)} />}
      {openModals && <Company onHideModals={() => setOpenModals(false)} />}
      {supportModal && (
        <Support onHideSupportModal={() => setSupportModal(false)} />
      )}
      <section className="background h-[227.81rem]">
        <header className="max-w-[83rem] mx-auto flex justify-between mt-[8.5rem]">
          <Card className="mt-[19.25rem] rounded-lg gap-[6.25rem] w-[17.25rem] flex h-[8rem] shades bg-white px-[2rem] py-[3rem]">
            <p className="text-[#017A59]  text-[1.375rem] font-semibold leading-[2rem]">
              General
            </p>
            <MdArrowForwardIos className="mt-2" />
          </Card>
          <div className="flex flex-col pb-[8.31rem]">
            <h2 className="pt-[6.25rem] text-[#017A59] text-[2.875rem] font-bold leading-[3.875rem] tracking-[-0.0575rem] pb-[0.5rem]">
              Frequently asked questions
            </h2>
            <p className="pb-[4.37rem] text-[#8A9099] text-[1.375rem] font-medium leading-[2.125rem]">
              We provided answer to some questions you would like to ask us.
              <br />
              If your question is not answered here, kindly contact sales.
            </p>
            <span className="space-y-[3.25rem]">
              {Questions.map((quest, index) => (
                <div key={quest.id}>
                  <Card className="w-[45.875rem] cursor-pointer h-[6.5rem] bg-white rounded-xl shadow-lg px-[1.52rem] py-[1rem] flex justify-start items-center">
                    {" "}
                    <h4 className="text-[#017A59] w-[37rem] text-[1.175rem] font-semibold leading-[2rem]">
                      {quest.question}
                    </h4>
                    {open[index] ? (
                      <IoIosArrowUp
                        className="text-2xl"
                        onClick={() => {
                          handleOpen(index);
                        }}
                      />
                    ) : (
                      <IoIosArrowDown
                        className="text-2xl"
                        onClick={() => {
                          handleOpen(index);
                        }}
                      />
                    )}
                  </Card>
                  {open[index] && (
                    <Card className="w-[45.875rem] mt-2 transition-all duration-300 ease-in-out h-[6.5rem] bg-white rounded-xl shadow-lg px-[1.52rem] py-[1rem] flex justify-start items-center">
                      <p>{quest.text}</p>
                    </Card>
                  )}
                </div>
              ))}
            </span>
            <p className="pt-[2.5rem]  text-[#1D1D1F] text-[1.375rem] font-medium leading-[1.875rem] tracking-[-0.0275rem]">
              You can send us an email on hello@feedxpay.com or call <br />
              +234 9035279530 between 8:00 am and 5:00 pm on weekdays.{" "}
            </p>
          </div>
        </header>
      </section>
    </>
  );
};

export default Header;
