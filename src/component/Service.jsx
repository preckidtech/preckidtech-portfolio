import React, { useEffect } from "react";
import { FaCode } from "react-icons/fa6";
import { FaWix } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { FaWordpress } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";
import { AiOutlineFileText } from "react-icons/ai";
import Button from "./Button";
import ThemeToggle from "./ThemeToggle"; // Import the ThemeToggle component
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles


const Service = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS animations
  }, []);

  const serviceInfo = [
    {
      icon: <FaCode />,
      number: "01",
      serviceName: "Custom Development",
      serviceDescription:
        "I create custom websites that capture your brand’s essence while driving results through tailored SEO strategies. As a frontend developer and SEO specialist, I ensure each detail—from design to deployment—aligns with your vision and boosts your online presence.",
    },

    {
      icon: <FaWix />,
      number: "02",
      serviceName: "Wix Website Design",
      serviceDescription:
        "I create aesthetic websites that capture your brand’s identity and drive results with effective SEO. From initial design concepts to final implementation, I ensure every element is optimized to meet your business objectives and enhance your online visibility.",
    },
    {
      icon: <FaWordpress />,
      number: "03",
      serviceName: "Wordpress Website Design",
      serviceDescription:
        "I craft stunning WordPress websites that reflect your brand’s essence and deliver measurable results with top-notch SEO. From the initial design phase to the final launch, I ensure every aspect is optimized to achieve your business goals and boost your online presence. Plus, I offer 3 months of free website management to ensure your site runs smoothly post-launch.",
    },
    {
      icon: <MdMarkEmailRead />,
      number: "04",
      serviceName: "Website SEO Optimization",
      serviceDescription:
        "I create impactful email campaigns with engaging designs and tailored automation. My approach ensures your emails reach the right audience, driving higher engagement and conversions.",
    },
    {
      icon: <GiTrophyCup />,
      number: "05",
      serviceName: "SEO Website Optimization",
      serviceDescription:
        "I provide comprehensive SEO services to enhance your website's search engine ranking and drive organic traffic. From keyword research and on-page optimization to technical SEO and link-building, I ensure your website is fully optimized to attract and retain customers, boosting your online presence and ROI.",
    },
    {
      icon: <AiOutlineFileText />,
      number: "06",
      serviceName: "Website Technical Writing",
      serviceDescription:
        "I specialize in creating high-quality technical content for websites, including user guides, FAQs, and documentation. My writing enhances user experience, clarifies complex information, and improves SEO performance, ensuring that your website delivers value to both users and search engines.",
    },
  ];

  return (
    <>
      <section className="">
        <section className="text-black dark:text-white mx-28 max-md:mx-16 max-sm:mx-12 mb-8">
          <header className="text-center">
            <p className="text-sm text-gray-500">SERVICES</p>
            <p className="text-2xl font-bold pb-8">
              What <span className="text-[hsl(300,100%,75%)]">I do.</span>
            </p>
          </header>

          {/* Add the ThemeToggle button here */}
          <div className="absolute top-4 right-4">
            <ThemeToggle />
          </div>

          {/* Frontend Developer Intro Section */}
          <div
            className="flex  flex-col mb-8"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            <div className="flex justify-center items-center space-x-4 max-sm:space-x-0 mb-6 place-items-center">
              <FaCode className="text-6xl animate-pulse" />
              <h1 className="text-4xl font-bold text-center">
                <span
                  className="text-xl font-semibold"
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  I am a{" "}
                  <span className="text-[hsl(300,100%,75%)] text-cen">Professional</span>{" "}
                  Frontend Developer
                </span>
              </h1>
            </div>
            <p
              className="text-xl opacity-0 animate__animated animate__fadeIn max-sm:text-lg text-center"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="500"
            >
              I specialize in creating user-friendly, SEO-optimized, and
              responsive web experiences that are both beautiful and functional.
            </p>
          </div>

          {/* Service Cards Section */}
          <section className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
            {serviceInfo.map((data, index) => (
              <section
                key={index} // Fix key in map
                id="service-card"
                className="p-6 rounded-md border-2 border-[rgb(255,130,255)] hover:bg-[rgb(255,130,255)] hover:text-black transition-transform ease-in delay-200 duration-200"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <section className="flex justify-between items-end py-4">
                  <div>
                    <p className="text-4xl">{data.icon}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-4xl font-bold">
                      {data.number}
                    </p>
                  </div>
                </section>

                <section>
                  <p className="font-bold text-xl">{data.serviceName}</p>
                  <div className="bg-white w-1/3 h-[1px] my-2 line"></div>
                  <p className="text-sm py-4">{data.serviceDescription}</p>
                  <Button text="Learn more" />
                </section>
              </section>
            ))}
          </section>
        </section>

      </section>
    </>
  );
};

export default Service;
