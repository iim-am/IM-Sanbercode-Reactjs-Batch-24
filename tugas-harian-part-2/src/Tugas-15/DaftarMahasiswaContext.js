import React, { useState, createContext } from "react";

export const DaftarMahasiswaContext = createContext();

export const DaftarMahasiswaProvider = props => {
  const [daftarMahasiswa, setDaftarMahasiswa] = useState({
    lists: null,
    selectedId: 0,
    statusForm: "create"
  });

  return (
    <DaftarMahasiswaContext.Provider value={[daftarMahasiswa, setDaftarMahasiswa]}>
      {props.children}
    </DaftarMahasiswaContext.Provider>
  );
};