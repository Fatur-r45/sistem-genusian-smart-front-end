import React, { useEffect, useState } from "react";
import AboutMe from "../components/about-me";
import Experience from "../components/experience";
import Sertificat from "../components/sertificat";
import JumbotronProfile from "../components/jumbotronProfile";
import Pengaturan from "../components/pengaturan";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Pendidikan from "../components/pendidikan";

const Profile = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPengaturan, setIsPengaturan] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [nama, setNama] = useState("");
  const [rank, setRank] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [about_me, setAbout_me] = useState("");
  const [isAbout, setIsAbout] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const getData = await axios.get(
          "http://localhost:5000/mahasiswa/nim/" + props.nim
        );
        const res = getData.data.data;
        setNama(res.nama);
        setRank(res.rank);
        setJurusan(res.jurusan);
        setAbout_me(res.tentang_saya);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [props.nim]);

  const handleOpenAbout = () => {
    setIsAbout(true);
  };
  const handleCloseAbout = () => {
    setIsAbout(false);
  };

  const navigate = useNavigate();

  const handleOpenForm = () => {
    setIsOpenForm(true);
  };
  const handleCloseForm = () => {
    setIsOpenForm(false);
  };

  const Logout = async () => {
    try {
      await axios.delete("http://localhost:5000/logout");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const UpdateProfile = async (nama, jurusan) => {
    try {
      await axios.put("http://localhost:5000/mahasiswa/" + props.nim, {
        nama: nama,
        jurusan: jurusan,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateAboutMe = async (about_me) => {
    try {
      await axios.put("http://localhost:5000/mahasiswa/" + props.nim, {
        tentang_saya: about_me,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleCopyLink = () => {
    // navigator.clipboard.writeText(window.location.href);
    navigator.clipboard.writeText(
      `http://localhost:3000/${nama.split(" ").join("-")}`
    );
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOpenPengaturan = () => {
    setIsPengaturan(true);
    setIsOpen(false);
  };
  const handleClosePengaturan = () => {
    setIsPengaturan(false);
    setIsOpen(false);
  };

  const profile = [
    <AboutMe
      key={1}
      updateAboutMe={updateAboutMe}
      aboutMe={about_me}
      setAboutMe={setAbout_me}
      isAbout={isAbout}
      closeAbout={handleCloseAbout}
      openAbout={handleOpenAbout}
    />,
    <Experience key={2} nim={props.nim} />,
    <Pendidikan key={3} nim={props.nim} />,
    <Sertificat key={4} nim={props.nim} />,
  ];

  return (
    <div className="w-full">
      <div className="md:ml-48">
        <JumbotronProfile
          isCopied={isCopied}
          copyLink={handleCopyLink}
          isOpen={isOpen}
          handleCloseModal={handleCloseModal}
          handleOpenModal={handleOpenModal}
          name={props.name}
          nama={nama}
          rank={rank}
          OpenPengaturan={handleOpenPengaturan}
          ClosePengaturan={handleClosePengaturan}
          isPengaturan={isPengaturan}
        />
        <div className="w-full relative bg-white rounded-t-lg -mt-2 px-5 md:px-10 pt-5 md:pt-10 pb-20 ">
          {isPengaturan ? (
            <Pengaturan
              nama={nama}
              jurusan={jurusan}
              updateProfile={UpdateProfile}
              setNama={setNama}
              setJurusan={setJurusan}
              logout={Logout}
              isOpenForm={isOpenForm}
              closeForm={handleCloseForm}
              openForm={handleOpenForm}
            />
          ) : (
            profile.map((p) => {
              return p;
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
