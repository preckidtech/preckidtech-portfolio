import React from "react";
import { RiRedPacketLine } from "react-icons/ri";

const Button = ({ text, icon, }) => {
  return (
    <>
      <button className="px-4 flex gap-2 items-center max-sm:m-auto max-md:last:m-auto  py-2 text-center  bg-[rgb(255,130,255)] text-black rounded-md">
        {text} <span>{icon}</span>
      </button>
    </>
  );
};

export default Button;
