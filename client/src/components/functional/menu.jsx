import React from "react";
// import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { WiMoonAltWaxingCrescent3 } from "react-icons/wi";
import { useState } from "react";

const Menu = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };


  const framework = (
    <div
      id="menu"
      className="flex flex-row justify-between h-36 sticky start-0 
      items-center  text-center  font-bold font-serif
        bg-black text-slate-200"
    >
      <div
        id="icon"
        className="absolute font-light left-0 pl-9 text-3xl items-end"
      >
        <div className="flex invisible md:visible lg:visible flex-grow flex-col items-end w-fit
        ">
          <h1 className="font-bold ">Aurora Powell</h1>
          <h3 className="text-sm">Artist // Full-Stack Developer</h3>
        </div>
        
      </div>
      <div className="flex flex-grow items-center w-fit">

        {/* ----------------
          
          v FIX THIS, STYLISTICALLY v
          
          --------------------- */}
        {/* {nav ? (
          <div className="w-full min-h-screen  z-20 m-10 flex-col">
            <p>home</p>
            <p>projects</p>
            <p>about</p>
          </div>
        ) : ( */}
          <div className="flex-grow lg:visible gap-10">
            <button
              onClick={() => navigate("/")}
              className="px-3 hover:text-red-400"
            >
              home
            </button>
            {/* <button
              onClick={() => navigate("/projects")}
              className="hover:text-fuchsia-500"
            >
              projects
            </button> */}
            <button
              onClick={() => navigate("/about")}
              className="px-3 hover:text-red-400"
            >
              about
            </button>
          </div>
        {/* )} */}
      </div>

      {/* <button
        onClick={handleNav}
        className="absolute right-0 text-3xl mx-9 font-bold lg:invisible visible"
      >
        <GiHamburgerMenu />
      </button> */}
      {/* <WiMoonAltWaxingCrescent3
        className="size-24 items-center "
        onClick={() => navigate("/")}
      /> */}
    </div>
  );
  return framework;
};

export default Menu;
