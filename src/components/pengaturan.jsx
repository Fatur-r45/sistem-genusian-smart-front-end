import React from "react";
import { cs, rules, ubahKS, ubahProfile } from "../assets";
import ModalForm from "./modalForm";
import { formProfile as FormFrofile } from "./formulir";

const pengaturan = ({
  logout,
  isOpenForm,
  closeForm,
  openForm,
  nama,
  jurusan,
  setNama,
  setJurusan,
  updateProfile,
}) => {
  return (
    <div className="pb-5">
      <div className="flex justify-start">
        <p className="font-semibold text-black capitalize">pengaturan</p>
      </div>
      <ModalForm isOpenForm={isOpenForm} closeForm={closeForm}>
        <FormFrofile
          nama={nama}
          jurusan={jurusan}
          updateProfile={updateProfile}
          setNama={setNama}
          setJurusan={setJurusan}
        />
      </ModalForm>
      <div className="flex flex-col items-start my-5">
        <div
          className="flex justify-start gap-5 my-2 cursor-pointer"
          onClick={openForm}
        >
          <img src={ubahProfile} alt="ks" className="" />
          <p className="capitalize text-slate-900 text-base font-semibold hover:text-primary active:text-blue-600">
            ubah profile
          </p>
        </div>
        <div className="flex justify-start gap-5 my-2 cursor-pointer">
          <img src={ubahKS} alt="ks" className="" />
          <p className="capitalize text-slate-900 text-base font-semibold hover:text-primary active:text-blue-600">
            ubah kata sandi
          </p>
        </div>
        <div className="flex justify-start gap-5 my-2 cursor-pointer">
          <img src={cs} alt="ks" className="" />
          <p className="capitalize text-slate-900 text-base font-semibold hover:text-primary active:text-blue-600">
            hubungi kami
          </p>
        </div>
        <div className="flex justify-start gap-5 my-2 cursor-pointer">
          <img src={rules} alt="ks" className="" />
          <p className="capitalize text-slate-900 text-base font-semibold hover:text-primary active:text-blue-600">
            syarat dan ketentuan
          </p>
        </div>
      </div>
      <button
        className="w-full md:w-96 h-14 rounded-lg bg-neutral2 capitalize text-base text-slate-900 font-bold my-5 hover:text-primary active:text-blue-600"
        onClick={logout}
      >
        keluar
      </button>
    </div>
  );
};

export default pengaturan;
