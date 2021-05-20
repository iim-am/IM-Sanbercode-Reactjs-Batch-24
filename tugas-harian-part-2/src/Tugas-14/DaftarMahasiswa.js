import React from "react"
import {DaftarMahasiswaProvider} from "./DaftarMahasiswaContext"
import DaftarMahasiswaList from "./DaftarMahasiswaList"
import DaftarMahasiswaForm from "./DaftarMahasiswaForm"
import "./DaftarMahasiswa.css"

const MahasiswaGokil = () =>{
  return(
    <>
      <DaftarMahasiswaProvider>
        <DaftarMahasiswaList/>
        <DaftarMahasiswaForm/>
      </DaftarMahasiswaProvider>
    </>
  )
}

export default MahasiswaGokil