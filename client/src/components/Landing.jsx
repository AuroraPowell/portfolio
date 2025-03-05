import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Footer from "./Footer";

import Menu from "./functional/menu";
import AnimatedPage from "./functional/AnimatedPage";
import ArtGallery from "./functional/ArtGallery";

const Landing = () => {
  const [focus, setFocus] = useState(true);

  const navigate = useNavigate();

  const Content = () => {
    return (
      <div id="container" className="  mx-auto">
        <ArtGallery />
      </div>
    );
  };

  return (
    <AnimatedPage>
      <div id="landing" className="content-evenly flex-col">
        <Menu className=""/>
        <Content className=""/>
        {/* FOOTER SIZING ISSUE <Footer />  */}
      </div>
    </AnimatedPage>
  );
};

export default Landing;

// PREVIOUS COLOR PALETTE
// from-[#9ecdee] bg-gradient-to-b to-[#B8336A] via-[#C490D1]

{
  /* <div
          id="shape"
          className="border-4 border-opacity-50 rounded-2xl h-fit m-3 items-center p-9 bg-opacity-20 bg-slate-50"
        >  </div> */
}
