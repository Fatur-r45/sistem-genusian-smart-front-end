import React, { useEffect, useState } from "react";
import { pen, tumbnail } from "../assets";
import axios from "axios";
import { ubahDate } from "../utils/change_date";
import { useNavigate } from "react-router-dom";

const Experience = ({ nim }) => {
  const [pengalaman, setPengalaman] = useState([]);
  const navigasi = useNavigate();
  useEffect(() => {
    const getData = async (nim) => {
      const data = await axios.get(`http://localhost:5000/pengalaman/${nim}`);
      const response = data.data.data;
      setPengalaman(response);
    };
    getData(nim);
  }, [nim]);

  return (
    <div className="pb-5">
      <div className="flex justify-between">
        <p className="font-semibold text-black capitalize">Pengalaman</p>
        <img
          src={pen}
          alt=""
          className="cursor-pointer"
          onClick={() => navigasi("pengalaman")}
        />
      </div>
      <div className="my-5 px-1">
        {pengalaman.map((item) => {
          const {
            id,
            posisi_pekerjaan,
            nama_perusahaan,
            jenis_pekerjaan,
            mulai,
            sampai,
          } = item;
          return (
            <div className="flex items-center gap-4 my-5" key={id}>
              <img
                src={tumbnail}
                alt="tumbnail"
                className="w-[48px] h-[48px]"
              />
              <div className="flex-col">
                <p className="capitalize text-sm font-semibold">
                  {posisi_pekerjaan}
                </p>
                <p className="capitalize text-xs font-normal">
                  {nama_perusahaan} - {jenis_pekerjaan}
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

export default Experience;
