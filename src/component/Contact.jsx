import React, { useEffect, useRef } from "react"; // Added useRef import
import { BiPhoneCall } from "react-icons/bi";
import { FaMailBulk, FaRegUser } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const Contact = () => {
  const contactHeadline =
    "I'm open to new opportunities in Front-End Development whether full-time, part-time, or contract. Let’s collaborate to bring your ideas to life!";

  const phoneNumber = "08141893501";
  const emailAddress = "project-manager@preckidtech.com.ng";
  const location = "Osun State, Nigeria";
  let userName = document.getElementById("name");
  let userEmail = document.getElementById("email");
  let userMessage = document.getElementById("message");
  let regSucess = document.querySelector(".reg-sucess");
  // let message = document.querySelector(".message")
  console.log(regSucess);
  const form = useRef(); // Initialize useRef

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS animations
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_aujtew5", "template_f27nluk", form.current, {
        publicKey: "5cebYDqofOwU_VDmz",
      })

      .then(
        () => {
          // console.log("Sent Successfully. Well done. Check your mail now");
          // user;
          // alert("Sent Successful");
          regSucess.style.display = "block";
          regSucess.innerHTML = `Message Sent`;
          setTimeout(() => regSucess.remove(), 2000);
          userName.value = "";
          userEmail.value = "";
          userMessage.value = "";
        },
        (error) => {
          console.log("FAILED...", error.text);

          // alert("failed");
        }
      );
  };

  return (
    <>
      <section
        id="contact-section"
        className="dark:bg-[rgb(18,18,19)] bg-white py-8 dark:text-white text-black"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <header className="text-center">
          <p className="text-sm text-gray-500">GET IN TOUCH</p>
          <p className="text-2xl font-bold pb-4">
            Contact <span className="text-[rgb(255,130,255)]">me.</span>
          </p>
          <p className="w-2/5 max-md:w-full max-sm:w-full m-auto text-center px-4">
            {contactHeadline}
          </p>
        </header>

        <section
          className="grid grid-cols-2 gap-20 gap-y-10 dark:bg-[rgb(29,29,29)] bg-[#868585] dark:text-white text-black w-5/6 mt-8 mx-auto p-8 rounded-lg max-md:grid-cols-1 max-sm:grid-cols-1"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <section>
            <section className="text-lg">
              <p>Have an amazing project idea? </p>
              <p className="text-[rgb(255,130,255)] font-bold">
                Let's Discuss.
              </p>
            </section>

            <div
              className="flex gap-2 pt-3"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <span className="text-2xl">
                <BiPhoneCall />
              </span>
              <p className="text-[rgb(255,130,255)]">
                <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
              </p>
            </div>

            <div
              className="flex gap-2 pt-3"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <span className="text-2xl">
                <FaMailBulk />
              </span>
              <p className="text-[rgb(255,130,255)]">{emailAddress}</p>
            </div>

            <div
              className="flex gap-2 pt-3"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <span className="text-2xl">
                <IoLocationOutline />
              </span>
              <p>{location}</p>
            </div>
          </section>

          {/* Input Fields */}
          <form ref={form} onSubmit={sendEmail}>
            <div
              className="mb-4 relative"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <label className="text-md text-gray-700 block" htmlFor="fullName">
                Full Name
              </label>
              <input
                id="name"
                name="user_name"
                type="text"
                placeholder="Enter Name"
                required
                className="p-2 pl-10 rounded-md bg-transparent border-[1px] dark:border-white border-black w-full outline-none "
              />
              <span className="absolute left-3 top-10 text-[rgb(255,130,255)]">
                <FaRegUser />
              </span>
            </div>

            <div
              className="mb-4 relative"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <label className="text-md text-gray-700 block" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="user_email"
                type="email"
                placeholder="Enter Email"
                required
                className="p-2 pl-10 rounded-md bg-transparent border-[1px] dark:border-white border-black w-full outline-none"
              />
              <span className="absolute left-3 top-10 text-[rgb(255,130,255)]">
                <FaMailBulk />
              </span>
            </div>

            <div
              className="mb-4 relative"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <label className="text-md text-gray-700 block" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                required
                className="p-2 pl-10 rounded-md bg-transparent border-[1px] dark:border-white border-black w-full outline-none "
              />
              <span className="absolute left-3 top-10 text-[rgb(255,130,255)]">
                <FaMailBulk />
              </span>
            </div>
            <section
              className="reg-sucess hidden bg-white text-green-800 font-extrabold text-md py-3 text-center  rounded-md "
              data-aos="fade-up"
              data-aos-duration="1000"
            ></section>
            <button
              type="submit"
              className="w-full py-2 mt-4 bg-[rgb(255,130,255)] text-black font-semibold rounded-md hover:bg-opacity-80 transition"
            >
              Send Message
            </button>
          </form>
        </section>
      </section>
    </>
  );
};

export default Contact;
