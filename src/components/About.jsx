import React from "react";

const About = () => {
  return (
    <div name="about" id="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#11d670]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hey, I’m Conor. Please take a look around. I have just recently finished studying BSc Computing & Information Technologies at Queen’s University Belfast. </p>
          </div>
          <div>
          I have achieved a final grade of 2:2. I create top end websites using the latest technology whether it be hardcoded or created using a content management system such as WordPress or BigCommerce. I have a great knowledge and passion for working with JavaScript, PHP, MySQL, HTML & CSS. I also have experience creating websites with WordPress, as well as maintaining my father’s family run business which runs on BigCommerce. Since I started university I knew that UI Developing was the route that I wanted to go down for my career so this is why I have created this website to showcase what I have worked on and what I am capable of doing and what I am willing to learn to ensure that I make a career out of this.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
