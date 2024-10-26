import React from "react";
import About from "./About";
import Skill from "./Skill";

const Box = () => {
  return (
    <>
      <section className="dark:bg-[rgb(29,28,28)] bg-white py-8 px-28 text-black dark:text-white max-md:px-16 max-sm:px-12">
        <About />
        <Skill />
      </section>
    </>
  );
};

export default Box;
