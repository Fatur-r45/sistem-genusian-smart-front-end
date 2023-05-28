import React, { useEffect, useState } from "react";
import { pen, tumbnail2 } from "../assets";
import axios from "axios";
import { ubahDate } from "../utils/change_date";
import { useNavigate } from "react-router-dom";

const Sertificat = ({ nim }) => {
  const [sertifikat, setSertifikat] = useState([]);
  const navigasi = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/sertifikat/" + nim);
      const data = res.data.data;
      setSertifikat(data);
      // console.log(data[0].pdf);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pb-5">
      <div className="flex justify-between">
        <p className="font-semibold text-black capitalize">sertifikat</p>
        <img
          src={pen}
          alt="pen"
          onClick={() => navigasi("sertifikat")}
          className="cursor-pointer"
        />
      </div>
      {sertifikat.map((item) => {
        return (
          <a
            className="my-5 px-1 block"
            href={`http://localhost:5000/${item.pdf}`}
            key={item.id}
          >
            <div className="flex items-center gap-4">
              <img
                src={tumbnail2}
                alt="tumbnail"
                className="w-[48px] max-h-12"
              />
              <div className="flex-col">
                <p className="capitalize text-sm font-semibold">{item.title}</p>
                <p className="capitalize text-xs font-normal">
                  {item.nama_acara}
                </p>
                <p className="text-xs font-normal text-neutral2">
                  {ubahDate(item.tanggal_dapat)}
                </p>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default Sertificat;
