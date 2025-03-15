import React from "react";

import { MdMarkunreadMailbox } from "react-icons/md";

const Email = () => {
  return (
    <div className="bg-zinc-200 min-h-screen flex flex-col gap-5">
      <div
        id="content"
        className="bg-slate-100 mx-96 my-28 flex flex-col items-center"
      >
        <div id="header" className="inline">
          <p className="left-0">Logo</p>
          <p className="right-0">Profile Pic</p>
        </div>

        <h1 className="text-center">You have 1 new invitation!</h1>
        <MdMarkunreadMailbox className="size-20" />
        <button className=" rounded-full bg-[#0a66c2] p-3 text-slate-50 font-bold">
          View invitations
        </button>
        <div
          id="extras"
          className="text-emerald-500 flex-col justify-center m-9"
        >
          {/* <div id="1" className="flex flex-row gap-5">
            <h1 className="text-black table">HI</h1>
            <div className="flex-col">
              <p>You appeared in 3 searches this week</p>
              <p>You were found by people from these companies</p>{" "}
              <div className="flex flex-row">
                <p>ICON</p>
                <p>ICON</p>
              </div>
              <button className="border-2 p-2 border-slate-800 rounded-full">
                See all searches
              </button>
            </div>
          </div>

          <div id="2" className="text-orange-600 inline-flex gap-5">
            <h1 className="text-black">ICON</h1>
            <div className="flex flex-col p-3">
              <p className="overflow-auto">
                STEPS Talent shared a post: Get to know the faces behind STEPS
                Talent! Shela Thomas, the powerhouse behind...
              </p>
              <button className="size-fit border-2 border-slate-800 rounded-full ">
                See post
              </button>
            </div>
          </div> */}
        </div>
      </div>

      <div
        id="email-footer"
        className="flex-col flex mx-auto mb-9 text-center p-9"
      >
        <h1>Get the new LinkedIn desktop app</h1>

        <p>Also available on mobile</p>
      </div>
    </div>
  );
};

export default Email;
