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
      text: "FeedxPay is an innovative Neo bank that offers digital banking services, providing seamless and secure cross-border payments and a range of other financial solutions.",
    },
    {
      id: 2,
      question: "Is my money safe with Feedxpay?",
      text: "Absolutely! FeedxPay prioritizes the security of your funds. We use advanced encryption and security measures to protect your money and personal information.",
    },
    {
      id: 3,
      question: "How can I open an account with Feedxpay?",
      text: "Opening an account with FeedxPay is easy and convenient. Simply visit our website, click on  Sign Up, and follow the simple registration process.",
    },
    {
      id: 4,
      question:
        "Are there any fees associated with opening or maintaining an account?",
      text: "We believe in transparency. FeedxPay has no hidden fees. Our account setup and maintenance are fee-free, ensuring a straightforward banking experience.",
    },
    {
      id: 5,
      question:
        "What security measures are in place to protect my account and personal information?",
      text: "FeedxPay employs industry-leading security protocols, including two-factor authentication, to safeguard your account and personal data.",
    },
    {
      id: 6,
      question: "Can I link my other bank accounts to my FeedxPay account?",
      text: "Yes, you can link your other bank accounts to your FeedxPay account for easy fund transfers and a comprehensive financial overview.",
    },
    {
      id: 7,
      question:
        "How long does it take to transfer money to and from my FeedxPay account?",
      text: "Transfers to and from your FeedxPay account are fast and efficient. Most transactions are completed within one business day.",
    },
    {
      id: 8,
      question: "Can I deposit cash or checks into my FeedxPay account?",
      text: "As a digital neo bank, FeedxPay currently supports electronic transfers. We do not accept cash or check deposits at this time.",
    },
    {
      id: 9,
      question: "Is there a minimum balance requirement for my account?",
      text: "No, FeedxPay does not have any minimum balance requirements. You can maintain your account with any balance amount that suits you.",
    },
    {
      id: 10,
      question:
        "Can I set up automatic bill payments with my FeedxPay account?",
      text: "Yes, FeedxPay enables you to set up automatic bill payments, ensuring your bills are paid on time with minimal effort.",
    },
    {
      id: 11,
      question: "Can I open joint accounts with other individuals?",
      text: "Yes, FeedxPay enables you to set up automatic bill payments, ensuring your bills are paid on time with minimal effort.",
    },
    {
      id: 12,
      question: "What is the process for closing my FeedxPay account?",
      text: "Should you wish to close your account, simply contact our customer support, and they will guide you through the process.",
    },
    {
      id: 13,
      question:
        "How long does it take to receive a response from customer support?",
      text: "Our customer support team strives to provide prompt assistance. You can expect a response within one business day or sooner.",
    },
    {
      id: 14,
      question:
        "Are there any rewards or cashback programs for using my FeedxPay account?",
      text: "FeedxPay offers various rewards and cashback programs, allowing you to earn perks while using your account for transactions.",
    },
    {
      id: 15,
      question:
        "Are there any limits on the number of transactions I can make per month?",
      text: "FeedxPay provides generous transaction limits, ensuring you can conduct your financial activities without restrictions.",
    },
    {
      id: 16,
      question: "Does FeedxPay offer investment or wealth management services?",
      text: "Currently, FeedxPay focuses on digital banking and cross-border payments, but we are continuously expanding our services.",
    },
    {
      id: 17,
      question:
        "Are there any limitations on the types of businesses I can pay using my FeedxPay account?",
      text: "FeedxPay allows payments to a wide range of businesses, making it easy to settle transactions with various merchants.",
    },
    {
      id: 18,
      question:
        "Does FeedxPay support mobile payments like Apple Pay or Google Pay?",
      text: "Yes, FeedxPay is compatible with mobile payment platforms like Apple Pay and Google Pay for added convenience.",
    },
    {
      id: 19,
      question:
        "What happens if I forget my account password or get locked out of my account?",
      text: "If you forget your password or get locked out of your account, you can easily reset your password through the account recovery process.",
    },
    {
      id: 20,
      question: "Are there any special offers or promotions for new customers?",
      text: "Yes, FeedxPay often offers special promotions and rewards for new customers. Be sure to check our website or app for the latest offers.",
    },
  ];
  const [open, setOpen] = useState(Questions.map(() => false));
  const [modal, setModal] = useState(false);
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
    setModal(true);
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
      {modal && <Products onHideModal={() => setModal(false)} />}
      {openModals && <Company onHideModals={() => setOpenModals(false)} />}
      {supportModal && (
        <Support onHideSupportModal={() => setSupportModal(false)} />
      )}
      <section className="background h-[227.81rem]">
        <header className="max-w-[83rem] mx-auto flex justify-evenly mt-[8.5rem]">
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
                    <h4
                      onClick={() => {
                        handleOpen(index);
                      }}
                      className="text-[#017A59] w-[37rem] text-[1.175rem] font-semibold leading-[2rem]"
                    >
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
                    <Card className="w-[45.875rem] h-[7.625rem] mt-2 transition-all duration-300 ease-in-out  bg-white rounded-xl shadow-lg px-[1.52rem] py-[1rem] flex justify-start items-center">
                      <p className="text-[#1D1D1F] text-[1.275rem] font-medium leading-[1.875rem] tracking-[ -0.0275rem]">
                        {quest.text}
                      </p>
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
