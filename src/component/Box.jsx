import React from "react";
import About from "./About";
import Skill from "./Skill";

const Box = () => {
  return (
    <>
      <section className="bg-[rgb(29,28,28)] py-8 px-28 text-white max-md:px-16 max-sm:px-12">
        <About />
        <Skill />
      </section>
    </>
  );
};

export default Box;
