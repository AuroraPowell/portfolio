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
  //        FEB 11 To-Do UPDATES
  //   - Fix aspect ratio scaling
  //   - Grid display
  //   - Code to close modal on clicking of background (e.target)
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
      let value = selection;
      setSeriesFocus(value);
    }
    return (
      <div
        className="text-slate-100 text-xl italic font-bold  
      p-3
      flex flex-col text-start"
      >
        {seriesList.map((series) => (
          <p
            className="hover:text-slate-900"
            onClick={() => handleClick(series)}
          >
            {series}
          </p>
        ))}
      </div>
    );
  };

  // creates list of Art Objects
  const CreateGallery = () => {
    // rework the following
    // this will require pulling artList and then adding new piece. like: {setArtList( [...artList, art] )}

    let filteredGallery = [];

    seriesFocus ? artList.filter((art) => art.series == seriesFocus) : "";

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
        <div className="rounded-xl items-center">
          <img
            src={art.imgPath}
            onClick={() => {
              setModalOpen(true);
              setArtFocus(art);
            }}
            className="w-dvw mx-auto hover:opacity-70"
          />
        </div>
      );
    };

    return (
      <div className="">
        <ul
          className="grid grid-cols-3 items-center  
        h-96 overflow-auto"
        >
          {seriesFocus == ""
            ? artList.map((art) => <ArtCard id={art.title} art={art} />)
            : filteredGallery.map((art) => (
                <ArtCard id={art.title} art={art} />
              ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="flex justify-evenly">
      {artFocus ? (
        <Modal
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
            setArtFocus();
          }}
          className="bg-slate-50 z-10"
        >
          <div className="flex flex-col items-center mx-auto w-fit bg-slate-50 bg-opacity-30">
            <img src={artFocus.imgPath} className="w-32 mx-auto" />
            <div className="text-3xl text-white bg-teal-400 m-5">
              <p>{artFocus.title}</p>
              <p>{artFocus.year}</p>
              <p>{artFocus.medium}</p>
              <p>{artFocus.size}</p>
            </div>
          </div>
        </Modal>
      ) : (
        ""
      )}{" "}
      <CreateSidebar />
      {loading ? "loading" : <CreateGallery />}
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
