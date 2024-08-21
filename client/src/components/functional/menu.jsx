import React from "react";
// import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { WiMoonAltWaxingCrescent3 } from "react-icons/wi";

const Menu = () => {
  const navigate = useNavigate();
  const framework = (
    <div
      className="flex h-36 ml-5 m-2 
      items-center text-center text-[#E5FCFF] font-bold"
    >
      <div
        className="inline-flex text-start cursor-pointer font-bold font-mono"
        onClick={() => navigate("/")}
      >
        <h1>Aurora Powell</h1>
        <p>.DEV</p>
      </div>

      <div className="flex flex-grow ">
        <div className="flex-grow invisible lg:visible">
          <button onClick={() => navigate("/")} className="px-3">
            home
          </button>
          <button onClick={() => navigate("/projects")} className="px-3">
            projects
          </button>
          <button onClick={() => navigate("/about")} className="px-3">
            about
          </button>
        </div>

        <button className="text-3xl mx-9 font-bold lg:invisible visible">
          <GiHamburgerMenu />
        </button>
      </div>
      {/* <WiMoonAltWaxingCrescent3
        className="size-24 items-center "
        onClick={() => navigate("/")}
      /> */}
    </div>
  );
  return framework;
};

export default Menu;
