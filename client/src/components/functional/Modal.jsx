import React from "react";
// import modalBG from "../assets/modalBG.png";
// import newBG from "../../../../assets/divBG.png";

export default function Modal({ open, onClose, children }) {
  const style = {
    backgroundImage: `url(${newBG})`,
  };

  return (
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
        // style={style}
      >
        {children}
      </div>
    </div>
  );
}
