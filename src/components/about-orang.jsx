import React from "react";

const aboutOrang = ({ aboutMe }) => {
  return (
    <div className="pb-5">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-black capitalize">tentang saya</p>
      </div>
      {aboutMe === null ? (
        <p className="text-black font-medium my-5 text-sm">
          perkenalkan tentang diri anda di sini!
        </p>
      ) : aboutMe === "" ? (
        <p className="text-black font-medium my-5 text-sm">
          perkenalkan tentang diri anda di sini!
        </p>
      ) : (
        <p className="text-black font-medium my-5 text-sm">{aboutMe}</p>
      )}
    </div>
  );
};

export default aboutOrang;
