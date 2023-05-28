import React, { useEffect, useState } from "react";
import { avatar1, avatar2, avatar3, crown, medal } from "../assets";
import axios from "axios";

const Rank = () => {
  const [mahasiswa1, setMahasiswa1] = useState([]);
  const [mahasiswa2, setMahasiswa2] = useState([]);
  const [mahasiswa3, setMahasiswa3] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("http://localhost:5000/mahasiswa");
      const res = data.data.data;
      setMahasiswa1(res[0]);
      setMahasiswa2(res[1]);
      setMahasiswa3(res[2]);
    };
    getData();
  }, [mahasiswa1, mahasiswa2, mahasiswa3]);

  // console.log(mahasiswa1);

  // console.log(mahasiswa[0].nama);

  const items = [];
  for (let index = 4; index < 5; index++) {
    items.push(
      <div className="flex justify-between items-center mb-5" key={index}>
        <p className="font-semibold text-primary md:w-[10%]">{index}</p>
        <div className="flex gap-5 items-center md:w-[80%]">
          <img src={avatar1} alt="avatar" className="w-[64px] h-[64px]" />
          <div className="flex flex-col">
            <p className="text-primary capitalize text-sm font-semibold">
              cameran
            </p>
            <p className="text-sm capitalize">system informasi</p>
          </div>
        </div>
        <div className="bg-primary w-14 h-9 px-2 rounded-lg flex items-center justify-between md:w-[10%]">
          <img src={medal} alt="medali" />
          <p className="text-white text-sm font-semibold">92</p>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full">
      <div className="md:ml-48">
        <div className="w-full h-[320px] bg-primary">
          <div className="flex mx-10 justify-between h-full relative">
            <div className="mt-[111px] capitalize text-center text-white flex flex-col items-center flex-1">
              <img
                src={avatar1}
                alt="avatar"
                className="rounded-full h-16 w-16"
              />
              <p className="truncate text-xs font-semibold">
                {mahasiswa2.nama}
              </p>
              <p className="truncate text-xs font-normal">
                {mahasiswa2.jurusan}
              </p>
              <div className="bg-[#7E0048] absolute bottom-0 w-16 h-20 rounded-t-lg text-center">
                <p className="font-semibold text-white mt-3">2</p>
              </div>
            </div>
            <div className="mt-[58px] flex flex-col items-center justify-start capitalize text-center text-white flex-1">
              <img src={crown} alt="icon crown" className="mb-2" />
              <img
                src={avatar2}
                alt="avatar"
                className="rounded-full h-16 w-16"
              />
              <p className="truncate text-xs font-semibold">
                {mahasiswa1.nama}
              </p>
              <p className="truncate text-xs font-normal">{mahasiswa1.nama}</p>
              <div className="bg-[#7E0048] absolute bottom-0 w-16 h-28 rounded-t-lg text-center">
                <p className="font-semibold text-white mt-3">1</p>
              </div>
            </div>
            <div className="mt-[135px] capitalize text-center text-white flex flex-col items-center flex-1">
              <img
                src={avatar3}
                alt="avatar"
                className="rounded-full h-16 w-16"
              />
              <p className="truncate text-xs font-semibold">
                {mahasiswa3.nama}
              </p>
              <p className="truncate text-xs font-normal">
                {mahasiswa3.jurusan}
              </p>
              <div className="bg-[#7E0048] absolute bottom-0 w-16 h-12 rounded-t-lg text-center">
                <p className="font-semibold text-white mt-3">3</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full relative bg-white rounded-t-lg -mt-2 px-5 md:px-20 pt-5 pb-20 ">
          {items}
        </div>
      </div>
    </div>
  );
};

export default Rank;
