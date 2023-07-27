import React from "react";
import { profileActive, rankActive } from "../assets";

const Notifikasi = () => {
  return (
    <div className="w-full">
      <div className="w-full mt-10">
        <div className="pr-5 pl-10 py-5 my-2 shadow-md">
          <div className="flex justify-between items-center gap-8">
            <img src={rankActive} alt="" />
            <div className="flex flex-col justify-start">
              <div className="flex justify-between items-center">
                <p className="text-sm text-primary font-semibold">Selamat!</p>
                <p className="text-black text-base font-semibold cursor-pointer hover:text-primary">
                  x
                </p>
              </div>
              <p className="text-xs font-normal text-slate-800">
                Anda telah meraih peringkat 2 dengan 112 point yang
                terakumulasi!
              </p>
            </div>
          </div>
        </div>
        <div className="pr-5 pl-10 py-5 my-2 shadow-md">
          <div className="flex justify-between items-center gap-8">
            <img src={rankActive} alt="" />
            <div className="flex flex-col justify-start">
              <div className="flex justify-between items-center">
                <p className="text-sm text-primary font-semibold">Selamat!</p>
                <p className="text-black text-base font-semibold cursor-pointer hover:text-primary">
                  x
                </p>
              </div>
              <p className="text-xs font-normal text-slate-800">
                Anda telah meraih peringkat 3 dengan 105 point yang
                terakumulasi!
              </p>
            </div>
          </div>
        </div>
        <div className="pr-5 pl-10 py-5 my-2 shadow-md">
          <div className="flex justify-between items-center gap-8">
            <img src={profileActive} alt="" />
            <div className="flex flex-col justify-start">
              <div className="flex justify-between items-center">
                <p className="text-sm text-primary font-semibold">
                  Akun anda berhasil dibuat!
                </p>
                <p className="text-black text-base font-semibold cursor-pointer hover:text-primary">
                  x
                </p>
              </div>
              <p className="text-xs font-normal text-slate-800">
                Silahkan segera mengisi profilmu dengan data yang lengkap!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifikasi;
