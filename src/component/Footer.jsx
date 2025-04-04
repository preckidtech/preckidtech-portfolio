import logo from "../assets/logo/preckid logo.png";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  const socialHandle = [
    {
      id: 1,
      handle: "instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/preckidtech/",
    },
    {
      id: 2,
      handle: "linkedin",
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/oyebode-precious",
    },
    {
      id: 3,
      handle: "facebook",
      icon: <FaFacebook />,
      link: "https://api.whatsapp.com/message/K2JH7N3JZJ6BO1",
    },
    {
      id: 4,
      handle: "whatsapp",
      icon: <FaWhatsapp />,
      link: "https://api.whatsapp.com/message/K2JH7N3JZJ6BO1",
    },
  ];
  return (
    <>
      <section className="bg-[rgb(29,29,28)] py-12 text-white">
        <section className="grid grid-cols-2 items-center justify-center gap-y-4 w-5/6 m-auto max-sm:grid-cols-1 ">
          <section className="grid grid-cols-2">
            <div>
              <img className="h-8 max-md:h-6 max-sm:h-6" src={logo} alt="" />
            </div>
            <div>
              <p>Web Developer</p>
              <p>Frontend Developer</p>
              <p>Email Designer</p>
            </div>
          </section>
          {/* second section */}
          <section className="grid grid-cols-2">
            <div>
              <ul>
                <li>
                  <a href="#service-component" className="underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#portfolio-section" className="underline">
                    My projects.
                  </a>
                </li>
                <li>
                  <a href="#about-section" className="underline">
                    About me
                  </a>
                </li>
                <li>
                  <a href="#contact-section" className="underline">
                    Contact me
                  </a>
                </li>
                {/* <li>
                  <a href=""></a>Blog
                </li> */}
              </ul>
            </div>
            <div>
              <p>Social media handles</p>

              <div className="flex gap-4 text-[rgb(255,130,255)]">
                {socialHandle.map(function (data) {
                  return (
                    
                    <a href={data.link} target="blank">
                      <span className="text-xl">{data.icon}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </section>
        </section>

        {/* Developer acknoledgement */}
      </section>
      <section className="bg-[rgb(29,29,28)] text-white py-6 border-t-[1px] border-gray">
        <p className="text-center max-sm:px-2">
          { new Date().getFullYear()} Copyright @{" "}
          <span className="text-[rgb(255,130,255)] font-extrabold">
            Preckid Tech
          </span>
          . Dedicated to{" "}
          <span className="text-[rgb(255,130,255)] font-extrabold">GOD</span>
        </p>
      </section>
    </>
  );
};

export default Footer;
