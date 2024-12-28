import React from "react";
import { useNavigate } from "react-router-dom";

import Footer from "./Footer";

import Menu from "./functional/menu";
import AnimatedPage from "./functional/AnimatedPage";

const Landing = () => {
  
  const navigate = useNavigate();

  const Content = () => {
    return (
      <div id="container" className="block flex-1 w-4/5 h-full mx-auto">
        {/* <div id="landing-top" className=""><p>Thanks for checking out my portfolio.<br></br>Please have a look around. You never know what halls I'll be excavating out next.</p></div> */}
        <div id="shape" className="border-4 inset-32">
          
          <div id="upper" className="bg-transparent align-bottom text-white text-3xl font-bold min-h-72 m-9">
            
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
