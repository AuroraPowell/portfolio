import React from "react";
import { useState, useEffect } from "react";

import data from "./art.json";
import ArtModal from "./ArtModal";

import { IoIosCloseCircle } from "react-icons/io";

const ArtGallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [screen, setScreen] = useState();

  const [artList, setArtList] = useState([]);
  let seriesList = [];

  const [artFocus, setArtFocus] = useState();
  const [seriesFocus, setSeriesFocus] = useState("");

  // creates responsively created list from mapping JSON file

  useEffect(() => {
    setLoading(true);
    setArtList(data);
    setLoading(false);
  }, []);

  const CreateSidebar = () => {
    // function to create list of series titles
    artList.map((art) => {
      if (!seriesList.includes(art.series)) {
        seriesList.push(art.series);
      }
    });

    // function activated on selecting series
    function handleClick(selection) {
      console.log("You've selected: " + selection);
      let value = selection;
      setSeriesFocus(value);
    }
    return (
      // renders series titles as menu buttons

      // >> // >> [[ FIX THE FOLLOWING FOR MOBILE DEVICES: DON'T USE SIDEBAR ]]
      <ul
        id="sidebar"
        className="fixed text-sm sm:text-xl italic font-bold  p-3 
      flex flex-col w-fit sm:w-1/6 h-full"
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
    // Component that renders previously created list of artwork
    let filteredGallery = [];

    seriesFocus
      ? (filteredGallery = artList.filter((art) => art.series == seriesFocus))
      : "";

    const ArtCard = ({ art }) => {
      // Artwork component
      return (
        <div
          id="art_card"
          className={
            art.horizontal == "y"
              ? "md:col-span-3 gap-9 gap-y-9 overflow-hidden content-center"
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
            className="border-2 border-red-400
             mx-auto hover:opacity-80 hover:scale-95 scale-90 "
          />
        </div>
      );
    };

    return (
      // rendering all art or only from specific series
      <ul
        id="gallery"
        className="ml-auto grid grid-cols-1 md:grid-cols-3 gap-y-3 w-5/6 right-0 bg-black"
      >
        {seriesFocus == ""
          ? artList.map((art) => <ArtCard id={art.title} art={art} />)
          : filteredGallery.map((art) => <ArtCard id={art.title} art={art} />)}
      </ul>
    );
  };

  return (
    <div
      id="sidebar_and_gallery"
      className="min-h-screen flex w-full border-4 border-white"
    >
      <CreateSidebar />
      {artFocus ? (
        <ArtModal
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
            setArtFocus();
          }}
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
        </ArtModal>
      ) : (
        ""
      )}

      {loading ? (
        <p className="font-bold text-7xl text-slate-50 text-end w-full pr-10">
          Loading
        </p>
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
