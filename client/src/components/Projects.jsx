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

  const eventProj = {
    name: "CountMe.IN",
    tech: ["React", "Express", "NodeJS", "MySQL"],
    imagePath: "",
    route: "/rsvp",
    finished: true,
  };

  const emailProj = {
    name: "Email Designs",
    tech: ["HTML", "CSS"],
    imagePath: "",
    route: "/email",
    finished: false,
  };
  // const projList = [
  //   {
  //     name: "CountMe.IN",
  //     tech: ["React", "Express", "NodeJS", "MySQL"],
  //     imagePath: "",
  //     route: "/rsvp",
  //     finished: true,
  //   },
  //   {
  //     name: "Video Forum",
  //     tech: "Using ReactJS, I was able to build a website allows users to watch videos.",
  //   },
  //   {
  //     name: "Email Designs",
  //     tech: ["HTML", "CSS"],
  //     imagePath: "",
  //     route: "/email",
  //     finished: false,
  //   },
  // ];

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
      <div className="flex flex-col rounded-l-lg z-20 md:mx-auto ">
        <div
          id="project-content"
          style={compositionStyle}
          className="text-center m-1 rounded-l-xl h-96
          border-r-8 border-r-white bg-white"
        >
          <div className="place-content-stretch">
            <p
              className="text-lime-50 text-center text-2xl font-mono font-bold
            bg-black bg-opacity-95 w-fit mx-auto px-3 my-3
            "
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
                  className="bg-lime-300 rounded-full size-28
                  border-l-2 border-b-2 border-t-2 border-r-0 border-fuchsia-950 
                  text-fuchsia-950 font-bold -rotate-12 
                  hover:text-lime-300 hover:bg-fuchsia-950 hover:before:bg-yellow-300 hover:before:bg-opacity-40
                   before:absolute before:-my-11 before:mx-12 before:w-24 before:h-10 before:rotate-45 
                   overflow-hidden before:bg-red-300 before:bg-opacity-40 before:z-50 before:border-b-2 before:border-b-black before:rounded-t-full"
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
        className="min-h-screen w-full mx-auto
      to-[#B8336A] from-[#C490D1] bg-gradient-to-b  items-center"
      >
        <Menu className="flex-grow md:bg-[#ACACDE]" />

        <div
          id="card-loader"
          className="z-0 
            grid lg:grid-cols-2 md:grid-cols-1 mx-auto"
        >
          <Card project={eventProj} />
          <Card
            project={emailProj}
            className="bg-cover bg-white bg-opacity-50"
          />
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
