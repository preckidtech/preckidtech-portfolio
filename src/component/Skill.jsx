import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Skill = () => {
  const technicalSkillWriteup = `I have a diverse set of technical skills that enable me to build dynamic, user-friendly, and optimized websites. From coding sleek interfaces to implementing SEO strategies, I am dedicated to creating seamless digital experiences. Here’s a snapshot of my core technical expertise:`;

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS animations
  }, []);

  return (
    <section className="border-pink-500 border-b-8">
      {/* SKILL SECTION */}
      <section className="dark:text-white text-black pt-20 grid grid-cols-2 gap-20 gap-y-12 max-md:grid-cols-1 max-sm:grid-cols-1 items-start mx-28 pb-8 max-md:mx-16 max-sm:x-12">
        {/* Left side */}
        <section data-aos="fade-up">
          <header className="text-left max-md:text-center max-sm:text-center">
            <p className="text-sm text-gray-500">SKILLS</p>
            <p className="text-2xl font-bold pb-4">
              Technical
              <span className="text-[rgb(255,130,255)]"> skills.</span>
            </p>
          </header>
          <p className="text-sm max-sm:text-center">{technicalSkillWriteup}</p>
        </section>

        {/* Right side */}
        <section className="text-sm font-semibold grid gap-y-2 justify-center">
          {/* First row */}
          <section
            className="flex gap-8 max-md:gap-4 max-sm:gap-0 items-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* HTML5 */}
            <div
              className="bg-[rgb(255,130,255)] dark:bg-[rgb(50,51,50)] h-20 w-20 max-sm:h-16 max-sm:w-16 max-md:scale-90 max-sm:scale-75 rounded-full grid items-center border-2 border-[rgb(255,130,255)]"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <span className="text-center">HTML5</span>
            </div>

            {/* JavaScript */}
            <div
              className="bg-[rgb(255,130,255)] dark:bg-[rgb(50,51,50)] h-16 max-sm:h-10 w-max max-md:scale-90 max-sm:scale-75 rounded-md grid items-center border-2 border-[rgb(255,130,255)]"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <span className="px-8">JAVASCRIPT</span>
            </div>

            {/* CSS3 */}
            <div
              className="bg-[rgb(255,130,255)] dark:bg-[rgb(50,51,50)] h-20 w-20 max-sm:h-16 max-sm:w-16 max-md:scale-90 max-sm:scale-75 rounded-full grid items-center border-2 border-[rgb(255,130,255)]"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <span className="text-center">CSS3</span>
            </div>
          </section>

          {/* Second row */}
          <section
            className="flex gap-8 max-md:gap-4 max-sm:gap-0"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {/* React */}
            <div
              className="bg-[rgb(255,130,255)] dark:bg-[rgb(50,51,50)] h-16 max-sm:h-10 w-max max-md:scale-90 max-sm:scale-75 rounded-full grid items-center border-2 border-[rgb(255,130,255)]"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <span className="px-12">React</span>
            </div>

            {/* TailwindCSS */}
            <div
              className="bg-[rgb(255,130,255)] dark:bg-[rgb(50,51,50)] h-16 max-sm:h-10 w-max max-md:scale-90 max-sm:scale-75 rounded-md grid items-center border-2 border-[rgb(255,130,255)]"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <span className="px-8">TailwindCSS</span>
            </div>
          </section>

          {/* Third row */}
          <section
            className="flex gap-8 max-md:gap-4 max-sm:gap-0"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            {/* SEO */}
            <div
              className="bg-[rgb(255,130,255)] dark:bg-[rgb(50,51,50)] h-16 max-sm:h-10 w-max max-md:scale-90 max-sm:scale-75 rounded-md grid items-center border-2 border-[rgb(255,130,255)]"
              data-aos="zoom-in"
              data-aos-delay="800"
            >
              <span className="px-8">SEO</span>
            </div>

            {/* Email Automation */}
            <div
              className="bg-[rgb(255,130,255)] dark:bg-[rgb(50,51,50)] h-16 max-sm:h-10 w-max max-md:scale-90 max-sm:scale-75 rounded-full grid items-center border-2 border-[rgb(255,130,255)]"
              data-aos="zoom-in"
              data-aos-delay="900"
            >
              <span className="px-12">EMAIL AUTOMATION</span>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Skill;
