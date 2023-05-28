import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  homeActive,
  logoHome,
  logoNotif,
  logoProfile,
  logoRank,
  notifActive,
  profileActive,
  rankActive,
} from "../assets/index";

const Header = ({ profile }) => {
  const location = useLocation();
  // console.log(location.pathname.substring(1));
  // console.log(location.pathname.split("/")[1].split("%20").join("-"));

  const [active, setActive] = useState("");

  useEffect(() => {
    const path = location.pathname.substring(1);
    setActive(path || "home");
  }, [location]);
  const handleActive = (naviItem) => {
    setActive(naviItem);
  };

  return (
    <section className="w-full md:w-48 md:h-screen h-16 fixed md:left-0 md:rounded-none md:bottom-auto bottom-0 rounded-t-xl bg-white drop-shadow-[0_-4px_6px_rgba(170,170,170,0.5)] z-10">
      <header className="container w-full md:w-20 h-full px-10">
        <ul className="w-full md:w-20 h-full flex gap-x-10 capitalize font-semibold md:justify-evenly justify-between md:items-start items-center md:flex-col">
          <Link
            to={"/"}
            className="flex items-center gap-5"
            onClick={() => handleActive("home")}
          >
            <img
              src={active === "home" ? homeActive : logoHome}
              alt=""
              className="w-7 h-7 navigasi"
            />
            <p className="hidden md:inline">Home</p>
          </Link>
          <Link
            to={"rank"}
            className="flex items-center gap-5"
            onClick={() => handleActive("rank")}
          >
            <img
              src={active === "rank" ? rankActive : logoRank}
              alt=""
              className="w-7 h-7 navigasi "
            />
            <p className="hidden md:inline">Rank</p>
          </Link>
          <Link
            to={"notifikasi"}
            className="flex items-center gap-5"
            onClick={() => handleActive("notifikasi")}
          >
            <img
              src={active === "notifikasi" ? notifActive : logoNotif}
              alt=""
              className="w-7 h-7 navigasi"
            />
            <p className="hidden md:inline">Notification</p>
          </Link>
          <Link
            to={profile}
            className="flex items-center gap-5"
            onClick={() => handleActive(profile)}
          >
            <img
              src={active === profile ? profileActive : logoProfile}
              alt=""
              className="w-7 h-7 navigasi"
            />
            <p className="hidden md:inline">Profile</p>
          </Link>
        </ul>
      </header>
    </section>
  );
};

export default Header;
