import React from "react";
import Swal from "sweetalert2";

const formProfile = ({ nama, jurusan, setNama, setJurusan, updateProfile }) => {
  const handleClick = () => {
    updateProfile(nama, jurusan);
    Swal.fire({
      title: "Data berhasil di ubah",
      icon: "success",
      confirmButtonText: "OK",
    });
  };
  return (
    <div className="w-full">
      <div className="flex justify-start gap-10 w-full my-5 items-center">
        <label className="w-10" htmlFor="name">
          Nama
        </label>
        <input
          type="text"
          name="name"
          value={nama}
          placeholder="masukan nama anda"
          className="md:w-[300px]  border-2 px-3 py-1 text-sm font-medium"
          onChange={(e) => setNama(e.target.value)}
        />
      </div>
      <div className="flex justify-start gap-10 my-5 items-center">
        <label className="w-10" htmlFor="jurusan">
          Jurusan
        </label>
        <input
          type="text"
          name="jurusan"
          value={jurusan}
          placeholder="masukan jurusan anda"
          className="md:w-[300px]  border-2 px-3 py-1 text-sm font-medium"
          onChange={(e) => setJurusan(e.target.value)}
        />
      </div>
      <button
        onClick={handleClick}
        className="text-center px-5 py-2 border-2 rounded-lg"
      >
        submit data
      </button>
    </div>
  );
};

export default formProfile;
