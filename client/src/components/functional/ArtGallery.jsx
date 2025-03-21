import React from "react";
import { useState, useEffect } from "react";

import data from "./art.json";
import Modal from "../functional/Modal";

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
  //   - Create button to "view more"
  //   - Make it so images disappear before hitting menu.
  //        /> will require referencing menu component & using IntersectionObserver
  //=======================================//

  // creates responsively created list from mapping JSON file

  useEffect(() => {
    setLoading(true);
    setArtList(data);
    setLoading(false);
  }, []);

  const CreateSidebar = () => {
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
        className="h-screen text-xl italic font-bold  pl-3 
      flex flex-col border-r-4 border-slate-200 w-fit"
      >
        {seriesList.map((series) => (
          <button
            className="hover:text-fuchsia-500 py-5 font-sans text-left text-slate-200"
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
    let filteredGallery = [];

    seriesFocus
      ? (filteredGallery = artList.filter((art) => art.series == seriesFocus))
      : "";

    const ArtCard = ({ art }) => {
      return (
        <div
          id="art_card"
          className={
            art.horizontal == "y"
              ? "col-span-2 gap-9 gap-y-9 overflow-hidden content-center"
              : "gap-9 gap-y-9 overflow-hidden content-center"
          }
        >
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
      <ul
        id="art_list"
        className=" grid lg:grid-cols-3 sm:grid-cols-2 gap-y-3 content-center w-11/12"
      >
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
          className=""
        >
          <div className="flex flex-col items-center mx-auto">
            <img
              src={artFocus.imgPath}
              className="flex-grow max-w-md mx-auto"
            />
            <div className="text-3xl m-5">
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
