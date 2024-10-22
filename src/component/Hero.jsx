import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaUpwork } from "react-icons/fa6";
const Hero = () => {
  const myName = "Oyebode Precious";
  const myRole = "A Frontend Developer & SEO Specialist:";
  const propostionValue =
    "Building Beautiful, High-Ranking, and Acccessible Web Experience";
  const socialProfile = [
    {
      name: "Github",
      icon: <FaGithub />,
      link: "https://github.com/OYEBODEPRECIOUS",
    },
    {
      name: "Email",
      icon: <MdOutlineMail />,
      link: "",
    },
    {
      name: "Linkedin",
      icon: <TiSocialLinkedin />,
      link: "https://www.linkedin.com/in/oyebode-precious",
    },
    {
      name: "Upwork",
      icon: <FaUpwork />,
      link: "https://www.upwork.com/freelancers/preciouso80",
    },
  ];
  return (
    <>
      <section className="text-center w-2/5 max-md:w-3/5 max-sm:w-4/5 m-auto pt-16 max-sm:pt-2 pb-8">
        <h1 className="text-3xl max-md:text-2xl max-sm:text-lg pb-4">
          Hi, I am{" "}
          <span className="text-[rgb(255,130,255)] font-extrabold">
            {" "}
            {myName}{" "}
          </span>{" "}
        </h1>
        <p>
          <span className="text-[rgb(255,130,255)] font-bold text-lg max-md:text-md max-sm:text-lg">
            {myRole}
          </span>{" "}
          {propostionValue}
        </p>
      </section>

      {/* social media icon */}
      <section className="flex gap-6 justify-center pb-20 max-sm:pb-12">
        {/* Social Icon */}
        {socialProfile.map(function (data) {
          return (
            <div className="bg-[rgb(255,130,255)] p-1 rounded-full">
              <a href={data.link} target="blank">
                <span className="text-4xl text-black">{data.icon}</span>
              </a>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Hero;
