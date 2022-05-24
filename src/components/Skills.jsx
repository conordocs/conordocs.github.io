import React from "react";

import CSS from "../assets/skills/css.png";
import HTML from "../assets/skills/html.png";
import SQLImg from "../assets/skills/sql.png";
import JavaScript from "../assets/skills/javascript.png";
import ReactImg from "../assets/skills/react.png";
import PHPImg from "../assets/skills/php.png";

const Skills = () => {
  return (
    <div
      name="skills"
      id="skills"
      className="w-full h-full bg-[#0a192f] text-gray-300 pb-5"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-[#11d670]">
            Skills
          </p>
          {/* eslint-disable-next-line */}
          <p className="pt-4 text-2xl">What I specialise in...</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="h-20 mx-auto" src={SQLImg} alt="HTML icon" />
            <p className="my-4">SQL</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="h-20 mx-auto" src={PHPImg} alt="HTML icon" />
            <p className="my-4">PHP</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
