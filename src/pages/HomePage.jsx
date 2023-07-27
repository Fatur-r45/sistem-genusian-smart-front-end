import React from "react";
import { logoMenu, ads, avatar, certificat, bg_g, canpas } from "../assets";
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
        {/* webinar wrapper */}
        <div className="mt-5 mb-5">
          <div className="flex justify-between items-center">
            <p className="text-slate-800 text-xl font-semibold">Webinar</p>
            <p className="text-medium font-semibold text-neutral2">
              lihat Semua
            </p>
          </div>
          {/* card status */}
          <div className="overflow-x-scroll flex">
            <div className="flex-shrink-0 flex py-10">
              <div className="flex-shrink-0 w-[240px] h-[200px] mr-2 rounded-lg overflow-hidden drop-shadow-lg">
                <div className="h-[120px] w-full bg-primary relative">
                  <img
                    src={bg_g}
                    alt=""
                    className="absolute right-0 object-cover"
                  />
                  <div className="px-5 py-[30px] flex justify-between items-center">
                    <div>
                      <p className="text-xs">Webinar</p>
                      <p className="text-xs font-semibold text-neutral">
                        Basic UI/UX Design
                      </p>
                      <p className="text-[8px] font-semibold text-neutral">
                        By ARKARA Studio
                      </p>
                    </div>
                    <img src={canpas} alt="canpas" />
                  </div>
                </div>
                <div className="h-[80px] w-[240] bg-neutral">
                  <div className="px-[16px] py-2">
                    <p className="text-sm font-semibold text-black">
                      Webinar Basic UI/UX Design
                    </p>
                    <p className="text-xs text-neutral2 font-normal">
                      Jum’at, 14 Apr, 15:00 WIB
                    </p>
                    <div className="flex justify-end">
                      <p className="font-semibold text-primary text-base">
                        Gratis
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 w-[240px] h-[200px] mr-2 rounded-lg overflow-hidden drop-shadow-lg">
                <div className="h-[120px] w-full bg-primary relative">
                  <img
                    src={bg_g}
                    alt=""
                    className="absolute right-0 object-cover"
                  />
                  <div className="px-5 py-[30px] flex justify-between items-center">
                    <div>
                      <p className="text-xs">Webinar</p>
                      <p className="text-xs font-semibold text-neutral">
                        Basic UI/UX Design
                      </p>
                      <p className="text-[8px] font-semibold text-neutral">
                        By ARKARA Studio
                      </p>
                    </div>
                    <img src={canpas} alt="canpas" />
                  </div>
                </div>
                <div className="h-[80px] w-[240] bg-neutral">
                  <div className="px-[16px] py-2">
                    <p className="text-sm font-semibold text-black">
                      Webinar Basic UI/UX Design
                    </p>
                    <p className="text-xs text-neutral2 font-normal">
                      Jum’at, 14 Apr, 15:00 WIB
                    </p>
                    <div className="flex justify-end">
                      <p className="font-semibold text-primary text-base">
                        Gratis
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end cards status */}
        </div>
        {/* end webinar wrapper */}
        {/* webinar wrapper */}
        <div className="mt-5 mb-20">
          <div className="flex justify-between items-center">
            <p className="text-slate-800 text-xl font-semibold">Kelas</p>
            <p className="text-medium font-semibold text-neutral2">
              lihat Semua
            </p>
          </div>
          {/* card status */}
          <div className="overflow-x-scroll flex">
            <div className="flex-shrink-0 flex py-10">
              <div className="flex-shrink-0 w-[240px] h-[200px] mr-2 rounded-lg overflow-hidden drop-shadow-lg">
                <div className="h-[120px] w-full bg-primary relative">
                  <img
                    src={bg_g}
                    alt=""
                    className="absolute right-0 object-cover"
                  />
                  <div className="px-5 py-[30px] flex justify-between items-center">
                    <div>
                      <p className="text-xs drop-shadow-[0_10px_10px_rgba(700,700,700,0.8)]">
                        Kelas
                      </p>
                      <p className="text-xs font-semibold text-neutral">
                        Basic UI/UX Design
                      </p>
                      <p className="text-[8px] font-semibold text-neutral">
                        By ARKARA Studio
                      </p>
                    </div>
                    <img src={canpas} alt="canpas" />
                  </div>
                </div>
                <div className="h-[80px] w-[240] bg-neutral">
                  <div className="px-[16px] py-2">
                    <p className="text-sm font-semibold text-black">
                      Webinar Basic UI/UX Design
                    </p>
                    <p className="text-xs text-neutral2 font-normal">
                      Jum’at, 14 Apr, 15:00 WIB
                    </p>
                    <div className="flex justify-end">
                      <p className="font-semibold text-primary text-base">
                        Gratis
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 w-[240px] h-[200px] mr-2 rounded-lg overflow-hidden drop-shadow-lg">
                <div className="h-[120px] w-full bg-primary relative">
                  <img
                    src={bg_g}
                    alt=""
                    className="absolute right-0 object-cover"
                  />
                  <div className="px-5 py-[30px] flex justify-between items-center">
                    <div>
                      <p className="text-xs">Webinar</p>
                      <p className="text-xs font-semibold text-neutral">
                        Basic UI/UX Design
                      </p>
                      <p className="text-[8px] font-semibold text-neutral">
                        By ARKARA Studio
                      </p>
                    </div>
                    <img src={canpas} alt="canpas" />
                  </div>
                </div>
                <div className="h-[80px] w-[240] bg-neutral">
                  <div className="px-[16px] py-2">
                    <p className="text-sm font-semibold text-black">
                      Webinar Basic UI/UX Design
                    </p>
                    <p className="text-xs text-neutral2 font-normal">
                      Jum’at, 14 Apr, 15:00 WIB
                    </p>
                    <div className="flex justify-end">
                      <p className="font-semibold text-primary text-base">
                        Gratis
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end cards status */}
        </div>
        {/* end webinar wrapper */}
      </div>
    </section>
  );
};

export default HomePage;
