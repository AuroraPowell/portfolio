import React from "react";
import Menu from "./functional/menu";
import Footer from "./Footer";
import AnimatedPage from "./functional/AnimatedPage";

const About = () => {
  const Card = () => {
    return (
      <div
        className="p-3 flex flex-col items-center text-center
      font-bold font-mono text-[#E5FCFF] mx-auto "
      >
        <div
          id="circle showcase"
          className="text-[#E5FCFF] mt-0 -mb-36 size-48 z-20 from-50% text-transparent bg-gradient-radial to-[#E5FCFF] from-[#ABDAFC]
            rounded-full items-center justify-center flex"
        ></div>
        <div className=" opacity-50 h-56 rounded-t-full rounded-b-none  absolute bottom-0 divide-x-4 z-10 divide-white"></div>
        <div
          id="card"
          className="relative border-[#E5FCFF] border-b-0 border-x-4
          bg-[#E5FCFF] bg-gradient-to-t from-[#B8336A] via-[#C490D1]
            rounded-b-3xl w-80  mx-24 my-9 "
        >
          <div
            id="ball holder"
            className=" from-[#B8336A] via-[#ACACDE] bg-gradient-to-t rounded-b-full h-36"
          ></div>
          {/* *** This is where card info should go. *** */}
          <div className="z-0 bg-transparent flex-grow flex-col p-9 pt-0 gap-2 divide-y-2  divide-[#ABDAFC]">
            <p className="py-3 text-xl lowercase">Aurora Powell</p>
            <div className="gap-9 pt-3">
              <p className="font-light">
                I am a full stack developer that has 10 years experience in
                front-end web development.{" "}
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
      <div className="min-h-screen to-[#ABDAFC] from-[#B8336A] bg-gradient-to-b flex flex-col mx-auto">
        <Menu className="flex-grow" />

        <div id="card-loader" className="w-full flex-grow mx-auto">
          <Card />
        </div>
        <Footer className="flex-grow" />
      </div>
    </AnimatedPage>
  );
};

export default About;
