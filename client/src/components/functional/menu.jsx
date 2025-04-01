import React from "react";
// import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { WiMoonAltWaxingCrescent3 } from "react-icons/wi";
import { useState } from "react";

const Menu = () => {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const handleNav = () => {
    setNav(!nav);
  };

  const framework = (
    <div
      id="menu"
      className="flex flex-row flex-grow 
      h-36 sticky 
      items-center text-center start-0 
    bg-black text-slate-200 font-bold font-serif"
    >
      <div id="icon" className=" items-start font-light text-3xl">
        <div
          className="flex md:visible invisible flex-col items-end
        "
        >
          <h1 className="font-bold ">Aurora Powell</h1>
          <h3 className="text-sm">Artist // Developer</h3>
        </div>
      </div>
      <div className="flex w-full bg-red-400 justify-center lg:visible gap-10 h-fit">
        <button
          onClick={() => navigate("/")}
          className="px-3 hover:text-red-400"
        >
          home
        </button>

        <div className="flex flex-col">
          <button
            className="hover:text-fuchsia-500"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            coding
          </button>

          {/* **** !!![[ Implement the below dropdown menu for Mobile menu ]]!!! *** */}

          {/* {isDropdownVisible && (
            <button
              className="hover:text-fuchsia-500 relative"
              onClick={() => navigate("/projects")}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              projects
            </button>
          )} */}
        </div>
        <button
          onClick={() => navigate("/about")}
          className="px-3 hover:text-red-400"
        >
          about
        </button>
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
