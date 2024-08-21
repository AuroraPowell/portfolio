import React from "react";

import Footer from "./Footer";

import Menu from "./functional/menu";
import AnimatedPage from "./functional/AnimatedPage";

const Projects = () => {
  const Card = () => {
    return (
      <div
        className="h-96 w-80 m-1 relative
      bg-lime-400 opacity-90 rounded-3xl"
      >
        <p></p>
      </div>
    );
  };
  return (
    <AnimatedPage>
      <div className="min-h-screen to-[#B8336A] from-[#C490D1] via-[#9ecdee] bg-gradient-to-b flex flex-col mx-auto">
        <Menu className="flex-grow" />

        <div
          id="card-loader"
          className=" flex-grow mx-auto gap-3 p-9
            grid lg:grid-cols-3 md:grid-cols-1"
        >
          <Card />
          <Card />
          <Card />
        </div>
        <Footer className="flex-grow" />
      </div>
    </AnimatedPage>
  );
};
export default Projects;
