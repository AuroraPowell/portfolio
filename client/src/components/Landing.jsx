import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Footer from "./Footer";

import Menu from "./functional/menu";
import AnimatedPage from "./functional/AnimatedPage";
import ArtGallery from "./functional/ArtGallery";

const Landing = () => {

  const [focus, setFocus] = useState(true)
  
  const navigate = useNavigate();

  const Content = () => {
    return (
      
      <div id="container" className="block flex-1 w-full px-10 h-full mx-auto">

        <div id="shape" className="border-4 m-0.5 p-9">
          
          <ArtGallery />

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
