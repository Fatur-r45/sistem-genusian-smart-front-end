import React, { useEffect, useState } from "react";
import { back } from "../assets";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";

const CreateExp = ({ nim }) => {
  const [Posisi_pekerjaan, setPosisi_pekerjaan] = useState("");
  const [Jenis_pekerjaan, setJenis_pekerjaan] = useState("");
  const [Nama_perusahaan, setNama_perusahaan] = useState("");
  const [Mulai, setMulai] = useState("");
  const [Sampai, setSampai] = useState("");
  const navigasi = useNavigate();
  const params = useParams();
  const getData = async (id) => {
    const data = await axios.get(`http://localhost:5000/pengalaman/id/` + id);
    const res = data.data.data;
    return res;
  };

  useEffect(() => {
    if (params.id) {
      const fethData = async () => {
        const res = await getData(params.id);
        setPosisi_pekerjaan(res.posisi_pekerjaan);
        setJenis_pekerjaan(res.jenis_pekerjaan);
        setNama_perusahaan(res.nama_perusahaan);
        setMulai(moment(res.mulai).format("YYYY-MM-DD"));
        setSampai(moment(res.sampai).format("YYYY-MM-DD"));
      };
      fethData();
    } else {
      setPosisi_pekerjaan("");
      setJenis_pekerjaan("");
      setNama_perusahaan("");
      setMulai("");
      setSampai("");
    }
  }, [params.id]);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (params.id) {
        await axios
          .put("http://localhost:5000/pengalaman/" + params.id, {
            posisi_pekerjaan: Posisi_pekerjaan,
            jenis_pekerjaan: Jenis_pekerjaan,
            nama_perusahaan: Nama_perusahaan,
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
        await axios
          .post("http://localhost:5000/pengalaman/" + nim, {
            posisi_pekerjaan: Posisi_pekerjaan,
            jenis_pekerjaan: Jenis_pekerjaan,
            nama_perusahaan: Nama_perusahaan,
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
    setJenis_pekerjaan("");
    setNama_perusahaan("");
    setPosisi_pekerjaan("");
    setMulai("");
    setSampai("");
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
              posisi pekrjaan
            </p>
            <input
              type="text"
              className="outline-none border-b-[1px] py-2 border-black "
              placeholder="contoh: digital marketing"
              value={Posisi_pekerjaan}
              onChange={(e) => setPosisi_pekerjaan(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <p className="capitalize font-semibold text-base">
              nama perusahaan
            </p>
            <input
              type="text"
              className="outline-none border-b-[1px] py-2 border-black font-medium text-base"
              placeholder="contoh: universitas nusa putra"
              value={Nama_perusahaan}
              onChange={(e) => setNama_perusahaan(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <p className="capitalize font-semibold text-base">
              jenis pekerjaan
            </p>
            <input
              type="text"
              className="outline-none border-b-[1px] py-2 border-black font-medium text-base"
              placeholder="contoh: magang"
              value={Jenis_pekerjaan}
              onChange={(e) => setJenis_pekerjaan(e.target.value)}
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

export default CreateExp;
