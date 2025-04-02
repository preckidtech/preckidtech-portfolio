import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
// import ThemeToggle from './ThemeToggle'

const Header = () => {
  return (
    <header id="header" className="bg-black text-white">
      <Navbar />
      <Hero />
    </header>
  );
};

export default Header;
