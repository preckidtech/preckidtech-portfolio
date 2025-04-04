import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import campusProjectImage from "../assets/project image/Homepage-Campus.png";
import authentiseProjectImage from "../assets/project image/Authentise.png";
import zionProjectImage from "../assets/project image/Zion-National.png";
import physiciansProjectImage from "../assets/project image/Home-Physicians-CPA.png";
import wechatProjectImage from "../assets/project image/WeChat.png";
import dataEntryProjectImage from "../assets/project image/data entry.jpg";
import zangadaImage from "../assets/project image/zangada website.jpg";
import eptDesignImage from "../assets/project image/eptdesign.jpg";
import kingsJournal from "../assets/project image/kings journal.jpg";
import Button from "./Button";
import { CiGlobe } from "react-icons/ci";

const Portfolio = () => {
  const projectInfo = [
    {
      id: 1,
      projectImage: zangadaImage,
      projectTitle: "Zangada DMC Africa",
      projectDescription:
        "Zangada DMC connects travelers with unique, tailored safari experiences, promoting cultural exploration and adventure while ensuring seamless planning and exceptional service.",
      projectLink: "https://zangadadmc.com/",
      alt: "Tailored safari experiences with Zangada DMC, promoting cultural exploration and adventure across Africa",
    },
    {
      id: 2,
      projectImage: campusProjectImage,
      projectTitle: "Campus Without Walls",
      projectDescription:
        "Campus Without Walls connects educators with project-based curriculum resources, enhancing teaching and supporting professional development.",
      projectLink: "https://campuswithoutwalls.org/",
      alt: "Campus Without Walls: Connecting educators with project-based curriculum resources for professional development",
    },
    {
      id: 3,
      projectImage: authentiseProjectImage,
      projectTitle: "Authentise",
      projectDescription:
        "A platform that streamlines manufacturing workflows with data-driven automation, enabling real-time collaboration and enhanced productivity in industrial operations.",
      projectLink: "https://www.authentise.com/",
      alt: "Authentise: Streamlining manufacturing workflows with data-driven automation for enhanced productivity",
    },
    {
      id: 4,
      projectImage: zionProjectImage,
      projectTitle: "Zion Adventure Photog",
      projectDescription:
        "A vibrant photography blog that captures the beauty of Zion National Park through inspiring stories, adventure tips, and breathtaking visuals.",
      projectLink: "https://www.zionadventurephotog.com/blog",
      alt: "Zion Adventure Photog: A vibrant photography blog capturing the beauty of Zion National Park",
    },
    {
      id: 5,
      projectImage: kingsJournal,
      projectTitle: "Kings Journal",
      projectDescription:
        "A dynamic online journal providing insightful articles, academic research, and thought-provoking discussions across various disciplines to inform and inspire readers.",
      projectLink: "https://kingsjournals.com.ng/index.php/KJEIM",
      alt: "Kings Journal: An online journal providing insightful articles, academic research, and thought-provoking discussions",
    },
    {
      id: 6,
      projectImage: physiciansProjectImage,
      projectTitle: "Physicians CPA",
      projectDescription:
        "Specialized accounting services tailored for physicians, offering personalized tax strategies, financial planning, and cloud-based bookkeeping to help doctors manage their finances efficiently.",
      projectLink: "https://physicianscpa.ca/",
      alt: "Physicians CPA: Specialized accounting services tailored for physicians, offering tax strategies and financial planning",
    },
    {
      id: 7,
      projectImage: wechatProjectImage,
      projectTitle: "Wechat Verification",
      projectDescription:
        "Fast and easy WeChat account setup and verification support.",
      projectLink:
        "https://www.upwork.com/services/product/admin-customer-support-wechat-account-verification-registration-service-1767336960924708864?ref=project_share",
      alt: "Wechat Verification: Fast and easy account setup and verification support for WeChat users",
    },
    {
      id: 8,
      projectImage: eptDesignImage,
      projectTitle: "EPT Design",
      projectDescription:
        "Crafting landscapes that inspire memorable moments and meaningful experiences. From public spaces to private gardens, we bring stories of place to life through thoughtful design.",
      projectLink: "https://eptdesign.com/",
      alt: "EPT Design: Crafting landscapes that inspire memorable moments and meaningful experiences through thoughtful design",
    },
    {
      id: 9,
      projectImage: dataEntryProjectImage,
      projectTitle: "Data Entry",
      projectDescription:
        "Accurate Excel data entry, cleaning, and formatting for efficient results.",
      projectLink:
        "https://www.upwork.com/services/product/admin-customer-support-excel-data-entry-cleaning-formatting-reliable-solutions-for-data-entry-1773441192662433792?ref=project_share",
      alt: "Accurate Excel data entry, cleaning, and formatting services for efficient and reliable results",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" }); // Initialize AOS with custom duration and easing
  }, []);

  return (
    <>
      <section className="text-black dark:text-white mx-28 max-md:mx-16 max-sm:mx-12">
        <section id="portfolio-section" className="py-10">
          <header className="text-center pt-8">
            <p className="text-sm text-gray-500">PORTFOLIO</p>
            <p className="text-2xl font-bold pb-4">
              Featured{" "}
              <span className="text-[rgb(255,130,255)]">projects.</span>
            </p>
          </header>

          <section className="grid grid-cols-3 items-start gap-8 max-md:grid-cols-1">
            {projectInfo.map((data) => (
              <section
                data-aos="zoom-in-up"
                key={data.id} // Add key for uniqueness
              >
                <section className="border-2 border-[rgb(255,130,255)] p-6 max-md:p-4 max-sm:p-2 rounded-md transform transition duration-500 hover:scale-105 hover:shadow-xl hover:rotate-3 hover:bg-gradient-to-r from-pink-500 to-purple-500">
                  <a href={data.projectLink} target="blank">
                    <img
                      className="h-52 object-cover scale-90 hover:scale-110 max-md:hover:scale-105 max-sm:hover:scale-105 transition-transform duration-500 rounded-md m-auto"
                      src={data.projectImage}
                      alt={data.alt}
                      loading="lazy"
                      decoding="async"
                    />
                  </a>
                </section>
                <p className="font-bold text-2xl py-4 max-md:text-center max-sm:text-center">
                  {data.projectTitle}
                </p>
                <p className="text-sm pb-5 max-md:text-center max-sm:text-center">
                  {data.projectDescription}
                </p>
                <a href={data.projectLink} target="blank">
                  <Button
                    text="Live demo"
                    style={
                      "px-4 flex gap-2 items-center max-sm:m-auto max-md:last:m-auto  py-2 text-center  bg-[rgb(255,130,255)] text-black rounded-md"
                    }
                    icon={<CiGlobe />}
                  />
                </a>
              </section>
            ))}
          </section>
        </section>
      </section>
    </>
  );
};

export default Portfolio;
