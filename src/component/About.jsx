import React, { useEffect, useState } from "react";
import profile from "../assets/profile image/profile.jpg"; // Ensure this path is correct

const About = () => {
  const [isInView, setIsInView] = useState(false);

  const aboutMe = {
    firstParagraph:
      "As a passionate frontend developer with expertise in SEO, I bring together creative design and technical optimization in every project. My work blends aesthetic appeal with the functionality needed for a seamless user experience.",

    secondParagraph:
      "My goal is to build websites that are not only visually captivating but also user-friendly, ensuring they align with each brand’s unique identity. I focus on creating interfaces that engage users and keep them coming back.",

    thirdParagraph:
      "With a deep understanding of SEO best practices, I ensure that every website I build achieves high visibility in search engines, driving traffic and results.",
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    const aboutSection = document.getElementById("about-section");
    if (aboutSection) observer.observe(aboutSection);

    return () => {
      if (aboutSection) observer.unobserve(aboutSection);
    };
  }, []);

  return (
    <section className="class border-orange-500 border-b-8 b">
      <section
        id="about-section"
        className={`py-10 mx-28 max-md:mx-16 max-sm:x-12 transition-all duration-1000 ${
          isInView ? "slideDown" : "opacity-0"
        }`}
      >
        <header className="text-center pb-8">
          <p className="text-sm text-gray-500">MY BIO</p>
          <p className="text-2xl font-bold pb-4">
            About <span className="text-[rgb(255,130,255)]">me.</span>
          </p>
        </header>

        <section className="flex justify-center gap-20 max-md:grid max-sm:grid gap-y-10">
          <section className="relative">
            {/* Profile Image */}
            <div
              className={`p-6 border-2 border-[rgb(255,130,255)] h-[300px] w-[300px] max-sm:h-[250px] max-sm:w-[250px] rounded-full overflow-hidden m-auto ${
                isInView ? "zoomIn" : "opacity-0"
              }`}
            >
              <img
                className="border-[1px] border-[rgb(255,130,255)] w-full h-full rounded-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                src={profile}
                alt="profile-pics"
              />
            </div>
          </section>

          {/* About Me Content */}
          <section
            className={`text-left max-md:text-center max-sm:text-center max-w-[500px] max-sm:w-fit ${
              isInView ? "fadeInUp" : "opacity-0"
            }`}
          >
            <p className="text-md pb-4">{aboutMe.firstParagraph}</p>
            <p className="text-md pb-4">{aboutMe.secondParagraph}</p>
            <p className="text-md pb-4">{aboutMe.thirdParagraph}</p>
          </section>
        </section>
      </section>
    </section>
  );
};

export default About;
