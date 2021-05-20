import React, {useContext, useState, useEffect} from "react"
import axios from "axios"
import {DaftarMahasiswaContext} from "./DaftarMahasiswaContext"

const DaftarMahasiswaForm = () =>{
  const [daftarMahasiswa, setDaftarMahasiswa] = useContext(DaftarMahasiswaContext)
  const [input, setInput] = useState({name: "", matkul: "", nilai: 0})

  useEffect(()=>{
    if (daftarMahasiswa.statusForm === "changeToEdit"){
      let dataMahasiswa = daftarMahasiswa.lists.find(x=> x.id === daftarMahasiswa.selectedId)
      setInput({name: dataMahasiswa.name, matkul: dataMahasiswa.matkul, nilai: dataMahasiswa.nilai})
      setDaftarMahasiswa({...daftarMahasiswa, statusForm: "edit"})
    }
  },[daftarMahasiswa, setDaftarMahasiswa])

  const handleChange = (event) =>{
    let typeOfInput = event.target.name

    switch (typeOfInput){
      case "name":
      {
        setInput({...input, name: event.target.value});
        break
      }
      case "matkul":
      {
        setInput({...input, matkul: event.target.value});
        break
      }
      case "nilai":
      {
        setInput({...input, nilai: event.target.value});
          break
      }
    default:
      {break;}
    }
  }
  
  const handleSubmit = (event) =>{
    // menahan submit
    event.preventDefault()

    let name = input.name
    let matkul = input.matkul.toString()
    

    if (daftarMahasiswa.statusForm === "create"){        
      axios.post(`http://backendexample.sanbercloud.com/api/student-scores`, {name, matkul, nilai: input.nilai})
      .then(res => {
          setDaftarMahasiswa(
            {statusForm: "create", selectedId: 0,
            lists: [
              ...daftarMahasiswa.lists, 
              { id: res.data.id, 
                name: input.name, 
                matkul: input.matkul,
                nilai: input.nilai
              }]
            })
      })
    }else if(daftarMahasiswa.statusForm === "edit"){
      axios.put(`http://backendexample.sanbercloud.com/api/student-scores/${daftarMahasiswa.selectedId}`, {name, matkul, nilai: input.nilai})
      .then(() => {
          let dataMahasiswa = daftarMahasiswa.lists.find(el=> el.id === daftarMahasiswa.selectedId)
          dataMahasiswa.name = input.name
          dataMahasiswa.matkul = input.matkul
          dataMahasiswa.nilai = input.nilai
          setDaftarMahasiswa({statusForm: "create", selectedId: 0, lists: [...daftarMahasiswa.lists]})
      })
    }

    setInput({name: "", matkul: "", nilai: 0})

  }
  return(
    <>
      <h1>Form Nilai Mahasiswa</h1>

      <div style={{width: "50%", margin: "0 auto", display: "block"}}>
        <div style={{border: "1px solid #aaa", padding: "20px"}}>
          <form onSubmit={handleSubmit}>
            <label style={{float: "left"}}>
              Nama:
            </label>
            <input style={{float: "right"}} type="text" name="name" value={input.name} onChange={handleChange}/>
            <br/>
            <br/>
            <label style={{float: "left"}}>
              Mata Kuliah:
            </label>
            <input style={{float: "right"}} type="text" name="matkul" value={input.matkul} onChange={handleChange}/>
            <br/>
            <br/>
            <label style={{float: "left"}}>
              Nilai:
            </label>
            <input style={{float: "right"}} type="number" name="nilai" value={input.nilai} onChange={handleChange}/>
            <br/>
            <br/>
            <div style={{width: "100%", paddingBottom: "20px"}}>
              <button style={{ float: "right"}}>submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default DaftarMahasiswaForm