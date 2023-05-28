import React, { useEffect, useState } from "react";
import { add, back, delet, tumbnail2 } from "../assets";
import axios from "axios";
import { ubahDate } from "../utils/change_date";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loader from "../components/atom/loader";

const SetingExperimence = ({ nim }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pengalaman, setPengalaman] = useState([]);
  const navigasi = useNavigate();

  useEffect(() => {
    const getData = async (nim) => {
      try {
        const res = await axios.get("http://localhost:5000/pengalaman/" + nim);
        const data = res.data.data;
        setPengalaman(data);
        // console.log(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getData(nim);
  }, [nim, pengalaman]);

  const onDelete = async (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(`http://localhost:5000/pengalaman/${id}`).then((res) => {
            Swal.fire("Deleted!", res.data.message, "success");
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full">
      <div className="md:ml-48">
        <div className="w-full px-10 py-5 md:px-20">
          <div className="flex justify-between items-center">
            <img
              src={back}
              alt="arrow back"
              onClick={() => navigasi(-1)}
              className="cursor-pointer"
            />
            <img
              src={add}
              alt=""
              onClick={() => navigasi(`create`)}
              className="cursor-pointer"
            />
          </div>
        </div>
        {isLoading ? (
          <div className="w-full h-screen flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          pengalaman.map((item) => {
            const {
              id,
              posisi_pekerjaan,
              nama_perusahaan,
              jenis_pekerjaan,
              mulai,
              sampai,
            } = item;
            return (
              <div className="relative" key={id}>
                <div
                  className="my-5 px-10 flex justify-start items-center md:px-20 md:py-5 cursor-pointer hover:bg-cyan-200"
                  onClick={() => navigasi(`create/${item.id}`)}
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={tumbnail2}
                      alt="tumbnail"
                      className="w-[48px] max-h-12"
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
                </div>
                <div
                  className=" w-10 h-10 cursor-pointer hover:bg-danger absolute z-10 flex justify-center items-center rounded-full md:top-6 md:right-20 top-1 right-5"
                  onClick={() => onDelete(id)}
                >
                  <img src={delet} alt="" />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default SetingExperimence;
