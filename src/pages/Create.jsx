import React, { useEffect, useState } from "react";
import { back } from "../assets";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";

const Create = ({ nim }) => {
  const [title, setTitle] = useState("");
  const [nama_acara, setNama_acara] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [pdf, setPdf] = useState("");
  const [tanggal_dapat, setTanggal_dapat] = useState("");
  const navigasi = useNavigate();
  const params = useParams();
  const getData = async (id) => {
    const data = await axios.get(`http://localhost:5000/sertifikat/id/` + id);
    const res = data.data.data;
    return res;
  };

  useEffect(() => {
    if (params.id) {
      const fethData = async () => {
        const res = await getData(params.id);
        setTitle(res.title);
        setNama_acara(res.nama_acara);
        setKeterangan(res.keterangan);
        setPdf(res.pdf);
        setTanggal_dapat(moment(res.tanggal_dapat).format("YYYY-MM-DD"));
      };
      fethData();
    } else {
      setTitle("");
      setNama_acara("");
      setKeterangan("");
      setPdf("");
      setTanggal_dapat("");
    }
  }, [params.id]);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (params.id) {
        await axios
          .put(
            "http://localhost:5000/sertifikat/" + params.id,
            {
              title: title,
              nama_acara: nama_acara,
              keterangan: keterangan,
              pdf: pdf,
              tanggal_dapat: tanggal_dapat,
            },
            {
              headers: {
                "content-type": "multipart/form-data",
              },
            }
          )
          .then((result) => {
            if (result.data.message === "Hanya file PDF yang di perbolehkan") {
              Swal.fire({
                title: result.data.message,
                icon: "error",
                confirmButtonText: "OK",
              });
            } else {
              Swal.fire({
                title: result.data.message,
                icon: "success",
                confirmButtonText: "OK",
              });
            }
          })
          .catch((err) => {
            Swal.fire({
              title: err.response.data.error,
              icon: "error",
              confirmButtonText: "OK",
            });
          });
      } else {
        await axios
          .post(
            "http://localhost:5000/sertifikat/" + nim,
            {
              title: title,
              nama_acara: nama_acara,
              keterangan: keterangan,
              pdf: pdf,
              tanggal_dapat: tanggal_dapat,
            },
            {
              headers: {
                "content-type": "multipart/form-data",
              },
            }
          )
          .then((result) => {
            if (result.data.message === "Hanya file pdf yang di perbolehkan") {
              Swal.fire({
                title: result.data.message,
                icon: "error",
                confirmButtonText: "OK",
              });
            } else {
              Swal.fire({
                title: result.data.message,
                icon: "success",
                confirmButtonText: "OK",
              });
            }
          })
          .catch((err) => {
            Swal.fire({
              title: err.response.data.error,
              icon: "error",
              confirmButtonText: "OK",
            });
          });
      }
    } catch (error) {
      console.log(error);
    }
    setKeterangan("");
    setNama_acara("");
    setTitle("");
    setTanggal_dapat("");
    setPdf("");
  };

  //   const onImageUpload = (e) => {
  //     const file = e.target.files[0];
  //     setpdf(file);
  //     setpdf(URL.createObjectURL(file));
  //   };

  return (
    <div className="md:ml-48">
      <div className="w-full py-5 px-5 flex justify-start md:px-20">
        <img
          src={back}
          alt=""
          onClick={() => navigasi(-1)}
          className="cursor-pointer"
        />
      </div>
      <div className="px-5 py-5 md:px-20">
        <div className="flex flex-col gap-y-5">
          <div className="flex flex-col gap-y-1">
            <p className="capitalize font-semibold text-base">
              nama penghargaan
            </p>
            <input
              type="text"
              className="outline-none border-b-[1px] py-2 border-black "
              placeholder="contoh: public speaking"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <p className="capitalize font-semibold text-base">
              kategori / prestasi yang diraih
            </p>
            <input
              type="text"
              className="outline-none border-b-[1px] py-2 border-black font-medium text-base"
              placeholder="contoh: peserta test"
              value={keterangan}
              onChange={(e) => setKeterangan(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <p className="capitalize font-semibold text-base">penerbit</p>
            <input
              type="text"
              className="outline-none border-b-[1px] py-2 border-black font-medium text-base"
              placeholder="contoh: public speaking"
              value={nama_acara}
              onChange={(e) => setNama_acara(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <p className="capitalize font-semibold text-base">tanggal terbit</p>
            <input
              type="date"
              className="font-medium text-base"
              value={tanggal_dapat}
              onChange={(e) => setTanggal_dapat(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <p className="capitalize font-semibold text-base">
              masukan file bentuk pdf
            </p>
            <input
              type="file"
              className="font-medium text-base"
              onChange={(e) => setPdf(e.target.files[0])}
            />
            <p className="font-semibold text-base">nama file: {pdf.name}</p>
          </div>
          <button
            className="lg:w-1/2 w-full bg-primary py-3 mt-10 mb-20 rounded text-neutral font-semibold"
            onClick={onSubmit}
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Create;
