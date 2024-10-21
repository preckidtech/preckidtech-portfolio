import React, { useState } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { FaMailBulk, FaRegUser } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import Button from "./Button";

const Contact = () => {
  const contactHeadline = "I'm open to new opportunities in Front-End Development whether full-time, part-time, or contract. Let’s collaborate to bring your ideas to life!"

  const phoneNumber = "08141893501"
  const emailAddress = "project-manager@preckidtech.com.ng"
  const location = "Osun State, Nigeria"
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Store form data in local storage
    localStorage.setItem("contactFormData", JSON.stringify(formData));

    // Reset form fields
    setFormData({ fullName: "", email: "", message: "" });
  };

  return (
    <>

        <section id="contact-section" className="bg-[rgb(18,18,19)] py-8 text-white">
          <header className="text-center">
            <p className="text-sm text-gray-500">GET IN TOUCH</p>
            <p className="text-2xl font-bold pb-4">
              Contact <span className="text-[rgb(255,130,255)]">me.</span>
            </p>
            <p className="w-2/5 max-md:w-full max-sm:w-full m-auto text-center px-4">
             {contactHeadline}
            </p>
          </header>

          <section className="grid grid-cols-2 gap-20 gap-y-10 bg-[rgb(29,29,29)] w-5/6 mt-8 mx-auto p-8 rounded-lg max-md:grid-cols-1 max-sm:grid-cols-1">
            <section>
              <section className="text-lg">
                <p>Have an amazing project idea? </p>
                <p className="text-[rgb(255,130,255)] font-bold">
                  Let's Discuss.
                </p>
              </section>

              <div className="flex gap-2 pt-3">
                <span className="text-2xl">
                  <BiPhoneCall />
                </span>
                <p className="text-[rgb(255,130,255)]"><a href="tel">{phoneNumber}</a></p>
              </div>

              <div className="flex gap-2 pt-3">
                <span className="text-2xl">
                  <FaMailBulk />
                </span>
                <p className="text-[rgb(255,130,255)]">{emailAddress}</p>
              </div>

              <div className="flex gap-2 pt-3">
                <span className="text-2xl">
                  <IoLocationOutline />
                </span>
                <p>{location}</p>
              </div>
            </section>

            {/* Input Fields */}
            <section>
              <form onSubmit={handleSubmit} className="text-white">
                <div className="mb-4 relative">
                  <label
                    className="text-md text-gray-700 block"
                    htmlFor="fullName"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Enter Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="p-2 pl-10 rounded-md bg-transparent border-[1px] border-white w-full outline-none "
                  />
                  <span className="absolute left-3 top-10 text-[rgb(255,130,255)]">
                    <FaRegUser />
                  </span>
                </div>

                <div className="mb-4 relative">
                  <label
                    className="text-md text-gray-700 block"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="p-2 pl-10 rounded-md bg-transparent border-[1px] border-white w-full outline-none"
                  />
                  <span className="absolute left-3 top-10 text-[rgb(255,130,255)]">
                    <FaMailBulk />
                  </span>
                </div>

                <div className="mb-4 relative">
                  <label
                    className="text-md text-gray-700 block"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="p-2 pl-10 rounded-md bg-transparent border-[1px] border-white w-full outline-none "
                  />
                  <span className="absolute left-3 top-10 text-[rgb(255,130,255)]">
                    <FaMailBulk />
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full py-2 mt-4 bg-[rgb(255,130,255)] text-black font-semibold rounded-md hover:bg-opacity-80 transition"
                >
                  Send Message
                </button>
                {/* <Button text="Send message"/> */}
              </form>
            </section>
          </section>
        </section>
    </>
  );
};

export default Contact;
