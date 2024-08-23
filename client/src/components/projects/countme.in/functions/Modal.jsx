import React from "react";
import modalBG from "../assets/modalBG.png";

export default function Modal({ open, onClose, children }) {
  const style = {
    backgroundImage: `url(${modalBG})`,
  };

  return (
    //backdrop
    <div
      onClick={onClose}
      className={`
            fixed inset-0 flex justify-center items-center 
            transition-colors
            ${open ? "visible" : "invisible"}
        `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={style}
        className={`
                    bg-white text-black rounded-3xl shadow p-6 transition-all bg-cover
                    ${open ? "scale-100 opacity-100" : "scale 125 opacity-0"}
                `}
      >
        {children}
      </div>
    </div>
  );
}
