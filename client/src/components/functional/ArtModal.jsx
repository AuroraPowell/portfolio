import React from "react";
// import modalBG from "../assets/modalBG.png";
// import newBG from "../../../../assets/divBG.png";

export default function ArtModal({ open, onClose, children }) {
  return (
    <div
      onClick={onClose}
      className={`
            fixed inset-0 flex justify-center items-center 
            transition-colors bg-white 
            ${open ? "visible" : "invisible"}
        `}
    >
      <div onClick={(e) => e.stopPropagation()} className="my-5">
        {children}
      </div>
    </div>
  );
}
