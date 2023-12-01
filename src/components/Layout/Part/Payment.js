import React, { useState, useEffect, useRef, useCallback } from "react";
import Money from "../../../Assets/Money.png";
import Virtual from "../../../Assets/Virtual.png";
import Invest from "../../../Assets/Invest.png";
import Saves from "../../../Assets/Saves.png";
import "../../../App.css";

const Payment = () => {
  const [activeSection, setActiveSection] = useState("PAYMENTS");
  const [linePosition, setLinePosition] = useState(0);
  const [initialRender, setInitialRender] = useState(true);
  const activeSectionRef = useRef(null);

  const handleSection = useCallback((section) => {
    setActiveSection(section);
    const sectionElement = document.getElementById(section);
    const line = document.querySelector(".line");

    if (sectionElement && line) {
      const sectionTop = sectionElement.offsetTop - 7.78 * 16;
      const lineStartPosition = line.offsetTop;
      const lineEndPosition = sectionTop + sectionElement.offsetHeight / 2;

      animateLine(line, lineStartPosition, lineEndPosition);
    }
  }, []);

  const animateLine = (line, startPosition, endPosition) => {
    const duration = 300;
    let startTime;

    const moveLine = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      const newPosition =
        progress < duration
          ? startPosition +
            ((endPosition - startPosition) * progress) / duration
          : endPosition;

      line.style.top = `${newPosition}px`;

      if (progress < duration) {
        requestAnimationFrame(moveLine);
      }
    };

    requestAnimationFrame(moveLine);
  };

  useEffect(() => {
    handleSection("PAYMENTS");
    setInitialRender(false);
  }, [handleSection]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");
      let closestSection = sections[0];

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 10.85 * 16;
        if (window.scrollY >= sectionTop) {
          closestSection = section;
        }
      });

      const newActiveSection = closestSection.getAttribute("data-section");
      if (newActiveSection !== activeSectionRef.current) {
        setActiveSection(newActiveSection);
        activeSectionRef.current = newActiveSection;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  return (
    <section className="flex justify-around relative">
      <div className="line-container">
        <div
          className={`${"border-l-2 border-[#017a59] h-[10.875rem] transition-all duration-300"} line`}
          style={{ top: `calc(${linePosition}px - 4.38rem)` }}
        ></div>
      </div>
      <div className="pt-[5.69rem] cursor-pointer">
        <h1
          onClick={() => handleSection("PAYMENTS")}
          className={`pb-[1rem] text-[${
            activeSection === "PAYMENTS" || initialRender
              ? "#017A59"
              : "text-#1D1D1F"
          }] text-[1.375rem] font-semibold leading-[2rem] section`}
          data-section="PAYMENTS"
          id="PAYMENTS"
        >
          PAYMENTS
        </h1>
        <p className="pb-[5.38rem] text-[#1D1D1F] text-[1.25rem] font-medium leading-[1.75rem] tracking-[-0.025rem]">
          Make (Local and international transactions)
          <br />
          and scheduled payments
        </p>

        <h1
          onClick={() => handleSection("VIRTUAL CARDS")}
          className={`pb-[1rem] text-[${
            activeSection === "VIRTUAL CARDS" ? "#017A59" : "#1D1D1F"
          }] text-[1.375rem] font-semibold leading-[2rem]  `}
          data-section="VIRTUAL CARDS"
          id="VIRTUAL CARDS"
        >
          VIRTUAL CARDS
        </h1>
        <p className="pb-[5.38rem] text-[#1D1D1F] text-[1.25rem] font-medium leading-[1.75rem] tracking-[-0.025rem]">
          One tool, one easy way to transact business
          <br />
          seemlessly.
        </p>

        <h1
          onClick={() => handleSection("SAVINGS")}
          className={`pb-[1rem] text-[${
            activeSection === "SAVINGS" ? "#017A59" : "#1D1D1F"
          }] text-[1.375rem] font-semibold leading-[2rem] `}
          data-section="SAVINGS"
          id="SAVINGS"
        >
          SAVINGS
        </h1>
        <p className="pb-[5.38rem] text-[#1D1D1F] text-[1.25rem] font-medium leading-[1.75rem] tracking-[-0.025rem]">
          Attaining financial success is possible, but <br />
          only through strategic savings.
        </p>

        <h1
          onClick={() => handleSection("INVESTMENTS")}
          className={`pb-[1rem] text-[${
            activeSection === "INVESTMENTS" || initialRender
              ? "#017A59"
              : "#1D1D1F"
          }] text-[1.375rem] font-semibold leading-[2rem]  `}
          data-section="INVESTMENTS"
          id="INVESTMENTS"
        >
          INVESTMENTS
        </h1>
        <p className="pb-[6.38rem] text-[#1D1D1F] text-[1.25rem] font-medium leading-[1.75rem] tracking-[-0.025rem]">
          Generate positive returns over a period of time by <br />
          investing with us today.
        </p>
      </div>

      {activeSection === "PAYMENTS" ? (
        <div>
          <img
            src={Money}
            alt=""
            className="object-cover w-[44.1875rem] h-[44.1875rem]"
          />
        </div>
      ) : "" || activeSection === "VIRTUAL CARDS" ? (
        <div>
          <img
            src={Virtual}
            alt=""
            className="object-cover w-[44.1875rem] h-[44.1875rem]"
          />
        </div>
      ) : "" || activeSection === "SAVINGS" ? (
        <div>
          <img
            src={Saves}
            alt=""
            className="object-cover w-[44.1875rem] h-[44.1875rem]"
          />
        </div>
      ) : "" || activeSection === "INVESTMENTS" ? (
        <div>
          <img
            src={Invest}
            alt=""
            className="object-cover w-[44.1875rem] h-[44.1875rem]"
          />
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default Payment;
