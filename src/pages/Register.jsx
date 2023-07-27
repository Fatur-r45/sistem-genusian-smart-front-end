import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [nim, setNim] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        user_name: userName,
        nim: nim,
        email: email,
        password: password,
        confPassword: confPassword,
      });
      await axios.post("http://localhost:5000/mahasiswa", {
        nim: nim,
      });
      navigate("/login");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className="px-5 py-10">
      <h2 className="mt-10 text-2xl font-semibold text-primary">Daftar Akun</h2>
      <p className="my-4">Masukan data anda dengan benar</p>
      <p className="my-4 text-danger">{msg}</p>
      <p></p>
      <input
        type="text"
        placeholder="User Name"
        className="container py-3 border-2 border-solid px-5 my-2 rounded"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="number"
        placeholder="NIM"
        className="container py-3 border-2 border-solid px-5 my-2 rounded"
        value={nim}
        onChange={(e) => setNim(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        className="container py-3 border-2 border-solid px-5 my-2 rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="*******"
        className="container py-3 border-2 border-solid px-5 my-2 rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="*******"
        className="container py-3 border-2 border-solid px-5 my-2 rounded"
        value={confPassword}
        onChange={(e) => setConfPassword(e.target.value)}
      />
      <p className=" text-danger font-medium">Lorem ipsum dolor sit amet.</p>
      <div className="flex gap-5 items-center">
        <input type="checkbox" className="h-10 w-10" />
        <p className="text-slate-500 leading-3 text-xs font-semibold">
          Dengan mendaftar, Berarti Anda telah menyetujui{" "}
          <span className="text-primary">Perjanjian Pengguna</span> dan
          Kebijakan <span className="text-primary">Privasi</span>
        </p>
      </div>
      <button
        className="container bg-primary py-4 my-3 rounded-lg text-neutral font-semibold"
        onClick={onSubmit}
      >
        Daftar
      </button>
      <div className="container">
        <p className="font-semibold text-center">
          sudah punya akun?{" "}
          <Link to={"/login"} className="text-primary">
            {" "}
            masuk sekarang
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
