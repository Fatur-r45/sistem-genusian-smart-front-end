import React from "react";
import { pen } from "../assets";
import Swal from "sweetalert2";

const aboutMe = ({
  updateAboutMe,
  aboutMe,
  setAboutMe,
  isAbout,
  closeAbout,
  openAbout,
}) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      updateAboutMe(aboutMe);
      Swal.fire({
        title: "Data berhasil di ubah",
        icon: "success",
        confirmButtonText: "OK",
      });
    }
  };
  return (
    <div className="pb-5">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-black capitalize">tentang saya</p>
        {!isAbout ? (
          <img
            src={pen}
            alt=""
            onClick={openAbout}
            className="cursor-pointer"
          />
        ) : (
          <button
            type="button"
            onClick={closeAbout}
            className="rounded-full border border-transparent shadow-sm px-4 py-2 text-lg font-medium text-black hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-lg"
          >
            x
          </button>
        )}
      </div>
      {!isAbout ? (
        aboutMe === null ? (
          <p className="text-black font-medium my-5 text-sm">
            perkenalkan tentang diri anda di sini!
          </p>
        ) : aboutMe === "" ? (
          <p className="text-black font-medium my-5 text-sm">
            perkenalkan tentang diri anda di sini!
          </p>
        ) : (
          <p className="text-black font-medium my-5 text-sm">{aboutMe}</p>
        )
      ) : (
        <form onSubmit={() => updateAboutMe(aboutMe)}>
          <textarea
            className="border-[1px] border-primary rounded-lg w-full my-2 h-20 shadow-lg outline-slate-700 px-5 py-2"
            onChange={(e) => setAboutMe(e.target.value)}
            onKeyDown={handleKeyDown}
            value={aboutMe}
          ></textarea>
        </form>
      )}
    </div>
  );
};

export default aboutMe;
