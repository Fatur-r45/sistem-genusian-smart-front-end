import React, { useEffect, useState } from "react";
import { pen, tumbnail } from "../assets";
import axios from "axios";
import { ubahDate } from "../utils/change_date";
import { useNavigate } from "react-router-dom";

const Pendidikan = ({ nim }) => {
  const [pendidikan, setPendidikan] = useState([]);
  const navigasi = useNavigate();
  useEffect(() => {
    const getData = async (nim) => {
      const data = await axios.get(`http://localhost:5000/pendidikan/${nim}`);
      const response = data.data.data;
      setPendidikan(response);
    };
    getData(nim);
  }, [nim]);

  return (
    <div className="pb-5">
      <div className="flex justify-between">
        <p className="font-semibold text-black capitalize">Pendidikan</p>
        <img
          src={pen}
          alt="pen"
          className="cursor-pointer"
          onClick={() => navigasi("pendidikan")}
        />
      </div>
      <div className="my-5 px-1">
        {pendidikan.map((item) => {
          const { id, nama_instansi, gelar, bidang_studi, mulai, sampai } =
            item;
          return (
            <div className="flex items-center gap-4 my-5" key={id}>
              <img
                src={tumbnail}
                alt="tumbnail"
                className="w-[48px] h-[48px]"
              />
              <div className="flex-col">
                <p className="capitalize text-sm font-semibold">
                  {bidang_studi}
                </p>
                <p className="capitalize text-xs font-normal">
                  {nama_instansi} - {gelar}
                </p>
                <p className="text-xs font-normal text-neutral2">
                  {ubahDate(mulai)} - {ubahDate(sampai)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pendidikan;
