import React from "react";
import { useState } from "react";

import Footer from "./Footer";

import Menu from "./functional/menu";
import { useNavigate } from "react-router-dom";
import AnimatedPage from "./functional/AnimatedPage";

import img from "../assets/selfie.jpg";

const Projects = () => {
  const navigate = useNavigate();
  const [projectFocus, setProjectFocus] = useState({});

  const eventProject = {
    name: "CountMe.IN",
    desc: "Using primarily ReactJS, Express, NodeJS, and Sequelize, I was able to build a website that stores information in a server-side relational database that users can update and delete (when authenticated to do so)",
    imagePath: "",
    route: "/rsvp",
  };

  const emailProject = {
    name: "Email Designs",
    desc: "Using HTML and CSS, I built a list of emails to showcase my ability to use plain HTML/CSS.",
    imagePath: "",
    route: "/email",
  };

  const videoProject = {
    name: "Video Forum",
    desc: "Using ReactJS, I was able to build a website allows users to watch videos.",
  };

  // Display formatted cards with information about my work.
  // Responsive idea: Diff card sizes on smaller/larger screen

  const Card = ({ project }) => {
    var name = project.name;
    var desc = project.desc;
    var route = project.route;

    return (
      <div
        className="flex relative bg-lime-500 rounded-lg opacity-90  
      z-30 m-3"
      >
        <div id="project-info" className="flex flex-col w-2/5">
          <p className="text-center p-3 bg-slate-100">{name}</p>
          <p className="text-left m-2">{desc}</p>
        </div>
        <div
          id="project-pic"
          className="bg-white w-3/5 flex-grow text-center m-3 rounded-xl opacity-85 "
        >
          <div className=" h-72 rounded-t-xl relative">
            <img className="opacity-100 absolute start-0" src={img} />
          </div>

          <div className=" inline-flex my-auto justify-center">
            <p></p>
            <button
              onClick={() => navigate(`${route}`)}
              className="p-3 rounded-md
            bg-red-400"
            >
              See Project
            </button>
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
        <Menu className="flex-grow" />

        <div
          id="card-loader"
          className="pt-20 place-content-evenly gap-x-60 gap-y-16 flex-grow
            grid lg:grid-cols-2 md:grid-cols-1"
        >
          <Card project={emailProject} />
          <Card project={eventProject} />
        </div>
        <Footer className="flex-grow" />
      </div>
    </AnimatedPage>
  );
};
export default Projects;
