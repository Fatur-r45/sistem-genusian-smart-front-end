import React from "react";
import { logoMenu, ads, avatar, certificat } from "../assets";
import Search from "../components/search";
const HomePage = ({ nim, profile }) => {
  return (
    <section className="container-xl">
      <Search nim={nim} profile={profile} />
      <div className="mx-5 md:mx-[400px] mb-20">
        {/* ads */}
        <div className="w-full my-5">
          <img
            src={ads}
            alt="adsens"
            className="w-full h-52 rounded-lg object-contain"
          />
          <div className="w-full flex justify-center mt-3 gap-1">
            <span className="rounded-xl bg-primary w-12 h-4"></span>
            <span className="rounded-full bg-slate-500 w-4 h-4"></span>
            <span className="rounded-full bg-slate-500 w-4 h-4"></span>
          </div>
        </div>
        {/* end ads */}
        <p className="text-primary text-xl mt-5">Aktivitas</p>
        {/* card status */}
        <div className="w-full my-5">
          <div className="flex gap-3 items-center">
            <img src={avatar} alt="avatar" className="rounded-full w-12 h-12" />
            <div className="capitalize w-full">
              <p>Alex</p>
              <p>Sistem Informasi</p>
            </div>
            <img src={logoMenu} alt="menu" className="w-16 h-1.5" />
          </div>
          <img
            src={certificat}
            alt="certificat"
            className="h-52 w-full my-3 rounded-lg"
          />
          <p className="text-primary text-xl font-semibold mb-3">
            GTTC Public Speaking Certificate
          </p>
          <p className="text-neutral2 font-semibold">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit..read more
          </p>
        </div>
        {/* end cards status */}
      </div>
    </section>
  );
};

export default HomePage;
