import React from "react"
import {DaftarMahasiswaProvider} from "./DaftarMahasiswaContext"
import DaftarMahasiswaList from "./DaftarMahasiswaList"

import "./DaftarMahasiswa.css"

const MahasiswaGokil = () =>{
  return(
    <>
      <DaftarMahasiswaProvider>
        <DaftarMahasiswaList/>
        
      </DaftarMahasiswaProvider>
    </>
  )
}

export default MahasiswaGokil