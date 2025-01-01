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
          min-h-72 m-9 flex flex-row">
            <div id="sidebar" className="1/5 bg-cyan-900">
              <ul>
                <li>Series One</li>
                <li>Series Two</li>
              </ul>
            </div>
            <div id="artContainer" className="4/5 bg-slate-600 w-full
            grid grid-cols-2">
              <p className="bg-red-400 text-black">include a change to styling</p>
              <p className="bg-cyan-400 ">hello</p>
              <p className="bg-red-400 ">hello</p>
              <p className="bg-cyan-400 ">hello</p>
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
