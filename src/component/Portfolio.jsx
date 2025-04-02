import React from "react";
import campusProjectImage from "../assets/project image/Homepage-Campus.png";
import authentiseProjectImage from "../assets/project image/Authentise.png";
import zionProjectImage from "../assets/project image/Zion-National.png";
import physiciansProjectImage from "../assets/project image/Home-Physicians-CPA.png";
import wechatProjectImage from "../assets/project image/WeChat.png";
import dataEntryProjectImage from "../assets/project image/data entry.jpg";
import zangadaImage from "../assets/project image/zangada website.jpg"
import eptDesignImage from "../assets/project image/eptdesign.jpg"
import kingsJournal from "../assets/project image/kings journal.jpg"
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
    },
    {
      id: 2,
      projectImage: campusProjectImage,
      projectTitle: "Campus Without Walls",
      projectDescription:
        "Campus Without Walls connects educators with project-based curriculum resources, enhancing teaching and supporting professional development.",
      projectLink: "https://campuswithoutwalls.org/",
    },
    {
      id: 3,
      projectImage: authentiseProjectImage,
      projectTitle: "Authentise",
      projectDescription:
        "A platform that streamlines manufacturing workflows with data-driven automation, enabling real-time collaboration and enhanced productivity in industrial operations.",
      projectLink: "https://www.authentise.com/",
    },
    {
      id: 4,
      projectImage: zionProjectImage,
      projectTitle: "Zion Adventure Photog",
      projectDescription:
        "A vibrant photography blog that captures the beauty of Zion National Park through inspiring stories, adventure tips, and breathtaking visuals.",
      projectLink: "https://www.zionadventurephotog.com/blog",
    },
    {
      id: 5,
      projectImage: kingsJournal, //kings journal
      projectTitle: "Kings Journal",
      projectDescription:
        "A dynamic online journal providing insightful articles, academic research, and thought-provoking discussions across various disciplines to inform and inspire readers.",
      projectLink: "https://kingsjournals.com.ng/index.php/KJEIM",
    },
    {
      id: 6,
      projectImage: physiciansProjectImage,
      projectTitle: "Physicians CPA",
      projectDescription:
        "Specialized accounting services tailored for physicians, offering personalized tax strategies, financial planning, and cloud-based bookkeeping to help doctors manage their finances efficiently.",
      projectLink: "https://physicianscpa.ca/",
    },
    {
      id: 7,
      projectImage: wechatProjectImage,
      projectTitle: "Wechat Verification",
      projectDescription:
        "Fast and easy WeChat account setup and verification support.",
      projectLink:
        "https://www.upwork.com/services/product/admin-customer-support-wechat-account-verification-registration-service-1767336960924708864?ref=project_share",
    },
    {
      id: 8,
      projectImage: eptDesignImage,
      projectTitle: "EPT Design",
      projectDescription:
        "Crafting landscapes that inspire memorable moments and meaningful experiences. From public spaces to private gardens, we bring stories of place to life through thoughtful design.",
      projectLink: "https://eptdesign.com/",
    },
    {
      id: 9,
      projectImage: dataEntryProjectImage,
      projectTitle: "Data Entry",
      projectDescription:
        "Accurate Excel data entry, cleaning, and formatting for efficient results.",
      projectLink:
        "https://www.upwork.com/services/product/admin-customer-support-excel-data-entry-cleaning-formatting-reliable-solutions-for-data-entry-1773441192662433792?ref=project_share",
    },
  ];
  return (
    <>
      <section className="border-pink-500 border-b-8">
        <section className="text-black  dark:text-white mx-28 max-md:mx-16 max-sm:mx-12">
          <section id="portfolio-section" className="py-10">
            <header className="text-center pt-8">
              <p className="text-sm text-gray-500">PORTFOLIO</p>
              <p className="text-2xl font-bold pb-4">
                Featured{" "}
                <span className="text-[rgb(255,130,255)]">projects.</span>
              </p>
            </header>

            <section className="grid grid-cols-3  items-start gap-8 max-md:grid-cols-1 ">
              {/* Project Card */}

              {projectInfo.map(function (data) {
                return (
                  <section data-aos="zoom-in-down">
                    <section className="border-2 border-[rgb(255,130,255)] p-6 max-md:p-4 max-sm:p-2 rounded-md ">
                      <a href={data.projectLink} target="blank">
                        <img
                          className="h-52 object-cover scale-90 hover:scale-110 max-md:hover:scale-105 max-sm:hover:scale-105 transition-transform duration-500 rounded-md m-auto"
                          src={data.projectImage}
                          alt=""
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
                      <Button text="Live demo" icon={<CiGlobe />} />
                    </a>
                  </section>
                );
              })}
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default Portfolio;
