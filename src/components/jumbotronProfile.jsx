import React from "react";
import { avatar2, crown, dotMenu } from "../assets";
import Modalbox from "./modalbox";

const jumbotronProfile = ({
  handleOpenModal,
  handleCloseModal,
  name,
  nama,
  isOpen,
  OpenPengaturan,
  ClosePengaturan,
  isPengaturan,
  isCopied,
  copyLink,
  rank,
}) => {
  return (
    <div className="w-full h-[320px] bg-primary px-5 md:px-10 relative">
      <div
        className="absolute top-10 right-10 cursor-pointer md:w-[30px] md:h-[30px] flex justify-center items-center"
        onClick={handleOpenModal}
      >
        <img src={dotMenu} alt="menu" />
      </div>
      <Modalbox isOpen={isOpen} onClose={handleCloseModal}>
        {isPengaturan ? (
          <p
            className="text-base font-medium text-black mt-[48px] mb-4 cursor-pointer hover:text-blue-600"
            onClick={ClosePengaturan}
          >
            Profile
          </p>
        ) : (
          <p
            className="text-base font-medium text-black mt-[48px] mb-4 cursor-pointer hover:text-blue-600"
            onClick={OpenPengaturan}
          >
            Pengaturan
          </p>
        )}
        <p
          className="mt-1 text-base text-black font-medium mb-5 cursor-pointer hover:text-blue-600"
          onClick={copyLink}
        >
          {isCopied ? "Link Sudah Tersalin" : "Salin Link Profile"}
        </p>
      </Modalbox>
      <div className="flex flex-col absolute bottom-0">
        <div className="flex items-center gap-5">
          <img src={avatar2} alt="" />
          <div className="flex flex-col">
            <p className="text-sm text-neutral font-semibold capitalize">
              {nama === null ? name : nama}
            </p>
            <p className="text-xs text-neutral font-normal">system informasi</p>
          </div>
        </div>
        <div className=" h-[40px] bg-[rgba(255,255,255,0.4)] backdrop-blur-[20px] rounded-lg mt-4 mb-6 border border-solid border-white flex px-2 items-center gap-3">
          <img src={crown} alt="crown" />
          <p className="text-white font-normal text-sm capitalize">
            peringkat {rank}
          </p>
        </div>
      </div>
    </div>
  );
};

export default jumbotronProfile;
