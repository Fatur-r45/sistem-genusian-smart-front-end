import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  const token = params.token;
  const onSubmit = async (e) => {
    e.preventDefault();
    navigate("/login");
    try {
      await axios.put(`http://localhost:5000/resetPassword/${token}`, {
        password: password,
        confPassword: confPassword,
      });
    } catch (error) {
      if (error.response) {
        setMsg(error.response);
      }
    }
  };
  return (
    <div className="px-5 py-10 lg:h-screen">
      <h2 className="mt-10 text-2xl font-semibold text-primary">
        Selamat Datang
      </h2>
      <p className="my-4">Masuk dengan akun yang terdaftar</p>
      <div className="container">
        <form onSubmit={onSubmit} className="flex flex-col">
          <input
            type="password"
            placeholder="Kata Sandi"
            name="password"
            className="w-full lg:w-1/2 py-3 border-2 border-solid px-5 my-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="true"
          />
          <input
            type="password"
            name="email"
            placeholder="Ulangi Kata Sandi"
            className="w-full lg:w-1/2 py-3 border-2 border-solid px-5 my-2 rounded"
            value={confPassword}
            onChange={(e) => setConfPassword(e.target.value)}
          />
          <p className="my-4 text-danger">{msg}</p>
          <button
            className="lg:w-1/2 w-full bg-primary py-3 my-3 rounded text-neutral font-semibold"
            type="submit"
          >
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
