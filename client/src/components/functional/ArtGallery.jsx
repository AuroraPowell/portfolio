import React from "react";
import { useState, useEffect } from "react";

import data from "../art-pieces/art.json";
import Modal from "../projects/countme.in/functions/Modal";

const ArtGallery = () => {
  

  const [artList, setArtList] = useState(data)

  const [modalOpen, setModalOpen] = useState(false);
  const [artFocus, setArtFocus] = useState();
  const [seriesFocus, setSeriesFocus] = useState();

  // creates responsively created list from mapping JSON file
  const CreateSidebar = () => {
    let seriesTitles = [];
    let list = [];

    data.map((art) => {
      if (!seriesTitles.includes(art.series)) {
        seriesTitles.push(art.series);
      }
    });

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

  // Art Object
  const Art = (props) => {
    let title = props.title
    let year = props.year
    let medium = props.medium
    let size = props.size
    let url = props.imgPath
    let series = props.series

    return (
      // display art, alt text, and hover info
      <div >

      </div>
    )
  }

  // creates list of Art Objects
  const sortedArt = () => {
    let list = []

    // STEPS NEEDED
    // check seriesFocus, load images with same series tag
    // if no seriesFocus, load all images 
    // map artList and create Art objects for each

    return(
      <div>
        // list of Art objects
        {artList.map((art) => {
          <Art id={art.title} props={art}/>
        })}
      </div>
    )
  }

  return (
    <div>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}></Modal>
      <CreateSidebar />
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
