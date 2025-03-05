import React from "react";
import { useState, useEffect } from "react";

import data from "./art.json";
import Modal from "../projects/countme.in/functions/Modal";

import { IoIosCloseCircle } from "react-icons/io";

const ArtGallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const [artList, setArtList] = useState([]);
  let seriesList = [];

  const [artFocus, setArtFocus] = useState();
  const [seriesFocus, setSeriesFocus] = useState("");

  //=======================================//
  //        FEB 26 To-Do UPDATES
  //   - Fix aspect ratio scaling
  //   - Grid display
  //        /> come up with code to detect size to adjust grid setting (Tailwind feature)
  //   - Create button to "view more"
  //   - Make it so images disappear before hitting menu.
  //        /> will require referencing menu component
  //=======================================//

  // creates responsively created list from mapping JSON file

  // load page - load list once and take series titles along with creating art card.

  useEffect(() => {
    setLoading(true);
    setArtList(data);
    setLoading(false);
  }, []);

  const CreateSidebar = () => {
    // let seriesTitles = [];
    // data.map((art) => {
    //   if (!seriesTitles.includes(art.series)) {
    //     seriesTitles.push(art.series);
    //   }
    // });

    artList.map((art) => {
      if (!seriesList.includes(art.series)) {
        seriesList.push(art.series);
      }
    });

    function handleClick(selection) {
      console.log("You've selected: " + selection);
      let value = selection;
      setSeriesFocus(value);
    }
    return (
      <ul
        className="h-screen text-xl italic font-bold w-1/12 pl-3 flex flex-col bg-red-500"
      >
        {seriesList.map((series) => (
          <button
            className="hover:text-fuchsia-500 text-left"
            onClick={() => handleClick(series)}
          >
            {series}
          </button>
        ))}
      </ul>
    );
  };

  // creates list of Art Objects
  const CreateGallery = () => {
    // rework the following
    // this will require pulling artList and then adding new piece. like: {setArtList( [...artList, art] )}

    let filteredGallery = [];

    seriesFocus
      ? (filteredGallery = artList.filter((art) => art.series == seriesFocus))
      : "";

    // console.log(artList.filter((art) => art.series == "wet"));

    // console.log("Filtered gallery: " + filteredGallery);
    // seriesFocus == ""
    //   ? data.map((art) => list.push(art))
    //   : data.map((art) => {
    //       setLoading(true);
    //       if (!artList.includes(art)) {
    //         if (art.series == seriesFocus) {
    //           list.push(art);
    //         }
    //       }
    //       setLoading(false);
    //     });

    const ArtCard = ({ art }) => {
      return (
        <div id="art_card" className={art.horizontal == "y" ? "col-span-2 gap-9 gap-y-9 overflow-hidden content-center": "gap-9 gap-y-9 overflow-hidden content-center"}>
          <img 
          // width={art.horizontal == "y" ? "95%": "75%"}
            src={art.imgPath}
            onClick={() => {
              setModalOpen(true);
              setArtFocus(art);
            }}
            
            className="mx-auto hover:opacity-80 hover:scale-95 scale-90 "
          />
        </div>
      );
    };

    return (
      <ul id="art_list" className="z-0 grid grid-cols-3 gap-y-3 content-center w-11/12">
        {seriesFocus == ""
          ? artList.map((art) => <ArtCard id={art.title} art={art} />)
          : filteredGallery.map((art) => <ArtCard id={art.title} art={art} />)}
      </ul>
    );
  };

  return (
    <div id="sidebar_and_gallery" className="min-h-screen flex">
      {artFocus ? (
        <Modal
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
            setArtFocus();
          }}
          className="bg-slate-50 z-30"
        >
          <div className="flex flex-col items-center mx-auto bg-slate-50 bg-opacity-30">
            <img
              src={artFocus.imgPath}
              className="flex-grow max-w-md mx-auto"
            />
            <div className="text-3xl bg-teal-400 m-5">
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
      {loading ? (
        <p className="font-bold text-7xl">Loading</p>
      ) : (
        <CreateGallery />
      )}
    </div>
  );
};

export default ArtGallery;

// {
//     "title": "",
//     "year": "",
//     "medium": "",
//     "size": "",
//     "imgPath": "",
//     "series": ""
// }
