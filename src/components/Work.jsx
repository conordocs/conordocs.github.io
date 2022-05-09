import React from "react";
import NailedItLogo from "../assets/naileditImg/products-1.png";
import CouchPotatoLogo from "../assets/couchPotatoImg/homepage.png";
import RealtorLogo from "../assets/RealtorImg/1.png";
import CAdminHome from "../assets/CAdmin/index-light.PNG";

const Work = () => {
  return (
    <div
      name="work"
      id="work"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#11d670]">
            Projects
          </p>
          {/* eslint-disable-next-line */}
          <p className="py-6">
            // Check out some of the projects that I have worked on.
          </p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          {/* NailedIT */}
          <div
            style={{ backgroundImage: `url(${NailedItLogo})` }}
            className="bg-cover bg-center shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider content-center">
                Final Year Project
              </span>
              <div className="pt-8 text-center">
                <a href="/#/nailedit">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/conordocs/nailedit">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* NailedIT End */}

          {/* Couch Potato */}
          <div
            style={{ backgroundImage: `url(${CouchPotatoLogo})` }}
            className="bg-cover bg-center shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider content-center">
                PHP Project
              </span>
              <div className="pt-8 text-center">
                <a href="/couchpotato">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/conordocs/couchpotato">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Couch Potato End */}

          {/* Realtor */}
          <div
            style={{ backgroundImage: `url(${RealtorLogo})` }}
            className="bg-cover bg-center shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider content-center">
                React JS & Rapid API
              </span>
              <div className="pt-8 text-center">
                <a href="/realtor">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/conordocs/react_realestate">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Realtor End */}

          {/* CAdmin */}
          <div
            style={{ backgroundImage: `url(${CAdminHome})` }}
            className="bg-cover bg-center shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider content-center">
                React JS Project
              </span>
              <div className="pt-8 text-center">
                <a href="/cadmin">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/conordocs/CAdmin_noDB">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* CAdmin End */}
        </div>
      </div>
    </div>
  );
};

export default Work;
