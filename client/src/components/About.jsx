import React from "react";
import Menu from "./functional/menu";
// import Footer from "./Footer";

import selfie from "../assets/selfie.jpg";

import AnimatedPage from "./functional/AnimatedPage";

const About = () => {
  const info = (
    <p className="font-light p-2 ">
      I am a full stack developer that has 6 years experience in front-end web
      development. <br></br>
      <br></br>{" "}
    </p>
  );

  const Abt = () => {
    return (
      <div id="content" className="items-center h-full grid grid-cols-3 my-9">
        <div className="w-3/4 h-96 mx-auto bg-white rounded-md"></div>
        <div className="w-2/3 h-96 mx-auto  bg-fuchsia-300"></div>
        <div className="w-3/4 h-96 mx-auto  bg-white rounded-md"></div>
        <div className="col-span-3 w-3/4 mx-auto m-9 h-96 bg-red-400 p-9">
          womp womp
        </div>
      </div>
    );
  };

  const Card = () => {
    return (
      <div
        className="z-30 bg-cover p-3 flex flex-col items-center text-center
      font-bold font-mono text-[#E5FCFF] mx-auto relative"
      >
        {/* <InRoll> */}
        <div className="relative z-30 rounded-full lg:size-64 md:size-52 -mb-24">
          <img src={selfie} className="absolute rounded-full" />
        </div>
        {/* </InRoll> */}

        <div
          id="card"
          className="relative border-[#E5FCFF] border-b-0 border-x-4 bg-cover
          bg-[#E5FCFF] bg-gradient-to-t from-[#B8336A] via-[#C490D1]
            rounded-b-3xl w-80  "
        >
          <div
            id="ball holder"
            className=" from-[#B8336A] via-[#ACACDE] to-[#ACACDE] bg-gradient-to-t rounded-b-full h-36"
          ></div>
          {/* *** This is where card info should go. *** */}
          <div className="flex-grow flex-col p-9 pt-0 gap-2 divide-y-2 text-[#E5FCFF] divide-[#B8336A]">
            <p className="py-3 text-xl lowercase">Aurora Powell</p>
            <div className="gap-9 pt-3">
              {info}

              {/* <button
                className="tracking-widest lowercase rounded-xl
               m-3 p-3 px-9 bg-transparent border-2 border-[#E5FCFF]
              text-black hover:text-[#E5FCFF]"

              onClick={() => onClick}
              >
                Contact Me
              </button> */}
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="min-h-screen  flex flex-col mx-auto   bg-black z-30 border-white border-8">
      {/* <Menu /> */}
      <Abt />
      <div id="card-loader" className="flex-grow mx-auto p-9"></div>
      <div className="pt-9 text-white w-full mx-auto h-fit"></div>
    </div>
  );
};

export default About;

// OLD COLOR WAY
// to-[#ABDAFC] to-65% from-[#B8336A] bg-gradient-to-b
