import React from "react";
import { FaCode } from "react-icons/fa6";
import { FaWix } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import Button from "./Button";

const Service = () => {
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
        "I create aesthetic websites that capture your brand’s identity and drive results with effective SEO. From initial design concepts to final implementation, I ensure every element is optimized to meet your business objectives and enhance your online visibilit.",
    },
    {
      icon: <MdMarkEmailRead />,
      number: "03",
      serviceName: "Email Design & Automation",
      serviceDescription:
        "I create impactful email campaigns with engaging designs and tailored automation. My approach ensures your emails reach the right audience, driving higher engagement and conversions.",
    },
  ];
  return (
    <>
      <section className="">
        <header className="text-center">
          <p className="text-sm text-gray-500">SERVICES</p>
          <p className="text-2xl font-bold pb-8">
            What <span className="text-[hsl(300,100%,75%)]">I do.</span>
          </p>
        </header>

        {/* service card */}
        <section className="grid grid-cols-3 gap-8 max-md:grid-cols-1 ">
          {/* SERVICE CARD DISPLAY */}

          {serviceInfo.map(function (data) {
            return (
              <section
                id="service-card"
                className="bg-[rgb(39,39,38)u] p-6 rounded-md border-2 border-[rgb(255,130,255)] hover:bg-[rgb(255,130,255)] hover:text-black transition-transform ease-in delay-200 duration-200 "
              >
                <section className="flex justify-between items-end py-4">
                  <div>
                    <p className="text-4xl ">{data.icon}</p>
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
            );
          })}
        </section>
      </section>
    </>
  );
};

export default Service;
