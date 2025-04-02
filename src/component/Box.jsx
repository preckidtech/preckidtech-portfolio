import React from "react";
import About from "./About";
import Skill from "./Skill";

const Box = () => {
  return (
    <>
      <section className="dark:bg-[rgb(29,28,28)] bg-white py-8 text-black dark:text-white ">
        <About />
        <Skill />
      </section>
    </>
  );
};

export default Box;
