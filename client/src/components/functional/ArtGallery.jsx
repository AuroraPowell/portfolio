import React from "react";
import { useState, useEffect } from "react";

import data from "./art.json";
import Modal from "../projects/countme.in/functions/Modal";

const ArtGallery = () => {
  const [artList, setArtList] = useState(data);

  const [modalOpen, setModalOpen] = useState(false);
  const [artFocus, setArtFocus] = useState();
  const [seriesFocus, setSeriesFocus] = useState("");

  // creates responsively created list from mapping JSON file
  const CreateSidebar = () => {
    let seriesTitles = [];

    data.map((art) => {
      if (!seriesTitles.includes(art.series)) {
        seriesTitles.push(art.series);
      }
    });

    function handleClick(selection) {
      let value = selection;
      // console.log(value)
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
                onClick={() => {
                  handleClick(list);
                  console.log("Series is: " + list);
                  setArtList(list);
                }}
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
    let list = [];

    // STEPS NEEDED
    // check seriesFocus, load images with same series tag
    // if no seriesFocus, load all images
    // map artList and create Art objects for each

    seriesFocus == ""
      ? data.map((art) => {
          list.push(art);
        })
      : createGallery();

    // this will require pulling artList and then adding new piece. like: {setArtList( [...artList, art] )}
    function createGallery() {
      data.map((art) => {
        if (!list.includes(art)) {
          if (art.series == seriesFocus) {
            list.push(art);
          }
        }
      });
    }

    const ArtCard = ({ art }) => {
      return (
        <div className="rounded-xl w-fit p-3">
          <img
            src={art.imgPath}
            onClick={() => {
              setModalOpen(true);
              setArtFocus(art);
              console.log(artFocus);
            }}
            className="h-40"
          />
        </div>
      );
    };

    return (
      <div className="p-5">
        <ul className="flex">
          {list.map((art) => (
            <ArtCard id={art.title} art={art} />
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div>
      {artFocus ? (
        <Modal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          className="w-2/3 mx-auto"
        >
          <div className="items-center">
            <img src={artFocus.imgPath} className="w-1/2 mx-auto" />
            <div className="text-3xl text-white bg-teal-400 text-right m-5">
              <p>{artFocus.title}</p>
              <p>{artFocus.year}</p>
              <p>{artFocus.medium}</p>
              <p>{artFocus.size}</p>
            </div>
          </div>
        </Modal>
      ) : (
        ""
      )}
      <CreateSidebar />
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
//     "series": ""
// }

// const Art = (title, year, medium, size, url, series) => {

//   console.log(title)

//   let artTitle = title
//   // let year =    artObj.year
//   // let medium =  artObj.medium
//   // let size =    artObj.size
//   // let url =     artObj.url
//   // let series =  artObj.series
//   const card =
//   (<div>
//     {artTitle}
//   </div>)
//   // console.log(obj)
//   return (
//     // display art, alt text, and hover info
//     <div >
//       {card}
//     </div>
//   )}
