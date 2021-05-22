import React, {useContext, useEffect} from "react"
import axios from "axios"
import {DaftarMahasiswaContext} from "./DaftarMahasiswaContext"

const DaftarMahasiswaList = () =>{

  const [daftarMahasiswa, setDaftarMahasiswa] = useContext(DaftarMahasiswaContext)

  useEffect( () => {
    if (daftarMahasiswa.lists === null){
      axios.get(`http://backendexample.sanbercloud.com/api/student-scores`)
      .then(res => {
        setDaftarMahasiswa({
          ...daftarMahasiswa, 
          lists: res.data.map(el=>{ 
            return {id: el.id,
              name: el.name, 
              matkul: el.matkul, 
              nilai: el.nilai 
            }
          })
        })
      })
    }
  }, [setDaftarMahasiswa, daftarMahasiswa])

  const handleEdit = (event) =>{
    let ID_STUDENt = parseInt(event.target.value)
    setDaftarMahasiswa({...daftarMahasiswa, selectedId: ID_STUDENt, statusForm: "changeToEdit"})
  }

  const handleDelete = (event) => {
    let ID_STUDENt = parseInt(event.target.value)

    let newLists = daftarMahasiswa.lists.filter(el => el.id !== ID_STUDENt)

    axios.delete(`http://backendexample.sanbercloud.com/api/student-scores/${ID_STUDENt}`)
    .then(res => {
      console.log(res)
    })
          
    setDaftarMahasiswa({...daftarMahasiswa, lists: [...newLists]})
    
  }

  function getIndeks(nilai){
    if (nilai >= 80){
      return("A")
    }else if(nilai >= 70 && nilai < 80){
      return ("B")
    }else if(nilai >=60 && nilai < 70){
      return ("C")
    }else if (nilai >= 50 && nilai < 60){
      return ("D")
    }else{
      return("E")
    }
  }

  return(
    <>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Mata kuliah</th>
            <th>Nilai</th>
            <th>Indeks Nilai</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>

            {
              daftarMahasiswa.lists !== null && daftarMahasiswa.lists.map((item, index)=>{
                return(                    
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.name}</td>
                    <td>{item.matkul}</td>
                    <td>{item.nilai}</td>
                    <td>
                    {getIndeks(item.nilai)}
                    </td>
                    <td>
                      <button onClick={handleEdit} value={item.id}>Edit</button>
                      &nbsp;
                      <button onClick={handleDelete} value={item.id}>Delete</button>
                    </td>
                  </tr>
                )
              })
            }
        </tbody>
      </table>      
    </>
  )
}

export default DaftarMahasiswaList