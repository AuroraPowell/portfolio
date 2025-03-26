import React from "react";
// import modalBG from "../assets/modalBG.png";
// import newBG from "../../../../assets/divBG.png";

export default function ArtModal({ open, onClose, children }) {
  return (
    <div
      onClick={onClose}
      className={`
            fixed inset-0 flex justify-center my-auto min-h-screen items-center 
            transition-colors bg-black 
            ${open ? "visible" : "invisible"}
        `}
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
}
