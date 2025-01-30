import React from "react";
import { useState, useEffect } from "react";

import data from "../art-pieces/art.json";
import Modal from "../projects/countme.in/functions/Modal";

const ArtGallery = () => {
  

  const [artList, setArtList] = useState(data)

  const [modalOpen, setModalOpen] = useState(false);
  const [artFocus, setArtFocus] = useState();
  const [seriesFocus, setSeriesFocus] = useState("");

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
      let value = selection
      console.log(value)
      setSeriesFocus(value);
      
    }

    return (
      <div className="text-slate-100 text-8xl italic font-bold text-end my-auto px-36">
        <div className="flex justify-evenly ">
          {seriesTitles.map((list) => {
            return (
              <button
                key={list}
                className="text-5xl  hover:text-slate-900"
                onClick={() => handleClick(list)}
              >
                {list}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  

  // creates list of Art Objects
  const CreateGallery = () => {
    let list = []

    // STEPS NEEDED
    // check seriesFocus, load images with same series tag
    // if no seriesFocus, load all images 
    // map artList and create Art objects for each
    seriesFocus == "" ? data.map((art) => { list.push(art) }) 
    : (data.map((art) => { 
        if(!list.includes(art)){
          if(art.series == seriesFocus){
            list.push(art)
          }
        }}))

        // Art Object
  const Art = (obj) => {
    console.log(obj)
    // let title =   artObj.title
    // let year =    artObj.year
    // let medium =  artObj.medium
    // let size =    artObj.size
    // let url =     artObj.url
    // let series =  artObj.series

    // console.log(obj)
    return (
      // display art, alt text, and hover info
      <div >
        <p>{obj.title}</p>
      </div>
    )
  }
    
    return (
      <div>
        {list.map((art) => {return(<Art id={art.title} obj={art} />)})}
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
