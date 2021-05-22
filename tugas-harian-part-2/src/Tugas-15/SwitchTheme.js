import React, {useContext} from "react";
import { DaftarMahasiswaContext } from "./DaftarMahasiswaContext";


const SwitchTheme = ()=>{
  const [daftarMahasiswa, setDaftarMahasiswa] = useContext(DaftarMahasiswaContext)

  const changeTheme = ()=>{
    setDaftarMahasiswa(daftarMahasiswa === "dark" ? "light" : "dark")
  }
  
  return(
    <>
    <div style={{textAlign: "center", marginTop: "20px"}}>
      <button onClick={changeTheme} style={{borderRadius: "10px", padding: "10px", cursor: "pointer"}}> Change Navbar to {daftarMahasiswa === "dark" ? "Light Theme" : "Dark Theme"}</button>
      <h1>Daftar Nilai Mahasiswa</h1>

    </div>
    </>
  )  
}


export default SwitchTheme