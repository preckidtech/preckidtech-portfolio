import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
// import myPics from "../assets/profile image/my pics.g";
import profilePics from "../assets/profile image/profile-picture.png";
const About = () => {
  const aboutMe = {
    firstParagraph:
      "As a passionate frontend developer with expertise in SEO, I bring together creative design and technical optimization in every project. My work blends aesthetic appeal with the functionality needed for a seamless user experience.",

    secondParagraph:
      "My goal is to build websites that are not only visually captivating but also user-friendly, ensuring they align with each brand’s unique identity. I focus on creating interfaces that engage users and keep them coming back.",

    thirdParagraph:
      "With a deep understanding of SEO best practices, I ensure that every website I build achieves high visibility in search engines, driving traffic and results.",
  };

  return (
    <>
      <section id="about-section" className="py-10">
        <header className="text-center pb-8">
          <p className="text-sm text-gray-500">MY BIO</p>
          <p className="text-2xl font-bold pb-4">
            About <span className="text-[rgb(255,130,255)]">me.</span>
          </p>
        </header>

        <section className="grid grid-cols-2 gap-20 max-md:grid-cols-1 max-sm:grid-cols-1 gap-y-10 justify-center align-middle items-center">
          <section>
            {/* <div
              id="profile-spin"
              className="p-6 border-[1px] border-[rgb(255,130,255)] rounded-full w-80 h-80 max-sm:w-52 max-sm:p-2 max-sm:h-52 m-auto"
            > */}
            {/* <FaHtml5 className="absolute text-4xl text-green-500 animate-bounce " />
              <IoLogoJavascript
                id="spin"
                className="relative float-right text-4xl text-green-500 animate-spin"
              /> */}
            <div className="p-6 border-2 border-[rgb(255,130,255)] h-[300px] w-[300px] max-sm:h-[250px] max-sm:w-[250px] rounded-full overflow-hidden  m-auto">
              <img
                className="border-[1px] border-[rgb(255,130,255)]hover:ease-in-out w-full h-full rounded-full object-cover"
                src={profilePics}
                alt="profile-pics"
              />
              {/* <FaReact className="text-4xl absolute text-green-500 animate-pulse" />
                <IoLogoCss3 className="text-4xl relative float-right text-green-500 animate-bounce" /> */}
            </div>
            {/* </div> */}
          </section>

          {/* About Me Content */}
          <section className="text-left max-md:text-center max-sm:text-center">
            <p className="text-md pb-4">{aboutMe.firstParagraph}</p>
            <p className="text-md pb-4">{aboutMe.secondParagraph}</p>

            <p className="text-md pb-4">{aboutMe.thirdParagraph}</p>
          </section>
        </section>
      </section>
    </>
  );
};

export default About;
