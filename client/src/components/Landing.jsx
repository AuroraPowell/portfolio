import React from "react";
import { useNavigate } from "react-router-dom";

import Footer from "./Footer";

import Menu from "./functional/menu";
import AnimatedPage from "./functional/AnimatedPage";

const Landing = () => {
  const navigate = useNavigate();
  const Content = () => {
    return (
      // the following stays sticky with the scrolling

      <div id="coding" className="">
        <div className="min-h-screen ">
          <h1 className=" text-[#E5FCFF] opacity-50 p-9 font-bold text-6xl font-mono absolute bottom-0 right-0">
            hi there. i am a coder
          </h1>
          {/* // implement stuff here to load from json data about me*/}
        </div>
        <div
          id="design"
          className="p-9 text-start text-5xl text-[#E5FCFF] font-mono flex-grow font-bold "
        >
          and I love design
        </div>
        {/* Please take a moment to look at my projects */}
        <div
          id="welcome-in"
          onClick={() => navigate("/projects")}
          className="cursor-pointer mx-auto items-center rounded-2xl border-[#E5FCFF] text-[#E5FCFF] border-2 text-center mb-10 w-fit px-9"
        >
          <h1>Take a look</h1>
        </div>
      </div>
    );
  };

  return (
    <AnimatedPage>
      <div
        id="landing"
        className="flex-col flex bg-[#ABDAFC] bg-gradient-to-t from-[#B8336A]"
      >
        <Menu className="fixed" />
        <Content />
        <Footer />
      </div>
    </AnimatedPage>
  );
};

export default Landing;
