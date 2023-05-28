import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/login", {
        email: email,
        password: password,
      });
      navigate("/");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div className="px-5 py-10 lg:h-screen">
      <h2 className="mt-10 text-2xl font-semibold text-primary">
        Selamat Datang
      </h2>
      <p className="my-4">Masuk dengan akun yang terdaftar</p>
      <p className="my-4 text-danger">{msg}</p>
      <div className="container">
        <form onSubmit={onSubmit} className="flex flex-col">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="w-full lg:w-1/2 py-3 border-2 border-solid px-5 my-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="true"
          />
          <input
            type="password"
            name="email"
            placeholder="Password"
            className="w-full lg:w-1/2 py-3 border-2 border-solid px-5 my-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-primary font-semibold text-end w-full lg:w-1/2 ">
            Lupa Kata Sandi?
          </p>
          <button
            className="lg:w-1/2 w-full bg-primary py-3 my-3 rounded text-neutral font-semibold"
            type="submit"
          >
            Masuk
          </button>
        </form>
      </div>
      <div className="absolute bottom-10 lg:bottom-5 left-0 container">
        <p className="font-semibold text-center">
          belum punya akun?{" "}
          <Link to={"/register"} className="text-primary">
            {" "}
            daftar sekarang
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
