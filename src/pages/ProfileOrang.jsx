import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Jumbotron from "../components/jumbo-orang";
import AboutOrang from "../components/about-orang";
import PengalamanOrang from "../components/pengalaman-orang";
import PendidikanOrang from "../components/pendidikanOrang";
import SertificatOrang from "../components/sertifikat-orang";
import NotFound from "./NotFound";

const ProfileOrang = () => {
  const [nama, setNama] = useState("");
  const [rank, setRank] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [about_me, setAbout_me] = useState("");
  const [pendidikan, setPendidikan] = useState([]);
  const [pengalaman, setPengalaman] = useState([]);
  const [sertifikat, setSertifikat] = useState([]);
  const [user_name, setUser_name] = useState([]);
  const params = useParams();
  useEffect(() => {
    const getData = async () => {
      try {
        const getData = await axios.get(
          "http://localhost:5000/mahasiswa/" + params.nama
        );
        const res = getData.data.data;
        setNama(res.nama);
        setRank(getData.data.rank);
        setJurusan(res.jurusan);
        setAbout_me(res.tentang_saya);
        setPendidikan(res.pendidikans);
        setPengalaman(res.pengalamans);
        setSertifikat(res.sertifikats);
        setUser_name(res.users[0].user_name);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [params.nama]);
  if (params.nama !== nama.split(" ").join("-")) {
    return <NotFound />;
  } else
    return (
      <div className="w-full">
        <div className="md:ml-48">
          <Jumbotron
            nama={nama}
            jurusan={jurusan}
            rank={rank}
            user_name={user_name}
          />
          <div className="w-full relative bg-white rounded-t-lg -mt-2 px-5 md:px-10 pt-5 md:pt-10 pb-20 ">
            <AboutOrang aboutMe={about_me} />
            <PengalamanOrang pengalaman={pengalaman} />
            <PendidikanOrang pendidikan={pendidikan} />
            <SertificatOrang sertifikat={sertifikat} />
          </div>
        </div>
      </div>
    );
};

export default ProfileOrang;
