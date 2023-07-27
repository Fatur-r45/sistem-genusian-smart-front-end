import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotePassword = () => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    navigate(`/link_reset_password/${email}`);
    try {
      await axios.put("http://localhost:5000/forgotPassword", {
        email: email,
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
      <p className="my-4">Masuk dengan akun yang terdaftar</p>
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
          <p className="my-4 text-danger">{msg}</p>
          <button
            className="lg:w-1/2 w-full bg-primary py-3 my-3 rounded text-neutral font-semibold"
            type="submit"
          >
            Selanjutnya
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotePassword;
