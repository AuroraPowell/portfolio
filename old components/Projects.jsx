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
    blurb:
      "I created a client/server application that inserted, edited, and removed values from a SQL table stored in CPanel",
  };

  const emailProj = {
    name: "Email Designs",
    tech: ["HTML", "CSS"],
    imagePath: "",
    route: "/email",
    finished: false,
    blurb:
      "I've recreated various marketing emails I've received and have designed some of my own.",
  };

  // Display formatted cards with information about my work.
  // Responsive idea: Diff card sizes on smaller/larger screen

  const Card = ({ project }) => {
    var name = project.name;
    var tech = project.tech;
    var route = project.route;
    var blurb = project.blurb;

    const compositionStyle = {
      backgroundImage: `url(${divBG})`,
    };

    const [isMobile, setIsMobile] = useState(false);

    // const wideCardStyle = {``};
    // const tallCardStyle = {``};
    const retiredCardStyle = (
      <div
        id="project-content"
        style={compositionStyle}
        className="flex flex-col bg-cyan-400  rounded-l-xl p-3 lg:h-[480px] lg:w-[400px] z-40
          border-r-8 border-r-white shadow-md shadow-stone-900
          text-center mx-auto md:flex md:flex-row md:w-[500px] md:h-64 
           "
      >
        <div className="mx-auto h-fit">
          <p
            className="text-lime-50 text-center text-2xl font-mono font-bold
            bg-black bg-opacity-95 w-fit mx-auto px-3 
            "
          >
            {name}
          </p>
          <div
            id="project-info"
            className="p-3 flex items-stretch md:flex-row bg-white divide-y-4 divide-black rounded-lg"
          >
            <div className="flex justify-around min-h-full items-center ">
              <div className="flex flex-col w-fit mx-3 pt-2 ">
                <p
                  className="text-white text-left text-lg
                  bg-[#B8336A] rounded-sm px-3 rotate-2"
                >
                  Technology used:
                </p>
                <ul className="text-start font-semibold text-lg ml-3 my-auto flex-grow">
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
          <div
            className="text-xs bg-fuchsia-400 shadow-md shadow-slate-800 
            size-44 rounded-md rotate-3 
            mx-auto mt-14 mr-20
            "
          >
            <p className="font-sans text-wrap text-zinc-950 text-left tracking-wide font-bold p-3">
              {blurb}
            </p>
          </div>
        </div>
      </div>
    );

    const finalCardStyle = (
      <div id="card-border" className="bg-white w-3/5 h-1/3 ">
        <div id="image"></div>
        <div id="info"></div>
      </div>
    );

    return retiredCardStyle;
  };
  return (
    // <AnimatedPage>
    <div
      className="min-h-screen overflow-hidden flex flex-col  
      to-[#B8336A] from-[#C490D1] p-9 bg-gradient-to-b content-between"
    >
    
      {/* <Menu /> */}
      <div className="grid">
        {/* <Card project={emailProj} className="flex-1" /> */}
        <Card project={eventProj} className="flex-1" />
      </div>
      <Footer />
    </div>
    // </AnimatedPage>
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

// former card containers grid system
{
  /* <div
          id="card-loader"
          className="flex flex-col flex-grow"
        >
          <div className="grid lg:grid-cols-2 md:grid-cols-1 md:gap-y-9 sm:grid-cols-1 sm:gap-y-9 gap-x-48">

          </div>
        </div> */
}
