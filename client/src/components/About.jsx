import React from "react";
import Menu from "./functional/menu";
// import Footer from "./Footer";

import selfie from "../assets/selfie.jpg";
import pose1 from "/me/pose-1.jpg"
import pose2 from "/me/pose-2.jpg"
import talk from "/me/talking.jpg"

import AnimatedPage from "./functional/AnimatedPage";

const About = () => {
  const info = (
    <p className="font-bold text-slate-900 p-2 text-xl ">
      Aurora Powell is a queer multimedia artist living and working in New York's Capital Region.
      They were born in central Virginia and moved to upstate New York in 2019. 
      <br /><br />In their spare time outside 
      of creating, they find themselves biking, gardening, reading speculative fiction, 
      and watching horror films with their queer family. 
      {/* <br></br>
      <br></br>{" "} */}
    </p>
  );

const Card = () => {
    return (
      <div
        className="z-30 bg-cover p-3 flex flex-col items-center
      font-bold font-mono  mx-auto relative"
      >
        {/* <InRoll> */}
        <div className="relative z-30 rounded-full lg:size-64 md:size-52 -mb-24">
          <img src={selfie} className="absolute rounded-full" />
        </div>
        {/* </InRoll> */}

        <div
          id="card"
          className="relative border-[#E5FCFF] border-b-0 border-x-4 bg-cover
          bg-[#d2faff] bg-gradient-to-t from-[#df4887] via-[#C490D1]
            rounded-b-3xl w-96  "
        >
          <div
            id="ball holder"
            className=" from-[#B8336A] via-[#ACACDE] to-[#ACACDE] bg-gradient-to-t 
            rounded-b-full h-36"
          ></div>
          {/* *** This is where card info should go. *** */}
          <div className="flex-grow flex-col p-3 pt-0  divide-[#B8336A]">
            
            <div className="gap-9 pt-3">
              {info}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Abt = () => {
    return (
      <div id="container" className="flex">
        
        <div id="content" className="grid grid-cols-3 my-5 mx-9 ">
          <img src={pose1} className="rounded-br-3xl"/>
          <div id="centerColumn">
            {/* <img src={selfie} className="mx-auto rounded-full" /> */}
            <Card />
          </div>
          <img src={talk} className="rounded-bl-3xl" />
        </div>

      </div>
    );
  };

  

  return (
    <div className="min-h-screen center-   bg-black z-30 border-white border-8">
      {/* <Menu /> */}
      <Abt />
    </div>
  );
};

export default About;

// OLD Stuff
// to-[#ABDAFC] to-65% from-[#B8336A] bg-gradient-to-b


// const RetiredCard = () => {
  //   return (
  //     <div
  //       className="z-30 bg-cover p-3 flex flex-col items-center text-center
  //     font-bold font-mono text-[#E5FCFF] mx-auto relative"
  //     >
  //       {/* <InRoll> */}
  //       <div className="relative z-30 rounded-full lg:size-64 md:size-52 -mb-24">
  //         <img src={selfie} className="absolute rounded-full" />
  //       </div>
  //       {/* </InRoll> */}

  //       <div
  //         id="card"
  //         className="relative border-[#E5FCFF] border-b-0 border-x-4 bg-cover
  //         bg-[#E5FCFF] bg-gradient-to-t from-[#B8336A] via-[#C490D1]
  //           rounded-b-3xl w-80  "
  //       >
  //         <div
  //           id="ball holder"
  //           className=" from-[#B8336A] via-[#ACACDE] to-[#ACACDE] bg-gradient-to-t rounded-b-full h-36"
  //         ></div>
  //         {/* *** This is where card info should go. *** */}
  //         <div className="flex-grow flex-col p-9 pt-0 gap-2 divide-y-2 text-[#E5FCFF] divide-[#B8336A]">
  //           <p className="py-3 text-xl lowercase">Aurora Powell</p>
  //           <div className="gap-9 pt-3">
  //             {info}

  //             {/* <button
  //               className="tracking-widest lowercase rounded-xl
  //              m-3 p-3 px-9 bg-transparent border-2 border-[#E5FCFF]
  //             text-black hover:text-[#E5FCFF]"

  //             onClick={() => onClick}
  //             >
  //               Contact Me
  //             </button> */}
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };