import React from "react";

const Input = ({ label, type, className }) => {
  return (
    <div className="flex flex-col">
      <label className="pb-[0.5rem] text-[#1D1D1F] text-[0.875rem] font-medium leading-normal tracking-[-0.0175rem]">
        {label}
      </label>
      <input
        type={type}
        className={className}
        // className="w-full h-[2.75rem] pl-5 border-2 border-[#E8E9EB] rounded-xl focus:outline-blue-400"
      />
    </div>
  );
};

export default Input;
