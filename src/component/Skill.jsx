import React from "react";

const Skill = () => {
  const technicalSkillWriteup = `I have a diverse set of technical skills that enable me to build dynamic, user-friendly, and optimized websites. From coding sleek interfaces to implementing SEO strategies, I am dedicated to creating seamless digital experiences. Here’s a snapshot of my core technical expertise:

`;
  return (
    <>
      {/* SKILL SECTION */}
      <section className="dark:text-white text-black pt-20 grid grid-cols-2 gap-20 gap-y-12  max-md:grid-cols-1 max-sm:grid-cols-1 items-start">
        {/* left side */}
        <section>
          <header className="text-left max-md:text-center max-sm:text-center">
            <p className="text-sm text-gray-500">SKILLS</p>
            <p className="text-2xl font-bold pb-4">
              Technical<span className="text-[rgb(255,130,255)]"> skills.</span>
            </p>
          </header>
            <p className="text-sm max-sm:text-center">{technicalSkillWriteup}</p>
          </section>

          {/* right side */}

          <section className="text-sm font-semibold grid gap-y-2 justify-center">
            {/* first row */}
            <section className="flex gap-8 max-md:gap-4 max-sm:gap-0 items-center">
              {/* html5 */}
              <div className="bg-[rgb(255,130,255)] dark:bg-[rgb(50,51,50)] h-20 w-20 max-sm:h-16 max-sm:w-16 max-md:scale-90 max-sm:scale-75 rounded-full grid items-center border-2 border-[rgb(255,130,255)]">
                <span className="text-center">HTML5</span>
            </div>

            {/* javascript */}
            <div className="bg-[rgb(255,130,255)] dark:bg-[rgb(50,51,50)] h-16 max-sm:h-10 w-max max-md:scale-90 max-sm:scale-75  rounded-md grid items-center border-2 border-[rgb(255,130,255)]">
              <span className="px-8">JAVASCRIPT</span>
            </div>

            {/* css */}
            <div className="bg-[rgb(255,130,255)] dark:bg-[rgb(50,51,50)] h-20 w-20 max-sm:h-16 max-sm:w-16 max-md:scale-90 max-sm:scale-75  rounded-full grid items-center border-2 border-[rgb(255,130,255)]">
              <span className="text-center">CSS3</span>
            </div>
          </section>

          {/* second row */}
          <section className="flex gap-8 max-md:gap-4 max-sm:gap-0">
            {/* react container */}
            <div className="bg-[rgb(255,130,255)] dark:bg-[rgb(50,51,50)] h-16 max-sm:h-10 w-max ax-md:scale-90 max-sm:scale-75  rounded-full grid items-center border-2 border-[rgb(255,130,255)]">
              <span className="px-12">React</span>
            </div>

            {/* javascript */}
            <div className="bg-[rgb(255,130,255)] dark:bg-[rgb(50,51,50)] h-16 max-sm:h-10 w-max ax-md:scale-90 max-sm:scale-75  rounded-md grid items-center border-2 border-[rgb(255,130,255)]">
              <span className="px-8">TailwindCSS</span>
            </div>
          </section>

          {/* third row */}
          <section className="flex gap-8 max-md:gap-4 max-sm:gap-0">
            {/* ui design container*/}
            <div className="bg-[rgb(255,130,255)] dark:bg-[rgb(50,51,50)] h-16 max-sm:h-10 w-max ax-md:scale-90 max-sm:scale-75  rounded-md grid items-center border-2 border-[rgb(255,130,255)]">
              <span className="px-8">SEO </span>
            </div>

            {/* typescript container*/}
            <div className="bg-[rgb(255,130,255)] dark:bg-[rgb(50,51,50)] h-16 max-sm:h-10 w-max ax-md:scale-90 max-sm:scale-75  rounded-full grid items-center border-2 border-[rgb(255,130,255)]">
              <span className="px-12">EMAIL AUTOMATION</span>
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default Skill;
