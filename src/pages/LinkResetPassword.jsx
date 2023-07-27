import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const LinkResetPassword = () => {
  const [msg, setMsg] = useState("");
  const params = useParams();
  const kirimUlang = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:5000/forgotPassword", {
        email: params.email,
      });
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div className="px-5 py-10 lg:h-screen">
      <h2 className="mt-10 text-2xl font-semibold text-primary capitalize">
        lupa kata sandi?
      </h2>
      <p className="my-4">Masuk dengan akun anda yang terdaftar</p>
      <div className="container">
        <div className="flex flex-col">
          {/* <p className="my-4 text-danger">{msg}</p> */}
          <p className="my-4 text-slate-900 text-base font-semibold">
            Kirim ulang kode verifikasi,{" "}
            <span
              onClick={kirimUlang}
              className="text-primary cursor-pointer hover:text-blue-500"
            >
              Kirim Ulang!
            </span>
          </p>
          {/* <button
            className="lg:w-1/2 w-full bg-primary py-3 my-3 rounded text-neutral font-semibold"
            type="submit"
          >
            Selanjutnya
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default LinkResetPassword;
