import React from "react";

import Footer from "./Footer";

import Menu from "./functional/menu";
import AnimatedPage from "./functional/AnimatedPage";

const Projects = () => {
  const Card = () => {
    return (
      <div
        className="h-96 w-80 relative
      bg-lime-500 opacity-90 rounded-3xl flex"
      >
        <div className="bg-white flex-grow text-center m-3 rounded-3xl opacity-85 ">
          <div className=" h-64 rounded-t-3xl bg-black"></div>
          <p>Hi There</p>
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
          className="pt-20 place-content-evenly flex-grow gap-x-60 gap-y-16
            grid lg:grid-cols-2 md:grid-cols-1"
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
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
