import React from "react";
import Service from "./Service";
import Portfolio from "./Portfolio";

const Container = () => {
  return (
    <>
      <section className="dark:text-white text-white dark:bg-[rgb(18,19,18)] bg-white  py-8  ">
        <Service />
        <Portfolio />
      </section>
    </>
  );
};

export default Container;
