import React from "react";
import { useState, useEffect } from "react";

import data from "../art-pieces/art.json";
import Modal from "../projects/countme.in/functions/Modal";

const ArtGallery = () => {
  const [open, setOpen] = useState(false);

  const [artFocus, setArtFocus] = useState();
  const [seriesFocus, setSeriesFocus] = useState();

  // creates responsively created list from mapping JSON file
  const CreateGallery = () => {
    let seriesTitles = [];
    let list = [];

    data.map((art) => {
      if (!seriesTitles.includes(art.series)) {
        seriesTitles.push(art.series);
      }
    });

    const createList = () => {
      return <div></div>;
    };

    function handleClick(selection) {
      setSeriesFocus(selection);
    }

    return (
      <div className="text-slate-100 text-8xl italic font-bold text-end my-auto px-36">
        <div className="flex justify-evenly ">
          {seriesTitles.map((series) => {
            return (
              <button
                key={series}
                className="text-5xl  hover:text-slate-900"
                onClick={() => handleClick(series)}
              >
                {series}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)}></Modal>
      <CreateGallery />
    </div>
  );
};

export default ArtGallery;

{
  /* IMPORTANT: Below is the format for saving art pieces to art.json */
}
// {
//     "title": "",
//     "year": "",
//     "medium": "",
//     "size": "",
//     "imgPath": "",
//     "section": ""
// }
