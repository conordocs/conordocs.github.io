import React from "react";
import ProjectItem from "../components/ProjectItem";
import NailedItLogo from "../assets/naileditImg/products-1.png";
import CouchPotatoLogo from "../assets/couchPotatoImg/homepage.png";
import RealtorLogo from "../assets/RealtorImg/1.png";
import NetflixLogo from "../assets/netflixImg/home.png";

const Work = () => {
  return (
    <div id="work" className="w-full h-full bg-[#0a192f] text-gray-300 pb-5">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-[#11d670]">
            Projects
          </p>
        </div>
        <h2 className="pt-4 pb-4 text-2xl">Projects I've worked on...</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="NailedIT"
            backgroundImg={NailedItLogo}
            projectUrl="/#/nailedit"
            projectType="PHP"
          />
          <ProjectItem
            title="Couch Potato"
            backgroundImg={CouchPotatoLogo}
            projectUrl="/#/couchpotato"
            projectType="PHP"
          />
          <ProjectItem
            title="Realtor"
            backgroundImg={RealtorLogo}
            projectUrl="/#/realtor"
            projectType="React JS"
          />
          <ProjectItem
            title="Netflix"
            backgroundImg={NetflixLogo}
            projectUrl="/#/netflix"
            projectType="React JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
