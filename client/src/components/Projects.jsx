import React from "react";

import Footer from "./Footer";

import Menu from "./functional/menu";
import AnimatedPage from "./functional/AnimatedPage";

const Projects = () => {
  const Card = () => {
    return (
      <div className=" text-[#E5FCFF] flex flex-col items-center text-center font-bold font-mono ">
        <div
          id="circle showcase"
          className="-mb-36 h-52 w-52 z-20
        bg-[#E5FCFF] rounded-full items-center justify-center flex"
        ></div>
        <div
          id="card"
          className=" bg-[#E5FCFF] bg-gradient-to-t from-[#B8336A] via-[#C490D1] 
            rounded-b-3xl w-80  mx-24 my-9 h-64"
        >
          {" "}
          <div
            id="ball holder"
            className=" from-[#B8336A] via-[#ACACDE] bg-gradient-to-t rounded-b-full h-36"
          >
            {/* <div className="h-fit p-3 inline-block">
              <h1 className="text-2xl pb-2">Project Name </h1>
              <p className="text-sm line-clamp-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in{" "}
              </p>
            </div> */}
          </div>
          {/* This is where title and desc should go.  */}
          <div className="flex flex-col overflow-auto">
            <p className="text-lime-300">"Project Name"</p>
            <br></br>
            <div className="inline-flex mb-9">
              <p className="line-clamp-2 overflow-y-auto overflow-x-auto m-5 mt-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in
              </p>
              <button className="m-3 rounded-xl bg-[#C490D1] border-2 border-[#E5FCFF]">
                Click
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <AnimatedPage>
      <div className="via-[#ABDAFC] from-[#B8336A] bg-gradient-to-b flex flex-col mx-auto">
        <Menu />

        <div className="min-h-screen flex-grow mx-auto">
          <div
            id="temp"
            className="grid lg:grid-cols-2 md:grid-cols-1 flex-grow"
          >
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div id="card-loader"></div>
        </div>
        <Footer />
      </div>
    </AnimatedPage>
  );
};
export default Projects;
