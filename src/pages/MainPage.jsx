import React, { useEffect, useState } from "react";
import MainLayout from "../components/MainLayout";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import Rank from "./Rank";
import NotFound from "./NotFound";
import Profile from "./Profile";
import axios from "axios";
import jwt_Decode from "jwt-decode";
import SetingSertifikat from "./SetingSertifikat";
import Create from "./Create";
import SetingExperimence from "./SetingExperimence";
import CreateExp from "./CreateExp";
import SetingPendidikan from "./SetingPendidikan";
import CreatePendidikan from "./CreatePendidikan";
import ProfileOrang from "./ProfileOrang";
import Notifikasi from "./Notifikasi";

const MainPage = () => {
  const [user_name, setUserName] = useState("");
  const [nim, setNim] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
  });
  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:5000/token");
      setToken(response.data.accessToken);
      const decoded = jwt_Decode(response.data.accessToken);
      // console.log(decoded);
      setUserName(decoded.user_name);
      setNim(decoded.nim);
      setExpire(decoded.exp);
    } catch (error) {
      if (error.response) {
        navigate("/login");
      }
    }
  };

  const AxiosJWT = axios.create();

  AxiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        const response = await axios.get("http://localhost:5000/token");
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwt_Decode(response.data.accessToken);
        // console.log(decoded);
        setUserName(decoded.user_name);
        setNim(decoded.nim);
        setExpire(decoded.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const getUsers = async () => {
    const response = await AxiosJWT.get("http://localhost:5000/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
  };

  const profile = user_name.split(" ").join("-");
  return (
    <MainLayout profile={profile}>
      <Routes>
        <Route index element={<HomePage nim={nim} profile={profile} />} />
        <Route path="rank" element={<Rank />} />
        <Route path="notifikasi" element={<Notifikasi />} />
        <Route
          path={profile}
          element={<Profile name={user_name} getusers={getUsers} nim={nim} />}
        />
        <Route path=":nama" element={<ProfileOrang />} />
        <Route
          path={`${profile}/sertifikat`}
          element={<SetingSertifikat nim={nim} />}
        />
        <Route
          path={`${profile}/sertifikat/create/:id?`}
          element={<Create nim={nim} />}
        />
        <Route
          path={`${profile}/pengalaman`}
          element={<SetingExperimence nim={nim} />}
        />
        <Route
          path={`${profile}/pengalaman/create/:id?`}
          element={<CreateExp nim={nim} />}
        />
        <Route
          path={`${profile}/pendidikan`}
          element={<SetingPendidikan nim={nim} />}
        />
        <Route
          path={`${profile}/pendidikan/create/:id?`}
          element={<CreatePendidikan nim={nim} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
};

export default MainPage;
