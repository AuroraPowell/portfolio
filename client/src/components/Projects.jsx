import React from "react";
import { useState } from "react";

import Footer from "./Footer";

import Menu from "./functional/menu";
import { useNavigate } from "react-router-dom";
import AnimatedPage from "./functional/AnimatedPage";

// place holder image for event cards.
import img from "../assets/placeholder.jpg";
import divBG from "../assets/divBG.png";

const Projects = () => {
  const navigate = useNavigate();
  const [projectFocus, setProjectFocus] = useState({});

  const eventProject = {
    name: "CountMe.IN",
    tech: ["React", "Express", "NodeJS", "MySQL"],
    imagePath: "",
    route: "/rsvp",
  };

  const emailProject = {
    name: "Email Designs",
    tech: ["HTML", "CSS"],
    imagePath: "",
    route: "/email",
  };

  const videoProject = {
    name: "Video Forum",
    tech: "Using ReactJS, I was able to build a website allows users to watch videos.",
  };

  // Display formatted cards with information about my work.
  // Responsive idea: Diff card sizes on smaller/larger screen

  const Card = ({ project }) => {
    var name = project.name;
    var tech = project.tech;
    var route = project.route;

    const compositionStyle = {
      backgroundImage: `url(${divBG})`,
    };

    return (
      <div
        className="flex flex-col rounded-l-lg 
       z-20  md: md:mx-auto"
      >
        <div
          id="project-content"
          style={compositionStyle}
          className="text-center m-1 rounded-l-xl h-96
          border-r-8 border-r-white bg-white size-fit"
        >
          <div className="items-center my-auto">
            <p
              className="text-lime-100 text-center text-2xl font-mono font-bold
            bg-black bg-opacity-95 w-fit mx-auto px-3 rounded-2xl my-3"
            >
              {name}
            </p>
            <div
              id="project-info"
              className="flex flex-col bg-white divide-y-4 divide-black rounded-xl h-fit my-3 mx-9"
            >
              <div className="flex justify-between min-h-full items-center m-3">
                <div className="flex flex-col mx-3 pt-2">
                  <p
                    className="text-white text-left text-xl
                  bg-[#B8336A] rounded-sm px-3 rotate-2"
                  >
                    Technology used:
                  </p>
                  <ul className="text-start text-lg ml-3 my-auto flex-grow">
                    {tech?.map((li) => {
                      return (
                        <li
                          className="border-b-2 border-black text-center"
                          key={li}
                        >
                          {li}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <button
                  onClick={() => navigate(`${route}`)}
                  className="bg-[#C490D1] border-4 border-lime-400 rounded-full size-28 
                  text-white font-bold -rotate-12"
                >
                  See Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <AnimatedPage>
      <div
        className="min-h-screen w-full flex flex-col mx-auto
      to-[#B8336A] from-[#C490D1] bg-gradient-to-b  items-center"
      >
        <Menu className="flex-grow md:bg-[#ACACDE]" />

        <div
          id="card-loader"
          className="z-0 place-content-evenly lg:gap-x-60  flex-grow
            grid lg:grid-cols-2 md:grid-cols-1 md:gap-x-52 "
        >
          <Card project={eventProject} />
          <Card project={emailProject} />
        </div>
        <Footer className="flex-grow" />
      </div>
    </AnimatedPage>
  );
};
export default Projects;

// ******************************************* //
//      v    v             v    v
// FORMER CARD DESIGN (May still use it, idk)  //
//      v    v             v    v
// ******************************************* //
{
  /* <div className="bg-white flex-grow text-center m-3 rounded-xl opacity-85 ">
  <div className=" h-72 rounded-t-xl bg-black"></div>

  <div className="relative inline-flex w-full my-auto justify-center">
    <p className="absolute left-0 ml-3 p-3">{name}</p>
    <button
      className="absolute right-0 mr-3 p-3 rounded-md
            bg-red-400"
    >
      See Project
    </button>
  </div>
</div>; */
}
