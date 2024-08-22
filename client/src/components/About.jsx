import React from "react";
import Menu from "./functional/menu";
import Footer from "./Footer";

import selfie from "../assets/selfie.jpg";

import AnimatedPage from "./functional/AnimatedPage";
import InRoll from "./functional/inRoll";

const About = () => {
  const Card = () => {
    return (
      <div
        className="bg-cover p-3 flex flex-col items-center text-center
      font-bold font-mono text-[#E5FCFF] mx-auto w-fit"
      >
        <InRoll>
          <div className="relative rounded-full size-64 -mb-24">
            <div
              id="ball"
              className="absolute size-64 rounded-full z-20
          bg-gradient-radial from-transparent via-[#ABDAFC] via-75% to-80% to-[#E5FCFF] from-30% opacity-80 bg-cover"
            ></div>
            <img src={selfie} className="absolute rounded-full z-10" />
          </div>
        </InRoll>

        <div
          id="card"
          className="z-20 relative border-[#E5FCFF] border-b-0 border-x-4
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
              <p className="font-light p-2 ">
                I am a full stack developer that has 10 years experience in
                front-end web development. I graduated from Bridgewater College
                with a Bachelor's Degree in Computer Science with a minor in
                Art.{" "}
              </p>
              <button
                className="tracking-widest lowercase rounded-xl
               m-3 p-3 px-9 bg-transparent border-2 border-[#E5FCFF]
              text-black hover:text-[#E5FCFF]"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <AnimatedPage>
      <div className="min-h-screen to-[#ABDAFC] to-65% from-[#B8336A] bg-gradient-to-b flex flex-col mx-auto">
        <Menu />

        <div id="card-loader" className="w-full flex-grow mx-auto p-9">
          <Card />
        </div>
        <Footer />
      </div>
    </AnimatedPage>
  );
};

export default About;
