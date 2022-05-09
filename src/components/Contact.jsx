import React from "react";

const Contact = () => {
  return (
    <div
      name="contact" id="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#11d670] text-gray-300">
            Contact
          </p>
          {/* eslint-disable-next-line */}
          <p className="text-gray-300 py-4">
            // Submit the form below or send me an email @ <a href="mailto:conordoherty@hotmail.com">conordoherty97@hotmail.com</a>
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
      </form>
    </div>
  );
};

export default Contact;
