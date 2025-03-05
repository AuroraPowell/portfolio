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
      className="flex h-36 sticky top-0 md:m-3 sm:m-3 md:z-30 sm:z-30
      items-center  text-center  font-bold
       md:h-24 md:mt-0 sm:h-14 sm:mt-0 justify-around"
    >
      <div
        id="icon"
        className="absolute font-light left-0 pl-9 text-3xl flex items-end"
      >
        <div className="invisible lg:visible md:visible flex items-end">
          <h1 className="font-bold ">Aurora Powell</h1>
          <p className="text-2xl font-bold font-mono">.DEV</p>
        </div>
      </div>
      <div className="flex relative flex-grow items-center ">
        {/* ----------------
          
          v FIX THIS, STYLISTICALLY v
          
          --------------------- */}
        {nav ? (
          <div className="bg-purple-700 bg-opacity-30 w-full min-h-screen  z-20 m-10 flex-col">
            <p>home</p>
            <p>projects</p>
            <p>about</p>
          </div>
        ) : (
          <div className="flex-grow invisible lg:visible gap-10">
            <button
              onClick={() => navigate("/")}
              className="px-3 hover:text-fuchsia-500"
            >
              home
            </button>
            <button
              onClick={() => navigate("/projects")}
              className="hover:text-fuchsia-500"
            >
              projects
            </button>
            <button
              onClick={() => navigate("/about")}
              className="px-3 hover:text-fuchsia-500"
            >
              about
            </button>
          </div>
        )}
      </div>

      <button
        onClick={handleNav}
        className="absolute right-0 text-3xl mx-9 font-bold lg:invisible visible"
      >
        <GiHamburgerMenu />
      </button>
      {/* <WiMoonAltWaxingCrescent3
        className="size-24 items-center "
        onClick={() => navigate("/")}
      /> */}
    </div>
  );
  return framework;
};

export default Menu;
