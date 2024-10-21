import React from "react";
import Service from "./Service";
import Portfolio from "./Portfolio";

const Container = () => {
  return (
    <>
      <section className="text-white bg-[rgb(18,19,18)] py-8 px-28 max-md:px-16 max-sm:px-12">
        <Service />
        <Portfolio />
      </section>
    </>
  );
};

export default Container;
