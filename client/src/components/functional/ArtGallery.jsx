import React from "react";
import { useState, useEffect } from "react";

import data from "./art.json";
import ArtModal from "./ArtModal";
import { LiaWindowCloseSolid } from "react-icons/lia";

import useScreenSize from "./useScreenSize";
// screenSize.width & screenSize.height

import { IoIosCloseCircle } from "react-icons/io";

const ArtGallery = () => {
  const screenSize = useScreenSize();
  console.log(
    "Screen size is: " + screenSize.width + " x " + screenSize.height
  );

  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const [artList, setArtList] = useState([]);
  let seriesList = [];

  const [artFocus, setArtFocus] = useState(null);
  const [seriesFocus, setSeriesFocus] = useState("");

  // creates responsively created list from mapping JSON file

  useEffect(() => {
    setLoading(true);
    setArtList(data);
    setLoading(false);
  }, []);

  const CreateSidebar = () => {
    // function to create list of years
    artList.map((art) => {
      if (!seriesList.includes(art.year)) {
        seriesList.push(art.year);
      }
    });

    seriesList.sort();
    // function activated on selecting series
    function handleClick(selection) {
      console.log("You've selected: " + selection);
      let value = selection;
      setSeriesFocus(value);
    }
    return (
      // menu buttons for showing groupings of art

      // >> // >> [[ FIX THE FOLLOWING FOR MOBILE DEVICES: DON'T USE SIDEBAR ]]
      <ul
        id="sidebar"
        className="fixed text-sm sm:text-xl italic font-bold  p-3 
      flex flex-col w-fit sm:w-1/6 h-full"
      >
        {seriesList.map((year) => (
          <button
            className="hover:text-red-400 py-5 font-sans text-left text-slate-200"
            onClick={() => handleClick(year)}
          >
            {year}
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
      ? (filteredGallery = artList.filter((art) => art.year == seriesFocus))
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
            src={art.imgPath}
            onClick={() => {
              setModalOpen(true);
              setArtFocus(art);
            }}
            className="border-2 border-red-400
             mx-auto hover:opacity-80 sm:hover:scale-95 scale-90 "
          />
        </div>
      );
    };

    return (
      // rendering all art or only from specific series
      <ul
        id="gallery"
        className="ml-auto grid grid-cols-1 mx-auto min-h-screen md:grid-cols-3 max-xl:grid-cols-3 2xl:grid-cols-6 gap-y-3 w-5/6 right-0"
      >
        {seriesFocus == ""
          ? artList.map((art) => <ArtCard id={art.title} art={art} />)
          : filteredGallery.map((art) => <ArtCard id={art.title} art={art} />)}
      </ul>
    );
  };

  return (
    <div id="sidebar_and_gallery" className="flex w-full border-4 border-white">
      <CreateSidebar />
      {artFocus && (
        <ArtModal
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
            setArtFocus();
          }}
        >
          <div className="md:max-w-md mx-auto ">
            <div className="flex">
              <LiaWindowCloseSolid
                className="absolute top-0 right-0 m-3 text-slate-900 text-lg hover:cursor-pointer"
                onClick={() => {
                  setModalOpen(false);
                  setArtFocus();
                }}
              />
              
            <div className="text-lg items-center mx-auto flex justify-around">
              <p className="">{artFocus.title}</p>
              <img src={artFocus.imgPath} className="my-5 p-3" />
              <div className="justify-between">
                
              <p>{artFocus.year}</p>
              <p>{artFocus.medium}</p>
              <p>{artFocus.size}</p>
              </div>
            </div>
            </div>
          </div>
        </ArtModal>
      )}

      {loading ? (
        <p className="font-bold text-7xl text-slate-50 text-end w-full pr-10">
          Loading
        </p>
      ) : artFocus ? (
        ""
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
