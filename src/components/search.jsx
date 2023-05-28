import React, { useEffect, useState } from "react";
import { logoSearch, result } from "../assets";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Search = ({ nim, profile }) => {
  const [mahasiswa, setMahasiswa] = useState([]);
  // const [userInput, setUserInput] = useState("");
  const navigasi = useNavigate();
  const getMahasiswa = async (input) => {
    const data = await axios.get(
      "http://localhost:5000/mahasiswa/search?keyword=" + input
    );
    const res = data.data.data;
    setMahasiswa(res);
  };
  // const handleKeyDown = (e) => {
  //   if (e.key === "Enter") {
  //     e.preventDefault();
  //     getMahasiswa(userInput);
  //   }
  // };
  useEffect(() => {
    // getMahasiswa(userInput);
    const search = document.querySelector(".search");
    const input = document.querySelector(".input");
    const listItem = document.querySelector(".ul");
    const cancle = document.querySelector(".cancle");
    window.onscroll = () => {
      if (window.scrollY > search.offsetTop) {
        search.classList.add("fixed");
        search.classList.add("top-0");
        search.classList.remove("relative");
      } else {
        search.classList.remove("fixed");
        search.classList.remove("top-0");
        search.classList.add("relative");
      }
    };
    search.addEventListener("click", (e) => {
      if (e.target === input) {
        search.classList.remove("bg-primary");
        search.classList.remove("h-32");
        search.classList.remove("items-center");
        search.classList.add("items-start");
        search.classList.add("pt-5");
        search.classList.add("bg-[#E5E5E5]");
        search.classList.add("h-screen");
        listItem.classList.remove("hidden");
        cancle.classList.remove("hidden");
      }
      if (e.target === cancle) {
        search.classList.add("bg-primary");
        search.classList.add("h-32");
        search.classList.add("items-center");
        search.classList.remove("items-start");
        search.classList.remove("pt-5");
        search.classList.remove("bg-[#E5E5E5]");
        search.classList.remove("h-screen");
        listItem.classList.add("hidden");
        cancle.classList.add("hidden");
      }
    });
  }, []);

  return (
    <div className="w-full">
      <div className="search w-full md:h-20 h-32 bg-primary flex justify-center md:justify-start items-center relative z-10 px-5 ">
        <div className="w-full flex flex-col justify-start items-center md:justify-start md:items-start">
          <div className="w-full md:w-64 bg-white h-12 mx-10 rounded-lg flex justify-start items-center px-5 gap-5">
            <img src={logoSearch} alt="logo search" className="w-5 h-5" />
            <input
              type="text"
              placeholder="pencarian"
              className="outline-0 w-full input"
              // onChange={(e) => setUserInput(e.target.value)}
              onChange={(e) => getMahasiswa(e.target.value)}
              // onKeyDown={handleKeyDown}
            />
            <div className="text-base hover:text-cyan-400 hidden cancle cursor-pointer">
              x
            </div>
          </div>
          <ul className="bg-[#E5E5E5] w-full px-5 hidden ul md:w-64 md:ml-10 rounded-lg">
            {mahasiswa.map((item) => {
              const slug = item.nama.split(" ").join("-");
              return (
                <li
                  className="flex gap-5 my-3 cursor-pointer"
                  key={item.nim}
                  onClick={() =>
                    item.nim === nim ? navigasi(profile) : navigasi(slug)
                  }
                >
                  <img src={result} alt="result" />
                  <p className="text-neutral2">{item.nama}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Search;
