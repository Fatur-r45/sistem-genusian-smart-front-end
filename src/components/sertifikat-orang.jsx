import React from "react";
import { tumbnail2 } from "../assets";
import { ubahDate } from "../utils/change_date";

const sertificatOrang = ({ sertifikat }) => {
  return (
    <div className="pb-5">
      <div className="flex justify-between">
        <p className="font-semibold text-black capitalize">sertifikat</p>
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

export default sertificatOrang;
