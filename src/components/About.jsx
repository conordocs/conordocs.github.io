import React from "react";
import Profile from "../assets/Profile.jpg";

const About = () => {
  return (
    <div id="about" className="w-full h-full bg-[#0a192f] text-gray-300 pb-5">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col md:grid grid-cols-3 gap-8 items-center">
        <div className="col-span-2">
          <p className="text-4xl font-bold inline border-b-4 border-[#11d670]">
            About
          </p>
          <h2 className="pt-4 text-2xl">A little bit about me...</h2>
          <p className="py-2 text-gray-300">
            I have just recently finished studying BSc Computing & Information
            Technologies at Queen’s University Belfast. I have achieved a final
            grade of 2:2. I create top end websites using the latest technology
            whether it be hardcoded or created using a content management system
            such as WordPress or BigCommerce. I have a great knowledge and
            passion for working with JavaScript, PHP, MySQL, HTML & CSS. I also
            have experience creating websites with WordPress, as well as
            maintaining my father’s family run business which runs on
            BigCommerce. Since I started university I knew that UI Developing
            was the route that I wanted to go down for my career so this is why
            I have created this website to showcase what I have worked on and
            what I am capable of doing and what I am willing to learn to ensure
            that I make a career out of this.
          </p>
        </div>
        <div className="w-full h-auto m-auto rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-200">
          <img src={Profile} alt="Logo" className="rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default About;
