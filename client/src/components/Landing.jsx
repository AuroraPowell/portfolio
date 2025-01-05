import React from "react";
import { useNavigate } from "react-router-dom";

import Footer from "./Footer";

import Menu from "./functional/menu";
import AnimatedPage from "./functional/AnimatedPage";

const Landing = () => {
  
  const navigate = useNavigate();

  const Content = () => {
    return (
      <div id="container" className="block flex-1 w-full px-10 h-full mx-auto">
        {/* <div id="landing-top" className=""><p>Thanks for checking out my portfolio.<br></br>Please have a look around. You never know what halls I'll be excavating out next.</p></div> */}
        <div id="shape" className="border-4 m-0.5">
          
          <div id="upper" className="bg-slate-100 bg-opacity-50 align-bottom 
          text-white text-3xl font-bold 
          min-h-72 m-9 flex flex-row ">
            <div id="sidebar" className="text-right pr-9 bg-cyan-900 flex-grow flex m-3 ">
              <ul className="my-auto grid grid-cols-1 gap-y-9">
                <li className="p-3">Series One</li>
                <li className="p-3">Series Two</li>
              </ul>
            </div>
            <div id="artContainer" className="grid grid-cols-2 w-4/5">
                {/* vvv 
                NEED TO CREATE ART CARDS, MODAL WHEN CLICKED, ALLOW NAV IN MODAL (left/right),
                and also 
                flex to fill body
                vvv */}
              <p className="bg-red-400 text-black p-3 m-2">include a change to styling</p>
              <p className="bg-cyan-400 p-3 m-2">hello</p>
              <p className="bg-red-400 p-3 m-2">hello</p>
              <p className="bg-cyan-400 p-3 m-2">hello</p>
            </div>
          </div>
          <div id="lower"></div>

        </div>
      </div>
    );
  };

  return (
    <AnimatedPage>
      <div
        id="landing"
        className="flex flex-col min-h-screen overflow-hidden
      
        from-[#9ecdee] bg-gradient-to-b to-[#B8336A] via-[#C490D1]"
      >

        /* Put in viewpoint breaks for mobile menu. */
        <Menu />
        
        <Content />
       
        <Footer />
      </div>
    </AnimatedPage>
  );
};

export default Landing;
