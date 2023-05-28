import React from "react";
import { avatar2, crown } from "../assets";

const jumbotron = ({ nama, jurusan, rank, user_name }) => {
  return (
    <div className="w-full h-[320px] bg-primary px-5 md:px-10 relative">
      <div className="flex flex-col absolute bottom-0">
        <div className="flex items-center gap-5">
          <img src={avatar2} alt="" />
          <div className="flex flex-col">
            <p className="text-sm text-neutral font-semibold capitalize">
              {nama === null ? user_name : nama}
            </p>
            <p className="text-xs text-neutral font-normal">{jurusan}</p>
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

export default jumbotron;
