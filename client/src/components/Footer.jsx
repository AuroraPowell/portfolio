
import React from "react";
const Footer = () => {
  return (
    <div className="inline-flex p-3 justify-around text-right font-italic font-mono text-[#E5FCFF] bottom-0">
      <div id="phrase">Discerning would ruin it.</div>
      <p className="text-center">
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
