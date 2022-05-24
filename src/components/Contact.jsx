import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
    <div
      name="contact"
      id="contact"
      className="w-full h-full bg-[#0a192f] flex justify-center items-center p-4 text-gray-300 pb-5"
    >
      <form
        method="POST"
        action="https://getform.io/f/374caf5f-4c32-4090-9210-b6a848fd416a"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#11d670]">
            Contact
          </p>
          {/* eslint-disable-next-line */}
          <p className="pt-4 text-2xl">
            Submit the form below or send me an email{" "}
            <span className="text-[#11d670]">@ </span>
            <a
              className="hover:text-[#11d670]"
              href="mailto:conordoherty97@hotmail.com"
            >
              conordoherty97@hotmail.com
            </a>
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-[#11d670] px-4 py-3 my-8 mx-auto flex items-center">
          Let's Talk!
        </button>
        <div className="flex justify-center py-12">
          <Link to="/#home" smooth={true} duration={500}>
            <div className="rounded-full bg-gray-700/80 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#12D670]" size={30} />
            </div>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Contact;
