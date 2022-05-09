import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import {Link} from "react-scroll";

const Banner = () => {
  return (
    <div>
      <div name="home" id="home" className="w-full h-screen bg-[#0a192f]">
        {/* container */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
          <p className="text-[#11d670]">Hi, my name is</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
            Conor Doherty
          </h1>
          <p className="text-[#8892b0] py-4 max-w-700px">
            I have just recently finished studying BSc Computing & Information
            Technologies at Queen’s University Belfast. I am currently working
            as a User Support Technician at Queen’s University Belfast. I wish
            to pursue a career in Software Development & Graphic Design.
          </p>
          <div>
            <Link activeClass="active" to="work" smooth={true} duration={500}>
              <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#11d670]">
                View Projects
                <span className="group-hover:scale-150 duration-300">
                  <HiArrowNarrowRight className="ml-3" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
