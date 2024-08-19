import React from "react";
// import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Menu = () => {
  const navigate = useNavigate();
  const framework = (
    <div className="flex items-center text-center m-3 text-[#C490D1] font-bold">
      <h1
        className="font-bold text-3xl cursor-pointer"
        onClick={() => navigate("/")}
      >
        Aurora Powell
      </h1>
      <div className="flex-grow invisible lg:visible">
        <button onClick={() => navigate("/")} className="px-3">
          home
        </button>
        <button onClick={() => navigate("/projects")} className="px-3">
          projects
        </button>
        <button className="px-3">about</button>
      </div>

      <button className="size-24 text-black lg:invisible md:visible">
      </button>
    </div>
  );
  return framework;
};

export default Menu;
