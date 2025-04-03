import React from "react";
import { RiRedPacketLine } from "react-icons/ri";

const Button = ({ text, icon, style }) => {
  return (
    <>
      <button className={style}>
        {text} <span>{icon}</span>
      </button>
    </>
  );
};

export default Button;
