import React from "react";
import { DaftarBukuProvider } from "./DaftarBukuContext";
import DaftarBukuList from "./DaftarBukuList";
import DaftarBukuForm from "./DaftarBukuForm";
import SearchBuku from "./SearchBuku";
import "./style.css";

const DaftarBuku = () => {
  return (
    <div className="Daftar-Buku">
      <DaftarBukuProvider>
        <SearchBuku />
        <DaftarBukuList />
        <DaftarBukuForm />
      </DaftarBukuProvider>
    </div>
  );
};

export default DaftarBuku;
