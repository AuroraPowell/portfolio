import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {host, pathname, key} = location
  return (
    <div
      className={`flex flex-row h-28 mt-9 space-x-32 w-svw justify-center items-stretch text-right 
    font-thin font-mono ${pathname === "/about" ? `text-fuchsia-950` : `text-white`}`}
    >
      {/* <div id="phrase">Discerning would ruin it.</div> */}
      <p className="text-left">
        Troy, <br></br>New York
      </p>
      <div id="social" className="text-right">
        {/* load in my socials via json */}
        <ul>
          <li>LinkedIn</li>
          <li>Github</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
