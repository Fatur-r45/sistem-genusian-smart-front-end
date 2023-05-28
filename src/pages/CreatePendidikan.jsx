import React, { useEffect, useState } from "react";
import { back } from "../assets";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";

const CreatePendidikan = ({ nim }) => {
  const [nama_instansi, setNama_instansi] = useState("");
  const [bidang_studi, setBidang_studi] = useState("");
  const [gelar, setGelar] = useState("");
  const [Mulai, setMulai] = useState("");
  const [Sampai, setSampai] = useState("");
  const navigasi = useNavigate();
  const params = useParams();
  const getData = async (id) => {
    const data = await axios.get(`http://localhost:5000/pendidikan/id/` + id);
    const res = data.data.data;
    return res;
  };

  useEffect(() => {
    if (params.id) {
      const fethData = async () => {
        const res = await getData(params.id);
        setNama_instansi(res.nama_instansi);
        setBidang_studi(res.bidang_studi);
        setGelar(res.gelar);
        setMulai(moment(res.mulai).format("YYYY-MM-DD"));
        setSampai(moment(res.sampai).format("YYYY-MM-DD"));
      };
      fethData();
    } else {
      setNama_instansi("");
      setBidang_studi("");
      setGelar("");
      setMulai("");
      setSampai("");
    }
  }, [params.id]);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (params.id) {
        await axios
          .put("http://localhost:5000/pendidikan/" + params.id, {
            nama_instansi: nama_instansi,
            bidang_studi: bidang_studi,
            gelar: gelar,
            mulai: Mulai,
            sampai: Sampai,
          })
          .then((result) => {
            Swal.fire({
              title: result.data.message,
              icon: "success",
              confirmButtonText: "OK",
            });
          })
          .catch((err) => {
            Swal.fire({
              title: err.response.data.error,
              icon: "error",
              confirmButtonText: "OK",
            });
          });
      } else {
        setBidang_studi("");
        setGelar("");
        setNama_instansi("");
        setMulai("");
        setSampai("");
        await axios
          .post("http://localhost:5000/pendidikan/" + nim, {
            nama_instansi: nama_instansi,
            bidang_studi: bidang_studi,
            gelar: gelar,
            mulai: Mulai,
            sampai: Sampai,
          })
          .then((result) => {
            Swal.fire({
              title: result.data.message,
              icon: "success",
              confirmButtonText: "OK",
            });
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
            <p className="capitalize font-semibold text-base">Nama Instansi</p>
            <input
              type="text"
              className="outline-none border-b-[1px] py-2 border-black "
              placeholder="contoh: Universitas Nusa Putra"
              value={nama_instansi}
              onChange={(e) => setNama_instansi(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <p className="capitalize font-semibold text-base">gelar</p>
            <input
              type="text"
              className="outline-none border-b-[1px] py-2 border-black font-medium text-base"
              placeholder="contoh: Sarjana"
              value={gelar}
              onChange={(e) => setGelar(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <p className="capitalize font-semibold text-base">Bidang Studi</p>
            <input
              type="text"
              className="outline-none border-b-[1px] py-2 border-black font-medium text-base"
              placeholder="contoh: Sistem Informasi"
              value={bidang_studi}
              onChange={(e) => setBidang_studi(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <p className="capitalize font-semibold text-base">Mulai</p>
            <input
              type="date"
              className="font-medium text-base"
              value={Mulai}
              onChange={(e) => setMulai(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <p className="capitalize font-semibold text-base">sampai</p>
            <input
              type="date"
              className="font-medium text-base"
              value={Sampai}
              onChange={(e) => setSampai(e.target.value)}
            />
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

export default CreatePendidikan;
