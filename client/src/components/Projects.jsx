import React from "react";

import Footer from "./Footer";

import Menu from "./functional/menu";
import AnimatedPage from "./functional/AnimatedPage";

const Projects = () => {
  const Card = () => {
    return (
      <div
        className="h-96 w-80 relative
      bg-lime-500 opacity-90 rounded-lg flex"
      >
        <div className="bg-white flex-grow text-center m-3 rounded-xl opacity-85 ">
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
