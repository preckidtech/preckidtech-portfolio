import React, { useState } from "react";
import Button from "./Button";
import logo from "../assets/logo/preckid logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { SiReaddotcv } from "react-icons/si";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="flex justify-between text-sm px-20 max-md:px-16 max-sm:px-10 py-8 items-center">
        <a className="font-bold text-lg" href="#home">
          <img
            className="h-8 max-md:h-6 max-sm:h-6"
            src={logo}
            alt="Preckid Logo"
          />
        </a>
        <nav>
          <ul className="flex gap-12 items-center max-md:hidden max-sm:hidden font-semibold">
            <li>
              <a href="#service-card">Home</a>
            </li>
            <li>
              <a href="#portfolio-section">Featured Projects</a>
            </li>
            <li>
              <a href="#about-section">About Me</a>
            </li>
            <li>
              <a href="#contact-section">Contact Me</a>
            </li>

            <Button
              text="View resume"
              icon={<SiReaddotcv />}
              style="px-4 flex gap-2 items-center max-sm:m-auto max-md:last:m-auto py-2 text-center bg-[rgb(255,130,255)] text-black rounded-md"
            />
          </ul>
          {/* Mobile menu icon */}
          <div
            className="max-md:flex max-sm:flex hidden"
            onClick={toggleMenu}
            aria-label="Open menu"
          >
            <AiOutlineMenu className="text-2xl cursor-pointer" />
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[rgb(255,130,255)] z-40 flex justify-center items-center transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="bg-[rgb(18,19,18)] w-full h-full p-8 max-w-md shadow-lg transform">
          <div className="flex justify-between items-center pb-4 border-b-2 border-gray-300">
            <img className="h-8" src={logo} alt="Preckid Logo" />
            <AiOutlineClose
              className="text-2xl cursor-pointer text-[rgb(255,130,255)]"
              onClick={toggleMenu}
              aria-label="Close menu"
            />
          </div>
          <ul className="flex flex-col mt-8 space-y-8 font-semibold text-center text-[rgb(255,130,255)]">
            <li>
              <a href="#service-card" onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#project-section" onClick={toggleMenu}>
                Featured Projects
              </a>
            </li>
            <li>
              <a href="#about-section" onClick={toggleMenu}>
                About Me
              </a>
            </li>
            <li>
              <a href="#contact-section" onClick={toggleMenu}>
                Contact Me
              </a>
            </li>
            <li>
              <Button
                text="View resume"
                icon={<SiReaddotcv />}
                style="px-4 flex gap-2 items-center max-sm:m-auto max-md:last:m-auto py-2 text-center bg-[rgb(255,130,255)] text-black rounded-md"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
